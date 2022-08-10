export const POST_QUERY = `
query{
  blogposts(sort:"date:DESC",pagination: {limit:3}){
    data{
      id
      attributes{
        title
        description
        date
        slug
      }
    }
  }
}
  
  `;

export const GET_POST_QUERY = `
query getPosts($slug: String!){
  blogposts(filters: {slug: {eq: $slug}}){
    data{
      attributes{
        title
        date
        slug
        description
        body
        media{
          data{
            attributes{
              formats
              url
            }
          }
        }
      }
    }
  }
}
`;

export const ALL_POST_QUERY = `
  query  {
    blogposts(sort:"date:DESC") {
      data{
        attributes{
          title
          date
          slug
          description
        }
      }
    }
  }
`;

//Pages
export const PAGE_QUERY = `query{
	pages{
    data{
      id
      attributes{
        title,
        body
        images{
          data{
            attributes{
              formats
              url
            }
          }
        }
      }
    }
  }
}`;
