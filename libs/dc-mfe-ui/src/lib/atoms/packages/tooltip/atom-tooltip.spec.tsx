import { render } from '@testing-library/react';

import Tooltip from './atom-tooltip';

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tooltip />);
    expect(baseElement).toBeTruthy();
  });
});
