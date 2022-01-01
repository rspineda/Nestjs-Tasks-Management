import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
});

const mockUser = {
  username: 'Ariel',
  id: 'someId',
  password: 'somePassword',
  tasks: [],
};

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository: TasksRepository;

  beforeEach(async () => {
    //initialize a NestJS module with taksService and taksRepository
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    tasksRepository = module.get(TasksRepository);
  });

  describe('getTasks', () => {
    it('calls TasksRepository.getTasks and returns the result', () => {
      expect(tasksRepository.getTasks).not.toHaveBeenCalled();
      // call tasksService.getTasks, which should then call the getTasks' repository
      tasksService.getTasks(null, mockUser);
      expect(tasksRepository.getTasks).toHaveBeenCalled();
    });
  })
});