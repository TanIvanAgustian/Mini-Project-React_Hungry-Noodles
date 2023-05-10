import { gql, useMutation, useQuery, useSubscription } from "@apollo/client"

{/*Input Data to Cart*/}
const addToCart = gql`
mutation MyMutation($object: Cart_insert_input!) {
    insert_Cart_one(object: $object){
        id
    }
}`
export function AddToCart(){
    const [AddCart, loading, error] = useMutation(addToCart, {refetchQueries: [displayCartData]})
    return {AddCart}
}

{/*Get data form cart, menus, and user to make checkout data*/}
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
}`
export default function ShowCart(){
    const {data, loading, error} = useQuery(displayCartData)
    return {data}
}


{/*to update the amount item in cart*/}
const updateAmount = gql`
mutation MyMutation($id: uuid!, $object: Cart_set_input!) {
    update_Cart_by_pk(pk_columns: {id: $id}, _set: $object ){
        id
    }
}`
export function UpdateAmount(){
    const [UpdateMenuAmount, loading, error] = useMutation(updateAmount, {refetchQueries: [displayCartData]})
    return {UpdateMenuAmount}
}

{/*to delete cart by the id*/}
const deleteCartById = gql`
mutation MyMutation($id: uuid!){
    delete_Cart_by_pk(id: $id){
        id
    }
}`
export function DeleteCartByID(){
    const [DeleteCart,loading, error] = useMutation(deleteCartById, {refetchQueries: [displayCartData]})
    return {DeleteCart}
}

{/*to delete cart when checout success*/}
const deleteCartbyUserId = gql`
mutation MyMutation($id: uuid_comparison_exp!) {
    delete_Cart(where: {user_ID: $id, Check: {_eq: true}}){
        returning{
            id
        }
    }
}`
export function DeleteCartByUserId(){
    const [DeleteByUserId,loading, error] = useMutation(deleteCartbyUserId, {refetchQueries: [displayCartData]})
    return {DeleteByUserId}
}

{/*update check in cart*/}
const updateCheck = gql`
mutation MyMutation($id: uuid!, $Check: Boolean!) {
    update_Cart_by_pk(pk_columns: {id: $id}, _set: {Check: $Check}) {
        id
    }
}`
export function UpdateCheck(){
    const [UpdateChecked, loading, error] = useMutation(updateCheck, {refetchQueries: [displayCartData]})
    return {UpdateChecked}
}

{/*To get all Checked item*/}
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
}`
export function GetCheckoutItem(){
    const {data,loading,error} = useSubscription(checkoutItem)
    return {data}
}

{/*to delete Cart if menus Deleted*/}
const deleteMenuByMenuID = gql`
mutation MyMutation($menu_ID: uuid!) {
    delete_Cart(where: {menu_ID: {_eq: $menu_ID}}){
        affected_rows
    }
}`
export function DeleteCartByMenuId(){
    const [DeleteByMenuId,loading, error] = useMutation(deleteMenuByMenuID, {refetchQueries: [displayCartData]})
    return {DeleteByMenuId}
}

{/*to Update Menus if Cart Updated*/}
const updateCartByMenus = gql`
mutation MyMutation($menu_ID: uuid!, $object: Cart_set_input!) {
    update_Cart(where: {menu_ID: {_eq: $menu_ID}}, _set: $object){
        affected_rows
    }
}`
export function UpdateCartByMenus(){
    const [UpdateCartByMenu,loading, error] = useMutation(updateCartByMenus, {refetchQueries: [displayCartData]})
    return {UpdateCartByMenu}
}