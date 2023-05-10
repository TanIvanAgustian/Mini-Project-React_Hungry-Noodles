import { gql, useMutation, useSubscription } from "@apollo/client";

{/*get all user*/}
const getUsers = gql`
subscription MySubscription {
    Users {
        Email
        Id
        Password
        Username
    }
}`
export default function GETGraphQLUsers() {
    const {data,loading,error} = useSubscription(getUsers)
    return {users:data,loading,error}
}

{/*add new user*/}
const addUsers = gql`
mutation MyMutation($object: Users_insert_input!) {
    insert_Users_one(object: $object){
        Username
        Email
        Password
    }
}  `
export function ADDGraphQLUsers(){
    const [Adddata,loading,error] = useMutation(addUsers);
    return {Adddata,loading,error}
}