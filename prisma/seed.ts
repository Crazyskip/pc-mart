import prisma from "../lib/prismadb";
import { brands, categories, subCategories, products } from "./data.json";

async function main() {
  await prisma.product.deleteMany();
  console.log("Deleted records in product table");

  await prisma.subCategory.deleteMany();
  console.log("Deleted records in subCategory table");

  await prisma.category.deleteMany();
  console.log("Deleted records in category table");

  await prisma.brand.deleteMany();
  console.log("Deleted records in brand table");

  await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
  console.log("reset product auto increment to 1");

  await prisma.$queryRaw`ALTER TABLE SubCategory AUTO_INCREMENT = 1`;
  console.log("reset subCategory auto increment to 1");

  await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
  console.log("reset category auto increment to 1");

  await prisma.$queryRaw`ALTER TABLE Brand AUTO_INCREMENT = 1`;
  console.log("reset brand auto increment to 1");

  const amdBrand = await prisma.brand.create({
    data: brands[0],
  });

  const cpuCategory = await prisma.category.create({
    data: categories[0],
  });

  const amd7000Sub = await prisma.subCategory.create({
    data: { ...subCategories[0], categoryId: cpuCategory.id },
  });

  const amd7950x = await prisma.product.create({
    data: {
      ...products[0],
      brandId: amdBrand.id,
      subCategoryId: amd7000Sub.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
