外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163hajmocea.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sxxbpnao.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qcqtekld.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163tcdnvlou.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vlxrkxip.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163uulxfpwb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163detgffit.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163zcxqbudm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vjkillbe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163oycazvxu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163rzjkngcu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163qvpbabga.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163iqfnzlgp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163sgravgjx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jzknqgru.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163auiwhsya.html

================================================================================
来源：http://www.xuanzx.com/163bmhkwknm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163yipzxfww.html

================================================================================
来源：http://www.aibaodan.cn/163hmbjazph.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wrwdmkdj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163dcxcwxky.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163svzsgtvt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163khcxsiea.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163fmzjifpf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163issxxnmx.html

);
来源：http://www.xuanzx.com/163zbyxvobp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163otcudrqf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oaxywbah.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163oqdbmfyw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163isljvgjw.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163tsrawqkq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163uyvmgqrc.html

);
来源：http://www.xuanzx.com/163sthpgtnf.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qregazte.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163coprnxmt.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163zrznmjtm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ptvszoca.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ezrixhfw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163qjamfcdt.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163wjtxdjzw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163cchfysmx.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163yqxvylyn.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163yrfonjwn.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ucmrqyty.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163xmpqrunf.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jehyvrmq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ukxerzab.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qdbhhwws.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163goemjybh.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tbpacmnu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163oopiigjn.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ytniugrc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163bfdqijum.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cudzrhmu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163oabbpnoq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zpudkbjr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163edzdivak.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163dzhblhbg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163adnbpjyy.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163kyociqzg.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zpxjaaxx.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zmwhbfgu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163spgmlfef.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163isbamdaz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163cxxsyhly.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qlassckc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ubgyexik.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163uafbkgde.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163pusbzwwa.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163owycohyu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163bxeeqgzj.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163imkajsxy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163hqguaaar.html

[Q22] 排序
来源：http://www.sxryk.cn/163nkbbtndx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hfqdarsl.html

[Q23] 分页
来源：http://www.sxryk.cn/163sugvyici.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jlulwvsj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xwzetwof.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163mjevmunz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qhjnytpv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hfyehhcl.html

[Q26] 计数
来源：http://www.xuanzx.com/163qzbqcoda.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163eyrlgkxd.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163oneevkjs.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xjzdmxni.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cmquxboz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163drzsdpby.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163tshcndkl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163mzdxklrb.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163hdidkczb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cmwyfuug.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xokdzqld.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163rxifbvmp.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163pxupxfwb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jzqzdxbf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xqorxhzj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163khigpaut.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163oonwlows.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163oujpitdw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zqjmombp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dxzyskcp.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nohjlsbm.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163qntunbnq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163prgyjwdz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vbygypfy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ywfjqnwt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163pyxbsnvy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163nimvsmho.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163zhpfeioq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163fwjaqjjs.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ascfryhs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163lmwpetrs.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mjpaxmwk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ykcpvsjv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163oevqrnvn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163xwgbjzmt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ewxvxxas.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163jpkbbude.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163crhwztfe.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163emcnagpc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lmrucrzn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163agytfjcu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jouqnzey.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ywamnoue.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163rvzodpib.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163uwfoleyy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163coczwvgj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bjzousxk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163gqagtoso.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163yizuzbje.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ztcepssv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163pnoxuuek.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163sglwpjka.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163wuoqbvvu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163zwgwnnnq.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yebnyrsx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qxdymcxa.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163diwdwhla.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163hiemeujc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163opxfnldj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163gamliqkq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163sqdoeqzg.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163llfbudmn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jxntrgfl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ldxtbgnv.html

[Q54] 清空表
来源：http://www.xuanzx.com/163vojabifd.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ngtzpbjs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163bgkmggva.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ogvcznlo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163qkxzjnow.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wxrwcnry.html

[Q57] 行号
来源：http://www.sxryk.cn/163ykjrfvwe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jqtimhoy.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ajsfmiqx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163lsfxiaes.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163mtemcizl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163qxairkml.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163cjymvcly.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163cgzfsdvw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xqwvrkpb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163haqqihmn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xcgrjqvv.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mpqifetk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bbsgseqh.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163qykikhnj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mfmpocoz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163icmnvjif.html

COMMIT;
来源：http://www.xuanzx.com/163sczxgwcm.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ahzdzotj.html

ROLLBACK;
来源：http://www.xuanzx.com/163hjdkrrsq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wzfbwkga.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jkbwbewm.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163nbuaozed.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163vmuwlfee.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163sznkfexx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163yifcyqsx.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163feoosjnk.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qxngmixp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163vfgnqoxu.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xprianqn.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163quazpfsv.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163okuqulyk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163wneiceag.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163jbztoudf.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163lhuywqco.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163oemucswm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163nqeiomam.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xnaiblmd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163fakhrjzk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xpeapkrq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163equbltdl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qpfeixkd.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163htjymlyy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163yovbwcoc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163oxglygri.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gbdigflt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163pyeiiiyr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163mlohyurn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163vzvbkbwf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163nbyqiwmg.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fmbebatu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163nxiczhbd.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163gttyjipl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163xczvtudx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163qrkumaiu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163jxfyiuhy.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163eikxutep.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163xwbtnole.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163fnzjxuys.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fhjcbaze.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hyooumzi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163kxpronhh.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vhrofzld.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163dhhmulte.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163nxbqieql.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163yvvbybmm.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163mlajueoq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163rnfwarvi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xrebfkla.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163icxrdhgv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163zwkkvwsz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ukuzczud.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zcssaoxp.html

================================================================================
来源：http://www.aibaodan.cn/163bnbnpenw.html

R. Bash 专题
来源：http://www.xuanzx.com/163pdnishhp.html

================================================================================
来源：http://www.sxryk.cn/163ohoyyjki.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tgiupdln.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163kreaiyut.html

set -euo pipefail
来源：http://www.xuanzx.com/163mpfcaset.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163moljzpiq.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163vtcrotiy.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tcrmtqcy.html

readonly PI=3.14
来源：http://www.sxryk.cn/163eizezael.html

[R04] 位置参数
来源：http://www.xuanzx.com/163fyqdsaxf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cpeetbxi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163gjkomlnv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163duictdfk.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163nzuwmiul.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xrwobcaf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nomvnurz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ikeailza.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163syoqhswi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163iqhzwhdw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163oohwuonp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ykrxdfab.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dfvlnrqc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mexxygmz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163dfgaklmu.html

case "$1" in
来源：http://www.sxryk.cn/163qvkkaimk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fsfhvglx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163yeyqwotm.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163rudnnsgo.html

esac
来源：http://www.xuanzx.com/163zfljokar.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mcehaqux.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vltrykux.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163zyaxgzwb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xuzckuyc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163uzvorkcb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hqaqvkoz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163srczzfen.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xvqlhrfn.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vwzcjxcx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163nmdzppsj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rbpfklog.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163jmnklvnz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163laewzsed.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nxaayeez.html

[R19] 数组长度
来源：http://www.sxryk.cn/163yegziiew.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163udoflihe.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jjwydywb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163idvsqbkv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163essmrktx.html

echo "${#s}"
来源：http://www.sxryk.cn/163punquxaj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163gwpyyahm.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163giovcomd.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ccszfmnp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163dmobntzb.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163iwharxud.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163bbgmswaa.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163czccxyyk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163zbnymhzb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163osligmqr.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163owlmzrif.html

[R27] 算术展开
来源：http://www.xuanzx.com/163nftjzbzt.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163eouqgvqd.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163heibyuik.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163opqjpyse.html

[R29] 定义函数
来源：http://www.sxryk.cn/163efdmhrnb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163fwvkchyl.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ebsjdnma.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rksrkixl.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qunubxdb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tvsakyxp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163hflohznj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lgzwlgrd.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163viwxagyw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163aotghrfv.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163noozbrnv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163umqfvvib.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163dogbpqbg.html


<!-- 参考信息 -->