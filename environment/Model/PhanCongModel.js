// Configure the region
const AWS = require('aws-sdk');

// Configure the region
AWS.config.update({
  region: 'us-east-1'
});

//
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
var docClient = new AWS.DynamoDB.DocumentClient();
async function Get()
{
    const params = {
    TableName : 'PhanCongs'
  }
  try{
    let Records=await docClient.scan(params).promise()
    return Records;
  }
  catch(error){
    console.log(error);
  }
}
async function Create(Data)
{
    let DiemData = {
       MaGV:Data.MaGV,
       MaMon:Data.MaMon,
       MaLop:Data.MaLop
    }
    let sqsDiemData = {
        MessageAttributes: {
          "MaGV": {
            DataType: "String",
            StringValue: DiemData.MaGV
          },
          "MaMon": {
            DataType: "String",
            StringValue: DiemData.MaMon
          },
          "MaLop": {
            DataType: "String",
            StringValue: DiemData.MaLop
          }
        },
        MessageBody: JSON.stringify(DiemData),
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/InsertPhanCong'
    };
    let sendSqsMessage = sqs.sendMessage(sqsDiemData).promise();
    sendSqsMessage.then((data) => {
        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);
        return
    }).catch((err) => {
        console.log(`OrdersSvc | ERROR: ${err}`);
    });
}
async function GetById(ID,ID1,ID2)
{
  var params = {
  TableName: 'PhanCongs',
  FilterExpression: '#name = :value AND #malop = :valu AND #mamon = :val',
  ExpressionAttributeValues: { ':value': ID,':valu':ID1,':val':ID2 },
  ExpressionAttributeNames: { '#name': 'MaGV','#malop':"MaLop",'#mamon':"MaMon" }
}
  try {
    const data = await docClient.scan(params).promise()
    return data
  } catch (err) {
    return err
  }
}
async function GetByMaSV(ID,ID1,ID2)
{
  var params = {
  TableName: 'PhanCongs',
  FilterExpression: '#name = :value',
  ExpressionAttributeValues: { ':value': ID },
  ExpressionAttributeNames: { '#name': 'MaGV' }
}
  try {
    const data = await docClient.scan(params).promise()
    return data
  } catch (err) {
    return err
  }
}
async function Delete(MaGV,MaMon,MaLop)
{
    let DiemData = {
       MaGV:MaGV,
       MaMon:MaMon,
       MaLop:MaLop
    }
    let sqsDiemData = {
        MessageAttributes: {
          "MaGV": {
            DataType: "String",
            StringValue: DiemData.MaGV
          },
          "MaMon": {
            DataType: "String",
            StringValue: DiemData.MaMon
          },
          "MaLop": {
            DataType: "String",
            StringValue: DiemData.MaLop
          }
        },
        MessageBody: JSON.stringify(DiemData),
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/DeletePhanCong'
    };
    let sendSqsMessage = sqs.sendMessage(sqsDiemData).promise();
    sendSqsMessage.then((data) => {
        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);
        return
    }).catch((err) => {
        console.log(`OrdersSvc | ERROR: ${err}`);
    });
}
async function Update(MaGV,MaMon,MaLop)
{
    let DiemData = {
       MaGV:MaGV,
       MaMon:MaMon,
       MaLop:MaLop
    }
    let sqsDiemData = {
        MessageAttributes: {
          "MaGV": {
            DataType: "String",
            StringValue: DiemData.MaGV
          },
          "MaMon": {
            DataType: "String",
            StringValue: DiemData.MaMon
          },
          "MaLop": {
            DataType: "String",
            StringValue: DiemData.MaLop
          }
        },
        MessageBody: JSON.stringify(DiemData),
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/UpdatePhanCong'
    };
    let sendSqsMessage = sqs.sendMessage(sqsDiemData).promise();
    sendSqsMessage.then((data) => {
        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);
        return
    }).catch((err) => {
        console.log(`OrdersSvc | ERROR: ${err}`);
    });
}
module.exports={
    Get:Get,
    Create:Create,
    GetById:GetById,
    Update:Update,
    Delete:Delete,
    GetByMaSV:GetByMaSV
}