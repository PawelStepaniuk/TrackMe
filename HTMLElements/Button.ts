export default class Button {
  constructor(buttonText: string, onClickFunction: (event: MouseEvent) => void) {
    const button = document.createElement('button');

    button.textContent = buttonText;
    button.addEventListener('click', onClickFunction);
    document.body.appendChild(button);
  }
}
