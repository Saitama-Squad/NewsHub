import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const News = (props) => {
  const hello = "hello"
  const [liked, setLiked] = useState(false)
  const [bookmark, setBookMark] = useState(false);

  return (
    <div className="mt-20">
      <a href={props.new.article}>
        <Card sx={{ minWidth: 200, maxWidth: 1000 }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                {bookmark ? <BookmarkIcon onClick={() => setBookMark(false)} style={{ color: "green" }} /> : <BookmarkIcon onClick={() => setBookMark(true)} />}
              </IconButton>
            }
            title={props.new.title}
            subheader={props.new.date}
          />
          <CardMedia
            component="img"
            height="50"
            style={{ margin: "auto", height: "500px", width: "500px" }}
            src={props.new.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.new.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {liked ?
              <IconButton style={{ color: 'red' }} onClick={() => {
                setLiked(false)
              }} aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              :
              <IconButton style={{ color: 'gray' }} onClick={() => {
                setLiked(true)
              }} aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            }
            <a href={`https://api.WhatsApp.com/send?text=` + props.new.article}>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </a>
          </CardActions>
        </Card>
      </a>
    </div>
  );
}

export default News;