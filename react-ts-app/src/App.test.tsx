import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { App } from './App';
import { Card } from './components/Card';
import { CardUser } from './components/CardUser';
import { Forms } from './pages/Forms';
import formReducer, { FormState, getSuccessAction } from './redux/formSlice';
import { renderWithProviders } from './utils/test-utils';

describe('App', () => {
  it('Should have H1 headline', () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  it('Should fetch posts', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Search')).toBeDefined();
    userEvent.click(screen.getByRole('button', { name: 'Search' }));
    await waitForElementToBeRemoved(() => screen.getByRole('loader'));
    expect(screen.getByRole('heading', { level: 5 })).toBeDefined();
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

describe('Forms', () => {
  it('Send btn should be in the page', () => {
    renderWithProviders(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });
  it('Text input should be in the page', () => {
    renderWithProviders(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Select input should be in the page', () => {
    renderWithProviders(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
  it('Radio input should be in the page', () => {
    renderWithProviders(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('radio')).length == 2;
  });
  it('Date input should be in the page', () => {
    renderWithProviders(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    expect(screen.getByLabelText('Birthday:', { selector: 'input' })).toBeInTheDocument();
  });
  it('Checkbox should be in the page', () => {
    renderWithProviders(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    expect(
      screen.getByLabelText('I consent to my personal data', { selector: 'input' })
    ).toBeInTheDocument();
  });
});

test('Uses preloaded state to render', () => {
  const initialUsers = [
    { name: 'Tata', birthday: '12-12-2012', gender: 'Female', location: 'Belarus', img: '' },
  ];

  const { getByText } = renderWithProviders(
    <BrowserRouter>
      <Forms />
    </BrowserRouter>,
    {
      preloadedState: {
        form: {
          users: initialUsers,
          isLoading: false,
        },
      },
    }
  );
  expect(getByText('Tata')).toBeInTheDocument();
});

test('Should handle a user being added to an empty list', () => {
  const previousState: FormState = {
    users: [],
    isLoading: false,
  };
  const testUser = {
    name: 'Tata',
    birthday: '12-12-2012',
    location: 'Belarus',
    gender: 'Female',
    img: 'src/assets/secondImg.svg',
  };

  expect(formReducer(previousState, getSuccessAction(testUser))).toEqual({
    users: [
      {
        name: 'Tata',
        birthday: '12-12-2012',
        location: 'Belarus',
        gender: 'Female',
        img: 'src/assets/secondImg.svg',
      },
    ],
    isLoading: false,
  });
});
