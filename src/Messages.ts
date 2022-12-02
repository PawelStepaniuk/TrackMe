export default class Message {
  static createError(name:string, errorText:string) {
    const element = document.createElement('div');
    element.id = name;
    document.body.appendChild(element);
    document.body.style.backgroundColor = 'rgb(148, 33, 75)';
    element.textContent = errorText;
    element.style.fontSize = '40px';
    return element;
  }

  static createSuccess(name:string, successText:string) {
    const element = document.createElement('div');
    element.id = name;
    document.body.appendChild(element);
    element.textContent = successText;
    element.style.fontSize = '10px';
    return element;
  }
}
