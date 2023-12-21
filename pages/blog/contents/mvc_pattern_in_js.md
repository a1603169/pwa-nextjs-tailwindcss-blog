---
title: 'MVC패턴 (feat. JavaScript)'
date: '2023-12-22'
tags: ['FE', 'BE', 'CS', 'General']
---

MVC (Model-View-Controller) 패턴을 사용하여 간단한 투두 리스트를 구현한 JavaScript 코드를 보여드리겠습니다. 이 코드는 투두 리스트의 항목을 추가하고 삭제하는 간단한 기능을 구현합니다.

**모델 (Model):**
모델은 투두 리스트 항목을 저장하고 관리합니다.

```javascript
class TodoModel {
  constructor() {
    this.todos = [];
  }

  addTodo(todoText) {
    this.todos.push({ text: todoText, completed: false });
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  getTodos() {
    return this.todos;
  }
}
```

**뷰 (View):**
뷰는 투두 리스트를 표시하고 사용자 인터페이스와 상호 작용합니다.

```javascript
class TodoView {
  constructor() {
    this.model = null;
    this.todoList = document.getElementById('todo-list');
    this.todoInput = document.getElementById('todo-input');
    this.addButton = document.getElementById('add-button');
  }

  setModel(model) {
    this.model = model;
  }

  render() {
    this.todoList.innerHTML = '';
    this.model.getTodos().forEach((todo, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${todo.text}</span>
        <button data-index="${index}">Delete</button>
      `;
      listItem.querySelector('button').addEventListener('click', this.handleDelete.bind(this));
      this.todoList.appendChild(listItem);
    });
  }

  handleDelete(event) {
    const index = event.target.getAttribute('data-index');
    this.model.removeTodo(index);
    this.render();
  }
}
```

**컨트롤러 (Controller):**
컨트롤러는 사용자 입력을 처리하고 모델 및 뷰 간의 상호 작용을 조정합니다.

```javascript
class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.setModel(this.model);

    this.view.addButton.addEventListener('click', this.handleAdd.bind(this));
  }

  handleAdd() {
    const todoText = this.view.todoInput.value;
    if (todoText) {
      this.model.addTodo(todoText);
      this.view.todoInput.value = '';
      this.view.render();
    }
  }
}
```

HTML에서 불러오기:

```html
<div>
  <input type="text" id="todo-input" placeholder="Add a new todo">
  <button id="add-button">Add</button>
</div>
<ul id="todo-list"></ul>
```

이 예제에서는 간단한 투두 리스트 애플리케이션을 MVC 패턴으로 구현하였습니다. 모델은 투두 리스트 항목을 저장하고 관리하며, 뷰는 이 항목들을 표시하고 사용자 인터페이스와 상호 작용하며, 컨트롤러는 사용자 입력을 처리하고 모델 및 뷰 간의 상호 작용을 관리합니다.