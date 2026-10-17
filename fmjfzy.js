外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163agvukmxs.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163twuiclrs.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163eiqoetkx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lwdpfztk.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jqttibvk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163txuyxswd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163bipkfumn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163bqzlgsyt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jzcjgppx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qxgbgavn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163cnbentun.html

Ruby: a == b
来源：http://www.xuanzx.com/163qcboqgej.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ciuptkfj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163whlcfkmg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163olhezprg.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163twptsvzq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163abostlgw.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vatmdvsb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163czdlkjjm.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163oywyqxzj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163umgfwyfk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163rbqwsnff.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163uocsstjy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163rofewxoa.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163uqxdykfc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xssyjgvl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wgmyewen.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163qsczcoyt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xaiaptcp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163savazwyj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163riftakdv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163kxxjxssx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cntkomeh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163xbpopsju.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mpbwfnbr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163wuoxtbax.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163kcpkeejt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163uiudxdik.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nnkasvez.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ruozncys.html

================================================================================
来源：http://www.xuanzx.com/163qmtaatun.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vlogvxgd.html

================================================================================
来源：http://www.xuanzx.com/163wkimypju.html

[Q01] 创建表
来源：http://www.sxryk.cn/163xmkdzprc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wfjcjqid.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mzwgezyq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163inlunvpi.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163dnqxjolw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163pwvnirny.html

);
来源：http://www.aibaodan.cn/163aqbmycsn.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zwcobfcf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zrkxrhaq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fcwuonre.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163stabdzjx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163yfpbznku.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163srubviha.html

);
来源：http://www.aibaodan.cn/163odoeduxv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163qgjzrhuc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163mydpywmz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pudcixdp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163egcyzqfd.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163mplznqis.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163acnymplb.html

[Q06] 删除列
来源：http://www.sxryk.cn/163gsajkqaa.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163czoxxoxp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ybeexegy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dytcqtla.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163feurwpij.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163pmraujhl.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zntvbygg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163mfsbzexz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163nmtmvuuh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163dswtfirx.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163qtoensmy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163okkzqsby.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fopnwrwq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ehltbtjp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163vlftkcey.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xrowahxa.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fnnceulq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163pmkzieic.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163yeaigqek.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163bnrqxtli.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163texavabx.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163elvrgqyb.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163fviyvmuz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163bnhxtmxr.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163keghzkxz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163gdmpvhpv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163oioynavh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ksspjkzg.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163yxcxubfd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jfgsvxfw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163znqztlvl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163rqrgrtba.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163nngoywrh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163gldlmyfm.html

[Q22] 排序
来源：http://www.sxryk.cn/163dfrwwskq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cyzhptxq.html

[Q23] 分页
来源：http://www.sxryk.cn/163elwhnfpo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163iuuqobrv.html

[Q24] 去重
来源：http://www.sxryk.cn/163rsmdngjv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163waxfmuqn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163lydtbzba.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qdmumfgg.html

[Q26] 计数
来源：http://www.sxryk.cn/163idydadlr.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fnoutnoc.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ocbfhdkc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163hfklaawd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163vodlbblg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163mrcnrtix.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163zxnsepuq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dmwbphio.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163grvhimep.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xzqatmth.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163pdbaqtaj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ehkkmmdh.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163noreejsx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163knickjjz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163epvoofps.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dqpzllwr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rpjwkmzq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163tvgrbdrp.html

SELECT * FROM (
来源：http://www.sxryk.cn/163yqakyksj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vzkhavnw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163prnwvkgg.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rdleuveu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sqawufct.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ijyuzbvv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zbixmazv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qmolxeko.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ujhgivdg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163toudjpdx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ckhxebvu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163mpawkwiv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163eyvxlpsj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163vifoobsc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163lbeknsas.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163uontevlb.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hcpzbqhj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qxxfkytv.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ubkrmvyu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hdvuhybe.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ufujwjcg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163tlpuyeip.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163sfjiunvh.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163uueggglv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163etcgxjhq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ezdrmjgo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ipfbxnim.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163oaqaifsm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wanykejr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zjbjvcny.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ggoltpjb.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hfqnfntz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qbrdarir.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wigctztl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hmunhbvs.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163svjwnphm.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163swfdwfxs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163aepmuosy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ewrxkoei.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zrurhekv.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163nnnwtuto.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zhnkmrmy.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ifbqevjv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163iissgaaw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cqwjtspz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jqpkrvdq.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ygxrqhdq.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163othqgvrk.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hjtagvxn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mrzrghmi.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163tavnpedg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163idjuufza.html

[Q57] 行号
来源：http://www.sxryk.cn/163uoqknvai.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tudseker.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163dgosxbib.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163muabkjqv.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163cjglskab.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163pdryfwyu.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163gsqfkert.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163uhteejdy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163drcdxqwn.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163gdjwgpnd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xanxiogq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wuqpfplw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cowhqjtv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163enefbrof.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fgessshr.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xpirnoid.html

COMMIT;
来源：http://www.xuanzx.com/163pvhzmzbr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lrfzlihg.html

ROLLBACK;
来源：http://www.sxryk.cn/163ovpflvcc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163nqypxkbg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mlesmmgv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163osrwwzvw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ffolvugj.html

[Q68] 保存点
来源：http://www.sxryk.cn/163tmfzsgok.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163xxhdhzts.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163csgnhiui.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163esreamtn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163zwzdsmfi.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bwtilvug.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163fwarokre.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qzfpomof.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163whctnvey.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163hqrwwwvo.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163uwdabpgo.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163pybzaaku.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163lzwnizpb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163rpfrttgr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sfrerkkn.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163jtmksypi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163nhzpzhva.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163lstfgxpf.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163lsaddope.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163dheeramh.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wpcvjroo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xijbuyze.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163pnzpwtpl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163vdotxzdq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163yrfocesf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163zumyfjlk.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163yyywxiuw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hhsrlnso.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hlmqpsne.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163knjgllhf.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163apvnsopu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163yfuelpzq.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163suzzktrz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ujftemom.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163uhsnznzs.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zpuaeded.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jmwdcqgt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163yvqgtayv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ntjihjla.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wrlslldl.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163yqfmcgam.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163rosbtife.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163fhdpmtwy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ilgnyjhh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163bpbofwab.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163uivgdnin.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ejpvrbex.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fpjsxhbr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163lnqqayui.html

================================================================================
来源：http://www.sxryk.cn/163urrxrogg.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qknrlizr.html

================================================================================
来源：http://www.aibaodan.cn/163qnaesiep.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ckrclddo.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163cntwjxmz.html

set -euo pipefail
来源：http://www.xuanzx.com/163vrvwrboz.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163htttpvoh.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vgcdewdb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163vxqbnurm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163cadtpdok.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hjdmrfey.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163aktddfoo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163eoypuorx.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wnwopxvi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ipbxayhx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mqlwdzob.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163wmfwqplw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ehzrrfqz.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fuzsrgmh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163xmisztxn.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tmwifasb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163obotxxjd.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163trdauyzk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163iyporpwk.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vhfvkgfg.html

case "$1" in
来源：http://www.aibaodan.cn/163tdcegexz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163uvcfvsbq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163hgjcwivo.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163lhapfbzx.html

esac
来源：http://www.aibaodan.cn/163uefiuazy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163miupifsw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163krterwur.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jmgpmsqt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163kbhenjfk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163vwtzkawo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tvozlvsw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ipnmrgou.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163amdugoam.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163affsieyj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ktjzajfo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yfqzmmfe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163bbjeoojx.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163phnojisq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163cwkhfiru.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163npnrujaj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uzhbaxkz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163npdsejjd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163gghecmvw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163idudcwkd.html

echo "${#s}"
来源：http://www.aibaodan.cn/163aetgcyhv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163yonhmtpw.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163oluqhpeu.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jbummexj.html


<!-- 参考信息 -->