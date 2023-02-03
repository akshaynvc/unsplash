import { TextField } from "@mui/material";
import React, { memo, useCallback, useState } from "react";
import { useStyle } from "./styles";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchRounded, CloseSharp } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

type SearchBarProps = {
  getQuery: Function;
};
const SearchBar = memo(({ getQuery }: SearchBarProps) => {
  const classes = useStyle();
  const [fieldValue, setFieldValue] = useState<string>("");

  const handleSearch = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        getQuery(fieldValue);
      }
    },
    [fieldValue, getQuery]
  );
  return (
    <TextField
      fullWidth
      size="small"
      value={fieldValue}
      variant="outlined"
      placeholder="Search images"
      className={classes.searchBar}
      onChange={(e) => setFieldValue(e.target.value)}
      onKeyPress={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRounded />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {fieldValue ? (
              <IconButton disableRipple onClick={() => setFieldValue("")}>
                <CloseSharp />
              </IconButton>
            ) : null}
          </InputAdornment>
        ),
      }}
    />
  );
});

export default SearchBar;
