module.exports = `
   type Url {
     id: ID!
     longUrl: String!
     shortUrl: String!
     code: String!
   }
   
   type Query {
    # url - the url that wants to be shortened
   	shortenURL(url: String): Url!
   }
   
   schema {
   	query: Query
   }
`;
