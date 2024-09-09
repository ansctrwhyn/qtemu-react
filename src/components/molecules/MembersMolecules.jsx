import React from "react";
import HeadingThreeComponent from "../atoms/HeadingThreeComponent";
import HeadingFiveComponent from "../atoms/HeadingFiveComponent";
import AnchorComponent from "../atoms/AnchorComponent";
import ImageComponent from "../atoms/ImageComponent";
import SpanComponent from "../atoms/SpanComponent";

export default class MembersMolecules extends React.Component {
    render() {
        return (
            <>
                <div className="m-4">
                    <div className="d-flex justify-content-between">
                        <HeadingThreeComponent title="Members" className="py-2" />
                        <AnchorComponent href="#" link="See all" />
                    </div>
                    <div className="card p-2" style={{ backgroundColor: '#C4C4C4' }}>
                        <div className="d-flex align-items-center">
                            <ImageComponent className="rounded-circle mx-2" sourceImage="https://picsum.photos/200" alt="" style={{ width: '50px', height: '50px' }} />
                            <div className="mx-2 mt-2">
                                <HeadingFiveComponent title="Organizers" />
                                <SpanComponent text="Adhy Wiranata" className="pb-2 d-inline-block" />
                                <SpanComponent text="4 others" className="mx-5 fw-bold pb-2 d-inline-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}