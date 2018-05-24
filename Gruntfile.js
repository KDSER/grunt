module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			build: {
				src: ["script/zepto.js","script/router.js","script/api.js","script/zepto-adapter.js","script/jweixin-1.3.0.js","script/iscroll-probe.min.js","script/template.js","script/swiper.min.js","script/app.js","script/lib/*.js"],
				dest: "<%= pkg.name %>.build.js"
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			bulid: {
			  // 动态文件映射，
			  // 当任务运行时会自动在 "lib/" 目录下查找 "**/*.js" 并构建文件映射，
			  // 添加或删除文件时不需要更新 Gruntfile。
			  files: [
				{
					"<%= pkg.name %>.js": ['<%= concat.build.dest %>']
				}
			  ]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat','uglify']);
};