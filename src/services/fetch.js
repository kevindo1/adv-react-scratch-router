export async function getGhibli() {
  const response = await fetch(`https://ghibliapi.herokuapp.com/films/`);
  const data = await response.json();

  return data;
}
