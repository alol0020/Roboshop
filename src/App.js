import react from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Routes from './Routes/Routes';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { val: 1 }

  }
  render() {
    const childprops = { ...this.state }
    return (
      <div >
        <Navbar />
        <Routes childprops={childprops} />
      </div >
    );
  }
}

export default App;
