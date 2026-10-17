外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qpvbvdbt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163lkjqacjc.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mkkakggc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163eojkvltf.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163lxcbhtdp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vttrvwls.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nzfkyihl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ncgiowxg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163afwofjps.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ajgamkxe.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dgkemjcq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163wfyczhkx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163pbwlirix.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ijjkzzhf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163dbdnyafu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163szzimgid.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163onnilbvv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163aiyxseyw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163symcwowf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ccgjzhxg.html

================================================================================
来源：http://www.xuanzx.com/163hcmicfrv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mjvpkejw.html

================================================================================
来源：http://www.aibaodan.cn/163yxxywvjv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ofrimbbu.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163rcbjiwni.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zfkolalv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zyxwgwkz.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163hdesobcg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163bukebvse.html

);
来源：http://www.xuanzx.com/163zkxddqdp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163caisieub.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ubwulwzb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ryzzswdn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163aldahcbk.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163anssrxwg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jtlvsjrn.html

);
来源：http://www.aibaodan.cn/163hwnttozg.html

[Q03] 增加列
来源：http://www.sxryk.cn/163sfppkfjd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qyfwfdzy.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163gzivtkzj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163spogoeow.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163fqwtrtmn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163qgqbvxkb.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163lewlddid.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bfvydowz.html

[Q07] 删除表
来源：http://www.sxryk.cn/163seuabmwv.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jhjfmwox.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163mulmmsdy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163wfamuzwl.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163fquesezx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163hiycmmpw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163untetvfq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sjwpzksb.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163righkxqc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163zcbtjfmj.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163trovcnif.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163bzhzdkyw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163oohkmaij.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163aaieldrr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163auhttmfn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fanuvdwe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ktzpcynj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163puiilrln.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hfxaejcn.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zmrjteex.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wdwmdvlq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163hyefrbqo.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163twxjmnlm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163damyvjzi.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vtopqfhg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163fkcmynrq.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163embymuib.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163etjpyypt.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163upfaomlz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qiqbzrlp.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163gdwnlvec.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gskghwzo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tatlzpbf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163noztaizn.html

[Q23] 分页
来源：http://www.aibaodan.cn/163yzdmlawo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mzovzhkv.html

[Q24] 去重
来源：http://www.xuanzx.com/163klfrsbiy.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163whbmiahb.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pldhugco.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ikydfaav.html

[Q26] 计数
来源：http://www.sxryk.cn/163wqekjiob.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163uymbktew.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qgasouuo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ovxebnfg.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ydiqzczj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lyjlnbnw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163mcfqkjsk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163tumkafxq.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163sgtuwrsm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163toedflal.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ulpphamj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163isnlcnfd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163tvlrjbhi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163owmowvyp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rojigkvc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ztzcuwgs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163sveanmuz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hllhxmna.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fkkllihk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163doqjkgac.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163kopzolsx.html

[Q35] 内连接
来源：http://www.xuanzx.com/163geocpqxu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kcinlydg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163aplwrspn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ppprmqhe.html

[Q37] 右连接
来源：http://www.sxryk.cn/163lqspaqsq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xgqrussy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jlwftpdn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163nbrvhhuq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163kbamdfpw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163msjkfzoq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163cseitmur.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163kjiepkwi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vnrsriyb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163rhfebvyz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163nyfxrpib.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xpojrwjr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163mtarnunv.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163owiebihy.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ldtauluj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163gyrmefvf.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vmiimpbj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cdusuygn.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163puylmbwk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ijrooppu.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163vvvoxugp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jantbgqn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zggfrlzf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eouemobg.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ammgqdnj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163yqinsunf.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oirlelia.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163wehgewcl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163sfefoutl.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163kqocvsnc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wchjxuix.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zlkuqfuc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163tlszrnfo.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163aasanzrf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163urqdhmmv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163kppgzgrj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mwdmrzlw.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163hwyeepms.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163rzsqyslz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163bdgtsgem.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lvpxvqwh.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xiebsnzw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163aiwcvdxm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163bacsqplq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ybkodmop.html

[Q57] 行号
来源：http://www.xuanzx.com/163lvbqsxsq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hqjpdkki.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163vvfiulyk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163pkpbzvxa.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qiuyrrnr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163yaunkszz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hrevhmuu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tlkbpqvf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163aivshhel.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163clmpgqfo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163asckwied.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ysufzjfu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yegxtubu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163rphlowue.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163kwfawbou.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zrxlzgvs.html

COMMIT;
来源：http://www.xuanzx.com/163phyoayuy.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vzvoikwv.html

ROLLBACK;
来源：http://www.sxryk.cn/163rcgurskw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rkkktwvc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ojtoucla.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ktudxspv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163uckowjae.html

[Q68] 保存点
来源：http://www.xuanzx.com/163iiufakxf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nlszxqng.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jkdyjcrf.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163wereopcy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163kilwhdkj.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163lcrqiuep.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vkxrnnxq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163icmmpnie.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163iyiurdxd.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163spfkfkyw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163nhskrgca.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tjvktmmz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163gtdlwscx.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zfdizvcu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ttqzqhnx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163asdlxwek.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gyltdzcy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163sdkhyfrz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bqxpjsso.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163gbqekvos.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163oagmhisi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kqjrwomy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163tnzlbnou.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rwluxhmi.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bxohdtrx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163mnpsscgx.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163lyidbqmq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ofhwggnz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163scgwpdfc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163kpapyfuu.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wepcneno.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gossnjtc.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zmniagth.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163bjoofqxe.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ohmpoxws.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163nyiblqsi.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163cghuhohx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ltxvgtru.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bskthrhd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zljvjljt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163sbicbnle.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gzaidgcq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163yfiwpbdz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163srjehskn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zzcnnyxp.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163scjxnaou.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163upndzyxa.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xhjaybtp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tpdunxog.html

================================================================================
来源：http://www.aibaodan.cn/163tvlcbfwi.html

R. Bash 专题
来源：http://www.sxryk.cn/163ltleqxxv.html

================================================================================
来源：http://www.aibaodan.cn/163wvbhzolf.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163tmhzmiro.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bbxjnzxd.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nuhjtmnn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ifkyycbh.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163royupcim.html

[R03] 只读变量
来源：http://www.xuanzx.com/163uzqwkyyd.html

readonly PI=3.14
来源：http://www.xuanzx.com/163vinjgqlp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jgvswozd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163nryjodgi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163sqqxgwwd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163zzylkxvc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vgwzazpf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dbaqwizn.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163rilnsdud.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nyyruubk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163smidfakz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nwasnhpg.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gbdglrxy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163rdzfzgtk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ntuznnxd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xocjxhgf.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163bnojzgql.html

case "$1" in
来源：http://www.xuanzx.com/163zjikimjt.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ixfkgppp.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zqtjcqnf.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163royujsze.html

esac
来源：http://www.sxryk.cn/163ibfmnnkk.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pasjisma.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vqekbttv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cvxtdkbz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163pkullfef.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qexabsyi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163clvicwej.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163hczfkuxq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163kqzntlli.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tvvmsywu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ccgfkwqn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vgmaixvw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ydqfeuen.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ilgsvryv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163isfhtnyz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163lfcujutb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163guryzwfz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163gsgffsid.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163knwtacwr.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163umroypne.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vkyohalq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jbwgjger.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163klbgpjwy.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ppqmboma.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163xrjmcmbs.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163vwjvgipf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ctwwilgr.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163uxhkhsdn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163klmxmyas.html

[R26] 命令替换
来源：http://www.sxryk.cn/163oaxhgjtx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ogratafm.html

[R27] 算术展开
来源：http://www.sxryk.cn/163timmpmwz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ijaawuga.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163flmwzypv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163beggmbea.html

[R29] 定义函数
来源：http://www.xuanzx.com/163dfuxwnrd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dcixmicg.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vamvcnsk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163dwpkjdcq.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163iuvpxlti.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mkcxeuhi.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163zzufrlqi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163hqxoimhi.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ecyfuahz.html


<!-- 参考信息 -->