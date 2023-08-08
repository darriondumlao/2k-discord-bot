require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')

const teams = [
	'Atlanta Hawks',
	'Boston Celtics',
	'Brooklyn Nets',
	'New York Knicks',
	'Philidelphia 76ers',
	'Toronto Raptors',
	'Chicago Bulls',
	'Cleveland Cavaliers',
	'Detroit Pistons',
	'Indiana Pacers',
	'Milwaukee Bucks',
	'Charlotte Hornets',
	'Miami Heat',
	'Orlando Magic',
	'Washington Wizards',
	'Denver Nuggest',
	'Minnesota Timberwolves',
	'Oklahoma City Thunder',
	'Portland Trail BLazers',
	'Utah Jazz',
	'Golden State Warriors',
	'LA Clippers',
	'Los Angeles Lakers',
	'Phoenix Suns',
	'Sacramento Kings',
	'Dallas Mavericks',
	'Houston Rockets',
	'Memphis Grizzlies',
	'New Orleans Pelicans',
	'San Antonio Spurs',
]

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
})

client.on('ready', (c) => {
	console.log(`${c.user.username} is online`)
})

client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return

	if (interaction.commandName === 'hey') {
		interaction.reply('hey')
	}

	if (interaction.commandName === '2k') {
		interaction.reply({
			content: teams[Math.floor(Math.random() * teams.length)],
		})
	}
})

client.login(process.env.TOKEN)
