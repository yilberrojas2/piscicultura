import { StarIcon } from "@heroicons/react/20/solid";

const product = {
  // name: "Basic Tee 6-Pack",
  // price: "$192",
  // href: "#",
  // breadcrumbs: [
  //   { id: 1, name: "Men", href: "#" },
  //   { id: 2, name: "Clothing", href: "#" },
  // ],
  images: [
    {
      src: "src/assets/img/d293d00fcc6b976ab0cbc4d2a7ea03e3.gif",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "src/assets/img/c4892f1778868bbe34fbd9532e1fc861.jpg.webp",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "src/assets/img/istockphoto-1180267481-612x612.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "src/assets/img/1.jpg.webp",
      alt: "Model wearing plain white basic tee.",
    },
  ],
};
const reviews = { href: "#", estrellas: 4, totalCount: 734.117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GridProductos() {
  return (
    <div className="">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.estrellas > rating
                          ? "text-yellow-500"
                          : "text-amber-100",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.estrellas} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-xl font-medium text-white hover:text-indigo-500"
                >
                  {reviews.totalCount} vistas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
