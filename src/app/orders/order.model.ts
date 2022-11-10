import { User } from "../../01-enum";
import { Product } from "../../09-interface";

interface Order {
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}
