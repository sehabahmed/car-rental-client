import { FieldValues, SubmitHandler } from "react-hook-form";
import CRForm from "../../components/form/CRForm";
import CRDatePicker from "../../components/form/CRDatePicker";
import CRInput from "../../components/form/CRInput";
import CRTimePicker from "../../components/form/CRTimePicker";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const CarBookingsForm = () => {
      const [selectedDate, setSelectedDate] = useState("");

  const nameOptions = "data";
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    // <div className="grid grid-cols-3 w-11/12 mx-auto p-6">
    //   <CRForm onSubmit={onSubmit}>
    //     <CRInput name="location" label="Location" />
    //     <CRDatePicker name="startDate" label="Start Date" />
    //     <CRTimePicker name="startTime" label="Start Time" />
    //     <CRTimePicker name="endTime" label="End Time" />
    //     <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
    //       <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-blue-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
    //       <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
    //       <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-blue-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
    //       <span className="relative text-blue-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
    //         <FaSearch />
    //       </span>
    //     </button>
    //   </CRForm>
    // </div>

    <div className="w-full bg-black/20 rounded-3xl p-8 backdrop-blur-sm">
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
              {/* Full Name Field */}
              <div className="w-full">
                <label className="text-white/70 text-sm mb-1 block">Full Name</label>
                <CRInput 
                  name="fullName" 
                  className="w-full bg-black/40 border-none rounded-md p-3 text-white placeholder:text-gray-500"
                />
              </div>

              {/* Mobile No Field */}
              <div className="w-full">
                <label className="text-white/70 text-sm mb-1 block">Mobile No</label>
                <CRInput 
                  name="mobileNo" 
                  placeholder="Enter Phone no."
                  className="w-full bg-black/40 border-none rounded-md p-3 text-white placeholder:text-gray-500"
                />
              </div>

              {/* Pickup Location Field */}
              <div className="w-full">
                <label className="text-white/70 text-sm mb-1 block">Pickup Location</label>
                <CRInput 
                  name="pickupLocation" 
                  placeholder="Enter Location"
                  className="w-full bg-black/40 border-none rounded-md p-3 text-white placeholder:text-gray-500" 
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

              {/* Optional Additional Fields (can be hidden or shown based on requirements) */}
              <div className="hidden w-full">
                <label className="text-white/70 text-sm mb-1 block">Start Time</label>
                <CRTimePicker 
                  name="startTime" 
                  className="w-full bg-black/40 border-none rounded-md p-3 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="hidden w-full">
                <label className="text-white/70 text-sm mb-1 block">End Time</label>
                <CRTimePicker 
                  name="endTime" 
                  className="w-full bg-black/40 border-none rounded-md p-3 text-white placeholder:text-gray-500"
                />
              </div>

              {/* Send Button */}
              <div className="w-full flex justify-end items-center col-span-1 md:col-span-2 lg:col-span-4">
                <button 
                  type="submit" 
                  className="bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full py-3 px-8 transition-all duration-300"
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
