import React from 'react';
import { IEpisode, IEpisodeProps } from './interfaces';


export default function EpisodesList(props:IEpisodeProps):Array<JSX.Element> {
  const { episodes, favourites, toggleFavAction, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode:IEpisode) => {
    return (
      <section key={episode.id} className='episode-box'>
        <img src={episode.image.medium} alt= {`Rick and Morty ${episode.name}`} />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type='button' onClick={() => toggleFavAction(state, dispatch, episode)}>
            { favourites.includes(episode) ? 'unFAV' : 'FAV' }
          </button>
        </section>
      </section>
    )
  });
}
