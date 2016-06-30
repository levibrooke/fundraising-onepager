(function() {
    var feed = new Instafeed({
        get: 'user',
        userId: 31176171,
        accessToken: '31176171.467ede5.37d25e0a43ca4bc381f25fc96868710a',
        limit: 3,
        sortBy: 'most-recent',
        links: true,
        resolution: 'low_resolution',
        target: 'instafeed',
        template: '<div class="col-xs-12 col-sm-6 col-md-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></div></div></div>'
    });
    feed.run();
});