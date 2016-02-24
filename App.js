import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    // one way
    let txt = this.props.txt
    return <div>{txt}</div>

    // another way to return
    // return React.createElement('h1', null, "Hello Guys")

    //another way
    // return (
    //   <div>
    //     <h1>Hello World</h1>
    //     <b>bold</b>
    //   </div>
    // )
  }
}

//const App = () => <h1>Hello Eggheads</h1>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text'
}

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
)


// export default App
