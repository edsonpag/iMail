import getDatabase from "../firebase/firebase"

export default class FirebaseService {

    private static database: FirebaseFirestore.Firestore = getDatabase()

    save = async (collection: string, value: any) => {
        await FirebaseService.database.collection(collection).add(value)
    }
}