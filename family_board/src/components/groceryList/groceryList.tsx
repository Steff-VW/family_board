import GroceryItem from "@/interfaces/groceryItem";
import GroceryItemResponse from "@/interfaces/groceryItemResponse";
import styles from "@/styles/components/groceryList/groceryList.module.css";

type groceryListProps = {
    list: GroceryItemResponse;
    removeItem: (index: number) => void;
}

const GroceryList = ({list, removeItem}: groceryListProps) => {
    return (
         <div className={styles.groceryList}>
            <ul className={styles.listContainer}>
            {list.items.map((groceryItem, index) => (
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