import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge"
import Banner from './components/banner';

function App() {
  return (
    <div className='components'>
      <h1>Your components go here</h1>
      <Badge
        color="red"
        shape="pill"
      >
        Hello
      </Badge>
      <Badge
        color="indigo"
        shape="square"
      >
        There !
      </Badge>
      <Banner
        flag="green"
      >
        lorem ipsum ..... lorem etc
      </Banner>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
