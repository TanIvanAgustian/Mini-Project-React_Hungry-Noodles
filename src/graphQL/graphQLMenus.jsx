import { gql, useMutation, useSubscription } from "@apollo/client";

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
}
`

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
    }
`

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
    }
`

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
    }
`

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
}
`

const deleteMenusById = gql`
mutation MyMutation($id: uuid!) {
    delete_Menus_by_pk(id: $id){
        id
    }
}
`

const updateAvailability = gql`
mutation MyMutation($id: uuid!, $menuAvailability: Boolean!) {
    update_Menus_by_pk(pk_columns: {id: $id}, _set: {menuAvailability: $menuAvailability}) {
        id
        menuAvailability
    }
}
`

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
}
`

export default function GraphQLMenu(){
    const {data, loading, error} = useSubscription(getMenu)
    return {data}
}

export function GraphQLFood(){
    const {data, loading, error} = useSubscription(getFood)
    return {data}
}
export function GraphQLDrink(){
    const {data, loading, error} = useSubscription(getDrink)
    return {data}
}
export function GraphQLSnack(){
    const {data, loading, error} = useSubscription(getSnack)
    return {data}
}

export function InsertMenus(){
    const [AddMenus, loading, error] = useMutation(insertMenus)
    return {AddMenus}
}

export function DeleteMenusById(){
    const [DeleteMenuById, loading, error] = useMutation(deleteMenusById)
    return {DeleteMenuById}
}

export function UpdateAvailability(){
    const [UpdateMenuAvailability, loading, error] = useMutation(updateAvailability)
    return {UpdateMenuAvailability}
}

export function UpdateMenusById(){
    const [UpdateMenu] = useMutation(updateMenuById)
    return {UpdateMenu}
}