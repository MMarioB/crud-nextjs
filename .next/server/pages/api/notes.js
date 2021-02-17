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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/notes/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Note.js":
/*!************************!*\
  !*** ./models/Note.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst NoteSchema = new mongoose.Schema({\n  title: {\n    type: String,\n    required: [true, 'Introduzca un nombre para la nota/tarea'],\n    unique: true,\n    maxlength: [40, 'El nombre de la tarea no puede ser mayor de 40 caracteres']\n  },\n  description: {\n    type: String,\n    required: true,\n    maxlength: [200, 'La descripcion no puede ser mayor de 200 caracteres']\n  }\n});\nmodule.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvTm90ZS5qcz9kMTNkIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIk5vdGVTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsIm1heGxlbmd0aCIsImRlc2NyaXB0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIk5vdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJRixRQUFRLENBQUNHLE1BQWIsQ0FBb0I7QUFDbkNDLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUVDLE1BREg7QUFFSEMsWUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLHlDQUFQLENBRlA7QUFHSEMsVUFBTSxFQUFFLElBSEw7QUFJSEMsYUFBUyxFQUFFLENBQUMsRUFBRCxFQUFLLDJEQUFMO0FBSlIsR0FENEI7QUFPbkNDLGFBQVcsRUFBRTtBQUNUTCxRQUFJLEVBQUVDLE1BREc7QUFFVEMsWUFBUSxFQUFFLElBRkQ7QUFHVEUsYUFBUyxFQUFFLENBQUMsR0FBRCxFQUFNLHFEQUFOO0FBSEY7QUFQc0IsQ0FBcEIsQ0FBbkI7QUFjQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixRQUFRLENBQUNhLE1BQVQsQ0FBZ0JDLElBQWhCLElBQXdCZCxRQUFRLENBQUNlLEtBQVQsQ0FBZSxNQUFmLEVBQXVCYixVQUF2QixDQUF6QyIsImZpbGUiOiIuL21vZGVscy9Ob3RlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgTm90ZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnSW50cm9kdXpjYSB1biBub21icmUgcGFyYSBsYSBub3RhL3RhcmVhJ10sXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzQwLCAnRWwgbm9tYnJlIGRlIGxhIHRhcmVhIG5vIHB1ZWRlIHNlciBtYXlvciBkZSA0MCBjYXJhY3RlcmVzJ11cclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsyMDAsICdMYSBkZXNjcmlwY2lvbiBubyBwdWVkZSBzZXIgbWF5b3IgZGUgMjAwIGNhcmFjdGVyZXMnXVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuTm90ZSB8fCBtb25nb29zZS5tb2RlbCgnTm90ZScsIE5vdGVTY2hlbWEpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/Note.js\n");

/***/ }),

/***/ "./pages/api/notes/index.js":
/*!**********************************!*\
  !*** ./pages/api/notes/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Note */ \"./models/Note.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Note__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      try {\n        const notes = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.find({});\n        res.status(200).json({\n          success: true,\n          data: notes\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'POST':\n      try {\n        const note = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);\n        res.status(201).json({\n          success: true,\n          data: note\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZXMvaW5kZXguanM/N2QxZSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJub3RlcyIsIk5vdGUiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJub3RlIiwiY3JlYXRlIiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLGdFQUFTO0FBRU0sc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNO0FBQUVDO0FBQUYsTUFBYUYsR0FBbkI7O0FBRUEsVUFBUUUsTUFBUjtBQUNJLFNBQUssS0FBTDtBQUNJLFVBQUk7QUFDQSxjQUFNQyxLQUFLLEdBQUcsTUFBTUMsbURBQUksQ0FBQ0MsSUFBTCxDQUFVLEVBQVYsQ0FBcEI7QUFFQUosV0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUVOO0FBQXZCLFNBQXJCO0FBQ0gsT0FKRCxDQUlFLE9BQU9PLEtBQVAsRUFBYztBQUNaVCxXQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDSDs7QUFDRDs7QUFDSixTQUFLLE1BQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUcsSUFBSSxHQUFHLE1BQU1QLG1EQUFJLENBQUNRLE1BQUwsQ0FBWVosR0FBRyxDQUFDYSxJQUFoQixDQUFuQjtBQUVBWixXQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRUU7QUFBdkIsU0FBckI7QUFDSCxPQUpELENBSUUsT0FBT0QsS0FBUCxFQUFjO0FBQ1pULFdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNIOztBQUNEOztBQUNKO0FBQ0lQLFNBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFyQlI7QUF1QkgsQ0ExQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbm90ZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdCc7XHJcbmltcG9ydCBOb3RlIGZyb20gJy4uLy4uLy4uL21vZGVscy9Ob3RlJztcclxuXHJcbmRiQ29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG5cclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gYXdhaXQgTm90ZS5maW5kKHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5vdGVzIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGF3YWl0IE5vdGUuY3JlYXRlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5vdGUgfSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/notes/index.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// Importamos mongoose\n //Creamos la constante de conexion\n\nconst connection = {}; //Conectamos a nuestra base de datos mediante MONGO_URI \n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://mario_dam20:morcilla1@cluster0.zlkyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  connection.isConnected = db.connections[0].readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0EsTUFBTUEsVUFBVSxHQUFHLEVBQW5CLEMsQ0FFQTs7QUFDQSxlQUFlQyxTQUFmLEdBQTJCO0FBQ3ZCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUN4QjtBQUNIOztBQUVELFFBQU1DLEVBQUUsR0FBRyxNQUFNQywrQ0FBUSxDQUFDQyxPQUFULENBQWlCQyw0R0FBakIsRUFBd0M7QUFDckRDLG1CQUFlLEVBQUUsSUFEb0M7QUFFckRDLHNCQUFrQixFQUFFO0FBRmlDLEdBQXhDLENBQWpCO0FBS0FSLFlBQVUsQ0FBQ0UsV0FBWCxHQUF5QkMsRUFBRSxDQUFDTSxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDSDs7QUFFY1Qsd0VBQWYiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSW1wb3J0YW1vcyBtb25nb29zZVxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuLy9DcmVhbW9zIGxhIGNvbnN0YW50ZSBkZSBjb25leGlvblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG4vL0NvbmVjdGFtb3MgYSBudWVzdHJhIGJhc2UgZGUgZGF0b3MgbWVkaWFudGUgTU9OR09fVVJJIFxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });