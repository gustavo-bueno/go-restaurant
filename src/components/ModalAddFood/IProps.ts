import { IFood } from '../../models/food.model';

export interface IProps {
  setIsOpen: () => void;
  handleAddFood: (food: IFood) => void;
  isOpen: boolean;
}
