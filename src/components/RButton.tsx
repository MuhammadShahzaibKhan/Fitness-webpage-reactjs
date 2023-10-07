import { Box } from "@mui/material";

type buttonProps = {
  name: string;
};

export default function RButton(props: buttonProps) {
  const { name } = props;
  return (
    <>
      <Box className="rbtn-main">
        <button className="rbtn headerBtn">{name}</button>
      </Box>
    </>
  );
}
