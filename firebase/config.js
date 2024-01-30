/*
 * This file is used to initialize the firebase app and
 * export the auth, db and firebase functions
 */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);

// AUTH FUNCTIONS
/*
 *  signInUser -> hadles user authentication to sign in
 *  @param email -> user email
 *  @param password -> user password
 *  @return a user object if the user exists else throw error if they don't
 */
const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const uid = response.user.uid;
      // const usersRef = collection(db, "users");
      // const userDocRef = doc(usersRef, uid);
      return uid;
    })
    .catch((error) => {
      throw error;
    });
};

/*
 * signUpUser -> hadles user authentication to sign up
 * @param email -> user email
 * @param password -> user password
 * @param name -> user name
 * @return an object once user is created else return an error {status: 'succes'|'error', data: user|error}
 */

const signUpUser = async (email, password, fullName) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const uid = response.user.uid;
      const data = {
        uid: uid,
        email,
        fullName,
      };
      const usersRef = collection(db, "users");
      return addDoc(usersRef, data)
        .then((userDoc) => {
          return userDoc;
        })
        .catch((error) => {
          throw error;
        });
    })
    .catch((error) => {
      throw error;
    });
};

/*
 * signOutUser -> handles user authentication to sign out
 * @param none
 */

const signOutUser = async () => {
  signOut(auth).catch((error) => {
    console.log(error);
    throw error;
  });
};

/*
 * resetPassword -> handles user authentication to reset password
 * @param email -> user email
 */

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent!");
  } catch (error) {
    console.log("Error sending password reset email:", error);
    throw error;
  }
};

// FIRESTORE FUNCTIONS

/*
 * storeConversation -> stores a conversation in the database
 * @param conversation -> conversation array
 * @param user -> user object
 * @param timestamp -> timestamp of the conversation submission
 * @return void, throw exception if error occurs
 */

const storeConversation = async (conversation, userId, language, topic) => {
  // If a valid user is not passed in, throw an error
  console.log("userId: ", userId);
  if (!userId) {
    throw new Error("Invalid user");
  }
  // get the conversations collection
  const conversationsRef = collection(db, "conversations");
  // // get all conversations for the user
  const timestamp = serverTimestamp();
  const data = {
    messages: conversation,
    timestamp: timestamp,
    uid: userId,
    language: language,
    topic: topic,
  };
  // conversation -> {id: id, uid: userId, messages: [{content: content, role: role}]}
  addDoc(conversationsRef, data)
    .then((docSnap) => {
      console.log("docSnap: ", docSnap);
      console.log("Conversation stored");
      return;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

/*
 * getConversations -> retrieves all of a users conversations from the database
 * @param user -> user object
 * @return a list of conversations
 */
const getConversations = async (userId) => {
  // query to get all the users' conversations collection
  const conversations = [];
  const getConversationsQuery = query(
    collection(db, "conversations"),
    where("uid", "==", userId)
  );
  const querySnapshot = await getDocs(getConversationsQuery);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    conversations.push(doc.data());
  });
  return conversations;
};

/*
 * getConversation -> retrieves a conversation from the database
 * @param conversationId -> id of the conversation to be retrieved
 * @return a conversation object
 */
const getConversation = async (conversationId) => {
  // If a valid conversation is not passed in, throw an error
  if (!conversationId) {
    throw new Error("Invalid conversation");
  }
  // get the conversation from the conversations collection
  const conversationRef = doc(db, "conversations", conversationId);
  const conversationDoc = await getDoc(conversationRef);
  if (conversationDoc.exists()) {
    return conversationDoc.data();
  } else {
    throw new Error("Conversation does not exist");
  }
};

/*
 * deleteConversation -> deletes a conversation from the database
 * @param conversationId -> id of the conversation to be deleted
 * @return void, throw exception if error occurs
 */
const deleteConversation = async (conversationId) => {
  // If a valid conversation is not passed in, throw an error
  if (!conversationId) {
    throw new Error("Invalid conversation");
  }
  // delete the conversation from the conversations collection
  await deleteDoc(doc(db, "conversations", conversationId));
  return;
};

export {
  firebase,
  auth,
  db,
  signInUser,
  signUpUser,
  signOutUser,
  resetPassword,
  getConversation,
  getConversations,
  storeConversation,
  deleteConversation,
};
