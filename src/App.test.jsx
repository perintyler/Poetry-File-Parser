/* App.test.jsx */

import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent                   from '@testing-library/user-event';
import { isElementOfType }         from 'react-dom/test-utils'; // ES6
import { MOCKFILE_CONTENTS }       from './MockData';
import App                         from './App';

afterEach(cleanup);

test('renders app bar and its links', () => {
    render(<App />);
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveTextContent('Poetry File Parser');

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
    const githubLink = links[0];
    expect(githubLink).toHaveAttribute('href', 'https://github.com/perintyler/Poetry-File-Parser');
    expect(isElementOfType(githubLink.firstChild, 'svg'));
    const poetryLink = links[1];
    expect(poetryLink).toHaveAttribute('href', 'https://python-poetry.org/');
    expect(isElementOfType(githubLink.firstChild, 'svg'));
});

test('renders package grid upon file upload', async () => {
    render(<App />);
    const poetryFileBlob = new Blob([MOCKFILE_CONTENTS]);
    const mockFile = new File([poetryFileBlob], 'mock.lock', { type: 'text/plain' });
    // File.prototype.text = jest.fn().mockResolvedValueOnce(MOCKFILE_CONTENTS);
    const lockfileInput = screen.getByTestId(/lockfile-input/i);
    userEvent.upload(lockfileInput, mockFile);

    await waitFor(() => {
        const gridItems = screen.getAllByTestId(/package-grid-item/i);
        expect(gridItems).toHaveLength(70);
        gridItems.forEach((item) => {
            expect(item.querySelector('a').getAttribute('href')).toBe('/package');
        });
    });
});


test('navigating from package grid to package view and back', async () => {
    render(<App />);
    userEvent.click(screen.getByTestId(/auto-upload-button/i));
    userEvent.click(screen.getAllByTestId(/package-grid-item/i)[1].querySelector('button'));

    await waitFor(() => {
        const headings = screen.getAllByRole("heading");
        expect(screen.getAllByRole("listitem")).toHaveLength(5);
        expect(headings[0]).toHaveTextContent('attrs');
        expect(headings[1]).toHaveTextContent('"Classes Without Boilerplate"');
        expect(headings[2]).toHaveTextContent('☝ Dependencies ☝');
        expect(headings[3]).toHaveTextContent('👇 Reverse Dependencies👇');
        const goBackButton = screen.getByText('Go Back to Package Grid');
        expect(goBackButton).toBeInTheDocument();
        userEvent.click(goBackButton);
        expect(screen.getAllByTestId(/package-grid-item/i).length).toBe(70);
    });
});

