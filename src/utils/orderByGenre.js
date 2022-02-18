function orderByGenre(albums, setAlbums, setGenres) {
  const genres = {};

  albums.forEach((album) => {
    album.genres.forEach((genre) => genres[genre.name] = []);
  });

  albums.forEach((album) => {
    album.genres.forEach((genre) => {
      delete album.genres;
      genres[genre.name].push(album)
    });
  })

  delete genres["Music"];

  setAlbums(genres);
  setGenres(Object.keys(genres));
}

export {
  orderByGenre,
}
