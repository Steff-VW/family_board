import GroceryItem from "./groceryItem";

export default interface GroceryItemResponse{
    message: string;
    items: GroceryItem[];
} 