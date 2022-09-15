const Router = require("express");
const router = new Router();
const { Song, Musician, Genre } = require("../models/models");

router.get("/songs", async (req, res) => {
  const songs = await Song.findAll();
  return res.json(songs);
});

router.get("/musicians", async (req, res) => {
  const musicians = await Musician.findAll();
  return res.json(musicians);
});

router.get("/genres", async (req, res) => {
  const genres = await Genre.findAll();
  return res.json(genres);
});

router.get("/allData", async (req, res) => {
  const data = await Song.findAll({
    attributes: ["id", "song", "musicianId", "genreId", "year"],
    include: [
      {
        model: Musician,
        required: true,
      },
      {
        model: Genre,
        required: true,
      },
    ],
  });
  return res.json(data);
});
module.exports = router;
