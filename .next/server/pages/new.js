module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/new.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/new.js":
/*!**********************!*\
  !*** ./pages/new.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/fp/Descargas/crud-clase-main/pages/new.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//Importamos lo necesario\n\n\n\n //Creamos la constante para crear una nota\n\nconst NewNote = () => {\n  const {\n    0: form,\n    1: setForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    title: '',\n    description: ''\n  });\n  const {\n    0: isSubmitting,\n    1: setIsSubmitting\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: errors,\n    1: setErrors\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (isSubmitting) {\n      if (Object.keys(errors).length === 0) {\n        createNote();\n      } else {\n        setIsSubmitting(false);\n      }\n    }\n  }, [errors]);\n\n  const createNote = async () => {\n    try {\n      const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000/api/notes', {\n        method: 'POST',\n        headers: {\n          \"Accept\": \"application/json\",\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(form)\n      });\n      router.push(\"/\");\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    let errs = validate();\n    setErrors(errs);\n    setIsSubmitting(true);\n  };\n\n  const handleChange = e => {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      [e.target.name]: e.target.value\n    }));\n  }; //Realizamos unas pequeñas validaciones\n\n\n  const validate = () => {\n    let err = {};\n\n    if (!form.title) {\n      err.title = 'Introduzca un nombre para la nota/tarea';\n    }\n\n    if (!form.description) {\n      err.description = 'Introduzca contenido en la tarea';\n    }\n\n    return err;\n  }; //Devolvemos un div que mostrara el cómo agregar una nueva nota\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"form-container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Crear nota o tarea\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Loader\"], {\n        active: true,\n        inline: \"centered\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 27\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n        onSubmit: handleSubmit,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Input, {\n          fluid: true,\n          error: errors.title ? {\n            content: 'Por favor introduzca un nombre para esta tarea',\n            pointing: 'below'\n          } : null,\n          label: \"Tarea\",\n          placeholder: \"Introduzca un nombre para la tarea...\",\n          name: \"title\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 29\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].TextArea, {\n          fluid: true,\n          label: \"Contenido\",\n          placeholder: \"Introduzca el contenido...\",\n          name: \"description\",\n          error: errors.description ? {\n            content: 'Introduzca contenido para esta nota',\n            pointing: 'below'\n          } : null,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 29\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n          type: \"submit\",\n          children: \"Crear nota\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 29\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 27\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewNote);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXcuanM/OWViOCJdLCJuYW1lcyI6WyJOZXdOb3RlIiwiZm9ybSIsInNldEZvcm0iLCJ1c2VTdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY3JlYXRlTm90ZSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVycnMiLCJ2YWxpZGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImVyciIsImNvbnRlbnQiLCJwb2ludGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUUsRUFBVDtBQUFhQyxlQUFXLEVBQUU7QUFBMUIsR0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0osc0RBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNTyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlOLFlBQUosRUFBa0I7QUFDZCxVQUFJTyxNQUFNLENB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QUE7QUFBQTtBQUFBLHFCQVRGLGVBaUJFLHFFQUFDLHdEQUFEO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE4QkgsQ0E1RkQ7O0FBOEZlakMsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9uZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy9JbXBvcnRhbW9zIGxvIG5lY2VzYXJpb1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBMb2FkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vQ3JlYW1vcyBsYSBjb25zdGFudGUgcGFyYSBjcmVhciB1bmEgbm90YVxyXG5jb25zdCBOZXdOb3RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyB0aXRsZTogJycsIGRlc2NyaXB0aW9uOiAnJyB9KTsgXHJcbiAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU3VibWl0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbZXJyb3JzXSlcclxuXHJcbiAgICBjb25zdCBjcmVhdGVOb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25vdGVzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZXJycyA9IHZhbGlkYXRlKCk7XHJcbiAgICAgICAgc2V0RXJyb3JzKGVycnMpO1xyXG4gICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL1JlYWxpemFtb3MgdW5hcyBwZXF1ZcOxYXMgdmFsaWRhY2lvbmVzXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZXJyID0ge307XHJcblxyXG4gICAgICAgIGlmICghZm9ybS50aXRsZSkge1xyXG4gICAgICAgICAgICBlcnIudGl0bGUgPSAnSW50cm9kdXpjYSB1biBub21icmUgcGFyYSBsYSBub3RhL3RhcmVhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFmb3JtLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIGVyci5kZXNjcmlwdGlvbiA9ICdJbnRyb2R1emNhIGNvbnRlbmlkbyBlbiBsYSB0YXJlYSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRGV2b2x2ZW1vcyB1biBkaXYgcXVlIG1vc3RyYXJhIGVsIGPDs21vIGFncmVnYXIgdW5hIG51ZXZhIG5vdGFcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDE+Q3JlYXIgbm90YSBvIHRhcmVhPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8TG9hZGVyIGFjdGl2ZSBpbmxpbmU9J2NlbnRlcmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGl0bGUgPyB7IGNvbnRlbnQ6ICdQb3IgZmF2b3IgaW50cm9kdXpjYSB1biBub21icmUgcGFyYSBlc3RhIHRhcmVhJywgcG9pbnRpbmc6ICdiZWxvdycgfSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RhcmVhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdJbnRyb2R1emNhIHVuIG5vbWJyZSBwYXJhIGxhIHRhcmVhLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb250ZW5pZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0ludHJvZHV6Y2EgZWwgY29udGVuaWRvLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZGVzY3JpcHRpb24gPyB7IGNvbnRlbnQ6ICdJbnRyb2R1emNhIGNvbnRlbmlkbyBwYXJhIGVzdGEgbm90YScsIHBvaW50aW5nOiAnYmVsb3cnIH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPkNyZWFyIG5vdGE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Tm90ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });