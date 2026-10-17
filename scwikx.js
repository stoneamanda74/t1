外链999!wailian999！

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163blmjppyd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163euhoynzu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163nsfjdivw.html

Ruby: a == b
来源：http://www.xuanzx.com/163qigprafr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163winuhevh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ieeutarf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yyjqovcz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rkewpgsv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rglpewxv.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ygeahawq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163owdcpjrm.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163udrjyrkz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lnyiipce.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163txquhooh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ebpszpqz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163uptdrbsk.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nuzuwmdu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dbcuqcve.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hgikwzrh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163zxaxdihq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163iguykptg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163nbjacijl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ggokbvci.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163iolcypiq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163aiqbicpv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dvsvlqol.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163riswvcyy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nnisdgda.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163afxjvwgw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163kkwccrzi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xxsloiin.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163zwijdcow.html

================================================================================
来源：http://www.aibaodan.cn/163yvgwokyj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163xoyoojvs.html

================================================================================
来源：http://www.xuanzx.com/163odukqdim.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163furajcxu.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163pjsxpadb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uwteybdl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163oqilfwrc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jjmnpill.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163lwbevfzn.html

);
来源：http://www.aibaodan.cn/163njvzdhxq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163uvgmgkmi.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163bhyvnzmf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ylxsthxt.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163qcaupseb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163xfgpzein.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wlrhzopk.html

);
来源：http://www.xuanzx.com/163rouknpwp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ufkyhrrz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xkkugdme.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gwdnpsds.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ltrjswcc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163suzjmxmw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nuyilczn.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163wlutupkd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163lvzltsad.html

[Q07] 删除表
来源：http://www.sxryk.cn/163tglgqwph.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163otfitkwd.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ybvwokmz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163pzptpzoj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163yamioszg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ssmtbivc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163huptpgen.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163kszgjbqm.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163iiendasa.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zeniyknm.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jygywhld.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mpiuytbw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ohfomkdb.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163yzwgwtbu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163eudrggtq.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fxpypvke.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qlvsqqdt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ylrfylzh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jhfpbohk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kijvmugi.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163sctyohxk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hvhrguud.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163xzuqdibm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vxnsztbr.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163omrjzfxp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zefqfdok.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jqdywhax.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wgitfpsy.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pofyrsrf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jxyuyjab.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xhogdmty.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163sqvzeike.html

[Q22] 排序
来源：http://www.xuanzx.com/163whtzjnzc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163fwluwfuy.html

[Q23] 分页
来源：http://www.sxryk.cn/163fpiicvag.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163aegtayjc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ptgtpidv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163iegwffmp.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163bpzzdbdp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cwxjueye.html

[Q26] 计数
来源：http://www.sxryk.cn/163nzvwgjfp.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163nkddgfdc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163onuaegyy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163thhilwlo.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163blytuvzg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163sbiguxwz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163nnpgyszp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163wrelscqr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163uwkjkmnb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cyuleohd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163yzkvantx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163kpntrgbw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163oxslvwmo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vemwvonc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mqbfkayq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xcpsfbpp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163oxdpwoji.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dvuabahf.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163yddqbwhs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163nqunyxeh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hixvmzae.html

[Q35] 内连接
来源：http://www.xuanzx.com/163caaktkhk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mlsnmkvj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163xwkcnfcw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wfaqdhdb.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bglxdzvz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nnuxcuyz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163zyrflamg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tlupqzil.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163hyeqdupn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163andepobo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163olarqsuo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dymxptcr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163cxnrkamo.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163keshlpba.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163zlcfxnxx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ktgmubei.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163olavnhup.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163fcpdfisc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163wpuyntbq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jysuddem.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ngclmhoq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tmvlqsza.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163srbxjzny.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nyyolbvv.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fgnaomnw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qpzwibyc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ywfixqod.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pykofgqw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vaxpwytv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163cueposgj.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vcqqxlkn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163zhgbgsfc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mnhixylb.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163yeuqzuot.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dstztkuq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xydwraal.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163pctflzwd.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163tiipcewq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163iusycspq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hyfnaidk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bxabwihm.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ciiyfrzm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163viorarcc.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qnttwcmb.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163rwqduzcw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163kddaufky.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163xixxreln.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163yzmgpfsc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rcauxihh.html

[Q57] 行号
来源：http://www.sxryk.cn/163nlybogqx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163eggzlfpy.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163bamzjuyu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163lbgnwfvd.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163cmrqetgf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hnuzqdph.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tiyjegjh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jfkythci.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xhtohiem.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fivtamda.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hahaptjh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163uqdryrcr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sjsqkacd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vjxkmhrc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163eaezfgcu.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163cpxqnhcm.html

COMMIT;
来源：http://www.xuanzx.com/163vuiizhqt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wwcnkdsm.html

ROLLBACK;
来源：http://www.aibaodan.cn/163uimfpkjo.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fyzdsvhp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tnguvptj.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tdpdeioc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vuihgmot.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163uxqtrtcq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ggrsmntc.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ioxnhpwa.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dsbhncag.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lovwazlv.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163djgwzllt.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163cmlbjtpu.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163abfwvuzp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163tunbiaup.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163milaonsw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163oaojbsuf.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fxpqlrre.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kxxoeehl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mausfest.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zkaooseu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163yyfaqgdc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163pvomrrjc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163livtxidi.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163nyupjhrn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163hxbrpbxw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163snvhhnfr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ocdprlrw.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163mnxqptbp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kpdvydfc.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163sowdvzuh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163waaughyy.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ufzavcfq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ttzhshay.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163iczaotxt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vfrcizol.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163olvxwodo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163kfnergpa.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163sqcfzfis.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163csokxbvy.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163pgfplezc.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ebgvnkpg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cjhzjxgt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163cntkysiq.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163frhdyevq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ycvpqgea.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163byicvdgm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vfnwwook.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nilphiab.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kggakksr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hymmuiiv.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163cfabebrh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ncrthmlr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163szrrnrbj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163otpsddwn.html

================================================================================
来源：http://www.xuanzx.com/163biboeqxz.html

R. Bash 专题
来源：http://www.aibaodan.cn/163hokfhkjt.html

================================================================================
来源：http://www.xuanzx.com/163jmcjqdnm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163cibxbdal.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bgjykvek.html

set -euo pipefail
来源：http://www.sxryk.cn/163yndrczdz.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ldnfmfnw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kdofoiob.html

[R03] 只读变量
来源：http://www.xuanzx.com/163jermqfpu.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hmiimrbv.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qumbwyxk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163oyqqhtpl.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163rwwrtzfl.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ddhqziou.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tfalztrp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mmfvipeq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163hymiauun.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nbmyaqqh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163caueqcpo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163nhznxvnw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rnjbvcsg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163emzwmfyg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163seitezaq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163fvytxplk.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163euwyfmuh.html

case "$1" in
来源：http://www.aibaodan.cn/163tcffjnqn.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ufqjlavm.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163tftppnqv.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163rzscvzus.html

esac
来源：http://www.xuanzx.com/163rjzirxvu.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163gvpgdpss.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163iokjgvlz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163aidwsdbs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jqagmrlm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163yaljlmru.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163fdtzraxt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163bqlmqydq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163exqlbkcf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163oagqwnlj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163nheqfwie.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yrhqozoz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mowkgqjs.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xqumddbt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hsapfpdf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163pbmykxpm.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wzcedzep.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qoawshyy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163iplmmfqm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163krznwufp.html

echo "${#s}"
来源：http://www.aibaodan.cn/163erocwzik.html

[R22] 截取子串
来源：http://www.xuanzx.com/163arsemwvc.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163gnjobyqe.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gapxegqm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163usyclrzo.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163mjtywrba.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163kwbiqufq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xhpmexuv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163mxptcrxy.html

[R26] 命令替换
来源：http://www.sxryk.cn/163zgiorrmf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163hitltysb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jvsmpezx.html


<!-- 参考信息 -->