// Generated on 2013-08-02 using generator-bootstrap3-less 3.0.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0',
      },
      dev: {
        options:{
          base: 'app'
        }
      },
      dist: {
        options: {
          base: 'dist'
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    less: {
      dev: {
        options: {
          paths: ["app/less/sections/", "app/less/core", "app/less/layout"]
        },
        files: {
          "app/styles/main.css": "app/less/main.less"
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,txt,html}',
            '.htaccess',
            'images/**/*',
            'fonts/**/*'
          ]
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>/bower_components/bootstrap-glyphicons/fonts',
          src: ['*'],
          dest: '<%= yeoman.dist %>/fonts'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>/bower_components/bootstrap/dist/js/',
          dest: '<%= yeoman.dist %>/scripts/lib/',
          src: 'bootstrap.min.js'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>/bower_components/jquery/',
          dest: '<%= yeoman.dist %>/scripts/lib/',
          src: 'jquery.min.js'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>/bower_components/flextslider/',
          dest: '<%= yeoman.dist %>/scripts/lib/',
          src: 'jquery.flexslider-min.js'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>/bower_components/modernizr/',
          dest: '<%= yeoman.dist %>/scripts/lib/',
          src: 'modernizr.js'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>/scripts/lib',
          src: ['*'],
          dest: '<%= yeoman.dist %>/scripts/lib'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>/admin',
          src: ['**/*'],
          dest: '<%= yeoman.dist %>/admin'
        }]
      }
    },
    uglify: {
      prod: {
        files: {
          'dist/scripts/main.min.js': ['app/scripts/main.js']
        }
      }
    },
    jade: {
      dev: {
        options: {
          pretty: true,
          data: {
            dev: true
          }
        },
        files: [{
          expand: true,
          cwd: 'app/templates',
          src: '*.jade',
          dest: 'app/',
          ext: '.html'
        }]
      },
      prod: {
        options: {
          pretty: true,
          data: {
            dev: false
          }
        },
        files: [{
          expand: true,
          cwd: 'app/templates',
          src: '*.jade',
          dest: 'dist/',
          ext: '.html'
        }]
      }
    },
    'ftp-deploy': {
      build: {
        auth: {
          host: 'boyanyordanov.com',
          port: 21,
          authKey: 'andrew-key'
        },
        src: 'dist',
        dest: '/',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
      },
      js: {
        auth: {
          host: 'boyanyordanov.com',
          port: 21,
          authKey: 'andrew-key'
        },
        src: 'dist/scripts',
        dest: '/scripts',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
      },
      images: {
        auth: {
          host: 'boyanyordanov.com',
          port: 21,
          authKey: 'andrew-key'
        },
        src: 'dist/images',
        dest: '/images',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
      },
      css: {
        auth: {
          host: 'boyanyordanov.com',
          port: 21,
          authKey: 'andrew-key'
        },
        src: 'dist/styles',
        dest: '/styles',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
      },
      fonts: {
        auth: {
          host: 'boyanyordanov.com',
          port: 21,
          authKey: 'andrew-key'
        },
        src: 'dist/fonts',
        dest: '/fonts',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
      },
      pages: {
        auth: {
          host: 'boyanyordanov.com',
          port: 21,
          authKey: 'andrew-key'
        },
        src: 'dist/',
        dest: '/',
        exclusions: ['admin', 'styles', 'fonts', 'scripts', 'images', 'dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
      },
      admin: {
        auth: {
          host: 'boyanyordanov.com',
          port: 21,
          authKey: 'andrew-key'
        },
        src: 'dist/admin/',
        dest: '/admin',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
      }
    },
    watch: {
      html: {
        files: 'app/*.html',
        options: {
          livereload: true
        }  
      },
      jade: {
        files: 'app/templates/**/*.jade',
        tasks: ['jade:dev']
      },
      less: {
        files: 'app/**/*.less',
        tasks: ['less'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'app/scripts/**/*.js',
        tasks: ['uglify'],
        options: {
          liverelaod: true
        }
      }
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'connect:dev',
      'jade:dev',
      'less',
      'uglify',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'jade:prod',
    'less',
    'uglify',
    'cssmin',
    'copy'
  ]);

  grunt.registerTask('deploy', function(target) {
    grunt.task.run('build');
    
    if (target) {
      grunt.task.run(['ftp-deploy:' + target]);
    } else {
      grunt.task.run(['ftp-deploy:build']);
    }    
  });

  grunt.registerTask('default', [
    'build'
  ]);
};
