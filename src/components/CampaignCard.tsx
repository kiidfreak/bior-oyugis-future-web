
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CampaignCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  linkText: string;
}

const CampaignCard = ({
  title,
  description,
  imageUrl,
  link,
  linkText,
}: CampaignCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Link to={link}>
          <Button variant="outline">{linkText}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;
