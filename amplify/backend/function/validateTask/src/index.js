

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
function add(num1, num2){
    return num1+num2;
}

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const num= add(60+9);
    console.log("num: ", num);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
