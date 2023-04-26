import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { Forms } from '../pages/Forms';
import formReducer, { FormState, getSuccessAction } from '../redux/formSlice';

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
