import { panel } from './_vars';
import styled from 'styled-components';

const { padding, heightMin, heightMax, width } = panel;

const StyledRoot = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: ${padding};
  min-height: ${heightMin};
  max-height: ${heightMax};
  width: ${width};
`;

export default StyledRoot;
