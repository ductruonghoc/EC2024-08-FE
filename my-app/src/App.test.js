import { render, screen } from '@testing-library/react';
import { Category } from './pages/Shop';
import sellGroup from './assets/testData/sellGroup';
import Cart from './pages/Shop/components/cart';

function name() {
    0;
}

test('renders learn react link', () => {
  render(<Cart cartItems={[] } handleClose={() => undefined} show={true}></Cart>);

});
