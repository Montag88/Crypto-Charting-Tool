import { shallow, mount, render } from 'enzyme';
import React from 'react';

import App from '../App';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

// describe('WelcomeMessage Test Suite', () => {
//   it('Should have an image', () => {
//     const { wrapper } = setup();
//     expect(wrapper.find('img').exists()).toBe(true);
//   });
// });

describe('A suite', () => {
  it('should render without throwing an error', () => {
    const { wrapper } = setup();
    expect(wrapper.contains(<h1>Cryptocurrency Charting Tool</h1>)).toBe(true);
  });
});

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
// });
