export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <main className="flex flex-col items-center gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          TimeFlow
        </h1>
        <p className="text-muted-foreground text-lg">
          Initialize Next.js project and build the high-fidelity Landing Page MVP
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}