function orderByGenre(albums, setAlbums) {
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

  setAlbums(genres);
}

export {
  orderByGenre,
}
