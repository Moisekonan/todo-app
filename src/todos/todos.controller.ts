import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

// localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService){}

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.todosService.findOne(id);
    }

    @Get()
    findAll(): Todo[] {
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body() newTodo: Todo) {
        console.log('new', newTodo);
        this.todosService.create(newTodo);
    }
}
