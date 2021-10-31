import { useRouter } from "next/router";
import useSWR from "swr";

import { getArtistById } from "../../api";
import Artist from "../../components/Artist";

export default function ArtistPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id, getArtistById);

  return <Artist {...data} />;
}
