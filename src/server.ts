import { createKoaServer } from "routing-controllers";
import helmet from "koa-helmet";
import Koa from "koa";
import dotenv from "dotenv";

dotenv.config();

const app: Koa = createKoaServer({
  cors: true,
  controllers: [__dirname + "/**/*.controller.ts"],
  classTransformer: true,
  validation: {
    forbidUnknownValues: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    validationError: { target: false }
  }
});

app.use(helmet());

export default app;
