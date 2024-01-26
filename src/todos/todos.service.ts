import { Injectable, NotFoundException } from '@nestjs/common';
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

  update(id: string, todo: Todo) {
    const todoToUpdate = this.todos.find(todo => todo.id === +id);
    if (!todoToUpdate) {
      return new NotFoundException('booo did you fing his todo');
    }

    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }

    const updatedTodos = this.todos.map(t => t.id !== +id ? t : todoToUpdate);
    this.todos = [...updatedTodos];
    return {
      updatedTodo: 1,
      todo: todoToUpdate,
    }
  }

  delete(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter(t => t.id !== +id)];
    if (this.todos.length < nbOfTodosBeforeDelete) {
      return {
        deletedTodo: 1,
        nbTodos: this.todos.length,
      };
    } else {
      return {
        deletedTodo: 0,
        nbTodos: this.todos.length,
      };
    }
  }
}
