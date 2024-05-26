import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb"

const client = new DynamoDBClient({})

// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/dynamodb/command/ListTablesCommand/
export const listTables = async () => {
  const command = new ListTablesCommand({})
  const response = await client.send(command)
  console.log(response.TableNames.join("\n"))
  return response
}

listTables()
