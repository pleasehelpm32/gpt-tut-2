import ToursPage from "@/components/ToursPage";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllTours } from "@/utils/action";
const AllToursPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tours", ""],
    queryFn: () => getAllTours(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
  );
};

export default AllToursPage;
