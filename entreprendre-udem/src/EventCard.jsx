import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';

function EventCard({ title, description, image, date, path }) {
  const cardContent = (
    image ? (<Card sx={{ height:280 , width: 450 }} variant="outlined">
      <CardOverflow>
      <AspectRatio objectFit="cover" minHeight="120px" maxHeight="200px">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
      </AspectRatio>
      </CardOverflow>
      <CardCover
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-md">
          {title}
        </Typography>
        <Typography
          level="body-sm"
        >
          {date}
        </Typography>
      </CardContent>
    </Card>) : (
      <div className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-[450px] min-h-[320px] sm:min-h-[350px] overflow-hidden relative mb-6 flex flex-col">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-[180px] sm:h-[210px] w-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
        </div>
        <div className="bg-slate-800 p-4 sm:p-6 text-white flex-grow flex flex-col">
          <p className="text-xs sm:text-sm text-white/70 mb-2">{date || "Prochain événement"}</p>
          <p className="text-white/80 text-xs sm:text-sm line-clamp-4">{description}</p>
        </div>
      </div>
    ))

  return image && path ? <Link to={path}>{cardContent}</Link> : cardContent;
}


export default EventCard;
