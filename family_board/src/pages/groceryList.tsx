import GroceryForm from "@/components/groceryList/groceryForm";
import GroceryList from "@/components/groceryList/groceryList";
import Header from "@/components/header/header";
import GroceryItem from "@/interfaces/groceryItem";
import styles from "@/styles/components/groceryList/groceryList.module.css";
import { use, useEffect, useState } from "react";

const Groceries = () => {
    const [list, setList] = useState<GroceryItem[]>([]);
    const [item, setItem] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

        const getGroceryList = async () => {
        try {
            const response = await fetch("https://localhost:7279/grocery/items", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },});
            if (!response.ok) {
                throw new Error("Failed to fetch the grocery list.");
            }
            else {
                const data = await response.json();
                setList(data);
                setError(null);
            }
        } catch (error: any) {
            setError(error.message || "An unexpected error occurred while fetching the grocery list. Please try again later.");
        }
    }

    const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(item.trim() !== "" && amount > 0) {
                const response = await fetch("https://localhost:7279/grocery/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({item: item, amount: amount})
                });
                if (!response.ok) {
                    throw new Error("Failed to update the grocery list.");
                }
                await getGroceryList();
                setItem("");
                setAmount(0);
                setError(null);
            }
        } catch (error: any) {
            setError(error.message || "An unexpected error occurred. Please try again later.");
        }
    }

    const removeItem = async (index: number) => {
        const itemToRemove = list[index]
        try {
            const response = await fetch(`https://localhost:7279/grocery/remove/${itemToRemove.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            if (!response.ok) {
                throw new Error("Failed to remove the item from the grocery list.");
            }
            const newList = list.filter((_, i) => i !== index);
            await getGroceryList()
            setList(newList);
            setError(null);
        } catch (error:any) {
            setError(error.message || "An unexpected error occurred while removing the item. Please try again later.");
        }
    }

    useEffect(() => {
        getGroceryList();
    }, []);

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
                    <GroceryList list={list} removeItem={removeItem}/>
                <div>
                    <GroceryForm setItem={setItem} setAmount={setAmount} item={item} amount={amount} addItem={addItem}/>
                </div>
            </div>
        </div>
    );
}

export default Groceries;