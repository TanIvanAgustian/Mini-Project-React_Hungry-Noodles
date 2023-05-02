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