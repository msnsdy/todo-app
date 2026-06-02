"use client";

import Header from "@/components/layout/Header";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isDone, setIsDone] = useState(false);
  const handleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <>
      <Header />
      <main className="pbs-[60px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>完了</TableHead>
              <TableHead>タスク名</TableHead>
              <TableHead>期日</TableHead>
              <TableHead>備考欄</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className={`${isDone && "bg-gray-400"}`}>
              <TableCell className="font-medium">
                <Checkbox onCheckedChange={handleDone} />
                {isDone && "完了"}
              </TableCell>
              <TableCell className={`font-medium ${isDone && "line-through"}`}>タスク名が入ります</TableCell>
              <TableCell>2026年5月31日</TableCell>
              <TableCell>備考欄が入ります。テキストテキストテキスト</TableCell>
              <TableCell className="flex gap-x-[10px]">
                <Button size="lg" variant="outline">
                  <Link href="/create/">編集</Link>
                </Button>
                <Button size="lg" variant="destructive">
                  削除
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </>
  );
}
