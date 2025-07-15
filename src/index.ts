import "./styles/styles.css";
import {todos} from "./utils/constants";
import {Item} from "./components/Item";
import {Form} from "./components/Form";
import {ToDoModel} from "./components/ToDoModel";
import {Page} from "./components/Page";

const contentElement = document.querySelector('.content') as HTMLElement;
const formElement = document.querySelector('.todos__form') as HTMLFormElement;
const itemTemplate = document.querySelector('#todo-item-template') as HTMLTemplateElement;
const formTemplate = document.querySelector('#todo-form-template') as HTMLTemplateElement;

const page = new Page(contentElement);

const todoArray = new ToDoModel();
todoArray.items = todos;

const todoForm = new Form(formTemplate);
todoForm.setHandler(handleFormSubmit);

page.formContainer = todoForm.render();

function handleFormSubmit(data: string) {
  todoArray.addItem(data);
  todoForm.clearValue();
  renderTodoItems();
}

function renderTodoItems() {
  page.todoContainer = todoArray.items.map((item) => {
    const todoItem = new Item(itemTemplate);
    const itemElement = todoItem.render(item);
    return (itemElement);
  }).reverse();
}

renderTodoItems();


