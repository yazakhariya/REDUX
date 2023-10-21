import { AlbumsActionTypes } from "./enum";

export interface AlbumsState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  albums: any[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
}

interface FetchAlbumsPayload {
  type: AlbumsActionTypes.FETCH_ALBUMS;
}

interface FetchAlbumsOnsuccessPayload {
  type: AlbumsActionTypes.FETCH_ALBUMS_ONSUCCESS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any[];
}

interface FetchAlbumsErrorPayload {
  type: AlbumsActionTypes.FETCH_ALBUMS_ERROR;
  payload: string;
}

interface AlbumsPagePayload {
  type: AlbumsActionTypes.SET_PAGE;
  payload: number;
}

export type AlbumsAction =
  | FetchAlbumsPayload
  | FetchAlbumsOnsuccessPayload
  | FetchAlbumsErrorPayload
  | AlbumsPagePayload;
