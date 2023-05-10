import { gql, useMutation, useSubscription } from "@apollo/client";

{/*get all menu*/}
const getMenu = gql`
subscription MySubscription {
    Menus {
        id
        menuAvailability
        menuCategory
        menuDescription
        menuImage
        menuName
        menuPrice
    }
}`
export default function GraphQLMenu(){
    const {data, loading, error} = useSubscription(getMenu)
    return {data}
}

{/*get all food category*/}
const getFood = gql`
subscription MySubscription {
    Menus(where: {menuCategory: {_like: "Makanan"}}) {
        id
        menuCategory
        menuDescription
        menuImage
        menuName
        menuPrice
        menuAvailability
        }
    }`
export function GraphQLFood(){
    const {data, loading, error} = useSubscription(getFood)
    return {data}
}

{/*get all Drink Category*/}
const getDrink = gql`
subscription MySubscription {
    Menus(where: {menuCategory: {_like: "Minuman"}}) {
        id
        menuCategory
        menuDescription
        menuImage
        menuName
        menuPrice
        menuAvailability
        }
    }`
export function GraphQLDrink(){
    const {data, loading, error} = useSubscription(getDrink)
    return {data}
}

{/*get all snack category*/}
const getSnack = gql`
subscription MySubscription {
    Menus(where: {menuCategory: {_like: "Snack"}}) {
        id
        menuCategory
        menuDescription
        menuImage
        menuName
        menuPrice
        menuAvailability
        }
    }`
export function GraphQLSnack(){
    const {data, loading, error} = useSubscription(getSnack)
    return {data}
}

{/*insert new menu*/}
const insertMenus = gql`
mutation MyMutation($object: Menus_insert_input!) {
    insert_Menus_one(object: $object) {
        id
        menuCategory
        menuDescription
        menuName
        menuImage
        menuPrice
        menuAvailability
    }
}`
export function InsertMenus(){
    const [AddMenus, loading, error] = useMutation(insertMenus)
    return {AddMenus}
}

{/*to deleteing menu*/}
const deleteMenusById = gql`
mutation MyMutation($id: uuid!) {
    delete_Menus_by_pk(id: $id){
        id
    }
}`
export function DeleteMenusById(){
    const [DeleteMenuById, loading, error] = useMutation(deleteMenusById)
    return {DeleteMenuById}
}

{/*to update the availability of the menu*/}
const updateAvailability = gql`
mutation MyMutation($id: uuid!, $menuAvailability: Boolean!) {
    update_Menus_by_pk(pk_columns: {id: $id}, _set: {menuAvailability: $menuAvailability}) {
        id
        menuAvailability
    }
}`
export function UpdateAvailability(){
    const [UpdateMenuAvailability, loading, error] = useMutation(updateAvailability)
    return {UpdateMenuAvailability}
}

{/*to updateing menu*/}
const updateMenuById = gql`
mutation MyMutation($id: uuid!, $object: Menus_set_input!) {
    update_Menus_by_pk(pk_columns: {id: $id}, _set: $object) {
        id
        menuAvailability
        menuCategory
        menuDescription
        menuImage
        menuName
        menuPrice
    }
}`
export function UpdateMenusById(){
    const [UpdateMenu] = useMutation(updateMenuById)
    return {UpdateMenu}
}