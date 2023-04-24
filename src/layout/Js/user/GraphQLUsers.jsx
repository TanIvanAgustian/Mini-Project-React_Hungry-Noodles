import { gql, useMutation, useSubscription } from "@apollo/client";

const getUsers = gql`
subscription MySubscription {
    Users {
        Email
        Id
        Password
        Username
    }
}
`
const addUsers = gql`
mutation MyMutation($object: Users_insert_input!) {
    insert_Users_one(object: $object){
        Username
        Email
        Password
    }
}  
`

export default function GETGraphQLUsers() {
    const {data,loading,error} = useSubscription(getUsers)
    return {data,loading,error}
}

export function ADDGraphQLUsers(){
    const [Adddata,loading,error] = useMutation(addUsers);
    return {Adddata,loading,error}
}