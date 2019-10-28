import React from 'react';
import Link from 'next/link';

import Layout from './Layout';
import FlexBox from './FlexBox';
import {
  Header,
  Container,
  Panel,
  Product,
  Avatar,
  VoteCount,
  PruductImage,
  ProductTitle,
  VoteCountCTA,
  Submitted,
} from './Elements';

const Index = ({ data, onProductClick }) => (
  <Layout>
    <Header>Popular Products</Header>
    <Container>
      {
        data.sort((a, b) => b.votes - a.votes).map(el => (
          <Panel key={el.id}>
            <PruductImage>
              <img src={`/static/${el.productImageUrl}`} width="110" height="90" />
            </PruductImage>
            <FlexBox flex="1 0" direction="column">
              <VoteCount>
                <VoteCountCTA type="image" src={`/static/images/ui/arrow.png`} onClick={onProductClick(el.id)} />
                {el.votes}
              </VoteCount>
              <Link href={el.url}>
                <Product>
                  <ProductTitle>{el.title}</ProductTitle>
                </Product>
              </Link>
              <p>{el.description}</p>
              <Submitted>
                Submitted by:
                <Avatar src={`/static/${el.submitterAvatarUrl}`} width="28" height="28" />
              </Submitted>
            </FlexBox>
          </Panel>
        ))
      }
    </Container>
  </Layout>
);

export default Index;
