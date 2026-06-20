import Link from "next/link"
import Image from "next/image"

interface props{
    title:string;
    image:string
}

const EventCard = ({title,image}: props) => {
    return (
        <Link href={`/events`} id="event-card">
            <Image src={image} alt={title} width={410} height={300} className="poster" /> 
            <p className="title">{title}</p>
            </Link>
    )
}
export default EventCard
