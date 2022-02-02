import { screen, render } from '@testing-library/react';
import Movie from './Movie';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { castle } from '../../utils/castle';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(`https://ghibliapi.herokuapp.com/films/:id`, (req, res, ctx) => {
    return res(ctx.json(castle));
  })
);

// 🚨 Listen for server start
beforeAll(() => server.listen());

// 🚨 Close server when complete
afterAll(() => server.close());

test('Should be able to render Castle in the Sky', async () => {
  render(
    <MemoryRouter>
      <Movie />
    </MemoryRouter>
  );

  const heading = await screen.findByRole('heading', { name: /castle in the sky/i });
  const img = screen.getByRole('img', { name: /movie image/i });
  const director = screen.getByText(/director: hayao miyazaki/i);
  const description = screen.getByText(/the orphan/i);

  expect(heading).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(director).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
