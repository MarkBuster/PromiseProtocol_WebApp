import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

vi.mock('./pages/Dashboard', () => ({
  default: () => <div>Dashboard Page</div>,
}));

vi.mock('./pages/MyPromises', () => ({
  default: () => <div>My Promises Page</div>,
}));

vi.mock('./pages/CreatePromise', () => ({
  default: () => <div>Create Promise Page</div>,
}));

vi.mock('./pages/PublicProfile', () => ({
  default: () => <div>Public Profile Page</div>,
}));

vi.mock('./pages/PromiseDetail', () => ({
  default: () => <div>Promise Detail Page</div>,
}));

function renderAtRoute(route) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
}

describe('App routing', () => {
  test('/ renders Dashboard', () => {
    renderAtRoute('/');
    expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
  });

  test('/promises renders MyPromises', () => {
    renderAtRoute('/promises');
    expect(screen.getByText('My Promises Page')).toBeInTheDocument();
  });

  test('/promises/:id renders PromiseDetail', () => {
    renderAtRoute('/promises/prm_001');
    expect(screen.getByText('Promise Detail Page')).toBeInTheDocument();
  });

  test('/create renders CreatePromise', () => {
    renderAtRoute('/create');
    expect(screen.getByText('Create Promise Page')).toBeInTheDocument();
  });

  test('/profile renders PublicProfile', () => {
    renderAtRoute('/profile');
    expect(screen.getByText('Public Profile Page')).toBeInTheDocument();
  });

  test('undefined route renders 404 page', () => {
    renderAtRoute('/this-does-not-exist');
    expect(screen.getByText('404 — Page Not Found')).toBeInTheDocument();
  });
});
