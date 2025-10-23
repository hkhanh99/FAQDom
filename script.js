const DATA_FILE = 'faqs.json'; 

export async function fetchData() {
  const statusEl = document.getElementById('status');
  const listEl = document.getElementById('list');

  try {
    if (statusEl) statusEl.textContent = 'Loading...';
    const response = await fetch(DATA_FILE);

    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    if (!data || data.length === 0) {
      if (statusEl) statusEl.textContent = 'No data available.';
      return;
    }

    if (statusEl) statusEl.textContent = '';
    renderList(data);
  } catch (error) {
    console.error(error);
    if (statusEl) statusEl.textContent = 'Error loading data.';
  }
}

export function renderList(items) {
  const listEl = document.getElementById('list');
  if (!listEl) return;
  listEl.innerHTML = items.map(item => `
    <li>
      <strong>${item.question}</strong><br>
      ${item.answer || ''}
    </li>
  `).join('');
}

if (typeof window !== 'undefined' && !window.__JEST__) {
  fetchData();
}
