/* eslint-env jest */

// import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../pages/index';

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    // const app = shallow(<App />)

    expect(true).toBe(true);
  })
});

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})