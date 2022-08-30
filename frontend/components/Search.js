import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Highlight,
} from "react-instantsearch-dom";

import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { Box } from "@mui/material";

import Link from "next/link";

const searchClient = instantMeiliSearch("http://127.0.0.1:7700", "", {
  placeholderSearch: false,
  paginationTotalHits: 2,
  primaryKey: "id",
});

const Search = () => {
  return (
    <div className="InstantSearch">
      {" "}
      <InstantSearch indexName="blogpost" searchClient={searchClient}>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          {" "}
          <SearchBox className="SearchT" />
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
export default Search;
