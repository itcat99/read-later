import styled from 'styled-components';
import { global } from '../../_vars';

export const StyledRoot = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 6px 12px;
  border-bottom: ${global.border};
`;

export const Info = styled.div`
  display: flex;
  align-items: baseline;
  flex-grow: 1;
  width: 100%;
  flex-basis: calc(100% - 20px);
`;

export const InfoTitle = styled.h1`
  margin: 0;
  margin-right: 6px;
  font-size: 20px;
  line-height: 30px;
  color: #4d4d4d;
`;

const IconBase = styled.span`
  display: inline-block;
  min-width: 16px;
  height: 16px;
  background-repeat: no-repeat !important;
  background-size: 100% !important;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 300ms;
  &:hover {
    opacity: 1;
    transition: opacity 300ms;
  }
`;

export const GitIcon = styled(IconBase)`
  background: url('../icons/github.svg');
`;

export const EmailIcon = styled(IconBase)`
  background: url('../icons/email.svg');
`;

export const SettingsIcon = styled(IconBase)`
  background: url('../icons/settings.svg');
`;

export const Contact = styled.div`
  flex-grow: 1;
  margin-top: 10px;
  > a {
    text-decoration: none;
    margin-right: 4px;
    &:focus {
      outline: none;
    }
  }
`;
