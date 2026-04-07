# Instructions for AI: Adding a New Event

This repository uses a highly composable, prop-driven architecture (similar to shadcn/ui) for generating event pages. There are no centralized "mega-objects" for event data. Instead, you will create a constants file for the event's dates/links and then compose the page directly using atomic base components.

Follow these steps to add a new event (e.g., `event-3`):

## 1. Create the Constants File

Create a new file in `src/consts/` (e.g., `src/consts/event-3.ts`). This file should export the core event timing and registration constants.

```typescript
// src/consts/event-3.ts
export const EVENT_START = new Date("2026-06-15T10:00:00+05:30");
export const EVENT_END = new Date("2026-06-15T14:00:00+05:30");
export const EVENT_REGISTRATION_END = new Date("2026-06-01T23:59:59+05:30");
export const REGISTRATION_LINK = "https://forms.gle/your-link-here";
```

## 2. Add Assets

Ensure any required static assets (gallery images, speaker photos) are placed in the `public/` directory (e.g., `public/gallery/event3-img1.jpeg` or `public/speaker.jpg`).

## 3. Create the Route File

This project uses **TanStack Router**. Create a new route file in `src/routes/` (e.g., `src/routes/event-3.tsx`).

### Boilerplate Setup

```tsx
import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import Speakers from "@/components/Speakers";
import SpeakerCard from "@/components/SpeakerCard";
import Venue from "@/components/Venue";
import CTA from "@/components/CTA";
import ExpectedAttendence from "@/components/ExpectedAttendence";
import AddToCalendar from "@/components/AddToCalendar";
import {
  EVENT_START,
  EVENT_END,
  EVENT_REGISTRATION_END,
  REGISTRATION_LINK,
} from "@/consts/event-3";

export const Route = createFileRoute("/event-3")({
  component: EventThreePage,
});

const eventImages = ["/gallery/new-img1.jpeg", "/gallery/new-img2.jpeg"];
```

### Component Composition Rules

When building the `EventThreePage` component, use the following base components. **Pass data directly via props and React children.**

#### `HeroSection`

Pass the image array and registration link:

```tsx
<HeroSection images={eventImages} registrationLink={REGISTRATION_LINK} />
```

#### `Speakers` & `SpeakerCard`

Wrap `SpeakerCard`s inside the `Speakers` component.

```tsx
<Speakers description="Meet our speakers...">
  <SpeakerCard
    name="Jane Doe"
    link="https://linkedin.com/in/janedoe"
    title={
      <>
        Senior Engineer, <br /> Tech Corp
      </>
    }
    imageSrc="/jane.jpg"
  />
</Speakers>
```

#### `Venue`

The venue component requires text fields for the date and time.  
_Note: If the event is online or has no map coordinates, set `showMap={false}`._

```tsx
<Venue
  title={
    <>
      Meet us at <br />
      <span className="text-primary">Main Hall</span>
    </>
  }
  subtitle="123 Example Street"
  dateDay="15 JUN"
  dateYear="2026"
  timeFrom="10:00 AM"
  timeTo="02:00 PM"
  showMap={true} // or false for no map
  mapCoordinates={[{ x: 345, y: 430, name: "Main Hall" }]}
/>
```

#### `ExpectedAttendence` & `AddToCalendar`

These should generally be wrapped in a container section.

```tsx
<section className="container max-w-7xl mx-auto mb-20 px-8" id="attendance">
  <div className="flex gap-10 flex-col lg:flex-row items-center justify-center lg:items-stretch mx-auto mt-20">
    <ExpectedAttendence count={100} label="Attendees" prefix="+" suffix="+" />
    <AddToCalendar eventStart={EVENT_START} eventEnd={EVENT_END} />
  </div>
</section>
```

#### `CTA`

Pass the imported registration constants.

```tsx
<CTA
  registrationEndDate={EVENT_REGISTRATION_END}
  registrationLink={REGISTRATION_LINK}
/>
```
