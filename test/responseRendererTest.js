var assert = require("assert");
var renderer = require("../responseRenderer.js")

describe('ResponseRenderer', function(){
    it('should return an object with a response field in it', function(){
      assert.deepEqual({response:1}, renderer.render(1));
    })

    it('should return an object with a response field in it with an array', function(){
      assert.deepEqual({response:[1,2,3,4]}, renderer.render([1,2,3,4]));
    })
})