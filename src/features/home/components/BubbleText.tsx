import { useEffect } from "react";


function Text({ children }: { children: string }){
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export function BubbleText({ children }: { children: string }) {
  useEffect(() => {
    const spans = document.querySelectorAll(
      ".hover-text span"
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function (this: typeof span) {
        this.style.fontWeight = "100";
        this.style.color = "rgb(255, 255, 255)";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(255, 255, 250)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(255, 255, 249)";
        }
      });

      span.addEventListener("mouseleave", function (this: typeof span) {
        this.style.fontWeight = "900";
        this.style.color = "rgb(255, 255, 248)";;

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "900";
          leftNeighbor.style.color = "rgb(255, 255, 248)";;
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "900";
          rightNeighbor.style.color = "rgb(255, 255, 248)";;
        }
      });
    });
  }, []);

  return (
    <h1 className="hover-text text-5xl font-extrabold font-sans text-white text-center md:text-start">
      <Text>{children}</Text>
    </h1>
  );
};
