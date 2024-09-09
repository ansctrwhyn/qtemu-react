import React from "react"

export default class HeadingThreeComponent extends React.Component {
    render() {
        return (
            <>
                <h3 className={this.props.className}>{this.props.title}</h3>
            </>
        )
    }
}