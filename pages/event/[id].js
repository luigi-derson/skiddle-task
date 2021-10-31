import useSWR from "swr";
import { useRouter } from "next/router";

import Event from "../../components/Event";
import { getEventById } from "../../api";
import Spinner, { SpinnerWrapper } from "../../components/Spinner";

export default function EventPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id, getEventById);

  if (!data && !error) {
    return (
      <SpinnerWrapper align="center">
        <Spinner />
      </SpinnerWrapper>
    );
  }

  return <Event {...data} />;
}
