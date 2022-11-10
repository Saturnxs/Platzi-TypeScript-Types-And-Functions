import { User } from "../../01-enum";
import { Product } from "../../09-interface";
import { baseModel } from "../base.model";

interface Order extends baseModel {
  products: Product[];
  user: User;
}
