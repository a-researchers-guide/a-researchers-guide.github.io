export function downloadICS(eventStart: Date, eventEnd: Date) {
  const ics = `BEGIN:VCALENDAR
PRODID:-//A Researchers Guide//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
DTSTART:${formatICSDate(eventStart)}
DTEND:${formatICSDate(eventEnd)}
DTSTAMP:${formatICSDate(new Date())}
UID:${crypto.randomUUID()}
CREATED:${formatICSDate(new Date())}
LAST-MODIFIED:${formatICSDate(new Date())}
LOCATION:Civil Auditorium, University of Moratuwa
DESCRIPTION:Join us at the Civil Auditorium, University of Moratuwa.
 Get directions: https://maps.google.com/?q=Civil+Auditorium,+University+of+Moratuwa
STATUS:CONFIRMED
SUMMARY:A Researcher's Guide Event
TRANSP:OPAQUE

BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Reminder: A Researcher's Guide Event is tomorrow!
END:VALARM

BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:Reminder: A Researcher's Guide Event starts in 30 minutes!
END:VALARM

END:VEVENT
END:VCALENDAR
`;

  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "event.ics";
  a.click();
  URL.revokeObjectURL(url);
}

function formatICSDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
