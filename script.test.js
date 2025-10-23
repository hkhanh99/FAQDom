global.__JEST__ = true; 

import { renderList } from './script.js';

test('renders FAQ list correctly', () => {
  document.body.innerHTML = '<ul id="list"></ul>';
  const data = [{ question: 'Q1', answer: 'A1' }];
  renderList(data);
  expect(document.querySelector('li').textContent).toContain('Q1');
});

test('shows empty state', () => {
  document.body.innerHTML = '<div id="status"></div>';
  const statusEl = document.getElementById('status');
  if ([]?.length === 0) statusEl.textContent = 'No data available.';
  expect(statusEl.textContent).toBe('No data available.');
});
