import React from "react";

export default class FormLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "Anisa Catur Wahyuni",
            age: 20,
            car: ["Kijang Innova", "Alphard", "Civic"],
            emailUser: "",
            password: ""
        }
    }

    getUsername() {
        return this.state.username
    }

    changeUsername = () => {
        this.setState({
            username: "Kharisma"
        })
    }

    changeCar = () => {
        let collectionCar = this.state.car
        let newKarimun = "Karimun"
        collectionCar.push(newKarimun)

        this.setState({
            car: collectionCar
        })
    }

    handleInputEmail = (e) => {
        // console.log(e.target.value)
        this.setState({
            emailUser: e.target.value
        })
    }

    handleInputForm = (e) => {
        e.preventDefault()
        console.log(this.state.emailUser)
        console.log(this.state.password)
    }

    render() {
        return (
            <>
                {/* <h1>{this.getUsername()}</h1> */}
                {/* <h1>{this.state.car}</h1> */}
                {/* <ul>
                    {this.state.car.map(el => (
                        <li>{el}</li>
                    ))}
                </ul>
                <button onClick={this.changeUsername}>Ubah Nama</button>
                <button onClick={this.changeCar}>Ubah Car</button> */}
                <div className="container my-5">
                    <form onSubmit={e => this.handleInputForm(e)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" onChange={e => this.handleInputEmail(e)}
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" onChange={e => this.setState({ password: e.target.value })} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}