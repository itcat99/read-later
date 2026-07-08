import React, { memo } from 'react';
import styled from 'styled-components';

const EmptyView = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Empty: React.FC = memo(() => {
  return (
    <EmptyView>
      <p>Empty list.</p>
      <p>please click context menu 'read later'.</p>
    </EmptyView>
  );
});

export default Empty;
