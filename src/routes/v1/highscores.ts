import { Env } from "../..";
import { getHighscores } from "../../storage/d1";

export const ListHighscores = async (request: any, env: Env, ctx: ExecutionContext) => {
  // TODO - handle no highscore ID
  const highscoreId = request.params.highscoreId;

  let pausedFilter: boolean | undefined = undefined;
  const pausedQuery = request.query?.paused;
  if (pausedQuery === "true") {
    pausedFilter = true;
  } else if (pausedQuery === "false") {
    pausedFilter = false;
  }

  const highscores = await getHighscores(env.DB, highscoreId, pausedFilter);
  // TODO - finer grained CORS up above (middleware or something)
  const headers = {
    "Cache-Control": "max-age=6000",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  return new Response(JSON.stringify(highscores), { headers });
};
