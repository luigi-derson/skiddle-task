import Link from "next/link";
import Image from "next/image";

const Event = ({ eventname, description, artists = [], largeimageurl }) => {
  return (
    <div>
      <Image src={largeimageurl} alt={eventname} width={500} height={500} />
      <h1>{eventname}</h1>
      <p>{description}</p>
      <ul>
        {artists.map(({ artistid, name }) => (
          <li key={artistid}>
            <Link href={`/artist/${artistid}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Event;
