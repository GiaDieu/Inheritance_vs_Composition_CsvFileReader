export const dateStringToDate = (dateString: string): Date => {
  const dateStringToDate = dateString.split("/");
  const date = dateStringToDate.map((value: string): number => {
    return parseInt(value);
  });

  return new Date(date[2], date[1] - 1, date[0]);
};
