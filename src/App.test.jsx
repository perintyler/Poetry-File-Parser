import { render, screen } from '@testing-library/react';
import App from './App';

test('renders banner with website title', () => {
    render(<App />);
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveTextContent('Poetry File Parser');
});


