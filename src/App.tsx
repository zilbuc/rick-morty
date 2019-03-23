import React from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';


export default function App(props:any):JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <h2>Pick your favourite episode!</h2>
        </div>
        <h2>
          <Link to='/'>Home</Link>
          <br></br>
          <Link to='/faves' >Favourite(s): {state.favourites.length}</Link>
        </h2>
      </header>
      { props.children }
    </React.Fragment>
  )
};
