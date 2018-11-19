import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SearchOutlined } from "@material-ui/icons";

const Search = props => {
  const { search } = props;

  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <SearchOutlined />
          </InputAdornment>
        ),
      }}
      onChange={e => {
        const { target } = e.nativeEvent;

        search(target.value);
      }}
    />
  );
};

export default Search;
