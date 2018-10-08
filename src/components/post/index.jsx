import React, { PureComponent } from 'react';
import { StyledRoot, RemoveBtn, Link, Icon } from './styled';

class Post extends PureComponent {
  remove = () => {
    const { remove, id } = this.props;

    remove && remove(id);
  };

  render() {
    const { imgsrc, title, url, show } = this.props;
    return (
      <StyledRoot show={show}>
        <Icon
          src={imgsrc}
          alt={title}
          // innerRef={this.initLoad}
          // onLoad={this.loadImg}
        />
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
        <RemoveBtn onClick={this.remove} role="remove-button" />
      </StyledRoot>
    );
  }
}

export default Post;
