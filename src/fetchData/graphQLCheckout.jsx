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

export function InsertCheckout(){
    const [addData, loading, error] = useMutation(insertCheckout)
    return {addData}
}

export default function GetAllCheckout(){
    const {data, loading, error} = useSubscription(getCheckout)
    return {data}
}