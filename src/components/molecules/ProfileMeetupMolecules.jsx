import React from "react";
import ImageComponent from "../atoms/ImageComponent";
import HeadingThreeComponent from "../atoms/HeadingThreeComponent";
import ButtonComponent from "../atoms/ButtonComponent";

export default class ProfileMeetupMolecules extends React.Component {
    render() {
        return (
            <>
                <div className="card m-4" style={{ backgroundColor: '#C4C4C4' }}>
                    <div className="row p-4">
                        <div className="col-12 col-md-2 mb-3 mb-md-0">
                            <ImageComponent sourceImage="https://picsum.photos/200" className="img-fluid" alt="meetup" />
                        </div>
                        <div className="col-12 col-md-10">
                            <HeadingThreeComponent title="Hacktiv8 Meetup" />
                            <div className="row mb-2">
                                <div className="col-2 label">Location</div>
                                <div className="col-10">Jakarta, Indonesia</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-2 label">Members</div>
                                <div className="col-10">1,078</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-2 label">Organizers</div>
                                <div className="col-10">Adhy Wiranata</div>
                            </div>
                            <ButtonComponent buttonName="Join Us" className="btn btn-dark my-3" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

