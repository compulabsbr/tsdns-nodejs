var colors = require('colors');
var config = require('./config.json');
var api = require('./api.js');
var tsdns = require('./tsdns');
console.log('\033[2J');
console.log(" ____  ___  ____  _  _  ___ \n(_  _)/ __)(  _ \\( \\( )/ __)\n  )(  \\__ \\ )(_) ))  ( \\__ \\\n (__) (___/(____/(_)\\_)(___/\n\n".green);
console.log("[DESENVOLVIMENTO] ".green + "CompuLabs.com.br\n\n".red);
api.listen(config.api_port, config.api_ip, function() {
    console.log('[OK]'.green + ' Servidor de API iniciado em %s:%s', config.api_ip, config.api_port);
});
tsdns.listen(config.tsdns_port, config.tsdns_ip, function() {
    console.log('[OK]'.green + ' Servidor TSDNS iniciado em %s:%s', config.tsdns_ip, config.tsdns_port);
});
console.log('[OK]'.green + ' Servidor iniciado e pronto para uso.');
