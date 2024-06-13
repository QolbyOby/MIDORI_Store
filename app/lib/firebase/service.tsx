import { collection, getFirestore, getDocs, doc, getDoc, query, where, addDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore"
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database"
import { getSession, useSession } from "next-auth/react";
import app from "./init"


const firestore = getFirestore(app)
export const database = getDatabase(app)

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName))
    const data = snapshot.docs.map((doc) => (
        { ...doc.data(), id: doc.id }
    ))

    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id))
    const data = snapshot.data()
    return data;
}


export async function signUp(userData: {
    username: string;
    email: string,
    password: string
}) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email))

    const snapshot = await getDocs(q)
    const data = snapshot.docs.map((doc) => (
        { id: doc.id, ...doc.data() }
    ))

    if (data.length > 0) {
        return ({ status: false, statusCode: 400, message: "Email sudah terdaftar" })
    } else {
        try {
            const docRef = await addDoc(collection(firestore, "users"), userData)
            const userId = docRef.id
            console.log(userId)
            return ({ status: true, statusCode: 200, message: "Berhasil", id: userId })
        } catch (error) {
            console.log(error)
            return ({ status: false, statusCode: 400, message: "Gagal" })
        }
    }
}


export async function login(data: { email: string }) {
    const q = query(collection(firestore, "users"), where("email", "==", data.email))
    const snapshot = await getDocs(q)
    const user = snapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))

    if (user) {
        return user[0]
    } else {
        return null
    }
}


export async function saveCartToFirebase(userId: string, nama: any, total: any, hargaProduk: any, gambarProduk: any) {
    try {
        const orderRef = ref(database, 'orders');
        const newOrderRef = push(orderRef);
        const orderData = {
            userId: userId,
            nama: nama,
            total: total,
            hargaProduk: hargaProduk,
            gambarProduk: gambarProduk,
            timestamp: new Date().toISOString()
        };
        await set(newOrderRef, orderData);
        console.log("Order placed successfully!");
        return { status: true, message: "Order placed successfully!" };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { status: false, message: "Failed to place order." };
    }
}

export const addAddress = async (userId: string, address: string) => {
    try {
        console.log("Adding address for user:", userId, "Address:", address);
        const addressRef = ref(database, 'addresses');
        const newAddressRef = push(addressRef);
        await set(newAddressRef, {
            userId: userId,
            address: address,
        });
        console.log("Address added successfully!");
        return { status: true, message: "Address added successfully!" };
    } catch (error) {
        console.error("Error adding address: ", error);
        return { status: false, message: "Failed to add address." };
    }
};

export const getAddresses = (userId: string) => {
    return new Promise<any[]>((resolve, reject) => {
      const addressesRef = ref(database, `addresses/${userId}`);
      
      onValue(addressesRef, (snapshot) => {
        const addressesData = snapshot.val();
        if (addressesData) {
          const addressesArray = Object.keys(addressesData).map((key) => ({
            id: key,
            address: addressesData[key].address,
            // Tambahkan properti lain dari data alamat jika ada
          }));
          resolve(addressesArray);
        } else {
          resolve([]); // Mengembalikan array kosong jika tidak ada data alamat
        }
      }, (error) => {
        console.error("Error fetching addresses:", error);
        reject(error);
      });
    });
  };

export const deleteAddress = async (addressId: string) => {
    try {
        const addressRef = ref(database, `addresses/${addressId}`);
        await remove(addressRef);
        console.log("Address deleted successfully!");
        return { status: true, message: "Address deleted successfully!" };
    } catch (error) {
        console.error("Error deleting address: ", error);
        return { status: false, message: "Failed to delete address." };
    }
};




