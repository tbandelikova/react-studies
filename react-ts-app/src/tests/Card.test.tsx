import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card';
import { CardUser } from '../components/CardUser';

describe('Card', () => {
  it('Images should have alt-attribute', () => {
    render(
      <Card
        id={0}
        name={''}
        status={''}
        species={''}
        type={''}
        gender={''}
        origin={{}}
        image={''}
        location={{}}
      />
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt');
  });
  it('Card should have a title', () => {
    render(
      <Card
        id={0}
        name={''}
        status={''}
        species={''}
        type={''}
        gender={''}
        origin={{}}
        image={''}
        location={{}}
      />
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('Card should have text', () => {
    render(
      <Card
        id={0}
        name={''}
        status={''}
        species={''}
        type={''}
        gender={''}
        origin={{}}
        image={''}
        location={{}}
      />
    );
    expect(screen.getByText(/species/i)).toBeInTheDocument();
  });
});

describe('CardUser', () => {
  it('Images should have alt-attribute', () => {
    render(<CardUser name={''} birthday={''} gender={''} location={''} img={''} />);
    expect(screen.getByRole('img')).toHaveAttribute('alt');
  });
  it('Card should have a title', () => {
    render(<CardUser name={''} birthday={''} gender={''} location={''} img={''} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
