import React from "react";

class MainComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card m-4" style={{ backgroundColor: '#C4C4C4' }}>
                    <div className="row p-4">
                        <div className="col-12 col-md-2 mb-3 mb-md-0">
                            <img src="https://picsum.photos/200" alt="meetup" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-10">
                            <h3>Hacktiv8 Meetup</h3>
                            <table className="info-table my-1">
                                <tbody>
                                    <tr>
                                        <td className="label">Location</td>
                                        <td className="px-4">Jakarta, Indonesia</td>
                                    </tr>
                                    <tr>
                                        <td className="label">Members</td>
                                        <td className="px-4">1,078</td>
                                    </tr>
                                    <tr>
                                        <td className="label">Organizers</td>
                                        <td className="px-4">Adhy Wiranata</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="btn btn-dark my-3">Join Us</button>
                        </div>
                    </div>
                </div>

                <div className="m-4">
                    <h3 className="py-2">Next Meetup</h3>
                    <p className="card p-4" style={{ backgroundColor: '#C4C4C4' }}>Awesome meetup and event<br />
                        25 January 2019.<br /><br />
                        Hello, JavaScript & Node.js Ninjas!<br />
                        Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!<br />
                        The meetup format will contain some short stories and technical talks.<br />
                        If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br /><br />
                        Remember to bring a photo ID to get through building security.<br /><br />
                        - - - - -<br /><br />
                        See you there!<br />
                        Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers<br />
                    </p>
                </div>

                <div className="m-4">
                    <h3>About Meetup</h3>
                    <p className="px-4 py-1">
                        Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.<br />
                        Twitter: @JakartaJS and we use the hashtag #jakartajs
                    </p>
                </div>

                <div className="m-4">
                    <div className="d-flex justify-content-between">
                        <h3 className="py-2">Members</h3>
                        <a href="#">See all</a>
                    </div>
                    <div className="card p-3" style={{ backgroundColor: '#C4C4C4' }}>
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle mx-2" src="https://picsum.photos/200" alt="" style={{ width: '50px', height: '50px' }} />
                            <div className="mx-2 mt-2">
                                <h5>Organizers</h5>
                                <p>Adhy Wiranata <strong className="mx-5">4 others</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-4">
                    <div className="d-flex justify-content-between">
                        <h3 className="py-2">Past Meetups</h3>
                        <a href="">See all</a>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card p-3 mb-3" style={{ backgroundColor: '#C4C4C4' }}>
                                <p><strong>27 November 2017</strong></p>
                                <p>#39 JakartaJS April Meetup with kumparan</p>
                                <p><strong>139 went</strong></p>
                                <button className="btn text-white" style={{ backgroundColor: '#828282' }}>View</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-3" style={{ backgroundColor: '#C4C4C4' }}>
                                <p><strong>27 October 2017</strong></p>
                                <p>#38 JakartaJS April Meetup with BliBli</p>
                                <p><strong>113 went</strong></p>
                                <button className="btn text-white" style={{ backgroundColor: '#828282' }}>View</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-3" style={{ backgroundColor: '#C4C4C4' }}>
                                <p><strong>27 September 2017</strong></p>
                                <p>#37 JakartaJS April Meetup with Hacktiv8</p>
                                <p><strong>110 went</strong></p>
                                <button className="btn text-white" style={{ backgroundColor: '#828282' }}>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainComponent