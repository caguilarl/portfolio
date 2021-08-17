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
/* harmony export */   "experiences": function() { return /* binding */ experiences; },
/* harmony export */   "projects": function() { return /* binding */ projects; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var skillGroups = [{
  "group": "Languages",
  "skills": [{
    "skill": "C#",
    "percentage": 90
  }, {
    "skill": "VisualBasic.NET",
    "percentage": 70
  }, {
    "skill": "Javascript",
    "percentage": 75
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
    "skill": "ASP.NET Web Forms",
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
  }, {
    "skill": "NodeJS",
    "percentage": 60
  }, {
    "skill": "Express JS",
    "percentage": 60
  }]
}, {
  "group": "Databases",
  "skills": [{
    "skill": "Microsoft SQL Server",
    "percentage": 80
  }, {
    "skill": "Transact-SQL",
    "percentage": 80
  }, {
    "skill": "Oracle 10g",
    "percentage": 40
  }, {
    "skill": "PL-SQL",
    "percentage": 80
  }, {
    "skill": "MySQL",
    "percentage": 60
  }, {
    "skill": "MariaDB",
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
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  from: "Nov 2020",
  to: "Current"
}, {
  title: "Encargado de Informática at Ferretería Antofagasta Ltda.",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  from: "Oct 2019",
  to: "Oct 2020"
}, {
  title: "Analista de Sistemas - Chilemat SpA",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  from: "Jul 2017",
  to: "Sep 2019"
}, {
  title: "Ingeniero de Desarrollo - Audiomusica SpA.",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  from: "Nov 2015",
  to: "Jun 2017"
}, {
  title: "Ingeniero de Desarrollo - Parse Software SpA.",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  from: "Jul 2014",
  to: "Nov 2015"
}];
var projects = [{
  title: "Control Acceso Casino",
  description: "Sistema de control de acceso para torniquete, en casino de trabajadores de Clínica Las Condes.",
  image: "ControlAcceso_CLC.png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWQ1NjBiMjljNTFkNmZjYWJlYjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHLENBQ25CO0FBQ0ksV0FBUyxXQURiO0FBRUksWUFBVSxDQUNOO0FBQ0ksYUFBUyxJQURiO0FBRUksa0JBQWM7QUFGbEIsR0FETSxFQUlZO0FBQ2QsYUFBUyxpQkFESztBQUVkLGtCQUFjO0FBRkEsR0FKWixFQVNOO0FBQ0ksYUFBUyxZQURiO0FBRUksa0JBQWM7QUFGbEIsR0FUTSxFQWFOO0FBQ0ksYUFBUyxTQURiO0FBRUksa0JBQWM7QUFGbEIsR0FiTSxFQWlCTjtBQUNJLGFBQVMsS0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBakJNO0FBRmQsQ0FEbUIsRUEwQm5CO0FBQ0ksV0FBUyx3QkFEYjtBQUVJLFlBQVUsQ0FDTjtBQUNJLGFBQVMsbUJBRGI7QUFFSSxrQkFBYztBQUZsQixHQURNLEVBS047QUFDSSxhQUFTLHVCQURiO0FBRUksa0JBQWM7QUFGbEIsR0FMTSxFQVNOO0FBQ0ksYUFBUyxtQkFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBVE0sRUFhTjtBQUNJLGFBQVMsWUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBYk0sRUFpQk47QUFDSSxhQUFTLGdCQURiO0FBRUksa0JBQWM7QUFGbEIsR0FqQk0sRUFxQk47QUFDSSxhQUFTLFVBRGI7QUFFSSxrQkFBYztBQUZsQixHQXJCTSxFQXlCTjtBQUNJLGFBQVMsUUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBekJNLEVBNkJOO0FBQ0ksYUFBUyxZQURiO0FBRUksa0JBQWM7QUFGbEIsR0E3Qk07QUFGZCxDQTFCbUIsRUErRG5CO0FBQ0ksV0FBUyxXQURiO0FBRUksWUFBVSxDQUNOO0FBQ0ksYUFBUyxzQkFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBRE0sRUFLTjtBQUNJLGFBQVMsY0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBTE0sRUFTTjtBQUNJLGFBQVMsWUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBVE0sRUFhTjtBQUNJLGFBQVMsUUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBYk0sRUFpQk47QUFDSSxhQUFTLE9BRGI7QUFFSSxrQkFBYztBQUZsQixHQWpCTSxFQXFCTjtBQUNJLGFBQVMsU0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBckJNO0FBRmQsQ0EvRG1CLENBQXBCO0FBOEZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLENBQ3ZCO0FBQ0lDLEVBQUFBLEtBQUssRUFBRSw2REFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ1hBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBRHVCLEVBT3ZCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSwwREFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ1hBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBUHVCLEVBYXZCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSxxQ0FEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ2tCQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsVUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQWJ1QixFQW1CdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLDRDQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxnWEFGakI7QUFHSUMsRUFBQUEsSUFBSSxFQUFFLFVBSFY7QUFJSUMsRUFBQUEsRUFBRSxFQUFFO0FBSlIsQ0FuQnVCLEVBeUJ2QjtBQUNJSCxFQUFBQSxLQUFLLEVBQUUsK0NBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLGdYQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsVUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQXpCdUIsQ0FBcEI7QUFpQ0EsSUFBTUMsUUFBUSxHQUFHLENBQ3BCO0FBQ0lKLEVBQUFBLEtBQUssRUFBRSx1QkFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ0dBRmpCO0FBR0lJLEVBQUFBLEtBQUssRUFBRTtBQUhYLENBRG9CLENBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3Byb2ZpbGVEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbEdyb3VwcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZ3JvdXBcIjogXCJMYW5ndWFnZXNcIixcclxuICAgICAgICAgICAgXCJza2lsbHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJDI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA5MFxyXG4gICAgICAgICAgICAgICAgfSwgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJWaXN1YWxCYXNpYy5ORVRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNzBcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDc1XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJKYXZhIFNFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIlBocFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA1MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImdyb3VwXCI6IFwiRnJhbWV3b3JrcyAmIExpYnJhcmllc1wiLFxyXG4gICAgICAgICAgICBcInNraWxsc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkFTUC5ORVQgRnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJBU1AuTkVUIE1WQyBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkFTUC5ORVQgV2ViIEZvcm1zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJKYXZhIFN3aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJTbGltIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiAyMFxyXG4gICAgICAgICAgICAgICAgfSwgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJSZWFjdCBKU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiTm9kZUpTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJFeHByZXNzIEpTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZ3JvdXBcIjogXCJEYXRhYmFzZXNcIixcclxuICAgICAgICAgICAgXCJza2lsbHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJNaWNyb3NvZnQgU1FMIFNlcnZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiVHJhbnNhY3QtU1FMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJPcmFjbGUgMTBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDQwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJQTC1TUUxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIk15U1FMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJNYXJpYURCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgIF07XHJcblxyXG4vKlxyXG5leHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwic2tpbGxcIjogXCJDI1wiLFxyXG4gICAgICAgIFwicGVyY2VudGFnZVwiOiA4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInNraWxsXCI6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInNraWxsXCI6IFwiSmF2YSBTRVwiLFxyXG4gICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgfSwgICAgICAgIFxyXG4gICAge1xyXG4gICAgICAgIFwic2tpbGxcIjogXCJQaHBcIixcclxuICAgICAgICBcInBlcmNlbnRhZ2VcIjogNTBcclxuICAgIH0sXHJcbl1cclxuKi9cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkluZ2VuaWVybyBkZSBEZXNhcnJvbGxvIFNlbmlvciAtIE9maW11bmRvIChTdHVlZGVtYW5uIFMuQS4pXCIsICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC5cIixcclxuICAgICAgICBmcm9tOiBcIk5vdiAyMDIwXCIsXHJcbiAgICAgICAgdG86IFwiQ3VycmVudFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkVuY2FyZ2FkbyBkZSBJbmZvcm3DoXRpY2EgYXQgRmVycmV0ZXLDrWEgQW50b2ZhZ2FzdGEgTHRkYS5cIiwgICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLlwiLFxyXG4gICAgICAgIGZyb206IFwiT2N0IDIwMTlcIixcclxuICAgICAgICB0bzogXCJPY3QgMjAyMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkFuYWxpc3RhIGRlIFNpc3RlbWFzIC0gQ2hpbGVtYXQgU3BBXCIsICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXCIsXHJcbiAgICAgICAgZnJvbTogXCJKdWwgMjAxN1wiLFxyXG4gICAgICAgIHRvOiBcIlNlcCAyMDE5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSW5nZW5pZXJvIGRlIERlc2Fycm9sbG8gLSBBdWRpb211c2ljYSBTcEEuXCIsICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC5cIixcclxuICAgICAgICBmcm9tOiBcIk5vdiAyMDE1XCIsXHJcbiAgICAgICAgdG86IFwiSnVuIDIwMTdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJJbmdlbmllcm8gZGUgRGVzYXJyb2xsbyAtIFBhcnNlIFNvZnR3YXJlIFNwQS5cIiwgICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLlwiLFxyXG4gICAgICAgIGZyb206IFwiSnVsIDIwMTRcIixcclxuICAgICAgICB0bzogXCJOb3YgMjAxNVwiXHJcbiAgICB9LFxyXG5dOyAgICBcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDb250cm9sIEFjY2VzbyBDYXNpbm9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTaXN0ZW1hIGRlIGNvbnRyb2wgZGUgYWNjZXNvIHBhcmEgdG9ybmlxdWV0ZSwgZW4gY2FzaW5vIGRlIHRyYWJhamFkb3JlcyBkZSBDbMOtbmljYSBMYXMgQ29uZGVzLlwiLFxyXG4gICAgICAgIGltYWdlOiBcIkNvbnRyb2xBY2Nlc29fQ0xDLnBuZ1wiXHJcbiAgICB9XHJcbl0iXSwibmFtZXMiOlsic2tpbGxHcm91cHMiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==