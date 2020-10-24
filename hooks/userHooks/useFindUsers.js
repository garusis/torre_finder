import useSWR from "swr";
import { useEffect, useRef } from "react";
import useErrorHandler from "../useErrorHandler";

async function fetcher(...args) {
  const res = await fetch(...args);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.status = res.status;
    error.info = await res.json();
    throw error;
  }
  return await res.json();
}

function useFindUsers(userQuery) {
  const { data, error } = useSWR(
    userQuery ? `/api/users?query=${userQuery}` : null,
    fetcher,
    {
      initialData: null,
      shouldRetryOnError: false,
    }
  );

  const actions = useErrorHandler(state => state.actions);

  useEffect(() => {
    if (error) {
      actions.displayError("There was an error loading the list of users");
      console.log(error);
    }
  }, [error, actions]);

  const users = error ? [] : data?.items;
  const isLoading = userQuery && !data && !error;

  return { users, isLoading, meta: data?.__meta__ };
}

export default useFindUsers;
