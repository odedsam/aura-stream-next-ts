interface DividerProps {
  /**
     default clr
   * @default 'bg-red-500'
   */

  color?: string;
  /**
   * thickness in pixels
   * @default 2
   */
  thickness?: number;
  /**
   * additional classes
   */
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ color = "bg-red-500", thickness = 2, className = "" }) => {
  return (
    <hr
      className={`
        w-full border-none
        ${color}
        ${className}
      `}
      style={{ height: `${thickness}px` }}
    />
  );
};

export default Divider;
