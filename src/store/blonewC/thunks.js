import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNews, setActiveNews, setNews, setSaving, updateNews, setPhotosToactiveNote, delateNewsById } from "./";
import { fileUpload } from "./fileUpload";
import { loadNotes } from "./loadNotes";


export const startNewNews = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;

        const newNews = {
            title: '',
            textTitle: '',
            bodyIMG1: '',
            body: '',
            bodyIMG2: '',
            imageUrl: [],
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB, `profile/${uid}/blonew`));
        await setDoc( newDoc, newNews, {merge: true});

        newNews.id = newDoc.id;

        dispatch(addNewEmptyNews(newNews))
        dispatch(setActiveNews(newNews))
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe')

        const notes = await loadNotes(uid);

        dispatch(setNews(notes))
    }
}

export const startSaveNews = () => {
    return async(dispatch, getState) => {

        dispatch(setSaving())

        const { uid } = getState().auth;
        const {active:note} = getState().blonew;
        
        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `profile/${uid}/blonew/${note.id}`);
        const docRefGuest = doc(FirebaseDB, `profile/Z4ngDC2iiqQhTIJPX5d20hN8dlG2/blonew/${note.id}`);
        await setDoc( docRef, noteToFireStore, {merge: true})
        await setDoc( docRefGuest, noteToFireStore, {merge: true})

        dispatch(updateNews(note));
    }
}

export const startUploadingFiles = (files = []) => {
    return async(dispatch) => {
        dispatch(setSaving())

        const photo = []
        for ( const file of files ) {
            photo.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(photo);
        dispatch(setPhotosToactiveNote(photosUrls))
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        const {active:note} = getState().blonew;

        const docRef = doc(FirebaseDB, `profile/${uid}/blonew/${note.id}`);
        const docRefGuest = doc(FirebaseDB, `profile/Z4ngDC2iiqQhTIJPX5d20hN8dlG2/blonew/${note.id}`);
        await deleteDoc(docRef);
        await deleteDoc(docRefGuest);

        dispatch(delateNewsById(note.id))
    }
}

export const startChangeNote = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        const {active:note} = getState().blonew;
        
        const photoChange = {...note, imageUrl: []}
        delete photoChange.id;
        
        const docRef = doc(FirebaseDB, `profile/${uid}/blonew/${note.id}`);
        const docRefGuest = doc(FirebaseDB, `profile/Z4ngDC2iiqQhTIJPX5d20hN8dlG2/blonew/${note.id}`);
        await setDoc( docRef, photoChange, {merge: true})
        await setDoc( docRefGuest, photoChange, {merge: true})
        
        dispatch(setActiveNews(photoChange));
    }
}