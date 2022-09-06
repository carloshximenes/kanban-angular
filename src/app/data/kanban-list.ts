import { ListType } from '../types/list-types';

type KanbanList = {
  label: string;
  value: ListType;
  draggable: boolean;
  droppable: boolean;
  droppableOrigin: ListType[];
};

export const KANBAN_LIST: KanbanList[] = [
  {
    label: 'To Do',
    value: 'toDo',
    draggable: true,
    droppable: true,
    droppableOrigin: ['doing'],
  },
  {
    label: 'Doing',
    value: 'doing',
    draggable: true,
    droppable: true,
    droppableOrigin: ['toDo', 'done'],
  },
  {
    label: 'Done',
    value: 'done',
    draggable: true,
    droppable: true,
    droppableOrigin: ['doing'],
  },
];
