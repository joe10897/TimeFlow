import { Hero } from "@/components/hero";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <section className="py-20 bg-muted/30">

        <div className="container mx-auto px-4 text-center text-muted-foreground italic">
          更多精彩功能即將推出...
        </div>
      </section>
    </main>
  );
}
