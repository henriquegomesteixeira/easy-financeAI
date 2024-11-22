"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"; // Importa as funções e tipos essenciais para criar tabelas

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"; // Componentes estilizados para criar a estrutura da tabela
import AlertHasData from "./alert-has-data"; // Alerta exibido quando não há dados
import { useState } from "react";
import { ArrowDownUp, MoveDown, MoveUp } from "lucide-react"; // Ícones de ordenação

// Define o tipo genérico das props que o componente recebe
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]; // Colunas da tabela
  data: TData[]; // Dados a serem exibidos
}

// Componente principal que renderiza a tabela
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  // Estado que armazena o estado atual da ordenação
  const [sorting, setSorting] = useState<SortingState>([]);

  // Configura a tabela com base nos dados, colunas e estado
  const table = useReactTable({
    data, // Dados a serem exibidos
    columns, // Definições das colunas
    state: {
      sorting, // Passa o estado de ordenação
    },
    onSortingChange: setSorting, // Atualiza o estado de ordenação ao interagir com as colunas
    getCoreRowModel: getCoreRowModel(), // Modelo básico de linhas
    getSortedRowModel: getSortedRowModel(), // Modelo de linhas ordenadas
  });

  return (
    <div className="rounded-md lg:border">
      {/* Estrutura da tabela */}
      <Table>
        {/* Cabeçalho da tabela */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {/* Renderiza os cabeçalhos das colunas */}
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="cursor-pointer"
                  // Define o handler de ordenação se a coluna permitir e não for "actions"
                  onClick={
                    header.column.getCanSort() && header.id !== "actions"
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  }
                >
                  {header.isPlaceholder
                    ? null // Ignora placeholders
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(), // Renderiza o cabeçalho usando React Table
                      )}
                  {/* Ícones de ordenação */}
                  {header.id !== "actions" && (
                    <>
                      {{
                        asc: <MoveDown className="inline h-4 w-4" />, // Ícone para ordem ascendente
                        desc: <MoveUp className="inline h-4 w-4" />, // Ícone para ordem descendente
                      }[header.column.getIsSorted() as string] ?? (
                        <ArrowDownUp className="inline h-4 w-4" /> // Ícone padrão para colunas ordenáveis
                      )}
                    </>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        {/* Corpo da tabela */}
        <TableBody>
          {/* Verifica se há dados para exibir */}
          {table.getRowModel().rows?.length ? (
            // Renderiza as linhas com os dados
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"} // Define estado de seleção (se aplicável)
              >
                {/* Renderiza as células visíveis */}
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            // Caso não haja dados, exibe uma mensagem de alerta
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <AlertHasData /> {/* Componente de alerta personalizado */}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
