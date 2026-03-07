import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-16 md:pt-32 md:pb-10">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto flex size-fit items-center gap-2">
          <Image src="/noteforge-logo.png" alt="Noteforge Logo" width={100} height={100} />
        </Link>

        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} NoteForge, All rights reserved
        </span>
      </div>
    </footer>
  );
}
