"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

Object.defineProperty(exports, "__esModule", {value: true});
exports.extractMetadata = void 0;
const node_webpmux_1 = require("node-webpmux");
 
const extractMetadata = (image) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const img = new node_webpmux_1.Image();
    yield img.load(image);
    const exif = (_b = (_a = img.exif) === null || _a === void 0 ? void 0 : _a.toString('utf-8')) !== null && _b !== void 0 ? _b : '{}';
    return JSON.parse((_c = exif.substring(exif.indexOf('{'), exif.lastIndexOf('}') + 1)) !== null && _c !== void 0 ? _c : '{}');
});

/* =========>
  * Para executar a função fora do arquivo lembre-se de seguir com as diretrizes do async, para ter um código funcional, desde já agradeço sua compreensão caro usuário! 👊🏻 
  * O 'extractMetadata' foi extraída do módulo 'wa-sticker-formatter', está disponível no NPM, preferi extrair do que usar o módulo, por motivos que usa o sharp como dependência e nem todos os usuários tem um Computador ou condições de rodar em uma host...
  * Tenha uma boa utilização, caso der algum erro na execução verifique o módulo se foi atualizado ou não e pegue o arquivo...
 <========= */
    
module.exports = {
    extractMetadata
};