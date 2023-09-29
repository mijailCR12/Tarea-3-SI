"use strict";

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:<admin>@cluster0.6l3gxpe.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri,
// const client = new MongoClient(process.env.MONGODB_URI,
  { useNewUrlParser: true,  useUnifiedTopology: true });
  
module.exports = client.connect();


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:<admin>@cluster0.6l3gxpe.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// // 