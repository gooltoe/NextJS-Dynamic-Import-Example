export default function Home() {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div>
      <div>
        <span>screenW: {width}</span>
        <span>screenH: {height}</span>
      </div>
    </div>
  );
}
