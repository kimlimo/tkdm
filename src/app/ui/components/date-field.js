import { FormHelperText } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';

export default function DateField({ control, name, ...others }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={others?.defaultValue || ''}
      render={({ field, fieldState: { error } }) => (
        <>
          <DatePicker
            sx={{ width: 260 }}
            {...field}
            slotProps={{
              field: {
                clearable: true,
                onClear: () => setCleared(true),
              },
              textField: { size: 'small' },
            }}
          />
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </>
      )}
    />
  );
}
