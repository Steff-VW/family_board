import GroceryForm from "@/components/groceryList/groceryForm";
import GroceryList from "@/components/groceryList/groceryList";
import Header from "@/components/header/header";
import styles from "@/styles/components/groceryList/groceryList.module.css";
import { useState } from "react";

const groceryList = () => {
    const [list, setList] = useState<string[]>([]);
    const [item, setItem] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const addItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(amount <= 0) {
                throw new Error("Amount must be greater than zero.");
            }
            if(item.trim() === "") {
                throw new Error("Item cannot be empty.");
            } else {
                setList([...list, `${amount} ${item}`]);
                setItem("");
                setAmount(0);
                setError(null);
            }
        } catch (error: any) {
            setError(error.message || "An unexpected error occurred. Please try again later.");
        }
    }


    if(list.length === 0) {
        return(
            <div>
                <Header />
                <div className={styles.container}>
                    {error && <h2 className={styles.error}>{error}</h2>}
                    <h1>No items in your grocery list.</h1>
                    <GroceryForm setItem={setItem} setAmount={setAmount} item={item} amount={amount} addItem={addItem}/>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className={styles.container}>
                {error && <h2 className={styles.error}>{error}</h2>}
                    <h1>Grocery List</h1>    
                    <GroceryList list={list} setList={setList} />
                <div>
                    <GroceryForm setItem={setItem} setAmount={setAmount} item={item} amount={amount} addItem={addItem}/>
                </div>
            </div>
        </div>
    );
}

export default groceryList;