import React, { Component } from 'react';
import anime from "animejs";

export default class FeatureFlagsAnimation extends Component {
    static displayName = 'FeatureFlagsAnimation'

    componentDidMount() {
        var duration = 1000;

        anime({
            targets: '#feature-toggle .circle',
            translateX: 50,
            direction: 'alternate',
            duration: duration,
            loop: true,
            delay: 1000
        });

        anime({
            duration: duration,
            targets: '#feature-toggle .feature-toggle-circle',
            direction: 'alternate',
            loop: true,
            delay: 1000,
            easing: 'linear',
            stroke: '#2BE3D6',
            fill: '#2BE3D6'
        });

        anime({
            targets: '#coupon-button',
            easing: 'linear',
            opacity: [0, 1],
            duration: 1000,
            direction: 'alternate',
            loop: true,
            delay: 1000
        });

        anime({
            duration: duration,
            targets: '#feature-toggle .feature-toggle-rectangle',
            direction: 'alternate',
            loop: true,
            fill: 'red',
            delay: 1000,
            easing: 'linear',
            stroke: '#2BE3D6',
        });
    }

    render() {
        return (
            <div>
                <svg className="feature-toggle" width="100%" height="577px" viewBox="0 0 1094 577">
                    <defs>
                        <filter
                            x="-6.4%"
                            y="-9.4%"
                            width="112.7%"
                            height="118.8%"
                            filterUnits="objectBoundingBox"
                            id="filter-1"
                        >
                            <feOffset dx={0} dy={4} in="SourceAlpha" result="shadowOffsetOuter1"/>
                            <feGaussianBlur
                                stdDeviation={11}
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"
                            />
                            <feColorMatrix
                                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.28 0"
                                type="matrix"
                                in="shadowBlurOuter1"
                                result="shadowMatrixOuter1"
                            />
                            <feMerge>
                                <feMergeNode in="shadowMatrixOuter1"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <rect
                            id="path-2"
                            x={0}
                            y={0}
                            width={786.375}
                            height={532.561678}
                            rx={8}
                        />
                        <filter
                            x="-34.0%"
                            y="-131.6%"
                            width="168.0%"
                            height="363.2%"
                            filterUnits="objectBoundingBox"
                            id="filter-4"
                        >
                            <feOffset dx={0} dy={4} in="SourceAlpha" result="shadowOffsetOuter1"/>
                            <feGaussianBlur
                                stdDeviation={11}
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"
                            />
                            <feColorMatrix
                                values="0 0 0 0 0.168627451   0 0 0 0 0.890196078   0 0 0 0 0.839215686  0 0 0 0.25 0"
                                type="matrix"
                                in="shadowBlurOuter1"
                                result="shadowMatrixOuter1"
                            />
                            <feMerge>
                                <feMergeNode in="shadowMatrixOuter1"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <linearGradient
                            x1="414.873021%"
                            y1="50%"
                            x2="0%"
                            y2="50%"
                            id="linearGradient-5"
                        >
                            <stop stopColor="#56F3ED" offset="0%"/>
                            <stop stopColor="#2BE3D6" offset="100%"/>
                        </linearGradient>
                        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-6">
                            <stop stopColor="#2CA69D" offset="0%"/>
                            <stop stopColor="#2BE3D6" offset="100%"/>
                        </linearGradient>
                        <linearGradient
                            x1="50%"
                            y1="60.1840049%"
                            x2="95.625558%"
                            y2="60.1840049%"
                            id="linearGradient-7"
                        >
                            <stop stopColor="#DF6D8F" offset="0%"/>
                            <stop stopColor="#BB3B56" offset="100%"/>
                        </linearGradient>
                        <ellipse
                            id="path-8"
                            cx={33.6669643}
                            cy={25.5167763}
                            rx={21.7142857}
                            ry={21.4736842}
                        />
                        <filter
                            x="-264.1%"
                            y="-234.5%"
                            width="628.2%"
                            height="634.1%"
                            filterUnits="objectBoundingBox"
                            id="filter-9"
                        >
                            <feMorphology
                                radius={2.7}
                                operator="dilate"
                                in="SourceAlpha"
                                result="shadowSpreadOuter1"
                            />
                            <feOffset
                                dx={0}
                                dy={14}
                                in="shadowSpreadOuter1"
                                result="shadowOffsetOuter1"
                            />
                            <feGaussianBlur
                                stdDeviation={35}
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"
                            />
                            <feComposite
                                in="shadowBlurOuter1"
                                in2="SourceAlpha"
                                operator="out"
                                result="shadowBlurOuter1"
                            />
                            <feColorMatrix
                                values="0 0 0 0 0.976470588   0 0 0 0 0.309803922   0 0 0 0 0.450980392  0 0 0 1 0"
                                type="matrix"
                                in="shadowBlurOuter1"
                            />
                        </filter>
                    </defs>
                    <g
                        id="features-page"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                    >
                        <g id="ff-copy" transform="translate(-13.000000, -45.000000)">
                            <g id="feature-flags" transform="translate(69.000000, 63.000000)">
                                <g id="Group-3">
                                    <g id="browser" transform="translate(230.000000, 0.000000)">
                                        <g id="screen-bg" className="coupon-container" filter="url(#filter-1)">
                                            <mask id="mask-3" fill="white">
                                                <use xlinkHref="#path-2"/>
                                            </mask>
                                            <use
                                                id="Rectangle"
                                                fill="#FFFFFF"
                                                fillRule="nonzero"
                                                xlinkHref="#path-2"
                                            />
                                            <rect
                                                id="Rectangle"
                                                fill="#22354A"
                                                mask="url(#mask-3)"
                                                x={0}
                                                y={39}
                                                width={786}
                                                height={494}
                                            />
                                            <ellipse
                                                id="Oval"
                                                fill="#2BE3D6"
                                                fillRule="nonzero"
                                                mask="url(#mask-3)"
                                                cx={24.2375856}
                                                cy={19.4444426}
                                                rx={9.69503425}
                                                ry={9.7222213}
                                            />
                                            <ellipse
                                                id="Oval"
                                                fill="#2BE3D6"
                                                fillRule="nonzero"
                                                mask="url(#mask-3)"
                                                cx={53.3226884}
                                                cy={19.984566}
                                                rx={9.69503425}
                                                ry={9.7222213}
                                            />
                                            <ellipse
                                                id="Oval"
                                                fill="#2BE3D6"
                                                fillRule="nonzero"
                                                mask="url(#mask-3)"
                                                cx={82.4077911}
                                                cy={20.5246894}
                                                rx={9.69503425}
                                                ry={9.7222213}
                                            />
                                            <path
                                                d="M0,38.9526846 L786.375,38.9526846"
                                                id="Path"
                                                stroke="#C2D1D9"
                                                strokeWidth={2.15484038}
                                                mask="url(#mask-3)"
                                            />
                                        </g>
                                        <g
                                            id="frame"
                                            transform="translate(14.343750, 67.626880)"
                                            stroke="#2BE3D6"
                                            strokeWidth={2}
                                        >
                                            <rect
                                                id="Rectangle"
                                                x={1}
                                                y={1}
                                                width={749.78125}
                                                height={443.49207}
                                                rx={3.375}
                                            />
                                            <path
                                                d="M309.65625,0.373120301 L309.65625,445.86519"
                                                id="Path-7"
                                            />
                                        </g>
                                        <g
                                            id="coupon-button"
                                            className="coupon-button"
                                            transform="translate(343.718750, 334.753055)"
                                        >
                                            <g
                                                id="button-copy"
                                                filter="url(#filter-4)"
                                                transform="translate(5.062500, 13.525376)"
                                            >
                                                <rect
                                                    id="Rectangle-2"
                                                    stroke="#2BE3D6"
                                                    strokeWidth={2}
                                                    fill="#22354A"
                                                    x={1}
                                                    y={1}
                                                    width={144.8125}
                                                    height={35.1842171}
                                                    rx={3.22734375}
                                                />
                                                <text
                                                    id="Add-coupon"
                                                    fontFamily="Raleway-Bold, Raleway"
                                                    fontSize={14.5230469}
                                                    fontWeight="bold"
                                                    letterSpacing={-0.223431624}
                                                    fill="#2BE3D6"
                                                >
                                                    <tspan x={52.3125} y={24.1600094}>
                                                        {'Add coupon'}
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g id="Group-2" fillRule="nonzero">
                                                <g id="discount-coupon">
                                                    <ellipse
                                                        id="discount-coupon-label"
                                                        cx={32.0625}
                                                        cy={32.1227679}
                                                        rx={32.0625}
                                                        ry={32.1227679}
                                                    />
                                                    <g
                                                        id="discount-coupon-discount-coupon_1_"
                                                        transform="translate(13.015470, 18.637566)"
                                                    >
                                                        <g id="Group">
                                                            <path
                                                                d="M0.703813144,3.70909833 C2.41405229,3.70909833 3.79861897,2.34010229 3.79861897,0.648644556 L33.5190518,0.648644556 C33.5190518,2.34010229 34.9036184,3.70909833 36.6138195,3.70909833 L36.6138195,23.2901898 C34.9036184,23.2901898 33.5190518,24.6591541 33.5190518,26.3487226 L3.79861897,26.3487226 C3.79861897,24.6591541 2.41405229,23.2901898 0.703813144,23.2901898 L0.703813144,3.70909833 Z"
                                                                id="Path"
                                                            />
                                                            <path
                                                                d="M34.1602764,26.9911525 L3.15736262,26.9911525 L3.15736262,26.348729 C3.15736262,25.0167791 2.0567935,23.9326261 0.703813144,23.9326261 L0.0625631436,23.9326261 L0.0625631436,3.06661117 L0.703813144,3.06661117 C2.0567935,3.06661117 3.15736262,1.98186028 3.15736262,0.648644556 L3.15736262,0.00618283769 L34.1602764,0.00618283769 L34.1602764,0.648644556 C34.1602764,1.98186028 35.2608772,3.06661117 36.6138195,3.06661117 L37.2550504,3.06661117 L37.2550504,23.9326197 L36.6138195,23.9326197 C35.2608772,23.9326197 34.1602764,25.0167727 34.1602764,26.3487226 L34.1602764,26.9911525 L34.1602764,26.9911525 Z M4.38348342,25.7062927 L32.9341238,25.7062927 C33.2056329,24.1766828 34.4276903,22.9676645 35.9725949,22.7016753 L35.9725949,4.29630888 C34.4276903,4.03093666 33.2053218,2.82130135 32.9341238,1.29107447 L4.38348342,1.29107447 C4.11234895,2.82130135 2.88998042,4.03093666 1.34506949,4.29630888 L1.34506949,22.7016753 C2.88998042,22.9676645 4.11203785,24.1766828 4.38348342,25.7062927 L4.38348342,25.7062927 Z"
                                                                id="Shape"
                                                            />
                                                        </g>
                                                        <g id="Group"
                                                           transform="translate(2.476114, 2.417159)">
                                                            <path
                                                                d="M3.21805916,21.4847122 C2.67761874,20.4137836 1.79028111,19.5354199 0.702543342,18.9989697 L0.702543342,3.16531394 C1.79028111,2.62954433 2.67761874,1.75242739 3.21805916,0.678337443 L29.1461077,0.678337443 C29.6878243,1.75242739 30.5763746,2.62954433 31.6635155,3.16531394 L31.6635155,18.9989697 C30.5763746,19.5354263 29.6878306,20.4137836 29.1461077,21.4847122 L3.21805916,21.4847122 Z"
                                                                id="Path"
                                                            />
                                                            <path
                                                                d="M29.5400066,22.1271421 L2.82354438,22.1271421 L2.64568957,21.774555 C2.16913923,20.8297321 1.37824307,20.0485891 0.419167983,19.5755575 L0.0612933416,19.3986405 L0.0612933416,2.76505153 L0.419821931,2.58876432 C1.37887162,2.11631792 2.16945668,1.33586188 2.64538481,0.389111674 L2.82323963,0.0358757249 L29.5406352,0.0358757249 L29.7184582,0.388488302 C30.1956244,1.33458969 30.9868952,2.11631792 31.9465607,2.58876432 L32.3047465,2.76505153 L32.3047465,19.3986405 L31.9468718,19.5755575 C30.987511,20.0485891 30.195999,20.8303555 29.7181471,21.7751783 L29.5400066,22.1271421 L29.5400066,22.1271421 Z M3.59754583,20.8422823 L28.7669067,20.8422823 C29.3101661,19.9250341 30.093253,19.1514097 31.0222274,18.6143934 L31.0222274,3.55057724 C30.0926308,3.01349728 29.3095439,2.23931313 28.7665956,1.32076736 L3.59785693,1.32076736 C3.055861,2.23993651 2.27342807,3.01412065 1.34376795,3.55057724 L1.34376795,18.6143934 C2.27278047,19.1514097 3.05524515,19.9244171 3.59754583,20.8422823 L3.59754583,20.8422823 Z"
                                                                id="Shape"
                                                                fill="url(#linearGradient-5)"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M26.7088688,13.4989921 C26.7088688,17.8920191 23.1049994,21.4537725 18.6588322,21.4537725 C14.2113952,21.4537725 10.6087384,17.8920191 10.6087384,13.4989921 C10.6087384,9.10596504 14.2113952,5.54358825 18.6588322,5.54358825 C23.1049994,5.54358825 26.7088688,9.10596504 26.7088688,13.4989921 Z"
                                                            id="Path"
                                                        />
                                                        <g id="Group"
                                                           transform="translate(13.840842, 8.714493)">
                                                            <polygon
                                                                id="Path"
                                                                fill="#2BE3D6"
                                                                points="1.14080915 9.32183004 0.240322723 8.40713264 8.49514667 0.246550194 9.39566484 1.1612476"
                                                            />
                                                            <g id="Path" stroke="#2BE3D6">
                                                                <path
                                                                    d="M3.7865876,2.23415441 C3.7865876,3.07859518 3.09272335,3.76438765 2.2379625,3.76438765 C1.3837921,3.76438765 0.690581807,3.07859518 0.690581807,2.23415441 C0.690581807,1.38903301 1.3837921,0.703927521 2.2379625,0.703927521 C3.09272335,0.703927521 3.7865876,1.38903301 3.7865876,2.23415441 Z"/>
                                                            </g>
                                                            <g
                                                                transform="translate(5.206188, 5.152365)"
                                                                id="Path"
                                                                stroke="#2BE3D6"
                                                            >
                                                                <path
                                                                    d="M3.73921764,2.18185472 C3.73921764,3.02635275 3.0478676,3.71270498 2.1924528,3.71270498 C1.3382824,3.71270498 0.644449901,3.02635275 0.644449901,2.18185472 C0.644449901,1.33741395 1.3382824,0.65230846 2.1924528,0.65230846 C3.0478676,0.65230846 3.73921764,1.33741395 3.73921764,2.18185472 Z"/>
                                                            </g>
                                                        </g>
                                                        <g
                                                            id="Group"
                                                            transform="translate(7.428342, 12.849107)"
                                                            fill="#2BE3D6"
                                                        >
                                                            <polygon
                                                                id="Path"
                                                                points="1.29109656 1.29231485 0.00861560644 1.29231485 0.00861560644 0.00745502652 1.29109656 0.00745502652"
                                                            />
                                                            <polygon
                                                                id="Path"
                                                                points="22.4523656 1.29231485 21.1698529 1.29231485 21.1698529 0.00745502652 22.4523656 0.00745502652"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                        <g id="button" transform="translate(348.781250, 290.795583)">
                                            <rect
                                                id="Rectangle-2"
                                                fill="url(#linearGradient-6)"
                                                x={0}
                                                y={0}
                                                width={145.96875}
                                                height={37.1842171}
                                                rx={3.22734375}
                                            />
                                            <text
                                                id="Add-to-cart"
                                                fontFamily="Raleway-Bold, Raleway"
                                                fontSize={14.5230469}
                                                fontWeight="bold"
                                                letterSpacing={-0.223431624}
                                                fill="#FFFFFF"
                                            >
                                                <tspan x={35.4375} y={24.1600094}>
                                                    {'Add to cart'}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g
                                            id="text"
                                            transform="translate(346.156250, 115.811031)"
                                            fill="#FFFFFF"
                                        >
                                            <text
                                                id="Battery-improve-and"
                                                fontFamily="Raleway-Light, Raleway"
                                                fontSize={15.525}
                                                fontWeight={300}
                                            >
                                                <tspan x={2} y={53.4214638}>
                                                    {'Battery improve and upgrade: More battery life '}
                                                </tspan>
                                                <tspan x={2} y={78.4214638}>
                                                    {'and work better than before. 24-hrs playtime '}
                                                </tspan>
                                                <tspan x={2} y={103.421464}>
                                                    {'per charge(2.5hrs). Please also turn off the ANC '}
                                                </tspan>
                                                <tspan x={2} y={128.421464}>
                                                    {'when no in use.'}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Headphones"
                                                fontFamily="Raleway-Bold, Raleway"
                                                fontSize={24.3}
                                                fontWeight="bold"
                                            >
                                                <tspan x={0.963125} y={23.0272556}>
                                                    {'Headphones'}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g
                                            id="Headphones"
                                            transform="translate(89.000000, 199.000000)"
                                            fill="#2BE3D6"
                                            fillRule="nonzero"
                                        >
                                            <path
                                                d="M157.263158,84.9313761 L157.263158,83.3942018 C157.263158,74.5629358 150.073985,67.3761468 141.239789,67.3761468 L142.984662,67.3761468 C142.984662,59.4781651 141.357113,51.8297248 138.426526,44.765211 C141.566797,42.0352294 142.445474,37.3713028 140.286226,33.6381651 C128.336722,13.0011009 106.117684,0.182165138 82.2985564,0.182165138 C59.220812,0.182165138 38.0651729,11.8282569 25.7037895,31.3398899 C23.4446917,34.9133211 24.0712481,39.4899083 26.9419248,42.3546422 C23.3423459,50.0729541 21.3178947,58.5723303 21.3178947,67.3761468 L23.5120902,67.3761468 C14.6753985,67.3761468 7.4887218,74.5629358 7.4887218,83.3942018 L7.4887218,84.6419083 L7.4887218,84.9313761 C3.29254135,85.3705688 0,88.8841101 0,93.1961835 L0,108.934752 C0,113.246826 3.29254135,116.760367 7.4887218,117.19956 L7.4887218,118.736734 C7.4887218,127.425761 14.4507368,134.505248 23.0902256,134.73233 C23.2325113,134.737321 23.3698045,134.754789 23.5120902,134.754789 L23.9164812,134.754789 C32.7531729,134.754789 39.9398496,127.568 39.9398496,118.736734 L39.9398496,83.3942018 C39.9398496,74.5629358 32.7531729,67.3761468 23.9164812,67.3761468 L23.8141353,67.3761468 C23.8141353,58.9441468 25.5964511,50.9613211 28.7791579,43.7545688 C30.1271278,44.5331376 31.6398496,44.9598532 33.1975038,44.9598532 C36.2628872,44.9598532 39.0686617,43.4176881 40.701203,40.8349358 C49.790015,26.4913028 65.341594,17.9295413 82.3010526,17.9295413 C99.807188,17.9295413 116.142586,27.3547156 124.929353,42.5293211 C126.509474,45.2593028 129.452541,46.9536881 132.617774,46.9536881 C133.955759,46.9536881 135.273774,46.6292844 136.476962,46.0453578 C139.058075,52.6407339 140.490917,59.8275229 140.490917,67.3786422 L140.837895,67.3786422 C132.003699,67.3786422 124.814526,74.5654312 124.814526,83.3966972 L124.814526,84.6444037 L124.814526,118.736734 C124.814526,127.425761 131.776541,134.505248 140.41603,134.73233 C140.558316,134.737321 140.695609,134.754789 140.837895,134.754789 L141.242286,134.754789 C150.076481,134.754789 157.265654,127.568 157.265654,118.736734 L157.265654,117.19956 C161.461835,116.760367 164.754376,113.246826 164.754376,108.934752 L164.754376,93.1961835 C164.75188,88.8841101 161.459338,85.3705688 157.263158,84.9313761 Z M2.4962406,108.932257 L2.4962406,93.1936881 C2.4962406,90.2590826 4.67046617,87.8460183 7.4887218,87.4242936 L7.4887218,114.699156 C4.67046617,114.279927 2.4962406,111.866862 2.4962406,108.932257 Z M23.9164812,69.8715596 C31.3752481,69.8715596 37.443609,75.9379083 37.443609,83.3942018 L37.443609,84.6419083 L37.443609,118.734239 C37.443609,126.190532 31.3752481,132.256881 23.9164812,132.256881 L23.5120902,132.256881 C16.0533233,132.256881 9.98496241,126.190532 9.98496241,118.734239 L9.98496241,117.197064 L9.98496241,114.701651 L9.98496241,87.426789 L9.98496241,84.9313761 L9.98496241,83.3942018 C9.98496241,76.0776514 15.8286617,70.1186055 23.0902256,69.8940183 C23.2325113,69.8890275 23.3698045,69.8715596 23.5120902,69.8715596 L23.9164812,69.8715596 Z M135.513414,43.7271193 C132.597805,45.2093945 128.723639,44.1089174 127.086105,41.2791193 C117.852511,25.338422 100.690857,15.4341284 82.2985564,15.4341284 C64.4778947,15.4341284 48.14,24.4300917 38.5893835,39.4998899 C37.4161504,41.3564771 35.399188,42.4644404 33.1950075,42.4644404 C32.006797,42.4644404 30.8485414,42.1250642 29.8325714,41.4912294 C29.817594,41.4812477 29.8026165,41.4787523 29.7876391,41.4712661 C29.1261353,41.0545321 28.5869474,40.5205138 28.1401203,39.9315963 C26.5799699,37.8728807 26.352812,34.9856881 27.8131128,32.6749358 C39.7126917,13.8919633 60.0795188,2.67757798 82.2985564,2.67757798 C105.229023,2.67757798 126.621805,15.0198899 138.126977,34.888367 C139.537353,37.3288807 139.122977,40.3084037 137.343158,42.3097248 C136.90382,42.8013211 136.404571,43.2504954 135.802977,43.5998532 C135.70812,43.6522569 135.605774,43.6797064 135.513414,43.7271193 Z M154.766917,118.734239 C154.766917,126.190532 148.698556,132.256881 141.239789,132.256881 L140.835398,132.256881 C133.376632,132.256881 127.308271,126.190532 127.308271,118.734239 L127.308271,83.3942018 C127.308271,76.0776514 133.15197,70.1186055 140.413534,69.8940183 C140.55582,69.8890275 140.693113,69.8715596 140.835398,69.8715596 L141.239789,69.8715596 C148.698556,69.8715596 154.766917,75.9379083 154.766917,83.3942018 L154.766917,84.6419083 L154.766917,84.9313761 L154.766917,87.426789 L154.766917,114.701651 L154.766917,117.197064 L154.766917,118.734239 Z M162.255639,108.932257 C162.255639,111.866862 160.081414,114.279927 157.263158,114.701651 L157.263158,87.426789 C160.081414,87.8485138 162.255639,90.261578 162.255639,93.1961835 L162.255639,108.932257 Z"
                                                id="Shape"
                                            />
                                        </g>
                                    </g>
                                    <g id="feature-toggle" transform="translate(0.000000, 240.000000)">
                                        <text
                                            id="feature-toggle-text"
                                            fontFamily="Raleway-Regular, Raleway"
                                            fontSize={16}
                                            fontWeight="normal"
                                        >
                                            <tspan x={0.316} y={97} fill="#A1AEB7">
                                                {'show_coupons'}
                                            </tspan>
                                        </text>
                                        <rect
                                            id="Rectangle"
                                            stroke="url(#linearGradient-7)"
                                            className="feature-toggle-rectangle"
                                            strokeWidth={5.4}
                                            fill="#22354A"
                                            x={10.7}
                                            y={2.7}
                                            width={89.6}
                                            height={45.6}
                                            stroke="#F94F73"
                                            rx={22.8}
                                        />
                                        <g id="Oval" className="circle">
                                            <use
                                                fill="black"
                                                fillOpacity={1}
                                                filter="url(#filter-9)"
                                                xlinkHref="#path-8"
                                            />
                                            <use
                                                stroke="#F94F73"
                                                strokeWidth={5.4}
                                                fill="#22354A"
                                                fillRule="evenodd"
                                                xlinkHref="#path-8"
                                                className="feature-toggle-circle"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}
