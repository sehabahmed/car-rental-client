/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, TimePicker } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label: string;
  className?: string;
  rules?: any
};

const format = "HH:mm";

const CRTimePicker = ({ name, label, className, rules }: TDatePickerProps) => (
  <Controller
    name={name}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <TimePicker {...field} format={format} size="large" className={className} style={{ width: "100%" }} />
        {error && <small style={{ color: "red" }}>{error.message}</small>}
      </Form.Item>
    )}
  />
);

export default CRTimePicker;
