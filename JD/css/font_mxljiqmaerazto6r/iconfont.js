;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tubiao4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.344 919.68c-44.992 0-81.6-36.48-81.6-81.664 0-44.928 36.608-81.472 81.6-81.472s81.536 36.544 81.536 81.472C898.944 883.2 862.4 919.68 817.344 919.68zM817.344 794.112c-24.192 0-43.968 19.584-43.968 43.904 0 24.384 19.776 44.032 43.968 44.032 24.256 0 43.904-19.712 43.904-44.032C861.248 813.696 841.6 794.112 817.344 794.112z"  ></path>' +
    '' +
    '<path d="M449.28 919.68c-44.992 0-81.664-36.48-81.664-81.664 0-44.928 36.672-81.472 81.664-81.472 44.928 0 81.536 36.544 81.536 81.472C530.816 883.2 494.208 919.68 449.28 919.68zM449.28 794.112c-24.32 0-43.968 19.584-43.968 43.904 0 24.384 19.648 44.032 43.968 44.032 24.256 0 43.968-19.712 43.968-44.032C493.184 813.696 473.472 794.112 449.28 794.112z"  ></path>' +
    '' +
    '<path d="M892.992 732.544 310.784 732.544c-6.336 0-11.968-3.136-15.552-8.128-3.584-5.12-4.288-11.648-2.048-17.408l54.08-143.36L204.032 141.952 82.88 141.952C72.384 141.952 64 133.504 64 123.136S72.384 104.32 82.88 104.32l134.656 0c8.064 0 15.232 5.12 17.792 12.8l149.696 440.832c1.408 4.096 1.408 8.576-0.192 12.672l-46.976 124.352 555.136 0c10.304 0 18.752 8.32 18.752 18.752C911.744 724.032 903.296 732.544 892.992 732.544z"  ></path>' +
    '' +
    '<path d="M836.352 582.656l-469.12 0c-10.368 0-18.752-8.32-18.752-18.688 0-10.496 8.384-18.944 18.752-18.944l455.296 0 92.864-290.048L260.096 254.976c-10.56 0-18.88-8.384-18.88-18.816 0-10.368 8.32-18.816 18.88-18.816l681.024 0c6.08 0 11.776 2.816 15.168 7.68 3.648 4.928 4.544 11.136 2.88 16.896L854.4 569.6C851.84 577.536 844.544 582.656 836.352 582.656z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M230.2633 536.93l78.793333 0 0 27.11L230.263333 564.04 230.263333 536.93 230.2633 536.93zM514.21 512.2033c7.4667 0 14.4933 1.7267 20.77 4.7667 24.2867-29.4333 51.43-55.8533 82.0533-78.6633 7.5 7.12 14.97 14.2133 22.47 21.3367-23.0633 34.9867-49.58 64.7633-78.7267 90.56 0.6267 3.0733 0.94 6.2433 0.94 9.5067 0 26.2333-21.2733 47.5067-47.5067 47.5067-26.2367 0-47.51-21.2733-47.51-47.5067 0-10.04 3.14-19.3633 8.4733-27.0467-35.1133-47.3533-65.11-98.2767-89.5867-152.97 7.94-4.36 15.88-8.7533 23.8167-13.1167 35.1133 47.2267 65.8333 96.3 91.06 147.6667C504.7933 512.9233 509.4367 512.2033 514.21 512.2033L514.21 512.2033zM446.2433 253.3633l-0.1267 81.1133 223.9767-128.7433-223.4767-129.5933-0.1867 83.18c-83.97 12.4267-161.5367 51.62-221.75 111.8-74.5533 74.5867-116.13 174.84-116.13 280.3033 0 105.4933 41.5733 205.7467 116.13 280.3 74.5867 74.5867 174.84 116.1333 280.3 116.1333 105.4933 0 205.75-41.5467 280.3367-116.1333 44.43-44.43 77.8167-98.81 97.08-158.6167l4.5833-14.28-88.8-26.3567-4.4533 13.5233c-14.8133 45.31-40.23 86.51-73.96 120.21-57.14 57.17-133.9233 88.99-214.7867 88.99-80.83 0-157.61-31.82-214.7533-88.99-57.1667-57.17-88.9867-133.92-88.9867-214.7833 0-80.8333 31.82-157.6133 88.9867-214.7533C332.9667 293.9033 387.1867 264.9433 446.2433 253.3633L446.2433 253.3633zM805.3333 505.8633c-2.9167-19.4567-7.7167-38.5633-14.3733-57.0467l-4.8933-13.6167 86.8233-32.4133 5.0533 13.9c9.6633 26.7667 16.3767 54.5367 20.0833 82.7767l2.1033 15.94-92.85 3.3867L805.3333 505.8633 805.3333 505.8633zM803.64 607.06c3.42-18.3567 5.1133-36.9633 5.1133-55.6333 0-1.8233-0.03-3.6733-0.06-5.49l-0.22-14.3733 92.5633-3.3567 0.3133 14.8733c0.06 2.7933 0.06 5.5567 0.06 8.3467 0 26.64-2.6333 53.2467-7.9367 79.3533l-3.1733 15.6567-89.0533-26.42L803.64 607.06 803.64 607.06zM774.8967 411.9467c-8.1567-15.75-17.7267-30.7833-28.49-44.8667l-8.8167-11.5167 72.9533-57.11 9.0067 11.7067c15.9067 20.6767 29.7167 42.8933 41.23 66.27l7.1533 14.5267-87.0733 32.54L774.8967 411.9467 774.8967 411.9467zM729.0867 345.96l-9.32-9.2867c-13.5233-13.5233-28.3-25.7633-44.0867-36.5233l-13.0533-8.88 57.9233-72.83 11.2967 7.8767c19.0767 13.3333 36.9967 28.3667 53.47 44.8067 1.9133 1.9467 3.8267 3.89 5.71 5.87l11.2333 11.7033L729.0867 345.96 729.0867 345.96zM505.17 820.9967l0-78.76 27.113333 0 0 78.76L505.17 820.9967 505.17 820.9967zM704.14 742.3933 648.4433 686.6667l19.1733-19.1733 55.6967 55.7267L704.14 742.3933 704.14 742.3933zM308.8667 735.9l55.73-55.6967 19.1733 19.1733-55.6967 55.6967L308.8667 735.9 308.8667 735.9zM315.3633 340.6267l55.6967 55.73-19.14 19.1733-55.73-55.6967L315.3633 340.6267 315.3633 340.6267zM710.6333 347.1233l-19.2-19.1733-55.6967 55.6967 19.1733 19.2L710.6333 347.1233 710.6333 347.1233zM789.2367 546.1233l-78.79 0 0-27.14 78.79 0L789.2367 546.123333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-msnui-cart" viewBox="0 0 1031 1024">' +
    '' +
    '<path d="M366.498 747.328q17.47 0 33.101 6.437t27.125 17.929 18.389 27.125 6.896 33.101-6.896 33.101-18.389 27.125-27.125 18.389-33.101 6.896q-18.389 0-34.021-6.896t-27.125-18.389-18.389-27.125-6.896-33.101 6.896-33.101 18.389-27.125 27.125-17.929 34.021-6.437zM748.999 749.166q17.47 0 33.561 6.437t27.584 17.929 18.389 27.125 6.896 33.101-6.896 33.101-18.389 27.125-27.584 18.389-33.561 6.896-33.101-6.896-27.123-18.389-18.389-27.125-6.896-33.101 6.896-33.101 18.389-27.125 27.123-17.929 33.101-6.437zM903.47 226.906q25.745 0 39.997 6.896t20.228 17.010 5.517 21.607-3.218 19.768-11.954 34.021-19.768 56.548-21.148 61.144-17.010 47.813q-11.954 36.779-29.883 51.030t-44.595 14.252h-482.723l12.873 82.752h464.333q44.136 0 44.136 37.699 0 18.389-8.735 32.182t-34.48 12.873h-481.803q-18.389 0-30.802-8.276t-20.688-21.607-13.333-28.963-7.816-29.423q-0.92-5.517-5.057-26.665t-10.115-52.869-13.333-70.8-14.713-78.615q-17.47-92.867-39.538-206.881h-68.961q-13.793 0-22.987-6.896t-15.172-16.55-8.276-20.688-2.298-20.228q0-18.389 12.413-30.343t33.561-11.034h92.867q18.389 0 29.423 5.517t17.47 13.793 9.195 17.010 4.598 15.172q1.839 7.356 3.678 20.688t3.678 27.125q2.759 16.55 5.517 34.94h628.918zM869.449 308.739l-575.589-1.839 32.182 166.424 480.884 0.92z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M784.864799 174.83598C784.864799 139.010302 748.233015 93.5758 700.517275 93.5758 655.312943 93.5758 342.386318 93.5758 291.320328 93.5758 234.900076 93.5758 205.29819 144.639744 205.29819 175.176631c0 24.399025 0 658.505654 0 708.488312 0 39.661842 43.159401 79.848472 82.967528 79.848472 31.014617 0 335.066917 0 413.260212 0 78.18818 0 83.342961-82.40796 83.342961-82.40796S785.737399 332.811253 784.864799 174.83598zM495.274326 931.282478c-20.015568 0-36.246122-16.223393-36.246122-36.248168 0-20.015568 16.227485-36.248168 36.246122-36.248168 20.01966 0 36.248168 16.22953 36.248168 36.248168C531.521471 915.059085 515.293986 931.282478 495.274326 931.282478zM723.585407 839.971548 266.964268 839.971548 266.964268 186.291277l456.621139 0L723.585407 839.971548z"  ></path>' +
    '' +
    '<path d="M651.391872 357.957051 620.17982 327.839584 498.235844 454.214074 370.370877 321.701722 339.158825 351.819189 444.889638 461.39435 355.298334 461.39435 355.298334 493.071856 470.808807 493.063672 470.808807 554.571189 355.298334 554.697015 355.298334 585.386326 470.808807 585.386326 470.808807 705.015305 519.737798 705.015305 519.737798 585.386326 635.252364 585.408831 635.214513 554.697015 519.737798 554.697015 519.737798 493.071856 635.214513 493.071856 635.214513 461.39435 551.58205 461.39435Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.011256 890.104477c-5.384637 0-10.768251-1.856277-15.129582-5.567809l-333.270363-283.751552c-0.473791-0.403183-0.931209-0.825808-1.372254-1.26583l-23.506367-23.502273c-48.924269-48.916083-75.866898-113.953332-75.866898-183.133947 0-69.179592 26.943652-134.216841 75.867922-183.130877 48.90892-48.916083 113.946168-75.857688 183.126784-75.857688s134.218888 26.940582 183.137017 75.858712l7.009647 7.006578 7.000438-7.003508c48.91506-48.921199 113.953332-75.862805 183.139064-75.862805 69.183685 0 134.226051 26.940582 183.145204 75.858712 48.90892 48.91506 75.843362 113.951285 75.843362 183.127807s-26.934442 134.214794-75.842339 183.131901l-23.527856 23.51046c-0.438998 0.437975-0.89437 0.859577-1.366114 1.260713L527.139815 884.535645C522.780531 888.2482 517.39487 890.104477 512.011256 890.104477zM194.579627 565.852512l317.430606 270.264377 317.41935-270.2654 22.861684-22.846334c82.760912-82.776262 82.760912-217.470987-0.007163-300.248272-40.101323-40.101323-93.422739-62.187341-150.140509-62.187341-56.716746 0-110.034069 22.084994-150.130276 62.187341l-23.500227 23.508413c-4.375657 4.377704-10.311857 6.837732-16.500812 6.838755-6.189979 0.001023-12.127202-2.456958-16.503882-6.833639l-23.514553-23.511483c-40.104393-40.104393-93.422739-62.190411-150.136416-62.190411-56.712653 0-110.026906 22.084994-150.123113 62.187341-40.10951 40.101323-62.196551 93.4166-62.196551 150.127206 0 56.710606 22.088064 110.026906 62.194504 150.126182L194.579627 565.852512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832.54272 151.26528 283.37152 151.26528c-30.81216 0-55.90016 25.07776-55.90016 55.9104l0 60.6208 50.8416 0 0-60.6208c0-2.73408 2.31424-5.0688 5.05856-5.0688l549.16096 0c2.75456 0 5.08928 2.33472 5.08928 5.0688l0 396.68736c0 2.73408-2.34496 5.00736-5.08928 5.00736l-60.57984 0 0 50.86208 60.57984 0c30.84288 0 55.94112-25.07776 55.94112-55.86944L888.4736 207.17568C888.48384 176.34304 863.37536 151.26528 832.54272 151.26528"  ></path>' +
    '' +
    '<path d="M716.02176 267.80672 278.3232 267.80672l-50.8416 0-60.6208 0c-30.80192 0-55.90016 25.07776-55.90016 55.86944l0 396.6976c0 2.52928 0.39936 4.9664 0.73728 7.38304 3.66592 27.32032 26.86976 48.52736 55.16288 48.52736l113.99168 0c14.06976 0 25.42592-11.37664 25.42592-25.41568 0-14.06976-11.3664-25.42592-25.42592-25.42592L166.85056 725.44256c-2.74432 0-5.04832-2.33472-5.04832-5.05856l0-396.6976c0-2.73408 2.304-5.0176 5.04832-5.0176l60.6208 0 50.8416 0 437.69856 0c2.74432 0 5.09952 2.28352 5.09952 5.0176l0 285.20448 0 50.86208 0 60.63104c0 2.73408-2.3552 5.05856-5.09952 5.05856L610.56 725.44256l-94.30016 0-59.68896 0-2.77504 0c-5.0688 0.3072-9.8816 2.28352-14.04928 5.45792-0.80896 0.64512-1.792 0.95232-2.53952 1.69984l-8.99072 8.98048-34.70336 34.7136-68.608 68.57728c-9.91232 9.91232-9.91232 26.0096 0 35.9424 9.9328 9.99424 26.03008 9.9328 35.93216 0l104.56064-104.51968 145.14176 0 105.46176 0c30.84288 0 55.94112-25.07776 55.94112-55.9104l0-60.63104 0-50.86208L771.9424 323.67616C771.96288 292.88448 746.86464 267.80672 716.02176 267.80672"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zixun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M880.832811 563.079352c0.208754-8.463766 0.233314-17.073864 0.057305-25.704428 2.302439-116.747981-32.43983-215.163431-100.492762-284.627503-32.458249-33.124422-71.935356-58.550511-117.17163-75.869968-7.017834-63.064314-75.508741-112.715131-158.700465-112.715131-83.187631 0-151.673421 49.650817-158.696372 112.715131-45.231157 17.319457-84.704171 42.745547-117.157303 75.869968-68.072375 69.468165-102.831017 167.685094-100.512205 284.08208-0.204661 11.000542-0.137123 21.326724 0.204661 31.41857-17.638729 17.753339-31.456433 44.566008-21.35947 82.190931 7.505951 27.962865 28.190039 48.910966 53.571103 58.081837 12.899798 7.952112 28.0478 12.583596 44.255946 12.692067C237.195725 862.702384 354.671277 958.757067 508.074086 958.757067c153.122423 0 270.626627-96.29516 302.803467-237.867526 0.989537 0.215918 2.02103 0.339738 3.075035 0.339738 20.209274 0 38.798655-7.060813 53.461609-18.811438 19.163455-10.875698 34.154891-29.074176 40.299845-51.977815C918.84659 608.966449 900.914172 580.62189 880.832811 563.079352L880.832811 563.079352 880.832811 563.079352zM370.669646 394.283971c2.438539 4.077875 60.903092 100.475366 171.047678 142.260028 30.390147 11.529591 61.524239 18.123776 91.636047 24.495904 60.396555 12.795421 117.455085 24.880667 156.327418 75.348082 0.405229 0.523933 0.856507 1.011027 1.321088 1.467421-0.061398 2.544963-0.061398 2.550079-0.061398 2.550079 0 18.814508-1.419326 36.995589-4.15974 54.469566-49.973158 79.843466-132.889613 132.167159-235.608066 143.438876-7.65433-10.107195-23.248494-17.071817-41.36306-17.071817-25.686009 0-46.531779 13.906731-46.531779 31.015388 0 17.150612 20.845771 31.023574 46.531779 31.023574 23.027459 0 41.996486-11.20418 45.687552-25.858948 33.127492-3.805676 64.716954-11.719926 94.329389-23.681352 42.299385-17.081027 79.577407-41.965787 110.781082-73.968665 4.997827-5.112438 9.79304-10.411117 14.429641-15.84692-37.19104 113.27488-136.614447 186.092325-266.414699 186.103582l0 0c-0.234337-0.01228-0.870834-0.01228-1.102101-0.01228-166.5482 0-282.868439-119.092375-282.868439-289.881157l-0.312108-16.253172c-0.204661-6.964622 0.87288-26.527167 2.033309-45.287439 90.793866-32.121582 128.493489-124.408451 130.143059-128.555911L370.669646 394.283971 370.669646 394.283971zM430.555571 653.078109c0 29.735232-24.110117 53.847395-53.847395 53.847395-29.735232 0-53.844326-24.112164-53.844326-53.847395s24.109094-53.844326 53.844326-53.844326C406.446477 599.233783 430.555571 623.343901 430.555571 653.078109L430.555571 653.078109zM681.291173 653.078109c0 29.263487-23.720238 52.987818-52.984748 52.987818-29.260417 0-52.979632-23.725354-52.979632-52.987818 0-29.261441 23.720238-52.983725 52.979632-52.983725C657.571958 600.094384 681.291173 623.817692 681.291173 653.078109L681.291173 653.078109zM681.291173 653.078109"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fankui" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M992.956271 1023.992906l-960.927178 0c-17.714653 0-32.030906-14.316252-32.030906-32.030906l0 0c0-17.714653 14.316252-32.030906 32.030906-32.030906l960.927178 0c17.714653 0 32.030906 14.316252 32.030906 32.030906l0 0C1024.987177 1009.676654 1010.670924 1023.992906 992.956271 1023.992906zM1004.674895 117.811234 907.175942 20.312282C893.562807 6.816333 875.848154 0 858.016314 0c-17.812309 0-35.526962 6.816333-49.042442 20.312282L328.217318 501.088367 195.582024 783.15565c-11.406127 24.433331 7.617106 49.647904 31.230133 49.647904 4.902291 0 9.902237-1.093738 15.01937-3.398401L523.89881 696.867514l480.756554-480.756554C1031.783979 188.88469 1031.783979 144.939849 1004.674895 117.811234zM486.457806 643.625899l-198.298651 93.182593L381.361278 538.529371l348.238447-348.238447 105.096527 105.096527L486.457806 643.625899zM959.32382 170.759884l-79.374147 79.374147-105.096527-105.096527 79.374147-79.374147c0.390621-0.410152 1.601545-1.601545 3.808553-1.601545 2.207008 0 3.398401 1.191393 3.808553 1.601545l97.498953 97.498953c0.390621 0.390621 1.601545 1.601545 1.601545 3.808553S959.714441 170.369264 959.32382 170.759884z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-you" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M503.902735 1024.881013c-278.47263 0-504.217382-225.745759-504.217382-504.217382S225.431111 16.445242 503.902735 16.445242s504.217382 225.745759 504.217382 504.217382S782.375365 1024.881013 503.902735 1024.881013zM503.902735 47.958325c-261.076901 0-472.704299 211.627398-472.704299 472.704299s211.627398 472.704299 472.704299 472.704299 472.704299-211.627398 472.704299-472.704299S764.979635 47.958325 503.902735 47.958325zM413.791709 723.17783l142.513684-202.515206L413.791709 318.111171l82.691385 0 142.549931 202.551453L496.484101 723.17783 413.791709 723.17783z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huiyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M972.798 972.797l-38.405 0c-24.705-202.004-217.914-364.794-422.394-364.794S114.31 770.793 89.6 972.797L51.2 972.797c20.217-186.26 152.025-338.939 323.462-390.564-87.937-47.08-150.662-134.632-150.662-243.034 0-155.52 135.725-287.999 287.999-287.999s287.999 132.48 287.999 287.999c0 108.402-62.75 195.955-150.66 243.034C820.753 633.858 952.578 786.538 972.798 972.797zM761.593 339.199c0-127.237-125.01-249.599-249.594-249.599-124.59 0-249.599 122.362-249.599 249.599s125.01 230.399 249.599 230.399C636.583 569.599 761.593 466.436 761.593 339.199z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingbu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 212.423111L0 724.437333l38.698667 38.712889L512 289.848889l473.301333 473.301333L1024 724.437333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)