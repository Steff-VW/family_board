import GroceryItem from "@/interfaces/groceryItem";
import GroceryItemResponse from "@/interfaces/groceryItemResponse";
import styles from "@/styles/components/groceryList/groceryList.module.css";
import GroceryForm from "./groceryForm";

type groceryListProps = {
    list: GroceryItemResponse;
    removeItem: (index: number) => void;
    setAmount: (amt: number) => void;
    setItem: (item: string) => void;
    amount: number;
    item: string;
    addItem: (e: React.FormEvent<HTMLFormElement>) => void;
}

const GroceryList = ({list, removeItem, setAmount, setItem, addItem, item, amount}: groceryListProps) => {
    return (
         <div className={styles.groceryList}>
            <h2>{list.items.length !== 0 ? list.items.length == 1 ? `${list.items.length} item` : `${list.items.length} items` : "Your grocery list is empty!"}</h2>
            <ul className={styles.listContainer}>
            {list.items.map((groceryItem, index) => (
                <li key={index}>
                {groceryItem.amount} - {groceryItem.item}
                <button onClick={() => {
                    removeItem(index);
                }}>-</button>
                </li>
            ))}
            </ul>
              <GroceryForm setAmount={setAmount} setItem={setItem} addItem={addItem} item={item} amount={amount}/>
        </div>
    )
}

export default GroceryList;