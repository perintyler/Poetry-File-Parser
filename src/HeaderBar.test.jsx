import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { isElementOfType } from 'react-dom/test-utils'; // ES6

import HeaderBar from './HeaderBar';

test('renders main website title', () => {
    render(<HeaderBar />);
    expect(screen.getByText("Poetry File Parser")).toBeInTheDocument();
});

test('renders github and poetry SVG links', () => {
    render(<HeaderBar />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);

    const githubLink = links[0];
    expect(githubLink).toHaveAttribute('href', 'https://github.com/perintyler');
    expect(isElementOfType(githubLink.firstChild, 'svg'));

    const poetryLink = links[1];
    expect(poetryLink).toHaveAttribute('href', 'https://python-poetry.org/');
    expect(isElementOfType(githubLink.firstChild, 'svg'));
});

