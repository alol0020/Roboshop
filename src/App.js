
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
    this.state = { products: [], shoppingBasket, reload: true }

    this.AddToBasket = this.AddToBasket.bind(this);
    this.RemoveFromBasket = this.RemoveFromBasket.bind(this);
    this.RemoveAllFromBasket = this.RemoveAllFromBasket.bind(this);

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

  AddToBasket(product) {
    let shoppingBasket = this.state.shoppingBasket;
    if (this.state.products.find(p => p.id == product.id).inStock - shoppingBasket.GetNumberOf(product) > 0) {
      shoppingBasket.AddProduct(product);
      this.setState({ reload: !this.state.reload });
    }
  }

  RemoveFromBasket(product) {
    let shoppingBasket = this.state.shoppingBasket;
    if (shoppingBasket.GetNumberOf(product) > 0) {
      shoppingBasket.RemoveProduct(product);
      this.setState({ reload: !this.state.reload });
    }
  }
  RemoveAllFromBasket() {
    let shoppingBasket = this.state.shoppingBasket;
    shoppingBasket.RemoveAll();
    this.setState({ reload: !this.state.reload });

  }



  render() {

    const childprops = {
      shop:
      {
        ...this.state,
        AddToBasket: this.AddToBasket,
        RemoveFromBasket: this.RemoveFromBasket,
        RemoveAllFromBasket: this.RemoveAllFromBasket
      }
    }
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
