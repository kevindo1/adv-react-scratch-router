import { screen, render } from '@testing-library/react';
import Home from './Home';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { movies } from '../../utils/movies';

const server = setupServer(
  rest.get(`https://ghibliapi.herokuapp.com/films/`, (req, res, ctx) => {
    return res(ctx.json([movies]));
  })
);

// 🚨 Listen for server start
beforeAll(() => server.listen());

// 🚨 Close server when complete
afterAll(() => server.close());

test('Should render home page views', async () => {
  render(<Home />);

  const movieList = await screen.findByRole('list');
  expect(movieList).toBeInTheDocument();

  const header = screen.getByRole('heading', { name: /ghibli/i });
  expect(header).toBeInTheDocument();
});
