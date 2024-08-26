export const DateFormatter = (dateString: string) => {
  const dateOptions = {
    // date formats
    year: "numeric",
    month: "long",
    day: "numeric",

    // time formats
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  } as Intl.DateTimeFormatOptions;
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("en-US", dateOptions);
  return formatter.format(date);
};
