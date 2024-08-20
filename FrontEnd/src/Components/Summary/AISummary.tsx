import { useUserInfoContext } from "../../providers/UserInfoProvider";
import { extractAndParseJSON } from "../ChatBox/GrogAI";

export const AISummary = () => {
  const { aIGeneratedString, travelInfo } = useUserInfoContext();
  const { flights, hotel, itinerary, budgetBreakdown, totalCost } =
    extractAndParseJSON(aIGeneratedString)!;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Suggested Itinerary</h2>
      <h4 className="text-lg">
        Based on the given options, I've created a suggested itinerary for the trip. I've considered
        the budget and preferences to select the most suitable options.
      </h4>
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Flights</h3>
        <p className="text-gray-600 mt-2">{flights}</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Hotel</h3>
        <p className="text-gray-600 mt-2">{hotel}</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Itinerary</h3>
        <div className="mt-2 space-y-4">
          {itinerary.map((day, index) => (
            <div key={index}>
              <h4 className="text-lg font-medium text-gray-700">{day.day}</h4>
              <ul className="list-disc ml-5 mt-1">
                {day.activities.map((activity, i) => (
                  <li key={i} className="text-gray-600">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Budget Breakdown</h3>
        <ul className="mt-2 space-y-2">
          {budgetBreakdown.map((item, index) => (
            <li key={index} className="flex justify-between text-gray-600">
              <span>{item.item}</span>
              <span>{item.cost}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-lg font-bold text-gray-800">Total: {totalCost}</div>
      </section>

      <h4 className="text-lg">
        This itinerary assumes that you will be arriving in {travelInfo.endLocation} on{" "}
        {travelInfo.startDate} and departing on
        {travelInfo.endDate}. It includes a mix of popular attractions, scenic spots, and local
        cuisine. The budget breakdown includes estimates for food and attractions, and the total
        cost comes out to be ${totalCost}. Please note that this is just a suggested itinerary, and
        you may want to adjust it based on your personal preferences and priorities.
      </h4>
    </div>
  );
};
