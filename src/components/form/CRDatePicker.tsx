import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
};

const CRDatePicker = ({ name, label, placeholder, className }: TDatePickerProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <DatePicker {...field} size="large" placeholder={placeholder} className={className} style={{ width: "100%" }} />
        {error && <small style={{ color: "red" }}>{error.message}</small>}
      </Form.Item>
    )}
  />
);

export default CRDatePicker;
