import PropTypes from "prop-types";

import brand from "Assets/svg/brand.svg";

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`h-14 w-32 ${className}`}>
      <img
        src={brand}
        alt="Logo značky"
        width="128"
        height="56"
        className="h-full w-full"
      />
    </div>
  );
}

BrandLogo.propTypes = {
  className: PropTypes.string,
};
