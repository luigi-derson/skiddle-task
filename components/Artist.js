import Image from "next/image";

const Artist = ({
  name,
  description,
  imageurl,
  twitter,
  favourite,
  link,
  spotifymp3url,
  spotifyartisturl,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <Image src={imageurl} alt={name} width={300} height={300} />
    </div>
  );
};

export default Artist;
