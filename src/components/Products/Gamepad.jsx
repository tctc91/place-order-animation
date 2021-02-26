import React from "react";

import * as Styled from "./Products.styles";

export default function Gamepad() {
  return (
    <Styled.Gamepad
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47 24"
      className="product"
    >
      <defs>
        <linearGradient
          id="padlinearGradient-1"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#979797"></stop>
          <stop offset="100%" stopColor="#626262"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fillRule="nonzero">
          <path
            fill="#959595"
            d="M23.102.02H11.927C5.35.02 0 5.397 0 12.01 0 17.735 4.15 23.92 10.326 24h.17c1.65 0 4.524-.283 7.47-1.095 3.473-.956 7.779-.957 11.239 0 3.148.87 6.507 1.105 7.644 1.094C41.73 23.915 47 19.307 47 12.01 47 5.398 41.727.02 35.247.02H24.695"
          ></path>
          <path
            fill="url(#padlinearGradient-1)"
            d="M37.075 22.906c-1.045.017-4.358-.233-7.39-1.09-3.82-1.08-8.576-1.079-12.409 0-2.97.836-5.825 1.107-7.395 1.09C5.541 22.848.891 18.452.891 12c0-6.013 4.761-10.906 10.614-10.906h23.951c5.754 0 10.435 4.892 10.435 10.906 0 5.19-3.543 10.813-8.816 10.906z"
          ></path>
          <path
            fill="#2D3133"
            d="M26 3.5c0-.276-.338-.5-.754-.5h-3.492c-.416 0-.754.224-.754.5s.338.5.754.5h3.492c.417 0 .754-.224.754-.5z"
          ></path>
          <path
            fill="#A1A1A1"
            d="M26 4.5c0-.277-.338-.5-.754-.5h-3.492c-.416 0-.754.223-.754.5s.338.5.754.5h3.492c.417 0 .754-.223.754-.5z"
          ></path>
          <path
            fill="#0A3DC2"
            d="M30 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
          ></path>
          <path
            fill="#CA5656"
            d="M40 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
          ></path>
          <path
            fill="#29CE83"
            d="M35 19c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
          ></path>
          <path
            fill="#29CE83"
            d="M35 19c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
          ></path>
          <path
            fill="#E3A635"
            d="M35 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
          ></path>
          <path
            fill="#2D3133"
            stroke="#808485"
            d="M17 13.333h-2.75a.916.916 0 00-.917.917V17H9.667v-2.75a.916.916 0 00-.917-.917H6V9.667h2.75c.506 0 .917-.41.917-.917V6h3.666v2.75c0 .507.411.917.917.917H17v3.666z"
          ></path>
        </g>
      </g>
    </Styled.Gamepad>
  );
}
