import { IFood } from '../../models/food.model';
import { IUpdateFood } from '../../models/update-food.model';

export interface IProps {
  setIsOpen: () => void;
  handleUpdateFood: (food: IUpdateFood) => void;
  isOpen: boolean;
  editingFood: IFood;
}

export interface FormDataProps {
  image: string;
  name: string;
  price: string;
  description: string;
}
