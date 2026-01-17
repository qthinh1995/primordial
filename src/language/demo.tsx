import parse from "html-react-parser";

const description = `
  Lumora là nền tảng <strong>trải nghiệm</strong> và
  <span class="text-accent">văn hoá</span>
`;

export default function Demo() {
  return (
    <div>
      {parse(description)}
    </div>
  );
}
