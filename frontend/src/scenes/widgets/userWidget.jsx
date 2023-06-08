import React from "react";
import {
  ManageAccountsOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const toggleTextGrey = palette.neutral.toggleTextGrey;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(
      `https://socialmediaapp-five.vercel.app/users/${userId}`,
      {
        method: "GET",
        headers: { Authorisation: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  // When we enter the page, getUser will be called when this component is render for the first time.
  // to prevent page error. If there is no user, don't return anything yet. Or another way is to create loading state.
  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h6"
              color={toggleTextGrey}
              fontWeight="550"
              sx={{
                "&: hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={toggleTextGrey}>
              {friends.length} friends{" "}
            </Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="medium" sx={{ color: main }} />
          <Typography color={toggleTextGrey}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="medium" sx={{ color: main }} />
          <Typography color={toggleTextGrey}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />
    </WidgetWrapper>
  );
};

export default UserWidget;
