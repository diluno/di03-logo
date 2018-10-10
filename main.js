var data = {
    width: 800,
    height: 100,
    spacing: 10,
    margin: 5,
    strokeWidth: 1,
    textColor: '#000000',
    bgColor: '#ffffff',
    distribution: 'weighted',
    center: .5,
    update: null
};

data.update = () => {

    var el = document.querySelector('#logo');
    el.innerHTML = '';
    el.style.width = data.width + 'px';
    el.style.height = data.height + 'px';
    el.style.backgroundColor = data.bgColor;
    draw = SVG('logo').size(data.width, data.height);
    var logo = draw.svg('<?xml version="1.0" encoding="UTF-8"?> <svg width="'+data.width+'px" height="'+data.height+'px" viewBox="0 0 '+data.width+' '+data.height+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M46.5064753,77.7454545 L36.2516626,77.7454545 L36.2516626,71.2935065 L36.0717536,71.2935065 C34.5725045,73.8026099 32.4885794,75.7142791 29.819916,77.0285714 C27.1512526,78.3428637 24.2877297,79 21.2292615,79 C17.9309134,79 14.9774369,78.3876685 12.3687434,77.162987 C9.76004996,75.9383056 7.54119454,74.2954649 5.71211061,72.2344156 C3.88302667,70.1733663 2.47375363,67.75391 1.48424921,64.975974 C0.49474479,62.1980381 -1.95408233e-14,59.2259899 -2.13162821e-14,56.0597403 C-1.95408233e-14,52.8934907 0.509737056,49.9363774 1.52922646,47.1883117 C2.54871587,44.440246 3.98797344,42.0506595 5.84704235,40.0194805 C7.70611127,37.9883015 9.92496669,36.3902656 12.5036752,35.2253247 C15.0823837,34.0603838 17.9009298,33.4779221 20.959398,33.4779221 C22.9384068,33.4779221 24.7074942,33.7019458 26.2667133,34.15 C27.8259324,34.5980542 29.1902287,35.1506461 30.359643,35.8077922 C31.5290573,36.4649384 32.5335391,37.1818143 33.3731187,37.9584416 C34.2126982,38.7350688 34.9023424,39.4818146 35.4420721,40.1987013 L35.7119356,40.1987013 L35.7119356,10 L46.5064753,10 L46.5064753,77.7454545 Z M10.9744487,56.0597403 C10.9744487,57.7324759 11.2293173,59.4051864 11.739062,61.0779221 C12.2488067,62.7506577 13.0134122,64.2441493 14.0329016,65.5584416 C15.0523911,66.8727338 16.341726,67.9480478 17.900945,68.7844156 C19.4601641,69.6207834 21.2892206,70.038961 23.3881694,70.038961 C25.3671783,70.038961 27.1362657,69.6357183 28.6954848,68.8292208 C30.2547039,68.0227232 31.5890156,66.9623442 32.6984599,65.6480519 C33.8079043,64.3337597 34.6474712,62.855203 35.2171859,61.2123377 C35.7869005,59.5694723 36.0717536,57.9116967 36.0717536,56.238961 C36.0717536,54.5662254 35.7869005,52.8935149 35.2171859,51.2207792 C34.6474712,49.5480436 33.8079043,48.054552 32.6984599,46.7402597 C31.5890156,45.4259675 30.2547039,44.3506535 28.6954848,43.5142857 C27.1362657,42.6779179 25.3671783,42.2597403 23.3881694,42.2597403 C21.2892206,42.2597403 19.4601641,42.662983 17.900945,43.4694805 C16.341726,44.2759781 15.0523911,45.3363571 14.0329016,46.6506494 C13.0134122,47.9649416 12.2488067,49.4434983 11.739062,51.0863636 C11.2293173,52.729229 10.9744487,54.3870046 10.9744487,56.0597403 Z" id="d" stroke="#000000"></path> <path d="M1.52922646,34.7324675 L12.3237662,34.7324675 L12.3237662,77.7454545 L1.52922646,77.7454545 L1.52922646,34.7324675 Z M1.77635684e-14,20.125974 C1.77635684e-14,18.3934978 0.644667454,16.8850714 1.9340217,15.6006494 C3.22337595,14.3162273 4.85753298,13.674026 6.83654183,13.674026 C8.81555067,13.674026 10.4796922,14.2863575 11.8290165,15.511039 C13.1783407,16.7357204 13.8529926,18.2740167 13.8529926,20.125974 C13.8529926,21.9779313 13.1783407,23.5162276 11.8290165,24.7409091 C10.4796922,25.9655905 8.81555067,26.5779221 6.83654183,26.5779221 C4.85753298,26.5779221 3.22337595,25.9357207 1.9340217,24.6512987 C0.644667454,23.3668767 1.77635684e-14,21.8584502 1.77635684e-14,20.125974 Z" id="i" stroke="#000000"></path> <path id="l" stroke="#000000" d="M0 10 10.7945397 10 10.7945397 77.7454545 0 77.7454545z"></path> <path d="M39.759888,77.7454545 L29.5050753,77.7454545 L29.5050753,70.8454545 L29.3251663,70.8454545 C28.3656468,72.9961146 26.7015053,74.8928489 24.3326916,76.5357143 C21.963878,78.1785796 19.1603242,79 15.9219461,79 C13.1033577,79 10.6896029,78.5071478 8.68060903,77.5214286 C6.6716152,76.5357094 5.0224659,75.2363717 3.73311166,73.6233766 C2.44375741,72.0103815 1.49924463,70.158452 0.899544977,68.0675325 C0.299845327,65.9766129 2.84217094e-14,63.8259851 2.84217094e-14,61.6155844 L2.84217094e-14,34.7324675 L10.7945397,34.7324675 L10.7945397,58.5688312 C10.7945397,59.8233829 10.8844933,61.1376555 11.0644032,62.5116883 C11.2443131,63.8857212 11.634112,65.1253191 12.2338117,66.2305195 C12.8335113,67.3357198 13.658086,68.2467497 14.7075604,68.9636364 C15.7570348,69.6805231 17.1513155,70.038961 18.8904445,70.038961 C20.5696035,70.038961 22.0538379,69.695458 23.3431922,69.0084416 C24.6325464,68.3214251 25.6820051,67.4402651 26.4915996,66.3649351 C27.3011941,65.289605 27.915877,64.050007 28.3356668,62.6461039 C28.7554565,61.2422008 28.9653483,59.8233838 28.9653483,58.3896104 L28.9653483,34.7324675 L39.759888,34.7324675 L39.759888,77.7454545 Z" id="u" stroke="#000000"></path> <path d="M0,34.7324675 L10.2548127,34.7324675 L10.2548127,41.6324675 L10.4347217,41.6324675 C11.3942412,39.4818074 13.0583827,37.5850731 15.4271964,35.9422078 C17.79601,34.2993424 20.5995638,33.4779221 23.8379419,33.4779221 C26.6565303,33.4779221 29.0702851,33.9707743 31.079279,34.9564935 C33.0882728,35.9422127 34.7374221,37.2415504 36.0267763,38.8545455 C37.3161306,40.4675405 38.2606434,42.3194701 38.860343,44.4103896 C39.4600427,46.5013092 39.759888,48.651937 39.759888,50.8623377 L39.759888,77.7454545 L28.9653483,77.7454545 L28.9653483,53.9090909 C28.9653483,52.6545392 28.8753947,51.3402666 28.6954848,49.9662338 C28.5155749,48.5922009 28.125776,47.3526029 27.5260763,46.2474026 C26.9263767,45.1422023 26.101802,44.2311724 25.0523276,43.5142857 C24.0028532,42.797399 22.6085725,42.438961 20.8694435,42.438961 C19.1303145,42.438961 17.6310879,42.7824641 16.3717186,43.4694805 C15.1123493,44.1564969 14.0778829,45.037657 13.2682884,46.112987 C12.4586939,47.1883171 11.844011,48.4279151 11.4242212,49.8318182 C11.0044315,51.2357213 10.7945397,52.6545383 10.7945397,54.0883117 L10.7945397,77.7454545 L0,77.7454545 L0,34.7324675 Z" id="n" stroke="#000000"></path> <path d="M-5.68434189e-14,56.0597403 C-5.68434189e-14,52.6545284 0.614682921,49.5630009 1.8440672,46.7850649 C3.07345149,44.007129 4.73759305,41.6324774 6.83654183,39.661039 C8.9354906,37.6896005 11.4242068,36.1662391 14.3027651,35.0909091 C17.1813235,34.015579 20.2397458,33.4779221 23.4781239,33.4779221 C26.716502,33.4779221 29.7749244,34.015579 32.6534827,35.0909091 C35.532041,36.1662391 38.0207572,37.6896005 40.119706,39.661039 C42.2186548,41.6324774 43.8827963,44.007129 45.1121806,46.7850649 C46.3415649,49.5630009 46.9562478,52.6545284 46.9562478,56.0597403 C46.9562478,59.4649521 46.3415649,62.5714145 45.1121806,65.3792208 C43.8827963,68.187027 42.2186548,70.5915484 40.119706,72.5928571 C38.0207572,74.5941659 35.532041,76.162332 32.6534827,77.2974026 C29.7749244,78.4324732 26.716502,79 23.4781239,79 C20.2397458,79 17.1813235,78.4324732 14.3027651,77.2974026 C11.4242068,76.162332 8.9354906,74.5941659 6.83654183,72.5928571 C4.73759305,70.5915484 3.07345149,68.187027 1.8440672,65.3792208 C0.614682921,62.5714145 -5.68434189e-14,59.4649521 -5.68434189e-14,56.0597403 Z M10.9744487,56.0597403 C10.9744487,57.7324759 11.2293173,59.4051864 11.739062,61.0779221 C12.2488067,62.7506577 13.0134122,64.2441493 14.0329016,65.5584416 C15.0523911,66.8727338 16.341726,67.9480478 17.900945,68.7844156 C19.4601641,69.6207834 21.3192052,70.038961 23.4781239,70.038961 C25.6370426,70.038961 27.4960837,69.6207834 29.0553028,68.7844156 C30.6145219,67.9480478 31.9038568,66.8727338 32.9233462,65.5584416 C33.9428356,64.2441493 34.7074412,62.7506577 35.2171859,61.0779221 C35.7269306,59.4051864 35.9817991,57.7324759 35.9817991,56.0597403 C35.9817991,54.3870046 35.7269306,52.729229 35.2171859,51.0863636 C34.7074412,49.4434983 33.9428356,47.9649416 32.9233462,46.6506494 C31.9038568,45.3363571 30.6145219,44.2759781 29.0553028,43.4694805 C27.4960837,42.662983 25.6370426,42.2597403 23.4781239,42.2597403 C21.3192052,42.2597403 19.4601641,42.662983 17.900945,43.4694805 C16.341726,44.2759781 15.0523911,45.3363571 14.0329016,46.6506494 C13.0134122,47.9649416 12.2488067,49.4434983 11.739062,51.0863636 C11.2293173,52.729229 10.9744487,54.3870046 10.9744487,56.0597403 Z" id="o" stroke="#000000"></path> </g> </svg>');

    var posX = 5;

    var charEls = document.querySelectorAll('#artboard path');
    var chars = [];

    charEls.forEach((char) => {
        chars.push(SVG.adopt(char));
    });

    var charGroups = [];
    if(data.distribution == 'uniform') {
        var spaceEach = (data.width - data.spacing * (chars.length-1)) / chars.length;
        chars.forEach((char, index) => {
            var copyCount = Math.round((spaceEach - char.width()) / data.margin) - 1;
            var group = [];
            charGroups.push(group);
            group.push(char);
            char.attr({
                'stroke-width': data.strokeWidth + 'px',
                'stroke': data.textColor
            });
            for (var i = 0; i < copyCount; i++) {
                group.push(char.clone());
            }
        });
    }else if(data.distribution == 'random') {
        var distribution = [];
        for(var i=0; i<chars.length; i++) {
            distribution.push(Math.random()+.2);
        }
        var distSum = 0;
        distribution.forEach((d) => {
            distSum += d;
        });
        chars.forEach((char, index) => {
            var charSpace = Math.round((distribution[index] / distSum) * (data.width - (chars.length - 1) * data.spacing));
            var copyCount = Math.round((charSpace - char.width()) / data.margin) - 1;
            var group = [];
            charGroups.push(group);
            group.push(char);
            char.attr({
                'stroke-width': data.strokeWidth + 'px',
                'stroke': data.textColor
            });
            for (var i = 0; i < copyCount; i++) {
                group.push(char.clone());
            }
        });
    }else if(data.distribution == 'weighted') {
        var totalCharCount = (data.width - data.spacing * (chars.length - 1)) / data.margin;

        var copyFactors = [];
        chars.forEach((char, index) => {
            var copyFactor = Math.abs(data.center - (index / chars.length));
            copyFactors.push(copyFactor);
        });
        var cSum = 0;
        copyFactors.forEach((c) => {
            cSum += c;
        });
        chars.forEach((char, index) => {
            var charSpace = Math.round((copyFactors[index] / cSum) * (data.width - (chars.length - 1) * data.spacing));
            var copyCount = Math.round((charSpace - char.width()) / data.margin) - 1;
            var group = [];
            charGroups.push(group);
            group.push(char);
            char.attr({
                'stroke-width': data.strokeWidth + 'px',
                'stroke': data.textColor
            });
            for (var i = 0; i < copyCount; i++) {
                group.push(char.clone());
            }
        });
    }

    charGroups.forEach((charGroup) => {
        charGroup.forEach((char) => {
            char.transform({
                x: posX
            });
            posX += data.margin;
        });
        var charWidth = charGroup[0].width();
        posX += charWidth + (data.spacing - data.margin);
    });

};
data.update();

var gui = new dat.GUI();
gui.add(data, 'update');
// gui.add(data, 'width', 300, 1200).onChange(data.update);
gui.add(data, 'height', 100, 600).onChange(data.update);
gui.add(data, 'spacing', 1, 50).onChange(data.update);
gui.add(data, 'margin', 1, 50).onChange(data.update);
gui.add(data, 'strokeWidth', .1, 5).onChange(data.update);
gui.add(data, 'distribution', ['uniform', 'random', 'weighted']).onChange(data.update);
gui.add(data, 'center', 0, 1).onChange(data.update);
gui.addColor(data, 'textColor').onChange(data.update);
gui.addColor(data, 'bgColor').onChange(data.update);


var btn = document.querySelector('#codebutton');
var code = document.querySelector('#code');
btn.addEventListener('click', (e) => {
    code.innerText = draw.svg();
});