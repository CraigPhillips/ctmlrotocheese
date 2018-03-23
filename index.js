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
    // league = new League('chickentendermelt');
    const s3Publisher = new S3Publisher();

    const currentScores = // await league.getCurrentWeeklyScores();
    { 'weekNumber': 1,  '1':
    { team: 'Let\'s Play Two 2',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: Infinity,
      whip: Infinity,
      score: 0 },
   '2':
    { team: 'Big League Chu',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: Infinity,
      whip: Infinity,
      score: 0 },
   '3':
    { team: 'Coco Crispy Treats',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: Infinity,
      whip: Infinity,
      score: 0 },
   '4':
    { team: 'Joseph\'s Team',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: Infinity,
      whip: Infinity,
      score: 0 },
   '5':
    { team: 'Coco Crispy Treats',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: Infinity,
      whip: Infinity,
      score: 0 },
   '6':
    { team: 'Liars or Crybabies',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: Infinity,
      whip: Infinity,
      score: 0 },
   '7':
    { team: 'Big League Chu',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: Infinity,
      whip: Infinity,
      score: 0 },
   '8':
    { team: 'Joseph\'s Team',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 3,
      era: Infinity,
      whip: Infinity,
      score: 0 },
   '9':
    { team: 'Let\'s Play Two 2',
      h: 0,
      ab: 0,
      r: 0,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: 2.54,
      whip: Infinity,
      score: 0 },
   '10':
    { team: 'Liars or Crybabies',
      h: 0,
      ab: 0,
      r: 1,
      hr: 0,
      rbi: 0,
      sb: 0,
      avg: 0,
      ip: 0,
      w: 0,
      sv: 0,
      k: 0,
      era: Infinity,
      whip: .25,
      score: 0 } };
    // console.log(currentScores);

    const teams = // await league.getTeams();
      { '1':
      { logo: 'https://ct.yimg.com/cy/637/23003436018_c22fbae30e_90sq.jpg?ct=fantasy',
        name: 'Let\'s Play Two 2',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/1',
        owner: 'Erin',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/JPP7FHWB6FUHYHXQDW7NSYWZ3A' },
    '2':
      { logo: 'https://s.yimg.com/dh/ap/fantasy/img/mlb/icon_2_lg.gif',
        name: 'Big League Chu',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/2',
        owner: 'Mike',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/4IG2RDBJ733DCWKAQRMVBEIKCM' },
    '3':
      { logo: 'https://s.yimg.com/dh/ap/fantasy/img/mlb/icon_1_lg.gif',
        name: 'Coco Crispy Treats',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/3',
        owner: 'Micah LaNasa',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/OZT4P2IYIA5NTPGZ4S274ERFRE' },
    '4':
      { logo: 'https://s.yimg.com/dh/ap/fantasy/img/mlb/icon_4_lg.gif',
        name: 'Joseph\'s Team',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/4',
        owner: 'Joseph',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/7WMX5ECBPD7MUKP4S44R5Q4GCU' },
    '5':
      { logo: 'https://secure.gravatar.com/avatar/8770749c228cba292113a0a2c9d9cae1?d=https%3A%2F%2Fs.yimg.com%2Fdh%2Fap%2Ffantasy%2Fimg%2Fprofile_48.png&s=48&r=r',
        name: 'Leader of N. Correa',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/5',
        owner: 'Logan McQuaig',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/FHUOJNIPV7NN2LVL4KPYNLDBEE' },
    '6':
      { logo: 'https://ct.yimg.com/cy/1601/25260145446_ebb0dd2128_90sq.jpg?ct=fantasy',
        name: 'Liars or Crybabies',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/6',
        owner: 'Craig',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/NXP6FHZ2QPWF3QQULVHMKWJCQY' },
    '7':
      { logo: 'https://s.yimg.com/dh/ap/fantasy/img/mlb/icon_3_lg.gif',
        name: 'Dee Gordon Bombayz',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/7',
        owner: 'Brian',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/C5GT7IX4K737VPQYYE2JYFES7U' },
    '8':
      { logo: 'https://s.yimg.com/dh/ap/fantasy/img/mlb/icon_1_lg.gif',
        name: 'R to the Izzo',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/8',
        owner: 'Jono',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/VH2U4VO2YJ3ULCXJL7GDGWFQVM' },
    '9':
      { logo: 'https://ct.yimg.com/cy/1504/25167505212_3eb6f06a9d_90sq.jpg?ct=fantasy',
        name: 'Sheinhardt Wig Co.',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/9',
        owner: 'Adam',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/IISEG4IGT56BTB7HXEHHAWAD6I' },
    '10':
      { logo: 'https://ct.yimg.com/cy/3775/25525315689_43b65236d7_90sq.jpg?ct=fantasy',
        name: 'The Mookie Way',
        url: 'https://baseball.fantasysports.yahoo.com/b1/37448/10',
        owner: 'Rocky',
        ownerProfile: 'https://profiles.sports.yahoo.com/user/ITC6NTMBDPLP2BG2PC25BQB2VY' } };
    // console.log(teams);

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
