const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const serviceAccount = require('../../firebaseCredentials.json')

class FirebaseService {

    database = null

    constructor() {
        initializeApp({
            credential: cert(serviceAccount)
        })
        this.database = getFirestore()
    }

    save = async (collection, value) => {
        await this.database.collection(collection).add(value)
    }
}

module.exports = FirebaseService