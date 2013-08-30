'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var StaticPrototypeGenerator = module.exports = function StaticPrototypeGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(StaticPrototypeGenerator, yeoman.generators.Base);

StaticPrototypeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Would you mind telling me the name of the project?',
      default: 'Awesome template'
    },
    {
      type: 'input',
      name: 'authorName',
      message: 'Would you mind telling me your name?'
    },
    {
      type: 'input',
      name: 'authorEmail',
      message: 'Would you mind telling me your email?'
    }
  ];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.authorName = props.authorName;
    this.authorEmail = props.authorEmail;

    cb();
  }.bind(this));
};

StaticPrototypeGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/fonts');
  this.mkdir('app/images');
  this.mkdir('app/less');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/templates');

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
};

StaticPrototypeGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
  this.copy('favicon.ico', 'favicon.ico');
  this.copy('robots.txt', 'robots.txt');

  this.copy('Gruntfile.js', 'Gruntfile.js');
};
