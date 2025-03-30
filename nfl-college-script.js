const nflPlayers = {
    // Quarterbacks
    "Patrick Mahomes": { college: "Texas Tech", position: "Quarterback" },
    "Josh Allen": { college: "Wyoming", position: "Quarterback" },
    "Lamar Jackson": { college: "Louisville", position: "Quarterback" },
    "Jalen Hurts": { college: "Oklahoma", position: "Quarterback" },
    "Justin Herbert": { college: "Oregon", position: "Quarterback" },
    "Joe Burrow": { college: "LSU", position: "Quarterback" },
    "Trevor Lawrence": { college: "Clemson", position: "Quarterback" },
    "Dak Prescott": { college: "Mississippi State", position: "Quarterback" },
    "Brock Purdy": { college: "Iowa State", position: "Quarterback" },
    "Jordan Love": { college: "Utah State", position: "Quarterback" },
    "C.J. Stroud": { college: "Ohio State", position: "Quarterback" },
    "Bryce Young": { college: "Alabama", position: "Quarterback" },
    "Anthony Richardson": { college: "Florida", position: "Quarterback" },
    "Will Levis": { college: "Kentucky", position: "Quarterback" },
    "Hendon Hooker": { college: "Tennessee", position: "Quarterback" },
    "Tanner McKee": { college: "Stanford", position: "Quarterback" },
    "Clayton Tune": { college: "Houston", position: "Quarterback" },
    
    // Running Backs
    "Derrick Henry": { college: "Alabama", position: "Running Back" },
    "Christian McCaffrey": { college: "Stanford", position: "Running Back" },
    "Saquon Barkley": { college: "Penn State", position: "Running Back" },
    "Nick Chubb": { college: "Georgia", position: "Running Back" },
    "Austin Ekeler": { college: "Western Colorado", position: "Running Back" },
    "Jonathan Taylor": { college: "Wisconsin", position: "Running Back" },
    "Alvin Kamara": { college: "Tennessee", position: "Running Back" },
    "Josh Jacobs": { college: "Alabama", position: "Running Back" },
    "Bijan Robinson": { college: "Texas", position: "Running Back" },
    "Jahmyr Gibbs": { college: "Alabama", position: "Running Back" },
    "Isiah Pacheco": { college: "Rutgers", position: "Running Back" },
    "James Cook": { college: "Georgia", position: "Running Back" },
    "Zach Charbonnet": { college: "UCLA", position: "Running Back" },
    "Deuce Vaughn": { college: "Kansas State", position: "Running Back" },
    "Tank Bigsby": { college: "Auburn", position: "Running Back" },
    "Kendre Miller": { college: "TCU", position: "Running Back" },
    "Roschon Johnson": { college: "Texas", position: "Running Back" },
    
    // Wide Receivers
    "Justin Jefferson": { college: "LSU", position: "Wide Receiver" },
    "Ja'Marr Chase": { college: "LSU", position: "Wide Receiver" },
    "Tyreek Hill": { college: "West Alabama", position: "Wide Receiver" },
    "Cooper Kupp": { college: "Eastern Washington", position: "Wide Receiver" },
    "Stefon Diggs": { college: "Maryland", position: "Wide Receiver" },
    "Davante Adams": { college: "Fresno State", position: "Wide Receiver" },
    "A.J. Brown": { college: "Ole Miss", position: "Wide Receiver" },
    "CeeDee Lamb": { college: "Oklahoma", position: "Wide Receiver" },
    "Puka Nacua": { college: "BYU", position: "Wide Receiver" },
    "Chris Olave": { college: "Ohio State", position: "Wide Receiver" },
    "Garrett Wilson": { college: "Ohio State", position: "Wide Receiver" },
    "Drake London": { college: "USC", position: "Wide Receiver" },
    "Jaxon Smith-Njigba": { college: "Ohio State", position: "Wide Receiver" },
    "Jordan Addison": { college: "USC", position: "Wide Receiver" },
    "Zay Flowers": { college: "Boston College", position: "Wide Receiver" },
    "Marvin Mims": { college: "Oklahoma", position: "Wide Receiver" },
    "Jonathan Mingo": { college: "Ole Miss", position: "Wide Receiver" },
    
    // Tight Ends
    "Travis Kelce": { college: "Cincinnati", position: "Tight End" },
    "George Kittle": { college: "Iowa", position: "Tight End" },
    "Mark Andrews": { college: "Oklahoma", position: "Tight End" },
    "T.J. Hockenson": { college: "Iowa", position: "Tight End" },
    "Kyle Pitts": { college: "Florida", position: "Tight End" },
    "Sam LaPorta": { college: "Iowa", position: "Tight End" },
    "Dalton Kincaid": { college: "Utah", position: "Tight End" },
    "Michael Mayer": { college: "Notre Dame", position: "Tight End" },
    "Luke Musgrave": { college: "Oregon State", position: "Tight End" },
    "Darnell Washington": { college: "Georgia", position: "Tight End" },
    "Brenton Strange": { college: "Penn State", position: "Tight End" },
    "Josh Whyle": { college: "Cincinnati", position: "Tight End" },
    "Payne Durham": { college: "Purdue", position: "Tight End" },
    
    // Offensive Line
    "Trent Williams": { college: "Oklahoma", position: "Offensive Tackle" },
    "Zack Martin": { college: "Notre Dame", position: "Guard" },
    "Jason Kelce": { college: "Cincinnati", position: "Center" },
    "Quenton Nelson": { college: "Notre Dame", position: "Guard" },
    "Lane Johnson": { college: "Oklahoma", position: "Offensive Tackle" },
    "Penei Sewell": { college: "Oregon", position: "Offensive Tackle" },
    "Rashawn Slater": { college: "Northwestern", position: "Offensive Tackle" },
    "Tyler Linderbaum": { college: "Iowa", position: "Center" },
    "Wyatt Teller": { college: "Virginia Tech", position: "Guard" },
    "Elgton Jenkins": { college: "Mississippi State", position: "Guard" },
    
    // Defensive Line
    "Aaron Donald": { college: "Pitt", position: "Defensive Tackle" },
    "Chris Jones": { college: "Mississippi State", position: "Defensive Tackle" },
    "Jeffery Simmons": { college: "Mississippi State", position: "Defensive Tackle" },
    "Quinnen Williams": { college: "Alabama", position: "Defensive Tackle" },
    "DeForest Buckner": { college: "Oregon", position: "Defensive Tackle" },
    "Jalen Carter": { college: "Georgia", position: "Defensive Tackle" },
    "Calijah Kancey": { college: "Pitt", position: "Defensive Tackle" },
    "Bryan Bresee": { college: "Clemson", position: "Defensive Tackle" },
    "Mazi Smith": { college: "Michigan", position: "Defensive Tackle" },
    "Siaki Ika": { college: "Baylor", position: "Defensive Tackle" },
    
    // Edge Rushers
    "T.J. Watt": { college: "Wisconsin", position: "Edge Rusher" },
    "Myles Garrett": { college: "Texas A&M", position: "Edge Rusher" },
    "Micah Parsons": { college: "Penn State", position: "Edge Rusher" },
    "Nick Bosa": { college: "Ohio State", position: "Edge Rusher" },
    "Maxx Crosby": { college: "Eastern Michigan", position: "Edge Rusher" },
    "Aidan Hutchinson": { college: "Michigan", position: "Edge Rusher" },
    "Will Anderson Jr.": { college: "Alabama", position: "Edge Rusher" },
    "Tyree Wilson": { college: "Texas Tech", position: "Edge Rusher" },
    "Lukas Nacua": { college: "BYU", position: "Edge Rusher" },
    "Felix Anudike-Uzomah": { college: "Kansas State", position: "Edge Rusher" },
    "Isaiah Foskey": { college: "Notre Dame", position: "Edge Rusher" },
    "B.J. Ojulari": { college: "LSU", position: "Edge Rusher" },
    
    // Linebackers
    "Fred Warner": { college: "BYU", position: "Linebacker" },
    "Roquan Smith": { college: "Georgia", position: "Linebacker" },
    "Bobby Wagner": { college: "Utah State", position: "Linebacker" },
    "Matt Milano": { college: "Boston College", position: "Linebacker" },
    "Dre Greenlaw": { college: "Arkansas", position: "Linebacker" },
    "Devin White": { college: "LSU", position: "Linebacker" },
    "Patrick Queen": { college: "LSU", position: "Linebacker" },
    "Jermaine Burton": { college: "Georgia", position: "Linebacker" },
    "Drew Sanders": { college: "Arkansas", position: "Linebacker" },
    "Jack Campbell": { college: "Iowa", position: "Linebacker" },
    "Trenton Simpson": { college: "Clemson", position: "Linebacker" },
    "Daiyan Henley": { college: "Washington State", position: "Linebacker" },
    "Owen Pappoe": { college: "Auburn", position: "Linebacker" },
    
    // Cornerbacks
    "Jalen Ramsey": { college: "Florida State", position: "Cornerback" },
    "Patrick Surtain II": { college: "Alabama", position: "Cornerback" },
    "Sauce Gardner": { college: "Cincinnati", position: "Cornerback" },
    "Derek Stingley Jr.": { college: "LSU", position: "Cornerback" },
    "Jaire Alexander": { college: "Louisville", position: "Cornerback" },
    "Marlon Humphrey": { college: "Alabama", position: "Cornerback" },
    "Trent McDuffie": { college: "Washington", position: "Cornerback" },
    "Kaiir Elam": { college: "Florida", position: "Cornerback" },
    "Devon Witherspoon": { college: "Illinois", position: "Cornerback" },
    "Christian Gonzalez": { college: "Oregon", position: "Cornerback" },
    "Emmanuel Forbes": { college: "Mississippi State", position: "Cornerback" },
    "Joey Porter Jr.": { college: "Penn State", position: "Cornerback" },
    "Deonte Banks": { college: "Maryland", position: "Cornerback" },
    
    // Safeties
    "Minkah Fitzpatrick": { college: "Alabama", position: "Safety" },
    "Derwin James": { college: "Florida State", position: "Safety" },
    "Budda Baker": { college: "Washington", position: "Safety" },
    "Kyle Hamilton": { college: "Notre Dame", position: "Safety" },
    "Justin Simmons": { college: "Boston College", position: "Safety" },
    "Jessey Bates III": { college: "Wake Forest", position: "Safety" },
    "Antoine Winfield Jr.": { college: "Minnesota", position: "Safety" },
    "Jevon Holland": { college: "Oregon", position: "Safety" },
    "Brian Branch": { college: "Alabama", position: "Safety" },
    "Sydney Brown": { college: "Illinois", position: "Safety" },
    "Jordan Battle": { college: "Alabama", position: "Safety" },
    "Ji'Ayir Brown": { college: "Penn State", position: "Safety" },
    "Antonio Johnson": { college: "Texas A&M", position: "Safety" },
    
    // Special Teams
    "Justin Tucker": { college: "Texas", position: "Kicker" },
    "Harrison Butker": { college: "Georgia Tech", position: "Kicker" },
    "Tyler Bass": { college: "Georgia Southern", position: "Kicker" },
    "Evan McPherson": { college: "Florida", position: "Kicker" },
    "Jake Moody": { college: "Michigan", position: "Kicker" },
    "Chad Ryland": { college: "Maryland", position: "Kicker" },
    "Ryan Stonehouse": { college: "Colorado State", position: "Punter" },
    "Braden Mann": { college: "Texas A&M", position: "Punter" },
    "Michael Turk": { college: "Oklahoma", position: "Punter" },
    
    // Additional Quarterbacks
    "Sam Howell": { college: "North Carolina", position: "Quarterback" },
    "Desmond Ridder": { college: "Cincinnati", position: "Quarterback" },
    "Malik Willis": { college: "Liberty", position: "Quarterback" },
    "Matt Corral": { college: "Ole Miss", position: "Quarterback" },
    "Bailey Zappe": { college: "Western Kentucky", position: "Quarterback" },
    
    // Additional Running Backs
    "Rachaad White": { college: "Arizona State", position: "Running Back" },
    "Kenneth Walker III": { college: "Michigan State", position: "Running Back" },
    "Brian Robinson Jr.": { college: "Alabama", position: "Running Back" },
    "Dameon Pierce": { college: "Florida", position: "Running Back" },
    "James Conner": { college: "Pitt", position: "Running Back" },
    "David Montgomery": { college: "Iowa State", position: "Running Back" },
    "Rhamondre Stevenson": { college: "Oklahoma", position: "Running Back" },
    "J.K. Dobbins": { college: "Ohio State", position: "Running Back" },
    "Cam Akers": { college: "Florida State", position: "Running Back" },
    "D'Andre Swift": { college: "Georgia", position: "Running Back" },
    
    // Additional Wide Receivers
    "DeVonta Smith": { college: "Alabama", position: "Wide Receiver" },
    "Jaylen Waddle": { college: "Alabama", position: "Wide Receiver" },
    "Rashod Bateman": { college: "Minnesota", position: "Wide Receiver" },
    "Elijah Moore": { college: "Ole Miss", position: "Wide Receiver" },
    "Rondale Moore": { college: "Purdue", position: "Wide Receiver" },
    "Amon-Ra St. Brown": { college: "USC", position: "Wide Receiver" },
    "Darnell Mooney": { college: "Tulane", position: "Wide Receiver" },
    "Brandon Aiyuk": { college: "Arizona State", position: "Wide Receiver" },
    "Jerry Jeudy": { college: "Alabama", position: "Wide Receiver" },
    "Henry Ruggs III": { college: "Alabama", position: "Wide Receiver" },
    
    // Additional Tight Ends
    "Cole Kmet": { college: "Notre Dame", position: "Tight End" },
    "Pat Freiermuth": { college: "Penn State", position: "Tight End" },
    "Hunter Henry": { college: "Arkansas", position: "Tight End" },
    "Dallas Goedert": { college: "South Dakota State", position: "Tight End" },
    "Trey McBride": { college: "Colorado State", position: "Tight End" },
    
    // Additional Offensive Line
    "Andrew Thomas": { college: "Georgia", position: "Offensive Tackle" },
    "Jedrick Wills": { college: "Alabama", position: "Offensive Tackle" },
    "Mekhi Becton": { college: "Louisville", position: "Offensive Tackle" },
    "Tristan Wirfs": { college: "Iowa", position: "Offensive Tackle" },
    "Isaiah Wynn": { college: "Georgia", position: "Offensive Tackle" },
    "Creed Humphrey": { college: "Oklahoma", position: "Center" },
    "Tyler Biadasz": { college: "Wisconsin", position: "Center" },
    "Garrett Bradbury": { college: "NC State", position: "Center" },
    "Brandon Scherff": { college: "Iowa", position: "Guard" },
    "Chris Lindstrom": { college: "Boston College", position: "Guard" },
    
    // Additional Defensive Line
    "Derrick Brown": { college: "Auburn", position: "Defensive Tackle" },
    "Javon Kinlaw": { college: "South Carolina", position: "Defensive Tackle" },
    "Dexter Lawrence": { college: "Clemson", position: "Defensive Tackle" },
    "Ed Oliver": { college: "Houston", position: "Defensive Tackle" },
    "Christian Wilkins": { college: "Clemson", position: "Defensive Tackle" },
    
    // Additional Edge Rushers
    "Chase Young": { college: "Ohio State", position: "Edge Rusher" },
    "Montez Sweat": { college: "Mississippi State", position: "Edge Rusher" },
    "Rashan Gary": { college: "Michigan", position: "Edge Rusher" },
    "Clelin Ferrell": { college: "Clemson", position: "Edge Rusher" },
    "Josh Allen": { college: "Kentucky", position: "Edge Rusher" },
    
    // Additional Linebackers
    "Devin Lloyd": { college: "Utah", position: "Linebacker" },
    "Nakobe Dean": { college: "Georgia", position: "Linebacker" },
    "Quay Walker": { college: "Georgia", position: "Linebacker" },
    "Leo Chenal": { college: "Wisconsin", position: "Linebacker" },
    "Christian Harris": { college: "Alabama", position: "Linebacker" },
    
    // Additional Cornerbacks
    "Tariq Woolen": { college: "UTSA", position: "Cornerback" },
    "Roger McCreary": { college: "Auburn", position: "Cornerback" },
    "Kyler Gordon": { college: "Washington", position: "Cornerback" },
    "Andrew Booth Jr.": { college: "Clemson", position: "Cornerback" },
    "Martin Emerson": { college: "Mississippi State", position: "Cornerback" },
    
    // Additional Safeties
    "Lewis Cine": { college: "Georgia", position: "Safety" },
    "Daxton Hill": { college: "Michigan", position: "Safety" },
    "Kyle Dugger": { college: "Lenoir-Rhyne", position: "Safety" },
    "Grant Delpit": { college: "LSU", position: "Safety" },
    "Xavier McKinney": { college: "Alabama", position: "Safety" },
    
    // Additional Special Teams
    "Cameron Dicker": { college: "Texas", position: "Kicker" },
    "Cade York": { college: "LSU", position: "Kicker" },
    "Matt Araiza": { college: "San Diego State", position: "Punter" },
    "Jordan Stout": { college: "Penn State", position: "Punter" },
    "Jake Camarda": { college: "Georgia", position: "Punter" },
    
    // Long Snappers
    "Luke Rhodes": { college: "William & Mary", position: "Long Snapper" },
    "Morgan Cox": { college: "Tennessee", position: "Long Snapper" },
    "Josh Harris": { college: "Auburn", position: "Long Snapper" },
    
    // Return Specialists
    "Devin Duvernay": { college: "Texas", position: "Return Specialist" },
    "Braxton Berrios": { college: "Miami", position: "Return Specialist" },
    "Ray-Ray McCloud": { college: "Clemson", position: "Return Specialist" },
    
    // Fullbacks
    "Patrick Ricard": { college: "Maine", position: "Fullback" },
    "Kyle Juszczyk": { college: "Harvard", position: "Fullback" },
    "Alec Ingold": { college: "Wisconsin", position: "Fullback" },
    
    // H-Backs
    "C.J. Ham": { college: "Augustana", position: "H-Back" },
    "Keith Smith": { college: "San Jose State", position: "H-Back" },
    
    // Additional Offensive Line (Tackles)
    "Kolton Miller": { college: "UCLA", position: "Offensive Tackle" },
    "Mike McGlinchey": { college: "Notre Dame", position: "Offensive Tackle" },
    "Taylor Lewan": { college: "Michigan", position: "Offensive Tackle" },
    "Orlando Brown Jr.": { college: "Oklahoma", position: "Offensive Tackle" },
    "Charles Cross": { college: "Mississippi State", position: "Offensive Tackle" },
    
    // Additional Offensive Line (Guards)
    "Joel Bitonio": { college: "Nevada", position: "Guard" },
    "Brandon Brooks": { college: "Miami (OH)", position: "Guard" },
    "Shaq Mason": { college: "Georgia Tech", position: "Guard" },
    "Rodger Saffold": { college: "Indiana", position: "Guard" },
    "Ali Marpet": { college: "Hobart", position: "Guard" },
    
    // Additional Defensive Line (Tackles)
    "Vita Vea": { college: "Washington", position: "Defensive Tackle" },
    "Daron Payne": { college: "Alabama", position: "Defensive Tackle" },
    "Da'Ron Payne": { college: "Alabama", position: "Defensive Tackle" },
    "Derrick Nnadi": { college: "Florida State", position: "Defensive Tackle" },
    
    // Additional Edge Rushers
    "Brian Burns": { college: "Florida State", position: "Edge Rusher" },
    "Josh Sweat": { college: "Florida State", position: "Edge Rusher" },
    "Jermaine Johnson": { college: "Florida State", position: "Edge Rusher" },
    "Kayvon Thibodeaux": { college: "Oregon", position: "Edge Rusher" },
    "Travon Walker": { college: "Georgia", position: "Edge Rusher" },
    
    // Additional Linebackers
    "Devin Bush": { college: "Michigan", position: "Linebacker" },
    "Isaiah Simmons": { college: "Clemson", position: "Linebacker" },
    "Kenneth Murray": { college: "Oklahoma", position: "Linebacker" },
    "Jordyn Brooks": { college: "Texas Tech", position: "Linebacker" },
    
    // Additional Cornerbacks
    "Jeff Okudah": { college: "Ohio State", position: "Cornerback" },
    "C.J. Henderson": { college: "Florida", position: "Cornerback" },
    "A.J. Terrell": { college: "Clemson", position: "Cornerback" },
    "Damon Arnette": { college: "Ohio State", position: "Cornerback" },
    "Noah Igbinoghene": { college: "Auburn", position: "Cornerback" },
    
    // Additional Safeties
    "Ashtyn Davis": { college: "California", position: "Safety" },
    "Brandon Jones": { college: "Texas", position: "Safety" },
    
    // Additional Fullbacks
    "Jakob Johnson": { college: "Tennessee", position: "Fullback" },
    "Derek Watt": { college: "Wisconsin", position: "H-Back" },
    "Andy Janovich": { college: "Nebraska", position: "H-Back" },
    
    // Additional H-Backs
    "C.J. Ham": { college: "Augustana", position: "Fullback" },
    
    // Additional Offensive Line (Tackles)
    "Darnell Wright": { college: "Tennessee", position: "Offensive Tackle" },
    "Anton Harrison": { college: "Oklahoma", position: "Offensive Tackle" },
    "Broderick Jones": { college: "Georgia", position: "Offensive Tackle" },
    "Dawand Jones": { college: "Ohio State", position: "Offensive Tackle" },
    "Wanya Morris": { college: "Oklahoma", position: "Offensive Tackle" },
    
    // Additional Offensive Line (Guards)
    "O'Cyrus Torrence": { college: "Florida", position: "Guard" },
    "Steve Avila": { college: "TCU", position: "Guard" },
    "Cody Mauch": { college: "North Dakota State", position: "Guard" },
    "Chandler Zavala": { college: "NC State", position: "Guard" },
    "Andrew Vorhees": { college: "USC", position: "Guard" },
    
    // Additional Defensive Line (Tackles)
    "Keeanu Benton": { college: "Wisconsin", position: "Defensive Tackle" },
    "Zacch Pickens": { college: "South Carolina", position: "Defensive Tackle" },
    "Gervon Dexter": { college: "Florida", position: "Defensive Tackle" },
    "Cameron Young": { college: "Mississippi State", position: "Defensive Tackle" },
    "Mazi Smith": { college: "Michigan", position: "Defensive Tackle" },
    
    // Additional Edge Rushers
    "Derick Hall": { college: "Auburn", position: "Edge Rusher" },
    "Byron Young": { college: "Tennessee", position: "Edge Rusher" },
    "Will McDonald IV": { college: "Iowa State", position: "Edge Rusher" },
    "Tuli Tuipulotu": { college: "USC", position: "Edge Rusher" },
    "YaYa Diaby": { college: "Louisville", position: "Edge Rusher" },
    
    // Additional Linebackers
    "Henry To'oTo'o": { college: "Alabama", position: "Linebacker" },
    "Dorian Williams": { college: "Tulane", position: "Linebacker" },
    "Ivan Pace Jr.": { college: "Cincinnati", position: "Linebacker" },
    "SirVocea Dennis": { college: "Pitt", position: "Linebacker" },
    "Jack Campbell": { college: "Iowa", position: "Linebacker" },
    
    // Additional Cornerbacks
    "Clark Phillips III": { college: "Utah", position: "Cornerback" },
    "Tyrique Stevenson": { college: "Miami", position: "Cornerback" },
    "Julius Brents": { college: "Kansas State", position: "Cornerback" },
    "Cory Trice": { college: "Purdue", position: "Cornerback" },
    "Riley Moss": { college: "Iowa", position: "Cornerback" },
    
    // Additional Safeties
    "Jartavius Martin": { college: "Illinois", position: "Safety" },
    "Christopher Smith": { college: "Georgia", position: "Safety" },
    "Jammie Robinson": { college: "Florida State", position: "Safety" },
    "Brandon Joseph": { college: "Notre Dame", position: "Safety" }
};

// Get all colleges for generating wrong options
const allColleges = [...new Set(Object.values(nflPlayers).map(player => player.college))];

let currentRound = 1;
let currentPlayer = '';
let currentCollege = '';
let gameActive = true;
let lastPlayedDate = localStorage.getItem('lastPlayedDate');
let currentDate = new Date().toDateString();
let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
let bestStreak = parseInt(localStorage.getItem('bestStreak')) || 0;
let lastGameResult = localStorage.getItem('lastGameResult');

// Achievement thresholds
const ACHIEVEMENTS = {
    rookie: { threshold: 1, name: "Rookie", description: "Complete your first game" },
    streak3: { threshold: 3, name: "On Fire", description: "3-day winning streak" },
    streak7: { threshold: 7, name: "Week Warrior", description: "7-day winning streak" },
    streak14: { threshold: 14, name: "Fortnight Champion", description: "14-day winning streak" },
    streak30: { threshold: 30, name: "Monthly Master", description: "30-day winning streak" },
    perfectGame: { threshold: 1, name: "Perfect Game", description: "Complete all rounds without mistakes" }
};

// Streak history
let streakHistory = JSON.parse(localStorage.getItem('streakHistory')) || [];
let totalGames = parseInt(localStorage.getItem('totalGames')) || 0;
let totalWins = parseInt(localStorage.getItem('totalWins')) || 0;
let achievements = JSON.parse(localStorage.getItem('achievements')) || {};

// New statistics tracking
let positionStats = JSON.parse(localStorage.getItem('positionStats')) || {};
let collegeStats = JSON.parse(localStorage.getItem('collegeStats')) || {};
let timeStats = JSON.parse(localStorage.getItem('timeStats')) || {
    morning: { total: 0, correct: 0 },
    afternoon: { total: 0, correct: 0 },
    evening: { total: 0, correct: 0 }
};
let dailyStats = JSON.parse(localStorage.getItem('dailyStats')) || {};

// DOM Elements
const currentRoundElement = document.getElementById('current-round');
const roundStatusElement = document.getElementById('round-status');
const playerNameElement = document.getElementById('player-name');
const optionsContainer = document.getElementById('options-container');
const messageElement = document.getElementById('message');
const gameOverElement = document.getElementById('game-over');
const finalMessageElement = document.getElementById('final-message');
const nextGameTimeElement = document.getElementById('next-game-time');
const streakElement = document.getElementById('current-streak');
const bestStreakElement = document.getElementById('best-streak');

// New DOM Elements for statistics
const positionStatsElement = document.getElementById('position-stats');
const collegeStatsElement = document.getElementById('college-stats');
const timeStatsElement = document.getElementById('time-stats');
const dailyStatsElement = document.getElementById('daily-stats');

// User management
let currentUser = localStorage.getItem('currentUser');
let allUsers = JSON.parse(localStorage.getItem('allUsers')) || {};

// DOM Elements for login
const loginScreen = document.getElementById('login-screen');
const gameContainer = document.getElementById('game-container');
const usernameInput = document.getElementById('username-input');
const startGameBtn = document.getElementById('start-game-btn');

// DOM Elements for leaderboard
const streakLeaderboardContent = document.getElementById('streak-leaderboard-content');
const winrateLeaderboardContent = document.getElementById('winrate-leaderboard-content');
const tabButtons = document.querySelectorAll('.tab-button');
const streakLeaderboard = document.getElementById('streak-leaderboard');
const winrateLeaderboard = document.getElementById('winrate-leaderboard');
const timeFilter = document.getElementById('time-filter');
const sortFilter = document.getElementById('sort-filter');
const totalPlayersElement = document.getElementById('total-players');
const activeTodayElement = document.getElementById('active-today');
const globalBestStreakElement = document.getElementById('global-best-streak');
const globalPerfectElement = document.getElementById('global-perfect');

// Username validation
function isValidUsername(username) {
    return username.length >= 3 && 
           username.length <= 20 && 
           /^[a-zA-Z0-9_]+$/.test(username);
}

// Initialize user data
function initializeUserData(username) {
    if (!allUsers[username]) {
        allUsers[username] = {
            currentStreak: 0,
            bestStreak: 0,
            totalGames: 0,
            totalWins: 0,
            lastPlayedDate: null,
            lastGameResult: null,
            achievements: {},
            positionStats: {},
            collegeStats: {},
            timeStats: {
                morning: { total: 0, correct: 0 },
                afternoon: { total: 0, correct: 0 },
                evening: { total: 0, correct: 0 }
            },
            dailyStats: {},
            streakHistory: []
        };
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }
    return allUsers[username];
}

// Load user data
function loadUserData(username) {
    const userData = allUsers[username];
    currentStreak = userData.currentStreak;
    bestStreak = userData.bestStreak;
    totalGames = userData.totalGames;
    totalWins = userData.totalWins;
    lastPlayedDate = userData.lastPlayedDate;
    lastGameResult = userData.lastGameResult;
    achievements = userData.achievements;
    positionStats = userData.positionStats;
    collegeStats = userData.collegeStats;
    timeStats = userData.timeStats;
    dailyStats = userData.dailyStats;
    streakHistory = userData.streakHistory;
}

// Save user data
function saveUserData() {
    if (currentUser) {
        allUsers[currentUser] = {
            currentStreak,
            bestStreak,
            totalGames,
            totalWins,
            lastPlayedDate,
            lastGameResult,
            achievements,
            positionStats,
            collegeStats,
            timeStats,
            dailyStats,
            streakHistory
        };
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
        updateLeaderboards();
    }
}

// Handle login
function handleLogin() {
    const username = usernameInput.value.trim();
    
    if (validateUsername(username)) {
        currentUser = username;
        loginScreen.style.display = 'none';
        gameContainer.style.display = 'block';
        
        // Load user data
        loadUserData(username);
        
        // Check if user can play today
        if (!canPlayToday()) {
            gameContainer.style.display = 'none';
            gameOverElement.style.display = 'block';
            finalMessageElement.textContent = "You've already played today!";
            nextGameTimeElement.textContent = `Next game available in: ${getTimeUntilNextGame()}`;
            return;
        }
        
        // Start new game if they can play
        startNewGame();
        updateLeaderboards();
    } else {
        alert("Invalid username! Username must be 3-20 characters long and can only contain letters, numbers, and underscores.");
    }
}

// Add event listener for login
startGameBtn.addEventListener('click', handleLogin);
usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleLogin();
    }
});

function updateStreakDisplay() {
    streakElement.textContent = `Current Streak: ${currentStreak} days`;
    bestStreakElement.textContent = `Best Streak: ${bestStreak} days`;
}

function getRandomPlayer() {
    const players = Object.keys(nflPlayers);
    return players[Math.floor(Math.random() * players.length)];
}

function getRandomColleges(correctCollege, count) {
    const availableColleges = allColleges.filter(college => college !== correctCollege);
    const randomColleges = [];
    
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * availableColleges.length);
        randomColleges.push(availableColleges[randomIndex]);
    }
    
    return randomColleges;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateAchievements() {
    // Check each achievement
    for (const [key, achievement] of Object.entries(ACHIEVEMENTS)) {
        if (!achievements[key]) {
            if (key === 'rookie' && totalGames >= 1) {
                unlockAchievement(key);
            } else if (key.startsWith('streak') && currentStreak >= achievement.threshold) {
                unlockAchievement(key);
            } else if (key === 'perfectGame' && currentRound === 3) {
                unlockAchievement(key);
            }
        }
    }
}

function unlockAchievement(achievementKey) {
    achievements[achievementKey] = true;
    saveUserData();
    
    const achievement = ACHIEVEMENTS[achievementKey];
    achievementMessageElement.textContent = `${achievement.name}: ${achievement.description}`;
    achievementEarnedElement.style.display = 'block';
    
    const achievementElement = document.getElementById(achievementKey);
    if (achievementElement) {
        achievementElement.classList.add('unlocked');
    }
    
    setTimeout(() => {
        achievementEarnedElement.style.display = 'none';
    }, 3000);
}

function updateStreakHistory() {
    const today = new Date().toISOString().split('T')[0];
    streakHistory.push({
        date: today,
        streak: currentStreak,
        result: lastGameResult
    });
    
    if (streakHistory.length > 30) {
        streakHistory = streakHistory.slice(-30);
    }
    
    saveUserData();
    updateStreakStats();
    updateStreakChart();
}

function updateStreakStats() {
    totalGames++;
    if (lastGameResult === 'win') {
        totalWins++;
    }
    
    saveUserData();
    
    const winRate = totalGames > 0 ? Math.round((totalWins / totalGames) * 100) : 0;
    const avgStreak = streakHistory.length > 0 
        ? Math.round(streakHistory.reduce((sum, day) => sum + day.streak, 0) / streakHistory.length)
        : 0;
    
    totalGamesElement.textContent = totalGames;
    winRateElement.textContent = `${winRate}%`;
    avgStreakElement.textContent = avgStreak;
}

function updateStreakChart() {
    // Create a simple bar chart using HTML/CSS
    streakChartElement.innerHTML = '';
    const maxStreak = Math.max(...streakHistory.map(day => day.streak));
    
    streakHistory.forEach(day => {
        const bar = document.createElement('div');
        bar.className = 'streak-bar';
        bar.style.height = `${(day.streak / maxStreak) * 100}%`;
        bar.style.backgroundColor = day.result === 'win' ? '#4CAF50' : '#f44336';
        bar.title = `${day.date}: ${day.streak} days`;
        streakChartElement.appendChild(bar);
    });
}

function startNewGame() {
    // Check if user can play today
    if (!canPlayToday()) {
        gameContainer.style.display = 'none';
        gameOverElement.style.display = 'block';
        finalMessageElement.textContent = "You've already played today!";
        nextGameTimeElement.textContent = `Next game available in: ${getTimeUntilNextGame()}`;
        return;
    }
    
    if (lastGameResult === 'loss') {
        currentStreak = 0;
    }
    
    currentRound = 1;
    gameActive = true;
    updateRoundDisplay();
    updateStreakDisplay();
    showNextQuestion();
    
    // Display all statistics
    displayPositionStats();
    displayCollegeStats();
    displayTimeStats();
    displayDailyStats();
    
    // Update achievements display
    Object.entries(achievements).forEach(([key, unlocked]) => {
        const element = document.getElementById(key);
        if (element) {
            element.classList.toggle('unlocked', unlocked);
        }
    });
}

function updateRoundDisplay() {
    currentRoundElement.textContent = currentRound;
    roundStatusElement.textContent = `Round ${currentRound} of 3`;
}

function showNextQuestion() {
    currentPlayer = getRandomPlayer();
    currentCollege = nflPlayers[currentPlayer].college;
    
    playerNameElement.textContent = currentPlayer;
    
    // Generate options
    const wrongColleges = getRandomColleges(currentCollege, 2);
    const options = [currentCollege, ...wrongColleges];
    shuffleArray(options);
    
    // Update option buttons
    const buttons = optionsContainer.getElementsByClassName('option-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = options[i];
        buttons[i].className = 'option-button';
        buttons[i].disabled = false;
    }
    
    messageElement.textContent = '';
}

function handleGuess(selectedCollege) {
    if (!gameActive) return;
    
    const buttons = optionsContainer.getElementsByClassName('option-button');
    for (let button of buttons) {
        button.disabled = true;
        if (button.textContent === currentCollege) {
            button.classList.add('correct');
        } else if (button.textContent === selectedCollege) {
            button.classList.add('wrong');
        }
    }
    
    const isCorrect = selectedCollege === currentCollege;
    
    // Update all statistics
    updatePositionStats(currentPlayer, isCorrect);
    updateCollegeStats(currentCollege, isCorrect);
    updateTimeStats(isCorrect);
    updateDailyStats(isCorrect);
    
    if (isCorrect) {
        messageElement.textContent = 'Correct!';
        messageElement.className = 'correct';
        
        if (currentRound === 3) {
            localStorage.setItem('lastPlayedDate', currentDate);
            currentStreak++;
            localStorage.setItem('currentStreak', currentStreak);
            
            if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
                localStorage.setItem('bestStreak', bestStreak);
            }
            
            localStorage.setItem('lastGameResult', 'win');
            updateStreakHistory();
            updateAchievements();
            showGameOver(`Congratulations! You completed all three rounds! Your streak is now ${currentStreak} days! ${currentStreak > bestStreak ? 'New best streak!' : ''}`);
        } else {
            currentRound++;
            updateRoundDisplay();
            setTimeout(showNextQuestion, 2000);
        }
    } else {
        messageElement.textContent = 'Wrong! Game Over.';
        messageElement.className = 'wrong';
        localStorage.setItem('lastPlayedDate', currentDate);
        localStorage.setItem('currentStreak', 0);
        localStorage.setItem('lastGameResult', 'loss');
        updateStreakHistory();
        showGameOver(`Better luck tomorrow! Your streak has ended at ${currentStreak} days. Your best streak remains at ${bestStreak} days.`);
    }
}

function showGameOver(message) {
    gameActive = false;
    gameOverElement.style.display = 'block';
    finalMessageElement.textContent = message;
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextGameTime = tomorrow.toLocaleDateString();
    nextGameTimeElement.textContent = `Next game available on ${nextGameTime}`;
}

// Add event listeners to option buttons
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', () => {
        handleGuess(button.textContent);
    });
});

function updatePositionStats(player, isCorrect) {
    const position = nflPlayers[player].position;
    if (!positionStats[position]) {
        positionStats[position] = { total: 0, correct: 0 };
    }
    positionStats[position].total++;
    if (isCorrect) {
        positionStats[position].correct++;
    }
    saveUserData();
    displayPositionStats();
}

function updateCollegeStats(college, isCorrect) {
    if (!collegeStats[college]) {
        collegeStats[college] = { total: 0, correct: 0 };
    }
    collegeStats[college].total++;
    if (isCorrect) {
        collegeStats[college].correct++;
    }
    saveUserData();
    displayCollegeStats();
}

function updateTimeStats(isCorrect) {
    const hour = new Date().getHours();
    let timeSlot;
    if (hour < 12) timeSlot = 'morning';
    else if (hour < 17) timeSlot = 'afternoon';
    else timeSlot = 'evening';
    
    timeStats[timeSlot].total++;
    if (isCorrect) {
        timeStats[timeSlot].correct++;
    }
    saveUserData();
    displayTimeStats();
}

function updateDailyStats(isCorrect) {
    const today = new Date().toISOString().split('T')[0];
    if (!dailyStats[today]) {
        dailyStats[today] = { total: 0, correct: 0 };
    }
    dailyStats[today].total++;
    if (isCorrect) {
        dailyStats[today].correct++;
    }
    saveUserData();
    displayDailyStats();
}

function displayPositionStats() {
    positionStatsElement.innerHTML = '';
    Object.entries(positionStats).forEach(([position, stats]) => {
        const winRate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <span class="stat-label">${position}</span>
            <span class="stat-value">${winRate}%</span>
            <div class="stat-bar">
                <div class="stat-bar-fill" style="width: ${winRate}%"></div>
            </div>
        `;
        positionStatsElement.appendChild(statItem);
    });
}

function displayCollegeStats() {
    collegeStatsElement.innerHTML = '';
    const sortedColleges = Object.entries(collegeStats)
        .sort((a, b) => b[1].correct - a[1].correct)
        .slice(0, 5);
    
    sortedColleges.forEach(([college, stats]) => {
        const winRate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <span class="stat-label">${college}</span>
            <span class="stat-value">${winRate}%</span>
            <div class="stat-bar">
                <div class="stat-bar-fill" style="width: ${winRate}%"></div>
            </div>
        `;
        collegeStatsElement.appendChild(statItem);
    });
}

function displayTimeStats() {
    timeStatsElement.innerHTML = '';
    Object.entries(timeStats).forEach(([timeSlot, stats]) => {
        const winRate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <span class="stat-label">${timeSlot.charAt(0).toUpperCase() + timeSlot.slice(1)}</span>
            <span class="stat-value">${winRate}%</span>
            <div class="stat-bar">
                <div class="stat-bar-fill" style="width: ${winRate}%"></div>
            </div>
        `;
        timeStatsElement.appendChild(statItem);
    });
}

function displayDailyStats() {
    dailyStatsElement.innerHTML = '';
    const last7Days = Object.entries(dailyStats)
        .sort((a, b) => b[0].localeCompare(a[0]))
        .slice(0, 7);
    
    last7Days.forEach(([date, stats]) => {
        const winRate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <span class="stat-label">${formattedDate}</span>
            <span class="stat-value">${winRate}%</span>
            <div class="stat-bar">
                <div class="stat-bar-fill" style="width: ${winRate}%"></div>
            </div>
        `;
        dailyStatsElement.appendChild(statItem);
    });
}

// Add tab switching functionality
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;
        
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Show selected leaderboard
        if (tab === 'streak') {
            streakLeaderboard.style.display = 'block';
            winrateLeaderboard.style.display = 'none';
        } else {
            streakLeaderboard.style.display = 'none';
            winrateLeaderboard.style.display = 'block';
        }
    });
});

// Update leaderboards
function updateLeaderboards() {
    const timePeriod = timeFilter.value;
    const sortBy = sortFilter.value;
    
    // Hide all leaderboards
    document.querySelectorAll('.leaderboard').forEach(board => {
        board.style.display = 'none';
    });
    
    // Show selected leaderboard
    const selectedBoard = document.getElementById(`${sortBy}-leaderboard`);
    if (selectedBoard) {
        selectedBoard.style.display = 'block';
    }
    
    // Update leaderboard content based on filters
    switch(sortBy) {
        case 'streak':
            updateStreakLeaderboard(timePeriod);
            break;
        case 'winrate':
            updateWinrateLeaderboard(timePeriod);
            break;
        case 'games':
            updateGamesLeaderboard(timePeriod);
            break;
        case 'perfect':
            updatePerfectLeaderboard(timePeriod);
            break;
    }
    
    updateGlobalStats();
}

function filterByTimePeriod(data, timePeriod) {
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];
    
    switch(timePeriod) {
        case 'daily':
            return data.filter(user => user.lastPlayedDate === currentDate);
        case 'weekly':
            const weekAgo = new Date(today.setDate(today.getDate() - 7)).toISOString().split('T')[0];
            return data.filter(user => user.lastPlayedDate >= weekAgo);
        case 'monthly':
            const monthAgo = new Date(today.setMonth(today.getMonth() - 1)).toISOString().split('T')[0];
            return data.filter(user => user.lastPlayedDate >= monthAgo);
        default:
            return data;
    }
}

function updateStreakLeaderboard(timePeriod) {
    const filteredUsers = filterByTimePeriod(Object.entries(allUsers), timePeriod);
    const sortedUsers = filteredUsers
        .map(([username, data]) => ({
            username,
            bestStreak: data.bestStreak,
            totalGames: data.totalGames
        }))
        .sort((a, b) => b.bestStreak - a.bestStreak)
        .slice(0, 10);
    
    streakLeaderboardContent.innerHTML = '';
    sortedUsers.forEach((user, index) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row ${user.username === currentUser ? 'current-user' : ''}`;
        row.innerHTML = `
            <span class="rank-${index + 1}">#${index + 1}</span>
            <span>${user.username}</span>
            <span>${user.bestStreak} days</span>
            <span>${user.totalGames}</span>
        `;
        streakLeaderboardContent.appendChild(row);
    });
}

function updateWinrateLeaderboard(timePeriod) {
    const filteredUsers = filterByTimePeriod(Object.entries(allUsers), timePeriod);
    const sortedUsers = filteredUsers
        .map(([username, data]) => ({
            username,
            winRate: data.totalGames > 0 ? Math.round((data.totalWins / data.totalGames) * 100) : 0,
            totalGames: data.totalGames
        }))
        .sort((a, b) => b.winRate - a.winRate)
        .slice(0, 10);
    
    winrateLeaderboardContent.innerHTML = '';
    sortedUsers.forEach((user, index) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row ${user.username === currentUser ? 'current-user' : ''}`;
        row.innerHTML = `
            <span class="rank-${index + 1}">#${index + 1}</span>
            <span>${user.username}</span>
            <span>${user.winRate}%</span>
            <span>${user.totalGames}</span>
        `;
        winrateLeaderboardContent.appendChild(row);
    });
}

function updateGamesLeaderboard(timePeriod) {
    const filteredUsers = filterByTimePeriod(Object.entries(allUsers), timePeriod);
    const sortedUsers = filteredUsers
        .map(([username, data]) => ({
            username,
            totalGames: data.totalGames,
            winRate: data.totalGames > 0 ? Math.round((data.totalWins / data.totalGames) * 100) : 0
        }))
        .sort((a, b) => b.totalGames - a.totalGames)
        .slice(0, 10);
    
    document.getElementById('games-leaderboard-content').innerHTML = '';
    sortedUsers.forEach((user, index) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row ${user.username === currentUser ? 'current-user' : ''}`;
        row.innerHTML = `
            <span class="rank-${index + 1}">#${index + 1}</span>
            <span>${user.username}</span>
            <span>${user.totalGames}</span>
            <span>${user.winRate}%</span>
        `;
        document.getElementById('games-leaderboard-content').appendChild(row);
    });
}

function updatePerfectLeaderboard(timePeriod) {
    const filteredUsers = filterByTimePeriod(Object.entries(allUsers), timePeriod);
    const sortedUsers = filteredUsers
        .map(([username, data]) => ({
            username,
            perfectGames: data.achievements?.perfectGame ? 1 : 0,
            totalGames: data.totalGames
        }))
        .sort((a, b) => b.perfectGames - a.perfectGames)
        .slice(0, 10);
    
    document.getElementById('perfect-leaderboard-content').innerHTML = '';
    sortedUsers.forEach((user, index) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row ${user.username === currentUser ? 'current-user' : ''}`;
        row.innerHTML = `
            <span class="rank-${index + 1}">#${index + 1}</span>
            <span>${user.username}</span>
            <span>${user.perfectGames}</span>
            <span>${user.totalGames}</span>
        `;
        document.getElementById('perfect-leaderboard-content').appendChild(row);
    });
}

function updateGlobalStats() {
    const today = new Date().toISOString().split('T')[0];
    
    // Total players
    totalPlayersElement.textContent = Object.keys(allUsers).length;
    
    // Active today
    const activeToday = Object.values(allUsers).filter(user => user.lastPlayedDate === today).length;
    activeTodayElement.textContent = activeToday;
    
    // Global best streak
    const globalBestStreak = Math.max(...Object.values(allUsers).map(user => user.bestStreak));
    globalBestStreakElement.textContent = globalBestStreak;
    
    // Global perfect games
    const globalPerfect = Object.values(allUsers).filter(user => user.achievements?.perfectGame).length;
    globalPerfectElement.textContent = globalPerfect;
}

// Initialize leaderboards when the page loads
if (currentUser) {
    loginScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    loadUserData(currentUser);
    updateLeaderboards();
    startNewGame();
} else {
    loginScreen.style.display = 'block';
    gameContainer.style.display = 'none';
    updateLeaderboards();
}

// Check if user can play today
function canPlayToday() {
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];
    
    // If no last played date, they can play
    if (!userData.lastPlayedDate) return true;
    
    // If last played date is not today, they can play
    return userData.lastPlayedDate !== currentDate;
}

// Get time until next game
function getTimeUntilNextGame() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeLeft = tomorrow - now;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
}

// Add a function to update the countdown timer
function updateCountdownTimer() {
    if (!canPlayToday()) {
        nextGameTimeElement.textContent = `Next game available in: ${getTimeUntilNextGame()}`;
    }
}

// Add countdown timer update interval
setInterval(updateCountdownTimer, 60000); // Update every minute 