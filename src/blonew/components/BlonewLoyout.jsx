import { useSelector } from "react-redux";
import { BlonewItem } from "../../blonewCreator/components/BlonewItem";
import { NavBar } from "../loyout/NavBar";

export const BlonewLoyout = () => {
    
    const { notes} = useSelector( state => state.blonew);

  return (
    <>
        <div className="todo">
            <NavBar/>
            {
                notes.map(note => (
                    <BlonewItem key={note.id} note={note}/>
                ))
            }
        </div>
    </>
  )
}
