import React from 'react';
import { useSelector } from 'react-redux'
import { render, fireEvent, cleanup } from '@testing-library/react';

import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {
    // beforeEach(() => {
    //     localStorage.clear();
    // })

    // it('should be able to add new tech', () => {
    //     const { getByText, getByTestId, debug, getByLabelText} = render( <TechList /> );

    //     fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    //     fireEvent.submit(getByTestId('tech-form'));        

    //     expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    //     expect(getByLabelText('Tech')).toHaveValue('');
    // });

    // it('should store techs in storage', () => {
    //     let { getByText, getByTestId, debug, getByLabelText, unmount} = render( <TechList /> );
    
    //     fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    //     fireEvent.submit(getByTestId('tech-form'));

    //     unmount();
     
    //     ({ getByText, getByTestId, unmount } = render( <TechList /> ));

    //     expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']));
    //     expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    // })

    it('should render tech list', () => {   
        useSelector.mockImplementation(cb => cb({
            techs: ['Node.js', 'ReactJS']
        }));

        const { getByTestId, getByText } = render(<TechList />);

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
        expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    })
})