import React from "react"

export default class SpanComponent extends React.Component {
    render() {
        return (
            <>
                <span className={this.props.className}>{this.props.text}</span>
            </>
        )
    }
}