"use client";

import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/page-title";
import { DataTable } from "@/components/data-table";
import ThemeSwitch from "@/components/theme-switch";

interface Setting {
  category: string;
  value: string | number | boolean;
}

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category",
    maxSize: 50,
  },
  {
    accessorKey: "value",
    header: "Value",
    maxSize: 50,
    cell: ({ row }) => {
      const original = row.original;
      if (original.category === "Theme") {
        return <ThemeSwitch />;
      }
      return <span>{String(original.value)}</span>;
    },
  },
];

const data: Setting[] = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
