angular.module('FriendsCtrls', []).controller('FriendCtrl', ['$scope', function($scope) {
    $scope.friends = [
        {
            name: "Monica Gellar",
            job: "Head Chef",
            quote: "Not just clean, 'Monica clean.'",
            img: "http://images5.fanpop.com/image/photos/25900000/Monica-Geller-monica-geller-25963712-1019-1280.jpg"
        },
        {
            name: "Rachel Green",
            job: "Buyer",
            quote: "Isn't that just kick-you-in-the-crotch, spit-on-your-neck fantastic?",
            img: "http://coolspotters.com/files/photos/1068151/rachel-green-profile.jpg"
        },
        {
            name: "Phoebe Buffay",
            job: "Masseuse",
            quote: "I wish I could, but I don't want to.",
            img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg"
        },
        {
            name: "Ross Gellar",
            job: "Paleontologist",
            quote: "I can't get enough of dinosaurs!",
            img: "http://vignette2.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg/revision/latest?cb=20100606065642"
        },
        {
            name: "Chandler Bing",
            job: "Transponster",
            quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?",
            img: "https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg"
        },
        {
            name: "Joey Tribbiani",
            job: "Dr. Drake Ramore",
            quote: "Joey doesn't share food!",
            img: "http://www.davespechtmotor.com/Friends/Pictures/Joey%20after.jpg"
        },
    ];
}]);