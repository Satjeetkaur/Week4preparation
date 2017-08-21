/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'index':function(req, res)
	{
		res.view();
	},


	create :function(req, res, next)
	{
		Category.create(req.params.all(), function userCreated(err, user){
			if(err) return next(err);
			//res.json(user);

			res.redirect('/Category/show/?cid='+ user.cid);
		});
	},

	'show': function(req, res, next){
		Category.find(function foundUser(err, users){
			if (err) return next(err);
			if (!users) return next();

			//res.json(user);

			res.view({ 
				users: users
			});
			
			 //sails.log('Wow, there are %d users named Finn.  Check it out:', users.length, users);
 
		});
	},

	'viewrec': function(req, res, next){
		Category.findOne(req.param('id'), function foundUser(err, user){
			if (err) return next(err);
			if (!user) return next();

			//res.json(user);

			res.view({ 
				user: user
			});
			
			// sails.log('Wow, there are %d users named Finn.  Check it out:', user.length, user);
 
		});
	},

	'deleterec': function(req, res, next){

		Category.destroy(req.param('cid')).exec(function (err){
  				if (err) {
    				return res.negotiate(err);
  					}
  						sails.log('record have now been succesfully Deleted');
 				    return res.ok();
		});
	}
};

