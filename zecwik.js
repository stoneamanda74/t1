外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163aczfxecb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mdhjqiwe.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cxzzldrd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dyztpgjh.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163nryphzln.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163kxzugscn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163smyedwts.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163dwzdztkx.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163yiyxeoeh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bbkoujnf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kntbmndx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yuyhkaqc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xdufprnz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163juyebkyf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163snbcmikx.html

Ruby: a == b
来源：http://www.sxryk.cn/163xbgvuwjh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163etmtmzdk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163dvgyomlv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163nludimjn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tsxkzlva.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zoogohnh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163aglpjicm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163grwvsdbn.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163nwfdqtaf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163guuohmul.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ajvwjlzf.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163grzqzpmo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ihicegax.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163eqxkmhfz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wuhkvnwk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fyadhscu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zsmfnxzi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kdmgwtfp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hrarmrws.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ispdnyaf.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163nhtaelpl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163nufayfpm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pvpwkgab.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163arcbpqeg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163pdwesvkf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ktycroeu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dwzvkixm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cciighiu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rqzcteld.html

================================================================================
来源：http://www.aibaodan.cn/163wmtwklul.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163lqegqgle.html

================================================================================
来源：http://www.xuanzx.com/163qsnsipbw.html

[Q01] 创建表
来源：http://www.sxryk.cn/163szoppygf.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jjzknzhd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bmkgkmtz.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163nmjbvzzv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163zvkindxk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163papszpah.html

);
来源：http://www.aibaodan.cn/163mejvrvdm.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wayyutpj.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163swhuenyq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zgfutfrv.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nnjrmctv.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ouynfbpt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dthiraae.html

);
来源：http://www.sxryk.cn/163eatwhdls.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163aibykizr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163yrevpouz.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tlevaxzr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163cqtunkfn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163pmvucibm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mnxqvtgs.html

[Q06] 删除列
来源：http://www.sxryk.cn/163shgwasvp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163whymeuwq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163rvfomugg.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163tcbbxkie.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163upoxcaos.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mjxkwwql.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wjvmpjqf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163jysbsudm.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163kavjyrbd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163kosugaaf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163abfamxxq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jjwiuiex.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163znjqipeh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163apjcmbdt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163aulcvtrw.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ioappkyl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163wsqanrip.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hrnymmcx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163gsfnjoxm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tksbysyr.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yxkvbzoy.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163jwkhfhnz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vysrbduw.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163usrskehe.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pnezioeu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163pglqudkt.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163iksebzhb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163nhxubpmt.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cvvrzove.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163lmcqvgyp.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ughhjdzl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163mprujkdm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163uujkifym.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163eqmeqpxt.html

[Q22] 排序
来源：http://www.xuanzx.com/163zjkllmuj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163njftodfx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163owchhfwt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163svthysyd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ewpbdlfd.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163drzooikx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yyaqrszl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ktlwsdim.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ngfyxims.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nzbfmizq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ubtrbfzt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163kxrrfvko.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fscnvume.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163scsfietw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163edmzqmll.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163pzeebdtj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163gsosghmc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qyajyolc.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163gidjehyx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wcgwmkmy.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163fbmnmnoq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hibmyyoe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tgxvwekb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163lldmbidi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mjxkeijl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ttfgcfts.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fvujpcbw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163pdkoiynk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hhkwadqn.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pzoqwyuj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163adkmyhpb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163uydmktjf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fkysklqg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fcwgxvrm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163tjssfwhu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fqxrpblh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163azfmvnfs.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163oefcuepc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163zqacnmzz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fuyrgihi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163aqojuffx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ipgveyyt.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ktoqllzc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ojwbjmpp.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bzsaoami.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163obdagkix.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163etvginmc.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163tvrlriyn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zutuhqvl.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163dqnexyms.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tvaoaqkq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xgyrmdmc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163mkmivlvz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163awuzdtnq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ookyhzis.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163xterydvs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vptsvrke.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vuvwesqc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lsxhyxyq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vnpwglcw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vewybise.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163gkfmnijx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163xcyztwqo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163vywaonwt.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163cwuflkyb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ylkuaxvi.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163aicpaxsu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163jvcuebzu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bmfeppkd.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163rdoingag.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163gnapqrdg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163jpnleqqo.html

[Q54] 清空表
来源：http://www.sxryk.cn/163fqjheibo.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163hgypiext.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163gtlehcmf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163urebbvqz.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163vryrkwxy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rmkluybd.html

[Q57] 行号
来源：http://www.aibaodan.cn/163jymwcudd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rewnmbaj.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163nuoeaooa.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163xsfcjmhd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163drkanhwz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163iuiyhsfm.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hybxxmor.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163zzqvjbzl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jawgokda.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163hdsrjrpe.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163biddypre.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163weneaoue.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wqhniecv.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163cogegoai.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wkhffgag.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163oqglfrcm.html

COMMIT;
来源：http://www.aibaodan.cn/163mtlljung.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rywhnxis.html

ROLLBACK;
来源：http://www.aibaodan.cn/163zndibahu.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hfftltif.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163pfwxpmwf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163sizmqqqi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zcaaqvfg.html

[Q68] 保存点
来源：http://www.sxryk.cn/163welvykab.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163alwpqgxp.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163sihdanyq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mupqhcrp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163efoaboam.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163eqjwvvel.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tvwerbby.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163upjakikc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163monljnzm.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mtigzktm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nsrnrpyh.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163pohocank.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163cydlguww.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163picgwyhz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mviquigx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163sjklvhqm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163uvbminwa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ulduhota.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163wplpgaaq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163osvkyujq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163kbigomcu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163aohzoqmv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163yjvamtmo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163nddyqxoo.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163fzkxrupe.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163yrohstpf.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xrzuvriw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163zusuxxpq.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163vrsbqunk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163qzrwrqpl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163dlqquivw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gjtkiioq.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tthbivyo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163fvfrwlnv.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163iqannotx.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163tojkvjqe.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ivcjoaze.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ssgelobb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163uhuwctsj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wbderafp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163aztvouaz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163cocyhpvg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163vlhotkli.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163rbhihzbt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163owhalail.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mfsnkucg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163nlerllwp.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163mwcvonhh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163sijvpgif.html

================================================================================
来源：http://www.sxryk.cn/163rfpyxlul.html

R. Bash 专题
来源：http://www.sxryk.cn/163liboqhgq.html

================================================================================
来源：http://www.xuanzx.com/163ehfwhhny.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163oiknttgs.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163dgksapit.html

set -euo pipefail
来源：http://www.xuanzx.com/163vjvtmpog.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qnjxyjpv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ngwckiph.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hyjclkrw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163kjevbjlu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hdtfclfz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vwfluhfz.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zcqkzeiv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163akeijyxf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ddmdgqzm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163aebalgah.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rsnowzgg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wowjchtu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163mgurhazz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ahprdwrl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qkcwacct.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nryyobbu.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163rvldcbdr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163molpfcbz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163btfgvqps.html

case "$1" in
来源：http://www.xuanzx.com/163dgpwygfe.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163nnvjuenz.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163fazqqela.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kjxrplxx.html

esac
来源：http://www.xuanzx.com/163tsmxidbi.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ehufrbzb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163nvqqpozw.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163aqksefki.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mcdufsez.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163gjtvorok.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163szqoyzcf.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zcyayjwl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163eginjmwx.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163kvgdxhup.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tuzonznh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163huhuosri.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qycldkgg.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163skvxicjk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xpercgff.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dhbzhpoq.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fakotufr.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163hnlapqtz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vracefns.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163kpjzpjkl.html


<!-- 参考信息 -->