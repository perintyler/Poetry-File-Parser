/* App.test.jsx */

import { render, screen }  from '@testing-library/react';
import { isElementOfType } from 'react-dom/test-utils'; // ES6
import App                 from './App';

test('renders app bar and its links', () => {
    render(<App />);
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveTextContent('Poetry File Parser');

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
    const githubLink = links[0];
    expect(githubLink).toHaveAttribute('href', 'https://github.com/perintyler');
    expect(isElementOfType(githubLink.firstChild, 'svg'));
    const poetryLink = links[1];
    expect(poetryLink).toHaveAttribute('href', 'https://python-poetry.org/');
    expect(isElementOfType(githubLink.firstChild, 'svg'));
});

test('renders package grid upon file upload', () => {
});