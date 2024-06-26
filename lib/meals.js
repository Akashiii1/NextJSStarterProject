import { S3 } from '@aws-sdk/client-s3';
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { redirect } from "next/navigation";
const s3 = new S3({
  region: 'ap-southeast-2'
});
const db = sql("meals.db");


export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare(" SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extensions = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extensions}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  s3.putObject({
    Bucket: 'bucketofdophatdat',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });
  meal.image = fileName;
  db.prepare(`
    INSERT INTO meals 
    (title,summary,instructions,creator,creator_email,image,slug) 
    VALUES (
         @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
          )   
    `).run(meal);
    redirect("/meals")
}
