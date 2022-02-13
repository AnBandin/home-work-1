import React from "react";
import './App.css'
import {ProfileF} from "./components/ProfileF";
import {ProfileS} from "./components/ProfileS";

export default function App() {
    return (
        <div>
            <ProfileF name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
            <ProfileS name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
        </div>
    )
}







