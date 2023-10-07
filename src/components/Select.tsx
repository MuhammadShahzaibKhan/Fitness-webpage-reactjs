import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "boxing",
    label: "Boxing",
  },
  {
    value: "saiful islam",
    label: "Saiful islam",
  },
  {
    value: "arafath miya",
    label: "Arafath Miya",
  },
  {
    value: "shakil miya",
    label: "Shakil Miya",
  },
  {
    value: "tamim sharker",
    label: "Tamim Sharker",
  },
];

export default function SelectField() {
  return (
    <>
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        defaultValue="boxing"
        variant="standard"
        className="w-75"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}
