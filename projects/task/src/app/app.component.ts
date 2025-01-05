import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { TodoService } from './services/todo.service';
import { TaskItem } from './task-item';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListComponent, AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Liste de tâches';
}
