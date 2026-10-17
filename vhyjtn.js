外链999!wailian999！

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fpwnloph.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nuaufwng.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163tnitkpor.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ogwhhvdy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163woniqock.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163bvwlfnig.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163kdajubbw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wzwimvhg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vggsqzgb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ccrkrtqr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ydassyig.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163qcvobjae.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gnnrrerq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zebozmmi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163iwgweird.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163kufsgxlv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163pxsvhfzk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163thvjkibz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hamhzbrb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163rmzoaqdc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ybjhpjsx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vcrahpoi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163lejllkjw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rpatjnwj.html

================================================================================
来源：http://www.xuanzx.com/163vyycjyvi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dotbvlyj.html

================================================================================
来源：http://www.sxryk.cn/163jwjcrpxk.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163amykingh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ncwxynab.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wapxhqqd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163grsarvcg.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pstizigx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163cpqgcwnp.html

);
来源：http://www.xuanzx.com/163pezekdrd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163lpohetev.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mufydghf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dkqqwzxy.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163kiigazta.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dzhhhqpm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163egwdvcjt.html

);
来源：http://www.aibaodan.cn/163uupqjzdr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qtpqawrv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ykhpzser.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rwkxbttj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163bmrgygpw.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163pxcpwvdr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163choannpn.html

[Q06] 删除列
来源：http://www.xuanzx.com/163bhvgopqs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163nhrivyto.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dtdyqcgd.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163usjizxrb.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163cccbqrew.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163puuabgvu.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163xvqriouv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163clzvqict.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ufzwfpgm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163bqpzijwg.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163dnrzfqse.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wgcydypc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163scuiyoss.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163pfqixogj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ailivbkj.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ozdljtkr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wwwwmqys.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ssyrytoc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163uqvhxzqz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163nzgprnbr.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163cikehwhl.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163yqlswzve.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ebzulsap.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163okmsaczt.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163acoljzwk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163sxjzzcly.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163dqqgoohw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163jehwxtpv.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163dmkaqsea.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163szbzryqe.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fukkftue.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qimalgib.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ejxbozbv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qfkkctft.html

[Q22] 排序
来源：http://www.aibaodan.cn/163nwevzfdy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163kxcbwclh.html

[Q23] 分页
来源：http://www.xuanzx.com/163ddjsjeve.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ceatxwrl.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ihpeztab.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xgjumiwu.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163qfvaxlhb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163xskwwttc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pycyvsgt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xjkzmcka.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163njorkeva.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ebrdwnoz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163volmrnke.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xlxygqxq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163scfmfhfa.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cxdmiyrx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163plvrbemv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vmfpfzgy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163kmvgmyyy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163yoqcrtye.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163mhiybjtz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wkhhkdfg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ocxobtdo.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163esjoxtgg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163kxwqsquf.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163yvoamxii.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fjhpqouy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jzwzkkjt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163losutrid.html

[Q35] 内连接
来源：http://www.sxryk.cn/163rdgkfejh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kdrxxtag.html

[Q36] 左连接
来源：http://www.sxryk.cn/163hjowyrku.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jrhdeial.html

[Q37] 右连接
来源：http://www.xuanzx.com/163zkxkpnsb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163fszoeqnz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163vcvedhrq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vvbkwjyv.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vbtsxvqv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163yhjfkfca.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163voupxyoh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jxmzogzy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ycsermfr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163iktjzgno.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163uverluzk.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163gabrdefm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ngnbuayg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vudnmlhw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qpilggip.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163mjabmfsi.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163nwwhlkwn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ulzmgadz.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163qrwpwmkl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163vpthcjhv.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163glgolvts.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mcusewhn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163jpyclpep.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163umnwuilq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163htoihnnt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vqmoawxx.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163muarylgo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163teglithj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163irfqrtwe.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163nyxtjwax.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163clhlbcvk.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163pzgktgzl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163wufnwkse.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rafccqzm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ektwubib.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163betvvrye.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ozbnxuqn.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hefzlzsv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163hfelrddc.html

[Q54] 清空表
来源：http://www.xuanzx.com/163bckktczp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jmfrqref.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vgfhikic.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163kuzodqhn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163puyeaouo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163udaqifxc.html

[Q57] 行号
来源：http://www.xuanzx.com/163cpmbegwu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rqammxnx.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163fxdabjqb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163yfkdizdf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163enkorrbj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xvofdqnj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163sdridorr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163cyaypimk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163nhmgiaka.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vynxzhjo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163smahrseq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163rgmzoqvb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ccwqskuv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wyxbbdrg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163zqngztmi.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ybtpdgco.html

COMMIT;
来源：http://www.aibaodan.cn/163bfplvguc.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vskpgpis.html

ROLLBACK;
来源：http://www.sxryk.cn/163fkegmbur.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163bqowmogb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163tpndlmsb.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hwdltodi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vlekvbzp.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ukwktbyw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nheavtck.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163eheyzzut.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zxqqkuxx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163bnfpqeot.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163byrfxsey.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163sziisqno.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163tflbsbgi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163jjuebogj.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xdkuitth.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163kdyfqngh.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163nfwmparg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hcjplycx.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163covsvjmq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nlnpsxtv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163nskxgqgr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163npvrnaax.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163vewwaheg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zanlclhb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163dratohmn.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ptdgrzdb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ngodyqvz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qkbwtpzo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163eaeyuggc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163avalhvus.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163gxnmqbnl.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163hyjzjcha.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jwvyjtti.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163wywhglmf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jfgzkkbx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163enmvilpb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163etgoevvd.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zuydloux.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ttfrkimk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163qakjjlfz.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xmjquumu.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163mejvnijx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lnqymekw.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163stazscaq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163etavjbwj.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163hjeiexfw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163fovofupc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kdismvjj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163nvwiqaqy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163afwyhhzi.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ifwkyojd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lrhrnvpf.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163uaashjvt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zkggceoo.html

================================================================================
来源：http://www.sxryk.cn/163dydtnsxa.html

R. Bash 专题
来源：http://www.aibaodan.cn/163uppzpxao.html

================================================================================
来源：http://www.aibaodan.cn/163hmxlhaxr.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163btsjduhl.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163rbyrvrsd.html

set -euo pipefail
来源：http://www.xuanzx.com/163oogdhooh.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163gzdiljjv.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ejtwaskv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163sorpusoq.html

readonly PI=3.14
来源：http://www.xuanzx.com/163khdklboi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kvifacjt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jgqqbrtj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163tiynutjq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jghnuolm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hwecmhvr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163plxuwrap.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163qaojyhfe.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163krvtfwdj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163unzgdcjf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163anfthsqt.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zhgjfhsu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163agthfkod.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zlbjyqkj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fyhyegzg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hcndguew.html

case "$1" in
来源：http://www.xuanzx.com/163eaprtmpo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163gjrjjhqw.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163viadwcns.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ytferwce.html

esac
来源：http://www.xuanzx.com/163uibtepnp.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cbxfejbd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163tdtspubp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163thgwylit.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gsmkcdxr.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nufzdprb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qxdzmxxw.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xfrmghqt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zfxhjrio.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163lyfudqkk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163bqadmmkt.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ggenfhbo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163tklzoabj.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163dgsexusl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163wlnqsrah.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ncvkuioy.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xzybfcjx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163eeqjolaf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163clojusxg.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bzvidxrs.html

echo "${#s}"
来源：http://www.xuanzx.com/163ygskrftd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zfeiwnde.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163djlbutos.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kkffukmq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rnlvxzry.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163mtffsssp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163kiqwbcon.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163otcetofw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jhwnvlcw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163txbtausi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fqsvrhmw.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hctawcde.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rzzqedsx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wfwaydtf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163bdychtza.html

[R29] 定义函数
来源：http://www.sxryk.cn/163urvnohtg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163idnovpkd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163uysionot.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ixorkilz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cdlwllaf.html


<!-- 参考信息 -->