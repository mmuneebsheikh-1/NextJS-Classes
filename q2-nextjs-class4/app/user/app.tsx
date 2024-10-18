import { Heading } from "../components/heading"

const Userlist = async()=>{
    const url:string ="https://jsonplaceholder.typicode.com/users"
    const fetchData = await fetch(url)
    const res = await fetchData.json()
    console.log(res.data[0])
    return(
        <div>
            <Heading text="User list"/>
            <ol>
                res.map((val:{name:string,id:string},index:number)=>{
                    return <Link href={`/user/${val.id}`} key={index}><li>{`${index + 1} ${val.name}`}</li></Link>
                })
            </ol>
        </div>
    )
}