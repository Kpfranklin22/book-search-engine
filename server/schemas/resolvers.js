
const resolvers = {
  Query: {
    fun:()=>{
        return "Hello"
    },
   getSingleUser: async(parent, args, context) {
        const foundUser = await User.findOne({_id: context.user._id });
    
        if (!foundUser) {
            //throw apollo error
        }
    
        return foundUser
      },
  },

  Mutation: {
   cool: ()=> {
    return 10
   }
  },
};

module.exports = resolvers;
