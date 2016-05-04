/**
 * Created by peng on 16/5/2.
 */

var user = {
    insert:'INSERT INTO user(id, name, level) VALUES(0,?,?)',
    update:'update user set name=?, level=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};

module.exports = user;