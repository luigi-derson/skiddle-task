import Image from "next/image";
import { Heart, Music, Twitter } from "react-feather";
import styled from "styled-components";

const Artist = ({
  name,
  description,
  imageurl,
  twitter,
  favourite,
  spotifyartisturl,
}) => {
  return (
    <ArtistLayout>
      <ArtistImageWrapper>
        <Image src={imageurl} alt={name} layout="fill" objectFit="cover" />
        <div>
          <Heart /> {favourite}
        </div>
      </ArtistImageWrapper>
      <ArtistDetails>
        <ArtistName>{name}</ArtistName>
        <ArtistSocials>
          <SocialLink
            href={`https://twitter.com/${twitter}`}
            title="Twitter Account"
          >
            <Twitter />
          </SocialLink>
          <SocialLink href={spotifyartisturl} title="Spotify Account">
            <Music />
          </SocialLink>
        </ArtistSocials>

        <ArtistDescription dangerouslySetInnerHTML={{ __html: description }} />
      </ArtistDetails>
    </ArtistLayout>
  );
};

const ArtistSocials = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.accent};
  padding: 0.5rem;
`;

const ArtistName = styled.h1`
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

const ArtistDescription = styled.p`
  margin: 0;
  font-weight: 300;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  max-width: 800px;
`;

const ArtistLayout = styled.div`
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

const ArtistDetails = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ArtistImageWrapper = styled.div`
  height: 200px;
  width: 100%;
  text-align: center;
  position: relative;

  @media (min-width: 992px) {
    width: 600px;
    height: 300px;
    order: 1;
    border-radius: 6px;
    overflow: hidden;
    position: sticky;
    top: 1rem;
  }
`;

export default Artist;
