import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import dayjs from "dayjs";
import { Calendar, Clock, MapPin, User } from "react-feather";

const Event = ({
  id,
  eventname,
  description,
  artists = [],
  largeimageurl,
  venue,
  date,
  openingtimes,
  MinAge,
}) => {
  return (
    <EventLayout>
      <EventImageWrapper>
        <Image
          src={largeimageurl}
          alt={eventname}
          layout="fill"
          objectFit="cover"
        />
      </EventImageWrapper>
      <EventDetails>
        <EventName dangerouslySetInnerHTML={{ __html: eventname }} />
        <EventDescription dangerouslySetInnerHTML={{ __html: description }} />
        <EventMeta>
          <EventMetaItem>
            <MapPin width={16} height={16} /> {venue.name}
          </EventMetaItem>
          <EventMetaItem>
            <Calendar width={16} height={16} />{" "}
            {dayjs(date).format("dddd DD MMMM YYYY")}
          </EventMetaItem>
          <EventMetaItem>
            <Clock width={16} height={16} />
            {openingtimes.doorsopen} til {openingtimes.doorsclose} (last entry{" "}
            {openingtimes.lastentry})
          </EventMetaItem>
          {MinAge && (
            <EventMetaItem>
              <User width={16} height={16} />
              Minimun Age: {MinAge}+
            </EventMetaItem>
          )}
        </EventMeta>

        {Boolean(artists.length) && (
          <>
            <ArtistsTitle>Artists</ArtistsTitle>
            <ArtistsList>
              {artists.map(({ artistid, name }) => (
                <li key={artistid}>
                  <Link href={`/artist/${artistid}`} passHref>
                    <ArtistLink>{name}</ArtistLink>
                  </Link>
                </li>
              ))}
            </ArtistsList>
          </>
        )}
      </EventDetails>
    </EventLayout>
  );
};

export default Event;

const ArtistsTitle = styled.div`
  font-size: 1.25rem;
  padding-top: 2rem;
  margin-bottom: 1rem;
`;

const ArtistLink = styled.a`
  color: ${(props) => props.theme.colors.accent};
`;

const ArtistsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    display: inline-block;
    margin-right: 0.75rem;
  }
`;

const EventMetaItem = styled.div`
  display: inline-flex;
  align-items: center;
  color: #7f8e9d;
  margin-bottom: 0.5rem;

  & > svg {
    margin-right: 0.5rem;
  }
`;

const EventMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
`;

const EventLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 3rem;
  }
`;

const EventDetails = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EventName = styled.h1`
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  max-width: 600px;
  display: inline-flex;
  align-items: flex-end;
  flex-grow: 1;
  color: #333;
`;

const EventDescription = styled.p`
  margin: 0;
  font-weight: 300;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  max-width: 800px;
`;

const EventImageWrapper = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  text-align: center;

  @media (min-width: 992px) {
    width: 600px;
    height: 300px;
    order: 1;
    border-radius: 6px;
    overflow: hidden;
  }
`;
