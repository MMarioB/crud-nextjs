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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[id]/edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[id]/edit.js":
/*!****************************!*\
  !*** ./pages/[id]/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/fp/Descargas/crud-clase-main/pages/[id]/edit.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//import Link from 'next/link';\n\n\n\n //Creamos la constante para editar una nota\n\nconst EditNote = ({\n  note\n}) => {\n  const {\n    0: form,\n    1: setForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    title: note.title,\n    description: note.description\n  });\n  const {\n    0: isSubmitting,\n    1: setIsSubmitting\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: errors,\n    1: setErrors\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (isSubmitting) {\n      if (Object.keys(errors).length === 0) {\n        updateNote();\n      } else {\n        setIsSubmitting(false);\n      }\n    }\n  }, [errors]); //Este metodo actualizaria el contenido de la nota que vayamos a editar\n\n  const updateNote = async () => {\n    try {\n      const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`http://localhost:3000/api/notes/${router.query.id}`, {\n        method: 'PUT',\n        headers: {\n          \"Accept\": \"application/json\",\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(form)\n      });\n      router.push(\"/\");\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    let errs = validate();\n    setErrors(errs);\n    setIsSubmitting(true);\n  };\n\n  const handleChange = e => {\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      [e.target.name]: e.target.value\n    }));\n  }; //Validacion para que la nota no este vacia\n\n\n  const validate = () => {\n    let err = {};\n\n    if (!form.title) {\n      err.title = 'El nombre de la tarea no puede estar vacio';\n    }\n\n    if (!form.description) {\n      err.description = 'El contenido de la tarea no puede estar vacio';\n    }\n\n    return err;\n  }; //Interfaz al hacer el update a una nota\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"form-container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Editar nota\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Loader\"], {\n        active: true,\n        inline: \"centered\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 27\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n        onSubmit: handleSubmit,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Input, {\n          fluid: true,\n          error: errors.title ? {\n            content: 'Por favor introduzca un nombre para esta tarea',\n            pointing: 'below'\n          } : null,\n          label: \"Tarea\",\n          placeholder: \"Introduzca un nombre para la tarea...\",\n          name: \"title\",\n          value: form.title,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 29\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].TextArea, {\n          fluid: true,\n          label: \"Contenido\",\n          placeholder: \"Introduzca el contenido...\",\n          name: \"description\",\n          error: errors.description ? {\n            content: 'Introduzca contenido para esta nota',\n            pointing: 'below'\n          } : null,\n          value: form.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 29\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n          type: \"submit\",\n          children: \"Actualizar nota\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 29\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 27\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 9\n  }, undefined);\n};\n\nEditNote.getInitialProps = async ({\n  query: {\n    id\n  }\n}) => {\n  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`http://localhost:3000/api/notes/${id}`);\n  const {\n    data\n  } = await res.json();\n  return {\n    note: data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditNote);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy8vZWRpdC5qcz80NTQ3Il0sIm5hbWVzIjpbIkVkaXROb3RlIiwibm90ZSIsImZvcm0iLCJzZXRGb3JtIiwidXNlU3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInVwZGF0ZU5vdGUiLCJyZXMiLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXJycyIsInZhbGlkYXRlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZXJyIiwiY29udGVudCIsInBvaW50aW5nIiwiZ2V0SW5pdGlhbFByb3BzIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUMzQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFSixJQUFJLENBQUNJLEtBQWQ7QUFBcUJDLGVBQVcsRUFBRUwsSUFBSSxDQUFDSztBQUF2QyxHQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDSixzREFBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JOLHNEQUFRLENBQUMsRUFBRCxD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QUMsV0FGVjtBQUdJLHFCQUFXLEVBQUMsNEJBSGhCO0FBSUksY0FBSSxFQUFDLGFBSlQ7QUFLSSxlQUFLLEVBQUUzQixNQUFNLENBQUNILFdBQVAsR0FBcUI7QUFBRW1DLG1CQUFPLEVBQUUscUNBQVg7QUFBa0RDLG9CQUFRLEVBQUU7QUFBNUQsV0FBckIsR0FBNkYsSUFMeEc7QUFNSSxlQUFLLEVBQUV4QyxJQUFJLENBQUNJLFdBTmhCO0FBT0ksa0JBQVEsRUFBRThCO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQW1CRSxxRUFBQyx3REFBRDtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0NILENBL0ZEOztBQWlHQXBDLFFBQVEsQ0FBQzJDLGVBQVQsR0FBMkIsT0FBTztBQUFFdkIsT0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFBVCxDQUFQLEtBQTZCO0FBQ3BELFFBQU1ILEdBQUcsR0FBRyxNQUFNQyx5REFBSyxDQUFFLG1DQUFrQ0UsRUFBRyxFQUF2QyxDQUF2QjtBQUNBLFFBQU07QUFBRXVCO0FBQUYsTUFBVyxNQUFNMUIsR0FBRyxDQUFDMkIsSUFBSixFQUF2QjtBQUVBLFNBQU87QUFBRTVDLFFBQUksRUFBRTJDO0FBQVIsR0FBUDtBQUNILENBTEQ7O0FBT2U1Qyx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL1tpZF0vZWRpdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgTG9hZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vL0NyZWFtb3MgbGEgY29uc3RhbnRlIHBhcmEgZWRpdGFyIHVuYSBub3RhXHJcbmNvbnN0IEVkaXROb3RlID0gKHsgbm90ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IHRpdGxlOiBub3RlLnRpdGxlLCBkZXNjcmlwdGlvbjogbm90ZS5kZXNjcmlwdGlvbiB9KTtcclxuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNTdWJtaXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTm90ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtlcnJvcnNdKVxyXG5cclxuICAgIC8vRXN0ZSBtZXRvZG8gYWN0dWFsaXphcmlhIGVsIGNvbnRlbmlkbyBkZSBsYSBub3RhIHF1ZSB2YXlhbW9zIGEgZWRpdGFyXHJcbiAgICBjb25zdCB1cGRhdGVOb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25vdGVzLyR7cm91dGVyLnF1ZXJ5LmlkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZXJycyA9IHZhbGlkYXRlKCk7XHJcbiAgICAgICAgc2V0RXJyb3JzKGVycnMpO1xyXG4gICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL1ZhbGlkYWNpb24gcGFyYSBxdWUgbGEgbm90YSBubyBlc3RlIHZhY2lhXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZXJyID0ge307XHJcblxyXG4gICAgICAgIGlmICghZm9ybS50aXRsZSkge1xyXG4gICAgICAgICAgICBlcnIudGl0bGUgPSAnRWwgbm9tYnJlIGRlIGxhIHRhcmVhIG5vIHB1ZWRlIGVzdGFyIHZhY2lvJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFmb3JtLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIGVyci5kZXNjcmlwdGlvbiA9ICdFbCBjb250ZW5pZG8gZGUgbGEgdGFyZWEgbm8gcHVlZGUgZXN0YXIgdmFjaW8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxuXHJcbiAgICAvL0ludGVyZmF6IGFsIGhhY2VyIGVsIHVwZGF0ZSBhIHVuYSBub3RhXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxPkVkaXRhciBub3RhPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8TG9hZGVyIGFjdGl2ZSBpbmxpbmU9J2NlbnRlcmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGl0bGUgPyB7IGNvbnRlbnQ6ICdQb3IgZmF2b3IgaW50cm9kdXpjYSB1biBub21icmUgcGFyYSBlc3RhIHRhcmVhJywgcG9pbnRpbmc6ICdiZWxvdycgfSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RhcmVhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdJbnRyb2R1emNhIHVuIG5vbWJyZSBwYXJhIGxhIHRhcmVhLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb250ZW5pZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0ludHJvZHV6Y2EgZWwgY29udGVuaWRvLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZGVzY3JpcHRpb24gPyB7IGNvbnRlbnQ6ICdJbnRyb2R1emNhIGNvbnRlbmlkbyBwYXJhIGVzdGEgbm90YScsIHBvaW50aW5nOiAnYmVsb3cnIH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPkFjdHVhbGl6YXIgbm90YTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5FZGl0Tm90ZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeTogeyBpZCB9IH0pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25vdGVzLyR7aWR9YCk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgbm90ZTogZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXROb3RlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/edit.js\n");

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