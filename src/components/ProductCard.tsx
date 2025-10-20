import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, ExternalLink } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  badge?: string;
  icon: React.ReactNode;
}

export const ProductCard = ({
  title,
  description,
  price,
  rating,
  badge,
  icon,
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all group-hover:scale-110">
            {icon}
          </div>
          {badge && (
            <Badge
              variant="secondary"
              className="bg-accent/10 text-accent border-accent/20"
            >
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
        >
          Learn More
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
