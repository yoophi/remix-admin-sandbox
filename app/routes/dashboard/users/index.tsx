import axios from "axios";
import type { LoaderFunction } from "remix";
import { useLoaderData, Link, useCatch } from "remix";

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
type LoaderData = User[];

export const loader: LoaderFunction = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response.data);
  // const count = await db.joke.count();
  // const randomRowNumber = Math.floor(Math.random() * count);
  // const [randomJoke] = await db.joke.findMany({
  //   take: 1,
  //   skip: randomRowNumber,
  // });
  // if (!randomJoke) {
  //   throw new Response("No random joke found", {
  //     status: 404,
  //   });
  // }
  // const data: LoaderData = { randomJoke };
  return response.data;
};

export default function Users() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data &&
          data.map((user) => {
            return (
              <li>
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
