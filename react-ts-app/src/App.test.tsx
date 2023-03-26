import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import App from './App';
import Card from './components/Card';
import CardUser from './components/CardUser';

describe('App', () => {
  it('Should have H1 headline', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

describe('Card', () => {
  it('Images should have alt-attribute', () => {
    render(<Card id={0} title={''} img={''} price={''} text={''} tags={[]} />);
    expect(screen.getByRole('img')).toHaveAttribute('alt');
  });
  it('Card should have a title', () => {
    render(<Card id={0} title={''} img={''} price={''} text={''} tags={[]} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
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
