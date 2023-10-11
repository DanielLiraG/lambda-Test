export const getLastDayOfMonth = (year: number, month: number) => {
  const nextMonth = new Date(year, month + 1, 1);
  const lastDay = new Date(nextMonth - 1);
  return lastDay.getDate();
};
