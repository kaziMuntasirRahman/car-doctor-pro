import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clustermuntasir.bwzlexy.mongodb.net/?retryWrites=true&w=majority&appName=clusterMuntasir`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const connectDB = async () => {
  console.log('connectDB function is being called...')
  try {
    await client.connect()
    // make sure that the following two line commented
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. Successfully connected to MongoDB!')
    // define database and collections
    const db = client.db('carDoctor')
    return {
      serviceCollection: db.collection('Services'),
      bookingCollection: db.collection('bookings'),
      userCollection: db.collection('users')
    }
  } catch (error) {
    console.log('Failed to connect to MongoDB', error)
  } finally {
    // Ensure that the client wil close when you finish/error
    // await client.close()
  }
}
