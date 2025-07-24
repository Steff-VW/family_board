import GroceryItem from "@/interfaces/groceryItem";

type groceryListProps = {
    list: GroceryItem[];
    removeItem: (index: number) => void;
}

const GroceryList = ({list, removeItem}: groceryListProps) => {
    return (
         <div>
            <ul>
            {list.map((groceryItem, index) => (
                <li key={index}>
                {groceryItem.amount} {groceryItem.item}
                <button onClick={() => {
                    removeItem(index);
                }}>-</button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default GroceryList;