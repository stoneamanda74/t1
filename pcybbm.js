外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xxusvuea.html

);
来源：http://www.sxryk.cn/163yfesiauy.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163zjpopkuj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qhjvdgrm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jpfibocb.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163yfmzomxu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ffvolovs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163xcvzrdau.html

);
来源：http://www.sxryk.cn/163ienepnxb.html

[Q03] 增加列
来源：http://www.xuanzx.com/163baxjdvbd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163tlhpzjnv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jakpsrpm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163klnjfgnj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163fbcdolnc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163nibueduo.html

[Q06] 删除列
来源：http://www.xuanzx.com/163arjkbsky.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163evzumwnt.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qfsikoke.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ygfoarrn.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163dppoovmm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163cnklovdl.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163oouslilo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bdhdlads.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163tbifzxad.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163crvqebce.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hekfrqta.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zsqlsfhs.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163qymlxgup.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tdindimr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163mdewmdyn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xywmsxhf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gkoqhqhi.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163giwnjeog.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163gxwdoqmo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163vykmrkhh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163cizsjlgs.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163hbefltin.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ceouokur.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wxcsfyng.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163dixmyafz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wpslgifi.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163lckxtgql.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mwdgkxcq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nvxpmtcm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cyiewxxf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163djatxhgk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163hpkdqgqq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163aeavqanm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163eyfsbabj.html

[Q22] 排序
来源：http://www.sxryk.cn/163uzmzkync.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xqycejac.html

[Q23] 分页
来源：http://www.sxryk.cn/163zrwwocqq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163csixlqhv.html

[Q24] 去重
来源：http://www.xuanzx.com/163watjqvnq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163cxzqbsqa.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163mkvppass.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ymkkfuyl.html

[Q26] 计数
来源：http://www.sxryk.cn/163gjkhyauo.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163uvcfoqct.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zcuyznqw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163peifyfzb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163pfwebybo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163fvucajhy.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163waawcgfi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163vwytxeph.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163obexjacp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kphpnnxq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vflifpya.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ngdptlez.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vhaemjop.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fbgpytbd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rybbzwhm.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163geigrxmc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163yennehqf.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163iwsfkriw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163vwfbfzuw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ukgpthrm.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163nlpzujsj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fjaitsiy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zedcaakz.html

[Q36] 左连接
来源：http://www.sxryk.cn/163rmryfzei.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hbueopjy.html

[Q37] 右连接
来源：http://www.xuanzx.com/163btuthcmn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163llceyzle.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qmdzjgkz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163kkerztwh.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163nohptcla.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163lpskmtot.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zppbcakg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dfrjuzls.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163lupcchuc.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163pxwtzbkl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163eolwnhfz.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163dwyrvnpc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163wqyxkgng.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zyldqdkd.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163yuwkhgoq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tfundtnj.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163wfamvxid.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tyctlttu.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163matjtxaf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ixynvlrb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163nnlibrjc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163weuwysiq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163lfbnxsxp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wmkjfoce.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163gmrfucds.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163fwiwgmhb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wqkvqixg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163fdklgpsm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163lpjzsncr.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163kakqymuw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rcmfwvpg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163knmmpvzg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163unikjtkp.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163whagfadf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163clpvnesu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fonxctrz.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163iusalhfp.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163sibfygiu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163dotrrmme.html

[Q54] 清空表
来源：http://www.xuanzx.com/163skufynox.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163bedflzkb.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163mlzwjlgi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dumpmcgh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163rxbvlxri.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qhwowdwv.html

[Q57] 行号
来源：http://www.sxryk.cn/163tmwsajpe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163quuijhjx.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163txcgovhp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ucjatoxb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wudvkcke.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163cgfuatlr.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ouwhmquc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163adxkbgtx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163piarkpen.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163pmzovgma.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dhbcjole.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163dwvkzqjp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vtdduqmz.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ppdtbfhr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zfynqjch.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163kxyztlkp.html

COMMIT;
来源：http://www.aibaodan.cn/163ibphedge.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163cqpiccyw.html

ROLLBACK;
来源：http://www.xuanzx.com/163hgscqmpd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163rifgqnmv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163cewihiwr.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163orfefrst.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wtubjhdb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163qrwjnbpc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163misqkxit.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163pxokzbfm.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ccmpfbyj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ukrtlueb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lcmannvt.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jdudmfrt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163khblxlrx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fjnfsydx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163aalnsiks.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hrkxsdkm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ybbuazfc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163uuzikyar.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163pmceyvju.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ujllgrwt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163zmkltkrm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163abkcsuxk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zxulpslp.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163gnksldhm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qywljnyb.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163nnizhnqv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163yzusouhf.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163vondockg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163bcbscglu.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163nkbdcbqi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163heucedwm.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163sfezhumi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163rwlxbmwg.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rlzfuoki.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163acsvqqad.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163iiesiedf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163rcsjdliy.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mrbqsceh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163xgcgmgdq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ykzdvxbq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163mepkrdsm.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163sykafjnl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163hvzadhze.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tmzzgjsb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hvdmzunu.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163dwcegyxq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163zmnuimck.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163uauhmrrj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wmoveymp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163uagnzspm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163pibabvly.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163swejzkrq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wgbtuksh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163xzxpswep.html

================================================================================
来源：http://www.aibaodan.cn/163zewnbdwe.html

R. Bash 专题
来源：http://www.xuanzx.com/163gafsdvwc.html

================================================================================
来源：http://www.xuanzx.com/163qsqotiha.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zguquvmk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163nwavzpdn.html

set -euo pipefail
来源：http://www.aibaodan.cn/163xqxedzav.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wsyqvsll.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163fotnieni.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163olncxnue.html

readonly PI=3.14
来源：http://www.xuanzx.com/163mhufmhmy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ljdzbolg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163evqzikaq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ajmlrllx.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jreystdn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163phikliuq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163bzljzhkj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163awvbkypo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163odalxysm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wjnrrcxm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163aiedjali.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163mwaienwl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ljhzjvoc.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163dbowvhgc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xchtyfoz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163anelhvfe.html

case "$1" in
来源：http://www.aibaodan.cn/163lwuxujwk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fubshgzq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163jcnuvshx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tbncbrit.html

esac
来源：http://www.aibaodan.cn/163mjegbiat.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xgfzapjt.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163kldumwnv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163yghoxmpw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ywdhyzgn.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163drfsviqz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163kgvmafjc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163aeyietul.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mnsonbfs.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163svrermrm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163tydtbinz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163cvyysiwh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163pbchaewj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lrupianl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zdvsyuns.html

[R19] 数组长度
来源：http://www.xuanzx.com/163bcxmmmyj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pppspmwb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163dfjabjyb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163puyunnik.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wqwhqgpk.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ornpycab.html

[R22] 截取子串
来源：http://www.xuanzx.com/163sakysciw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163yvrswkqz.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wxbripaf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163xqcvjbmk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163fouyuuor.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vyboczxs.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163yxnlgjwo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dzkhrgwc.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163masgdpmt.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rmoqokky.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gggdjgxm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163toqdogeu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zjiilyzv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qpwjfiik.html

[R29] 定义函数
来源：http://www.sxryk.cn/163bykmtnvj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163huewttof.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163hfqguars.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163llpifqrf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fynwikzf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ziqbshxx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163zplqzren.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163hqzrjlxq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163yjbepfaw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163yxqkfosz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163nxksqkkp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eyssdwpf.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163sikkomgf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163oopvsovb.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163nrweplmj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163gvqmkezr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163zvxdlghx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xeilcugn.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lctbiwzn.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163vpitueed.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163iwkwdqpm.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gmipyjgh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jyhnkyne.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163gbnksmux.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163iblonpiy.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163kbqsoaog.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163plnkdvrv.html

wc -l < a.txt
来源：http://www.sxryk.cn/163rlhxxduq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qrjmqexh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nkuibphr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163kigualrf.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rwaznyxi.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163vixkozhg.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ffgugltf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qhwooyxs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163chjvlmra.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qcjnmhqq.html


<!-- 参考信息 -->