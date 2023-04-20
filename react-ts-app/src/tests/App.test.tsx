import { screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { App } from '../App';
import { renderWithProviders } from '../utils/test-utils';

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

test('Receives a character after clicking the search button', async () => {
  renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const input = screen.getByRole<HTMLInputElement>('textbox');
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'nas' } });
  expect(input.value).toBe('nas');
  userEvent.click(screen.getByRole('button', { name: 'Search' }));
  await waitForElementToBeRemoved(() => screen.getByRole('loader'));
  expect(screen.getByRole('heading', { level: 5 })).toBeDefined();
});
