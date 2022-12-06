import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNews } from "../../store/blonewC";

export const BlonewItem = ({note}) => {

    const dispatch = useDispatch();

    const onClickNews = () => {
        dispatch(setActiveNews({note}))
    }
    
    const descriptionNote = useMemo(() => {
        return note.bodyIMG1.length > 560
            ? note.bodyIMG1.substring(0,560) + '...'
            : note.bodyIMG1;
    })

    return (
        <div className="page pointer animate__animated animate__slideInRight animate__faster" onClick={onClickNews}>
        <div className="m-5">
            <img src={note.imageUrl[0]} className="img-nota" alt="Imagen Nota" />
        </div>
        <div>
            <h4>{note.title}</h4>
            <hr/>
            <p>{descriptionNote}</p>
        </div>
        </div>
    )
}
