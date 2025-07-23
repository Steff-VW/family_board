
type GroceryListProps = {
    setAmount: (amt: number) => void;
    setItem: (item: string) => void;
    amount: number;
    item: string;
    addItem: (e: React.FormEvent<HTMLFormElement>) => void;
}

const GroceryForm = ({setAmount, setItem, addItem, item, amount}: GroceryListProps) => {
    return(
        <form onSubmit={addItem}>
            <input value={amount} type="number" name="" id="" placeholder="Amount" onChange={e => setAmount(parseInt(e.target.value))}/>
            <input value={item} type="text" name="" id="" placeholder="Name" onChange={e => setItem(e.target.value)}/>
            <button>+ add</button>
        </form>
    )
}

export default GroceryForm;