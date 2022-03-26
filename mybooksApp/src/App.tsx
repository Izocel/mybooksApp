import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <h1>Bookster®</h1>

            <h3>Liste des livres</h3>

            <table className="BooksTable">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Titre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Fondation</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Les montagnes hallucinÃ©es</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Blade Runner</td>
                </tr>
              </tbody>
            </table>
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
