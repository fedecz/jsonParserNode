var assert = require("assert");
var parser = require("../showParser.js")

describe('ShowParser', function(){
    it('should return an empty array if given an empty array', function(){
      assert.equal(0, parser.getShows([]).length);
    })

    it('should return an empty array if given an undefined array', function(){
      assert.equal(0, parser.getShows(undefined).length);
    })
  

    it('should return just one show when drm is true and episode count > 0', function(){
    	var shows = [
    	{
            drm: true,
            episodeCount: 3,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show1"
            },
            slug: "show1",
            title: "show1"
        },
    	{
            drm: true,
            episodeCount: 0,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show2"
            },
            slug: "show2",
            title: "show2"
        },
    	{
            drm: false,
            episodeCount: 3,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show3"
            },
            slug: "show3",
            title: "show3"
        },
    	{
            drm: false,
            episodeCount: 0,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show4"
            },
            slug: "show4",
            title: "show4"
        },
        {
            slug: "show5",
            title: "show5"
        }]
      	assert.equal(1, parser.getShows(shows).length);
    })

  
    it('should return a show with the title extracted', function(){
      assert.equal("showA", parser.getShows([{
            drm: true,
            episodeCount: 3,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show3"
            },
            slug: "show3",
            title: "showA"
        }])[0].title);
    })

    it('should return a show with the slug extracted', function(){
      assert.equal("show3", parser.getShows([{
            drm: true,
            episodeCount: 3,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show3"
            },
            slug: "show3",
            title: "showA"
        }])[0].slug);
    })

    it('should return a show with the image extracted', function(){
      assert.equal("http://catchup.ninemsn.com.au/img/jump-in/shows/show3", parser.getShows([{
            drm: true,
            episodeCount: 3,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show3"
            },
            slug: "show3",
            title: "showA"
        }])[0].image);
    })  

    it('should return an empty title if the original doesnt have one', function(){
      assert.equal("", parser.getShows([{
            drm: true,
            episodeCount: 3,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show3"
            },
            slug: "show3"
        }])[0].title);
    })

    it('should return an empty image if the original image doesnt have an url', function(){
      assert.equal("", parser.getShows([{
            drm: true,
            episodeCount: 3,
            image: {},
            slug: "show3"
        }])[0].image);
    })

    it('should return an empty image if the original image doesnt have an url', function(){
      assert.equal("", parser.getShows([{
            drm: true,
            episodeCount: 3,
            slug: "show3"
        }])[0].image);
    })

	it('should return an empty slug if the original doesnt have one', function(){
      assert.equal("", parser.getShows([{
            drm: true,
            episodeCount: 3,
            image: {
                showImage: "http://catchup.ninemsn.com.au/img/jump-in/shows/show3"
            }
        }])[0].slug);
    })
})