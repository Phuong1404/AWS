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
    let LopData = {
        MaMon: Data.MaMon,
       MaLop:Data.MaLop,
       MaGV:Data.MaGV
    }
    let sqsLopData = {
        MessageAttributes: {
          "MaMon": {
            DataType: "String",
            StringValue: LopData.MaMon
          },
          "MaLop": {
            DataType: "String",
            StringValue: LopData.MaLop
          },
          "MaGV": {
            DataType: "String",
            StringValue: LopData.MaGV
          }
        },
        MessageBody: JSON.stringify(LopData),
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/InsertLop'
    };
    let sendSqsMessage = sqs.sendMessage(sqsLopData).promise();
    sendSqsMessage.then((data) => {
        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);
        return
    }).catch((err) => {
        console.log(`OrdersSvc | ERROR: ${err}`);
    });
}
async function Delete(MaMon,MaLop,MaGV){
    let LopData = {
        MaMon: MaMon,
       MaLop:MaLop,
       MaGV:MaGV
    }
    let sqsLopData = {
        MessageAttributes: {
          "MaMon": {
            DataType: "String",
            StringValue: LopData.MaMon
          },
          "MaLop": {
            DataType: "String",
            StringValue: LopData.MaLop
          },
          "MaGV": {
            DataType: "String",
            StringValue: LopData.MaGV
          }
        },
        MessageBody: JSON.stringify(LopData),
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/InsertLop'
    };
    let sendSqsMessage = sqs.sendMessage(sqsLopData).promise();
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
    Delete:Delete
}
