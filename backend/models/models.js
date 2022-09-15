const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Musician = sequelize.define("musician", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  musician: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Genre = sequelize.define("genre", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  genre: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Song = sequelize.define("song", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  song: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER },
});

Musician.hasMany(Song);
Song.belongsTo(Musician);
Genre.hasMany(Song);
Song.belongsTo(Genre);

module.exports = {
  Musician,
  Genre,
  Song,
};
