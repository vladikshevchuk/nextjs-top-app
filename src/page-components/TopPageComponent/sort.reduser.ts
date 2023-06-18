import { SortEnum } from "@/components/Sort/Sort.props";
import { ProductModel } from "../../../interfaces/product.interface";

export type SortActions = { type: SortEnum.Rating } | { type: SortEnum.Price } | { type: 'reset', initialState: ProductModel[]};

export interface SortReduserState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReduser = (
  state: SortReduserState,
  action: SortActions
): SortReduserState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    case 'reset':
      return {
        sort: SortEnum.Rating,
        products: action.initialState,
      }

    default:
      throw new Error("Не верный тип сортировки");
  }
};
