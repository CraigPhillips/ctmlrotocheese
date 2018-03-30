const { League } = require('./yahoo/fantasy-baseball-league');
const { S3Publisher } = require('./aws/s3-publisher');
const { WeeklyRotoScore } = require('./scoring/weekly-roto.js');

process.env.FE_CHEESE_YAHOO_USER = '';
process.env.FE_CHEESE_YAHOO_PASS = '';
process.env.FE_CHEESE_PUB_PREFIX = '';
process.env.FE_CHEESE_PUB_BUCKET = '';

(async () => {
  let league;
  try {
    league = new League('chickentendermelt');
    const s3Publisher = new S3Publisher();

    const currentScores = await league.getCurrentWeeklyScores();
    const teams = await league.getTeams();
    const rotoScores = new WeeklyRotoScore(currentScores);

    console.log(await s3Publisher.write(rotoScores, teams));
  } catch(testingError) {
    console.error('error in test run', testingError);
  } finally {
    try { if (league) await league.dispose(); }
    catch(disposeError) {
      console.error('error in league shut down', disposeError);
    }
  }
})();
