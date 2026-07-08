import type React from 'react';
import { memo } from 'react';
import styled from 'styled-components';

const StyleRoot = styled.a.attrs((props: { $data: string; $download: string }) => ({
  href: props.$data,
  download: props.$download,
}))`
  text-align: center;
  flex-grow: 1;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-decoration: none;
  padding: 4px;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    transition: opacity 300ms;
  }
`;

interface Post {
  title: string;
  url: string;
  dateAdded?: number;
}

interface DownloadProps {
  posts: Post[];
  title: string;
}

const Download: React.FC<DownloadProps> = memo(({ posts, title }) => {
  const getNetscapeBookmarkFormat = () => {
    let list = '';
    posts.forEach((post) => {
      const { url, title: t, dateAdded } = post;
      list += `<DT><A HREF="${url}" ADD_DATE="${dateAdded || ''}">${t}</A>\n`;
    });

    return `
    <!DOCTYPE NETSCAPE-Bookmark-file-1>
    <!--This is an automatically generated file.
    It will be read and overwritten.
    Do Not Edit! -->
    <Title>Bookmarks</Title>
    <H1>Bookmarks</H1>
    <DT><H3 FOLDED>${title}</H3>
    <DL><p>
    ${list}
    </DL><p>
    `;
  };

  const d = new Date();
  const filename = `readLater_${d.getFullYear()}_${d.getMonth() + 1}_${d.getDate()}_${d.getHours()}${d.getMinutes()}${d.getSeconds()}.html`;
  const dataUrl = `data:text/html;charset=utf-8,${encodeURIComponent(getNetscapeBookmarkFormat())}`;

  return (
    <StyleRoot $data={dataUrl} $download={filename}>
      export
    </StyleRoot>
  );
});

export default Download;
