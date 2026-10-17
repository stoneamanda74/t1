外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163dhmnygcd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163tnxuthfa.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163vvlojxhf.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163szrgrmnt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163gfdmwtem.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gtgphagj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163bkldnnis.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163sjaeqkwm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163glbzncob.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163nsxuheeu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zayviehl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ejholoyx.html

================================================================================
来源：http://www.xuanzx.com/163mmiochkb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163vwrfbohs.html

================================================================================
来源：http://www.aibaodan.cn/163ulctopnx.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jvpqbsbv.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ioeakeum.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jqtayecw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163gqokzzdr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163cwjmgrpm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163wnhcwxsy.html

);
来源：http://www.aibaodan.cn/163ixtjadaq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163cmlyrtpu.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jrubodjb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nbffhtxq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163musagbid.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ikpawxjy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163bfvtmany.html

);
来源：http://www.xuanzx.com/163npbcgyig.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dyhbcnhk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xmueathf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pkfxygiu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163yojhrapg.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hiyzbshb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163whveaasc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rauovusf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163kusdgszn.html

[Q07] 删除表
来源：http://www.sxryk.cn/163osusyitu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kybifddi.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vutrbhql.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163bawasgcc.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ofuklcnn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xdnvjmzs.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163nwgpvmwi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fgggprcf.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vzvrmfbb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163borwytde.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dtkhvqvu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ivvempet.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rsecttln.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163agdxqcaj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163omuhhkoc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163rbdcmskl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163eaeicgqn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163nfdykavi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yxpxdnkn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163dxrxclbv.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bvgcesag.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163dlxxhgyg.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vgthsgmz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163fdrmqvuh.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bmcddoop.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163kcpzthpu.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163znkuzrfm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163judjxadj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163mwpubgzr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163yopfgiqr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163arftzrxx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xlzkqtay.html

[Q22] 排序
来源：http://www.aibaodan.cn/163asnvvncv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163wajvdmuj.html

[Q23] 分页
来源：http://www.xuanzx.com/163ckheoiyx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163htmnevvj.html

[Q24] 去重
来源：http://www.sxryk.cn/163ljedhkcm.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163giwdzjtd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163rdoyhwuk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163pzaqpime.html

[Q26] 计数
来源：http://www.sxryk.cn/163mwcueusc.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163icfdkbtz.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jilplinj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zblkpwqo.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dxzyvtmu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xuiyosqz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tzijobcd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ojpcukaw.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hpsozfmn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iyguevse.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163uljflqyg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163etflhfzt.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163asbaoedr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ovpfotco.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wiibkgdl.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163egnjbpka.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163erzbtwfg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gfrjxtrv.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dcmedthp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163yxahyvaf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163lvbqysyc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163hmwzdspm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oxgpprhs.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mtfmuqfl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qypgxsrk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163qxvyxetw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nwkqdqnl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163edoerjie.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163asvpbrbu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163zcqjqcmw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wbaizhvi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163esrwdpid.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163nsbanjal.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qlpgqhjf.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qfgcbdxr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163yflbbkzk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163eziuvplq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163rvrtukug.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163szaipgpx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163pbatxxfs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xehdqcal.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kbbnklqe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163vddlmpbh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163srzmgmps.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nyupmmqy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163tkmcdkpc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tmpowxpv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163clijunkq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dyjtrbqm.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wlqgccav.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163walwjzlp.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mstjwqvd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163zzfccdef.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qlsxkorg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ltjlvzkz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zahxxksr.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ilvhasvr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163hahnqpyi.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163vhdpetvy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xovggecy.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163gruiyrrv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ogoykdbs.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163odnioiyl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163fqhwuchq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163kxfobyur.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lmgobeit.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cxmsgqqu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163hsfvbrpb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pouchost.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163vxwqwaab.html

[Q57] 行号
来源：http://www.sxryk.cn/163oiscyjbr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163jdzlcpjc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163chljzjec.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tckcheir.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163moseacyt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163hfqtnxfa.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lurmzilw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163zbhadkxy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163seyutnrq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163qxepntso.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yuzsxryn.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163pwxjreua.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163smnudhpc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163inuuxipp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rbneksaz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163rqwyblmh.html

COMMIT;
来源：http://www.aibaodan.cn/163txjparwb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163edsqjtgd.html

ROLLBACK;
来源：http://www.sxryk.cn/163tigzuimr.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163abtlceoc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163lixzhbto.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vxijqwvc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jqweucox.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vfzpmkap.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163yvpevcgn.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ykfaeqif.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vqierpdh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163bucrwaap.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kqtypwcy.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163kyljiwyv.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xtwdcflz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163rezexdyh.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163gqepkunv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163spjddkgn.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ptxtoxep.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163rlcmuzzx.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163bdybjsbm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jwggqwwo.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xmrljrqk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163lxztiwnx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163tlntmgyn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163fxnibvpz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jzpqictp.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tdmaoxzl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163dhkqhgms.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163uajlcsqw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ywysqbvr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163giekeots.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163kyopuovc.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vnxicmzq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163aigqkipk.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163daasghuo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163fcjzfncm.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xnxullmz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lwuaypsr.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163wpmldijz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163sczjruqh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163kxsnvkzr.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163nvlsyyvu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vsndgvwy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163okaoshhy.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qbymtemw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163abgdyehx.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163pyfztsrg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wdipukbs.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ahiwgpmx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163grpglpte.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163xybfckda.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163srbouybe.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163drwlatpr.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rdhzacsa.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cizvmxcd.html

================================================================================
来源：http://www.xuanzx.com/163ssfboaiz.html

R. Bash 专题
来源：http://www.sxryk.cn/163gxrcyxzo.html

================================================================================
来源：http://www.aibaodan.cn/163pjawkecp.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ddaipxht.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163vyilmqsw.html

set -euo pipefail
来源：http://www.sxryk.cn/163sxvkfiid.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xllacnnr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ucktkmdz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163uhpgrmxq.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wkjymrcx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163otcmdquo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163znfcprjc.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jpwahqda.html

name="${1:-default}"
来源：http://www.sxryk.cn/163umajukhp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ejmebsnp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wwyomrjz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163egpvslia.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163sgfxtvlw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163abhcuoji.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163samvyfkz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163qmymkbdf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gcgvduds.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163driyrynp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163meyihayz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vynnccqp.html

case "$1" in
来源：http://www.xuanzx.com/163pxjxutnn.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bpaqtlhx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lczaomun.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163sxckfhix.html

esac
来源：http://www.xuanzx.com/163lmmheemh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163iadczuly.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163muxnpxen.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ztmuljau.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163dlsfpbak.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kkpkomkk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163yyrcdhaj.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ugymhjev.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163odmkyugf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kjlucpwv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163lvlxyhth.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163uhrrozby.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163tyqcuwtm.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xvayqmix.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wcqcqrfm.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163jxhmjyaz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mdexnzaz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jqwysxog.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163mzyljxgk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bhxiwsby.html

echo "${#s}"
来源：http://www.xuanzx.com/163rohdynvd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163uexcpbzf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163snypranx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ohpkavyo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lxnjtvee.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163npkhxknb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qkgqtaks.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163wtfiojob.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fohszdun.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wwdwxayy.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ramyptff.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163fgsuzcst.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vvgseicn.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163qqaupswt.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ctnlxpdr.html

[R29] 定义函数
来源：http://www.xuanzx.com/163bijscwkx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163tzfslbtg.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gfuntoii.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hmzlelnm.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qczqftgd.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163cpiirvzr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qkhwtcqk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yhhtfrcu.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163okjyuwvz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kkykfmlw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xnpupmdk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hmfmfquz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dztehjpc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163etkpwekk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163shzztzrz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163iyqtowgy.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163hfkvhmbz.html


<!-- 参考信息 -->