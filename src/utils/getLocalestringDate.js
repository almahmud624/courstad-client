export const getLocalestringDate = (createdAt) => {
  const parsedDate = new Date(createdAt);
  const day = parsedDate.toLocaleString("en-US", { day: "numeric" });
  const month = parsedDate.toLocaleString("en-US", { month: "long" });
  const year = parsedDate.toLocaleString("en-US", { year: "numeric" });
  const date = `${day} ${month} ${year}`;
  return date;
};
