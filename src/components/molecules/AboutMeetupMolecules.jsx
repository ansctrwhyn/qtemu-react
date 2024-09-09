import React from "react";
import HeadingThreeComponent from "../atoms/HeadingThreeComponent";
import SpanComponent from "../atoms/SpanComponent";

export default class AboutMeetupMolecules extends React.Component {
    render() {
        return (
            <>
                <div className="m-4">
                    <HeadingThreeComponent title="About Meetup" />
                    <SpanComponent text="Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area." className="px-4 py-1" /><br />
                    <SpanComponent text="Twitter: @JakartaJS and we use the hashtag #jakartajs" className="px-4 py-1" />
                </div>
            </>
        )
    }
}