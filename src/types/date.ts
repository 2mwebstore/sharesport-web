export function formatDateKhmer(date: string | Date) {
  return new Intl.DateTimeFormat("km-KH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date(date));
}
