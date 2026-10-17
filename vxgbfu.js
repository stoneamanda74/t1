外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lixptrtz.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mizfivga.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163uronadme.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163olbvjnop.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163oexrdjmy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zzcsxmke.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sajfrguc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163knaocvrc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163hndslocv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qhecexwh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163atxxzgji.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163astemttg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163pstzshxk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163rpkxxbbn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jpyyrfkw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163twguuymk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163brlfcuib.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163rxbnrgqw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163mfgvskim.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163kwilmqeu.html

================================================================================
来源：http://www.sxryk.cn/163mjoceglh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163bycsakhj.html

================================================================================
来源：http://www.aibaodan.cn/163ixqjqesz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cbjqmipz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163onipjpry.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163msnhcyev.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163iarpsfpf.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163dxakttay.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163fstpapnw.html

);
来源：http://www.aibaodan.cn/163nkrsmrvp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163peayrtcb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tnvxnkcy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mebpfnlh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163btcbuvhd.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163sesqcycj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163shxwhzth.html

);
来源：http://www.aibaodan.cn/163novbpcef.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hggwlxxg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163flgnebhh.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163lxkauder.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163kxewtyde.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rlgwcwtg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163dqtxdbem.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163cdakwfsu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lckfpgmg.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163kjleiesg.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163lqbjobnm.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163dmghrfqf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163etzolzef.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bnfztswp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163sgaibujg.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ixpdiylo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xqwlhsva.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163trgwpfrp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uabevtbo.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fubmtmfb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tyrzysjh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kymodeks.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wfklxagf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qzrnvueg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xoigkrgm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163atedrjxj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rblhwoge.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yfjxpklb.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hlqtxsbh.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vmtrojlb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163uolfkkew.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163rsbahorq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163toagrccx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163cypqcyds.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163httkbpct.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163dhdtlojn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163apuqlevc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163khtwtvnz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163vbyagpne.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163tqqbjuyc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163rhplykza.html

[Q22] 排序
来源：http://www.xuanzx.com/163kdfipezn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163qvzaugbu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163wrhohigy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163qoyroagt.html

[Q24] 去重
来源：http://www.sxryk.cn/163ljdsynui.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163tdnmyyqj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163knbqkhub.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163bltvwaut.html

[Q26] 计数
来源：http://www.aibaodan.cn/163xzqwwlmx.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163pliwnuuz.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163drhwtgan.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mxiehnuh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163gpreozfc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163zcdcuwno.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qvxbpkkv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ejhpgsaa.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163khlwelhy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kejzhowu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163gtcftqid.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163sbameygp.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163naasichr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nltaqtgf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163feqwiqff.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163qbwwdhpv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163etxmvavr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dtoacvwc.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163uvvadggu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ablecwrn.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wjlbkiay.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ycduncxw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cmdioiuc.html

[Q36] 左连接
来源：http://www.xuanzx.com/163xqacswnl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mjktzzvk.html

[Q37] 右连接
来源：http://www.xuanzx.com/163juefcwvp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163aywouygx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163vopwewtb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163iwbqrbwf.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163yyjvohvl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163lpdzcvfh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qcwfzoih.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mzykywiv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nxvhmcdb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mxpqsybt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163totzzmog.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rsilgyla.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xvxeaalm.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xgljrish.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163tjmmhgaf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163tjvhjdps.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ybuohglp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163vdvwxpiv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qljtuooz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163zuvhgjvb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ngtjdkkm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zqglaxdj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163rbiskfqa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mahlotbl.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163twgihwnn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163tzvlundn.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163nnfowpgm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bmutnvmo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163eadagifc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163bogrnqdq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163pebevzju.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163thyzlkct.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163aklcndks.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163wsgxvedy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ybinreue.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163qrywqggq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163zdqxjrcq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163twjsyefp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ijhmmcog.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163enqptnki.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ashgnhcm.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ejjetsdl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163plzophnl.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163kqmtidam.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163oaluvhdc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163augdkheh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hplyyvhs.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mrhyavbc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163nkmlixgm.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qcbdgbji.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163cwwkssbw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163cmqotena.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163yofjsuap.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163tvceqhkw.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kxiznubo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163igdicuay.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jjrzqflo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163guvxqqwp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163cdxwnnqv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163phhkidnb.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jpramovi.html

COMMIT;
来源：http://www.xuanzx.com/163tyzktrpt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ebxmiszx.html

ROLLBACK;
来源：http://www.sxryk.cn/163lanoqrya.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163kupmcjnq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163lseefyon.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163alpglnyc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163tpjidlzu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163memlizwm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163aapnfxpk.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163gggxvisw.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163iebpdenp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163muofybsj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ypqgdohh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vjwyiedu.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ojjmdclh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163lfeizesj.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163lxwcijhw.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163xigwuzqv.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vfgakhoh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hogkmhsl.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163djddjoaj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vfcuvjhl.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qiuiotkk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163kdegsfdk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163rlqlcijk.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vayivixw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ymiyptjn.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rpssxemt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163klimsboe.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tqmspnhk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163rvoomifn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ytsreqzy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163tzhpvhex.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dcznrsub.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163pzvhjspg.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zzpazpsf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dqlaqfxz.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kmhsaasr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nuruuwya.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tvqovmqa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163voswgmgl.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163cqtfyegd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163gkrwumyn.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163muerstzg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163juwwbhlc.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163gjsadoyo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fournvbn.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xxiwmouq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163yosliqzj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kjonpzrb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163hczfnlhj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163mznixspy.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kuitwdmi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fkdbxqgm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163nicprkwq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ykklmkct.html

================================================================================
来源：http://www.sxryk.cn/163avdvbyes.html

R. Bash 专题
来源：http://www.sxryk.cn/163gseqaymr.html

================================================================================
来源：http://www.sxryk.cn/163tuwmutxk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zvrvvtxq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vfontmsf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163adegroqo.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163dkatkppy.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qsurfhvg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163nvhdehfh.html

readonly PI=3.14
来源：http://www.sxryk.cn/163yhtuiyzf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qmmwoptr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163cnmqmknv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163plemztor.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ywyviypl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ljrgsoeg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163otdygmmh.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163xxpcnrtv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xcxkvhie.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fxzjeocy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ipihhdps.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vmzetkqf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gqrreyfl.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163alxkotxe.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163rbnagpce.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hyljhlku.html

case "$1" in
来源：http://www.sxryk.cn/163facqdddf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163tabvcxcl.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mkzpnjgf.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ufsxevem.html

esac
来源：http://www.xuanzx.com/163pnemfkbh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ttqcdzki.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ugiogavt.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jvcuvefq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163izlrqkzn.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163urlgfksk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163xczapuwy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163rwuctism.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hfcuqzlw.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163chxjlrhm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163azedirjj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163dxttpbtx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163simaidgr.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163jwuuuekw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xxurfmdj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163btoffeuf.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xywlekyy.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163cgwdbcoc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163lfvmxkaa.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ldwhvxxg.html

echo "${#s}"
来源：http://www.sxryk.cn/163cwsyypsh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163qohrzflb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ygewfwjk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ahghpnui.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hrimfrlg.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163fozbxhcc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163crynycri.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163tehxsnjl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163zmtbrkln.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rthesrws.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ysqwkmmo.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ybtmsieh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xchyhssh.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hlmdbvat.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ttwxqdaz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163iiiysehx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163anymhsrw.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rrcvzdab.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163qntpttby.html

[R31] 局部变量
来源：http://www.sxryk.cn/163yzwjwkig.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163bafylkyd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163olpksqje.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bjakvotq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ywtrmsff.html


<!-- 参考信息 -->