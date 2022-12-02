export default class Paragraph {
  constructor(elementID: string, text: string) {
    const element = document.getElementById(elementID);
    const isElementExist = typeof element !== 'undefined' && element != null;

    if (!isElementExist) {
      const newElement = document.createElement('p');
      newElement.id = elementID;
      newElement.setAttribute('id', elementID);
      newElement.textContent = text;
      document.body.appendChild(newElement);
    }
  }
}
