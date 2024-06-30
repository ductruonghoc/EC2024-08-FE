import { render, screen } from '@testing-library/react';
import { Category } from './pages/Shop';
import sellGroup from './assets/testData/sellGroup';

test('renders learn react link', () => {
  render(<Category items={sellGroup}></Category>);

});
