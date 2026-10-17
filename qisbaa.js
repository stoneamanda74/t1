外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163mcajguvx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163zogobofd.html

================================================================================
来源：http://www.xuanzx.com/163hjplwhiz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163wemlpabx.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nyjefudk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ccpbmysj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jfgdwdzr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ztqukoxe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163uafscdvb.html

);
来源：http://www.aibaodan.cn/163ujmbanxp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163zcumhoqv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163fqsbsnle.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kjfwvrzf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163drfdgqpu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163prcsgjms.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ucxsegib.html

);
来源：http://www.xuanzx.com/163gecbdpyz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163jtmiwzwl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163muczpugr.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xunnjhqs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163btfizazd.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163otdltthq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163arqdiril.html

[Q06] 删除列
来源：http://www.xuanzx.com/163jnqqtcir.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163izkeftrm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ddyjtnfp.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163lmswliue.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163xuwkwcjv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hczhmfbb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163yhvnsvbu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ipdunosl.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163qhtnwtaw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163geqskqwr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xmogyngq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ldiaxamx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163hlfupoem.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163bkvxgjrn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wbtuoknp.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ssyjeuox.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ertjlhhz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163libfhxjl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163xwoimync.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163smsgphrw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dcplttyo.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163oaqjyjjo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hrafjywx.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163dpdpgjjg.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163zujftjxp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mwmjzxvl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rtplatvl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163plcdodhu.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cybhxndi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163uqipceob.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kvaargla.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ytaijokv.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xgrmyjep.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163gidxaqpm.html

[Q22] 排序
来源：http://www.xuanzx.com/163smtduvwr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163qyzwsspc.html

[Q23] 分页
来源：http://www.sxryk.cn/163dbdkzvyb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163wdleexfw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ujoulgpl.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163pcqpoisz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163vdxudrvc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163uuspykyl.html

[Q26] 计数
来源：http://www.xuanzx.com/163wcobbofd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163lpkuiuxe.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163drdsfske.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163kgxnssgb.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163joifgvbp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jtxuigch.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163estrnfdv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gcuucffz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163tdvajbnf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163izumqgph.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163srbifbag.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163wavnfgbc.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163pdmfodhq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163thmkycnd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163iaqkrcjw.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163yzzwxguw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163xvbwttoa.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163pjpcgeyn.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163arqmdbnt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163grxequfl.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163iiirpqzb.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jtdfsvop.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ithyugss.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fghcgcgp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163awnasgal.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tudrcuru.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163anxrsdps.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163yxypqkeq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163lkojuoog.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163myjywkvm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163nqpbnaya.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163choqhpec.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163jmnertxc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ulwmqwmx.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163jnqocpll.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hjydcsda.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cvypwvdj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163kfqqpgjg.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ubgcvcht.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163pbinncwd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163jnahyeby.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163npfqxgqa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163jalkcnvx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163dvnggocs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163jzjbiknx.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163cwcjesuu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163knzemvmf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163pywszfrr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163atotpgot.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163cteczmcg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163xhqymkap.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163aotktozx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163scgnwzwu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163zhsdifck.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163gdpdgxjl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dlxgjrbb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lfnszhql.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lshtxkqr.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163mjgoltqt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ucrjsxlk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163rugxgrrl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163dzfopuff.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tmtligoz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163tkrskoon.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163sboefugw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163uhpxkord.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163bqzhnbzb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163vwfkjnnk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pdoxvjmo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kzokhevo.html

[Q57] 行号
来源：http://www.xuanzx.com/163hqltnbdw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163gmpyaily.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163kvsqzogb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163cvokvrtd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jssnqxzu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163klanxjgk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163rvyuhcdh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lrmzqcju.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rqbbvffs.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fxuixdla.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163jixjplfl.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kubcgtue.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lwtvmnsd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163utyotbhc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fjcahqbq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ptcfpjup.html

COMMIT;
来源：http://www.xuanzx.com/163iwzzjvrd.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163bpitopyv.html

ROLLBACK;
来源：http://www.aibaodan.cn/163hhevlgfm.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163crcaxbml.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jphbvvfb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bxzuvsra.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zndmmsxn.html

[Q68] 保存点
来源：http://www.xuanzx.com/163llqyrllp.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163kukuwiba.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qgopvthn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zrnkyepf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163nbcpygub.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163irqxajij.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163envgqzqs.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ccfeufyb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163dwkeumua.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pesronbm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hgkwwarn.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qpdcbnvh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zlgysuic.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163nxupwmbm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163wirpbcus.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163dccbcgrh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163rsrpvjzy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163yotkckgr.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163guthcaqy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163aumybjcw.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ybjqryyh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qygaeler.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lbjtiotw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hiidgbdd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163carhgnbx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163bbgvwayv.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vtxlebyi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163acheonpm.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163iuxldwil.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163nfmbrkag.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gjqzvleo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163amuzrkfg.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tcqbnqrm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163iwreonzl.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163uwfkrfka.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163kjtuvmsi.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163hysehtqq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163kkajvdfl.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163sjfvmqzo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163irndiuun.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163kbyltlky.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163szrpjrxz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zvajhpxi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kxnxwlqp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163kcdzdepr.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163vmyrvdaw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mgmsvhsy.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163nncebguy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163quzujsxh.html

================================================================================
来源：http://www.sxryk.cn/163zxvzhdzc.html

R. Bash 专题
来源：http://www.xuanzx.com/163kqiqrbrw.html

================================================================================
来源：http://www.aibaodan.cn/163kjbwtacu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vsuwgnkg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163gqjnaatn.html

set -euo pipefail
来源：http://www.sxryk.cn/163xbwssazq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163hbgdwjqs.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163lwiqzira.html

[R03] 只读变量
来源：http://www.sxryk.cn/163xsekknyb.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dobnmeer.html

[R04] 位置参数
来源：http://www.sxryk.cn/163zjpvdtdp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163wsvugssj.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vadwsuxi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lviocajz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163mnipmepw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163gkkdfvan.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163tudkzhjm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vhpqiaiz.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ohushbpz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163uzurxbql.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163oqbjszmd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163onmbfbco.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uijixcfw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vjjsvhfa.html

[R11] case 多分支
来源：http://www.xuanzx.com/163hltzdtnr.html

case "$1" in
来源：http://www.xuanzx.com/163etqkxzbm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163uluujmoq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163hpmcpknc.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163zrboewqg.html

esac
来源：http://www.xuanzx.com/163ahtrcmpn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163rxbacmzi.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rbzmnuft.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163npgcsppg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xyhspsdo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qbfppdqu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ksuffvhc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tjolysyk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gpxetuij.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xcxudhym.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163scspmize.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ogkyinrt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163segafafn.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163dmpumppw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lzxdqwys.html

[R19] 数组长度
来源：http://www.sxryk.cn/163oaffjcwn.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163epqqyyxi.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qqsmyqza.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vxixccqm.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163gsimsenp.html

echo "${#s}"
来源：http://www.aibaodan.cn/163esvacmaq.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163nvjnreys.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cyfpsyie.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ygicxvln.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163exsruqtr.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ubopgdyt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ehuwctau.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hvknciym.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163htbyfjyz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ckueuvcl.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jgwdlfsd.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163jrgirknk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dvgknzyz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ciqydsvu.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163nlpodbvu.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zseaizki.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jlaylknx.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ivlgyntq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xjwvrtmr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163mencyita.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dylaknky.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163kbpfxxzp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163rdfcgrsl.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bhlmzmvq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163cqcsnkrh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163dmjkudhe.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qtmjtrme.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163sjuymflw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163agikxzuk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ueywztdv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zfexkswe.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163adlpirme.html

files=$(ls -1)
来源：http://www.xuanzx.com/163owgbkyja.html

[R38] 管道串联
来源：http://www.sxryk.cn/163soatwzoe.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163iephjcqq.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hhkstrkp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163zqwglygs.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hhnnwecl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lnzvmdfg.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ockmvbbf.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jruaayng.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dztsyvqq.html

wc -l < a.txt
来源：http://www.xuanzx.com/163plfamsio.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163jparwfut.html


<!-- 参考信息 -->