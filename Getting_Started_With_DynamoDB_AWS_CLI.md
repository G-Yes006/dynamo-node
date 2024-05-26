### README_AWS_CLI_DynamoDB_Tutorial.md

````markdown
# DynamoDB Tutorial Using AWS CLI

This tutorial will help you get started with Amazon DynamoDB using the AWS Command Line Interface (CLI). You'll learn how to create a DynamoDB table, set up indexes, and perform basic CRUD operations.

## Prerequisites

1. **AWS Account**: You need an AWS account to use DynamoDB. If you don't have one, you can create it [here](https://aws.amazon.com/).
2. **AWS CLI**: Install the AWS CLI. You can find installation instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
3. **AWS CLI Configuration**: Configure the AWS CLI with your credentials. Run `aws configure` and provide your AWS Access Key ID, Secret Access Key, region, and output format.

## Setting Up AWS CLI

Run the following command to configure the AWS CLI:

```bash
aws configure
```
````

Provide your AWS credentials and default region:

```plaintext
AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
Default region name [None]: YOUR_AWS_REGION
Default output format [None]: json
```

## Creating a Table

### Key Concepts

- **Table**: A collection of data in DynamoDB.
- **Primary Key**: A unique identifier for each item in the table. It can be a simple primary key (partition key) or a composite primary key (partition key and sort key).
- **Partition Key**: A single attribute that uniquely identifies an item.
- **Sort Key**: An optional attribute that, when combined with the partition key, uniquely identifies an item.

### Creating a Simple Table

Run the following command to create a simple table with a primary key:

```bash
aws dynamodb create-table \
    --table-name Users \
    --attribute-definitions AttributeName=userId,AttributeType=S \
    --key-schema AttributeName=userId,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

### Creating a Table with Composite Key

Run the following command to create a table with a composite primary key:

```bash
aws dynamodb create-table \
    --table-name Orders \
    --attribute-definitions AttributeName=orderId,AttributeType=S AttributeName=orderDate,AttributeType=S \
    --key-schema AttributeName=orderId,KeyType=HASH AttributeName=orderDate,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
```

## Indexes

### Global Secondary Index (GSI)

A Global Secondary Index (GSI) allows you to query the data on attributes other than the primary key. Run the following command to create a table with a GSI:

```bash
aws dynamodb create-table \
    --table-name Products \
    --attribute-definitions AttributeName=productId,AttributeType=S AttributeName=category,AttributeType=S \
    --key-schema AttributeName=productId,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --global-secondary-indexes \
        "IndexName=CategoryIndex,KeySchema=[{AttributeName=category,KeyType=HASH}],Projection={ProjectionType=ALL},ProvisionedThroughput={ReadCapacityUnits=5,WriteCapacityUnits=5}"
```

### Local Secondary Index (LSI)

A Local Secondary Index (LSI) allows you to create an alternate sort key for your table. Run the following command to create a table with an LSI:

```bash
aws dynamodb create-table \
    --table-name Orders \
    --attribute-definitions AttributeName=orderId,AttributeType=S AttributeName=orderDate,AttributeType=S AttributeName=status,AttributeType=S \
    --key-schema AttributeName=orderId,KeyType=HASH AttributeName=orderDate,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --local-secondary-indexes \
        "IndexName=StatusIndex,KeySchema=[{AttributeName=orderId,KeyType=HASH},{AttributeName=status,KeyType=RANGE}],Projection={ProjectionType=ALL}"
```

## CRUD Operations

### Create Item

Run the following command to insert a new item into the `Users` table:

```bash
aws dynamodb put-item \
    --table-name Users \
    --item '{"userId": {"S": "123"}, "name": {"S": "John Doe"}, "email": {"S": "john.doe@example.com"}}'
```

### Read Item

Run the following command to retrieve an item from the `Users` table:

```bash
aws dynamodb get-item \
    --table-name Users \
    --key '{"userId": {"S": "123"}}'
```

### Update Item

Run the following command to update an existing item in the `Users` table:

```bash
aws dynamodb update-item \
    --table-name Users \
    --key '{"userId": {"S": "123"}}' \
    --update-expression "SET email = :e" \
    --expression-attribute-values '{":e": {"S": "john.updated@example.com"}}'
```

### Delete Item

Run the following command to delete an item from the `Users` table:

```bash
aws dynamodb delete-item \
    --table-name Users \
    --key '{"userId": {"S": "123"}}'
```

## Query Items

Run the following command to query items in the `Users` table:

```bash
aws dynamodb query \
    --table-name Users \
    --key-condition-expression "userId = :id" \
    --expression-attribute-values '{":id": {"S": "123"}}'
```
