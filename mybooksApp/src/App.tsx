import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import ReactDOM from 'react-dom';
import Table from './components/Table';

export const $ = (selector:string, self:any):any => {
  const root = ReactDOM.findDOMNode(self);
  let nodesList:any = null;
  console.log(root)

  if (root instanceof HTMLElement) {
    console.log(true)
    nodesList = root.querySelectorAll(selector);
  }
  return root;
};

class App extends Component {

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Bookster®</h1>
          
          <BookList
          prepend={<h2>Table-HEADER</h2>}
          titre={<h1>Liste des livres</h1>}
          data={
            [
              { id: 1, titre: 'Fondation' },
              { id: 2, titre: 'Les montagnes hallucinées' },
              { id: 3, titre: 'Blade Runner' }
            ]
          }
          append={<h2>Table-FOOTER</h2>}
          >
          </BookList>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
