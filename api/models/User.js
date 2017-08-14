/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
 
	title:
	{
	type: 'string',
	required: true
	},

	releasedate: {
	type:'string',
	required: true
	},

	Duration:
	{
		type: 'string',
		required: true
	},

	Genre:
	{
		type: 'string',
		required: true
	},
	Synopsis:
	{
		type: 'string',
		required: true
	}

	}
};

