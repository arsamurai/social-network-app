import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {
    test('Status from the props should be in the state', () => {
        const component = create(<ProfileStatus status='Artur Musienko' />)
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Artur Musienko')
    });

    test('After creating <span> should be displayed', () => {
        const component = create(<ProfileStatus status='Artur Musienko' />)
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('After creating <input> shouldn`t be displayed', () => {
        const component = create(<ProfileStatus status='Artur Musienko' />)
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });

    test('After creating <span> should contains correct status', () => {
        const component = create(<ProfileStatus status='Artur Musienko' />)
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('Artur Musienko');
    });

    test('Input should be displayed in editMode instead of <span>', () => {
        const component = create(<ProfileStatus status='Artur Musienko' />)
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('Artur Musienko');
    });

    test('Callback will be executed', () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status='Artur Musienko' updateStatus={mockCallBack} />)
        const instance = component.getInstance();
        instance.deActiveEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });

});