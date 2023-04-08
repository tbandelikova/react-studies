import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import { App } from './App';
import { Card } from './components/Card';
import { CardUser } from './components/CardUser';
import { Forms } from './pages/Forms';

describe('App', () => {
  it('Should have H1 headline', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

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
    expect(screen.getByText(/species/gi)).toBeInTheDocument();
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

describe('Forms', () => {
  it('Send btn should be in the page', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });
  it('Text input should be in the page', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Select input should be in the page', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
  it('Radio input should be in the page', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(screen.getAllByRole('radio')).length == 2;
  });
  it('Date input should be in the page', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(screen.getByLabelText('Birthday:', { selector: 'input' })).toBeInTheDocument();
  });
  it('Checkbox should be in the page', () => {
    render(<Forms />, { wrapper: BrowserRouter });
    expect(
      screen.getByLabelText('I consent to my personal data', { selector: 'input' })
    ).toBeInTheDocument();
  });
});
