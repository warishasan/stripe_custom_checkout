// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async event => {

  console.log(JSON.parse(event.body))
  console.log(Json.parse(event.body.data.object.metadata.yolo))
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
