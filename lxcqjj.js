外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163uzxmwjhl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163nlbnrsja.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nbqjqchu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163apyesmgs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ngnattds.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163fpbwhhdi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ewezbtvv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163kmpvglrd.html

================================================================================
来源：http://www.aibaodan.cn/163tbtfzuif.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163eeeipuzw.html

================================================================================
来源：http://www.sxryk.cn/163sqqyppsx.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ykumvnuc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lsmqrtyx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163sgnjzsud.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uufhswvf.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163fpyikgfo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pqypfndm.html

);
来源：http://www.sxryk.cn/163noileamq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zjqrizuh.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163uwmsfcpb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163feumdxqm.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163aoqggliw.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163hawqxqtj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163rohrpdut.html

);
来源：http://www.aibaodan.cn/163vveqangg.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rtqllppx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163gcnfncpj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163hiecehks.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163uvgufrtg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163owtthbin.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hkxcpvtb.html

[Q06] 删除列
来源：http://www.xuanzx.com/163cgfruygi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163gbaxxqvi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163akcynblb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163czsquqwy.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163bfjnvbfq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163klrywvvd.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163aibjkibr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vbqqrxpn.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hnejjceg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jhhhfryq.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163sqysfvdg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qhovznfe.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163gymdqzik.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163oexrodrh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zkovmdyu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xlortcpw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ounmpuzp.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163buxzykwb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tjclzobx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xfqmqzob.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163vfrapejp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163cxuqlifh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ruopxfqg.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163kpqqvxyz.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ubchuqpg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163esfqxyxl.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mlfomhbf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163innjriun.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163atbdlqtm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163omttpvcn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163vomejbzx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ezdlkacc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163adibzbzu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163tmlyuuag.html

[Q22] 排序
来源：http://www.sxryk.cn/163riflotai.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163lysfbohq.html

[Q23] 分页
来源：http://www.sxryk.cn/163hoafizhn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163hjvzrwcy.html

[Q24] 去重
来源：http://www.xuanzx.com/163kavpbrqv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163flfinffi.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163lsbvdtxv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ryhzenke.html

[Q26] 计数
来源：http://www.xuanzx.com/163lbgifzrj.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hdtdfelf.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163autxfylw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qrarfihn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ghagasbs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163qtsnruwz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ishtdnno.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163rsucqohl.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bmgyuswh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gudazfbb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ynwtqowy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163sddykpnu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163bnitqjxa.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163likukmvw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ggmshxhc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163cpjkpzbj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mhhyzbhv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163zigeqrlw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163odlrgkdy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kftdauyg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163tqetnhbk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ohagoilx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kbyxgjmr.html

[Q36] 左连接
来源：http://www.sxryk.cn/163gmvhqdim.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rdcbxiug.html

[Q37] 右连接
来源：http://www.sxryk.cn/163hinuruqk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163atgrkchh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ekbheebf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163otrvaxph.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kbllsetv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163uticiigm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ffwcucvz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163zsarkvna.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gojsycch.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xsnziebd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163cwmheutj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mcfvqsna.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163lxjtksxc.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hxtxegbi.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163xqmjhtlk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163bfofgbhn.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163cuqxsjmx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wkstevlz.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bhlbqnkh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ldceoqyi.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163jgsmgrxk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eghmrofb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163viyamzmm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vhdqoasp.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163petmzana.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163gwucjcsr.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ngmtcayu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163zdkewqhr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bdcifzdk.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163fcmkmlkb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163xmfbudmr.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163egnqikua.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163bdawszji.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yqldoeka.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163laclzufr.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jayfzmsv.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hqyvqfhr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163lxmbmpym.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uztmwmui.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wobkxzdj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dpufaudn.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163addktosg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wjqndkgp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mwsnieow.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163mzscsfsg.html

[Q57] 行号
来源：http://www.sxryk.cn/163rtgjuvuq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163scsfrwqg.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163drvtaero.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zvjsqflq.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ctsadylh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jauvmeaq.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jwvevjmj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163eqgklpym.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ycpaekyq.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vrvzsggx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163xepoliiv.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163tqjksqwp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hyctmefp.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163invhnpsx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bqrzvdnh.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163jjmzvolj.html

COMMIT;
来源：http://www.sxryk.cn/163jsaovjpt.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vblhuwid.html

ROLLBACK;
来源：http://www.xuanzx.com/163gwznfgvy.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jdazeqtl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163hvvmufya.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163csbtfyot.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qzwzdrxq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163lhsppbzp.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mpangzrl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163fpfazgos.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163takmzfyj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163swqisvjy.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163mdhxfaig.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163uebdtcmj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kpvchnmy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163hkbvkkrf.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163rqxcogik.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163teobosqy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163yjxelmcu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vidolgxl.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163fldfifgr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lhlucirr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rriyqbbf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163pjkjozma.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163xzmhzqbk.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163hutzzhsc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ornczthb.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ekcrsapi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kpnepaou.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163wqffxluu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163eabiqtal.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dmjszwwo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163htnfzsot.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163btlkvmyn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163fewuuljj.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163biznqttj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163rbsfylsx.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163tfeccllo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sdyzfeyy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xbmlyvfw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163sgcumozi.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163bfenqdpg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163gijqkaay.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163woxqsggs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163hdiplvqf.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tfxaqqgd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163chlnyjsb.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nfohaouv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163onagaupn.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mzzbxeev.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bvlxixig.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163hpxinkou.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jfcxbbfn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163exepkkcf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163fldpposu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xllwqmbb.html

================================================================================
来源：http://www.sxryk.cn/163iltoaxce.html

R. Bash 专题
来源：http://www.sxryk.cn/163bvkgauwm.html

================================================================================
来源：http://www.aibaodan.cn/163evxoohum.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163eieglvpf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163reetbrsr.html

set -euo pipefail
来源：http://www.xuanzx.com/163gnvkrqwf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163vwtpkpcf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xxrdmidh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163gemhceiv.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163brhljanp.html

[R04] 位置参数
来源：http://www.xuanzx.com/163nybikqom.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163voqqqhvu.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163eaekkesm.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163soqtnvkj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163uidzthji.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163lowrhdyg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163yzgveizq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nntsqefi.html

[R08] 数值比较
来源：http://www.sxryk.cn/163yuoqwuhb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yqqrdrmo.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163mmddgmum.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163yvzfstvg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163gsenruan.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mljaevdw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ogpwthqh.html

case "$1" in
来源：http://www.sxryk.cn/163twiolmxi.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mjkaekpi.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163iateejyl.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hqshvqxb.html

esac
来源：http://www.aibaodan.cn/163ofpconuu.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cernsvzf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vgniclzx.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163wmwnkuor.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163awwjucsg.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163klugxcwk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163yojpzyrf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163andnngfi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163irnzlucr.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kouuxemp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163bpqtlqir.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163tjkhifhl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163whpnwtrr.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163igsegxzp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163krmwczzx.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rtseiqzd.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ljnsbcdi.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163iaphvaym.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163bfnutpzd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nioelhpb.html

echo "${#s}"
来源：http://www.xuanzx.com/163wenpuxjn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kagnfsxo.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163raodpmvx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163hybvwkjs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163qtduzoha.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ddcjgkvp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bfruotuv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ouputavw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163pmqopggn.html

[R26] 命令替换
来源：http://www.xuanzx.com/163znieewtj.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bdqupdfm.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163qgsdivyh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ttjfxwly.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zlwrxayw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ljzqvqmz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kodtwmpv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163kfpqljnw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hxwskqar.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163afwobiij.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163nyprqhla.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mifzktcl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rbavlozd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163zpyyoijd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ccysndwh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fcvdnvui.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163oiffovdd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163twizusuh.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163esiutvwm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yhuywbur.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cawfhnnd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xubnvgny.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163rhsuwnix.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163bnhqtxiq.html

[R38] 管道串联
来源：http://www.sxryk.cn/163grxodnwk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ppxfvpkt.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ojxjlhny.html


<!-- 参考信息 -->