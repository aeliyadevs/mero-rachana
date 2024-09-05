import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import {
  LightModeOutlined,
  DarkModeOutlined,
  SettingsOutlined,
  NotificationsOutlined,
  PersonOutlined,
} from "@mui/icons-material";
const Topbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      boxShadow="0 5px 5px #eee"
      p={2}
    >
      {/* Search Bar */}
      <Box display="flex">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
      </Box>
      {/* Icons */}
      <Box display="flex">
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
        <IconButton></IconButton>
      </Box>
    </Box>
  );
};
export default Topbar;
