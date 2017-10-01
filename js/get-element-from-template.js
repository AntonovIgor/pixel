/**
 * Created by Cannibal on 30.09.2017.
 */
export const getElementFromTemplate = (htmlString) => {
  const container = document.createElement(`template`);
  container.innerHTML = htmlString;
  return container.content;
};
