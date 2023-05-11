// import WebSocket from "ws";
// import express from "express";

const ws_port = 42000;
const http_port = 42002;

const WebSocket = require('ws');
const express = require('express');

const http = require('http');
const app = express();

const process = require('process');


app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req,res) => res.render("index"));
app.get("/*", (req,res) => res.redirect("/"));

const handleListen = () => {
    console.log(`Listening on http://localhost:${http_port}`);
    console.log(`Listening on ws://localhost:${ws_port}`);
}

// app.listen(http_port, handleListen);



const server = http.createServer(app);

//http, webSocket server를 동시에 돌릴 때
// const wss = new WebSocket.Server({server});

//websocket server만 돌릴 때



//arbi
const zeroMQ_config = {
    "ip": "127.0.0.1",
    "port": 61614
}

const zmq = require('zeromq');
const dealSocket = zmq.socket('dealer');
const ZEROMQ_HOST = "tcp://" + zeroMQ_config.ip + ":" + zeroMQ_config.port;

const MONITOR_ID = "web_monitor_" + Math.floor(Math.random() * 100000 + 1);

const firstFilterJSON = {
	"ID": MONITOR_ID,
	"Action": "Create Monitor",
	"Protocol": "ZeroMQ",
	"Filter": [
		{ "LogType": "SystemLog", "Actor": "agent://www.arbi.com/monitoringManager", "Action": "RoleSpecification", "Flag": "true" },
		{ "LogType": "SystemLog", "Actor": "agent://www.arbi.com/monitoringManager", "Action": "RoleServiceSpecification", "Flag": "true" },		
		{ "LogType": "SystemLog", "Actor": "agent://www.arbi.com/monitoringManager", "Action": "MonitorAgent", "Flag": "true" },
		{ "LogType": "SystemLog", "Actor": "agent://www.arbi.com/monitoringManager", "Action": "TestRobotStatus", "Flag": "true" },
		{ "LogType": "SystemLog", "Actor": "agent://www.arbi.com/monitoringManager", "Action": "AssignRole", "Flag": "true" },
		{ "LogType": "SystemLog", "Actor": "agent://www.arbi.com/monitoringManager", "Action": "UnpostGoal", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/monitoringManager", "Action": "UpdateFact", "Flag": "true" },
		{ "LogType": "SystemLog", "Actor": "agent://www.arbi.com/monitoringManager", "Action": "IntendGoal", "Flag": "true" },
		

		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskManager", "Action": "AssertWorldModel", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskManager", "Action": "RetractWorldModel", "Flag": "true" },

		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskManager", "Action": "PostGoal", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskManager", "Action": "UnpostGoal", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskManager", "Action": "IntendGoal", "Flag": "true" },

		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskManager", "Action": "LoadModel", "Flag": "true" },

		// { "LogType": "SystemLog", "Actor": "taskReasoner", "Type": "Service", "Action": "Dispatched", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "taskReasoner", "Type": "Context", "Action": "Assert", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "taskReasoner", "Type": "Context", "Action": "Retract", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "taskReasoner", "Type": "Context", "Action": "Update", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "taskReasoner", "Type": "Task", "Action": "Execution", "Flag": "true" },

		//		{"LogType":"SystemLog","Actor":"contextManager","Type":"WorkingMemory","Action":"context","Flag":"true"},
		//		{"LogType":"SystemLog","Actor":"contextManager","Type":"WorkingMemory","Action":"availableMemory","Flag":"true"},
		
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskReasoner", "Action": "assertContext", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskReasoner", "Action": "retractContext", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskReasoner", "Action": "policyAppend", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskReasoner", "Action": "policyUpdate", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskReasoner", "Action": "serviceAppend", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskReasoner", "Action": "serviceFinish", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskReasoner", "Action": "goalAppend", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/taskReasoner", "Action": "goalPost", "Flag": "true"},

		// { "LogType": "SystemLog", "Actor": "contextManager", "Action": "LowLevelContextMonitorAction", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "contextManager", "Action": "ContextOntologyMonitorAction", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "contextManager", "Action": "contextReasoningMonitor", "Flag": "true" },

		//{"LogType":"SystemLog","Actor":"contextManager","Type":"RobotContext","Action":"availableBattery","Flag":"true"},
		//{"LogType":"SystemLog","Actor":"contextManager","Type":"RobotContext","Action":"LatestPerception","Flag":"true"},

		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"UPDATEOWL","Action":"updateOWL","Flag":"true"},

		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "InitializeType", "Flag": "true" },

		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "CreateClass", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "CreateProperty", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "CreateIndividual", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "CreateRelation", "Flag": "true" },

		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "QueryRelation", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "QueryMultiRelation", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "QueryCloudRelation", "Flag": "true" },

		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "DeleteClass", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "DeleteProperty", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "DeleteIndividual", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "DeleteRelation", "Flag": "true" },

		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "PathQuery", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "knowledgeManager", "Action": "RequestRecommendation", "Flag": "true" },

		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"InitializeType","Action":"Initialize","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"ParseSentence","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"Conversation","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"Path","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"QueryProperty","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"QuerySchedule","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"QueryNearPlace","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"TargetStuff","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"QueryKnown","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"CreateRelation","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"QueryRelation","Flag":"true"},
		// {"LogType":"SystemLog","Actor":"knowledgeManager","Type":"QueryType","Action":"QueryMultipleRelation","Flag":"true"},

		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/serviceDispatcher", "Action": "initiateService", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/serviceDispatcher", "Action": "loadRule", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/serviceDispatcher", "Action": "loadOwl", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/serviceDispatcher", "Action": "loadPlan", "Flag": "true" },
		// { "LogType":"SystemLog","Actor":"agent://www.arbi.com/serviceDispatcher","Action":"loadRobot","Flag":"true"},

		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/behaviourInterface", "Action": "TranslateMessageAction", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/behaviourInterface", "Action": "CapabilitySetAction", "Flag": "true" },
		// { "LogType": "SystemLog", "Actor": "agent://www.arbi.com/behaviourInterface", "Action": "LoadModel", "Flag": "true" },

		// { "LogType": "MessageLog", "Type": "AgentMessage", "Action": "Request", "Flag": "true" },
		// { "LogType": "MessageLog", "Type": "AgentMessage", "Action": "Response", "Flag": "true" },
		// { "LogType": "MessageLog", "Type": "AgentMessage", "Action": "Query", "Flag": "true" }
		// {"LogType":"MessageLog", "Type":"LTMMessage","Action" :"AssertFact","Flag":"true"},
		// {"LogType":"MessageLog", "Type":"LTMMessage","Action" :"Result","Flag":"true"}
	]
}

const endFilterJSON = {
	"ID": MONITOR_ID,
	"Action": "Delete Monitor"
}

console.log("MONITOR ID = " + MONITOR_ID);

function replaceAsync(str, re, callback) {
	// http://es5.github.io/#x15.5.4.11
	str = String(str);
	var parts = [],
		i = 0;
	if (Object.prototype.toString.call(re) == "[object RegExp]") {
		if (re.global)
			re.lastIndex = i;
		var m;
		while (m = re.exec(str)) {
			var args = m.concat([m.index, m.input]);
			parts.push(str.slice(i, m.index), callback.apply(null, args));
			i = re.lastIndex;
			if (!re.global)
				break; // for non-global regexes only take the first match
			if (m[0].length == 0)
				re.lastIndex++;
		}
	} else {
		re = String(re);
		i = str.indexOf(re);
		parts.push(str.slice(0, i), callback.apply(null, [re, i, str]));
		i += re.length;
	}
	parts.push(str.slice(i));
	return Promise.all(parts).then(function (strings) {
		return strings.join("");
	});
}
async function asyncForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}
const dataStore = {
	LTMMessageStore: [],
	AgentMessageStore: [],
	SystemMessageStore: []
}

function subscribeZeroMQ (){
    console.log("subscribe zeroMQ");
    dealSocket.identity = MONITOR_ID;
			console.log("Identity Set! = " + MONITOR_ID);
			dealSocket.on('message', function () {
				console.log("on ZeroMQ Message...");
				var args = Array.apply(null, arguments);
				asyncForEach(args, async (v) => {
					console.log(v.toString());
					let message = v.toString().replace(/\\n/g, "\\n")
						.replace(/\\'/g, "\\'")
						.replace(/\\"/g, '\\"')
						.replace(/\\&/g, "\\&")
						.replace(/\\r/g, "\\r")
						.replace(/\\t/g, "\\t")
						.replace(/\\b/g, "\\b")
						.replace(/\\f/g, "\\f");
					message = message.replace(/[\u0000-\u0019]+/g, "");
					if (message.length > 20) {
						let m = JSON.parse(message.replace(/(\\&)/g, "\\\\&"));
						// console.log("Parsing with ZeroMQ ");
                        // console.log("received from zeroMQ message : \n" + JSON.stringify(m));
						parseZeroMQMessage(m);
					}
				})

			})
			console.log(ZEROMQ_HOST)
			dealSocket.connect(ZEROMQ_HOST);
			console.log("Dealsocket Connected to ZEROMQ HOST : " + ZEROMQ_HOST);

			dealSocket.send(['', JSON.stringify(firstFilterJSON)]);
			console.log("send message to zeroMQ: \n" + JSON.stringify(firstFilterJSON));
}

function parseZeroMQMessage(data){
    if(typeof data === "string"){
        prom = replaceAsync(data, /\\/g, function (match, offset, string) { return "\\"; }).then(function (result) {
            return replaceAsync(result, /\\&(?!\\)/g, function (match, offset, string) { return "\\\\&"; });
        }).then(function (result) {
            return replaceAsync(result, /\t/g, function (match, offset, string) { return "\\t"; });
        }).then(function (result) {
            return replaceAsync(result, /\n/g, function (match, offset, string) { return "\\n"; });
        }).then(function (result) {
            return replaceAsync(result, /\r/g, function (match, offset, string) { return "\\r"; })
        }).then(function (result) {
            return replaceAsync(result, /\\\\\\&quot;/g, function (match, offset, string) { return "\\\\&quot;"; })
        }).then(function (result) {
            return replaceAsync(result, /\\=/g, function (match, offset, string) { return "\\\\="; })
        }).then(function (result) {
            // console.log("REPLACE RESULT = " + result);
            return new Promise(function (resolve, reject) {
                resolve(JSON.parse(result));
            });
        })
    } else {
        // console.log(util.inspect(data));
        prom = new Promise(function(res, rej){
            res(data);
        })
    }
    if (typeof prom != "undefined") {
        prom.then(function (res) {
            // console.log("RES = " + (typeof res == "object")?util.inspect(res):res);
            // console.log("res is = " + res)
            let parsedLog;
            switch (res.LogType) {
                case "MessageLog":
                    parsedLog = parseMessageLog(res);
                    break;
                case "SystemLog":
                    parsedLog = parseSystemLog(res);
                    break;
                default:
                    console.log("Log Type Error! data = " + res.toString());
                    break;

            }
            if(parsedLog != undefined)
                sendLog(parsedLog);
            // saveLog();
        }, function (err) {
            console.log("PROMISE ERROR! : " + err);
        });
    }
}
const base64Decode = (str) => {
    const buffer = Buffer.from(str, 'base64');
    return buffer.toString('utf-8').replace(/&quot;/g, '"');
  };

function parseMessageLog(data) {
    let parsedMessageLog;
    switch (data.Type) {
        case "AgentMessage":
            console.log("Agent Message Log Incomming!");
            parsedMessageLog = parseAgentMessageLog(data);
            if(parsedMessageLog != undefined)
                dataStore.AgentMessageStore.push(parsedMessageLog);
            break;
        case "CDCMessage":
            console.log("CDC Message Log Incomming!");
            parsedMessageLog = parseLTMMessageLog(data);
            if(parsedMessageLog != undefined)
                dataStore.LTMMessageStore.push(parsedMessageLog);
            break;
        case "LTMMessage":
            console.log("LTM Message Log Incomming!");
            parsedMessageLog = parseLTMMessageLog(data);
            if(parsedMessageLog != undefined)
                dataStore.LTMMessageStore.push(parsedMessageLog);
            break;
        default:
            console.log("MessageLog Type Error! data = " + data.toString());
            break;
    }
    return parsedMessageLog;
}

function parseAgentMessageLog(data) {
    console.log("Agent Log incomming!")
    let agentMessageLog = {
        "Sender": data.Sender,
        "Receiver": data.Receiver,
        "Type": data.LogType,
        "Action": data.Action,
        "Content": data.Content
    }
    return agentMessageLog;
}



function parseLTMMessageLog (data) {
    console.log("LTM Log Incomming!")
    let LTMMessageLog = {
        "Client": data.Client,
        "Action": data.Action,
        "Content": data.Content
    }
    return LTMMessageLog;
}

function parseSystemLog (data) {
    let systemMessageLog;
    if (typeof data.Content == "object") {
        console.log("System log incomming! \n/ Actor : " + data.Actor + " / Type:" + data.LogType + " / Action:" + data.Action + "\n");
        // console.log("SystemLogData = " + util.inspect(data, false, null));
        systemMessageLog = {
            "Actor": data.Actor,
            "Type": data.LogType,
            "Action": data.Action,
            "Content": data.Content,
            "Time": data.Time
        }
    } else {
        if (!data.Content.includes("CURRENT_TIME" || !data.Content.includes("Tree(10,20)"))) {
            console.log("System log incomming! / Actor : " + data.Actor + " / Type:" + data.LogType + " / Action:" + data.Action + "\n");
            // console.log("SystemLogData = " + util.inspect(data, false, null));
            systemMessageLog = {
                "Actor": data.Actor,
                "Type": data.LogType,
                "Action": data.Action,
                "Content": data.Content,
                "Time": data.Time
            }
        }
    }

    if(systemMessageLog!= undefined)
        dataStore.SystemMessageStore.push(systemMessageLog);
    
    // console.log("Datastore Pushed! ");
    // console.log("Current Datastore : " + util.inspect(dataStore, false, null));
    
    return systemMessageLog;
};


function exitHandler(options, err) {
	if (options.cleanup) console.log('clean');
	if (err) console.log(err.stack);
	if (options.exit) {

		console.log("time to Exit!");


		if(dealSocket != undefined){
            dealSocket.send(JSON.stringify(endFilterJSON));
			dealSocket.disconnect(ZEROMQ_HOST);
        }
		setTimeout(process.exit(), 500)
	}
}

//do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));







//wss
const webSockets = [];

const wss = new WebSocket.Server({server});

wss.on("connection", (ws) =>{
    console.log("Connected some client ✔")
    webSockets.push(ws);

    dataStore.SystemMessageStore.forEach((systemMessage) =>{
        ws.send(JSON.stringify(systemMessage));
    })

    dataStore.AgentMessageStore.forEach((agentMessage) => {
        ws.send(JSON.stringify(agentMessage));
    });

    ws.on('message', (message) => {
        console.log('received: %s', message);
        // ws.send(`Echoing back "${message}"`);
    });
    
    ws.on("close", () => {
        let index = webSockets.indexOf(ws);
        webSockets.splice(index, 1);
        console.log("Disconnected some client");
    });
})

function sendLog(message){
    let content = base64Decode(message.Content);
    try{
        content = JSON.parse(content);
        console.log('to json');
    }catch{
        content = content;
        console.log('no json');
    }
    message.Content = content;
    if(webSockets.length != 0){
        webSockets.forEach(ws => {
            ws.send(JSON.stringify(message));
            console.log('send')
            console.log(JSON.stringify(message));
        });
    }
}

function main(){
    subscribeZeroMQ();
    server.listen(ws_port, handleListen);
}

main();





module.exports = this;