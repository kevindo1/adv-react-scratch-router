export async function getGhibli() {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`
  );
  const data = await response.json();

  return data;
}
