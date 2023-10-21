import { Dispatch } from "redux";
import { AlbumsAction } from "../albumsType";
import { AlbumsActionTypes } from "../enum";
import axios from "axios";

export const fetchAlbums = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<AlbumsAction>) => {
    try {
      dispatch({ type: AlbumsActionTypes.FETCH_ALBUMS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums",
        { params: { _page: page, _limit: limit } }
      );
      dispatch({
        type: AlbumsActionTypes.FETCH_ALBUMS_ONSUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: AlbumsActionTypes.FETCH_ALBUMS_ERROR,
        payload: "Error",
      });
    }
  };
};

export function setPage(page: number): AlbumsAction {
  return { type: AlbumsActionTypes.SET_PAGE, payload: page };
}
