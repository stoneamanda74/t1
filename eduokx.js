外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mmsupwtx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163xfcchqqn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163padtltnu.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163pwcojhow.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163pkeijjtf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163coorloom.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163frujjdfb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163pckjtfst.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163abftntug.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zcjmfjwa.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163qivzzpqv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163acbjfdgt.html

================================================================================
来源：http://www.sxryk.cn/163llscigoe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163navgsljh.html

================================================================================
来源：http://www.xuanzx.com/163ddmxvgce.html

[Q01] 创建表
来源：http://www.xuanzx.com/163mvcuperv.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163pchjyhov.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pcrhticq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163itsxxbyz.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qfxrgcor.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pnexppxq.html

);
来源：http://www.sxryk.cn/163gvwltnxv.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163kruxmwgc.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163eaivaffj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gunmvodq.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kgkfhxll.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ghfloyhn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gcwxnurl.html

);
来源：http://www.aibaodan.cn/163hghxlizl.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sltqkevw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163wvyhrrsy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163hbcyhnyc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fnckpaxt.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163plaxfhby.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163bygboizb.html

[Q06] 删除列
来源：http://www.sxryk.cn/163mtxyvwws.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163nfibjcoq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163wqmxtflr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163pdhkeisx.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163pomifvdf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ysvhxsxj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163pwxcfwtb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qrifgipn.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163netipnoy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163efvcdieb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163rgbnmegb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163llgfwnbl.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163fahctbkv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ypponuxp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163knudvzet.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ggualtqf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163cblstzww.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163pwrhzzpe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163fcvxkewn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163slhcdyhx.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nkmmafqk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uwnihayr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ayqehexx.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163pmtkjrud.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jcyldrdb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wbqxiomr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ujogzgkw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163lqlqxgfg.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163gvosaebi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163iufywmho.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163rcvpfddn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163oyvgxtpm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zxidclav.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zoxrzbzn.html

[Q22] 排序
来源：http://www.sxryk.cn/163zuthjgoe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163dplfjibj.html

[Q23] 分页
来源：http://www.xuanzx.com/163lcofjpkt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ilfvonok.html

[Q24] 去重
来源：http://www.sxryk.cn/163mvobliap.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163jtqfrwsm.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qhqhgkti.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fdbiqyth.html

[Q26] 计数
来源：http://www.sxryk.cn/163mrzxacsd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163yvctsiue.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xolasyyi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mcbahwbb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hwktykft.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ikqlnhhi.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163paeysrdj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163qeiupsvb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vapikmwd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nbeukgjg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xejxtaoz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163tkbvorqi.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163yfklocmn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eghwubin.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vtkdketi.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163voicbuzv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rruxkoox.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lzjzdwqh.html

SELECT * FROM (
来源：http://www.xuanzx.com/163aqvtxzvd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163kwjnbrro.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vzztujtc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163nntlwccr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163frntjpjd.html

[Q36] 左连接
来源：http://www.xuanzx.com/163dhtjuewe.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qdfkmuqa.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163getnnxhl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163cwlgjgah.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jycuxrfi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163dmtrshpn.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163hkmpkjdz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qdmzdhlw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ffgissmf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ruotrjrt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dywjpnnj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zlfdnnvo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xaktoujz.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163tuwdkacy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163glxswlxi.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163jqluukdq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vlwoamxm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163bojgcvbf.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kigbtdhp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163iyyzncbo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163kapnujiw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ppagpfbh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ivdeeyuk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163yznrfwon.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163jonoanig.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ndyrwpil.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ncmlpfwq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qdmhxksp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163xojtfvmd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ezopmvzt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163iulzthrr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gymdkysi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163hslhlibn.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163jbadkhak.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lgfhdgon.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163wwgskwrw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163xmnifyyo.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163obliauby.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163amwkeyyz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163aioyhsnd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dixxwewo.html

[Q54] 清空表
来源：http://www.sxryk.cn/163stjfnaet.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vvvyueld.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163redidaif.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rnlxvypr.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ijcryree.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zbhcfbld.html

[Q57] 行号
来源：http://www.aibaodan.cn/163pmtesdva.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ifuhjmpc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qndejfau.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163pdcgyiha.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163lxbrarnl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163cpxjyeuo.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xvwlncut.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163supqoqqz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ypdkybox.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xaqelfhg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zholjghr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163hdlotcvm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yplfupfq.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163vbjfhnyn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163derjgmkd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163xddxdkdk.html

COMMIT;
来源：http://www.sxryk.cn/163obbryqui.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163tvzljvfm.html

ROLLBACK;
来源：http://www.sxryk.cn/163oduyijpw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163fmgnxwfm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163teeowrnh.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163iglpoqpq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163vsjzjocz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163azsdbkjk.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ytxgecsh.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163dzkniczm.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pahwezba.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163kzuwybpc.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gvglseaz.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163wxxtojpa.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163obxvjyez.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163tulnsoun.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163cffkcock.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163sycqurdf.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163tpnbcgif.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163unnxymux.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163givyywsr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163mprnzplk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vejzbjmp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ujdqzwlz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163owqpvkjp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ewpgwdqa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gzwsfbvg.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qcnsdqgy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ybdywhhl.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ddlqsxdn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ykixnvpr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yfhiujuo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163fzodoyxw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163vbitqzft.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163sjlhgecf.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163toangxmb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rcblkbkf.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163kbghqdpg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nannadie.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163clauxehz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163pmjhdovc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nomlngpp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lbyhtbna.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zyqxkssl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163lrksmdkg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rvogcija.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jxvuzpvq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163lzbnxizs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163yqtcypkb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hhlyzjen.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163yysbkiei.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163dwmnnygg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163kjtyjmrc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163epxsmiva.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163acqnzjsv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163btkyffar.html

================================================================================
来源：http://www.aibaodan.cn/163nzsrzqqu.html

R. Bash 专题
来源：http://www.xuanzx.com/163rqewyjid.html

================================================================================
来源：http://www.aibaodan.cn/163vzrjshdv.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163fltuzeqi.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163zkboauto.html

set -euo pipefail
来源：http://www.sxryk.cn/163qqsddcte.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163llzfeqft.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163gezneoti.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hbvtvhoc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163hfsoiyus.html

[R04] 位置参数
来源：http://www.xuanzx.com/163cswdkfut.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cickfrdx.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ilcswmlv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163brhcgyrt.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wxxesrox.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fogyquuq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163buxeqwog.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163hucqeeiq.html

[R08] 数值比较
来源：http://www.sxryk.cn/163pcgvpcon.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163sxhsgxck.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rgydhocu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yuywtpck.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163gdgfgmmr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jawsshwa.html

[R11] case 多分支
来源：http://www.sxryk.cn/163yjozgutt.html

case "$1" in
来源：http://www.xuanzx.com/163nnqktbfc.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dlgzhtmh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nmgvsley.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bmaicdmd.html

esac
来源：http://www.sxryk.cn/163htpsngap.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ncumjpdi.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163liwmzxbw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163zkdxvpcm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wxsozalv.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163mxdukstm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163wjtwyxle.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163yofjzaly.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163olqvwnyt.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163evqyffih.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qzknjyon.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qgdhkugf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qinfiryh.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vshrltxx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ptrbcsif.html

[R19] 数组长度
来源：http://www.xuanzx.com/163chcdetog.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163htprjxlg.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jaemjhxt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qwzmxsmf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163mjajajnv.html

echo "${#s}"
来源：http://www.xuanzx.com/163bsqhphzr.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hfzezodr.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163bcedycno.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163psanrhix.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163gnebcjya.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163eblzjmmt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163dsrgmpca.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163tudwmofh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vzxrgaiu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163uebjhkmr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163iupugqmi.html

[R27] 算术展开
来源：http://www.xuanzx.com/163tljeimoi.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dnfpmcgg.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163cvxgrdix.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mgfkbmxl.html

[R29] 定义函数
来源：http://www.xuanzx.com/163aymhtapy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163inygnzzu.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ajvauomf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xqxtrbqs.html

[R31] 局部变量
来源：http://www.xuanzx.com/163qsosajgj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xljhaggg.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dvhajaep.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ejcogzke.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163abjhgxdl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163tjsixgbb.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qjsslchv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xesveblz.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fufaezjs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163mobsjgci.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xufzwodp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hhcoovny.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ewvosepu.html


<!-- 参考信息 -->