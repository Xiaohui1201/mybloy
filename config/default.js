/**
 *
 * Project:myblog
 * file name:default
 * Created by xiaohui on 2017/3/12
 * Email:a6551142@163.com
 *
 */
module.exports = {
    port: 3000,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/myblog'
};
