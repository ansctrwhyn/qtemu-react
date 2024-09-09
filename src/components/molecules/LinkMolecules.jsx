import React from "react";
import AnchorComponent from "../atoms/AnchorComponent";
import SpanComponent from "../atoms/SpanComponent";

export default class LinkMolecules extends React.Component {
    render() {
        return (
            <>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <SpanComponent className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <AnchorComponent link="Create Meetup" className="nav-link text-white mx-3" />
                        </li>
                        <li className="nav-item">
                            <AnchorComponent link="Explore" className="nav-link text-white mx-3" />
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <AnchorComponent link="Login" className="nav-link text-white mx-3" />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}