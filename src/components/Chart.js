import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Sales = (props) => {
  const theme = useTheme();

 const data= {
    datasets: [
        {fill: 'origin'},   // 0: fill to 'origin'
        {fill: '-1'},       // 1: fill to dataset 0
        {fill: 1},          // 2: fill to dataset 1
        {fill: false},      // 3: no fill
        {fill: '-2'}        // 4: fill to dataset 2
    ]
};
const options = {
    plugins: {
        filler: {
            propagate: true
        }
    }
}


  return (
    <Card {...props}>
  
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

export default Sales;
