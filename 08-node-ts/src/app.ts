import express from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todo";

const app = express();

app.use(json());
app.use("/todos", todoRoutes);
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ message: err.message });
});


app.listen(5000, () => console.log("Server running on port 5000."));