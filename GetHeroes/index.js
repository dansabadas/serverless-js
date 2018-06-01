const MongoClient = require('mongodb').MongoClient;
const auth = require('../shared/index');
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    MongoClient.connect(
        process.env.CosmosDBURL,
        {auth: auth},
        (err, database) => {
            if(err) throw err;
            context.log('connected successfully.');
            const db = database.db(process.env.CosmosDB);
            db
                .collection('Heroes')
                .find()
                .toArray((err, result)=> {
                    if(err) throw err;
                    context.log('JavaScript HTTP trigger function processed a request.');
                    result.forEach(hero => delete hero._id);
                    context.res = {
                    status: 200, // by default is status 200
                        body: result
                    };
                    database.close();
                    context.done();
                });

        }
    );
    // context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: ["Sarah", "John"]
    //     };
    // context.done();
};
//https://danson-pbp-functionapp-api.azurewebsites.net/api/HelloWorld?name=dan