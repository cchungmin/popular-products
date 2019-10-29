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

export interface Product {
  id: number,
  title: string,
  description: string,
  url: string,
  votes: number,
  submitterAvatarUrl: string,
  productImageUrl: string,
}

interface Props {
  setProducts?: Function,
  vote?: Function,
  products?: Array<Product>,
}

export const mapStateToProps = ({ products }: Props) => ({ products });
export const mapDispatchToProps = (dispatch) => ({
  setProducts: (data: Array<Product>) => dispatch(setProductsAction(data)),
  vote: (id: number) => dispatch(voteAction(id)),
});

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

  onProductClick = (id: number) => () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);
