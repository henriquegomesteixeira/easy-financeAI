"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDiaLogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold lg:w-fit"
        onClick={() => setDiaLogIsOpen(true)}
      >
        <span>Adicionar</span>
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDiaLogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
