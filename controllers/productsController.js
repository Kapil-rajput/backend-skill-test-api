module.exports.create = function (req,res) {
    res.send("Create a post")
}
module.exports.display = function (req, res) {
    res.send("Display all post");
};
module.exports.delete = function (req, res) {
    res.send("delete post");
};
module.exports.update = function (req, res) {
    res.send("Update post");
};