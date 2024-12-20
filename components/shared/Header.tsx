import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          ></Image>
        </Link>
        <div className="flex w-32 justify-end gap-3">
          {/* <SignedOut>
            <Button asChild className="rounded-full" size="lg"></Button>
          </SignedOut> */}
        </div>
      </div>
    </header>
  );
}
