import GetAllCheckout from "../../../fetchData/graphQLCheckout";

export default function CheckoutHistory(){
    const {data} = GetAllCheckout()
    
    return <>
        {data?.Checkout.map((post) => (
            <h1>{post.userName}</h1>
        ))}
    </>
}