/**
 * ItemsController
 *
 * @description :: Server-side logic for managing Items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	// this method for call Items/index.ejs
	'index':function(req, res)
	{
		res.view();
	},

	// this method for Save records
	'saverec' :function(req, res, next)
	{
		Items.create(req.params.all(), function userCreated(err, user){
			if(err) return next(err);
			
			res.view();
			
		});
	},


	// this method for Display all record in Items/show
	'show': function(req, res, next){
		Items.find(function foundUser(err, users){
			if (err) return next(err);
			if (!users) return next();

			res.view({ 
				users: users
			});
 
		});
	},


	// this method for find record on given id in Items/viewrec
	'viewrec': function(req, res, next){
		Items.findOne(req.param('id'), function foundUser(err, user){
			if (err) return next(err);
			if (!user) return next();

			res.view({ 
				user: user
			});
 
		});
	},



	// this method for delete record on given id in Items/deleterec
	'deleterec': function(req, res, next){

		Items.destroy(req.param('id')).exec(function (err){
  				if (err) {
    				return res.negotiate(err);
  					}
  						sails.log('record have now been deleted, succesfully');
 				    return res.ok();
		});
	}

};

