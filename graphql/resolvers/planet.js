export default {
  Query: {
    getPlanet: (parent, { id }, { models }) => models.Planet.findOne({ where: { id } }),
    allPlanets: (parent, args, { models }) => models.Planet.findAll(),
  },
  Mutation: {
    createPlanet: async (parent, args, { models }) => {
      try {
        await models.Planet.create(args);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
