import figma from "@figma/code-connect";
import Button from "./Button";

figma.connect(
  Button,
  "https://www.figma.com/design/9GziRSGlfkwiLWhgRBb37c/mcp-claude?node-id=5594-625",
  {
    props: {
      type: figma.enum("type", {
        primary: "primary",
        secondary: "secondary",
        normal: "normal",
        ghost: "ghost",
      }),
    },
    example: (props) => <Button type={props.type}>Button</Button>,
  }
);
