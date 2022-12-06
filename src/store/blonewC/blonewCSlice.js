import { createSlice } from '@reduxjs/toolkit';

export const blonewCSlice = createSlice({
    name: 'blonew',
    initialState: {
        isSaving: true,
        messageSave: '',
        notes: [],
        active: null,
    },
    reducers: {
        addNewEmptyNews: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = true;
        },
        setActiveNews: (state, action) => {
            state.active = action.payload;
        },
        setNews: (state, action) => {
            state.notes = action.payload;
        },
        setNotActiveNews: (state) => {
            state.active = null;
            state.messageSave = '';
        },
        setSaving: (state) => {
            state.isSaving = false;
            state.messageSave = '';
        },
        updateNews: (state, action) => {
            state.isSaving = true;
            state.notes = state.notes.map(note => {

                if( note.id === action.payload.id) {
                    return action.payload
                }
                return note;
            })
            state.messageSave = `${action.payload.title}, actualizado correctamente`;
        },
        setPhotosToactiveNote: (state, action) => {
            state.active.imageUrl = [ ...state.active.imageUrl, ...action.payload ];
            state.isSaving = true;
        },
        clearNotesLogout: (state) => {
            state.isSaving = true;
            state.messageSave = '';
            state.notes = [],
            state.active = null;
        },
        delateNewsById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNews, setActiveNews, setNews, setSaving, updateNews, delateNewsById, setNotActiveNews, setPhotosToactiveNote, clearNotesLogout } =  blonewCSlice.actions;