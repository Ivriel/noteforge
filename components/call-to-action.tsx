import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          {/* Mengambil inspirasi dari "Build Your Mind" tapi lebih aksi-sentris */}
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready to Upgrade Your Workflow?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who have turned their scattered notes
            into a structured second brain. Fast, secure, and entirely yours.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="/">
                {/* Menambah kesan urgensi dan personal */}
                <span>Start Building For Free</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/">
                {/* Mengganti 'Book Demo' menjadi sesuatu yang lebih pas untuk personal notes */}
                <span>See How It Works</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
