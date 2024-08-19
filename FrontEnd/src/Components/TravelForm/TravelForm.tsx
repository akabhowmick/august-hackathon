import { useState } from "react";
import { useUserInfoContext } from "../../providers/UserInfoProvider";
import { TravelFormInput } from "./TravelFormInput";

export const TravelForm = () => {
  const { travelInfo, setTravelInfo } = useUserInfoContext();

  const [errors, setErrors] = useState({
    budget: "",
    startDate: "",
    endDate: "",
    startLocation: "",
    endLocation: "",
    numberOfPeople: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = {
      budget: "",
      startDate: "",
      endDate: "",
      startLocation: "",
      endLocation: "",
      numberOfPeople: "",
    };

    // Budget validation: must be a positive number
    if (!travelInfo.budget || travelInfo.budget <= 0) {
      newErrors.budget = "Please enter a valid budget greater than 0.";
      isValid = false;
    }

    // Start Date validation: must be a valid date
    if (!travelInfo.startDate) {
      newErrors.startDate = "Please select a start date.";
      isValid = false;
    }
    const today = new Date();
    const selectedDate = new Date(travelInfo.startDate);
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      newErrors.startDate = "Start date cannot be in the past.";
    }

    // End Date validation: must be a valid date and after the start date
    if (!travelInfo.endDate) {
      newErrors.endDate = "Please select an end date.";
      isValid = false;
    } else if (new Date(travelInfo.endDate) < new Date(travelInfo.startDate)) {
      newErrors.endDate = "End date must be after the start date.";
      isValid = false;
    }

    // Location validation: cannot be empty
    if (!travelInfo.startLocation.trim()) {
      newErrors.startLocation = "Please enter a location.";
      isValid = false;
    }
    if (!travelInfo.endLocation.trim()) {
      newErrors.endLocation = "Please enter a location.";
      isValid = false;
    }

    // Number of People validation: must be at least 1
    if (!travelInfo.numberOfPeople || travelInfo.numberOfPeople < 1) {
      newErrors.numberOfPeople = "Please enter a valid number of people.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      alert(
        `Budget: $${travelInfo.budget}\nTravel Dates: ${travelInfo.startDate} to ${travelInfo.endDate}\nStarting Location: ${travelInfo.startLocation}\nEnd Location: ${travelInfo.endLocation}\nNumber of People: ${travelInfo.numberOfPeople}`
      );
    }
  };

  return (
    <div className="m-4 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h3 className="text-black mb-2">
          <strong>Step 1: </strong>Complete the form below to get the initial suggestions from our
          APIs
        </h3>
        <TravelFormInput
          id="budget"
          label="Budget ($):"
          type="number"
          value={travelInfo.budget}
          onChange={(e) => setTravelInfo({ ...travelInfo, budget: Number(e.target.value) })}
          errorMessage={errors.budget}
          required
        />
        <TravelFormInput
          id="startDate"
          label="Travel Start Date:"
          type="date"
          value={travelInfo.startDate}
          onChange={(e) => setTravelInfo({ ...travelInfo, startDate: e.target.value })}
          errorMessage={errors.startDate}
          required
        />

        <TravelFormInput
          id="endDate"
          label="Travel End Date:"
          type="date"
          value={travelInfo.endDate}
          onChange={(e) => setTravelInfo({ ...travelInfo, endDate: e.target.value })}
          errorMessage={errors.endDate}
          required
        />

        <TravelFormInput
          id="start-location"
          label="Starting Location:"
          type="text"
          value={travelInfo.startLocation}
          onChange={(e) => setTravelInfo({ ...travelInfo, startLocation: e.target.value })}
          errorMessage={errors.startLocation}
          required
        />

        <TravelFormInput
          id="end-location"
          label="End Location:"
          type="text"
          value={travelInfo.endLocation}
          onChange={(e) => setTravelInfo({ ...travelInfo, endLocation: e.target.value })}
          errorMessage={errors.endLocation}
          required
        />

        <TravelFormInput
          id="numberOfPeople"
          label="Number of People:"
          type="number"
          value={travelInfo.numberOfPeople}
          onChange={(e) => setTravelInfo({ ...travelInfo, numberOfPeople: Number(e.target.value) })}
          errorMessage={errors.numberOfPeople}
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
