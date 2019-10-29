/* eslint-env jest */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import renderer from 'react-test-renderer';

import types from '../actions/types';
import { mapStateToProps, mapDispatchToProps } from '../containers';
import App from '../pages/index';
import Main from '../components/index';

const data = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 55,
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
   }
];

const store = configureStore();

describe('With Snapshot Testing', () => {
  it('Layout the app', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('App', () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).setProducts(data);
  const props = {
    data,
    onProductClick: () => mapDispatchToProps(dispatch).vote,
  };

  const wrapper = mount(<Main {...props}/>);

  it('should render a product', () => {
    expect(wrapper.find('li')).toHaveLength(1);
  });

  it('should click the vote button', () => {
    wrapper.find('input').simulate('click');
    mapDispatchToProps(dispatch).vote(1);
    wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.find('li')).toHaveLength(1);
  });

  it('should map the test data to props', () => {
    const props = mapStateToProps({ products: data });
    expect(props.products[0].votes).toEqual(55);
  });

  it('should successfully vote', () => {
    mapDispatchToProps(dispatch).vote(1);
    expect(dispatch.mock.calls[2]).toEqual([{ type: types.VOTE_SUCCESS, data: 1 }]);
  });
});
