import Paragraph from '../HTMLElements/Paragraph';
import Validator from './Validator';

export default class GeolocationData {
  create(nameOfElement: string, textContent: string) {
    if (Validator.isName(nameOfElement)) {
      const element = document.getElementById(nameOfElement);
      if (!element) {
        return new Paragraph(nameOfElement, textContent);
      }
      element.textContent = textContent;
    }
  }
}
