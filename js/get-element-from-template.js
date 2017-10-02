export const getElementFromTemplate = (htmlString) => {
  const container = document.createElement(`template`);
  container.innerHTML = htmlString;
  return container.content;
};
