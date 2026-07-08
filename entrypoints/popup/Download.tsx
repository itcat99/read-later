import { memo } from 'react';

interface Post {
  title: string;
  url: string;
  dateAdded?: number;
}

interface DownloadProps {
  posts: Post[];
  title: string;
}

const Download = memo(({ posts, title }: DownloadProps) => {
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
    <a
      href={dataUrl}
      download={filename}
      className="flex-1 inline-flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white no-underline text-xs font-medium transition-colors duration-200"
    >
      Export
    </a>
  );
});

export default Download;
