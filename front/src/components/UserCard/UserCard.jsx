import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./UserCard.scss";

export default function UserCard({ userName, userImage, userNickname }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={userImage}
        alt={userName}
      />
      <CardContent>
        <div className="user-card-container">
          <div className="user-card-text">
            <Typography
              color="text.primary"
              sx={{
                fontSize: "1.1rem",
                textAlign: "left",
                //   marginLeft: "1rem",
                fontWeight: "bold",
              }}
              noWrap
            >
              {userName}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: "0.9rem",
                textAlign: "left",
                fontWeight: "bold",
              }}
              noWrap
            >
              {userNickname}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
