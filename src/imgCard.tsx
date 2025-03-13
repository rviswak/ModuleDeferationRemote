import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './main.jpg';
import logo from './logo.svg';
export interface SampleProps {
    title: string;
    description: string;
}
export default function MediaCard({ title, description }: SampleProps) {
  function downloadpdf(event: React.MouseEvent<HTMLButtonElement>): void {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Card sx={{ maxWidth: 345, margin : '2rem' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={logo}
        title="APIs"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={downloadpdf}>Download</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
