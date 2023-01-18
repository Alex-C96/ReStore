import { Button, TextField } from "@mui/material";
import React, { FormEvent, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState<number>(0);
    const [startTime, setStartTime] = useState<number>();

    function passInStartTime(input : number) {
        setStartTime(input)
    }

    const updateTime = (e :React.ChangeEvent<HTMLInputElement>) => {
        setTime(parseInt(e.target.value));  
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        passInStartTime(time)
    }
    return (
        <div>
            <p>{startTime}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={time}
                    onChange={updateTime}
                /> 
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}