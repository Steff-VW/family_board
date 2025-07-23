
type groceryListProps = {
    list: string[];
    setList: (list: string[]) => void;
}

const groceryList = ({list, setList}: groceryListProps) => {
    return (
         <div>
            <ul>
            {list.map((groceryItem, index) => (
                <li key={index}>
                {groceryItem}
                <button onClick={() => {
                    const newList = list.filter((_, i) => i !== index);
                    setList(newList);
                }}>-</button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default groceryList;