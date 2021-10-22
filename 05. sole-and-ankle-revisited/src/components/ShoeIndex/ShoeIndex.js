import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeBreadcumbs = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">
      Shoes
    </Breadcrumbs.Crumb>
  </Breadcrumbs>
)

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcumbs>
              <ShoeBreadcumbs />
            </MobileBreadcumbs>
            <Title>Running</Title>
          </div>
          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <ShoeBreadcumbs />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  position: relative;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.mobiles} {
    display: none;
  }
`;

const MobileBreadcumbs = styled.div`
  display: none;

  @media ${QUERIES.mobiles} {
    display: revert;
  }
`

const SelectWrapper = styled.div`
  @media ${QUERIES.phones} {
    display: none;
  }
`

const MainColumn = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.mobiles} {
    align-items: flex-end;
  }
`;



export default ShoeIndex;
