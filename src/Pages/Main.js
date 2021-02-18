import react from "react";


export default class Main extends react.Component {


    render() {
        console.log("main", this.props)
        return (
            <div>
                <h1>Robotar</h1>
                {this.props.products.map(product => <p>{product.name}</p>)}
            </div>


        )
    }
}
