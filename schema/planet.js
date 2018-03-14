export default `
  type Planet {
    id: Int!
    name: String!
    climate: String!
    population: String!
    residents: [Resident!]!
  }
  
  type Query {
    getPlanet(id: Int!): Planet!
    allPlanets: [Planet!]!
  }
  
  type Mutation {
    createPlanet(name: String!, climate: String!, population: String!): Boolean
  }
`;
