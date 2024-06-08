export default function PhotoModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return <div>{imageId}</div>;
}