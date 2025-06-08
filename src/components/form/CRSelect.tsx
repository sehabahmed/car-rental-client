/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TCRSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  placeholder?: string;
  className?: string;
  rules?: any;
};

const CRSelect = ({
  label,
  name,
  options,
  disabled,
  mode,
  placeholder,
  className,
  rules,
}: TCRSelectProps) => (
  <Controller
    name={name}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <Select
          mode={mode}
          style={{ width: "100%" }}
          {...field}
          options={options}
          disabled={disabled}
          size="large"
          className={className}
          placeholder={placeholder}
        />
        {error && <small style={{ color: "red" }}>{error.message}</small>}
      </Form.Item>
    )}
  />
);

export default CRSelect;
