import type React from 'react';
import { memo } from 'react';
import styled from 'styled-components';
import { globalVars } from '../../lib/vars';
import { usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Search from './Search';

const StyledRoot = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 6px 12px;
  border-bottom: ${globalVars.border};
`;

const Info = styled.div`
  display: flex;
  align-items: baseline;
  flex-grow: 1;
  width: 100%;
  flex-basis: calc(100% - 20px);
`;

const InfoTitle = styled.h1`
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

const GitIcon = styled(IconBase)`
  background: url('../icons/github.svg');
`;

const EmailIcon = styled(IconBase)`
  background: url('../icons/email.svg');
`;

const SettingsIcon = styled(IconBase)`
  background: url('../icons/settings.svg');
`;

const Contact = styled.div`
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

const Header: React.FC = () => {
  const search = usePostsStore((s) => s.search);
  const setOpen = useSettingsStore((s) => s.setOpen);

  const getVersion = () => browser.runtime.getManifest().version;

  return (
    <StyledRoot>
      <Info>
        <InfoTitle>Read Later</InfoTitle>
        <span>{getVersion()}</span>
      </Info>

      <SettingsIcon title="settings" onClick={() => setOpen(true)} />

      <Contact>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/itcat99/read-later">
          <GitIcon />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:boiping2010@gmail.com">
          <EmailIcon />
        </a>
      </Contact>

      <Search search={search} />
    </StyledRoot>
  );
};

export default memo(Header);
