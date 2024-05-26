# DynamoDB Tutorial Using AWS Console

This tutorial will help you get started with Amazon DynamoDB using the AWS Management Console. You'll learn how to create a DynamoDB table, set up indexes, and perform basic CRUD operations.

## Prerequisites

1. **AWS Account**: You need an AWS account to use DynamoDB. If you don't have one, you can create it [here](https://aws.amazon.com/).

## Creating a Table

### Key Concepts

- **Table**: A collection of data in DynamoDB.
- **Primary Key**: A unique identifier for each item in the table. It can be a simple primary key (partition key) or a composite primary key (partition key and sort key).
- **Partition Key**: A single attribute that uniquely identifies an item.
- **Sort Key**: An optional attribute that, when combined with the partition key, uniquely identifies an item.

### Creating a Simple Table

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Create Table**:
   - Click on the "Create table" button.
   - **Table Name**: Enter `Users`.
   - **Primary Key**: Enter `userId` as the Partition key.
   - **Data type**: Select `String`.
   - **Settings**: Leave the default settings for now (Provisioned capacity mode with 5 Read and Write Capacity Units).
   - Click on the "Create" button.

### Creating a Table with Composite Key

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Create Table**:
   - Click on the "Create table" button.
   - **Table Name**: Enter `Orders`.
   - **Primary Key**:
     - Enter `orderId` as the Partition key.
     - Click "Add sort key" and enter `orderDate` as the Sort key.
   - **Data type**: Select `String` for both keys.
   - **Settings**: Leave the default settings for now (Provisioned capacity mode with 5 Read and Write Capacity Units).
   - Click on the "Create" button.

## Indexes

### Global Secondary Index (GSI)

A Global Secondary Index (GSI) allows you to query the data on attributes other than the primary key.

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Create Table**:
   - Click on the "Create table" button.
   - **Table Name**: Enter `Products`.
   - **Primary Key**: Enter `productId` as the Partition key.
   - **Data type**: Select `String`.
   - **Add Index**: Scroll down to the "Indexes" section.
     - Click "Add index".
     - **Index Name**: Enter `CategoryIndex`.
     - **Partition key**: Enter `category`.
     - **Data type**: Select `String`.
     - Leave the other settings as default.
   - **Settings**: Leave the default settings for now (Provisioned capacity mode with 5 Read and Write Capacity Units).
   - Click on the "Create" button.

### Local Secondary Index (LSI)

A Local Secondary Index (LSI) allows you to create an alternate sort key for your table.

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Create Table**:
   - Click on the "Create table" button.
   - **Table Name**: Enter `Orders`.
   - **Primary Key**:
     - Enter `orderId` as the Partition key.
     - Click "Add sort key" and enter `orderDate` as the Sort key.
   - **Data type**: Select `String` for both keys.
   - **Add Index**: Scroll down to the "Indexes" section.
     - Click "Add index".
     - **Index Name**: Enter `StatusIndex`.
     - **Partition key**: Leave as `orderId`.
     - **Sort key**: Enter `status`.
     - **Data type**: Select `String`.
     - Leave the other settings as default.
   - **Settings**: Leave the default settings for now (Provisioned capacity mode with 5 Read and Write Capacity Units).
   - Click on the "Create" button.

## CRUD Operations

### Create Item

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Insert Data**:
   - Click on the "Tables" link in the left-hand menu.
   - Select the `Users` table.
   - Click the "Items" tab.
   - Click the "Create item" button.
   - In the pop-up, add the following data:
     - **userId**: `123` (String)
     - **name**: `John Doe` (String)
     - **email**: `john.doe@example.com` (String)
   - Click the "Save" button.

### Read Item

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Query Data**:
   - Click on the "Tables" link in the left-hand menu.
   - Select the `Users` table.
   - Click the "Items" tab.
   - Click the "Explore table items" button.
   - In the "Search items" section, enter `userId = 123`.
   - Click the "Run" button to see the results.

### Update Item

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Update Data**:
   - Click on the "Tables" link in the left-hand menu.
   - Select the `Users` table.
   - Click the "Items" tab.
   - Locate the item with `userId` `123` and click on it to view its details.
   - Click the "Actions" button and select "Edit".
   - Update the `email` attribute to `john.updated@example.com`.
   - Click the "Save changes" button.

### Delete Item

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Delete Data**:
   - Click on the "Tables" link in the left-hand menu.
   - Select the `Users` table.
   - Click the "Items" tab.
   - Locate the item with `userId` `123` and click on it to view its details.
   - Click the "Actions" button and select "Delete".
   - Confirm the deletion by clicking the "Delete" button.

## Query Items

1. **Sign in to the AWS Management Console**: Go to [AWS Console](https://aws.amazon.com/console/).
2. **Open the DynamoDB Console**: From the Services menu, select DynamoDB.
3. **Query Data**:
   - Click on the "Tables" link in the left-hand menu.
   - Select the `Users` table.
   - Click the "Explore table items" button.
   - In the "Search items" section, enter your desired query. For example, `userId = 123` to find all items with the `userId` `123`.
   - Click the "Run" button to see the results.
