import React from 'react';
import { connect } from 'react-redux';
import Script from 'react-load-script';

import {
  setProducts as setProductsAction,
  vote as voteAction,
} from '../actions/products';
import Main from '../components/index';
import Loading from '../components/Loading';


declare global {
  interface Window { Seed: any; }
}

interface Props {
  setProducts: Function,
  vote: Function,
  products: Array<Object>,
}

class Index extends React.Component<Props> {
  static defaultProps = {
    products: [],
    setProducts: () => {},
    vote: () => {},
  }

  state = {
    fetching: true,
  }

  onDataCreate = () => {
    this.setState({ fetching: true });
  }

  onDataLoad = () => {
    console.log('Products loaded!');
    const { products } = window.Seed;
    const { setProducts } = this.props;
    setProducts(products);
    this.setState({ fetching: false });
  }

  onDataError = () => {
    console.error('Products not loaded.');
  }

  onProductClick = (id) => () => {
    const { vote } = this.props;
    vote(id);
  }

  render() {
    const { products } = this.props;
    const { fetching } = this.state;
    return (
      <>
        {
          (fetching || !products) ? (
            <Loading />
          ) : (
            <Main data={products} onProductClick={this.onProductClick} />
          )
        }
        <Script
          url="/static/data/Seed.js"
          onCreate={this.onDataCreate}
          onError={this.onDataError}
          onLoad={this.onDataLoad}
        />
      </>
    );
  }
}

export default connect(({ products }: Props) => ({
  products,
}), {
  setProducts: setProductsAction,
  vote: voteAction,
})(Index);
