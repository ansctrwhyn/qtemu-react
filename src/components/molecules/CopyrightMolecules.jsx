import React from "react";
import SpanComponent from "../atoms/SpanComponent";

export default class CopyrightMolecules extends React.Component {
    render() {
        return (
            <>
                <SpanComponent text="Copyright Hacktiv8 2024" className="mt-4 fw-bold d-inline-block" />
            </>
        )
    }
}

