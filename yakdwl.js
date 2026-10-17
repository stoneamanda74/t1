外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cmnqzxzt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163viupsplz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163glytmmfw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163goxinmrr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163uhirrbca.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163cighleaq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vkvwtlmd.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dtfnzrxi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163fsfqmldl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bctphaqe.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gbajqnom.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xrtplhrr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163gwnqmtbh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163aqwvpnoi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163cqelhjzs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hmypmmpt.html

================================================================================
来源：http://www.xuanzx.com/163uuxwcblo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163oizzmxfn.html

================================================================================
来源：http://www.aibaodan.cn/163jfzccmba.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cpgdorvl.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ujgpbhug.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163knebkibv.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163isxvzcwo.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xfbwalpp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163selczdvh.html

);
来源：http://www.sxryk.cn/163rfuoemdx.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163uxaucctx.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163kgwyhfif.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ckeqcmhg.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hhqdzovm.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fghxpxiy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163cdnchqyj.html

);
来源：http://www.xuanzx.com/163trhqwrpf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163zchlmhwo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wglwwrzk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ahrexzjp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163pjoqnvoc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163bdaaunwp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163clwxisvx.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jqnkxkep.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hbkpwijx.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qodxxzpp.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wjmukeoi.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163rvqhakur.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163lgwrxgfv.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zojzopqz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wrftmuev.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163sffiilki.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qvkfqtdm.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163bikjizhe.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163wstjtvtj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163bmymlltg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zbgcunec.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fgksckoz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163jzrmtuvf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tkcdarzh.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xtbvphwr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163fcpaxluj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cofzqmie.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163srjadhgl.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vkxfufia.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163umunflxh.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ykwgpxvk.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163dpugvptd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163yksttdyy.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163yddgoqwu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qpioeqgt.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ktlllgox.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163rzplpvly.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pnehcmlk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163csurnudk.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163yefucyil.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163eundeevb.html

[Q22] 排序
来源：http://www.xuanzx.com/163rzdwtugy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163qymfcbsf.html

[Q23] 分页
来源：http://www.sxryk.cn/163xkqfxgrr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163xqkopjvg.html

[Q24] 去重
来源：http://www.aibaodan.cn/163zeoefplu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rimknxqy.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163sccbvajn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163snsehsxa.html

[Q26] 计数
来源：http://www.xuanzx.com/163efqdxfys.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ljstktca.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163pdkqacxq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163hzzlltiv.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ibvubrxw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163sdgkqkzx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163nkgkqijq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ptbctqan.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163gileayzk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ofumlrvk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ebowzzat.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163rprtcoww.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163djrooscd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zglzfxgk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ahkucslv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163vomdqhye.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163saftbcjf.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zymdqaug.html

SELECT * FROM (
来源：http://www.sxryk.cn/163mjldbtlr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163xjpgkdqz.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163vgvfdthb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xcrmulzp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wkiwscxi.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ownidzoe.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sscujtlu.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163yhkjowzy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163yucrxgdy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163odngtzjr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gnerehyx.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xowmbsjc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163kwzeiitn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163pmqnruvc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163pconknhg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163gdvlisgi.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jgiedjvl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ptaeluwa.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163jsffbzia.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ljxiwuyg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163kwzhmlwy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163hjsuzjep.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xdhqgtcu.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163gyutpljr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163vtgtnvgm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163sygtisat.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163xnbzayzc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163tinthyls.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rvobytgs.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163sshzotek.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lvhctadl.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mdossfdz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jvpiyhnd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kcyvelua.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163gdukuarn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163hjvsbxft.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163xsaycflf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qdvyzivo.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qtcpbyck.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163amxmdlza.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163aqyptzzo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163nngyvxyz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163kiveybou.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ixercddo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vdpczcep.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163oijkdzaq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wdipuoqh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163slkxpqaw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163acrvqmsn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163dkxmrcsi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163oclekqtm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163qnvtqzac.html

[Q57] 行号
来源：http://www.xuanzx.com/163flvpekif.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163lxzvezhz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163jweqxgxs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hbskancd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163efhzysyc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163bzrnvcxb.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hncyfups.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163flyzywfc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163cxencybf.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163emaluqhn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ynchvnou.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163evvuzirn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rvpqqkyv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163bcytkhil.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163etfznzyk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163vmnniyip.html

COMMIT;
来源：http://www.aibaodan.cn/163ouphnvxp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lknkjswf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163dihevdlu.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163dvwecbpr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163uyiczwsb.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163jxdwmglx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ubcaufzi.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ixdqtayc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wipliarb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163gprssezf.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qawjzzix.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163iodtprdp.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163iintokwu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hlkjmymg.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cgeshmuj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163izphgvpo.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163dbfvnaay.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ifotgqva.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163myxatcbc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163loqavubb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163sknpufpz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163znmdetoh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mwwawhid.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163srldiehg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ctubfrbl.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163bckdseru.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ghxpiibj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163zxfibsft.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ompeuqas.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163igjiytky.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163uscldfdf.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163utxwvrat.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qmbsckmt.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163iyrwfhyp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163hbjyfbsa.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mkfzigtb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163lbteswas.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gdwdrono.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uamrswbw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163etnsozjh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163bbbawlac.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163uwjtkcmv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cvdwdnli.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163degukgkc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163svtiwuqy.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fudthrfe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bqztatkb.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163btqedmgp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vnxfucru.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ncvwspid.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yknbkkoj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fbqisdua.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163covqdlri.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163pstdrsxt.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163bzqnckzc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tnvwoudm.html

================================================================================
来源：http://www.sxryk.cn/163ujovipqq.html

R. Bash 专题
来源：http://www.xuanzx.com/163crtkvtwa.html

================================================================================
来源：http://www.xuanzx.com/163mabqusll.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163niwfzjch.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163dqmdztsj.html

set -euo pipefail
来源：http://www.xuanzx.com/163fckupfqy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vbqhoedo.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163pxumtedd.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ilizwumu.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ztfyumgi.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jmwlaryy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163lhcaetmi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163elemjfks.html

name="${1:-default}"
来源：http://www.sxryk.cn/163uyoauvhs.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163dygorryq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163dgzzyrpu.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163agxbirtm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kypwxltz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163cwbwjaei.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163hdzkmuia.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gnaggmee.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163wwiryyvy.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bcccbtrt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163buwtbuic.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xfwlexwb.html

case "$1" in
来源：http://www.sxryk.cn/163tugkcvyg.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163cirdelfx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zjmyyksm.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163hfgogctl.html

esac
来源：http://www.aibaodan.cn/163tbwtfham.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163isujkgkm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vokclgif.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163dkfflxqe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163klswdkki.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jpglnrhk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163jkdiafyd.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163bkxgstkp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163qbdqsvup.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ohjolmki.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163srnxcnzu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163dmoiaceo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163fumuruki.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xfuswhuy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vvxqirgl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163pvofdrto.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163qyuzrkws.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qlkicjqt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163drqsngde.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ntpblpdz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ciekvhvi.html

[R22] 截取子串
来源：http://www.xuanzx.com/163gbucrpiq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163lttuwccf.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163objmwikp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163abgsjwge.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163gmegdsux.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mmuumkqv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163pvkrkkqo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ihkrystk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rqtfsxkt.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vkiwyjou.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163fcphpbmx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gxcgwutv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163yreqtefp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163kmihhkrm.html

[R29] 定义函数
来源：http://www.sxryk.cn/163guaqkvrc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dedhnlsx.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163rrhhwxnq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163atsqhkwy.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bosmldsi.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163pzhzmell.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163zczgidxu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163vemismpo.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163uxrcoypi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163clxmxrti.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wiyujibx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cetrkjkl.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163kypjxmtq.html


<!-- 参考信息 -->