import { 
  addDoc, 
  collection, 
  deleteDoc, 
  doc,  
  getDoc, 
  getDocs, 
  getFirestore, 
  QueryDocumentSnapshot, 
  setDoc, 
  SnapshotOptions
} from "firebase/firestore";

import Client from "@/core/Client";
import { ClientRepository } from "@/core/ClientRepository";
import firebaseApp from "../firebaseApp";

const db = getFirestore(firebaseApp);

export default class ClientCollection implements ClientRepository {

  #converter = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        address: client.address,
        district: client.district,
        city: client.city,
        phone: client.phone,
        isPlus: client.isPlus,
        id: client.id
      } 
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Client {
      const data = snapshot.data(options);
      return new Client(
        data.name, 
        data.address, 
        data.district, 
        data.city, 
        data.phone, 
        data.isPlus, 
        snapshot.id
      );
    }
  }

  #collection = collection(db, 'clients').withConverter(this.#converter);

  async save(client: Client): Promise<Client> {
    // console.log(client)
    if (client.id) {
      await setDoc(
        doc(db, 'clients', client.id.toString()).withConverter(this.#converter), 
        client
      );
      // console.log(client);
      
      return client;
    } else {
      const docRef = await addDoc(
        this.#collection,
        client
      );
      // console.log(docRef);
      const doc = await getDoc(docRef);
      // console.log(doc);
      return doc.data() || Client.empty();
    }
  }

  async delete(client: Client): Promise<void> {
    return await deleteDoc(doc(db, 'clients', client.id.toString()));
  }

  async getAll(): Promise<Client[]> {
    const clientsSnapshot = await getDocs(this.#collection);
    const clients = clientsSnapshot.docs.map(doc => doc.data() ?? []);
    return clients;
  }

}