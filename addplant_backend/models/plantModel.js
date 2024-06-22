export default (sequelize, DataTypes) => {
  const Plant = sequelize.define(
    "plant",
    {
      plant_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      plant_name: {
        type: DataTypes.STRING(1000),
      },
      description: {
        type: DataTypes.STRING(1000),
      },
      location: {
        type: DataTypes.STRING(1000),
      },
      image: {
        type: DataTypes.STRING(500),
      },
    },
    { timestamps: false }
  );
  return Plant;
};
