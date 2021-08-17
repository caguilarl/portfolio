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
  title: "Control Acceso Torniquete - NFC",
  subtitle: "Control Acceso Clínica Las Condes",
  description: "Sistema de control de acceso para torniquete, en casino de trabajadores de Clínica Las Condes.",
  image: "ControlAcceso_CLC.png"
}, {
  title: "Kymers",
  subtitle: "POS e Inventario",
  description: "Manten el control de tu tienda con este sistema de control de inventario y punto de venta.",
  image: "kymers_pos.jpg"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWUzNzgxOWM2ZDFiMDQ4OWU5MWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHLENBQ25CO0FBQ0ksV0FBUyxXQURiO0FBRUksWUFBVSxDQUNOO0FBQ0ksYUFBUyxJQURiO0FBRUksa0JBQWM7QUFGbEIsR0FETSxFQUlZO0FBQ2QsYUFBUyxpQkFESztBQUVkLGtCQUFjO0FBRkEsR0FKWixFQVNOO0FBQ0ksYUFBUyxZQURiO0FBRUksa0JBQWM7QUFGbEIsR0FUTSxFQWFOO0FBQ0ksYUFBUyxTQURiO0FBRUksa0JBQWM7QUFGbEIsR0FiTSxFQWlCTjtBQUNJLGFBQVMsS0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBakJNO0FBRmQsQ0FEbUIsRUEwQm5CO0FBQ0ksV0FBUyx3QkFEYjtBQUVJLFlBQVUsQ0FDTjtBQUNJLGFBQVMsbUJBRGI7QUFFSSxrQkFBYztBQUZsQixHQURNLEVBS047QUFDSSxhQUFTLHVCQURiO0FBRUksa0JBQWM7QUFGbEIsR0FMTSxFQVNOO0FBQ0ksYUFBUyxtQkFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBVE0sRUFhTjtBQUNJLGFBQVMsWUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBYk0sRUFpQk47QUFDSSxhQUFTLGdCQURiO0FBRUksa0JBQWM7QUFGbEIsR0FqQk0sRUFxQk47QUFDSSxhQUFTLFVBRGI7QUFFSSxrQkFBYztBQUZsQixHQXJCTSxFQXlCTjtBQUNJLGFBQVMsUUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBekJNLEVBNkJOO0FBQ0ksYUFBUyxZQURiO0FBRUksa0JBQWM7QUFGbEIsR0E3Qk07QUFGZCxDQTFCbUIsRUErRG5CO0FBQ0ksV0FBUyxXQURiO0FBRUksWUFBVSxDQUNOO0FBQ0ksYUFBUyxzQkFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBRE0sRUFLTjtBQUNJLGFBQVMsY0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBTE0sRUFTTjtBQUNJLGFBQVMsWUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBVE0sRUFhTjtBQUNJLGFBQVMsUUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBYk0sRUFpQk47QUFDSSxhQUFTLE9BRGI7QUFFSSxrQkFBYztBQUZsQixHQWpCTSxFQXFCTjtBQUNJLGFBQVMsU0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBckJNO0FBRmQsQ0EvRG1CLENBQXBCO0FBOEZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLENBQ3ZCO0FBQ0lDLEVBQUFBLEtBQUssRUFBRSw2REFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ1hBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBRHVCLEVBT3ZCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSwwREFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ1hBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBUHVCLEVBYXZCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSxxQ0FEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ2tCQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsVUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQWJ1QixFQW1CdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLDRDQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxnWEFGakI7QUFHSUMsRUFBQUEsSUFBSSxFQUFFLFVBSFY7QUFJSUMsRUFBQUEsRUFBRSxFQUFFO0FBSlIsQ0FuQnVCLEVBeUJ2QjtBQUNJSCxFQUFBQSxLQUFLLEVBQUUsK0NBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLGdYQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsVUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQXpCdUIsQ0FBcEI7QUFpQ0EsSUFBTUMsUUFBUSxHQUFHLENBQ3BCO0FBQ0lKLEVBQUFBLEtBQUssRUFBRSxpQ0FEWDtBQUVJSyxFQUFBQSxRQUFRLEVBQUUsbUNBRmQ7QUFHSUosRUFBQUEsV0FBVyxFQUFFLGdHQUhqQjtBQUlJSyxFQUFBQSxLQUFLLEVBQUU7QUFKWCxDQURvQixFQU9wQjtBQUNJTixFQUFBQSxLQUFLLEVBQUUsUUFEWDtBQUVJSyxFQUFBQSxRQUFRLEVBQUUsa0JBRmQ7QUFHSUosRUFBQUEsV0FBVyxFQUFFLDRGQUhqQjtBQUlJSyxFQUFBQSxLQUFLLEVBQUU7QUFKWCxDQVBvQixDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxHcm91cHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImdyb3VwXCI6IFwiTGFuZ3VhZ2VzXCIsXHJcbiAgICAgICAgICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiQyNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogOTBcclxuICAgICAgICAgICAgICAgIH0sICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiVmlzdWFsQmFzaWMuTkVUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDcwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA3NVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiSmF2YSBTRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgICAgICAgICAgICAgfSwgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJQaHBcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNTBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJncm91cFwiOiBcIkZyYW1ld29ya3MgJiBMaWJyYXJpZXNcIixcclxuICAgICAgICAgICAgXCJza2lsbHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJBU1AuTkVUIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiQVNQLk5FVCBNVkMgRnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJBU1AuTkVUIFdlYiBGb3Jtc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiSmF2YSBTd2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiU2xpbSBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogMjBcclxuICAgICAgICAgICAgICAgIH0sICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiUmVhY3QgSlNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIk5vZGVKU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiRXhwcmVzcyBKU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImdyb3VwXCI6IFwiRGF0YWJhc2VzXCIsXHJcbiAgICAgICAgICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiTWljcm9zb2Z0IFNRTCBTZXJ2ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIlRyYW5zYWN0LVNRTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiT3JhY2xlIDEwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA0MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiUEwtU1FMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJNeVNRTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiTWFyaWFEQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA2MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICBdO1xyXG5cclxuLypcclxuZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICAgIHtcclxuICAgICAgICBcInNraWxsXCI6IFwiQyNcIixcclxuICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJza2lsbFwiOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJza2lsbFwiOiBcIkphdmEgU0VcIixcclxuICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgIH0sICAgICAgICBcclxuICAgIHtcclxuICAgICAgICBcInNraWxsXCI6IFwiUGhwXCIsXHJcbiAgICAgICAgXCJwZXJjZW50YWdlXCI6IDUwXHJcbiAgICB9LFxyXG5dXHJcbiovXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJJbmdlbmllcm8gZGUgRGVzYXJyb2xsbyBTZW5pb3IgLSBPZmltdW5kbyAoU3R1ZWRlbWFubiBTLkEuKVwiLCAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuXCIsXHJcbiAgICAgICAgZnJvbTogXCJOb3YgMjAyMFwiLFxyXG4gICAgICAgIHRvOiBcIkN1cnJlbnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJFbmNhcmdhZG8gZGUgSW5mb3Jtw6F0aWNhIGF0IEZlcnJldGVyw61hIEFudG9mYWdhc3RhIEx0ZGEuXCIsICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC5cIixcclxuICAgICAgICBmcm9tOiBcIk9jdCAyMDE5XCIsXHJcbiAgICAgICAgdG86IFwiT2N0IDIwMjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBbmFsaXN0YSBkZSBTaXN0ZW1hcyAtIENoaWxlbWF0IFNwQVwiLCAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlwiLFxyXG4gICAgICAgIGZyb206IFwiSnVsIDIwMTdcIixcclxuICAgICAgICB0bzogXCJTZXAgMjAxOVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkluZ2VuaWVybyBkZSBEZXNhcnJvbGxvIC0gQXVkaW9tdXNpY2EgU3BBLlwiLCAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuXCIsXHJcbiAgICAgICAgZnJvbTogXCJOb3YgMjAxNVwiLFxyXG4gICAgICAgIHRvOiBcIkp1biAyMDE3XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSW5nZW5pZXJvIGRlIERlc2Fycm9sbG8gLSBQYXJzZSBTb2Z0d2FyZSBTcEEuXCIsICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC5cIixcclxuICAgICAgICBmcm9tOiBcIkp1bCAyMDE0XCIsXHJcbiAgICAgICAgdG86IFwiTm92IDIwMTVcIlxyXG4gICAgfSxcclxuXTsgICAgXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29udHJvbCBBY2Nlc28gVG9ybmlxdWV0ZSAtIE5GQ1wiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIkNvbnRyb2wgQWNjZXNvIENsw61uaWNhIExhcyBDb25kZXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTaXN0ZW1hIGRlIGNvbnRyb2wgZGUgYWNjZXNvIHBhcmEgdG9ybmlxdWV0ZSwgZW4gY2FzaW5vIGRlIHRyYWJhamFkb3JlcyBkZSBDbMOtbmljYSBMYXMgQ29uZGVzLlwiLFxyXG4gICAgICAgIGltYWdlOiBcIkNvbnRyb2xBY2Nlc29fQ0xDLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkt5bWVyc1wiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIlBPUyBlIEludmVudGFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYW50ZW4gZWwgY29udHJvbCBkZSB0dSB0aWVuZGEgY29uIGVzdGUgc2lzdGVtYSBkZSBjb250cm9sIGRlIGludmVudGFyaW8geSBwdW50byBkZSB2ZW50YS5cIixcclxuICAgICAgICBpbWFnZTogXCJreW1lcnNfcG9zLmpwZ1wiXHJcbiAgICB9LFxyXG5dIl0sIm5hbWVzIjpbInNraWxsR3JvdXBzIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJzdWJ0aXRsZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==