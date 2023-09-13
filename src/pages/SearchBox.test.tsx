import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
    beforeEach(() => {
        render(<SearchBox />);
    });

    it('should render the search box', () => {
        const input = screen.getByRole('textbox', { name: /search/i });
        expect(input).toBeInTheDocument();
    });
    it('should have buttons enabled when user types', async () => {
        const searchButton = screen.getByRole('button', { name: /search/i });
        const clearButton = screen.getByRole('button', { name: /clear/i });
        expect(searchButton).toBeDisabled();
        expect(clearButton).toBeDisabled();

        await userEvent.type(
            screen.getByRole('textbox', { name: /search/i }),
            'test'
        );

        expect(searchButton).toBeEnabled();
        expect(clearButton).toBeEnabled();
    });
    it('should clear the search box when clear button is clicked', async () => {
        await userEvent.type(
            screen.getByRole('textbox', { name: /search/i }),
            'test'
        );
        expect(screen.getByRole('textbox', { name: /search/i })).toHaveValue(
            'test'
        );
        await userEvent.click(screen.getByRole('button', { name: /clear/i }));
        expect(screen.getByRole('textbox', { name: /search/i })).toHaveValue(
            ''
        );
    });
});
