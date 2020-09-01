{"filter":false,"title":"index.js","tooltip":"/app/index.js","undoManager":{"mark":68,"position":68,"stack":[[{"start":{"row":0,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["const express = require('express');","","//Create express web App","const app = express();","","","//Home route sending text back when visited","app.get('/', (request, response) => {","    return response.send(\"Hello Bertelsmann Schloars\");","});","","//Blog route sending text back when visited","app.get('/blog', (request, response) => {","    return response.send(\"You have visited Blog Route\");","});","","//Default route that will hit if no other routes match which is also knonw buy famous error 404","app.get('*', (request, response) => {","    return response.send(\"You are now on default route\");","});","","//While running locally we will give a port like 3000. Heroku assigns port automatically that will come from process.env.PORT","const port = process.env.PORT || 80;","","//While running locally we will provide IP address 127.0.0.1 which is localhost IP Address","//While hosting on heroku we will chnage host to 0.0.0.0 which will allow anyone from world to access our API when it is hosted on heroku server","const host = '0.0.0.0';","","//Listen function here will start the server and logs will be generated locally on console and in logs tab in heroku","app.listen(port, host, () => {","    console.log('Express server running on port: ' + port);","});"],"id":1}],[{"start":{"row":31,"column":3},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["//Create express web App",""],"id":3}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":4}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["//Home route sending text back when visited",""],"id":5}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""],"id":6}],[{"start":{"row":4,"column":32},"end":{"row":4,"column":52},"action":"remove","lines":["Bertelsmann Schloars"],"id":7},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"remove","lines":[" "]}],[{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":[","],"id":8}],[{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":[" "],"id":9},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["I"]},{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["'"]},{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["m"]}],[{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":[" "],"id":10},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["j"]},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["u"]}],[{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"remove","lines":["u"],"id":11},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"remove","lines":["j"]}],[{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["J"],"id":12},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["u"]},{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"insert","lines":["h"]},{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"insert","lines":["i"]},{"start":{"row":4,"column":41},"end":{"row":4,"column":42},"action":"insert","lines":["l"]}],[{"start":{"row":4,"column":42},"end":{"row":4,"column":43},"action":"insert","lines":[" "],"id":13},{"start":{"row":4,"column":43},"end":{"row":4,"column":44},"action":"insert","lines":["S"]},{"start":{"row":4,"column":44},"end":{"row":4,"column":45},"action":"insert","lines":["o"]},{"start":{"row":4,"column":45},"end":{"row":4,"column":46},"action":"insert","lines":["m"]},{"start":{"row":4,"column":46},"end":{"row":4,"column":47},"action":"insert","lines":["a"]},{"start":{"row":4,"column":47},"end":{"row":4,"column":48},"action":"insert","lines":["i"]},{"start":{"row":4,"column":48},"end":{"row":4,"column":49},"action":"insert","lines":["y"]},{"start":{"row":4,"column":49},"end":{"row":4,"column":50},"action":"insert","lines":["a"]}],[{"start":{"row":7,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["//Blog route sending text back when visited","app.get('/blog', (request, response) => {","    return response.send(\"You have visited Blog Route\");","});","","//Default route that will hit if no other routes match which is also knonw buy famous error 404","app.get('*', (request, response) => {","    return response.send(\"You are now on default route\");","});",""],"id":14},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["]"]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":["/"],"id":15},{"start":{"row":7,"column":1},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["]/While running locally we will give a port like 3000. Heroku assigns port automatically that will come from process.env.PORT",""],"id":16}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["//While running locally we will provide IP address 127.0.0.1 which is localhost IP Address",""],"id":17}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["//While hosting on heroku we will chnage host to 0.0.0.0 which will allow anyone from world to access our API when it is hosted on heroku server",""],"id":18}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["const host = '0.0.0.0';",""],"id":19}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":20}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["//Listen function here will start the server and logs will be generated locally on console and in logs tab in heroku",""],"id":21}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":21},"action":"remove","lines":[", host"],"id":22}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":36},"action":"remove","lines":["const port = process.env.PORT || 80;"],"id":23}],[{"start":{"row":1,"column":22},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":24}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":36},"action":"insert","lines":["const port = process.env.PORT || 80;"],"id":25}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":26}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":27}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":50},"action":"remove","lines":["Hello, I'm Juhil Somaiya"],"id":28},{"start":{"row":5,"column":26},"end":{"row":5,"column":96},"action":"insert","lines":["Hello World ! My name is Juhil Somaiya and It's my Capstone Project :)"]}],[{"start":{"row":2,"column":36},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":29}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":34},"action":"insert","lines":["app.use(express.static('public'));"],"id":30}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":30},"action":"remove","lines":["public"],"id":31},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["s"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["t"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":27},"action":"remove","lines":["sta"],"id":32},{"start":{"row":3,"column":24},"end":{"row":3,"column":30},"action":"insert","lines":["static"]}],[{"start":{"row":7,"column":3},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":99},"action":"remove","lines":["return response.send(\"Hello World ! My name is Juhil Somaiya and It's my Capstone Project :)\");"],"id":34}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "],"id":35}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["t"],"id":36},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"remove","lines":["s"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":["e"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"remove","lines":["u"]}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["e"],"id":37},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["s"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"remove","lines":["n"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"remove","lines":["o"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"remove","lines":["p"]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "],"id":38}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["r"],"id":39},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["e"]},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["s"]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["."]},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["s"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["e"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["n"]}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["d"],"id":40},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["f"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["i"]}],[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"remove","lines":["i"],"id":41},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"remove","lines":["f"]}],[{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["F"],"id":42},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["i"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["l"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":18},"action":"insert","lines":["()"],"id":43}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":[";"],"id":44}],[{"start":{"row":6,"column":17},"end":{"row":6,"column":19},"action":"insert","lines":["''"],"id":45}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["i"],"id":46}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["i"],"id":47}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["u"],"id":48}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["u"],"id":49}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["i"],"id":50},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["n"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["d"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["e"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["x"]}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":23},"action":"remove","lines":["index"],"id":51},{"start":{"row":6,"column":18},"end":{"row":6,"column":23},"action":"insert","lines":["index"]}],[{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["."],"id":52},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["h"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["t"]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["m"]},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["l"]}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":57}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":58}],[{"start":{"row":10,"column":17},"end":{"row":10,"column":48},"action":"remove","lines":["Express server running on port:"],"id":59},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["a"]}],[{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"remove","lines":["a"],"id":60}],[{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["S"],"id":61},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["e"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["r"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["v"]},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["e"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["r"]}],[{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":[" "],"id":62},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":["i"]},{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":["s"]}],[{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"insert","lines":[" "],"id":63},{"start":{"row":10,"column":27},"end":{"row":10,"column":28},"action":"insert","lines":["s"]},{"start":{"row":10,"column":28},"end":{"row":10,"column":29},"action":"insert","lines":["t"]},{"start":{"row":10,"column":29},"end":{"row":10,"column":30},"action":"insert","lines":["a"]},{"start":{"row":10,"column":30},"end":{"row":10,"column":31},"action":"insert","lines":["r"]},{"start":{"row":10,"column":31},"end":{"row":10,"column":32},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"insert","lines":["e"],"id":64}],[{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"insert","lines":[" "],"id":65},{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["d"]}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"remove","lines":["d"],"id":66},{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"remove","lines":[" "]}],[{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"insert","lines":["d"],"id":67}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":[" "],"id":68},{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["o"]},{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["n"]}],[{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":[" "],"id":69},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["p"]},{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["o"]}],[{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"remove","lines":["o"],"id":70}],[{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["o"],"id":71},{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["r"]},{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"insert","lines":[" "],"id":72},{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"insert","lines":[":"]}],[{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"remove","lines":[" "],"id":73}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":0},"end":{"row":12,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1598951667250,"hash":"73ed5d5814ce253ad329f3eac8fd2b7ab191f928"}