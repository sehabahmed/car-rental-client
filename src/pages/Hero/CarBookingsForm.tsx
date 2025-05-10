import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

const CarBookingsForm = () => {
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
  return (
    <div>
          <DatePicker onChange={onChange} />

    </div>
  );
};

export default CarBookingsForm;
