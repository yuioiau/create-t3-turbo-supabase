import type { Config } from "drizzle-kit";

import { env } from "./src/client";

export default {
  schema: "./src/schema",
  schemaFilter: ["public"],
  out: "./migrations",
  driver: "pg",
  dbCredentials: { connectionString: env.POSTGRES_URL },
  tablesFilter: ["t3turbo_*"],
} satisfies Config;
