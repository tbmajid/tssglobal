import {
  InstantSearch,
  InfiniteHits,
  Highlight,
  connectSearchBox,
} from "react-instantsearch-dom";

import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { Box, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import Link from "next/link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  borderColor: "#2843b8",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MELI_SERVER,
  process.env.NEXT_PUBLIC_MEILI_MASTER_KEY,
  {
    placeholderSearch: false,
    paginationTotalHits: 2,
    primaryKey: "id",
  }
);

const SearchBox = ({ currentRefinement, refine }) => (
  <form noValidate action="" role="search">
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />{" "}
    </Search>
  </form>
);
const CustomSearchBox = connectSearchBox(SearchBox);
const SearchBar = () => {
  return (
    <div className="InstantSearch">
      {" "}
      <InstantSearch indexName="blogpost" searchClient={searchClient}>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          {" "}
          <CustomSearchBox />
        </Box>

        <InfiniteHits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
};

const Hit = ({ hit }) => (
  <div key={hit.id}>
    {" "}
    <Box sx={{ typography: "h6", margin: 2 }}>
      <Link href={`/posts/${hit.slug}`}>
        <a>
          <Highlight attribute="title" hit={hit} />
        </a>
      </Link>
    </Box>
    <Box sx={{ typography: "body2", margin: 2 }}>
      <Highlight attribute="description" hit={hit} />
    </Box>
  </div>
);
export default SearchBar;
