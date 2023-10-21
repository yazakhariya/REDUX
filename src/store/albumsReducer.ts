import { AlbumsAction, AlbumsState } from "./albumsType";
import { AlbumsActionTypes } from "./enum";

const initialState: AlbumsState = {
    albums: [],
    page: 1,
    loading: false,
    error: null,
    limit: 10
}

export const albumsReducer = (state = initialState, action: AlbumsAction): AlbumsState => {
    switch (action.type) {
        case AlbumsActionTypes.FETCH_ALBUMS:
            return {...state, loading: true}

        case AlbumsActionTypes.FETCH_ALBUMS_ONSUCCESS:
            return {...state, loading: false, albums: action.payload}

        case AlbumsActionTypes.FETCH_ALBUMS_ERROR:
            return {...state, loading: false, error: action.payload}

        case AlbumsActionTypes.SET_PAGE:
            return {...state, page: action.payload}
    
        default:
            return state;
    }
}