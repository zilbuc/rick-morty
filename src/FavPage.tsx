import React from 'react';
import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { toggleFavAction } from './Actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function FavPage():JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props:IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  }

  return (
    <React.Suspense fallback={ <div>Loading...</div> }>
      <div className='episode-layout'>
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  )
}
