import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Item } from "../types/item";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  const url = `https://itunes.apple.com/lookup?id=${id}`;

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setItem(data.results[0]);
    };
    fetchItems();
  }, [id]);

  return (
    <h2>
      ID is: {id} Hello and welcome, {item && item.artistName}!
    </h2>
  );
};

export default ItemDetails;
