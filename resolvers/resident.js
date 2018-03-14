export default {
  Query: {
    getResident: (parent, { id }, { models }) => models.Resident.findOne({ where: { id } }),
    allResidents: (parent, args, { models }) => models.Resident.findAll(),
  },
  Mutation: {
    createResident: (parent, args, { models }) => models.Resident.create(args),
  },
};
