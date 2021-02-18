import react from 'react';
import { getAllProducts } from './Api/Api';
import './App.css';
import Navbar from './Components/Navbar';
import Routes from './Routes/Routes';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }

  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    let products = await getAllProducts();
    if (products?.length > 0) {
      this.setState({ products });
    }
  }

  render() {

    const childprops = { shop: { ...this.state } }
    return (
      <div >
        <Routes childprops={childprops} />
      </div >
    );
  }
}

export default App;
