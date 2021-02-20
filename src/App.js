
import { ThemeProvider } from '@material-ui/core';
import react from 'react';
import { GetAllProducts } from './Api/Api';
import './App.css';
import Routes from './Routes/Routes';
import { roboShopTheme } from './Theme';
import ShoppingBasket from "./Util/ShoppingBasket"
class App extends react.Component {
  constructor(props) {
    super(props);
    let shoppingBasket = new ShoppingBasket();
    this.state = { products: [], shoppingBasket }

  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    let products = await GetAllProducts();
    if (products?.length > 0) {
      this.setState({ products });
    }
  }

  render() {

    const childprops = { shop: { ...this.state } }
    return (
      <div >

        <ThemeProvider theme={roboShopTheme}>
          <Routes childprops={childprops} />
        </ThemeProvider>
      </div >
    );
  }
}

export default App;


//notes This project uses codesnippets and other free to use content. 

// https://material-ui.com/components/grid/#ComplexGrid.js
//images from 
//https://cdn2.vectorstock.com/i/1000x1000/43/61/robot-icon-set-vector-19654361.jpg
