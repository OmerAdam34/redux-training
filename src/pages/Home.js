import React from "react";
import { useGetRestaurantsQuery } from "../services/restaurants";
import LoadMoreRestaurantsButton from "../components/LoadMoreRestaurantsButton";
import { useSelector } from "react-redux";
import LocationCard from "../components/LocationCard";

export default function Home() {
  const currentNumberOfRestaurantsLoaded = useSelector(
    (state) => state.loadMoreRestaurants.value
  );

  const {
    data,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetRestaurantsQuery();

  return (
    <div>
      <ul>
        <h1>Restaurants</h1>

        {isLoading && "...Loading..."}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.slice(0, currentNumberOfRestaurantsLoaded).map((restaurant) => {
            return (
              <li key={restaurant.id}>
                <LocationCard restaurantsDetails={restaurant} />
              </li>
            );
          })}
      </ul>
      <LoadMoreRestaurantsButton />
    </div>
  );
}
