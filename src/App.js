import React, { useEffect, useState } from "react";
import memberS from "./membersData";

const App = () => {
  const [cart, setCart] = useState([]);

  /*   const fetchCartData = async () => {
    try {
      console.log("inside fetchCartData function");
      const response = await fetch(
        "https://church-e98c4-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      console.log("cart data Fetched success.........");

      return data || [];
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const cartData = await fetchCartData();
      console.log("cartData", cartData);
      setCart(new Map(cartData.map((item) => [item.id, item])));
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("cart", cart);null
  }, [cart]);
 */

  ////  _________________________________sendinf__________

  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch(
        "https://church-e98c4-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(memberS),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      console.log("cart data success");
      console.log(cart);
    };
    console.log("knock knock ");
    // Rest of your code...
    sendCartData().catch((error) => {});
  }, [cart]);

  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
};

export default App;
