import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex fixed w-[100vw] items-center h-[60px] px-4 border-b bg-white">
      <div className="flex-1 min-w-0">
        <h1 className="font-bold text-xl">
          <Link href="/">Todo リスト</Link>
        </h1>
      </div>
      <Button size="lg">
        <Link href="/create/">新規追加</Link>
      </Button>
    </header>
	)
}