import React from "react"

export default class AnchorComponent extends React.Component {
    render() {
        return (
            <>
                <a className={this.props.className} href={this.props.href}>{this.props.link}</a>
            </>
        )
    }
}