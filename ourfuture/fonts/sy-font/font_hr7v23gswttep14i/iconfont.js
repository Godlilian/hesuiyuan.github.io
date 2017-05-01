;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shangsanjiao" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M34.875 762.0625 468.75 169.25 902.5 762.0625Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gear" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M854.920192 415.413248c-7.661568-27.055104-18.4064-52.729856-31.876096-76.711936l74.40384-74.394624L760.36608 127.233024l-74.38848 74.386432c-23.980032-13.451264-49.65376-24.204288-76.701696-31.865856L609.275904 64.632832l-193.88416 0 0 105.119744c-27.045888 7.661568-52.737024 18.414592-76.721152 31.865856l-74.384384-74.395648L127.220736 264.298496l74.368 74.394624c-13.451264 23.98208-24.195072 49.655808-31.857664 76.711936L64.611328 415.405056l0 193.874944L169.731072 609.28c7.661568 27.056128 18.4064 52.729856 31.857664 76.711936l-74.386432 74.395648 137.066496 137.073664 74.401792-74.387456c23.983104 13.453312 49.675264 24.205312 76.721152 31.86688l0 105.119744 193.88416 0L609.275904 854.941696c27.047936-7.670784 52.702208-18.413568 76.686336-31.86688l74.40384 74.394624L897.44896 760.394752l-74.40384-74.40384c13.469696-23.98208 24.196096-49.647616 31.876096-76.700672l105.119744 0 0-27.367424L960.04096 415.413248 854.920192 415.413248zM908.84096 558.09024 854.920192 558.09024l-38.687744 0-10.565632 37.218304c-6.5024 22.903808-15.675392 44.9792-27.261952 65.609728l-19.00544 33.836032 27.441152 27.441152 38.199296 38.199296-64.673792 64.669696-38.201344-38.196224-27.424768-27.421696-33.824768 18.972672c-20.71552 11.620352-42.788864 20.793344-65.60768 27.265024l-37.229568 10.559488 0 38.697984 0 53.919744-91.48416 0 0-53.919744 0-38.710272-37.243904-10.551296c-22.832128-6.467584-44.91264-15.639552-65.629184-27.260928l-33.823744-18.971648-27.424768 27.418624-38.197248 38.19008-64.666624-64.669696 38.188032-38.193152 27.420672-27.424768-18.971648-33.823744c-11.61728-20.711424-20.785152-42.78784-27.249664-65.615872l-10.548224-37.249024L169.731072 558.08l-53.919744 0 0-91.474944 53.919744 0 38.713344 0 10.549248-37.249024c6.464512-22.827008 15.633408-44.904448 27.250688-65.615872l18.9696-33.819648-27.414528-27.424768-38.178816-38.191104 64.664576-64.669696 38.17984 38.185984 27.423744 27.42784 33.828864-18.973696c20.72064-11.6224 42.802176-20.793344 65.630208-27.260928l37.244928-10.551296 0-38.710272L466.592768 115.832832l91.48416 0 0 53.919744 0 38.711296 37.245952 10.550272c22.805504 6.460416 44.878848 15.63136 65.606656 27.25888l33.826816 18.975744 27.425792-27.424768 38.183936-38.183936 64.67072 64.666624-38.1952 38.19008-27.444224 27.441152 19.006464 33.83808c11.615232 20.67968 20.785152 42.74688 27.25376 65.589248l10.548224 37.249024 38.714368 0 53.919744 0L908.839936 558.09024z"  ></path>' +
    '' +
    '<path d="M512.325632 322.958336c-26.128384-0.001024-51.058688 5.2992-73.720832 14.885888-33.9968 14.381056-62.8992 38.385664-83.318784 68.608-20.419584 30.217216-32.352256 66.697216-32.349184 105.894912-0.001024 26.128384 5.2992 51.057664 14.886912 73.719808 14.381056 33.9968 38.38464 62.8992 68.608 83.318784 30.217216 20.41856 66.697216 32.352256 105.893888 32.349184 52.273152 0.004096 99.668992-21.210112 133.916672-55.471104 34.260992-34.24768 55.4752-81.642496 55.471104-133.916672 0.004096-52.274176-21.210112-99.668992-55.471104-133.917696C611.994624 344.168448 564.599808 322.95424 512.325632 322.958336zM686.353408 512.347136c-0.001024 24.04864-4.870144 46.920704-13.673472 67.736576-13.20448 31.220736-35.280896 57.807872-63.059968 76.573696-27.784192 18.765824-61.225984 29.714432-97.29536 29.717504-24.049664-0.001024-46.920704-4.870144-67.736576-13.673472-31.220736-13.20448-57.808896-35.280896-76.57472-63.059968-18.765824-27.784192-29.714432-61.225984-29.717504-97.29536 0.001024-24.049664 4.86912-46.920704 13.673472-67.7376 13.203456-31.220736 35.280896-57.808896 63.059968-76.57472 27.784192-18.765824 61.227008-29.713408 97.29536-29.71648 24.04864 0.001024 46.920704 4.86912 67.736576 13.673472 31.220736 13.203456 57.807872 35.280896 76.573696 63.059968C675.402752 442.835968 686.350336 476.27776 686.353408 512.347136z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M880.09984 369.06496c-35.55968-9.33376-119.17952-9.22368-241.472-12.44544 5.77792-26.69696 7.11296-50.75584 7.11296-93.48352 0-102.0672-74.3424-191.968-140.14336-191.968-46.4512 0-84.76032 37.97632-85.34528 84.67712-0.63872 57.28384-18.33472 156.24064-113.79072 206.41408-7.00032 3.69408-27.03104 13.55648-29.94688 14.86336l1.49888 1.27744c-14.94656-12.8896-35.6416-22.752-56.89472-22.752l-85.34272 0c-47.06176 0-85.344 38.28224-85.344 85.34272l0 455.16416c0 47.06048 38.28224 85.34272 85.344 85.34272l85.34272 0c33.86496 0 62.17216-20.44544 75.8976-49.11488 0.3328 0.11008 0.94464 0.27776 1.33248 0.3328 1.88928 0.50048 4.08448 1.05728 6.80704 1.77792 0.50048 0.11264 0.77824 0.17024 1.3056 0.33536 16.3904 4.05504 47.9232 11.61216 115.3472 27.11296 14.47424 3.28064 90.8032 19.55712 169.92384 19.55712l155.52 0c47.392 0 81.56288-18.22208 101.89952-54.83776 0.27776-0.55552 6.83264-13.3376 12.16768-30.6176 4-12.99712 5.50272-31.38944 0.66688-50.05952 30.55744-21.00224 40.39296-52.7296 46.78528-73.38496 10.72256-33.89312 7.49952-59.33696 0.05504-77.56288 17.16736-16.22528 31.83488-40.94976 38.00192-78.67776 3.83232-23.392-0.27776-47.4496-11.05536-67.49312 16.11264-18.08768 23.44448-40.8384 24.27776-61.89568l0.33536-5.9456c0.22272-3.7504 0.3904-6.05568 0.3904-14.25024C960.77696 430.82368 935.8848 385.01248 880.09984 369.06496zM249.56672 896.15488c0 15.7248-12.7232 28.448-28.448 28.448l-85.34272 0c-15.7248 0-28.448-12.72192-28.448-28.448L107.328 440.99072c0-15.72352 12.7232-28.448 28.448-28.448l85.34272 0c15.72352 0 28.448 12.7232 28.448 28.448L249.56672 896.15488zM903.21536 484.66304c-0.55808 14.05696-6.4448 41.66912-56.22784 41.66912-42.6752 0-56.89984 0-56.89984 0-7.88736 0-14.22208 6.36288-14.22208 14.22464s6.33472 14.22464 14.22208 14.22464c0 0 12.448 0 55.11808 0 42.6752 0 48.28544 35.4048 45.50784 52.46208-3.49952 21.22496-13.44768 61.34272-61.50528 61.34272-48.00768 0-67.56736 0-67.56736 0-7.88736 0-14.22208 6.33472-14.22208 14.22208 0 7.83744 6.33472 14.22464 14.22208 14.22464 0 0 33.78304 0 56.00768 0 48.00768 0 43.78496 36.6144 36.89472 58.45248-9.05728 28.7104-14.61504 55.32544-75.12192 55.32544-20.44544 0-46.39232 0-46.39232 0-7.88992 0-14.22208 6.33472-14.22208 14.22464 0 7.83232 6.33216 14.22208 14.22208 14.22208 0 0 19.7248 0 44.6144 0 31.11552 0 32.56064 29.44768 29.3376 40.00512-3.55712 11.55712-7.77728 20.11264-7.94496 20.50304-8.61056 15.50208-22.4448 24.83456-51.7824 24.83456l-155.52 0c-78.11968 0-155.61728-17.72288-157.61536-18.16704-118.18112-27.22688-124.4032-29.3376-131.82208-31.44704 0 0-24.06016-4.0576-24.06016-25.05984l-0.22144-392.90624c0-13.33504 8.50304-25.39136 22.5856-29.64224 1.74976-0.69504 4.13952-1.41696 5.8624-2.13888 129.95968-53.81248 169.52064-171.8272 170.68928-268.72704 0.1664-13.6128 10.66752-28.448 28.44672-28.448 30.0736 0 83.24864 60.36864 83.24864 135.072 0 67.45216-2.72256 79.12064-26.33728 149.40672 284.48 0 282.47808 4.0832 307.59296 10.66752 31.11552 8.8896 33.78304 34.67136 33.78304 43.56224C903.88224 476.52224 903.60192 475.10656 903.21536 484.66304z"  ></path>' +
    '' +
    '<path d="M178.44608 810.81216c-23.55712 0-42.67008 19.11296-42.67008 42.67264 0 23.55712 19.11296 42.67008 42.67008 42.67008 23.56096 0 42.67264-19.11296 42.67264-42.67008C221.11872 829.92512 202.00576 810.81216 178.44608 810.81216zM178.44608 867.70688c-7.8336 0-14.22208-6.38976-14.22208-14.22208 0-7.83488 6.38976-14.22464 14.22208-14.22464 7.83616 0 14.22464 6.38976 14.22464 14.22464C192.67072 861.31712 186.28224 867.70688 178.44608 867.70688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ttpodicon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M551.578414 136.628774 551.578414 61.748343 476.720496 61.748343 476.720496 136.628774 102.352109 136.628774 102.352109 211.489762 925.942707 211.489762 925.942707 136.628774Z"  ></path>' +
    '' +
    '<path d="M776.202311 885.347127 252.092505 885.347127 252.092505 286.365076 177.23561 286.365076 177.23561 885.347127 177.23561 960.208115 252.092505 960.208115 776.202311 960.208115 851.085812 960.208115 851.085812 885.347127 851.085812 286.365076 776.202311 286.365076Z"  ></path>' +
    '' +
    '<path d="M626.461915 398.681118l74.883501 0 0 411.789671-74.883501 0 0-411.789671Z"  ></path>' +
    '' +
    '<path d="M476.720496 398.681118l74.856895 0 0 411.789671-74.856895 0 0-411.789671Z"  ></path>' +
    '' +
    '<path d="M326.976006 398.681118l74.856895 0 0 411.789671-74.856895 0 0-411.789671Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.141 913.55l-298.956-298.954c42.529-57.948 67.669-129.456 67.669-206.847 0-193.303-156.701-350.003-350.002-350.003-193.296 0-349.997 156.701-349.997 350.003 0 193.296 156.701 349.997 349.997 349.997 90.729 0 173.399-34.527 235.575-91.156l296.339 296.333c7.546 7.546 19.771 7.546 27.311 0l22.065-22.063c7.545-7.54 7.545-19.771 0-27.311v0 0zM395.859 684.508c-152.855 0-276.769-123.909-276.769-276.757 0-152.855 123.914-276.769 276.769-276.769 152.85 0 276.757 123.914 276.757 276.769 0 152.848-123.907 276.757-276.757 276.757v0 0zM421.489 167.866v-0.256c-133.669 0-242.426 108.756-242.426 242.427v0 0c0 18.752 15.196 33.942 33.942 33.942s33.942-15.19 33.942-33.942v0h0.24c0-96.109 78.196-174.294 174.3-174.294v-0.005c18.58-0.195 33.583-15.313 33.583-33.938 0.003-18.63-15.004-33.737-33.583-33.932v0 0zM421.489 167.866z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gerenzhongxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M660.312309 532.671809c64.350177-47.370891 106.355548-123.384122 106.355548-209.238488 0-143.348825-116.633033-259.978103-259.988755-259.978103S246.690346 180.084495 246.690346 323.434344c0 86.900186 43.014392 163.770947 108.706178 210.989365-153.870624 60.617589-263.214348 210.381521-263.214348 385.513214 0 21.524223 17.454226 38.977733 38.97933 38.977733 21.526128 0 38.978307-17.453511 38.978307-38.977733 0-185.562253 150.969432-336.543919 336.539288-336.543919 1.60768 0 3.149866-0.209778 4.748335-0.246617 0.809468 0.056282 1.570839 0.246617 2.389518 0.246617 185.569856 0 336.537242 150.981666 336.537242 336.543919 0 21.524223 17.454226 38.977733 38.980354 38.977733 21.525105 0 38.97933-17.453511 38.97933-38.977733C928.312857 743.015468 816.674786 592.033801 660.312309 532.671809zM324.647983 323.434344c0-100.375082 81.660111-182.021613 182.030095-182.021613s182.030095 81.647555 182.030095 182.021613c0 100.356662-81.660111 182.003194-182.030095 182.003194S324.647983 423.789982 324.647983 323.434344z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wujiaoxingman" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.29732 404.41368c-1.960655-6.033413-7.579629-10.116405-13.928221-10.116405L623.966583 394.297274 525.261537 90.523713c-1.958608-6.033413-7.585769-10.116405-13.928221-10.116405-6.341429 0-11.968589 4.082992-13.927197 10.116405l-98.697883 303.773562L79.304695 394.297274c-6.341429 0-11.968589 4.082992-13.928221 10.116405-1.958608 6.033413 0.186242 12.641925 5.319146 16.372899l258.399141 187.736778-98.697883 303.766398c-1.958608 6.033413 0.186242 12.639878 5.319146 16.371876 2.566452 1.866511 5.591345 2.796696 8.608052 2.796696s6.042623-0.930185 8.610098-2.796696l258.398118-187.742918 258.406305 187.742918c5.148253 3.733021 12.069897 3.733021 17.216103 0 5.134951-3.731998 7.278777-10.338463 5.320169-16.371876l-98.705046-303.766398L951.977151 420.786579C957.110055 417.054581 959.255928 410.447093 957.29732 404.41368z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wujiaoxingkong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M773.317099 934.972361c-4.456498 0-8.909927-1.37737-12.69309-4.124947L510.846222 749.377362l-249.768577 181.470051c-7.575536 5.494131-17.809621 5.494131-25.385157 0-7.562233-5.496178-10.732435-15.243169-7.843642-24.1357l95.407953-293.625434L73.48106 431.616228c-7.563256-5.496178-10.732435-15.244192-7.844665-24.134677 2.895957-8.897647 11.18269-14.921851 20.536732-14.921851l308.736597 0 95.401814-293.625434c2.895957-8.897647 11.181667-14.920828 20.534685-14.920828 9.356089 0 17.641799 6.022157 20.537755 14.920828l95.407953 293.625434L935.530574 392.559701c9.346879 0 17.639752 6.024204 20.535709 14.921851 2.880607 8.890484-0.280386 18.638499-7.844665 24.134677L698.438715 613.085256l95.415117 293.625434c2.880607 8.891508-0.282433 18.639522-7.843642 24.1357C782.230096 933.594991 777.772574 934.972361 773.317099 934.972361zM152.624585 435.743222l208.704322 151.633512c7.563256 5.497201 10.732435 15.245216 7.843642 24.136723l-79.720669 245.340731 208.704322-151.627373c7.574512-5.496178 17.806551-5.496178 25.385157 0l208.704322 151.627373-79.727833-245.340731c-2.882654-8.890484 0.279363-18.639522 7.841595-24.136723l208.725812-151.633512L611.10567 435.743222c-9.355065 0-17.640776-6.024204-20.536732-14.920828l-79.722716-245.349941-79.712483 245.349941c-2.89698 8.896624-11.183713 14.920828-20.535709 14.920828L152.624585 435.743222z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chevron-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M249.344 534.43l479.122 479.157c13.943 13.907 36.48 13.907 50.422 0 13.943-13.943 13.943-36.515 0-50.458l-455.73-455.765 448.205-448.241c13.551-13.516 13.551-35.446 0-48.961-13.515-13.586-35.446-13.586-48.995 0l-465.5 465.464c-1.819 1.819-2.71 4.030-4.030 6.133-1.105 0.82-2.461 1.248-3.495 2.282-13.907 13.907-13.907 36.48 0 50.387z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chevron-copy-copy-copy-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M774.656 489.57l-479.122-479.157c-13.943-13.907-36.48-13.907-50.422 0-13.943 13.943-13.943 36.515 0 50.458l455.73 455.765-448.205 448.241c-13.551 13.516-13.551 35.446 0 48.961 13.515 13.586 35.446 13.586 48.995 0l465.5-465.464c1.819-1.819 2.71-4.030 4.030-6.133 1.105-0.82 2.461-1.248 3.495-2.282 13.907-13.907 13.907-36.48 0-50.387z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M528.475741 99.654674c-230.720755 0-417.729963 161.638377-417.729963 361.024473 0 97.81477 45.175899 186.374758 118.262474 251.344468l-32.43676 176.424128 223.528959-79.472006c34.641985 8.036024 70.811766 12.726859 108.37529 12.726859 230.734058 0 417.742243-161.606655 417.742243-361.021403C946.216961 261.293051 759.210823 99.654674 528.475741 99.654674zM528.475741 785.604448c-12.836353 0-25.484418-0.557702-37.974893-1.683339-22.464641-1.945305-44.162826-5.836939-65.272609-11.022031l-58.373479 20.751626 0 0-126.114303 44.889373 26.596751-144.420227c-9.426697-7.846712-18.180058-16.166191-26.644847-24.758893-54.954613-56.471153-88.194668-129.137149-88.194668-208.682833 0-179.456185 168.326706-324.905858 375.977024-324.905858 207.66362 0 375.990327 145.449673 375.990327 324.905858C904.466068 640.133286 736.140385 785.604448 528.475741 785.604448z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sj-down-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 855.177l450-570.42h-900.001l450 570.42z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-x" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M614.4 512 1024 102.4 921.6 0 512 409.6 102.4 0 0 102.4 409.6 512 0 921.6 102.4 1024 512 614.4 921.6 1024 1024 921.6 614.4 512Z"  ></path>' +
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