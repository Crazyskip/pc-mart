import { Prisma } from "@prisma/client";

export type CategoryWithSubCategories = Prisma.CategoryGetPayload<{
  include: {
    subcategories: true;
  };
}>;

export type SubCategoryWithProducts = Prisma.SubCategoryGetPayload<{
  include: {
    products: true;
  };
}>;

export type CategoryWithSubCategoriesAndProducts = Prisma.CategoryGetPayload<{
  include: {
    subcategories: {
      include: { products: true };
    };
  };
}>;

export type SpecificationValue = {
  spec: string;
  values: string[];
};

export type Specification = {
  title: string;
  specs: SpecificationValue[];
};
