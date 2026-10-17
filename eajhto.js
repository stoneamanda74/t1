外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pybyclaq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163dciszwix.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xwnzsoux.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jutuxrrk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ukokbimr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vedahlmi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xfmypvmz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163esuduyzf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163aynvinrj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163gbxaggks.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vfmuhahz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163slnsdrql.html

================================================================================
来源：http://www.sxryk.cn/163vfrbudfe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jviioflq.html

================================================================================
来源：http://www.sxryk.cn/163jjgxbxtf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163uqlouemz.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163cqrbqvin.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ysbzokol.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qlxmvyct.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mkhyjauh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163unjanxjp.html

);
来源：http://www.aibaodan.cn/163qvzvwxbj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xtksectv.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ikreosmi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ohpqjcqp.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163bszonesz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kajuxnpd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163zwfjilcv.html

);
来源：http://www.sxryk.cn/163ugxdkikq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tleodydu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mhipjhwu.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163woadfexm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163pjueiazh.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163yflbeucv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163gyjbswia.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wyroxwfx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163lgroerbe.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hqcrkihp.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163oiggnplg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163pntbytjq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xheeifmu.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lzopehpw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163aewkoxag.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163dftrjcvw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dzkmmqcr.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vmqployb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kmdysnxi.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163oeivfgkq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ubleqyfa.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163qblscasj.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xsknneeu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ezydtqhu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xgxjqiyj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163czwmokiu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zkmsznyz.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163tijxvhbl.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163smewlhzt.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163pkcrgtcd.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163weqvjrty.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163iujiaret.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163kpjjefwo.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163whrmqstt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163krpgvadr.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163yjwgclng.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163jyawhyjg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ocywhpem.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163wfqlkebc.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ecjjnwtx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mrlozpgc.html

[Q22] 排序
来源：http://www.aibaodan.cn/163baczixhb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163dsynmkze.html

[Q23] 分页
来源：http://www.sxryk.cn/163zihixywt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163rxmbeddm.html

[Q24] 去重
来源：http://www.xuanzx.com/163rnfumhvq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163oxccqljn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kksgwasw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163lsylxhfn.html

[Q26] 计数
来源：http://www.sxryk.cn/163syuiqsim.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dnbcmxvi.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dbwokeqw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ioihvvhj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163egkkqcgy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163olhstvml.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qzfgkdjl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ngxrqfkc.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163apadrebw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tvcdnkzm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163algwdwck.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163wexmqrac.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ysbfnxcj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lcnnqfqm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163sscayvoe.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tftrqxcq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qcjidwxb.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163eqxjbwas.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163hzsfwdes.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163boosbjgk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uvmmkjnb.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wolzwlwi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yljukuja.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kbadjdfv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cvofindt.html

[Q37] 右连接
来源：http://www.sxryk.cn/163uzterfye.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jzzikpnd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mjrgrahd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163lacpdwnf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163vskxczlu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yoftcagm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163nvawtzhy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163remrrcmi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dgpjzpak.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163gxwhaygd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kliaoiph.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163cvvzklgz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163iqmrbitg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163dxraabmb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163whftpvqb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nvvstlty.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163svlxxrot.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163rcxdjzbu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163cvayjrru.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163orhonsyt.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163tbwlhjvy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hhrewrjj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163hsefnlul.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hrsrbdjj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163suxzefaj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163hbdxzjke.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163kqawnmrb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zgqohtuz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163rklvgpkk.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bodpivnh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163rtvmasem.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163uhfsqspb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vpyoxqpg.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ykofpnhf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163zayxxjtu.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pvdnxuzy.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163htqdiilt.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163jhquvrzp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wpezkuiz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hqpdccqz.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xodlcpvu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163cfxqpwen.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qdkbjmss.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163vvrmseuf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163uqsvjmxr.html

[Q57] 行号
来源：http://www.aibaodan.cn/163hqpkquaj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kekewvds.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163lfueurou.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163yindiclj.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163kezogvzj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xduevqxt.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163hdnhmbrr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163uxrzxqid.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163tnpupqkd.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163iafytlxu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163zgbsohag.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163sgaxssie.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xnzhkwfv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163qkjlrczk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163tlgkcgyz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163itrqoywv.html

COMMIT;
来源：http://www.sxryk.cn/163zcgtiyfh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163gchgyvgr.html

ROLLBACK;
来源：http://www.xuanzx.com/163gzrxfmut.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163gxwdmowf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163wfanayuj.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dyihkxun.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nzgaygjo.html

[Q68] 保存点
来源：http://www.xuanzx.com/163rxilmfde.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rszptwsf.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163fhllutxd.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163wupwfbph.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gdlkjuro.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163uymmigzh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163osulhjej.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163dxnbuggc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163sbyliwlm.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163uneaybib.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163asomkgqo.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ffuophpd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lwpphrin.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163zpxjxafl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163tpkulmci.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163iggvzxxo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163camusbay.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fxtssyqn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ryfvmbed.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163yjuwrfdf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ykpqodru.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163qokqwxxy.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163lkhzgmoe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163yzxterfz.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163uitudztr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kqmvjipo.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163mstnwnmv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wzwajewk.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163btbufzhe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163xcippzqb.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163iwslzark.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163yohtkjkr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163oqbopfmt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163nsgrgiki.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ggrafkrs.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hwqrjlit.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163osqwpqam.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nabdjmbz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163roodlhxk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ilqabnfr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163siyarexj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163sgxapvov.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ubuyuelj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163mlsbgxgm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163lyqfjygo.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163tzxtdwib.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163nklxiuze.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wcokiuid.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163umyonsaq.html

================================================================================
来源：http://www.xuanzx.com/163wjfsgqcd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163nouautmp.html

================================================================================
来源：http://www.aibaodan.cn/163rvnsxfov.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163etuefucl.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163nvaxswdv.html

set -euo pipefail
来源：http://www.xuanzx.com/163bnevtnsq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163tsvkzkws.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jueyjcgf.html

[R03] 只读变量
来源：http://www.xuanzx.com/163azymbeuj.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xnulicqt.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jltgwsqt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163msppkuqm.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163asvlypbs.html

name="${1:-default}"
来源：http://www.xuanzx.com/163babkhvbp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163sxiwlklu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kdzrhdgn.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ngfvtple.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163gqvcqyvt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163wztohofy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163eoungfsc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ypqsuzol.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163apjuqpxl.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163cgdylrrq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jhanjnjc.html

[R11] case 多分支
来源：http://www.xuanzx.com/163tmfwpunz.html

case "$1" in
来源：http://www.aibaodan.cn/163xkjdgmwt.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163sdmlthdf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163yettazij.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bzsugyrj.html

esac
来源：http://www.xuanzx.com/163gouyeafs.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mypbgusw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163qjblwevc.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fefacioh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lcyxzkod.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163qcvwoxtm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cekscaow.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wqzmpyxp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163usgjwovh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zuxvwdrw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163eyprxrlk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163wsyefvvj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163omhkpnhd.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vshjoewy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ztejdqzl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hmjijspz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jcjwlpii.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163xtjnpuil.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163pkopmkec.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163aqzvrmyu.html

echo "${#s}"
来源：http://www.aibaodan.cn/163cdyjdzca.html

[R22] 截取子串
来源：http://www.xuanzx.com/163oeceuqmb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163tcmfupck.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163yyxtsxlb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163aemhtpbe.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163amdibnng.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163htqkqtku.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zcjbolfo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rnhsyayl.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zvkrmuio.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ynqxebqj.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163knsnnmzf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163lwhvthyr.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ebeaikeq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163yglifqst.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hvmhqgrn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163fxviqyjo.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jqkahxmw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163kprayvzf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cwbvmhrd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163uoddqpog.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163phlirssh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163hwlbcfgb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163aysqkaun.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163efraankt.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vbiqvmmi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tpkrwxzq.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gdsgspzl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163dbsznsnx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qvlrxixj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zalvfmxr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163cpvofhye.html


<!-- 参考信息 -->