import { gql, useMutation, useSubscription } from "@apollo/client";

{/*add data to Checkout table*/}
const insertCheckout = gql`
mutation MyMutation($object: Checkout_insert_input!) {
    insert_Checkout_one(object: $object) {
        id
    }
}`
export function InsertCheckout(){
  const [addData, loading, error] = useMutation(insertCheckout)
  return {addData}
}

{/*get all checouted data*/}
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
}`
export default function GetAllCheckout(){
  const {data, loading, error} = useSubscription(getCheckout)
  return {data}
}

{/*delete chedkout data if admin not confirm/cancel*/}
const deleteCheckoutById = gql`
mutation MyMutation($id: uuid!) {
    delete_Checkout_by_pk(id: $id){
      id
    }
  }`
export function DeleteCheckoutById(){
  const [deleteData, loading, error] = useMutation(deleteCheckoutById)
  return {deleteData}
}

{/*to admin cancel checkout*/}
const cancelCheckoutById = gql`
mutation MyMutation($id: uuid!) {
    update_Checkout_by_pk(pk_columns: {id: $id}, _set: {cancelation: true}) {
      id
    }
  }`
export function CancelCheckoutById(){
  const [cancelCheckout, loading, error] = useMutation(cancelCheckoutById)
  return {cancelCheckout}
}

{/*to admin confirm checkout*/}
const confirmCheckoutById = gql`
mutation MyMutation($id: uuid!) {
    update_Checkout_by_pk(pk_columns: {id: $id}, _set: {confirmation: true}) {
      id
    }
  }`
export function ConfirmCheckoutById(){
  const [confirmCheckout, loading, error] = useMutation(confirmCheckoutById)
  return {confirmCheckout}
}








