module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
            // status: 200, /* Defaults to 200 */
            body: ["Sarah", "John"]
        };
    context.done();
};
//https://danson-pbp-functionapp-api.azurewebsites.net/api/HelloWorld?name=dan