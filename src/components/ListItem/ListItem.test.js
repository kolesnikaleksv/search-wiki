// import React from 'react';
// import { render } from '@testing-library/react';
// import ListItem from './ListItem';

// describe('SearchInput component', () => {
//   const articles = [
//     { value: 'Article 1', label: 'Article 1' },
//     { value: 'Article 2', label: 'Article 2' },
//     { value: 'Article 3', label: 'Article 3' },
//   ];
//   let sut;
//   let props;

//   it('renders ListItem component', () => {
//     sut = render(<ListItem {...props} />);
//     expect(sut).toMatchSnapshot();
//   });
// });


import React from 'react';
import { render } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem component', () => {
  test('renders correctly with article data', () => {
    const article = {
      label: 'Example Article',
      url: 'https://example.com/article',
    };
    const { getByText } = render(<ListItem article={article} />);
    const linkElement = getByText('Example Article');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com/article');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });

  test('does not render anything if no article data provided', () => {
    const { container } = render(<ListItem />);
    expect(container.firstChild).toBeNull();
  });
});