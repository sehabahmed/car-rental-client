import { Form, TimePicker } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label: string;
  className?: string;
};

const format = "HH:mm";

const CRTimePicker = ({ name, label, className }: TDatePickerProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <TimePicker {...field} format={format} size="large" className={className} style={{ width: "100%" }} />
        {error && <small style={{ color: "red" }}>{error.message}</small>}
      </Form.Item>
    )}
  />
);

export default CRTimePicker;
