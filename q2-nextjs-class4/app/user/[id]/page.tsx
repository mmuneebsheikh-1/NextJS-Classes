import { Heading } from "@/app/components/heading";

async function UserPage (props: any) {
    const url = "https://jsonplaceholder.typicode.com/users/${props.params.id}"
    const fetchData = await fetch(url)
    const res = await fetchData.json()
    console.log(res.name)
    console.log(res.email)
    console.log(props.params.id)
    return(
        <div>
            <Heading text={res.name}/>
            <Heading text={res.email}/>
            <Heading text={res.id}/>
        </div>
    )
}