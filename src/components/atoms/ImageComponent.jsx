import React from "react"

export default class ImageComponent extends React.Component {
    render() {
        return (
            <>
                <img src={this.props.sourceImage} alt={this.props.alt} className={this.props.className} style={this.props.style} />
            </>
        )
    }
}