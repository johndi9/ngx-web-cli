export const stopEventPropagation = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
};
