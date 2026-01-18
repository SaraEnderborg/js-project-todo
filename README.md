https://react-zustand-todo.netlify.app/

# Todo App

A responsive and accessible Todo application built with **React**, **Zustand**, and **Material UI**.

The app allows users to manage tasks efficiently with global state management, persistent storage, and a clean, responsive user interface.

---

## Usage

1. Enter a task in the input field and click **Add** to create a new todo.
2. Tasks are displayed under **Uncompleted** or **Completed** depending on their status.
3. Use the checkbox to mark a task as completed or uncompleted.
4. Click the trash icon to delete a task.
5. Use the **Complete all** button to mark all uncompleted tasks as completed.
6. Task counters update automatically to show:
   - Total tasks
   - Completed tasks
   - Uncompleted tasks

Tasks are saved automatically and persist after refreshing the page.

---

## Features

- Add and remove tasks
- Mark tasks as completed or uncompleted
- Complete all tasks with a single action
- Global state management using Zustand (no prop-drilling)
- Persistent storage using localStorage
- Live task counters (total / completed / uncompleted)
- Responsive layout (mobile → desktop)
- Accessible UI (labels, aria-labels, semantic HTML)
- Empty states for improved user experience
- Custom Material UI theme

---

## Accessibility & Performance

- Built following accessibility best practices
- Semantic headings and labelled form elements
- aria-labels for interactive components
- Responsive design using Material UI layout components
- Tested with Lighthouse (Accessibility score ≥ 95)

---
