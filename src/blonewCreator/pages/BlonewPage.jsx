import { useSelector } from "react-redux";
import { BlonewCreador } from "../components/BlonweCreador";
import { NewsView } from "../components/NewsView";

export const BlonewPage = () => {

    const { active } = useSelector( state => state.blonew);

    return (
    <>
        {
            (!!active) 
                ? <NewsView/>
                : <BlonewCreador/>
        }
    </>
  )
}
