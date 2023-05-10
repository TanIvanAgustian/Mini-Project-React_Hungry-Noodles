import { gql, useMutation, useQuery, useSubscription } from "@apollo/client"

const addToCart = gql`
mutation MyMutation($object: Cart_insert_input!) {
    insert_Cart_one(object: $object){
        id
    }
}
`

const displayCartData = gql`
query MyQuery {
    Cart {
        id
        menuAllPrice
        menuAmount
        menuName
        menuPrice
        menu_ID
        user_ID
        Check
    }
    Menus {
        menuImage
        menuAvailability
        id
    }
    Users {
        Username
        Email
        Id
    }
}
`

const updateAmount = gql`
mutation MyMutation($id: uuid!, $object: Cart_set_input!) {
    update_Cart_by_pk(pk_columns: {id: $id}, _set: $object ){
        id
    }
}
`

const deleteCartById = gql`
mutation MyMutation($id: uuid!){
    delete_Cart_by_pk(id: $id){
        id
    }
}
`

const deleteCartbyUserId = gql`
mutation MyMutation($id: uuid_comparison_exp!) {
    delete_Cart(where: {user_ID: $id, Check: {_eq: true}}){
        returning{
            id
        }
    }
}
`

const updateCheck = gql`
mutation MyMutation($id: uuid!, $Check: Boolean!) {
    update_Cart_by_pk(pk_columns: {id: $id}, _set: {Check: $Check}) {
        id
    }
}
`

const checkoutItem = gql`
subscription MySubscription{
    Cart(where: {Check: {_eq: true}}) {
        id
        menuAllPrice
        Check
        menuAmount
        menuName
        menuPrice
        menu_ID
        user_ID
    }
}
`

const deleteMenuByMenuID = gql`
mutation MyMutation($menu_ID: uuid!) {
    delete_Cart(where: {menu_ID: {_eq: $menu_ID}}){
        affected_rows
    }
}
`

const updateCartByMenus = gql`
mutation MyMutation($menu_ID: uuid!, $object: Cart_set_input!) {
    update_Cart(where: {menu_ID: {_eq: $menu_ID}}, _set: $object){
        affected_rows
    }
}
`

export function AddToCart(){
    const [AddCart, loading, error] = useMutation(addToCart, {refetchQueries: [displayCartData]})
    return {AddCart}
} 

export default function ShowCart(){
    const {data, loading, error} = useQuery(displayCartData)
    return {data}
}

export function UpdateAmount(){
    const [UpdateMenuAmount, loading, error] = useMutation(updateAmount, {refetchQueries: [displayCartData]})
    return {UpdateMenuAmount}
}

export function DeleteCartByID(){
    const [DeleteCart,loading, error] = useMutation(deleteCartById, {refetchQueries: [displayCartData]})
    return {DeleteCart}
}

export function UpdateCheck(){
    const [UpdateChecked, loading, error] = useMutation(updateCheck, {refetchQueries: [displayCartData]})
    return {UpdateChecked}
}

export function GetCheckoutItem(){
    const {data,loading,error} = useSubscription(checkoutItem)
    return {data}
}

export function DeleteCartByUserId(){
    const [DeleteByUserId,loading, error] = useMutation(deleteCartbyUserId, {refetchQueries: [displayCartData]})
    return {DeleteByUserId}
}

export function DeleteCartByMenuId(){
    const [DeleteByMenuId,loading, error] = useMutation(deleteMenuByMenuID, {refetchQueries: [displayCartData]})
    return {DeleteByMenuId}
}

export function UpdateCartByMenus(){
    const [UpdateCartByMenu,loading, error] = useMutation(updateCartByMenus, {refetchQueries: [displayCartData]})
    return {UpdateCartByMenu}
}