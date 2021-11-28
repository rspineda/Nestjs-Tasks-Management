import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';


@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {};

  // @Get()
  // getTasks(
  //   @Query() filterDto: GetTasksFilterDto
  // ): Task[] {
  //   /* 
  //   if any filters defined --> getTasksWithFilters. Otherwise --> just get all tasks
  //   Examples:
  //   ../tasks 
  //   ../tasks?status=IN_PROGRESS
  //   ../tasks?status=OPEN&search=cleaning
  //   */
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  @Get('/:id')
  getTaskById(@Param('id') id:string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
  @Param('id') id: string,
  @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> { 
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status);
  }
}



/* POST body example for creating a task
{
    "title": "Tissot",
    "description" : "Find the nice Tissot watch"
}
*/