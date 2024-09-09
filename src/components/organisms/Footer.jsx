import React from "react";
import CopyrightMolecules from "../molecules/CopyrightMolecules";

export default class Navbar extends React.Component {
    render() {
        return (
            <>
                <footer className="text-center my-4" style={{ borderTop: "1px solid black" }}>
                    <CopyrightMolecules />
                </footer>
            </>
        )
    }
}