export default `
  
  type Resident {
    id: Int!
    name: String!
    planets: [Planet!]!
  }
  
  type Query {
    getResident(id: Int!): Resident!
    allResidents: [Resident!]!
  }
  
  type Mutation {
    createResident(name: String!): Resident!
  }
 
`;
