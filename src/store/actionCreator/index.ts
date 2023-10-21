import * as UserActionCreators from "./fetchUsers";
import * as AlbumsActionCreators from "./fetchAlbums";

export default {
  ...UserActionCreators,
  ...AlbumsActionCreators,
};
