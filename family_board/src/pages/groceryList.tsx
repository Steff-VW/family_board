import GroceryForm from "@/components/groceryList/groceryForm";
import GroceryList from "@/components/groceryList/groceryList";
import Header from "@/components/header/header";
import GroceryItem from "@/interfaces/groceryItem";
import GroceryItemResponse from "@/interfaces/groceryItemResponse";
import styles from "@/styles/components/groceryList/groceryList.module.css";
import { useEffect, useState } from "react";

const Groceries = () => {
    const [list, setList] = useState<GroceryItemResponse>({message: "", items: []});
    const [item, setItem] = useState<string>("");
    const [amount, setAmount] = useState<number>(1);
    const [error, setError] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);

        const getGroceryList = async () => {
        try {
            const response = await fetch("https://localhost:7279/grocery/items", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },});
            if (!response.ok) {
                throw new Error(await response.text());
            }
            const data = await response.json();
            setList(data);
            setError(null);
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
                    throw new Error(await response.text());
                }
                await getGroceryList();
                setItem("");
                setAmount(1);
                setError(null);
            }
        } catch (error: any) {
            setError(error.message || "An unexpected error occurred. Please try again later.");
        }
    }

const toggleDialog = () => {
    setOpen(prevOpen => !prevOpen);
}

    const removeItem = async (index: number) => {
        const itemToRemove = list.items[index]
        try {
            const response = await fetch(`https://localhost:7279/grocery/remove/${itemToRemove.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            if (!response.ok) {
                throw new Error(await response.text());
            }
            await getGroceryList()
            setError(null);
        } catch (error:any) {
            setError(error.message || "An unexpected error occurred while removing the item. Please try again later.");
        }
    }

    useEffect(() => {
        getGroceryList();
    });

    return (
        <div>
            <Header />
            <div className={styles.container}>
                {error && <h2 className={styles.error}>{error}</h2>}
                <h2>{list.items.length !== 0 ? `${list.items.length} items` : "No items in the list"}</h2>
                    <GroceryList list={list} removeItem={removeItem}/>
                <div>
                    <GroceryForm setItem={setItem} setAmount={setAmount} item={item} amount={amount} addItem={addItem} toggleDialog={toggleDialog} open={open}/>
                </div>
            </div>
        </div>
    );
}

export default Groceries;