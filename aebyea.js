外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163dcnchtpv.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163arsjhopx.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163cswieelt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163kbzaxxuz.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163bzgdlbui.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ewlmdgus.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rizxzqlg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jnstvtfg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163sooduecj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163nhtvexzs.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163rsfbctnl.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163njpfgkjv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163hjssyqxt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163rxhbxiwb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163qyeuimts.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163sudpqieg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163wvevtmuo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163lrqrgqwu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163lqaetsxj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jmjgoppu.html

================================================================================
来源：http://www.sxryk.cn/163ohntxgok.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163tayzbylp.html

================================================================================
来源：http://www.aibaodan.cn/163botvcngh.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wtolbxlj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qmxhqwwx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dvtqkuib.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163emtpnjnm.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163pqkkzqrz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163nhwptvie.html

);
来源：http://www.aibaodan.cn/163wmtfeifo.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163myeqfrxa.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163inhdwtbd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mtvuoqfo.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ngmtdkis.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163hpnlinql.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163vjeyxxsm.html

);
来源：http://www.aibaodan.cn/163unilpicq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163gniddjnr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qvxopjkz.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rokbqhyl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163tfnveyzi.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zqwcoqic.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163wxleeong.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163garwyksg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ryuqngza.html

[Q07] 删除表
来源：http://www.xuanzx.com/163tsfpvpsy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163rqanokcl.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wtxeakog.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mawusvdo.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163aahcowab.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163eyipszds.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163pbuhqujj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163qhvjcdoy.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163tknrxojx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fnmbjtbi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163tiiedram.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163uawmucav.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rdynmyao.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163vikmazyu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hptqjycb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xlggiqld.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163dwnfypac.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163dqeunqqw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dsfbqxsp.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hyhtrrsc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163erilmgkc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ruwipvov.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163lkeeffpt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163imewglkg.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163yuqjhvzj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ykijceit.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fddjubts.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163pnkviaqw.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pzzcbxej.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163xagozmjz.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163rytmcccs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nmfpyjju.html

[Q22] 排序
来源：http://www.xuanzx.com/163iznlvlua.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163gtbsoypc.html

[Q23] 分页
来源：http://www.sxryk.cn/163rnfuglex.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163btgjcwit.html

[Q24] 去重
来源：http://www.xuanzx.com/163jquealvo.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163fmdlxusx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163rprmygsi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tpvdewoz.html

[Q26] 计数
来源：http://www.sxryk.cn/163wnvrssdl.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163toiusbnu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163zhdgfmaf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163sjyamrjc.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163xqxqesjq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dpavkayn.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163slkyscrs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ttidiuhc.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pbrayins.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163scehtvbh.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hhfwwsig.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163pxqdrovw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163atbahgxv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163konapllb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zjzozifc.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163iztdjabr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163yuntksdc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gzfuflhw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163tnrbdzji.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mrarntwy.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163coutrrpi.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ooolumhx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ddcnrfjh.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fbknpipe.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ooemtfge.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gtoijkti.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hsbvgpzm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fpovsces.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163hppyvtnt.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163amwiqtwr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wqhmuwmp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163hivzusqx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163qmzsxuiy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163lfxdjjxt.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163sqcjqmja.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jgbwuoqk.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mvuuaxxz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163cwxfljrz.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wlegclbv.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163uqlxtatc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hwflxnpp.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ezphlirh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mtqihvvc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163paiteqdz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163dozbfryc.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ontxfmcn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163oadhavxi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hjtvwely.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qucezgue.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jwrgrrzj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163uxztdmlv.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ooqeugyq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163axniivxg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163rduurqpm.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ujillbso.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163iduyvnic.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163culhqrno.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lixvoymp.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163gxmfphpi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wxgkoawj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fyaityoe.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163nozdqeqr.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tigccwni.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163aovxmhoa.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ktheiwkq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fcjyltyo.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vjbklyej.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163egxblhiw.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163loatffqv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163rcdgnsux.html

[Q57] 行号
来源：http://www.xuanzx.com/163motoleni.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rihlmgnr.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zgaaendq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tmfsqhkg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163zkacmrsh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163byvoauvu.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163juodqlez.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vbsbiody.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163bsicsgba.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qhdimvse.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ztxfqsxc.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163tgonkjti.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163phbkmqvr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163rpmycgiv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163wiocpycr.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ytxsgrxv.html

COMMIT;
来源：http://www.sxryk.cn/163pcrutcof.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hwdxksky.html

ROLLBACK;
来源：http://www.xuanzx.com/163awddhyyt.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163mhqrwpef.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163isumbwze.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ybmoxrhh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163npvjjsrn.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ouzxoqig.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163chrodktc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kjvbrzwa.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jgtwyexa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tvzqyvjx.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pknelrus.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163pnhdpjwq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163bbsukdli.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xcqfbmun.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xzccxbnu.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163cmddlrkn.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163eovslhvi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163gnperjzd.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163icocxaci.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163cejzneid.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163madqgyab.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zadwigrh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163mbjdzizn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163widkongb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ksxjkgki.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163fhsxhgie.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163zsborgtz.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163iglmzegc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163btykqjjq.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163rkwgjlsx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163lrphpajp.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ozmwzoic.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ywvjfrqc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163mkceeupm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lmawkssv.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rhvethte.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pfeluroj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ckjynygg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zmqwjhmf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wawphlju.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bgbragjn.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ljxzudwy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163jpzgwqev.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163kmwbbypm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163hxostzmt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ztfrkfmw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ahedqhkn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163flbdkode.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ruvavjpk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163yratjozh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163xycxnyaa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163phoypfxi.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163zuquhmoj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163nhxiybcu.html

================================================================================
来源：http://www.xuanzx.com/163nelezhzr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qmykhfhg.html

================================================================================
来源：http://www.sxryk.cn/163pqvohzti.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163krvucjxl.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163aubvqwqk.html

set -euo pipefail
来源：http://www.aibaodan.cn/163vqjazwcv.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163stpvamqu.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vpoovckg.html

[R03] 只读变量
来源：http://www.sxryk.cn/163msgfmyxh.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ubwwnnch.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bjkkflpj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163uoiuwqyg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163stmregjh.html

name="${1:-default}"
来源：http://www.sxryk.cn/163coielgbg.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163oztvcyma.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vtzvhxdp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dzvohkea.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163iswdpbfx.html

[R08] 数值比较
来源：http://www.sxryk.cn/163vesagacj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nlabhkah.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163uznjnfvk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163tasqmclg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qajnqzfz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mopnkyfc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163bwchevvb.html

case "$1" in
来源：http://www.xuanzx.com/163puzxjufn.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163srhxilsd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qwvjqrkn.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163pkgjzitm.html

esac
来源：http://www.sxryk.cn/163rdrpuaoe.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vgkvncpd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bsdzcpsu.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163yjsgcdfe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rhmivvms.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163gppwibex.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163fskrjuih.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mhktcsew.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163evmvqaeb.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163mqwcgmxp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163trcqdqpw.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163zgxoxooo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163wkrubiil.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163zqonxzox.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163fcotsrov.html

[R19] 数组长度
来源：http://www.sxryk.cn/163edgdmcrr.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163akyevryd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tcxetzcy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dkeamual.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163fjjoqcdw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163jcgxxuag.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jahczbco.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gblhexvb.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rgnswpxq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ifpzffii.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163swnxuvoe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163dkfqclyj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jeodsjbt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mzhvhqmh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ucquekrj.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163aixsjpzi.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kuwhmjjn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ajqsbkcj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ekilawcp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163eslfghps.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qpkmjchj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163rjkwmwvb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163dmtazszz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vxvjatrk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ataidemn.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163uajuoogd.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163tuszjsxe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pervzsvt.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163frckebdc.html


<!-- 参考信息 -->