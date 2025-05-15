import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label: string;
};

const CRDatePicker = ({ name, label }: TDatePickerProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <DatePicker {...field} size="large" style={{ width: "100%" }} />
        {error && <small style={{ color: "red" }}>{error.message}</small>}
      </Form.Item>
    )}
  />
);

export default CRDatePicker;
