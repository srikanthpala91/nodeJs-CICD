import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});


app.get("/quote", (req, res) => {
  const quotes = [
    "Talk is cheap. Show me the code. — Linus Torvalds",
    "Programs must be written for people to read. — Harold Abelson",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Simplicity is the soul of efficiency. — Austin Freeman",
    "Any fool can write code that a computer can understand. — Martin Fowler",
    "Code is like humor. When you have to explain it, it’s bad. — Cory House"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json({
    quote: randomQuote
  });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


