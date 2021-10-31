import Event from "../../components/Event";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getEventById } from "../../api";

export default function EventPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id, getEventById);

  return <Event {...data} />;
}
