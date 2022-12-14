import dynamic from "next/dynamic";

const NewComponentDynamic = dynamic(
  () => import("../components/NewComponent"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <NewComponentDynamic />
    </div>
  );
}
