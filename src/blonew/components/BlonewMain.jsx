import { useSelector } from "react-redux"
import { NavBar } from "../loyout/NavBar"
import { NotesCard } from "./NotesCard";


export const BlonewMain = () => {
    
    const n = 3
    const {active, notes} = useSelector( state => state.blonew);
    const nota = active.note;
    
  return (
    <>
        <NavBar/>
        <div>
            <div className=" mb-3 container text-center">
                <div className="card-body">
                    <h1 className="card-title m-3">{nota.title}</h1>
                <div>
                    <img src={nota.imageUrl[0]} className="card-img-bot" alt="..."/>
                </div>
                    <p className="card-text mt-3">{nota.textTitle}</p>
                </div>    
            </div>
            <div className="row g-0 m-5">
                <div className="col-md-4">
                <img src={nota.imageUrl[1]} className="img-fluid rounded-start img-nota-create" alt="..."/>
                </div>
                <div className="col-md-8 mt-3">
                    <div className="card-body">
                        <p className="card-text">{nota.bodyIMG1}</p>
                    </div>
                </div>
                </div>
                <div className="text-end m-5">
                    <div className="card-body">
                        <p className="card-text">{nota.body}</p>
                    </div>
                </div>
                <div className="row g-0 m-5">
                    <div className="col-md-7 ms-4 m-3">
                        <div className="card-body">
                            <p className="card-text">{nota.bodyIMG2}</p>
                        </div>
                    </div>
                    <div className="col-md-4 ms-5 mb-5">
                    <img src={nota.imageUrl[2]} className="img-fluid rounded-end img-nota-create" alt="..."/>
                    </div>
                </div>
                <hr/>
                <p className="card-text ms-5"><small className="text-muted">Blonews populares</small></p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        notes.slice(0, n).map(note => {
                            return <NotesCard key={note.id} note={note}/>
                        })
                    }
                </div>
        </div>
    </>
  )
}
