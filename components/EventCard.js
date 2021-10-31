import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Calendar, MapPin } from "react-feather";

import { truncate } from "../utils/text";
import dayjs from "dayjs";

const EventCard = ({ id, name, description, image, venueName, date }) => {
  return (
    <StyledCard>
      <CardImageWrapper>
        <Link href={`/event/${id}`}>
          <a>
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
          </a>
        </Link>
      </CardImageWrapper>
      <CardDetails>
        <CardText>
          <CardTitle>
            <Link href={`/event/${id}`}>
              <a dangerouslySetInnerHTML={{ __html: name }} />
            </Link>
          </CardTitle>
          <CardDescription
            dangerouslySetInnerHTML={{ __html: truncate(description, 75) }}
          />
        </CardText>
        <CardFooter>
          <CardFooterItem>
            <MapPin width={16} height={16} /> {venueName}
          </CardFooterItem>
          <CardFooterItem>
            <Calendar width={16} height={16} /> {dayjs(date).format("DD/MM/YY")}
          </CardFooterItem>
        </CardFooter>
      </CardDetails>
    </StyledCard>
  );
};

export default EventCard;

const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const CardDescription = styled.p`
  margin: 0;
  font-weight: 300;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.75rem;
  padding: 0.5rem;
  border-top: 1px solid rgb(229, 232, 236);
  color: #7f8e9d;
  flex-grow: 0;
  flex-shrink: 2;
`;

const CardText = styled.div`
  padding: 0.75rem 0.5rem 0;
  flex-grow: 1;
`;

const CardFooterItem = styled.div`
  display: inline-flex;
  align-items: center;
  & > svg {
    margin-right: 0.5rem;
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledCard = styled.div`
  border: 1px solid rgb(229, 232, 236);
  box-shadow: inset 0px 0px 5px #eaeef3, 0px 0px 10px 2px #eaeaea;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const CardImageWrapper = styled.div``;
