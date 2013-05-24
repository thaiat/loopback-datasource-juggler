var ModelBuilder = require('../../jugglingdb').ModelBuilder;
var modelBuilder = new ModelBuilder();
// define models
var Post = modelBuilder.define('Post', {
    title:     { type: String, length: 255 },
    content:   { type: ModelBuilder.Text },
    date:      { type: Date,    default: function () { return new Date;} },
    timestamp: { type: Number,  default: Date.now },
    published: { type: Boolean, default: false, index: true }
});

// simplier way to describe model
var User = modelBuilder.define('User', {
    name:         String,
    bio:          ModelBuilder.Text,
    approved:     Boolean,
    joinedAt:     Date,
    age:          Number
});

var Group = modelBuilder.define('Group', {name: String});

// define any custom method
User.prototype.getNameAndAge = function () {
    return this.name + ', ' + this.age;
};

var user = new User({name: 'Joe'});
console.log(user);

console.log(modelBuilder.models);
console.log(modelBuilder.definitions);



