import { ListType } from '../types/list-types';

type KanbanList = {
  label: string;
  value: ListType;
  draggable: boolean;
  droppable: boolean;
};

export const KANBAN_LIST: KanbanList[] = [
  {
    label: 'To Do',
    value: 'toDo',
    draggable: true,
    droppable: false,
  },
  {
    label: 'Doing',
    value: 'doing',
    draggable: true,
    droppable: true,
  },
  {
    label: 'Done',
    value: 'done',
    draggable: true,
    droppable: true,
  },
];
