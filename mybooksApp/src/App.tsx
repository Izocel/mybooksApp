import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import Button from './components/Button';

import { FaRegEdit } from 'react-icons/fa';

// export const $ = (selector: string, self: any): any => {
//   const root = ReactDOM.findDOMNode(self);
//   let nodesList: any = null;
//   console.log(root)

//   if (root instanceof HTMLElement) {
//     console.log(true)
//     nodesList = root.querySelectorAll(selector);
//   }
//   return root;
// };

class App extends Component {

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Bookster®</h1>
        </header>


        <section className='App-body'>
          <div className='h-100 w-50 offset-3 mb-max'>
            <BookList
              prepend={<h2>Table-HEADER</h2>}
              titre={<h1>Liste des livres</h1>}
              data={[
                {
                  itemData: {id: 1, titre: 'Fondation'}
                },
                {
                  itemData: { id: 2, titre: 'Les montagnes hallucinées' }
                },
                {
                  itemData: { id: 3, titre: 'Blade Runner' }
                },
                {
                  itemData: { id: 4, titre: 'The Crew' }
                },
                {
                  itemData: { id: 5, titre: 'Alice in Wonderlands' }
                }
              ]}
              append={<h2>Table-FOOTER</h2>}
            >
            </BookList>
          </div>


        </section>


        <footer className='App-footer'>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
