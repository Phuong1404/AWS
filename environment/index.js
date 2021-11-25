const express = require('express');
const bodyParser = require('body-parser');
var cors=require('cors');

const port = 8080;
const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());

const KhoaRouter=require('./Router/KhoaRouter')
app.use('/khoa',KhoaRouter);

const LopRouter=require('./Router/LopRouter')
app.use('/lop',LopRouter);

const SinhVienRouter=require('./Router/SinhVienRouter')
app.use('/SinhVien',SinhVienRouter);

const GiangVienRouter=require('./Router/GiangVienRouter')
app.use('/GiangVien',GiangVienRouter);

const MonHocRouter=require('./Router/MonHocRouter')
app.use('/MonHoc',MonHocRouter);

const PhanCongRouter=require('./Router/PhanCongRouter')
app.use('/PhanCong',PhanCongRouter);

const DiemRouter=require('./Router/DiemRouter')
app.use('/Diem',DiemRouter);

console.log(`Orders service listening on port ${port}`);
app.listen(port);