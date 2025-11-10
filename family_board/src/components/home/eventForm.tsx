import { useState } from "react";

type eventFormProps = {
    addEvent: () => void;
    setNewEventText: React.Dispatch<React.SetStateAction<string>>;
    newEventText: string;
}

const eventForm = ({addEvent, setNewEventText, newEventText}: eventFormProps) => {

    return(
        <div>
            <input
            type="text"
            value={newEventText}
            onChange={(e) => setNewEventText(e.target.value)}
            placeholder="Nieuwe activiteit"
            />
            <button onClick={addEvent}>
            Toevoegen
            </button>
        </div>
    )
}

export default eventForm;