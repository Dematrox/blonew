import { useSelector } from "react-redux";
import { BlonewLoyout } from "../components/BlonewLoyout";
import { BlonewMain } from "../components/BlonewMain";

export const BlonewGuest = () => {

    const { active } = useSelector( state => state.blonew);

    return (
    <>
        {
            (!!active) 
                ? <BlonewMain/>
                : <BlonewLoyout/>
        }
    </>
  )
}
