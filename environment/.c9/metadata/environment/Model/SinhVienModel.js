{"filter":false,"title":"SinhVienModel.js","tooltip":"/Model/SinhVienModel.js","undoManager":{"mark":13,"position":13,"stack":[[{"start":{"row":142,"column":37},"end":{"row":142,"column":38},"action":"remove","lines":["p"],"id":21},{"start":{"row":142,"column":36},"end":{"row":142,"column":37},"action":"remove","lines":["o"]},{"start":{"row":142,"column":35},"end":{"row":142,"column":36},"action":"remove","lines":["L"]},{"start":{"row":142,"column":34},"end":{"row":142,"column":35},"action":"remove","lines":["a"]},{"start":{"row":142,"column":33},"end":{"row":142,"column":34},"action":"remove","lines":["M"]}],[{"start":{"row":142,"column":33},"end":{"row":142,"column":34},"action":"insert","lines":["M"],"id":22}],[{"start":{"row":142,"column":33},"end":{"row":142,"column":34},"action":"remove","lines":["M"],"id":23},{"start":{"row":142,"column":33},"end":{"row":142,"column":37},"action":"insert","lines":["MaSV"]}],[{"start":{"row":86,"column":1},"end":{"row":87,"column":0},"action":"insert","lines":["",""],"id":24},{"start":{"row":87,"column":0},"end":{"row":88,"column":0},"action":"insert","lines":["",""]},{"start":{"row":88,"column":0},"end":{"row":89,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":88,"column":0},"end":{"row":102,"column":1},"action":"insert","lines":["async function GetById(ID)","{","  var params = {","  TableName: 'SinhViens',","  FilterExpression: '#name = :value',","  ExpressionAttributeValues: { ':value': ID },","  ExpressionAttributeNames: { '#name': 'MaSV' }","}","try {","    const data = await docClient.scan(params).promise()","    return data","  } catch(error){","    console.log(error);","  }","}"],"id":25}],[{"start":{"row":88,"column":22},"end":{"row":88,"column":23},"action":"insert","lines":["1"],"id":26}],[{"start":{"row":94,"column":43},"end":{"row":94,"column":44},"action":"remove","lines":["V"],"id":27},{"start":{"row":94,"column":42},"end":{"row":94,"column":43},"action":"remove","lines":["S"]},{"start":{"row":94,"column":41},"end":{"row":94,"column":42},"action":"remove","lines":["a"]}],[{"start":{"row":94,"column":41},"end":{"row":94,"column":42},"action":"insert","lines":["a"],"id":28}],[{"start":{"row":94,"column":40},"end":{"row":94,"column":42},"action":"remove","lines":["Ma"],"id":29},{"start":{"row":94,"column":40},"end":{"row":94,"column":45},"action":"insert","lines":["MaLop"]}],[{"start":{"row":178,"column":17},"end":{"row":178,"column":18},"action":"insert","lines":[","],"id":30}],[{"start":{"row":178,"column":18},"end":{"row":179,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":179,"column":0},"end":{"row":179,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":179,"column":4},"end":{"row":179,"column":12},"action":"insert","lines":["GetById1"],"id":32}],[{"start":{"row":179,"column":12},"end":{"row":179,"column":13},"action":"insert","lines":[":"],"id":33}],[{"start":{"row":179,"column":13},"end":{"row":179,"column":21},"action":"insert","lines":["GetById1"],"id":34}]]},"ace":{"folds":[],"scrolltop":2241,"scrollleft":0,"selection":{"start":{"row":179,"column":21},"end":{"row":179,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":19,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1638630794794,"hash":"32ea525eb772d98475881da09af25b41355b5354"}