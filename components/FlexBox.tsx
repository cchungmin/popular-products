import styled from 'styled-components';

interface FlexProps {
  flex?: string,
  direction?: string;
  justify?: string;
  align?: string;
}

const FlexBox = styled.div`
  display: flex;
  flex: ${({ flex }: FlexProps) => flex || '0'};
  flex-direction: ${({ direction }: FlexProps) => direction || 'row'};
  justify-content: ${({ justify }: FlexProps) => justify || 'baseline'};
  align-item: ${({ align }: FlexProps) => align || 'baseline'};
`;

export default FlexBox;
