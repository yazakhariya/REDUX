import { useAction } from "../hooks/useAction";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { useEffect } from "react";
import { Button } from "@mui/material";

export default function AlbumsList() {
  const { albums, error, loading, limit, page } = useTypesSelector(
    (state) => state.albums
  );

  const { fetchAlbums, setPage } = useAction();

  useEffect(() => {
    fetchAlbums(page, limit);
  }, [page]);

  const showAlbums = (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        albums.map((el) => (
          <p key={el.id}>
            {el.id}: {el.title}
          </p>
        ))
      )}
    </>
  );

  return (
    <div>
      {showAlbums ? showAlbums : null}
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          variant="outlined"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          {"<<"}
        </Button>
        <div>{page}</div>
        <Button variant="outlined" onClick={() => setPage(page + 1)}>
          {">>"}
        </Button>
      </div>
    </div>
  );
}
