import HeroSection from "@/components/HeroSection";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

const events = [

  {
    id: "event-2",
    title: "A Researcher's Guide",
    dayMonth: "09 APR",
    year: "2026",
    location: "Online via Zoom",
    link: "/event-2",
  },
    {
    id: "event-1",
    title: "Human computer interactions and Path to higher studies",
    dayMonth: "13 DEC",
    year: "2025",
    location: "Electrical Seminar Room, University of Moratuwa",
    link: "/event-1",
  },
];

function App() {
  return (
    <>
      <HeroSection images={["/gallery/img1.jpeg", "/gallery/img2.jpeg", "/gallery/img3.jpeg"]} />
      <section className="container mx-auto my-20" id="events">
        <div className="px-4 space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="heading-2 font-serif">Our Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our event timeline and choose the session that fits your
              schedule.
            </p>
          </div>
          <div className="grid gap-12 w-fit mx-auto lg:pl-[10%]">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-start"
              >
                <div className="relative w-full lg:w-48 xl:w-64 pt-2">
                  <div className="text-5xl md:text-6xl font-extrabold leading-none whitespace-nowrap">
                    {event.dayMonth}
                  </div>
                  <div className="mt-2 text-xl md:text-2xl text-foreground/60">
                    {event.year}
                  </div>
                  <div className="hidden lg:block absolute top-5 -right-6 xl:-right-2 h-[calc(100%+3rem)] border-r-2 border-dashed border-primary/30"></div>
                </div>
                <div className="relative w-full lg:flex-1 max-w-3xl">
                  <div className="absolute left-[20px] top-4 h-[calc(100%+2rem)] border-l-2 border-dashed border-primary/30 lg:hidden"></div>
                  <div className="relative pl-12 lg:pl-0">
                    <div className="rounded-2xl border border-border/60 bg-background/70 p-6 md:p-8 shadow-sm">
                      <h3 className="heading-3 font-serif">{event.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {event.location}
                      </p>
                      <Link
                        to={event.link}
                        className="mt-6 inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline"
                      >
                        View event
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
