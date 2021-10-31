import Link from "next/link";

const EventsList = ({ events = [] }) => {
  return (
    <div>
      {events.map(({ userId, id, title, body }) => {
        return (
          <div key={id}>
            <Link href={`/event/${id}`}>
              <a>{title}</a>
            </Link>
            <p>{body}</p>
            <p>
              Artist:
              <Link href={`/artist/${userId}`}>
                <a>{userId}</a>
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default EventsList;
