angular.module('color.picker').run(['$templateCache', function($templateCache) {
  $templateCache.put('template/color-picker/directive.html',
    '<div class="color-picker-wrapper" ng-class="{\'color-picker-swatch-only\': config.swatchOnly}">\n' +
    '   <input class="color-picker-input form-control" type="text" ng-model="ngModel" size="7" ng-focus="show()" ng-class="{\'color-picker-input-swatch\': config.swatch && !config.swatchOnly && config.swatchPos === \'left\'}">\n' +
    '   <span class="color-picker-swatch" ng-click="focus()" ng-show="config.swatch" ng-class="{\'color-picker-swatch-left\': config.swatchPos !== \'right\', \'color-picker-swatch-right\': config.swatchPos === \'right\'}">\n' +
    '       <span class="color-picker-swatch-color" style="background-color: {{swatchColor}};"></span>\n' +
    '   </span>\n' +
    '   <div class="color-picker-panel" ng-show="visible" ng-class="{\n' +
    '       \'color-picker-panel-top color-picker-panel-right\': config.pos === \'top right\',\n' +
    '       \'color-picker-panel-top color-picker-panel-left\': config.pos === \'top left\',\n' +
    '       \'color-picker-panel-bottom color-picker-panel-right\': config.pos === \'bottom right\',\n' +
    '       \'color-picker-panel-bottom color-picker-panel-left\': config.pos === \'bottom left\',\n' +
    '   }">\n' +
    '       <div class="color-picker-hue color-picker-sprite" ng-click="hueChange($event, true)" ng-mousemove="hueChange($event, false)" ng-mousedown="hueDown()" ng-mouseup="hueUp()">\n' +
    '           <div class="color-picker-slider" style="top: {{huePos}}%;"></div>\n' +
    '       </div>\n' +
    '       <div class="color-picker-opacity color-picker-sprite" ng-show="config.alpha" ng-click="opacityChange($event, true)" ng-mousemove="opacityChange($event, false)" ng-mousedown="opacityDown()" ng-mouseup="opacityUp()">\n' +
    '           <div class="color-picker-slider" style="top: {{opacityPos}}%;"></div>\n' +
    '           </div>\n' +
    '       <div class="color-picker-grid color-picker-sprite" style="background-color: {{grid}};" ng-click="colorChange($event, true)" ng-mousemove="colorChange($event, false)" ng-mousedown="colorDown()" ng-mouseup="colorUp()">\n' +
    '           <div class="color-picker-grid-inner"></div>\n' +
    '           <div class="color-picker-picker" style="top: {{lightnessPos}}%; left: {{saturationPos}}%;">\n' +
    '               <div></div>\n' +
    '           </div>\n' +
    '       </div>\n' +
    '   </div>\n' +
    '</div>' +
    '');
}]);
