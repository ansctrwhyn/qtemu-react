import React from "react"

export default class ButtonComponent extends React.Component {
    render() {
        return (
            <>
                <button className={this.props.className} style={this.props.style}>{this.props.buttonName}</button>
            </>
        )
    }
}