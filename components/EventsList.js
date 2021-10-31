import Link from "next/link";
import Image from "next/image";
import Spinner, { SpinnerWrapper } from "./Spinner";
import styled from "styled-components";
import { Container } from "../components/Layout";
import EventCard from "./EventCard";

const EventsList = ({
  events = [],
  query = "",
  totalCount = "",
  isLoading,
}) => {
  const renderResultStats = query && Boolean(totalCount);
  const renderNoResults = query && !Boolean(events.length) && !isLoading;
  if (!query) return null;

  return (
    <EventsWrapper>
      <Container>
        {renderResultStats && (
          <StatsWrapper>
            <ResultStats>
              {totalCount} results for &lsquo;{query}&rsquo;
            </ResultStats>
          </StatsWrapper>
        )}

        {renderNoResults && (
          <ResultStats>No results for &lsquo;{query}&rsquo;</ResultStats>
        )}

        {isLoading ? (
          <SpinnerWrapper align="center">
            <Spinner />
          </SpinnerWrapper>
        ) : (
          <EventsGrid>
            {events.map(
              ({ id, eventname, description, largeimageurl, venue, date }) => (
                <EventCard
                  key={id}
                  id={id}
                  name={eventname}
                  image={largeimageurl}
                  description={description}
                  venueName={venue.name}
                  date={date}
                />
              )
            )}
          </EventsGrid>
        )}
      </Container>
    </EventsWrapper>
  );
};

export default EventsList;

const EventsWrapper = styled.div`
  padding: 2rem 0;
`;

const ResultStats = styled.span`
  color: #7f8e9d;
`;

const StatsWrapper = styled.div`
  padding-bottom: 1rem;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.275rem;
`;
