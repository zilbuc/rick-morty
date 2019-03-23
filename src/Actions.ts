import { IEpisode, IAction, IState } from './interfaces';


export const fetchDataAction = async (dispatch:any) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
}

export const toggleFavAction = (state:IState, dispatch:any, episode:IEpisode):IAction => {
  const isEpisodeFavourite:boolean = state.favourites.includes(episode);
  let dispatchObj:IAction = {
    type: 'ADD_FAV',
    payload: episode
  };

  if (isEpisodeFavourite) {
    const newFavState = state.favourites.filter((fav:IEpisode) => fav.id !== episode.id);
    dispatchObj = {
      type: 'DEL_FAV',
      payload: newFavState
    };
  }

  return dispatch(dispatchObj);
}
