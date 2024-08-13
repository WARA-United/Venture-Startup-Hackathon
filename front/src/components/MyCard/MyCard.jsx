import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 import
import "./MyCard.scss";

export default function MyCard({
  cardImage,
  title,
  content1,
  content2,
  content3,
}) {
  const navigate = useNavigate(); // useNavigate 훅을 사용

  const handleButtonClick = () => {
    navigate(`/subpage/${encodeURIComponent(title)}`); // title을 URL 파라미터로 전달
  };

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="350" image={cardImage} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {content1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content2}
          </Typography>
          <Typography variant="body2">{content3}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={handleButtonClick}>
          자세히 보기
        </Button>
      </CardActions>
    </Card>
  );
}
