{"filter":false,"title":"DiemController.js","tooltip":"/Controller/DiemController.js","undoManager":{"mark":34,"position":34,"stack":[[{"start":{"row":0,"column":0},"end":{"row":39,"column":1},"action":"insert","lines":["const LopModel=require('../Model/LopModel')","exports.GetAllList= (req, res)=> {","    LopModel.Get().then(result =>{","        console.log(result);","        res.json(result.Items);","    })","}","exports.createNewRecord = (req, res) =>{","    let LopReqData=req.body;","    console.log(LopReqData)","    LopModel.Create(LopReqData).then(result =>{","        console.log(result);","        res.status(201).json(result);","    })","}","exports.GetOneRecord= (req, res)=>{","    const ID=req.params.id;","    LopModel.GetById(ID).then(result =>{","        console.log(result);","        res.json(result.Items);","    });","}","exports.updateRecord=(req, res)=>{","    let LopReqData=req.body","    const ID=req.params.id;","    const Lop=req.body.TenLop;","     const Khoa=req.body.MaKhoa;","     console.log(LopReqData)","    LopModel.Update(ID,Lop,Khoa).then(result =>{","        console.log(result);","        res.status(200).json(result);","    })","}","exports.deleteRecord=(req, res)=>{","    const ID=req.params.id;","    LopModel.Delete(ID).then(result =>{","        console.log(result);","        res.status(200).json(result);","    })","}"],"id":1}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":9},"action":"remove","lines":["Lop"],"id":2},{"start":{"row":0,"column":6},"end":{"row":0,"column":10},"action":"insert","lines":["Diem"]},{"start":{"row":0,"column":34},"end":{"row":0,"column":37},"action":"remove","lines":["Lop"]},{"start":{"row":0,"column":34},"end":{"row":0,"column":38},"action":"insert","lines":["Diem"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":7},"action":"remove","lines":["Lop"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":8},"action":"insert","lines":["Diem"]},{"start":{"row":8,"column":8},"end":{"row":8,"column":11},"action":"remove","lines":["Lop"]},{"start":{"row":8,"column":8},"end":{"row":8,"column":12},"action":"insert","lines":["Diem"]},{"start":{"row":9,"column":16},"end":{"row":9,"column":19},"action":"remove","lines":["Lop"]},{"start":{"row":9,"column":16},"end":{"row":9,"column":20},"action":"insert","lines":["Diem"]},{"start":{"row":10,"column":4},"end":{"row":10,"column":7},"action":"remove","lines":["Lop"]},{"start":{"row":10,"column":4},"end":{"row":10,"column":8},"action":"insert","lines":["Diem"]},{"start":{"row":10,"column":21},"end":{"row":10,"column":24},"action":"remove","lines":["Lop"]},{"start":{"row":10,"column":21},"end":{"row":10,"column":25},"action":"insert","lines":["Diem"]},{"start":{"row":17,"column":4},"end":{"row":17,"column":7},"action":"remove","lines":["Lop"]},{"start":{"row":17,"column":4},"end":{"row":17,"column":8},"action":"insert","lines":["Diem"]},{"start":{"row":23,"column":8},"end":{"row":23,"column":11},"action":"remove","lines":["Lop"]},{"start":{"row":23,"column":8},"end":{"row":23,"column":12},"action":"insert","lines":["Diem"]},{"start":{"row":25,"column":10},"end":{"row":25,"column":13},"action":"remove","lines":["Lop"]},{"start":{"row":25,"column":10},"end":{"row":25,"column":14},"action":"insert","lines":["Diem"]},{"start":{"row":25,"column":27},"end":{"row":25,"column":30},"action":"remove","lines":["Lop"]},{"start":{"row":25,"column":27},"end":{"row":25,"column":31},"action":"insert","lines":["Diem"]},{"start":{"row":27,"column":17},"end":{"row":27,"column":20},"action":"remove","lines":["Lop"]},{"start":{"row":27,"column":17},"end":{"row":27,"column":21},"action":"insert","lines":["Diem"]},{"start":{"row":28,"column":4},"end":{"row":28,"column":7},"action":"remove","lines":["Lop"]},{"start":{"row":28,"column":4},"end":{"row":28,"column":8},"action":"insert","lines":["Diem"]},{"start":{"row":28,"column":24},"end":{"row":28,"column":27},"action":"remove","lines":["Lop"]},{"start":{"row":28,"column":24},"end":{"row":28,"column":28},"action":"insert","lines":["Diem"]},{"start":{"row":35,"column":4},"end":{"row":35,"column":7},"action":"remove","lines":["Lop"]},{"start":{"row":35,"column":4},"end":{"row":35,"column":8},"action":"insert","lines":["Diem"]}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":32},"action":"remove","lines":["    const Diem=req.body.TenDiem;","     const Khoa=req.body.MaKhoa;"],"id":3},{"start":{"row":24,"column":27},"end":{"row":25,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":24,"column":27},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]},{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":["I"]},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["D"]}],[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["1"],"id":5}],[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"remove","lines":["1"],"id":6},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":["D"]},{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"remove","lines":["I"]}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":["c"],"id":7},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["o"]},{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["n"]}],[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"remove","lines":["n"],"id":8},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":["o"]},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["ó"]},{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["n"]}],[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"remove","lines":["n"],"id":9},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":["ó"]},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["o"]},{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["n"]},{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":["s"]},{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["t"]},{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["n"]}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"remove","lines":["n"],"id":10}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":[" "],"id":11},{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["I"]},{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["D"]},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["1"]}],[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["="],"id":12},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"remove","lines":["r"],"id":14},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["e"]},{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["q"]}],[{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"remove","lines":["q"],"id":15},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"remove","lines":["e"]}],[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["r"],"id":16},{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["e"]},{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":["q"]},{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["."]}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["p"],"id":17}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"remove","lines":["p"],"id":18},{"start":{"row":25,"column":18},"end":{"row":25,"column":24},"action":"insert","lines":["params"]}],[{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":["."],"id":19}],[{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"remove","lines":["d"],"id":20},{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"remove","lines":["i"]}],[{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["m"],"id":21},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["a"]},{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["m"]}],[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["o"],"id":22},{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"insert","lines":["n"]}],[{"start":{"row":25,"column":25},"end":{"row":25,"column":26},"action":"insert","lines":["m"],"id":23},{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"remove","lines":["a"],"id":24},{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"insert","lines":["á"]}],[{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"remove","lines":["á"],"id":25},{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"insert","lines":["a"]},{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":["s"]},{"start":{"row":25,"column":28},"end":{"row":25,"column":29},"action":"insert","lines":["v"]}],[{"start":{"row":25,"column":29},"end":{"row":25,"column":30},"action":"insert","lines":[";"],"id":26}],[{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"remove","lines":["m"],"id":27},{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"remove","lines":["e"]},{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"remove","lines":["i"]},{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"remove","lines":["D"]}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["I"],"id":28}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"remove","lines":["I"],"id":29},{"start":{"row":27,"column":24},"end":{"row":27,"column":27},"action":"insert","lines":["ID1"]}],[{"start":{"row":27,"column":31},"end":{"row":27,"column":32},"action":"remove","lines":["a"],"id":30},{"start":{"row":27,"column":30},"end":{"row":27,"column":31},"action":"remove","lines":["o"]},{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"remove","lines":["h"]},{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"remove","lines":["K"]}],[{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"insert","lines":["D"],"id":31}],[{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"remove","lines":["D"],"id":32},{"start":{"row":27,"column":28},"end":{"row":27,"column":39},"action":"insert","lines":["DiemReqData"]}],[{"start":{"row":33,"column":4},"end":{"row":33,"column":27},"action":"remove","lines":["const ID=req.params.id;"],"id":33},{"start":{"row":33,"column":4},"end":{"row":34,"column":30},"action":"insert","lines":["const ID=req.params.mamon;","    const ID1=req.params.masv;"]}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":27},"action":"remove","lines":["const ID=req.params.id;"],"id":34},{"start":{"row":16,"column":4},"end":{"row":17,"column":30},"action":"insert","lines":["const ID=req.params.mamon;","    const ID1=req.params.masv;"]}],[{"start":{"row":18,"column":24},"end":{"row":18,"column":25},"action":"insert","lines":[","],"id":35},{"start":{"row":18,"column":25},"end":{"row":18,"column":26},"action":"insert","lines":["I"]},{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["D"]},{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":["1"]}],[{"start":{"row":36,"column":23},"end":{"row":36,"column":24},"action":"insert","lines":[","],"id":36},{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":["I"]},{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":["D"]},{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":["1"]}]]},"ace":{"folds":[],"scrolltop":469.5,"scrollleft":0,"selection":{"start":{"row":40,"column":1},"end":{"row":40,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":28,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1637846422055,"hash":"1deb4b7bd83e109df0e5ad416c493efb7d44604a"}