import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="">
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />

      <h2 className="">Hi! Welcome to your first Next.js site.</h2>
    </div>
  );
}
