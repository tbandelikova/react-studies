import { rest } from 'msw';

/**
 * An unhandled error occurred processing a request for the endpoint "getCharByName".
In the case of an unhandled error, no tags will be "provided" or "invalidated". ReferenceError: Request is not defined
 */

const fakeCard = {
  id: 2,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: ['', ''],
  url: '',
  created: '',
};

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        info: {
          count: 826,
          pages: 42,
          next: 'https://rickandmortyapi.com/api/character/?page=2',
          prev: null,
        },
        results: [fakeCard],
      })
    );
  }),
  rest.get(`https://rickandmortyapi.com/api/character/fake`, (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        message: `Failed to load resource: the server responded with a status of 404 ()`,
      })
    );
  }),
];
