import React from "react";
import HeadingThreeComponent from "../atoms/HeadingThreeComponent";
import AnchorComponent from "../atoms/AnchorComponent";
import SpanComponent from "../atoms/SpanComponent";
import ButtonComponent from "../atoms/ButtonComponent";

export default class PastMeetupMolecules extends React.Component {
    render() {
        return (
            <>
                <div className="m-4">
                    <div className="d-flex justify-content-between">
                        <HeadingThreeComponent title="Past Meetups" className="py-2" />
                        <AnchorComponent link="See all" href="" />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card p-3 mb-3" style={{ backgroundColor: '#C4C4C4' }}>
                                <SpanComponent text="27 November 2017" className="fw-bold mb-3" />
                                <SpanComponent text="#39 JakartaJS April Meetup with kumparan" className="mb-3" />
                                <SpanComponent text="139 went" className="fw-bold mb-3" />
                                <ButtonComponent buttonName="View" className="btn text-white" style={{ backgroundColor: '#828282' }} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-3" style={{ backgroundColor: '#C4C4C4' }}>
                                <SpanComponent text="27 October 2017" className="fw-bold mb-3" />
                                <SpanComponent text="#38 JakartaJS April Meetup with BliBli" className="mb-3" />
                                <SpanComponent text="113 went" className="fw-bold mb-3" />
                                <ButtonComponent buttonName="View" className="btn text-white" style={{ backgroundColor: '#828282' }} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-3" style={{ backgroundColor: '#C4C4C4' }}>
                                <SpanComponent text="27 September 2017" className="fw-bold mb-3" />
                                <SpanComponent text="#37 JakartaJS April Meetup with Hacktiv8" className="mb-3" />
                                <SpanComponent text="110 went" className="fw-bold mb-3" />
                                <ButtonComponent buttonName="View" className="btn text-white" style={{ backgroundColor: '#828282' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}