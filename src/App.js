// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast'

import data from './components/data.json'

// import HornedBeasts from './components/HornedBeasts'

console.log(data);
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: '',
      description: '',
      image_url: ''
    }
  }

  updateState = () => {
    this.setState({
      show: true
    })
  }

  closeState = () => {
    this.setState({
      show: false
    })
  }

  updateStateData = (t,d,i) => {
    this.setState({
      title: t,
      description: d,
      image_url: i
    })
  }
  render() {
    return (
      <>
        <Header />
        <Main data={data} updateStateFun={this.updateState} closeState={this.closeState} updateStateData={this.updateStateData}/>
        <SelectedBeast show={this.state.show} title={this.state.title} description={this.state.description}
        image_url={this.state.image_url}
         updateState={this.updateState} closeState={this.closeState} />
        <Footer />


      </>
    )

  }

}
// export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
