外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bklwgazt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dkdcerto.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zdbznmyy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163akpdcwak.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163iuizioqa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163elfznikc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163vbhhnris.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163fpwgnzre.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163hzphsize.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mkwevhup.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tyycyppw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qyhsaweq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hicbwtbe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hritmbgz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163nubgndip.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163pnqkbybc.html

================================================================================
来源：http://www.sxryk.cn/163uprctsch.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lwsxywsd.html

================================================================================
来源：http://www.sxryk.cn/163fojdwawz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wdcfxahg.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163mpuftndl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qtasiinr.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ndojjjjb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ljxewzlb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163phxzrfvk.html

);
来源：http://www.sxryk.cn/163utpooenl.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163nzcsejrf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163iqxpnvze.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lxsiwbpf.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163adhmpllj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ngybzqqu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mlftwmby.html

);
来源：http://www.sxryk.cn/163tdtxrwjn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ufewvher.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163lljaqtlc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ydzowdof.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163mwsndext.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tdhdozrt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ktxomnde.html

[Q06] 删除列
来源：http://www.xuanzx.com/163kribzebn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163vaxuciro.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jxjumtyj.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163gqvwihtf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163agljaoow.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163gxqlhdrv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163gvyuvler.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163cljepmlo.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hntfyxjf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163wtpuhsmf.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163grsanqyi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163jinbzezq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163hqsilbcq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163iczbnfwe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ttpdlwwd.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tzyviuqa.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hlouohru.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fczxufrm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163udmkguxb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ygayngxc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163iuznxzmw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qzwkwpie.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163xaralbve.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mezdvvln.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wmhbvzdn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163nkqhxbgv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163soxitjkf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163cjpamcty.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163vxmkvoth.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163codatfoi.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163lahyzlvl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ewnujiqw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163hoskhhgy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163eblwxysa.html

[Q22] 排序
来源：http://www.sxryk.cn/163kmgprnlk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163kujwyqzo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fuhsnmjw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163agtrkcgo.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tglzmtnm.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163apbozicg.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163botgfbxk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163onyhlfbf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fznfgnge.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fgfmwtfd.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vysvsmzp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wazoneub.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dwqjcigs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hzwwgiyh.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ytpwbhll.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163jrtlcrvf.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163svszpctr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fsdnnxde.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hbsdbgyo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163xuxkoiky.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163aettkxde.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tulfnhwg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163pqtkwlyf.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163xrhsvpni.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163cxyoimtu.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cyjcvqos.html

SELECT * FROM (
来源：http://www.sxryk.cn/163xpfyixex.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ufnythtj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163vtqrolhu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163irrvtdst.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163dwxlvtlj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163cjeupjeq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kbqczoyj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pfcugaav.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163gvcbdkua.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ifjqncoc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163agawlkow.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ltnlglla.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ijfmyfiu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163thrpbsxi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163emtfounv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qofdtggb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163bfrmpkit.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163lfrwhgza.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163zifnpukj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163undiohzt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163kturphdj.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163voutymrc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hxwqfitr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ontfcidd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cznmcfon.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zrzudwsr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163noxrebnl.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163abmavpgy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xdpzveqk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163iytyxlrt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gsipckfe.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wjwtkxvj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nsvwixss.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163weaafbyf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gixzdchu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mrfxpwlf.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yeevukrf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vklqcgkw.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dyyklosb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163edyllcbn.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pogtueop.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tetrcxcn.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163tvddyyoi.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163pkfkfecj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xhpvepmk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163edngwtnp.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vtjxhsvs.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163gplthpqc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jxwjwlez.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ezwwgkbc.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163kgjrlnbf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163lfasmhrh.html

[Q57] 行号
来源：http://www.sxryk.cn/163oitzbdtr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tarwucpk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163mbetrfnz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ewlnezpf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ektmjsqw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163eekhujum.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163tnvkobhe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rdmhwuoc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sllogdup.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163wnplzeki.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ebfkzgcr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163moccbded.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yjacpetq.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qfqeilvt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163enhewosf.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ofdvqrlk.html

COMMIT;
来源：http://www.xuanzx.com/163zmhmubcq.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163lvlnojbu.html

ROLLBACK;
来源：http://www.xuanzx.com/163hzuxmphp.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163abojnpzf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163efwoibqi.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163mhfetzkm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163bmjfcwpw.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zqhhcthk.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163wgzuclvx.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163fntrmfaz.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163krblvnxp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163qtisjfpn.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jqblbymj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163gqdcwsww.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163bkkloxbe.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vufjixzm.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163eorvgycz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163wejhvfih.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163tvcuobfb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zclbmtjf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zkhfcbfi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sytrfzow.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163jdxygxqs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163rdekmddz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163tihkyjpy.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163sfwwrnnz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gndvexjb.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163eozbegzm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163dubokcut.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163bhhyfuym.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163tnzpwxbe.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163tyamrvew.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163cnqhunyw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rndjznvp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163xupbpkxq.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163raofkfyq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163izgcshaa.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163trxehykj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nbjoudth.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ainaidib.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163daddmmdr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wqxdxbvv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cwzzadpo.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163twysqdvm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ulshivev.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163alqydtsy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rhhvtfoc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ynswjgbk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163yhscclxw.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kudjmrtm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163igycrtzk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bdqudvxu.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163kmnuhhjd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163lqphxpgq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163uxpvnkew.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163yejvbrej.html

================================================================================
来源：http://www.aibaodan.cn/163fcybjzsp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163annxxcbf.html

================================================================================
来源：http://www.xuanzx.com/163izowqoyp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tvuhnkgh.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jejxlzze.html

set -euo pipefail
来源：http://www.xuanzx.com/163jtigyofn.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dnruurcz.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163gfkyhdvo.html

[R03] 只读变量
来源：http://www.sxryk.cn/163drqqnzrw.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163tnobisbm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zoayjuiu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163iutskzuk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wnlzhjnu.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163uulndogj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163uftkfxcn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ahyzgzgk.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163tzbembab.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mdawqmsm.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xewgiksj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163sbeucwjo.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vocuwyil.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163mihbpvbd.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ojsrfsch.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163voshwevq.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ncemcbgn.html

case "$1" in
来源：http://www.aibaodan.cn/163ftybrpwl.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xomxusgf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tbbjsujc.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uixdpgpr.html

esac
来源：http://www.aibaodan.cn/163kwhawflx.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163xmewngqo.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163sqvcemsb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163uejhpljo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163rukgspvr.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ouxxjdsr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ujzhvfqa.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ctbdaanq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163bowjeizs.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163uopkiiqp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163smnrsrab.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ejkhjyfc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163riquyrge.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pxuysmbh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ihvwrfir.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ueajvmdl.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163avwimgjd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nycqgaqq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wetsfiql.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ksmjslqt.html

echo "${#s}"
来源：http://www.xuanzx.com/163ttaqghri.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163aphpftsc.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163upysctzp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163dywukvtu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jixrgxio.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ybyhvevl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lxpccaan.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163cpgptsrm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vqhuubsq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163jtljfrbz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163lbqnycmv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xutoshdc.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163wzhlyyiq.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wmdwvdhl.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ahdhjfzg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163aqvcvawy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ubwnvblu.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163kbsixgim.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163plkfaefm.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hpwhqegc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ldddganj.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163uqvjijhk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163prpxssht.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163tyeejwpv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xcednbtu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163prkxbbgk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qyfhjoge.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163orkmjusd.html


<!-- 参考信息 -->