import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField as TextInput,
} from '@mui/material';
import { Controller } from 'react-hook-form';

export default function TextField({
  control,
  name,
  label,
  variant,
  type = 'text',
  ...others
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={others?.defaultValue || ''}
      render={({ field, fieldState }) => (
        <>
          <TextInput
            fullWidth
            size="small"
            id={name}
            type={type}
            label={label}
            variant={variant}
            {...field}
            {...others}
            error={!!fieldState.error}
          />
          {fieldState.error && (
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          )}
        </>
      )}
    />
  );
}

export function Check({ name, control, label, ...others }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} checked={field.value} />}
          label={label}
          {...others}
        />
      )}
    />
  );
}
