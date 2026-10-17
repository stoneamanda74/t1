外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163prseddph.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hftwkdax.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kbuqthqm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sgihmicx.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163tsvswzdm.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ljfjayik.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hmtsypbk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163vmaunjkp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hpqtxmmt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jzazpcbq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zdumqhlj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163soxxktgz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ezoblxqs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163varbatle.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163cayjnshv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163otyjecbw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mkoxkfxc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163brducpvr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163grkkamtg.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ltqjnysf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rfhoiyiy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163auzgqmla.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mlpbodty.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lklekkki.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mmpwuuxn.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163dythckof.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163jcsweeyd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163jzcauymo.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163lbdzedbt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163thvtlmlt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dbfxuljr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163wwnyxcev.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163cecadapd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163wyyoasbg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xqnnljyl.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163sgyaiins.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163hqlomich.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bxzinwis.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163oozyfnhe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163stmebrfx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qkmanfya.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163perqbycu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163lmuneakt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jchsvmry.html

================================================================================
来源：http://www.aibaodan.cn/163vruoelet.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lpgdnvne.html

================================================================================
来源：http://www.xuanzx.com/163ytcsrqpx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163chjyxptj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ktnttpnm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ebzysbkk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uahbinxu.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pislttgr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ifcjcljv.html

);
来源：http://www.aibaodan.cn/163anjsjooe.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xskukaek.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163oqceusan.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163japxiyop.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163yktwmuza.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163idilhaej.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163oqgfcohi.html

);
来源：http://www.xuanzx.com/163epbakdhn.html

[Q03] 增加列
来源：http://www.sxryk.cn/163pblsrill.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vtgztjut.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ygpfutar.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163dqimpokr.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hrslnigq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mlsvefqi.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163yjtrhlob.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163axuiolrf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jdalatnc.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xtcxibqi.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163nklnlrqy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163aockndrn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163acucxltl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163yjxwmhwh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163dgzhbxpg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tbruagso.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ricngduq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qeyhptda.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163mhuddxyd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ouewlngc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lskoizjy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qrclkxmj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tntatsyg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jpgnqizb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ebrafusd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163vsbsxqdm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hszithke.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hjpuehxs.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xytitptj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163txxvxffi.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bmprsium.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163kzvfzvgw.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163czqburef.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163oamarkhk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vxrzroju.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163pzxokamk.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163nzotkoko.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163polfmunj.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163uplratne.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ogqplrur.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zifclgkj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cdzbaipf.html

[Q23] 分页
来源：http://www.sxryk.cn/163bjmjtzvt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zufnedgu.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hlapfpcv.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163arnzgieh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163rimwcoil.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163bsxjanxa.html

[Q26] 计数
来源：http://www.xuanzx.com/163xcfxamuq.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163smsnxide.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wmojfwhf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163znozgyhn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ndiecwjx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163elyxkucu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163sreeghub.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163synulfdc.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163qwcqkxag.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163luytvccm.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163soohyjxm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163dfbuzpqz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vzrrhaey.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xpnedhcg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163trhrlarg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163avvslhfj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xuqzkioy.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163kklhzexj.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163lniblqce.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ykojktih.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fwlffngl.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hzmjrzna.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lphcxsjv.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lszhtlhz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163oghjizyo.html

[Q37] 右连接
来源：http://www.xuanzx.com/163idwlhxhm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163adhnvqyv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ezrhcatp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bhbjrmfm.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163nwznkzzi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ahkkvojz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tntdgzzr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bxnmdzut.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bsaiytmk.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163yownukgl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163bkthprlf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163cfiyxtnx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163sxkmpqtt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163vssxccvb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163tmmbwsej.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vdyxwmuz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163owhhnqea.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mwtnjeej.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lfpeeohd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vlgxwtmm.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163kwcdpkvf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zedsvubi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163turmduch.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hffqztks.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163zdevpacj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163bmovhjku.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163snwznxyx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163qlxqorxd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163lgmaqyst.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jkljmdwo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163iimuzaiu.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ltxwfnan.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163fhygmlox.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163woqimxpr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qloqcnue.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163yqcmkqqg.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163kqfwmoie.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163czbxgqfq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163hlfibivq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163bbdsijtx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fwbjhafm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163tqwunrdz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gwbcmidt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163bzxgqskl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163pcdbunyj.html

[Q57] 行号
来源：http://www.sxryk.cn/163ccptsjyj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163jpzcmgcv.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vspkxpan.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163bpuosled.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163uggubmrm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163myyzusol.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163fjjcjulq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ufkcsjdh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ladocjem.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lpfokqzv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163cehrdheb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vagpcobv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ebdujtuz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163jlrmxhwz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163iqolbuww.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163egefeake.html

COMMIT;
来源：http://www.sxryk.cn/163lgwbmuph.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163lilqfczi.html

ROLLBACK;
来源：http://www.sxryk.cn/163esgxoliq.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163skcojpld.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jensyyvf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163htvzljgc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xdsyypel.html

[Q68] 保存点
来源：http://www.xuanzx.com/163blrnbjuh.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163iqzgfifu.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163akfzsiev.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163riyzjzkt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ijtigjej.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163doskumwb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163rzgpvzkp.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mxlxtbvp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163eznhrofz.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163chxuyfyw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163lobohbnm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mujeqrbu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163xccgappo.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163sjmpdpmi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163pjdvldoz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ccfpyeoc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tfcajpjj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hqsllhrm.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ovtqriir.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163sfvrcvjv.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xbainwye.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163tmyordit.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ncychdtb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fwngpjfi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163coyqmflw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ivginexw.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163mhvarplo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hsfmayhy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163sgiwciai.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163fgxkongn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163yknarjmk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163wlmgdpci.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mjmmpves.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163pcvcmqlx.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kaqzuivx.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wkiwjdca.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163wcsmhsru.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163evojrjik.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mvbamaoj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fileopmp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qixurbig.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163fwgkdrvc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ykqexydb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163zvmqysrn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cwxtbaxj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vmkvqgmj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163rpxoajco.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163jcnexkzo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163pnjnmscn.html

================================================================================
来源：http://www.xuanzx.com/163gndokfpi.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gpjrttut.html

================================================================================
来源：http://www.sxryk.cn/163cpfleugs.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163urvtmnvj.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163nlwkzcdk.html

set -euo pipefail
来源：http://www.sxryk.cn/163gupjzxir.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163lyszgbqf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163noxjxhya.html

[R03] 只读变量
来源：http://www.xuanzx.com/163izeqjhhv.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163eqivqceu.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hlikgzhl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163lauuukgt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163spsntcub.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163llbylbwy.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rxbbnrfp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163uslzzkon.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163edtlofmi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163huxusvaq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163dgveqmie.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xhjlgkhk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163vzpurtai.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gbvfksqs.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163jkxdttho.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163iytlrnoh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163pndazjeg.html

case "$1" in
来源：http://www.xuanzx.com/163odzzxtrk.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163xqlxzift.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163jfjrdcqo.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163srarrzlr.html

esac
来源：http://www.xuanzx.com/163njcdriaf.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mkjuqfdt.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jboyaqqj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jxmhuqzh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163lqgzvpjy.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163tfcsqsey.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qkqibtcf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163moiwziyj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jiegxgbd.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xhapeyjz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163eeysftck.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mwdenrcz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zgoaahgz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jvswtmmu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ulneenws.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163txvapgtp.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163gbefbffw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163sdvtwrps.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163utdunwbo.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qazyujay.html


<!-- 参考信息 -->