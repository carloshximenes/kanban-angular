import { ListType } from '../types/list-types';

type KanbanList = {
  label: string;
  value: ListType;
  icon: string;
  draggable: boolean;
  droppable: boolean;
  droppableOrigin: ListType[];
};

export const KANBAN_LIST: KanbanList[] = [
  {
    label: 'To Do',
    value: 'toDo',
    icon: 'pi pi-list',
    draggable: true,
    droppable: true,
    droppableOrigin: ['doing'],
  },
  {
    label: 'Doing',
    value: 'doing',
    icon: 'pi pi-cog',
    draggable: true,
    droppable: true,
    droppableOrigin: ['toDo', 'done'],
  },
  {
    label: 'Done',
    value: 'done',
    icon: 'pi pi-check-circle',
    draggable: true,
    droppable: true,
    droppableOrigin: ['doing'],
  },
];
