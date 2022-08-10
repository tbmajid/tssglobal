import { useQuery } from "urql";
import { GET_POST_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

const myPosts = () => {
  //Fetch Slug
  const { query } = useRouter();

  //Fetch Graphql data
  const [queryData] = useQuery({
    query: GET_POST_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = queryData;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error loading data {error.message}</p>;
  console.log(data);
  const { title, date, body, media } = data.blogposts.data[0].attributes;

  console.log(data);
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>

      <p>{body}</p>
      <p>
        <img src={media.data.attributes.formats.small.url} alt={title} />
      </p>
    </div>
  );
};

export default myPosts;
