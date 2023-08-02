import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { ServiceAccount } from 'firebase-admin'
import serviceAccount from '../resources/firebase/firebaseCredentials.json'

export default class FirebaseService {

    database: FirebaseFirestore.Firestore | null = null

    constructor() {
        initializeApp({
            credential: cert(serviceAccount as ServiceAccount)
        })
        this.database = getFirestore()
    }

    save = async (collection: string, value: any) => {
        await this.database?.collection(collection).add(value)
    }
}