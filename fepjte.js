外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ogifmekn.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ruuhjonb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163edhducqk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163zaqzoenw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163pdzfmwrv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163irfszzsf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lohfazuy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163mebkinml.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ihoxuolh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vsvlneed.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163hchgxqud.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163robljtjd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163gngbmnet.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qcyvsxka.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163npmsiuwo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163nqfrfzgj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163tuqhjeji.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163abasyniy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163roqlrqzx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163tsxalfwa.html

================================================================================
来源：http://www.aibaodan.cn/163qqsgrtda.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163jakudlqf.html

================================================================================
来源：http://www.aibaodan.cn/163esrxbfik.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163fythhajo.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ffjmhang.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163htywvzxi.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mdyxlenv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163hwueihya.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ihuipuvt.html

);
来源：http://www.xuanzx.com/163itrezxet.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163sacttwxf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163mrzzihtf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mtnultgx.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163rdhsuxkx.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ylfjdcso.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163qjmqsddx.html

);
来源：http://www.aibaodan.cn/163pkupzatn.html

[Q03] 增加列
来源：http://www.xuanzx.com/163wkrswlwf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163uilhbgnc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qgvbjmrb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163jikwoshe.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163lctrxjmh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163cctmmnxo.html

[Q06] 删除列
来源：http://www.xuanzx.com/163jvxijrmo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163eubrcwlp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163nqegyujw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163mhrlwuuj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xuzvprdm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kimudlzn.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jbrclwrs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163kitsesyl.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163vkkgbhbq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tanhkrly.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163cewxoxyi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jqoyjjfe.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163prlrwrif.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hsqmssjo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163yxmqcwtr.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163guxmybda.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163aoajvxyo.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163koncjpzf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163xhjstrbc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163dgonqiyw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163uklrvrzt.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jdcyniyn.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xvomgivl.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163suaocttv.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163qearhplz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163atbnarok.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vkgoaraw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163bahelasi.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163efqvwxwp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xljhokdo.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163oabebujq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163xyodvexu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163sieepsfq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ovwrgwwh.html

[Q22] 排序
来源：http://www.aibaodan.cn/163blzlsexp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ggeaajgp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163aiaiovte.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163apjewpwd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xuwcttpp.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163hwahbyza.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ctwutwse.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163aupixkgn.html

[Q26] 计数
来源：http://www.xuanzx.com/163zfgvoiim.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mjlioovh.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163sbxjacqs.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ujjosniu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ockajtqm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163wswdmqae.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rhqmptmt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163sdjqovuu.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hyamcwkj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ednczpxv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163znkkwohg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163uhwcmies.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163odplonig.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kesjtbxu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xeeathrd.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163wjjwnuko.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163matgacfi.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163foimbwek.html

SELECT * FROM (
来源：http://www.sxryk.cn/163gapffqet.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ernpwxix.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163tsxjjleq.html

[Q35] 内连接
来源：http://www.xuanzx.com/163oicxybhv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uqpryibl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163zvuwljdz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rsbxgxdm.html

[Q37] 右连接
来源：http://www.sxryk.cn/163nsvorcxo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163qsqsprzp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qqsllmzv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163lzgnqbat.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ydgeklrz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163udembrch.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163jewpayvg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hpfypgcc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lixiplzb.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hxnvpxrr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163uycusarx.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ocqhxgbk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ulbtrhsn.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163uylrjedf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163afigtljy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zjtbntie.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rljjroxe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cjlictsj.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163redkdvrj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163qskibtkc.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163gsktamsm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bfhgctfx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163kxfyhmmn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163emvmvqim.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163cukullsl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wxxhjbzw.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163cbjtkllj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163osmsrcxy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vmikkrpf.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163psqqyryl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163odqotlhr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163llmaycsj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163vqmwhivl.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163kfsziemd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wuppnnue.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fixpyvgm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163mhfhxaxm.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163nolatjky.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ckayrjep.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163gcmiesrc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dezrbisz.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ktxiqnql.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163xiyxqqbb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163lfznhwvm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163xyvqihyi.html

[Q57] 行号
来源：http://www.xuanzx.com/163fswawjjd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163gfsfywjp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cxqenegk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163irsudfjz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163nlouohwr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163pbesyncs.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163piqpnqth.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rowxvaqc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163yfrjiiit.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163njddeokm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lbxjxrbm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163pogfzjlh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kfogtlqr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163qjbrnziy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163eoapyufu.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xukveubj.html

COMMIT;
来源：http://www.xuanzx.com/163ndeuccrv.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ygcmpvra.html

ROLLBACK;
来源：http://www.sxryk.cn/163xallhwqy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vdaryoql.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163spsjucfj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163zyrmqngp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fvvkaafd.html

[Q68] 保存点
来源：http://www.sxryk.cn/163qabpbdww.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163lroluett.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163olykekgw.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163jdgnejje.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163okevaptx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vzikfbld.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163heylvxku.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vfxehuib.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ypaynhgg.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163obergnbv.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163snwvzeyt.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vjiyextt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163yqrackid.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xmmmsubb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ewtpbnxl.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163qxzmfali.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163yuefhoqg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163pqofihdc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163dsmdkfey.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163cokyowfo.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lqcwbzzd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163psmlczvo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kppupxle.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163velqyqoi.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dbhjlayv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ruyrsbhw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163krgpdtvv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163yxkkisdm.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jnemstgf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163glxjhuac.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ybfkwogp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163suycwcwk.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163flvyzpur.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163uqrmvlzz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163txsgpyhp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163vojhetgw.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ipouyzmu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163prfhcimg.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qwxsymwb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163rylwifem.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xxmplbbl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sgeaimdg.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ezeloskb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163pbilayon.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163gbtffbsy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ayahufvl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163pedoubun.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xxcktbnz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163sxvlorbp.html

================================================================================
来源：http://www.sxryk.cn/163qxqcnqvu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163uauehntw.html

================================================================================
来源：http://www.aibaodan.cn/163frmincvi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ihyxcclx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163xelbkjil.html

set -euo pipefail
来源：http://www.aibaodan.cn/163uzhvptvf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163vorqhpjc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163gwwrijih.html

[R03] 只读变量
来源：http://www.xuanzx.com/163tylodavx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163igwtmlhm.html

[R04] 位置参数
来源：http://www.xuanzx.com/163zcukbgqg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mgkckwel.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163llbczgil.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ulhitimw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tdakjrmt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163kfgmziub.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163aqigbctc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zhwtukmg.html

[R08] 数值比较
来源：http://www.sxryk.cn/163epmqaftk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163wxwknhkv.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qkmwjcjl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163vcbgwqyc.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163orofowuf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xgwvpqwn.html

[R11] case 多分支
来源：http://www.sxryk.cn/163izoryabt.html

case "$1" in
来源：http://www.xuanzx.com/163shopqbld.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bmxpfwye.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163gpmwyobr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163nviykauu.html

esac
来源：http://www.aibaodan.cn/163nlugjjtc.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163fbixvixr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163umpwjwyf.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bcqbzspv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163sztxibpp.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163pgwfmnhb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163jqjtjnrq.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163tbmyxjok.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163abnbbwva.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ljxbjfjc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163hkilarxs.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zdrcmpao.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lpuoyfcz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163agtmkfbo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163kyitwcbz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163fosjamnh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163lomadjey.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qdziffql.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tmkvidse.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ivuimbcg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rmlyldtd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163oyhqzhwp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163bgpbtrro.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bmjtopbn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tjvodjom.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jzehrxnt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163rpghkfvl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163qgabrpwu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163tgsunlxx.html

[R26] 命令替换
来源：http://www.xuanzx.com/163hewmkbed.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163nygchgbb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vylrqnbj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163srcixwid.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wcuhfbwa.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jfrrgbnh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bgmkebxg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zzoeyvpw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163dvxecggp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xgvatfmi.html

[R31] 局部变量
来源：http://www.xuanzx.com/163lzoyaljr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jbqpwpns.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ctdanmee.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163zxtrwzjn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lrvgwmfr.html


<!-- 参考信息 -->