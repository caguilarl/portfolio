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
  subtitle: "Torniquete - NFC",
  description: "Sistema de control de acceso para torniquete, en casino de trabajadores de Clínica Las Condes.",
  image: "ControlAcceso_CLC.png"
}, {
  title: "Kymers",
  subtitle: "POS e Inventario",
  description: "Manten el control de tu tienda con este sistema de control de inventario y punto de venta.",
  image: "kymers_pos.jpg"
}, {
  title: "Mi Cuenta Ofimundo",
  subtitle: "Portal de auto-atención",
  description: "Manten el control de tu tienda con este sistema de control de inventario y punto de venta.",
  image: "micuenta_ofimundo.png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTVlYTEwNzE0NzU0M2ZlYmViNjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHLENBQ25CO0FBQ0ksV0FBUyxXQURiO0FBRUksWUFBVSxDQUNOO0FBQ0ksYUFBUyxJQURiO0FBRUksa0JBQWM7QUFGbEIsR0FETSxFQUlZO0FBQ2QsYUFBUyxpQkFESztBQUVkLGtCQUFjO0FBRkEsR0FKWixFQVNOO0FBQ0ksYUFBUyxZQURiO0FBRUksa0JBQWM7QUFGbEIsR0FUTSxFQWFOO0FBQ0ksYUFBUyxTQURiO0FBRUksa0JBQWM7QUFGbEIsR0FiTSxFQWlCTjtBQUNJLGFBQVMsS0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBakJNO0FBRmQsQ0FEbUIsRUEwQm5CO0FBQ0ksV0FBUyx3QkFEYjtBQUVJLFlBQVUsQ0FDTjtBQUNJLGFBQVMsbUJBRGI7QUFFSSxrQkFBYztBQUZsQixHQURNLEVBS047QUFDSSxhQUFTLHVCQURiO0FBRUksa0JBQWM7QUFGbEIsR0FMTSxFQVNOO0FBQ0ksYUFBUyxtQkFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBVE0sRUFhTjtBQUNJLGFBQVMsWUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBYk0sRUFpQk47QUFDSSxhQUFTLGdCQURiO0FBRUksa0JBQWM7QUFGbEIsR0FqQk0sRUFxQk47QUFDSSxhQUFTLFVBRGI7QUFFSSxrQkFBYztBQUZsQixHQXJCTSxFQXlCTjtBQUNJLGFBQVMsUUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBekJNLEVBNkJOO0FBQ0ksYUFBUyxZQURiO0FBRUksa0JBQWM7QUFGbEIsR0E3Qk07QUFGZCxDQTFCbUIsRUErRG5CO0FBQ0ksV0FBUyxXQURiO0FBRUksWUFBVSxDQUNOO0FBQ0ksYUFBUyxzQkFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBRE0sRUFLTjtBQUNJLGFBQVMsY0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBTE0sRUFTTjtBQUNJLGFBQVMsWUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBVE0sRUFhTjtBQUNJLGFBQVMsUUFEYjtBQUVJLGtCQUFjO0FBRmxCLEdBYk0sRUFpQk47QUFDSSxhQUFTLE9BRGI7QUFFSSxrQkFBYztBQUZsQixHQWpCTSxFQXFCTjtBQUNJLGFBQVMsU0FEYjtBQUVJLGtCQUFjO0FBRmxCLEdBckJNO0FBRmQsQ0EvRG1CLENBQXBCO0FBOEZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLENBQ3ZCO0FBQ0lDLEVBQUFBLEtBQUssRUFBRSw2REFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ1hBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBRHVCLEVBT3ZCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSwwREFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ1hBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxVQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBUHVCLEVBYXZCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSxxQ0FEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ2tCQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsVUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQWJ1QixFQW1CdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLDRDQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxnWEFGakI7QUFHSUMsRUFBQUEsSUFBSSxFQUFFLFVBSFY7QUFJSUMsRUFBQUEsRUFBRSxFQUFFO0FBSlIsQ0FuQnVCLEVBeUJ2QjtBQUNJSCxFQUFBQSxLQUFLLEVBQUUsK0NBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLGdYQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsVUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQXpCdUIsQ0FBcEI7QUFpQ0EsSUFBTUMsUUFBUSxHQUFHLENBQ3BCO0FBQ0lKLEVBQUFBLEtBQUssRUFBRSx1QkFEWDtBQUVJSyxFQUFBQSxRQUFRLEVBQUUsa0JBRmQ7QUFHSUosRUFBQUEsV0FBVyxFQUFFLGdHQUhqQjtBQUlJSyxFQUFBQSxLQUFLLEVBQUU7QUFKWCxDQURvQixFQU9wQjtBQUNJTixFQUFBQSxLQUFLLEVBQUUsUUFEWDtBQUVJSyxFQUFBQSxRQUFRLEVBQUUsa0JBRmQ7QUFHSUosRUFBQUEsV0FBVyxFQUFFLDRGQUhqQjtBQUlJSyxFQUFBQSxLQUFLLEVBQUU7QUFKWCxDQVBvQixFQWFwQjtBQUNJTixFQUFBQSxLQUFLLEVBQUUsb0JBRFg7QUFFSUssRUFBQUEsUUFBUSxFQUFFLHlCQUZkO0FBR0lKLEVBQUFBLFdBQVcsRUFBRSw0RkFIakI7QUFJSUssRUFBQUEsS0FBSyxFQUFFO0FBSlgsQ0Fib0IsQ0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZURhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxsR3JvdXBzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJncm91cFwiOiBcIkxhbmd1YWdlc1wiLFxyXG4gICAgICAgICAgICBcInNraWxsc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkMjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDkwXHJcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIlZpc3VhbEJhc2ljLk5FVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA3MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNzVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkphdmEgU0VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiUGhwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDUwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZ3JvdXBcIjogXCJGcmFtZXdvcmtzICYgTGlicmFyaWVzXCIsXHJcbiAgICAgICAgICAgIFwic2tpbGxzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiQVNQLk5FVCBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkFTUC5ORVQgTVZDIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiQVNQLk5FVCBXZWIgRm9ybXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkphdmEgU3dpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIlNsaW0gRnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDIwXHJcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIlJlYWN0IEpTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJOb2RlSlNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIkV4cHJlc3MgSlNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJncm91cFwiOiBcIkRhdGFiYXNlc1wiLFxyXG4gICAgICAgICAgICBcInNraWxsc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIk1pY3Jvc29mdCBTUUwgU2VydmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2tpbGxcIjogXCJUcmFuc2FjdC1TUUxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogODBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIk9yYWNsZSAxMGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIlBMLVNRTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiA4MFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNraWxsXCI6IFwiTXlTUUxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJza2lsbFwiOiBcIk1hcmlhREJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogNjBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgXTtcclxuXHJcbi8qXHJcbmV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJza2lsbFwiOiBcIkMjXCIsXHJcbiAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwic2tpbGxcIjogXCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwic2tpbGxcIjogXCJKYXZhIFNFXCIsXHJcbiAgICAgICAgXCJwZXJjZW50YWdlXCI6IDYwXHJcbiAgICB9LCAgICAgICAgXHJcbiAgICB7XHJcbiAgICAgICAgXCJza2lsbFwiOiBcIlBocFwiLFxyXG4gICAgICAgIFwicGVyY2VudGFnZVwiOiA1MFxyXG4gICAgfSxcclxuXVxyXG4qL1xyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSW5nZW5pZXJvIGRlIERlc2Fycm9sbG8gU2VuaW9yIC0gT2ZpbXVuZG8gKFN0dWVkZW1hbm4gUy5BLilcIiwgICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLlwiLFxyXG4gICAgICAgIGZyb206IFwiTm92IDIwMjBcIixcclxuICAgICAgICB0bzogXCJDdXJyZW50XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRW5jYXJnYWRvIGRlIEluZm9ybcOhdGljYSBhdCBGZXJyZXRlcsOtYSBBbnRvZmFnYXN0YSBMdGRhLlwiLCAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuXCIsXHJcbiAgICAgICAgZnJvbTogXCJPY3QgMjAxOVwiLFxyXG4gICAgICAgIHRvOiBcIk9jdCAyMDIwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQW5hbGlzdGEgZGUgU2lzdGVtYXMgLSBDaGlsZW1hdCBTcEFcIiwgICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cIixcclxuICAgICAgICBmcm9tOiBcIkp1bCAyMDE3XCIsXHJcbiAgICAgICAgdG86IFwiU2VwIDIwMTlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJJbmdlbmllcm8gZGUgRGVzYXJyb2xsbyAtIEF1ZGlvbXVzaWNhIFNwQS5cIiwgICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLlwiLFxyXG4gICAgICAgIGZyb206IFwiTm92IDIwMTVcIixcclxuICAgICAgICB0bzogXCJKdW4gMjAxN1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkluZ2VuaWVybyBkZSBEZXNhcnJvbGxvIC0gUGFyc2UgU29mdHdhcmUgU3BBLlwiLCAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuXCIsXHJcbiAgICAgICAgZnJvbTogXCJKdWwgMjAxNFwiLFxyXG4gICAgICAgIHRvOiBcIk5vdiAyMDE1XCJcclxuICAgIH0sXHJcbl07ICAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbnRyb2wgQWNjZXNvIENhc2lub1wiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIlRvcm5pcXVldGUgLSBORkNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTaXN0ZW1hIGRlIGNvbnRyb2wgZGUgYWNjZXNvIHBhcmEgdG9ybmlxdWV0ZSwgZW4gY2FzaW5vIGRlIHRyYWJhamFkb3JlcyBkZSBDbMOtbmljYSBMYXMgQ29uZGVzLlwiLFxyXG4gICAgICAgIGltYWdlOiBcIkNvbnRyb2xBY2Nlc29fQ0xDLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkt5bWVyc1wiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIlBPUyBlIEludmVudGFyaW9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYW50ZW4gZWwgY29udHJvbCBkZSB0dSB0aWVuZGEgY29uIGVzdGUgc2lzdGVtYSBkZSBjb250cm9sIGRlIGludmVudGFyaW8geSBwdW50byBkZSB2ZW50YS5cIixcclxuICAgICAgICBpbWFnZTogXCJreW1lcnNfcG9zLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk1pIEN1ZW50YSBPZmltdW5kb1wiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIlBvcnRhbCBkZSBhdXRvLWF0ZW5jacOzblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1hbnRlbiBlbCBjb250cm9sIGRlIHR1IHRpZW5kYSBjb24gZXN0ZSBzaXN0ZW1hIGRlIGNvbnRyb2wgZGUgaW52ZW50YXJpbyB5IHB1bnRvIGRlIHZlbnRhLlwiLFxyXG4gICAgICAgIGltYWdlOiBcIm1pY3VlbnRhX29maW11bmRvLnBuZ1wiXHJcbiAgICB9LFxyXG5dIl0sIm5hbWVzIjpbInNraWxsR3JvdXBzIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJzdWJ0aXRsZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==