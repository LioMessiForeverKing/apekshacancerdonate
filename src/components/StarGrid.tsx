export default function StarGrid() {
  const grid = [14, 30] as const;
  const spacing = 40; // Adjust spacing between hearts

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14 -z-10"
      id="star-grid"
      opacity={0.2}
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <path
                key={i + j}
                fill="currentColor"
                opacity=".2"
                className="star-grid-item"
                d={`M${j * spacing},${i * spacing + 10} 
                    C${j * spacing + 8},${i * spacing - 8} ${j * spacing + 24},${i * spacing - 8} ${j * spacing + 32},${i * spacing + 10} 
                    C${j * spacing + 40},${i * spacing - 8} ${j * spacing + 56},${i * spacing - 8} ${j * spacing + 64},${i * spacing + 10} 
                    Q${j * spacing + 56},${i * spacing + 28} ${j * spacing + 32},${i * spacing + 40} 
                    Q${j * spacing + 8},${i * spacing + 28} ${j * spacing},${i * spacing + 10}`}
              />
            );
          });
        })}
      </g>
    </svg>
  );
}