import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import booksRoutes from "./routes/booksRoutes.js";
import charactersRoutes from "./routes/charactersRoutes.js";
import housesRoutes from "./routes/housesRoutes.js";
import spellsRoutes from "./routes/spellsRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const apiInfo = {
  message: "This is the endpoint of the English language",
  lang: "en",
  langName: "English",
  routes: ["/en/books", "/en/characters", "/en/houses", "/en/spells"],
  languagesAvailable: ["en", "es", "fr", "it", "pt"],
};

app.get("/en", (req, res) => {
  res.json(apiInfo);
});

app.use("/en/books", booksRoutes);
app.use("/en/characters", charactersRoutes);
app.use("/en/houses", housesRoutes);
app.use("/en/spells", spellsRoutes);

app.get("/en", (req, res) => {
  res.json({
    message: "This is the endpoint for the EN language.",
    lang: "en",
    langName: "English",
    routes: ["/en/books", "/en/characters", "/en/houses", "/en/spells"],
    languagesAvailable: ["en", "es", "fr", "it", "pt"],
  });
});

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to the Wizard World API! To get started, visit /en for the English language endpoints.",
    availableLanguages: [
      {
        lang: "en",
        langName: "English",
        description:
          "Main language for the API. Access books, characters, houses, and spells.",
      },
      {
        lang: "es",
        langName: "Español",
        description:
          "Idioma en español para acceder a los puntos finales relacionados con libros, personajes, casas y hechizos.",
      },
      {
        lang: "fr",
        langName: "Français",
        description:
          "Langue française pour accéder aux points finaux des livres, personnages, maisons et sorts.",
      },
      {
        lang: "it",
        langName: "Italiano",
        description:
          "Lingua italiana per accedere ai punti finali dei libri, personaggi, case e incantesimi.",
      },
      {
        lang: "pt",
        langName: "Português",
        description:
          "Idioma português para acessar os pontos finais dos livros, personagens, casas e feitiços.",
      },
    ],
    note: "To access the English version, go to /en. You can change the language by visiting /es, /fr, /it, or /pt.",
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
