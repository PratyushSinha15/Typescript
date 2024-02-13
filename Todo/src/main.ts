import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todosContainer = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: Event) => {
  e.preventDefault();
  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };

  todos.push(todo);// to push the todo object to the array
  todoInput.value = "";//to clear the input field
  renderTodo(todos);// render the todo object
};

const renderTodo = (todos:Todo[]) => {
  todosContainer.innerHTML = "";
  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isCompleted;
    checkbox.addEventListener("change", () => {
      todo.isCompleted = checkbox.checked;
    });

    const label = document.createElement("label");
    label.textContent = todo.title;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => deleteTodo(todo.id));

    todoDiv.append(checkbox, label, button);
    todosContainer.appendChild(todoDiv);
  });
};

function deleteTodo(id: string) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
  renderTodo(todos);
}


// This TypeScript code is for a simple To-Do list application. Here's a breakdown of what each part does:

// An interface Todo is defined to enforce a certain structure on todo items. Each todo item must have a title (string), isCompleted (boolean), and an id (string).

// An empty array todos of type Todo[] is created to store the todo items.

// It then gets references to the todosContainer div, the todoInput input field, and the myForm form from the DOM.

// An onsubmit event handler is attached to myForm. When the form is submitted, it prevents the default form submission behavior, creates a new todo item with the title from todoInput, a default isCompleted status of false, and a random id. This new todo item is then pushed to the todos array, the input field is cleared, and the renderTodo function is called to update the UI.

// The renderTodo function takes an array of todos as a parameter. It first clears the todosContainer, then for each todo, it creates a new div, adds the 'todo' class to it, and sets its inner HTML to include a checkbox (checked if the todo is completed), a label with the todo's title, and a delete button. This div is then appended to the todosContainer.

// The checkbox has an event listener that updates the isCompleted property of the corresponding todo item when the checkbox is clicked.

// The delete button has an event listener that calls the deleteTodo function with the current todo's id when the button is clicked.

// The deleteTodo function takes an id as a parameter, finds the index of the todo with that id in the todos array, and if it finds it, removes that todo from the array. It then calls renderTodo to update the UI.