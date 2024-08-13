import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyCard.scss";

export default function MyCard({
  cardImage,
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/subpage/${encodeURIComponent(title)}`, {
      state: {
        cardImage,
        title,
        content1,
        content2,
        content3,
        content4,
        content5,
      },
    });
  };

  return (
    <Card
      sx={{ minWidth: 300, maxWidth: 300, margin: 2 }}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <CardActionArea>
        <CardMedia component="img" height="350" image={cardImage} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            분야 : {content1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            기간 : {content2} ~ {content3}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            내용 : {content4}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
