import gulp from 'gulp';
import webpack from 'webpack-stream';
import { deleteAsync } from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const scssPlugin = gulpSass(dartSass);
import sourcemaps from "gulp-sourcemaps";
import browserSync from 'browser-sync';

// Пути к файлам
const paths = {
    html: {
        src: 'src/index.html',
        dest: 'dist/'
    },
    js: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/img/**/*.{jpg,jpeg,png,gif}',
        dest: 'dist/img/'
    },
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    static: {
        src: 'src/fonts/**/*.*',
        dest: 'dist/fonts/'
    }
};

// Очистка папки dist
function clean() {
    return deleteAsync(['dist']);
}

// Сборка JavaScript с Webpack
function scripts() {
    return gulp.src(paths.js.src)
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'bundle.js',
            },
            devtool: 'source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream());
}

// Копирование HTML
function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// Минификация изображений
function images() {
    // Можно добавить минификацию
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest))
}

// Копирование файлов без изменений
function staticFiles() {
    return gulp.src(paths.static.src)
        .pipe(gulp.dest(paths.static.dest))
}

// Компиляция SCSS в CSS
function styles() {
    return gulp.src(paths.styles.src, { sourcemaps: true })
        // инициализация sourcemaps перед компиляцией SCSS
        .pipe(sourcemaps.init())
        // Компиляция
        .pipe(scssPlugin({
            outputStyle: "expanded"
        }))
        // записываем sourcemaps в тот же каталог, что и скомпилированный файл
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Слежение за изменениями и запуск BrowserSync
function serve() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch(paths.html.src, html);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.styles.src, styles);
}

// Набор задач
export const build = gulp.series(clean, gulp.parallel(html, scripts, images, styles, staticFiles));
export const dev = gulp.series(build, serve);
