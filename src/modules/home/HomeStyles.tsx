import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import MyCalendar from './homeCalendar/MyCalendar';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  & > div {
    margin: 0px 15px 15px 0px;
  }
`;

export const MainBox = styled(Box)`
  display: flex;
  flex-direction: row;
  min-width: calc(100% - 66px);
`;
