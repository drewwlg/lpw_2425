import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TaskItem } from '../../task-item';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  private todoService = inject(TodoService);
  addTask(description: string) {
    this.todoService.addTask({ description, done: false });
  }
}
