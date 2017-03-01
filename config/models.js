/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  // connection: 'localDiskDb',

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
   migrate: 'alter',

  /***************************************************************************
   *                                                                         *
   * autoUpdatedAt                                                           *
   *                                                                         *
   * If set to false, this disables the automatic definition of an updatedAt *
   * attribute in your model. By default, updatedAt is an attribute which    *
   * will be automatically set with the current (timezone-agnostic)          *
   * timestamp every time a record is updated. If set to a string,           *
   * that string will be used as the custom field/column name for the        *
   * updatedAt attribute.                                                    *
   *                                                                          *
   ***************************************************************************/


   autoUpdatedAt: true,

  /***************************************************************************
   *                                                                         *
   * autoCreatedAt                                                           *
   *                                                                         *
   * If set to false, this disables the automatic definition of a createdAt  *
   * attribute in your model. By default, createdAt is an attribute which    *
   * will be automatically set when a record is created with the current     *
   * (timezone-agnostic) timestamp. If set to a string, that string will     *
   * be used as the custom field/column name for the createdAt attribute     *
   *                                                                         *
   ***************************************************************************/
   autoCreatedAt: true

};
