export async function getGhibli() {
  const response = await fetch(`https://ghibliapi.herokuapp.com/films/`);
  const data = await response.json();

  return data;
}

export async function getMovie(movieId) {
  const response = await fetch(`https://ghibliapi.herokuapp.com/films/${movieId}`);
  const data = await response.json();

  return data;
}
