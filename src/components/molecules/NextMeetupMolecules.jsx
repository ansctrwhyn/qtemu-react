import React from "react";
import HeadingThreeComponent from "../atoms/HeadingThreeComponent";
import SpanComponent from "../atoms/SpanComponent";

export default class NextMeetupMolecules extends React.Component {
    render() {
        return (
            <>
                <div className="m-4">
                    <HeadingThreeComponent title="Next Meetup" className="py-2" />
                    <div className="card p-4" style={{ backgroundColor: '#C4C4C4' }}>
                        <SpanComponent text="Awesome meetup and event" /><br />
                        <SpanComponent text="25 January 2019." /><br />
                        <SpanComponent text="Hello, JavaScript & Node.js Ninjas!" />
                        <SpanComponent text="Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!" />
                        <SpanComponent text="The meetup format will contain some short stories and technical talks." />
                        <SpanComponent text="If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements." /><br />
                        <SpanComponent text="Remember to bring a photo ID to get through building security." />
                        <hr />
                        <SpanComponent text="See you there!" />
                        <SpanComponent text="Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers" />
                    </div>
                </div>
            </>
        )
    }
}