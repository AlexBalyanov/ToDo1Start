import {IItem} from "../types";

export interface IViewItem {
  id: string;
  name: string;
  render(item: IItem): HTMLElement;
  setCopyHandler(handleCopyItem: Function): void;
  setDeleteHandler(handleDeleteItem: Function): void;
  setEditHandler(handleEditItem: Function): void;
}

export interface IViewItemConstructor {
  new (template: HTMLTemplateElement): IViewItem;
}

export class Item implements IViewItem {
  protected itemElement: HTMLElement;
  protected title: HTMLElement;
  protected _id: string;
  protected copyButton: HTMLButtonElement;
  protected deleteButton: HTMLButtonElement;
  protected editButton: HTMLButtonElement;
  protected handleCopyItem: Function;
  protected handleDeleteItem: Function;
  protected handleEditItem: Function;

  constructor(template: HTMLTemplateElement) {
    this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
    this.title = this.itemElement.querySelector('.todo-item__text');
    this.copyButton = this.itemElement.querySelector('.todo-item__copy');
    this.deleteButton = this.itemElement.querySelector('.todo-item__del');
    this.editButton = this.itemElement.querySelector('.todo-item__edit');
  };

  set id(value: string) {
    this._id = value;
  };

  get id() {
    return this._id || '';
  };

  set name(value: string) {
    this.title.textContent = value;
  };

  get name() {
    return this.title.textContent || '';
  };

  setCopyHandler(handleCopyItem: Function) {
    this.handleCopyItem = handleCopyItem;
    this.copyButton.addEventListener('click', (evt) => {
      this.handleCopyItem(this);
    });
  };

  setDeleteHandler(handleDeleteItem: Function) {
    this.handleDeleteItem = handleDeleteItem;
    this.deleteButton.addEventListener('click', (evt) => {
      this.handleDeleteItem(this);
    });
  };

  setEditHandler(handleEditItem: Function) {
    this.handleEditItem = handleEditItem;
    this.editButton.addEventListener('click', (evt) => {
      this.handleEditItem(this);
    });
  };

  render(item: IItem) {
    this.name = item.name;
    this.id = item.id;
    return this.itemElement;
  };
}