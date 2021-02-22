import React from 'react';
import ProductList from '../Components/ProductList';


class Main extends React.Component {


  render() {
    return (
      <div >
        <h1>Robotar</h1>
        <ProductList shop={this.props.shop} />
      </div>


    )
  }
}
export default Main