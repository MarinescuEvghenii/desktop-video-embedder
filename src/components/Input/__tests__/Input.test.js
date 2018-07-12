import renderer from 'react-test-renderer';
import React from 'react';
import Input from '../Input';

describe('Input component renders correctly:', () => {
    test('Expect markup to match snapshot.', () => {

        const rendered = renderer.create(
            <Input
                onChange    = {jest.fn()}
                onKeyUp     = {jest.fn()}
                className   = "test-class-name"
                placeholder = "test placeholder"
            />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
