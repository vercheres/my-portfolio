import { firestore } from "./firebase";
import { useState } from "react"

const getProjects = async () => {
    const snapshot = await firestore.collection('projects').get()
    snapshot.docs.forEach(doc => console.log(doc.data()))
}

export { getProjects }