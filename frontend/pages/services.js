import { useQuery } from "urql";
import { PAGE_QUERY } from "../lib/query";
import PageContent from "../components/PageContent";

export default function Services() {
  //Fetch data from Strapi
  const [queryData] = useQuery({ query: PAGE_QUERY });
  const { data, fetching } = queryData;

  if (fetching) return <p>Loading..</p>;
  //data[1] fetches Services Page

  const { title, body, image } = data.pages.data[1].attributes;

  console.log(body);
  return (
    <div>
      <PageContent title={title} body={body} />
    </div>
  );
}
