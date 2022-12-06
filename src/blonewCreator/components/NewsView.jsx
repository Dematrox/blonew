import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useForm } from "../../hooks/useForm";
import { setActiveNews, startSaveNews, startUploadingFiles, startDeletingNote, startChangeNote } from "../../store/blonewC";
import { NavBarCreator } from "../loyout/NavBarCreator";
import { NewNote } from "./NewNote";

export const NewsView = () => {
  
    const dispatch = useDispatch();
    const { active, messageSave, isSaving } = useSelector( state => state.blonew);
    let news = active;
    let img = active.imageUrl;
    if(active.note) {
        news = active.note
        img = active.note.imageUrl
    }
    
    const { body, bodyIMG1, bodyIMG2, title, textTitle, onInputChange, formState} = useForm(news);

    useEffect(() => {
      dispatch(setActiveNews(formState))

    }, [formState])

    useEffect(() => {
        if(messageSave.length > 0) {
            Swal.fire("Actualizado", messageSave, 'success');
        }
    }, [messageSave])
    
    
    const onPost = () => {
        dispatch(startSaveNews())
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;


        dispatch(startUploadingFiles( target.files ));
    }

    const onChangePhoto = () => {
        dispatch(startChangeNote());
    }

    return (
    <>
        <NavBarCreator/>
        <div className="animate__animated animate__slideInRight animate__faster"> 
            <div className="centro">
                <input className="form-control-lg m-3 mt-5 titulo" type="text" placeholder="Titulo" aria-label=".form-control-lg example" name="title" value={title} onChange={onInputChange}></input>
                    {
                        img.length >= 1
                        ? <img src={img[0]} alt="imagen titulo"/>
                        : <figure className="centro">
                            <input className='foto-titulo m-2 form-control' type="file" onChange={onFileInputChange}></input>
                            <figcaption className="alert alert-primary">Seleccionar fotos antes de publicar, y en orden de publicacion, siendo el titulo la primera</figcaption>
                          </figure>
                    }
                <input className="form-control m-3 ms-4" type="text" placeholder="Pie de foto" aria-label=".form-control-lg example"  name="textTitle" value={textTitle} onChange={onInputChange}></input>
            </div>
            <div className="first-note m-5">
                {
                    img.length >= 2
                    ? <img className="img-nota-create" src={img[1]} alt="imagen titulo"/>
                    : <input className='foto-nota form-control' type="file" onChange={onFileInputChange}></input>
                }
                <textarea className="form-control" rows="4" name="bodyIMG1" value={bodyIMG1} onChange={onInputChange}></textarea>
            </div>
            <div className="main-note m-3">
                <textarea className="form-control" rows="8" name="body" value={body} onChange={onInputChange}>{body}</textarea>
            </div>
            <div className="first-note m-5">
                <textarea className="form-control" rows="3" name="bodyIMG2" value={bodyIMG2} onChange={onInputChange}></textarea>
                {
                    img.length >= 3
                    ? <img className="img-nota-create" src={img[2]} alt="imagen titulo"/>
                    : <input className='foto-nota form-control' type="file" onChange={onFileInputChange}></input>
                }
            </div>
            {/* <button onClick={moreNote} className="btn btn-primary m-5">Agregar mas parrafos</button> */}
            <div className="btn-end mx-auto">
                <button disabled={!isSaving} onClick={onChangePhoto} type="button" className="btn btn-lg btn-warning mt-5">Cambiar fotos</button>
                <button disabled={!isSaving} onClick={onDelete} type="button" className="btn btn-lg btn-danger mt-5">Eliminar</button>
                <button disabled={!isSaving} onClick={onPost} type="button" className="btn btn-lg btn-success mt-5">Publicar</button>
            </div>
        </div>
    </>
  )
}
