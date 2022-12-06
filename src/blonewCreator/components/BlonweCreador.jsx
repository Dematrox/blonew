import { useDispatch, useSelector } from "react-redux"
import { startNewNews } from "../../store/blonewC/thunks";
import { NavBarCreator } from "../loyout/NavBarCreator"
import { BlonewItem } from "./BlonewItem";

export const BlonewCreador = () => {

    const dispatch = useDispatch();
    const { isSaving, notes} = useSelector( state => state.blonew);
    const onClickNewNews = () => {
        dispatch(startNewNews());
    }
    
    
    return (
        <>
        <div className="todo">
            <NavBarCreator/>
                {
                    notes == 0 
                    ? <h5 className="mt-5 centro text-muted">Todavia no hay notas</h5>
                    : notes.map(note => (
                        <BlonewItem key={note.id} note={note}/>
                    ))
                }
            <button disabled={!isSaving} onClick={onClickNewNews} className="bi bi-file-plus-fill btn-newNews">
                <i className="bi bi-file-plus-fill btn-newNews">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="100" fill="currentColor" className="bi bi-file-plus-fill" viewBox="0 0 16 16">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                    </svg>
                </i>
            </button>
        </div>
    </>
  )
}
