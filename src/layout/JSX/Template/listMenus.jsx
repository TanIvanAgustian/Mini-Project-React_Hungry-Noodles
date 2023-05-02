import { useNavigate } from "react-router-dom";
import GraphQLFood, { DeleteMenusById } from "../../../graphQL/graphQLMenus"
import ListDrinks from "./listDrinks";
import ListFoods from "./listFoods";
import ListSnacks from "./listSnacks";

export default function ListMenus(){
    return <>
    <div className="row">
        <div className="col">
            <h4>List Makanan</h4>
            <ListFoods/>
        </div>
        <div className="col">
            <h4>List Minuman</h4>
            <ListDrinks/>
        </div>
        <div className="col">
            <h4>List Snack</h4>
            <ListSnacks/>
        </div>
    </div>
    </>
}