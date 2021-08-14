import { IFood } from '../../models/food.model';
import { IUpdateFood } from '../../models/update-food.model';

export interface IProps {
  food: IFood;
  available: boolean;
  handleEditFood: (food: IUpdateFood) => void;
  handleDelete: (id: number) => void;
}

export interface IStyleProps {
  available: boolean;
}
