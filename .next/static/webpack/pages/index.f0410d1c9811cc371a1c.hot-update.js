"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profileData.js":
/*!************************!*\
  !*** ./profileData.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skillGroups": function() { return /* binding */ skillGroups; },
/* harmony export */   "experiences": function() { return /* binding */ experiences; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var skillGroups = [{
  "group": "Languages",
  "skills": [{
    "skill": "C#",
    "percentage": 80
  }, {
    "skill": "Javascript",
    "percentage": 60
  }, {
    "skill": "Java SE",
    "percentage": 60
  }, {
    "skill": "Php",
    "percentage": 50
  }]
}, {
  "group": "Frameworks & Libraries",
  "skills": [{
    "skill": "ASP.NET Framework",
    "percentage": 80
  }, {
    "skill": "ASP.NET MVC Framework",
    "percentage": 80
  }, {
    "skill": "Java Swing",
    "percentage": 60
  }, {
    "skill": "Slim Framework",
    "percentage": 20
  }, {
    "skill": "React JS",
    "percentage": 60
  }]
}];
/*
export const skills = [
    {
        "skill": "C#",
        "percentage": 80
    },
    {
        "skill": "Javascript",
        "percentage": 60
    },
    {
        "skill": "Java SE",
        "percentage": 60
    },        
    {
        "skill": "Php",
        "percentage": 50
    },
]
*/

var experiences = [{
  title: "Ingeniero de Desarrollo Senior - Ofimundo (Stuedemann S.A.)",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  from: "Nov 2020",
  to: "Current"
}, {
  title: "Encargado de Informática at Ferretería Antofagasta Ltda.",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  from: "Oct 2019",
  to: "Oct 2020"
}, {
  title: "Analista de Sistemas - Chilemat SpA",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  from: "Jul 2017",
  to: "Sep 2019"
}, {
  title: "Ingeniero de Desarrollo - Audiomusica SpA.",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  from: "Nov 2015",
  to: "Jun 2017"
}, {
  title: "Ingeniero de Desarrollo - Parse Software SpA.",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  from: "Jul 2014",
  to: "Nov 2015"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjA0MTBkMWM5ODExY2MzNzFhMWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxXQUFXLEdBQUcsQ0FDbkI7QUFDSSxXQUFTLFdBRGI7QUFFSSxZQUFVLENBQ047QUFDSSxhQUFTLElBRGI7QUFFSSxrQkFBYztBQUZsQixHQURNLEVBS047QUFDSSxhQUFTLFlBRGI7QUFFSSxrQkFBYztBQUZsQixHQUxNLEVBU047QUFDSSxhQUFTLFNBRGI7QUFFSSxrQkFBYztBQUZsQixHQVRNLEVBYU47QUFDSSxhQUFTLEtBRGI7QUFFSSxrQkFBYztBQUZsQixHQWJNO0FBRmQsQ0FEbUIsRUFzQm5CO0FBQ0ksV0FBUyx3QkFEYjtBQUVJLFlBQVUsQ0FDTjtBQUNJLGFBQVMsbUJBRGI7QUFFSSxrQkFBYztBQUZsQixHQURNLEVBS047QUFDSSxhQUFTLHVCQURiO0FBRUksa0JBQWM7QUFGbEIsR0FMTSxFQVNOO0FBQ0ksYUFBUyxZQURiO0FBRUksa0JBQWM7QUFGbEIsR0FUTSxFQWFOO0FBQ0ksYUFBUyxnQkFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBYk0sRUFpQk47QUFDSSxhQUFTLFVBRGI7QUFFSSxrQkFBYztBQUZsQixHQWpCTTtBQUZkLENBdEJtQixDQUFwQjtBQWlEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLFdBQVcsR0FBRyxDQUN2QjtBQUNJQyxFQUFBQSxLQUFLLEVBQUUsNkRBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLGdrQkFGakI7QUFHSUMsRUFBQUEsSUFBSSxFQUFFLFVBSFY7QUFJSUMsRUFBQUEsRUFBRSxFQUFFO0FBSlIsQ0FEdUIsRUFPdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLDBEQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxna0JBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBUHVCLEVBYXZCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSxxQ0FEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ2tCQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsVUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQWJ1QixFQW1CdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLDRDQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxna0JBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBbkJ1QixFQXlCdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLCtDQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxna0JBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBekJ1QixDQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxHcm91cHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImdyb3VwXCI6IFwiTGFuZ3VhZ2VzXCIsXHJcbiAgICAgICAgICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiQyNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkphdmEgU0VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiUGhwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDUwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZ3JvdXBcIjogXCJGcmFtZXdvcmtzICYgTGlicmFyaWVzXCIsXHJcbiAgICAgICAgICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiQVNQLk5FVCBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkFTUC5ORVQgTVZDIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiSmF2YSBTd2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiU2xpbSBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogMjBcclxuICAgICAgICAgICAgICAgIH0sICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiUmVhY3QgSlNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgXTtcclxuXHJcbi8qXHJcbmV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJza2lsbFwiOiBcIkMjXCIsXHJcbiAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwic2tpbGxcIjogXCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwic2tpbGxcIjogXCJKYXZhIFNFXCIsXHJcbiAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICB9LCAgICAgICAgXHJcbiAgICB7XHJcbiAgICAgICAgXCJza2lsbFwiOiBcIlBocFwiLFxyXG4gICAgICAgIFwicGVyY2VudGFnZVwiOiA1MFxyXG4gICAgfSxcclxuXVxyXG4qL1xyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSW5nZW5pZXJvIGRlIERlc2Fycm9sbG8gU2VuaW9yIC0gT2ZpbXVuZG8gKFN0dWVkZW1hbm4gUy5BLilcIiwgICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cIixcclxuICAgICAgICBmcm9tOiBcIk5vdiAyMDIwXCIsXHJcbiAgICAgICAgdG86IFwiQ3VycmVudFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkVuY2FyZ2FkbyBkZSBJbmZvcm3DoXRpY2EgYXQgRmVycmV0ZXLDrWEgQW50b2ZhZ2FzdGEgTHRkYS5cIiwgICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cIixcclxuICAgICAgICBmcm9tOiBcIk9jdCAyMDE5XCIsXHJcbiAgICAgICAgdG86IFwiT2N0IDIwMjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBbmFsaXN0YSBkZSBTaXN0ZW1hcyAtIENoaWxlbWF0IFNwQVwiLCAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlwiLFxyXG4gICAgICAgIGZyb206IFwiSnVsIDIwMTdcIixcclxuICAgICAgICB0bzogXCJTZXAgMjAxOVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkluZ2VuaWVybyBkZSBEZXNhcnJvbGxvIC0gQXVkaW9tdXNpY2EgU3BBLlwiLCAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlwiLFxyXG4gICAgICAgIGZyb206IFwiTm92IDIwMTVcIixcclxuICAgICAgICB0bzogXCJKdW4gMjAxN1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkluZ2VuaWVybyBkZSBEZXNhcnJvbGxvIC0gUGFyc2UgU29mdHdhcmUgU3BBLlwiLCAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlwiLFxyXG4gICAgICAgIGZyb206IFwiSnVsIDIwMTRcIixcclxuICAgICAgICB0bzogXCJOb3YgMjAxNVwiXHJcbiAgICB9LFxyXG5dOyAgICAiXSwibmFtZXMiOlsic2tpbGxHcm91cHMiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iXSwic291cmNlUm9vdCI6IiJ9