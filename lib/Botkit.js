module.exports = {
    core: (config) => require('./CoreBot.js')(config),
    slackbot: (config) => require('./SlackBot.js')(config),
    webexbot: (config) => require('./WebexBot.js')(config),
    sparkbot: (config) => require('./WebexBot.js')(config), // [COMPAT] Webex rebrand, see https://github.com/howdyai/botkit/issues/1346
    facebookbot: (config) => require('./Facebook.js')(config),
    twilioipmbot: (config) => require('./TwilioIPMBot.js')(config),
    twiliosmsbot: (config) => require('./TwilioSMSBot.js')(config),
    botframeworkbot: (config) => require('./BotFramework.js')(config),
    teamsbot: (config) => require('./Teams.js')(config),
    consolebot: (config) => require('./ConsoleBot.js')(config),
    jabberbot: (config) => require('./JabberBot.js')(config),
    socketbot: (config) => require('./Web.js')(config),
    anywhere: (config) => require('./Web.js')(config),
    googlehangoutsbot: (config) => require('./GoogleHangoutsBot.js')(config)
};
