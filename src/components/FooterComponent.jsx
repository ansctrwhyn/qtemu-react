import React from "react";

class FooterComponent extends React.Component {
    render() {
        return (
            <footer className="text-center my-4" style={{ borderTop: "1px solid black" }}>
                <p className="mt-4"><strong>Copyright Hacktiv8 2024</strong></p>
            </footer>
        )
    }
}

export default FooterComponent