export interface ICSOptions {
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: string;
  url?: string;
}

export function downloadICS({
  title,
  start,
  end,
  description,
  location,
  url,
}: ICSOptions) {
  const urlString = url ? `\nURL:${url}` : "";
  const ics = `BEGIN:VCALENDAR
PRODID:-//${title}//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
DTSTART:${formatICSDate(start)}
DTEND:${formatICSDate(end)}
DTSTAMP:${formatICSDate(new Date())}
UID:${crypto.randomUUID()}
CREATED:${formatICSDate(new Date())}
LAST-MODIFIED:${formatICSDate(new Date())}
LOCATION:${location}
DESCRIPTION:${description.replace(/\n/g, "\\n")}${urlString}
STATUS:CONFIRMED
SUMMARY:${title}
TRANSP:OPAQUE

BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Reminder: ${title} is tomorrow!
END:VALARM

BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:Reminder: ${title} starts in 30 minutes!
END:VALARM

END:VEVENT
END:VCALENDAR
`;

  const blob = new Blob([ics], { type: "text/calendar" });
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = "event.ics";
  a.click();
  URL.revokeObjectURL(objectUrl);
}

function formatICSDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
