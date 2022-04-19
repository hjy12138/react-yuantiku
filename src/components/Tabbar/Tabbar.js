import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import home_2 from "@/assets/images/tabbar/home_2.png";
import home_1 from "@/assets/images/tabbar/home_1.png";
import fast from "@/assets/images/tabbar/fast.png";
import my_2 from "@/assets/images/tabbar/my_2.png";
import my_1 from "@/assets/images/tabbar/my_1.png";
import './Tabbar.less'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Tabbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="首页" icon={<img src={value===0? home_1:home_2} />} />
      <BottomNavigationAction label="快速刷题" icon={<img src={fast} />} />
      <BottomNavigationAction label="我的" icon={<img src={value===2? my_1:my_2} />} />
    </BottomNavigation>
  );
}