module.exports = {

findRecipe: function(recipeId, userGlazes) {
    for (var i = 0; i < userGlazes.length; i++) {
      if(userGlazes[i]['_id'] == recipeId) {
        var index = i;
      };
    };
    return userGlazes[index];
  },



}
