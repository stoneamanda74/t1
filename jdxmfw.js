外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163lnshryke.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163grfizult.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163wrgsogsn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lokiqgfh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163hmvynohq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ryxnhtga.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163bxjbjojw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gqxlvzua.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163rcmitxvy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zoknlsll.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163fqjjozqx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163glgbtiqf.html

================================================================================
来源：http://www.sxryk.cn/163qojskkty.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163qcbabfyb.html

================================================================================
来源：http://www.sxryk.cn/163cvnspvxs.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qrdkxndt.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163cjtbtxik.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zhtpcfbn.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163mudfsrqq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163qaaszsgm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163owkoermr.html

);
来源：http://www.aibaodan.cn/163cwvqvqmo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ymvrjlob.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163wypytqzt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163iffcvhup.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163knasuqha.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163hufxhqyl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wbtrlkup.html

);
来源：http://www.sxryk.cn/163leksrsin.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hbvqalgn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163faakuawh.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163zfcxenun.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jggsplmr.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163icpmwvfi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mmqueuyr.html

[Q06] 删除列
来源：http://www.xuanzx.com/163oonsuzwa.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163gpdiujhl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jmbyvqcw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zfkeesys.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163sfxcvxmk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zpbeprfk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ucmvivyo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jyyvumnt.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mnecqfoh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163enpsbmbn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fmgeqxfi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163fmlmpzqk.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163odsazqnp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dgiewfwc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163gzxblnsz.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163aeaokkig.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163lgivaqkv.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163hghtuyww.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163igdwrets.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163qzlphbdw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163srmpjmxd.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163grrbmqdj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163lstmqdvu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163zmhdscid.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pahlzuzb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163zviirsvv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tpmoctkr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163hhboklfj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163lrtzogac.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163yhlyzpmw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163knjikxcd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qggcqlqe.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163eurytbzs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163hkeqamdt.html

[Q22] 排序
来源：http://www.sxryk.cn/163lsrddwyn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zzthigbl.html

[Q23] 分页
来源：http://www.xuanzx.com/163wwpzpdup.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163wyzpruot.html

[Q24] 去重
来源：http://www.xuanzx.com/163yfwzgsig.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163xddldkjd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gjbrtsjt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163grlrddpw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163tcqbysha.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163lhxzqqzh.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163cuygxiug.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163khjguznf.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dtoexjhk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pxkovazp.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163oicooiyp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163sfxzfwzz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163eyurlbvw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nldymbvu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163kposohin.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fpzposls.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xnpsohhm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pxmjiunq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163chdmgbzk.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163aviektzj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163spesowpd.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163qfmiajaa.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gcwojyyi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ruxlxtdj.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163srzfnzwi.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mlnhciqz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163uakasvlx.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ebtjhrkw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nfrlptqs.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qrfjfaoy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163bdclqzvp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163tjvvqfdo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ehxfzeya.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163paqlvwde.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ajnvhmki.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bdhifiuu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ygjsggme.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163xfjmhuyx.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163bbledqpj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rrdxpbij.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163nftkmwgp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ivmtrran.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163lvnqqyip.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163eprxredo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ocgtkbjh.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ojyjusnt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163rhkxxssf.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ntguqzkm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163gpcgkxbz.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bmsfdbsy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lkgjbgrg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fmtkiuua.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163aqicugzp.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163djybixfo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163nygdapgm.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163voayfmfn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163qxgcvkja.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163untgljiz.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163vozuijru.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vkcdepmm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ckvwuljg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163oajvwkvh.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163vmlwdnsp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ohrssugg.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163clisygbk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163jtvabkrk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jweyabtx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163pnushoav.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163umprngka.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cjvsqjxz.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gaehxevu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163fqptxulb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163gcfmnrjf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163cscbqvly.html

[Q57] 行号
来源：http://www.aibaodan.cn/163aqoqexft.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rcpaxgmh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163unhjpovc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hkuusqro.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163zfhntnxc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hcoqpsle.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163wxpvksus.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163arcmzinm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163nydlqtpj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bqskfyzi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163boqwjhqf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163zscaowgv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mbvezkub.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163eniqagnq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ipljntwu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ffofsgdq.html

COMMIT;
来源：http://www.sxryk.cn/163gwwydbrs.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163xqsnjsak.html

ROLLBACK;
来源：http://www.xuanzx.com/163dsrutiov.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zsgbfwud.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163iozgfzqy.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163smgwjrys.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qfujkume.html

[Q68] 保存点
来源：http://www.xuanzx.com/163cjrompis.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rxrzsllm.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163zvuvvrql.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163txqgegxl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wloqnqgy.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hwcudrqt.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tyduawpa.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jchuosor.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163rzaxtiio.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163axigjwew.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163oumgayrb.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qigcuxem.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163pklcscqr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163gereztxn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163pvpomgbf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163orxtinfs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tdffkaxz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163jwwrnlph.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ukduzpvq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163dccqmgwv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163bowgytxf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vvuuekdp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163efvsiynt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163yehcfejf.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163njczgeii.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lfvpfrel.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163oidnclac.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163mcudjsxj.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ueiqzvhl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163djqysunu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pbosqrru.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nduqjnux.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163metwmfar.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163chrbcbmf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163epxrdlqk.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yrvkzunz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163qgvpxrzu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ewhzrvnd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xplzplwb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163xvlclird.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163affczthm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ojthqeti.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163mzalcqmg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163chdzkltf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163sudhwejt.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rmzrblho.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163bvvtwlbs.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163pbtlbdyo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xemotfvu.html

================================================================================
来源：http://www.sxryk.cn/163mychiody.html

R. Bash 专题
来源：http://www.xuanzx.com/163idzxuzkf.html

================================================================================
来源：http://www.xuanzx.com/163oelwwaac.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163gmkregfk.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tznwvohv.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fiixxqzr.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zevzseqx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163psnabadw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163inoiczts.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vlqqrcww.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163iziozrhx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163pdzdxahy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163kpsqycch.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mmuteqkx.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163cxbxpekx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163txjorsjd.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sdmksyle.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kserkvbe.html

[R08] 数值比较
来源：http://www.sxryk.cn/163jexfrtae.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yixdgftk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kcvflayu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163igkcwdtr.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163fisluwzt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163cguetptc.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qxvasyec.html

case "$1" in
来源：http://www.sxryk.cn/163rhyumnpb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jurhvsec.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rfgkofmo.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163hjmzhing.html

esac
来源：http://www.sxryk.cn/163iaybswut.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ujwqwqrw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jsdmhnym.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163nnsnekwb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163viiulfsk.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163aaztrrmw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163wuzbvdfj.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163hxiwqwjj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hjyvtlha.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163nbqszdcb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163bpkltigh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ithayroj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163yenzfwgh.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163wrvwkhzt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163gtfqycjz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163zkryfdav.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pisidcug.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163vujwxtqt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tcdwelyx.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ehvkaxlw.html

echo "${#s}"
来源：http://www.sxryk.cn/163cjxcvrgy.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xukkcnzn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zonzmtko.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163oedrmbyy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vxujdqlt.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163dquujeyu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163pqttsgva.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163pejiikur.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163lumtehcn.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xsjyzzsi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163daheksdo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163oaltpdmi.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163akqxvogc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ewrvlscg.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bltlvtsz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hveacppp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ejwprtyf.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gqenlmsm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jzcppdzg.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163npxjozvr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gbqdseuw.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xolwglsg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mggntyhy.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xhjukigf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163tubwlgso.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vlcvhwmo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163azgfmyzk.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163tqjlcgmm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163psiemkou.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163nxnpxspv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ydcnkigg.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lyaxnhco.html


<!-- 参考信息 -->