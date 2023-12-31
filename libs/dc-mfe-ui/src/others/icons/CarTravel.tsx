import type { SVGProps } from 'react'
const SvgCarTravel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 64 64' {...props}>
    <g fill='none' fillRule='evenodd'>
      <circle cx={32} cy={32} r={32} fill='#2855AC' />
      <g transform='translate(10 14)'>
        <rect width={8} height={11} x={5} y={22} fill='#FFC900' rx={4} />
        <rect width={8} height={11} x={31} y={22} fill='#FFC900' rx={4} />
        <path
          fill='currentColor'
          fillRule='nonzero'
          d='M43.747 9.721a1.128 1.128 0 0 0-.873-.419h-4.282c-1.057-2.812-2.434-5.567-3.998-6.607-5.414-3.593-19.772-3.593-25.186 0-1.566 1.04-2.937 3.8-3.999 6.607H1.127a1.138 1.138 0 0 0-1.103 1.367l.634 3.101c.108.529.57.906 1.103.906H3.03c-1.225 1.425-1.819 3.22-1.827 5.016-.007 2.219.827 4.224 2.354 5.642.017.015.034.025.05.04 1.935 1.73 4.378 2.595 7.33 2.595 4.426 0 16.716.07 22.127 0 3.607-.046 6.05-.883 7.33-2.51 1.62-1.496 2.393-3.556 2.403-5.612.007-1.858-.614-3.718-1.91-5.173h1.353c.535 0 .997-.378 1.103-.907l.635-3.1a1.153 1.153 0 0 0-.23-.946zM11.264 5.542c4.315-2.865 17.157-2.865 21.47 0 .838.555 1.916 2.797 2.904 5.543H8.362c.986-2.745 2.064-4.986 2.902-5.543z'
        />
        <path fill='#2855AC' fillRule='nonzero' d='M5 20.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM35.5 24a3.5 3.5 0 1 1 .001-7.001A3.5 3.5 0 0 1 35.5 24z' />
      </g>
    </g>
  </svg>
)
export default SvgCarTravel
