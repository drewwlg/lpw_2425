import { Injectable } from '@angular/core';
import { TaskItem } from '../task-item';
import { TodoStorageService } from './todo-storage.service';

const todoStorageKey = 'todo_list';

const allTasks: TaskItem[] = [
  {
    description: 'Faire la vaisselle',
    done: false,
  },
  {
    description: 'Sortir le chien',
    done: true,
  },
  {
    description: 'Acheter du pain',
    done: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  /*private allTasks: TaskItem[] = [
    {
      description: 'Faire la vaisselle',
      done: false,
    },
    {
      description: 'Sortir le chien',
      done: true,
    },
    {
      description: 'Acheter du pain',
      done: false,
    },
  ];

  gettasks(): TaskItem[] {
    return this.allTasks;
  }

  addTask(task: TaskItem) {
    this.allTasks.push(task);
  }*/

  allTasks: TaskItem[];

  constructor(private todoStorageService: TodoStorageService) {
    this.allTasks = todoStorageService.getData(todoStorageKey) || allTasks;
  }

  addTask(task: TaskItem) {
    this.allTasks.push(task);
    this.todoStorageService.setData(todoStorageKey, this.allTasks);
  }

  deleteTask(task: TaskItem) {
    const index = this.allTasks.indexOf(task);
    if (index > -1) {
      this.allTasks.splice(index, 1);
      this.todoStorageService.setData(todoStorageKey, this.allTasks);
    }
  }

  getTasks(): TaskItem[] {
    return this.allTasks;
  }
}
