export const parseStringToDate = (date: Date | string) => {
  if (!date || date instanceof Date) { return date; }
  const arr = date.split('/');
  return new Date(Number(arr[ 0 ]), Number(arr[ 1 ] || 1), Number(arr[ 2 ] || 1));
};
