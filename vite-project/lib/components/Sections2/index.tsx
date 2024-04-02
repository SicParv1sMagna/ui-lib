import { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.css";
import getClassNameFactory from "../get-classname-factory";

const getClassName = getClassNameFactory("Section", styles);

export type Section2Props = {
  className?: string;
  children: ReactNode;
  padding?: string;
  maxWidth?: string;
  style?: CSSProperties;
};

export const Section2 = ({
  children,
  className,
  padding = "0px",
  maxWidth = "1280px",
  style = {},
}: Section2Props) => {
  return (
    <div
      className={`${getClassName()}${className ? ` ${className}` : ""}`}
      style={{
        ...style,
        paddingTop: padding,
        paddingBottom: padding,
      }}
    >
      <div className={getClassName("inner")} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};