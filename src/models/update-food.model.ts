import { IFood } from './food.model';

export type IUpdateFood = Omit<IFood, 'id' | 'available'>;
