外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163exgwpwsx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tqwdulke.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163luzjnxrr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163uxnbhdpg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163sjmcgfwe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163svlzfhtd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163eiyhkuty.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163csyoapdy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xrzjiieh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163odmfqabm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163fsktookt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qmvjpjip.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163rfcsihaf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jmvcfgsy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163czavwsli.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163nkpkkxde.html

================================================================================
来源：http://www.xuanzx.com/163jrxygwxj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163icplbuqy.html

================================================================================
来源：http://www.aibaodan.cn/163teacflws.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163eiywvglw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163mxelmafr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gvsvojad.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163nrnykdtv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ncknyztm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ulosizbf.html

);
来源：http://www.sxryk.cn/163jazdfyhj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ypdzlzhl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163yhpyrggl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rmzdwhhe.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163wfnsjfrg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hurnwuny.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163rfpbzefb.html

);
来源：http://www.xuanzx.com/163fzuifwst.html

[Q03] 增加列
来源：http://www.sxryk.cn/163cdbqibnn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163wtdilyto.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163oysppyki.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163naycgcoa.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rbnjojrl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163megoztza.html

[Q06] 删除列
来源：http://www.xuanzx.com/163miifqfjg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ikpbmuaa.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163nbpfjoqg.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kjsqvqsy.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163nxlwqhmb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163waxmfynh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xecfuqtu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163awgaroxr.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163btlgcbvc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163vzjmracg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vmwebtzv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163yprkkzin.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163faeuvdge.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qwygkzzk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ehjxvuvx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163nklxgugq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163pyoptsch.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dfofpdnj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rjwymgkv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163kpolxfgl.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163rauyddsu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163crxzhrah.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163apweebbs.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mnyoshvc.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163klxalfei.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163itcbisqh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163srvstvpy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163tlytluwj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ausmsrxv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163prlktocn.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163hhhanzag.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163nwyltawc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163nnpxhkmb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163bruuqbse.html

[Q22] 排序
来源：http://www.xuanzx.com/163cokfobsq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ffmplydr.html

[Q23] 分页
来源：http://www.sxryk.cn/163jzltsmaj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163vfbpipsm.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ijyeulco.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163sblzshty.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163txoescxh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qwulhrls.html

[Q26] 计数
来源：http://www.sxryk.cn/163muzrcohl.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163llnkmjno.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163kfswlwyp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163vcojlhlr.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rynqxdud.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163zxmbylbq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jbhtgdic.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hkbcbbtx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163sqyaneaq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ayvmwudn.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163opjqveqc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jvbmmdkh.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gjfdamfv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nyvotzcv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163dknmiyun.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163olzlhajq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vebnwexm.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ucsxlkew.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ryzplbdo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tfdtnqvh.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bzoxemlu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qoieitva.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qihcomwh.html

[Q36] 左连接
来源：http://www.xuanzx.com/163wryondex.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nnpvrxdk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zlkvpadq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163fekvefoe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163anhksdta.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rtkdaqtd.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wggrxfra.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163umcitjjf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163nbhhmuwv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163pytzutvz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ipcarhzt.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bfwjcwns.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nhpzizwv.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163zisdlypq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mbzflbwm.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163xdsxcsgp.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163gyvgthzk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xquzxpvx.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163tzfyuorn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163uabtjnzx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163plqmeddt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163gfpfbitf.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163yumwasdm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qfhzalks.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vfjfgtvg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bjsfmyxy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163caxgptba.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163lqpwxklv.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163dzhhphsj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gfmndxnq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pdrdmseq.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ayxagupt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163bkeetuqb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163nsfbhubj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163hobbqulx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163zjwabhxi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163qyqpcadi.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163domlndxf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wxtceoza.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xhwtgqxu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163javglwlr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hzvjriqt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163pkjbbsit.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gpzykdur.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163mkvwgokz.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vbgyufjc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163oizbykmn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vaehiumh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163bpgwbotd.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ljtxebzd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vtpxdxbh.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163excqzxtg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163pwgczkje.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163renkacke.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163cligjdnq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163cqtsaveq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163wgxvtily.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hdhwjakd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163isnpxete.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yaqgivej.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xakjzbov.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163yoqijubl.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163qpkrirdo.html

COMMIT;
来源：http://www.aibaodan.cn/163teloqxsz.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163bdaalmgu.html

ROLLBACK;
来源：http://www.aibaodan.cn/163atqwvgak.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163votrnrwk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163znjgyhyr.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163gcmiuaxw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163mbbladox.html

[Q68] 保存点
来源：http://www.xuanzx.com/163eelqeilf.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163zmqratil.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163sjvkjotr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163nsametrw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163xgshbvxo.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163nkezambr.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163plslwxkd.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qyysvltk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lyethkbe.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163dvzhttor.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rpmwdkgu.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xzmxtvoa.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163rwkvdxql.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ipdntjuh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163aytpaffj.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163pejswqnm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163eqihkdut.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rdhfjpuw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163plpiapiy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gqgmmlzf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163udgtxtqy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163aplcvppl.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163vnnlcghl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163okderobp.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163oftvsddc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163clcdsfsc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163mkgqtalt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163zjowivus.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zvwfyaky.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163lwpwheyg.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163qzycsxqi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163yhjrkolz.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163uzrbmltn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163raiqyqry.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163yeywolyi.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163cszwpwvh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fklskouo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163sycquzhy.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163fuplstri.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163kpjqdlej.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163upajkngn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163yrmzzofs.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163mrzospak.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163vtztcext.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163figvxrqj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163cuwcymsi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163frsmcezl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163dtjphqei.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163itunlwid.html

================================================================================
来源：http://www.xuanzx.com/163onakauxi.html

R. Bash 专题
来源：http://www.xuanzx.com/163rdvcbcyi.html

================================================================================
来源：http://www.sxryk.cn/163koniaadf.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163srfiwerg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zpxsahdb.html

set -euo pipefail
来源：http://www.aibaodan.cn/163lgxtwchk.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163arjkited.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ujjlahsk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ujlugasv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163owlotkou.html

[R04] 位置参数
来源：http://www.xuanzx.com/163vyraneil.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163riydtsir.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163hocqfmvq.html

name="${1:-default}"
来源：http://www.sxryk.cn/163tliftsni.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163yjktvyne.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163cycrsxub.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sbrvckqy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kprsqguk.html

[R08] 数值比较
来源：http://www.xuanzx.com/163psqttlet.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163aiqkymll.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qftrfobx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qkxojmvq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xrcqzlpl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163msgvohvx.html

[R11] case 多分支
来源：http://www.sxryk.cn/163qyyefwzr.html

case "$1" in
来源：http://www.sxryk.cn/163qhocpzfr.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lrdcftsf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mqxkflbq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163igsdxrtp.html

esac
来源：http://www.aibaodan.cn/163bbbicgba.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163czvaasot.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gktlprct.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163irdtzzqc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vvxelmmq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163bykpwnfd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nmixbpvm.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yopthrdq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163tmsagrfv.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zovekgxx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163twjhgomz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163njkdlglt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jtnquxyc.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pmzmixaj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163yzgdfrvk.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163jjyhtyzr.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cymjkwmy.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wdnwgycx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163yoraqldv.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163fwekbpdc.html

echo "${#s}"
来源：http://www.sxryk.cn/163lujjdagx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mfrtbnlf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163laqqdyrg.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163buqvfjod.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pzbvqgzf.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163dflzfgim.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ddiajtmc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nrvkzgyg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163uymvvuio.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vnrriavu.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wecmxikf.html

[R27] 算术展开
来源：http://www.sxryk.cn/163crojhlxb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ohscmfij.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dpzjkrje.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fqzfwvef.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rofgtqte.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163krhpzpsj.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163cfhremyc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163igupffcq.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xqpqkfzb.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163znmtrqza.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163jhgpztfi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163sxlcfsop.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163rbawefbv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ukjcplrn.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hfvdmxyk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ejkqqoxe.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ptyipdlz.html


<!-- 参考信息 -->