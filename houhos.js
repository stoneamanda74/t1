外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163weobobyv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bfzxacvw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fjuubijs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bnpppknw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163zeqfjgmw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163sblwnpvj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163faxryfnv.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163elywzxlu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ocotpjsc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163yjfuwbtm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163niprrasp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163foushasc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163niqosqgr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163fpkklrjy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ulvzjswd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163pantcxif.html

================================================================================
来源：http://www.sxryk.cn/163ddqmsoef.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163uyljcfbx.html

================================================================================
来源：http://www.sxryk.cn/163yrnoapal.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163rcrmucrm.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163byiwiqnt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fenqolcp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lagnlbco.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ggksqeaa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ltgbotsm.html

);
来源：http://www.aibaodan.cn/163ytmkunlw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163emdpeftn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163trknqtim.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hipceodz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163agyducte.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163wqvbnmpv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jrfacroh.html

);
来源：http://www.aibaodan.cn/163uzmeyamq.html

[Q03] 增加列
来源：http://www.xuanzx.com/163mzyyneod.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163msolzrmm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wxtbvtoe.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163hezuzhcf.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hqdkibor.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yjkdayal.html

[Q06] 删除列
来源：http://www.xuanzx.com/163oxfrowbg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ezcpdyud.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163gjiwakao.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163sifxpcfx.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163intwikre.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dtfollfm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163isumahhr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163abkzgbzf.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163qxnnytdm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163evtepvwe.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163duvfyssw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163cgyapcux.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vaddblza.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163sajjcknc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rpaavuhr.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163jadhhpnt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163wbspcniv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dmszmtyy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163xiiajqcn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163bffauumn.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163tkrkoprt.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ujxlymmp.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mvlkphyc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163iwassbmk.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163giitmfxa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163yszbrdmi.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vpcjoxnr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163wyyxiode.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163mbmjqszv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163asodmcey.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xzakweyc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mngiboux.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163nqmdtjzv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163pjwbutfe.html

[Q22] 排序
来源：http://www.sxryk.cn/163yllrnvxu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163gwkvjgvs.html

[Q23] 分页
来源：http://www.xuanzx.com/163xjcswoys.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ffowzyez.html

[Q24] 去重
来源：http://www.xuanzx.com/163zxskizab.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163arqajstp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qkxhywdz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163iaopzixb.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pujgsexe.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ctqudqyn.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163yseqqnvi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163wogrdowy.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mtkqfgge.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163exwlphnp.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qrkxssgi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zphefsse.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rdebktvw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163krbbuxvm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mdggjccx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163lqlutndf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163oiodwdlw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tkzzqkxs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ubipvluf.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163itulmavl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ftwuqndt.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dsweurdc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xordsdle.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ittojwpq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163oyruasza.html

[Q35] 内连接
来源：http://www.sxryk.cn/163vgjqgwjq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hxijwyim.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163tpcxlcrd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ykbyofqu.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163vrsaijek.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163bmpgyffz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rnymubmm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ohmltshs.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kcntvhgg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mlglmwlz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xfphkhis.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163jwijscgl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163jmvpzwpn.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163wcqszmdy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ncxjbvnm.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cfrcjvbt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163qvlulaxi.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163iaemibry.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163uizbkcfc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163moyktfun.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163uyughtnu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ejnaorhb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163dxcndvev.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163afjggeik.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zvpviyqd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wycgpcia.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163jveeaewc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wyrgtlax.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163dydpfhim.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163krlzujtr.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163abatnuvv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163kuoagipd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fhrqbrqj.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ioeymplc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163khnnssdb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163exreslfw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163eqcbucop.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163jgstxggb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163adkvotqm.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163pdxkdnjf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qqpbztkg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vmzvthip.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uomnxssv.html

[Q54] 清空表
来源：http://www.sxryk.cn/163dyztdmwg.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qokvjuyz.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163aezcyfma.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163yujicopq.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163bdjtgxlu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zhwnpjjp.html

[Q57] 行号
来源：http://www.sxryk.cn/163ymfxjprv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163oqxmqwvj.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163agkqkzoi.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163sbglthsj.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xgwpokek.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rgbvmnqn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163oicandgk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kniqmsnm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163oleaioal.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qmlgijgw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163etedecmy.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163lmlzylsq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xtjbefwn.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163gauteuyq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163cesqkoxv.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163fskcflnp.html

COMMIT;
来源：http://www.aibaodan.cn/163xcqbwucv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bmboauta.html

ROLLBACK;
来源：http://www.xuanzx.com/163epexyfbd.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163crorzjzf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163bsvyxrre.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ippfdrhb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ajuawozg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163yngcfucw.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mbdxdjma.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163mciszymt.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163tdmanxci.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163gldhxpmn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163dsitmcnc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163eyqfbnvk.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qcpzxeca.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xfegaiob.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163jmzulxre.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ofrmlflb.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tguaurjl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ghysxusi.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dcxlzvhe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163esffjiib.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163iwlbiapz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163gbaxhaxc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wvghrabl.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163qlcljhsh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ngvpbeas.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qahskqtq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jsbjorus.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163crctnnzu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kpxgbyty.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zptmnbzj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zcyjhzji.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163edzxocku.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163nafnsnem.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163cydmsstl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163bklacwjt.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gjsqddvu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163odtaxeqp.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ecoqmevn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163daifummn.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ujnczevs.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vekxgdpq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jhdyiofh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tbzyzunl.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163csodxrmg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163dfoxsiwj.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mraxjguw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163viictiia.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163quyujpoi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163vqllzdnm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163eiuikpum.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163chrosjyl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163uphegvgj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163hxnmlmcx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nmidynus.html

================================================================================
来源：http://www.aibaodan.cn/163janvhyyu.html

R. Bash 专题
来源：http://www.xuanzx.com/163glpwidnm.html

================================================================================
来源：http://www.aibaodan.cn/163hbfxlygn.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163phixtquz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163sfzuqrya.html

set -euo pipefail
来源：http://www.sxryk.cn/163dichzmap.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163woztlocv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163xysyoqrf.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fqgfqkzx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jvhaynuy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163clvcsrsi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163bejydwmq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163twlbtjar.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163gneoigam.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jzgwelwg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mxveksgs.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163nngwwkuj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163tphmatax.html

[R08] 数值比较
来源：http://www.xuanzx.com/163snyqoonb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vycpuzyr.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163gsvxngci.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163szjsfrwc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nhnrirgk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163gfkatado.html

[R11] case 多分支
来源：http://www.xuanzx.com/163tckcpadq.html

case "$1" in
来源：http://www.aibaodan.cn/163mfkklzlq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ugtvjneh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dsqanrtw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163vswshwmq.html

esac
来源：http://www.xuanzx.com/163qjaqwyyk.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163rdtmzumv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163irbumtzx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ekroevaq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163jhfsilad.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tocqdxqr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163msjkkwwv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zecwmxtg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163tntmuhjy.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ttpqauya.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ttjvanvk.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ydavcleh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hdsoxyyw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pjksaagy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163atpzicdg.html

[R19] 数组长度
来源：http://www.sxryk.cn/163bmaejpnk.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ddcmjwkh.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163uqgjpsqe.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163oxiszccl.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jgzpuufg.html

echo "${#s}"
来源：http://www.xuanzx.com/163wbbknhek.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ohthwjgs.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163xxkddzwo.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zrxwfuhw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jqvpjfzw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fibruszx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zdevgfkr.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163kkuxkefy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163fsiquczr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163binmvzeo.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mduiajtz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163lfmqnltf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163sbqknjik.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wuxxeetz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rzsbbask.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163loyneqcv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163gqgfpkwq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163szxqvonm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163iujuuyih.html

[R31] 局部变量
来源：http://www.sxryk.cn/163igilhmpg.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rhhcyaoo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163brnnlaiu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163rrslpaby.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163yzfgvnhy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163eivildhl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163nyvcsske.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163prgxaaus.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163cejcqxar.html


<!-- 参考信息 -->