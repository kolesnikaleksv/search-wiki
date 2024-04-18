import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
  const articles = [
    { value: 'Article 1', label: 'Article 1' },
    { value: 'Article 2', label: 'Article 2' },
    { value: 'Article 3', label: 'Article 3' },
  ];
  let sut;
  let props;

  it('renders autocomplete component', () => {
    const { getByLabelText } = render(<SearchInput articles={articles} setValue={() => {}} />);
    const autocompleteInput = getByLabelText('Wikipedia');
    expect(autocompleteInput).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    const setValue = jest.fn();
    const { getByLabelText } = render(<SearchInput articles={articles} setValue={setValue} />);
    const autocompleteInput = getByLabelText('Wikipedia');
    fireEvent.change(autocompleteInput, { target: { value: 'search term' } });
    expect(setValue).toHaveBeenCalledWith('search term');
  });

  // Test from course

  it('renders SearchInput component', () => {
    sut = render(<SearchInput {...props} />);
    expect(sut).toMatchSnapshot();
  });
});