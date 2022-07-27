module.exports=mongoose=>{
    var schema = mongoose.Schema(
        {
        firstName: String,
        lastName: String,
        email: String,
        job: String,
        age: Number,
        },
        { timestamps: true }
        );
        schema.method("toJSON", function() {
            const { __v, _id, ...object } = this.toObject();
object.id = _id;
return object;
});
const User = mongoose.model("user", schema);
return User;
};
