import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeBrandFields {
  name: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
}

export type TypeBrand = Contentful.Entry<TypeBrandFields>;

export interface TypeCategoryFields {
  name: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
}

export type TypeCategory = Contentful.Entry<TypeCategoryFields>;

export interface TypeHomeProductFields {
  title: Contentful.EntryFields.Symbol;
  subTitle: Contentful.EntryFields.Symbol;
  product: Contentful.Entry<TypeProductFields>;
}

export type TypeHomeProduct = Contentful.Entry<TypeHomeProductFields>;

export interface TypeProductFields {
  name: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  brand: Contentful.Entry<TypeBrandFields>;
  subCategory: Contentful.Entry<TypeSubCategoryFields>;
  price: Contentful.EntryFields.Integer;
  modelNumber: Contentful.EntryFields.Symbol;
  images: Contentful.Asset[];
  description: Contentful.EntryFields.Text;
  overview: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  specifications: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  warranty: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeProduct = Contentful.Entry<TypeProductFields>;

export interface TypeSubCategoryFields {
  name: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  category: Contentful.Entry<TypeCategoryFields>;
}

export type TypeSubCategory = Contentful.Entry<TypeSubCategoryFields>;
