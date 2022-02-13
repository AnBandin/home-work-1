import React from "react";
import {getDate, getName} from "./service";

export class ProfileS extends React.Component {
    render() {
        return (
            <div className="container">
                <p>Привет, <b>{getName(this.props.name)}!</b></p>
                <p className="text_min">Дата регистрации: {getDate(this.props.registredAt)}</p>
            </div>
        )
    }
}