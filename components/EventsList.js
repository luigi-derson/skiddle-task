import Link from "next/link";
import Image from "next/image";

const EventsList = ({ events = [] }) => {
  return (
    <div>
      {events.map(({ id, eventname, description, largeimageurl }) => {
        return (
          <div key={id}>
            <Image
              src={largeimageurl}
              alt={eventname}
              width={300}
              height={300}
            />
            <Link href={`/event/${id}`}>
              <a>{eventname}</a>
            </Link>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EventsList;
