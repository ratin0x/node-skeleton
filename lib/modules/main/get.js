module.exports = function (request, reply) {
    var context = {
        pageTitle: 'Get'
    };

    var hash = request.params.hash;

    if ( typeof hash === 'undefined' || hash === null ) {
        reply({ "Error": "Problem with hash"});
    } else {
        reply("OK");
    }

};
