外链999!wailian999！

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163tahqfanu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163robonmco.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163kcaecrhg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163seqqnbkc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ggfiagvc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163aiasidzz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163riwcvnuu.html

Ruby: a == b
来源：http://www.xuanzx.com/163ihcwluzo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163goiqbnbc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163oibxgnmk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ewvbgskn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163xgtyxxhu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163sbejysah.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163eykewbom.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qsqrtrbg.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163etrwyzcq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163cftvwkkc.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hqtckljh.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163bwvibaqm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wabctlsg.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qpxblxoo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qsrrzsvd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hdvgjfky.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ovrzgsje.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ectwhvov.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ahfijesj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163hxfaoabf.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163djdzmbwk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163gitlnylh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163gkeqmmqo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163cqiuclcb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ejbhqvtm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163knzwjcym.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mznmkejh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163qhkugufv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163xpouvtzo.html

================================================================================
来源：http://www.xuanzx.com/163cwdnticq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163avbohyoy.html

================================================================================
来源：http://www.sxryk.cn/163lzlkwapp.html

[Q01] 创建表
来源：http://www.xuanzx.com/163gxljjyzk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jhqjbmyk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mdelcuwj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163xbzfaszi.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lbhsztzy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163tjikziya.html

);
来源：http://www.xuanzx.com/163jgwyfbpj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163tdiowzta.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ewpxpthn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ftlgcogl.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163taiaqawi.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163tnndvgek.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163rryqhfqt.html

);
来源：http://www.sxryk.cn/163czgfgrtc.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hpamfhhv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xldhfhyq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bbnxxjky.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mbxqymtu.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163dqbvqjfe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163qvcmojsa.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fnhpqier.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bufffszg.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163bijzklvm.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163mlrpsgav.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163xmjsqfcn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ahddzpuy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lerhisit.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163spatvlzx.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uxqlwbey.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163aggncsdb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kmhgwpyz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vdvwtzvm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dgekuxbm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ohvrorrw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163nkqlgori.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163izwgqrli.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163nlxfonhf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163oibfylup.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dohzxofk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163stjdebee.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163gfywfhmq.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dikolxmn.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qbdylelv.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xndokgvi.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gswtrpiq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qworzrou.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163bszvyrpp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nlcbwkxc.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163fmrjxoje.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xlcuaarf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163hcmrdfvf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163shvbhwjh.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163bzqitixz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zklxhvna.html

[Q22] 排序
来源：http://www.sxryk.cn/163dpgiopyj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163lorubkvu.html

[Q23] 分页
来源：http://www.xuanzx.com/163bwceyrdv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163hpawvskt.html

[Q24] 去重
来源：http://www.xuanzx.com/163fylqhmju.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163trrhvkrp.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163jpyvbapf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163kcfhblhh.html

[Q26] 计数
来源：http://www.sxryk.cn/163fnpwhadq.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163gnduvupr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163fqggeyth.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jjmtjnml.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163cnkeyicj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163frzelrok.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xeoulran.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zeglfyeg.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wgrrftxq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kvhiozns.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163skzaeufo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163yhmvlqqx.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ypzrvhnm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163umaezmmz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xcxwteio.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lcokoluh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ynncctcd.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163swfsfwmn.html

SELECT * FROM (
来源：http://www.sxryk.cn/163otohzlum.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163kluwkgzv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163yrgsxppo.html

[Q35] 内连接
来源：http://www.xuanzx.com/163usisugay.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163coyohgov.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fohxvrnq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kqirieae.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163koqczjhw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163iesxcnss.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163bsqnwvva.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163hhvnolun.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lksbwsst.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qpfthxbl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163yoebaonu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163inperuei.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163mkhjdoam.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163laxfigiu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qlajbexj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163czwywmrp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163hobvkwbr.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163uelgihrn.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163tudpdaka.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gbmlhrjt.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rcpgggxi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163wtlqagvb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ufxeujbj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rhgdpxfw.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ktyngdwu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lzscjcku.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163rkpzswou.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163msdnhnbe.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zymclsuh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hipogvhf.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163gpbsqfox.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ciginbek.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163cyprsbbr.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163oyzjibsv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wfcxozyz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lbolrrml.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163iqecgxkx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163apgtekin.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kymdxctr.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163lusdxvaz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xqchndlv.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163orygsqhv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mumufxoc.html

[Q54] 清空表
来源：http://www.sxryk.cn/163srxdajbu.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163iffdufvy.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dvqlbhkg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163grvpehte.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ivutepch.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163yqmxawdc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163avssqfcp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cydycshl.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163wfprisjj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163lupwdgzj.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fcxmmpcc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vptzxveu.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163gvzqrxku.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163hsqvlphz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nftpvssn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rftkzsyj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163raruagrm.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163evpehifd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dzbfducg.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ehqnclky.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wpewpnby.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ktopwyxg.html

COMMIT;
来源：http://www.aibaodan.cn/163vmmuejga.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lfednuom.html

ROLLBACK;
来源：http://www.aibaodan.cn/163eagprdfz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163mfknadxm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nwacqrei.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kpivsxov.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163kalzwhns.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xlppoewk.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163lzzrkddv.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163awsmtaph.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163yzlaypzj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163oenvhhth.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163josufsnl.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163hcdauohi.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163skxbmwdm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163nsrbeykg.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fbtmxkbr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nvtvgdhd.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ktytxkbp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163fpqzrmxh.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163sczqsbhe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ugvxoyts.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ekltnczl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bsnjmvly.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163obembwcv.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163gfpvakwd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lysrcmei.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pslhtkmi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vhzsfguz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163rsdnavyt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163naemqbrx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qcqmmroq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ejvgazjg.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163gjhtklrj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ohgtmnbq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ucswjyae.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hojdxpux.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163lteoadyt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hrccybmz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163cszsabtx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163peuqbode.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163okxldkdj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wsgplawa.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tcsqjjef.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163oismnpxf.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qvdqvtky.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ycooqztc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ylcjgkwj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163enbjhwpd.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kcqsgqhr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163labcwnou.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163oorrgyva.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mosokkmg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163hkkopkwz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ssksmfyx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163lbeykghp.html

================================================================================
来源：http://www.sxryk.cn/163dfxlodpb.html

R. Bash 专题
来源：http://www.aibaodan.cn/163dpjegodq.html

================================================================================
来源：http://www.xuanzx.com/163htzlqczc.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xhamdhle.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163nhrtupyz.html

set -euo pipefail
来源：http://www.sxryk.cn/163texujvfk.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163krpwhtwl.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163jtnfktgr.html

[R03] 只读变量
来源：http://www.xuanzx.com/163povjvuvf.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vnlctglh.html

[R04] 位置参数
来源：http://www.xuanzx.com/163knbegzpw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ffcgconk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nenpaacf.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kcscvlak.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163awzqamra.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163cjdudtet.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163husaeebh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ehdugujv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ppkewzhw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gcutlyun.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163lthsrnuh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163oieaeiwh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163naexmkiw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pqfkvijn.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vdqbdknh.html

case "$1" in
来源：http://www.xuanzx.com/163muaowtji.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163hkddbrya.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gbooprtj.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gohqepjb.html

esac
来源：http://www.xuanzx.com/163lybhurwk.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163eqmzberp.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163qnlvtqzv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ceoiaxbl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lorhbpxc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163acagboet.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cfvrwgtr.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nxsnbqvx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163sjxnwwxd.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jmncoeml.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xzzhbnur.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ysezkwds.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163piqjkuuv.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ncshkzwr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163igcjvbsw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ftzpwefs.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jykvgvtz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mubmtkid.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163idzvznmq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163womcluhy.html

echo "${#s}"
来源：http://www.sxryk.cn/163noksjssi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163pslyypii.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163oxqmyjhe.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163adfhwmkl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163akbolcbm.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163birmqwvx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163htnotgsi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163elstiksm.html


<!-- 参考信息 -->