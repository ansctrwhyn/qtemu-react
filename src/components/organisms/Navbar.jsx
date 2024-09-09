import React from "react";
import BrandMolecules from "../molecules/BrandMolecules";
import LinkMolecules from "../molecules/LinkMolecules";

export default class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#828282' }}>
                    <div className="container-fluid ">
                        <BrandMolecules />
                        <LinkMolecules />
                    </div>
                </nav>
            </>
        )
    }
}