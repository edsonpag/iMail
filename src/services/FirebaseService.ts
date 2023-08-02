import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { ServiceAccount } from 'firebase-admin'
import serviceAccount from '../resources/firebase/firebaseCredentials.json'

export default class FirebaseService {

    private database: FirebaseFirestore.Firestore;

    private collection: string

    private value: any

    constructor(collection: string, value: any) {
        initializeApp({
            credential: cert(serviceAccount as ServiceAccount)
        })
        this.database = getFirestore()
        this.collection = collection
        this.value = value
    }

    save = async () => {
        await this.database?.collection(this.collection).add(this.value)
    }
}