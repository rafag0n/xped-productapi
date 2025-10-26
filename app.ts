import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./infra/routes/routes.js";
import swaggerJson from "./src/swagger/swagger.json" assert { type: "json" };

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
RegisterRoutes(app);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use(function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  if (err && typeof err === "object" && "status" in err) {
    const status = (err as any).status || 500;
    const message = (err as any).message || "Internal Server Error";
    return res.status(status).json({ message });
  }

  console.error(err);
  return res.status(500).json({ message: "Unhandled Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}; Check docs at http://localhost:${PORT}/docs`);
});

export default app;