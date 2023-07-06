'use strict';
let fs                  = require('fs'),
	emailjs             = require('emailjs'),
	email_server		= null;

exports.init = function (user, password, host, port, ssl) {
	email_server = emailjs.server.connect({
		user: user,
		password: password,
		host: host,
		port: port,
		ssl: ssl
	});
};
exports.sendEmail = function (path, subject, sender, to, variables, callback) {
    //Block-disabled
    process.nextTick(function() {
		
        //Read email file as html
        fs.readFile(path + '.html', 'utf8', function (err, html) {
            if (err)
                return callback(err);
            
            let body = html;
			
			//Replace keys with data
            for (var variable in variables) {
                if (!variables.hasOwnProperty(variable)) continue;
                
                body = body.split('{{' + variable + '}}').join(variables[variable]);
            }
            
            let email = {
                from: sender,
                text: subject,
                to: to,
                subject: subject,
                attachment: 
                    [{
                        data: body,
                        alternative: true
                    }]
            }
            
            //Send the email
            email_server.send(email, function(err, res) {
                callback(err, res);
            });
        });
    });
};
