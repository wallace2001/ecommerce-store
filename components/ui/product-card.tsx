"use client";

import { Product } from "@/types";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import Currency from "./currency";

interface ProductCardProps {
    item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    item
}) => {
    console.log(item);
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            { }
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={item?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">
                    {item.category?.name}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <Currency value={item.price}/>
            </div>
        </div>
    );
}

export default ProductCard;