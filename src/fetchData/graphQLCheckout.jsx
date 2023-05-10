import { gql, useMutation, useSubscription } from "@apollo/client";

const insertCheckout = gql`
mutation MyMutation($object: Checkout_insert_input!) {
    insert_Checkout_one(object: $object) {
        id
    }
}
`

const getCheckout = gql`
subscription MySubscription {
    Checkout {
        address
        cancelation
        city
        confirmation
        email
        id
        order
        orderAmount
        orderPrice
        phoneNumber
        payment
        postalCode
        province
        totalPayment
        userName
        user_ID
    }
}
`

const deleteCheckoutById = gql`
mutation MyMutation($id: uuid!) {
    delete_Checkout_by_pk(id: $id){
      id
    }
  }
`

const cancelCheckoutById = gql`
mutation MyMutation($id: uuid!) {
    update_Checkout_by_pk(pk_columns: {id: $id}, _set: {cancelation: true}) {
      id
    }
  }
`

const confirmCheckoutById = gql`
mutation MyMutation($id: uuid!) {
    update_Checkout_by_pk(pk_columns: {id: $id}, _set: {confirmation: true}) {
      id
    }
  }
`

export function InsertCheckout(){
    const [addData, loading, error] = useMutation(insertCheckout)
    return {addData}
}

export default function GetAllCheckout(){
    const {data, loading, error} = useSubscription(getCheckout)
    return {data}
}

export function DeleteCheckoutById(){
    const [deleteData, loading, error] = useMutation(deleteCheckoutById)
    return {deleteData}
}

export function CancelCheckoutById(){
    const [cancelCheckout, loading, error] = useMutation(cancelCheckoutById)
    return {cancelCheckout}
}

export function ConfirmCheckoutById(){
    const [confirmCheckout, loading, error] = useMutation(confirmCheckoutById)
    return {confirmCheckout}
}