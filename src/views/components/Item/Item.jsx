/* eslint no-console:0 */
import React, { PureComponent } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import { getFavicon } from "../../utils";

const styles = () => ({
  root: {
    paddingTop: "6px",
    paddingBottom: "6px",
    "&:hover button": {
      visibility: "visible",
    },
  },
  button: {
    visibility: "hidden",
    padding: "6px",
  },
  avatar: {
    width: "26px",
    height: "26px",
    fontSize: "1rem",
    marginRight: "10px",
  },
});

class Item extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      favicon: "",
    };
  }

  render() {
    const { title, url, remove, id, classes } = this.props;
    const { favicon } = this.state;

    return (
      <ListItem className={classes.root} button component="li">
        {favicon ? (
          <Avatar className={classes.avatar} src={favicon} />
        ) : (
          <Avatar className={classes.avatar}>{title.trim().slice(0, 1)}</Avatar>
        )}
        <a
          style={{
            flex: "1 1 auto",
            textDecorationLine: "none",
          }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText title={title}>{title}</ListItemText>
        </a>
        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={() => remove(id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItem>
    );
  }

  componentDidMount() {
    const { url } = this.props;

    getFavicon(url)
      .then(favicon => {
        let realFavicon = "";
        for (let i = 0; i < favicon.length; i++) {
          const { type, src } = favicon[i];

          if (type === "image/x-icon") {
            realFavicon = src;

            break;
          }
        }

        this.setState({ favicon: realFavicon });
      })
      .catch(err => console.error("Err: ", err));
  }
}

export default withStyles(styles)(Item);
