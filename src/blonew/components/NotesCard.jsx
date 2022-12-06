import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNews } from '../../store/blonewC';

export const NotesCard = ({note}) => {


    const dispatch = useDispatch();

    const onClickNews = () => {
        dispatch(setActiveNews({note}))
    }

    const descriptionNote = useMemo(() => {
        return note.bodyIMG1.length > 15
            ? note.bodyIMG1.substring(0,15) + '...'
            : note.bodyIMG1;
    })

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 col centro mt-3">
        <div className="card pointer" onClick={onClickNews}>
            <img src={note.imageUrl[0]} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title centro">{note.title}</h5>
            </div>
            <p className="card-text ms-2"><small className="text-muted">{descriptionNote}</small></p>
        </div>
    </div>
  )
}
