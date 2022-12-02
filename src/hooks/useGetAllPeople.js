import { gql, useQuery } from '@apollo/client'

export function useGetAllPeople () {
  const GET_ALL_PEOPLE = gql`
    query getAllPeople{
      allPeople {
        people {
          name
          birthYear
          eyeColor
          hairColor
          skinColor
          homeworld {
            id
            name
          }
          species {
            id
            name
          }
          vehicleConnection {
            vehicles {
              name
            }
          }
        }
      }
    }`;

  const { loading, error, data } = useQuery(GET_ALL_PEOPLE)
    console.log(loading)
  return { loading, error, data };
}