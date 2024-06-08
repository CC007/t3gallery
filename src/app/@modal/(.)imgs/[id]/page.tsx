import {getImage} from "~/server/queries";

export default async function PhotoModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imageId)
  if (isNaN(idAsNumber)) throw new Error("Invalid image ID")

  const image = await getImage(idAsNumber)
  return <div><img src={image.url} className="w-96" /></div>;
}