    type TaskPickerProps = {
        toggleOpen: () => void;
        open: boolean;  
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
        handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
        handleClick: () => void;
        inputs: string[];
    }

const TaskPicker = ({ toggleOpen, open, handleSubmit, handleChange, handleClick, inputs }: TaskPickerProps) => {

    return (
        <div>
            <button onClick={toggleOpen}>{open ? "Close" : "Open"}</button>
            <form style={{ display: open ? "block" : "none" }} onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <input key={index} type="text" placeholder={`Task ${index + 1}`} onChange={(e) => handleChange(e, index)} value={input}/>
                ))}
                <button type="button" onClick={handleClick}>Add more</button>
                <button type="submit">{inputs.length > 0 && inputs.length < 2 ? "Add Task" : "Add Tasks"}</button>
            </form>
        </div>
    )
}

export default TaskPicker;