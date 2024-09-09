import React from "react";
import ProfileMeetupMolecules from "../molecules/ProfileMeetupMolecules";
import NextMeetupMolecules from "../molecules/NextMeetupMolecules";
import AboutMeetupMolecules from "../molecules/AboutMeetupMolecules";
import MembersMolecules from "../molecules/MembersMolecules";
import PastMeetupMolecules from "../molecules/PastMeetupsMolecules";

export default class Main extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <ProfileMeetupMolecules />
                    <NextMeetupMolecules />
                    <AboutMeetupMolecules />
                    <MembersMolecules />
                    <PastMeetupMolecules />
                </div>
            </>
        )
    }
}
