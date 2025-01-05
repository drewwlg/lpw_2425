import { Component, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TaskItem } from '../../task-item';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  allTasks: TaskItem[];
  constructor(private todoService: TodoService) {
    this.allTasks = this.todoService.getTasks();
  }

  removeItem(task: TaskItem) {
    this.todoService.deleteTask(task);
  }
}
