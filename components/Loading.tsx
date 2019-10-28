import React from 'react';

import Layout from './Layout';
import {
  Header,
  Container,
} from './Elements';

const Loading = () => (
  <Layout>
    <Header>Loading...</Header>
    <Container>
      We are loading data for you...
    </Container>
  </Layout>
);

export default Loading;
