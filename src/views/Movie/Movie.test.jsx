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
  const image = screen.getByRole('img', { name: /movie image/i });
  const director = screen.getByText(/director: hayao miyazaki/i);
  const description = screen.getByText(
    /the orphan sheeta inherited a mysterious crystal that links her to the mythical sky\-kingdom of laputa\. with the help of resourceful pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once\-great civilization\. sheeta and pazu must outwit the evil muska, who plans to use laputa's science to make himself ruler of the world\./i
  );

  expect(heading).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(director).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
