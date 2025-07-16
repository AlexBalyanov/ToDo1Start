export interface IPopup {
  content: HTMLElement;
  open(): void;
  close(): void;
}

export class Popup implements IPopup {
  protected _content: HTMLElement;
  protected closeButton: HTMLButtonElement;

  constructor(protected container: HTMLElement) {
    this.closeButton = container.querySelector('.popup__close');
    this._content = container.querySelector('.popup__container');

    this.closeButton.addEventListener('click', this.close.bind(this));
    this.container.addEventListener('click', this.close.bind(this));
    this._content.addEventListener('click', (evt) => evt.stopPropagation());
  };

  set content(value: HTMLElement) {
    this._content.replaceChildren(value);
  };

  open() {
    this.container.classList.add('popup_is-opened');
  };

  close() {
    this.container.classList.remove('popup_is-opened');
    this.content = null;
  };
}