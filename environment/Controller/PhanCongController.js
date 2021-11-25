const PhanCongModel=require('../Model/PhanCongModel')
exports.GetAllList= (req, res)=> {
    PhanCongModel.Get().then(result =>{
        console.log(result);
        res.json(result.Items);
    })
}
exports.createNewRecord = (req, res) =>{
    let PhanCongReqData=req.body;
    console.log(PhanCongReqData)
    PhanCongModel.Create(PhanCongReqData).then(result =>{
        console.log(result);
        res.status(201).json(result);
    })
}
exports.deleteRecord=(req, res)=>{
    const ID=req.params.mamon;
    const ID1=req.params.malop;
    const ID2=req.params.magv;
    PhanCongModel.Delete(ID,ID1,ID2).then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
}