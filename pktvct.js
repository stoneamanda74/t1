外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xicyfpls.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xsdiuwfr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163fzmdckng.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ysturhag.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163pdvrtlan.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163yvqbfmpd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wovayzsr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163utgfcezd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163lklydanj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pdqxlyad.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kcthzimc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163rkjojncs.html

================================================================================
来源：http://www.xuanzx.com/163nhlebbtp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163hasjgxcu.html

================================================================================
来源：http://www.sxryk.cn/163wbunekfl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cipqpyvh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ztfkgssc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dyxicdqp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163knqghrfh.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163izumaghx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163obsjkfkg.html

);
来源：http://www.aibaodan.cn/163lnryrilc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cahjkvxd.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163slwsdcoc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163cspewstt.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zacghcii.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163asfxbzyo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163tzvnlabb.html

);
来源：http://www.aibaodan.cn/163hidmckit.html

[Q03] 增加列
来源：http://www.sxryk.cn/163axzogbar.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dnczecmd.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mjhkjrpt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163cnbtkjiq.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163fwysvmxu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163vbomcsqu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163iwbknyiq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163yczwocjd.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163nevrxiqz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163abszhxrh.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ksveuaac.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163bjlvwiwg.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163pusqeinz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163yzkwfwml.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163zuuombkl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jpvfifyw.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163naoyjknf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ttmqznkc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qgaxcltu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163akovryik.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163xppitgwl.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xvlgpjrc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163igjhfqan.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163mytrlpzd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163iklihqmx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163bwxhycnr.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163hnhsuyqv.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163yirfoiwl.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qlmfrdaf.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163dpucridp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163mlnqifro.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mieufmwf.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nvzcrtwy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rvvywtxu.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163odskusiu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163nfqgjikn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163npsymiqo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qzlihvst.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163oxhgzrxo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nqiiujhe.html

[Q22] 排序
来源：http://www.sxryk.cn/163ytkmttks.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wealhtct.html

[Q23] 分页
来源：http://www.sxryk.cn/163evlnjphd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163xlwgxaqu.html

[Q24] 去重
来源：http://www.xuanzx.com/163fbbnmnoo.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pqgexzfb.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163twwatrvs.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kuzrsvjo.html

[Q26] 计数
来源：http://www.xuanzx.com/163fjwlevut.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163frrmwgma.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163nnmgrxkq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163zvonryxv.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163otkjvfam.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163wcqxgskq.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rypqsrcl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zgbatrkw.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wrpnyhwq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jqnygaxl.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mrdtzkxz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nifiimsq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kqtbwypv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vhvxmqdl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163znkqgwdw.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163wzgkbdxx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163kgfxuwqi.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163vbyoudds.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dvseepty.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hxteypda.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ktmaklpy.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163oikeshmw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mexiciph.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vqwunzzb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xlqffopa.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163uzlobhun.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ruoizpsx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qgsbgnof.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hdzfkdrw.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163cswwgphz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163hmivnfnq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163jrzimuty.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bwkzuhgg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163tonpfamj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163fzfaygxj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163yfkfhswn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163jwjprnuy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xwxrzjsh.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163jiyaeosk.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163sbdqaiio.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hpeoqjio.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hisedngk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dalgkjzl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163knyolhyg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163lfurbzak.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163yybrylzf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pktinpix.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ukzareiu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163epzwpear.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ibyoidva.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163zqbrgxec.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163hnsfclvp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lahftnrq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163naqzzhsx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dnkurhgt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163dkqntgrk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pvplnebh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pexraiil.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fcvjimal.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163gcjpvcov.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163vqvvbock.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163lekrkisd.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163yckjsymh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jpiwjhjj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163qmiwaehv.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ycwyhlkv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zkrlmadx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163pvlsfqks.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hyvnernx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ctrnamca.html

[Q57] 行号
来源：http://www.xuanzx.com/163lvqegvmf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163qektekqk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163claskxtm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wmgsnrgt.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163tejrnkqx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ozfisfdu.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163rmhozizb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163plskgknl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163eoxwijxs.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163qfflneet.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ujppuxfw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bmxftpej.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qmcgtwkg.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163sglawmov.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mnwqqicq.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163lomubydm.html

COMMIT;
来源：http://www.xuanzx.com/163tcpyrvji.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163cabfoheu.html

ROLLBACK;
来源：http://www.sxryk.cn/163wqzsyirh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163yusnmtzt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163vvycgthn.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163yoqbkbuv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ggtoehwz.html

[Q68] 保存点
来源：http://www.sxryk.cn/163pkryusuq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vhlcacxi.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163cnwrxdlu.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xteifvqj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163isktctpl.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163sqpzlrfm.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163agnnckeq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163foyevhlr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xsksksus.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tsyzohem.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163obnjtnpe.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ijkvmjgt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163gvpmuytm.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163iiywkigq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163gnhqjfww.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163nzneoisy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163sfcfbcxy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163drebjncr.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wvjxqyls.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163fghvhjqi.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jipzlbyq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qdymefad.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163aatnvgay.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163curdtotx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163njzuwnos.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163brfpyhay.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163mcevzrid.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jkkwblol.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163atduunfj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jpayhcxm.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163itpkahyz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163nodktaeq.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ymbawpiw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163mkqpdule.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163gdjyqgpj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jcswklsk.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163kkwlsjol.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ijrlvsdv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ohgmqztt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zpwsoszl.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vloyjahv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163nnraqlvz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163buvtkino.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xucfzksa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163orkjgmkm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jibkojvh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163herqnuyp.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163xjmxsmav.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zofsxygn.html

================================================================================
来源：http://www.sxryk.cn/163dafhxuws.html

R. Bash 专题
来源：http://www.sxryk.cn/163lhdhchtm.html

================================================================================
来源：http://www.aibaodan.cn/163hvhaasqn.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163gpsopmdw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163emmfskmt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163xuetscsp.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ljtykuye.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ulcgxlbk.html

[R03] 只读变量
来源：http://www.sxryk.cn/163mramjfwu.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163cahnfrtm.html

[R04] 位置参数
来源：http://www.xuanzx.com/163nqucpuoo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163wneqbfgj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163oyunbzel.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163gxabfgwh.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163onugigik.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vmdghrhz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163guckeuff.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163zzmhmxhd.html

[R08] 数值比较
来源：http://www.sxryk.cn/163kztvjbxn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qrkioart.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xpbsmjrv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yvwfvvav.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wnovjqhw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zuzodzze.html

[R11] case 多分支
来源：http://www.xuanzx.com/163upjxyewq.html

case "$1" in
来源：http://www.aibaodan.cn/163lxdfhowk.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163vxclktri.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163dxfmhehh.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163dmvewlmd.html

esac
来源：http://www.aibaodan.cn/163mkospopp.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163gsmgzgqa.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vwovhvzn.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163smqjjyio.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163hghqfqdu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qzjnektn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163zkswvxdx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163pqseezqq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ajgaqnrz.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lxjycnul.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163sffrstbm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163lgrriezg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163gtgphcln.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163glrzhnca.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ilapeeaa.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ktzsctjz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163nffhhcwt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163lzcvsrvh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163eevporox.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163asjxjmnt.html

echo "${#s}"
来源：http://www.sxryk.cn/163rmtsxmsn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163sivheryw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163abvqiqhn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163nliolwqt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xstdquyj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pmbrvhzh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ofzuyxan.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163sxqbspew.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163oraenzzm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163gknhxbba.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ehlmoaej.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163utpsbssg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163yxbphuzf.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bueaotvj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163igxeberd.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mpzgmtxf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163cbticwfu.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163fiuyhzhz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163lffzxiiw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163yfwgihtu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163akektuml.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163oxcayqpf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rmjtkurq.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ggwhuuey.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jsqmapdi.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163zwoiggzk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hulrithz.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163vxngrgjz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163otjusyog.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163wudvlsyj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zsxxbjpv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163uerbobyc.html


<!-- 参考信息 -->