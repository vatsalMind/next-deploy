module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/HeaderData.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/HeaderData.js":
/*!*********************************!*\
  !*** ./pages/api/HeaderData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeaderData; });\nfunction HeaderData(req, res) {\n  res.status(200).json({\n    info: {\n      name: \"BluSkill Components\",\n      description: \"NextJS website for demoing prebuilt BluSkill Components\",\n      image: \"\",\n      url: \"\",\n      copyright: \"© 2021 BluSkill - All Rights Reserved\"\n    },\n    // COMPONENT LINKS\n    components: [{\n      title: \"Buttons\",\n      url: \"/buttons\"\n    }, {\n      title: \"Text Fields\",\n      url: \"/text-fields\"\n    }, {\n      title: \"Radio Buttons\",\n      url: \"/radio-buttons\"\n    }, {\n      title: \"Checkboxes\",\n      url: \"/checkboxes\"\n    }, {\n      title: \"Password Fields\",\n      url: \"/password-fields\"\n    }, {\n      title: \"Steppers\",\n      url: \"/steppers\"\n    }, {\n      title: \"Range Slider\",\n      url: \"/range-slider\"\n    }, {\n      title: \"Tags\",\n      url: \"/tags\"\n    }, {\n      title: \"Date Picker\",\n      url: \"/date-picker\"\n    }],\n    // MODULE LINKS\n    modules: [{\n      title: \"Image Select\",\n      url: \"/image-select\"\n    }, {\n      title: \"Location\",\n      url: \"/location\"\n    }, {\n      title: \"Pagination\",\n      url: \"/pagination\"\n    }, {\n      title: \"Photos\",\n      url: \"/photos\"\n    }]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvSGVhZGVyRGF0YS5qcz9kOWE1Il0sIm5hbWVzIjpbIkhlYWRlckRhdGEiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiaW5mbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidXJsIiwiY29weXJpZ2h0IiwiY29tcG9uZW50cyIsInRpdGxlIiwibW9kdWxlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLFVBQVQsQ0FBcUJDLEdBQXJCLEVBQXlCQyxHQUF6QixFQUE2QjtBQUMxQ0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDakJDLFFBQUksRUFBRTtBQUNKQyxVQUFJLEVBQUUscUJBREY7QUFFSkMsaUJBQVcsRUFBRSx5REFGVDtBQUdKQyxXQUFLLEVBQUUsRUFISDtBQUlKQyxTQUFHLEVBQUUsRUFKRDtBQUtKQyxlQUFTLEVBQUU7QUFMUCxLQURXO0FBU2pCO0FBQ0FDLGNBQVUsRUFBRSxDQUNWO0FBQUNDLFdBQUssRUFBRSxTQUFSO0FBQW1CSCxTQUFHLEVBQUU7QUFBeEIsS0FEVSxFQUVWO0FBQUNHLFdBQUssRUFBRSxhQUFSO0FBQXVCSCxTQUFHLEVBQUU7QUFBNUIsS0FGVSxFQUdWO0FBQUNHLFdBQUssRUFBRSxlQUFSO0FBQXlCSCxTQUFHLEVBQUU7QUFBOUIsS0FIVSxFQUlWO0FBQUNHLFdBQUssRUFBRSxZQUFSO0FBQXNCSCxTQUFHLEVBQUU7QUFBM0IsS0FKVSxFQUtWO0FBQUNHLFdBQUssRUFBRSxpQkFBUjtBQUEyQkgsU0FBRyxFQUFFO0FBQWhDLEtBTFUsRUFNVjtBQUFDRyxXQUFLLEVBQUUsVUFBUjtBQUFvQkgsU0FBRyxFQUFFO0FBQXpCLEtBTlUsRUFPVjtBQUFDRyxXQUFLLEVBQUUsY0FBUjtBQUF3QkgsU0FBRyxFQUFFO0FBQTdCLEtBUFUsRUFRVjtBQUFDRyxXQUFLLEVBQUUsTUFBUjtBQUFnQkgsU0FBRyxFQUFFO0FBQXJCLEtBUlUsRUFTVjtBQUFDRyxXQUFLLEVBQUUsYUFBUjtBQUF1QkgsU0FBRyxFQUFFO0FBQTVCLEtBVFUsQ0FWSztBQXNCakI7QUFDQUksV0FBTyxFQUFFLENBQ1A7QUFBQ0QsV0FBSyxFQUFFLGNBQVI7QUFBd0JILFNBQUcsRUFBRTtBQUE3QixLQURPLEVBRVA7QUFBQ0csV0FBSyxFQUFFLFVBQVI7QUFBb0JILFNBQUcsRUFBRTtBQUF6QixLQUZPLEVBR1A7QUFBQ0csV0FBSyxFQUFFLFlBQVI7QUFBc0JILFNBQUcsRUFBRTtBQUEzQixLQUhPLEVBSVA7QUFBQ0csV0FBSyxFQUFFLFFBQVI7QUFBa0JILFNBQUcsRUFBRTtBQUF2QixLQUpPO0FBdkJRLEdBQXJCO0FBK0JEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL0hlYWRlckRhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJEYXRhIChyZXEscmVzKXtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgaW5mbzoge1xuICAgICAgICBuYW1lOiBcIkJsdVNraWxsIENvbXBvbmVudHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTmV4dEpTIHdlYnNpdGUgZm9yIGRlbW9pbmcgcHJlYnVpbHQgQmx1U2tpbGwgQ29tcG9uZW50c1wiLFxuICAgICAgICBpbWFnZTogXCJcIixcbiAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICBjb3B5cmlnaHQ6IFwiwqkgMjAyMSBCbHVTa2lsbCAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIENPTVBPTkVOVCBMSU5LU1xuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7dGl0bGU6IFwiQnV0dG9uc1wiLCB1cmw6IFwiL2J1dHRvbnNcIn0sXG4gICAgICAgIHt0aXRsZTogXCJUZXh0IEZpZWxkc1wiLCB1cmw6IFwiL3RleHQtZmllbGRzXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiUmFkaW8gQnV0dG9uc1wiLCB1cmw6IFwiL3JhZGlvLWJ1dHRvbnNcIn0sXG4gICAgICAgIHt0aXRsZTogXCJDaGVja2JveGVzXCIsIHVybDogXCIvY2hlY2tib3hlc1wifSxcbiAgICAgICAge3RpdGxlOiBcIlBhc3N3b3JkIEZpZWxkc1wiLCB1cmw6IFwiL3Bhc3N3b3JkLWZpZWxkc1wifSxcbiAgICAgICAge3RpdGxlOiBcIlN0ZXBwZXJzXCIsIHVybDogXCIvc3RlcHBlcnNcIn0sXG4gICAgICAgIHt0aXRsZTogXCJSYW5nZSBTbGlkZXJcIiwgdXJsOiBcIi9yYW5nZS1zbGlkZXJcIn0sXG4gICAgICAgIHt0aXRsZTogXCJUYWdzXCIsIHVybDogXCIvdGFnc1wifSxcbiAgICAgICAge3RpdGxlOiBcIkRhdGUgUGlja2VyXCIsIHVybDogXCIvZGF0ZS1waWNrZXJcIn0sXG4gICAgICBdLFxuXG4gICAgICAvLyBNT0RVTEUgTElOS1NcbiAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAge3RpdGxlOiBcIkltYWdlIFNlbGVjdFwiLCB1cmw6IFwiL2ltYWdlLXNlbGVjdFwifSxcbiAgICAgICAge3RpdGxlOiBcIkxvY2F0aW9uXCIsIHVybDogXCIvbG9jYXRpb25cIn0sXG4gICAgICAgIHt0aXRsZTogXCJQYWdpbmF0aW9uXCIsIHVybDogXCIvcGFnaW5hdGlvblwifSxcbiAgICAgICAge3RpdGxlOiBcIlBob3Rvc1wiLCB1cmw6IFwiL3Bob3Rvc1wifSxcbiAgICAgIF1cbiAgICB9XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/HeaderData.js\n");

/***/ })

/******/ });