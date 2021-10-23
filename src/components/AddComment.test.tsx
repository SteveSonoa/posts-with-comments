import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddComment} from './AddComment';

describe('AddComment', () => {
    const addNewComment = jest.fn();

    afterEach(() => {
        addNewComment.mockReset();
    })

    test('should render the title', () => {
        const { getByText } = render(<AddComment addNewComment={addNewComment} postId={4} />);
    
        const commentTitle = getByText(/Add A Comment/i);
        expect(commentTitle).toBeInTheDocument();
    });

    test('should use proper inputs and not submit until all inputs are used', () => {
        const { getByLabelText } = render(<AddComment addNewComment={addNewComment} postId={4} />);

        const nameInput = getByLabelText('name');
        const emailInput = getByLabelText('email');
        const bodyInput = getByLabelText('body');
        const submitButton = getByLabelText('submit');

        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(bodyInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.change(nameInput, { target: { value: 'name' }});
        // @ts-ignore
        expect(nameInput.value).toBe('name');
        // @ts-ignore
        expect(emailInput.value).toBe('');
        // @ts-ignore
        expect(bodyInput.value).toBe('');

        fireEvent.change(emailInput, { target: { value: 'me@me.com' }});
        // @ts-ignore
        expect(nameInput.value).toBe('name');
        // @ts-ignore
        expect(emailInput.value).toBe('me@me.com');
        // @ts-ignore
        expect(bodyInput.value).toBe('');

        fireEvent.change(bodyInput, { target: { value: 'body' }});
        // @ts-ignore
        expect(nameInput.value).toBe('name');
        // @ts-ignore
        expect(emailInput.value).toBe('me@me.com');
        // @ts-ignore
        expect(bodyInput.value).toBe('body');
    });
});
