import { FieldValues, SubmitHandler } from "react-hook-form";
import CRForm from "../../components/form/CRForm";
import CRDatePicker from "../../components/form/CRDatePicker";
import { useState } from "react";
import CRTimePicker from "../../components/form/CRTimePicker";
import CRSelect from "../../components/form/CRSelect";
import { carLocationOptions } from "../../constants/car";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const CarBookingsForm = () => {
      const [selectedDate, setSelectedDate] = useState("");
      const [searchParams] = useSearchParams();
      const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    if (data.pickupLocation || data.date || data.startTime){
      toast.error('Please fill in all required fields: Location, Date, and Start Time');
      return;
    }

    const searchQuery = {
      location: data.location,
      date: data.date,
      startTime: data.startTime
    }

    const params = new URLSearchParams
    params.append('location', searchQuery.location);
    params.append('date', searchQuery.date);
    params.append('startTime', searchQuery.startTime);

    navigate(`/cars/${params.toString()}`);
  };

  return (
    <div className="w-full bg-blue-600 rounded-3xl p-8 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8">
        {/* Left side text */}
        <div className="text-white mb-4 md:mb-0 md:w-1/4">
          <h2 className="text-2xl md:text-3xl font-semibold">Need to Rent</h2>
          <h2 className="text-2xl md:text-3xl font-semibold">a Luxury Car?</h2>
        </div>

        {/* Form fields */}
        <div className="w-full md:w-3/4">
          <CRForm onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Pickup Location Field */}
              <div className="w-full">
                <label className="text-white/70 text-sm mb-1 block">Pickup Location</label>
                <CRSelect 
                  name="pickupLocation"
                  label="" 
                  options={carLocationOptions}
                  placeholder="Enter Location"
                  className="w-full bg-black/40 border-none rounded-md p-3 text-white placeholder:text-gray-500" 
                  required
                />
              </div>

              {/* Pickup Date Field */}
              <div className="w-full">
                <label className="text-white/70 text-sm mb-1 block">Pickup Date</label>
                <div className="relative">
                  <CRDatePicker 
                    name="pickupDate" 
                    placeholder="mm/dd/yyyy"
                    className="w-full bg-black/40 border-none rounded-md p-3 text-white placeholder:text-gray-500"
                    required
                    onChange={(date) => setSelectedDate(date)}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-full">
              <label className="text-white/70 text-sm mb-1 block">Start Time</label>
                <CRTimePicker 
                  name="startTime" 
                  label=""
                  className="w-full bg-black/40 border-none rounded-md p-3 text-white placeholder:text-gray-500"
                  required
                />
              </div>
              {/* Send Button */}
              <div className="w-full flex justify-end items-center col-span-1 md:col-span-2 lg:col-span-4">
                <button 
                  type="submit" 
                  className="bg-white text-blue-600 hover:scale-110 font-medium rounded-full py-3 px-8 transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </CRForm>
        </div>
      </div>
    </div>
  );
};

export default CarBookingsForm;
