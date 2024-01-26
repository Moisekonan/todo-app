import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'todos App',
      description: 'mkmkkmokmomkomokmomo',
      done: false,
    },
    {
      id: 2,
      title: 'todos App222',
      description: 'mkmkkmokmomkomokmomo2222',
      done: false,
    },
    {
      id: 3,
      title: 'todos App33',
      description: 'mkmkkmokmomkomokmomo3333',
      done: true,
    },
  ];

  findOne(id: string) {
    return this.todos.find(todo => todo.id === +id)
  }

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo as Todo];
  }
}
