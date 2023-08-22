import React, { createContext, useMemo, useState } from "react";

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
    const [completed, setCompleted] = useState([]);
    const [workout, setWorkout] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const memoizedFitnessData = useMemo(() => (
        {
            completed,
            setCompleted,
            workout,
            setWorkout,
            calories,
            setCalories,
            minutes,
            setMinutes,
        }
    ), [completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,])
    return (
        <FitnessItems.Provider
            value={memoizedFitnessData}
        >
            {children}
        </FitnessItems.Provider>
    );
};

export { FitnessContext, FitnessItems }
