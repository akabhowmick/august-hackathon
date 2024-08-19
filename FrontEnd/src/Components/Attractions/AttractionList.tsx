import { useAttractionContext } from "../../providers/AttractionProvider";
import { SingleAttraction } from "./SingleAttraction";

export const AttractionList = () => {
  const { attractions } = useAttractionContext();

  return (
    <div>
      <h2>Key Attractions</h2>
      <ul>
        {attractions?.map((attraction) => (
          <li key={attraction._id}>
            <SingleAttraction attraction={attraction} />
          </li>
        ))}
      </ul>
    </div>
  );
};
