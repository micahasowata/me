export const formatDate = (date: Date) => {
  const localeDate = date.toLocaleDateString();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [day, month, year] = localeDate.split("/").map(Number);

  const monthName = month !== undefined && months[month - 1];

  return `${monthName} ${day}, ${year}`;
};
