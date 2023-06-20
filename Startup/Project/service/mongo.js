const { MongoClient } = require('mongodb');
const data = require('./data');

const dbName = 'bnb';
const colName = 'userProfiles';

const url = 'mongodb+srv://cs260:cs260password@cluster0.ma7pgsn.mongodb.net/';

async function main() {
    const user = new MongoClient(url);

    try{
        await user.connect();

        const result = await user.db(dbName).collection(colName).insertMany(data);

        console.log('Inserted ${result.insertCount} docs');
    } finally {
        await user.close();
    }
}

main().catch(console.error)