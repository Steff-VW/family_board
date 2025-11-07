import styles from '../../styles/components/groceryList/groceryForm.module.css'


type GroceryListProps = {
    setAmount: (amt: number) => void;
    setItem: (item: string) => void;
    amount: number;
    item: string;
    addItem: (e: React.FormEvent<HTMLFormElement>) => void;
    toggleDialog: () => void;
    open: boolean;
}

const GroceryForm = ({setAmount, setItem, addItem, item, amount, toggleDialog , open}: GroceryListProps) => {
    return(
        <div>
            <div className={styles.buttonContainer}>
                {open? <button onClick={toggleDialog}>Close</button>
                : <button onClick={toggleDialog}>Add</button>}
            </div>
            {open?
             <form onSubmit={addItem} className={styles.container}>
                <div className={styles.inputs}>
                    <input value={amount} min={1} type="number" name="" id="" placeholder="Amount" onChange={e => setAmount(parseInt(e.target.value))}/>
                    <input value={item} type="text" name="" id="" placeholder="Name" onChange={e => setItem(e.target.value)}/>
                    <button> + </button>
                </div>
            </form>
            : null}
        </div>
    )
}

export default GroceryForm;