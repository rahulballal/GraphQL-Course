// The GraphQL schema in string form
const typeDefs = `
type Author {
	id: ID!
	info: Person
}
type Person {
	name: String!
	age: Int
	gender: String
}
type Query {
  getAuthors: [Author]
  retrieveAuthor(id: ID!): Author
}
type Mutation {
  createAuthor(name: String!, gender: String!) : Author,
  updateAuthor(id: ID!, name: String, gender: String, age: Int): Author
}
`;

module.exports = typeDefs;