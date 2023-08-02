import { initializeApp, cert } from 'firebase-admin/app'
import serviceAccount from '../resources/firebase/firebaseCredentials.json'
import { ServiceAccount } from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp({
    credential: cert(serviceAccount as ServiceAccount)
})

const getDatabase = () => getFirestore()
export default getDatabase