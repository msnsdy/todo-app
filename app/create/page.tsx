"use client";

import * as React from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Create() {
  const [date, setDate] = React.useState<Date>();
  return (
    <main className="flex justify-center min-h-dvh items-center px-[20px]">
      <Card className="w-[700px]">
        <CardHeader>
          <CardTitle>タスク新規作成</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">タスク名</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="例）〇〇ページコーディング"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="deadline">期日</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      data-empty={!date}
                      className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                    >
                      {date ? (
                        format(date, "yyyy年M月d日", { locale: ja })
                      ) : (
                        <span>日付を選択</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      defaultMonth={date}
                      locale={ja}
                      weekStartsOn={1}
                      formatters={{
                        formatCaption: (date) =>
                          `${date.getFullYear()}年${date.getMonth() + 1}月`,
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="deadline">備考欄</Label>
                <Textarea id="note" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href="/">キャンセル</Link>
          </Button>
          <Button>作成</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
