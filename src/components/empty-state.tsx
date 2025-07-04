import Image from "next/image";

type EmptyStateProps = {
  title: string;
  description: string;
  image?: string;
};

export function EmptyState({
  title,
  description,
  image = "/empty.svg",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={image} alt="" height={240} width={240} />
      <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
