外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ayrlohap.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jkjucfgm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ymtxarft.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ftgpwshw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163tzewqsev.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163cygllmnm.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163chjfipbe.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lqmsjfor.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163drrecnav.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163nsjzokhe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163bnfqcggf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qpnjmpau.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163kynhcnkg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163eaxdtxtd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163hyvyneyg.html

Ruby: a == b
来源：http://www.xuanzx.com/163yebjbple.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ffyjiiig.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163phapeioa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163aqpowdns.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rcgqbrde.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163dyplcgqt.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163gbfidaem.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ekuvwuys.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163rslmyeux.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163mrsqmqwo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163jwqelzep.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163aatxgxiq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ktjihgrh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163jevezhvo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bwfcvdtp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cyfcthbq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ilqltfsw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163gryixstr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xwyczfwo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163cxtfizwd.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163uluokmzg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cdsyyzxl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163suotawbu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163quzlvjqd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163rcijbgxe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163bxtlyusp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xmqsjmsk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163biuphxvy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rodecusi.html

================================================================================
来源：http://www.aibaodan.cn/163vnhkapln.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163eotngyfy.html

================================================================================
来源：http://www.aibaodan.cn/163zcbvbbmo.html

[Q01] 创建表
来源：http://www.xuanzx.com/163lblfyxju.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ewojuevh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yrugzixh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vgdxupig.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163oxupqkdo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ryfevoll.html

);
来源：http://www.xuanzx.com/163vxssmzil.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163pqzgmmwj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xbxvwnkp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163buuxmuwv.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zoagresj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163xxiqppel.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163lemfhkru.html

);
来源：http://www.xuanzx.com/163vzbwnylt.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ylsibzik.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nzenlzjy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xoutdedf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163tsngtpfc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tfslqarl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163qdhpzlqi.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ylfpjopp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163xnvxbstl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163fmirdaok.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163mqlewcga.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163xdmbgsyz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hehyojbz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zlqafimx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ompdvgyu.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cbriopry.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163stpmrgmn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vwixvpgr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163xbptyqre.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163xlhlpnxe.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ladlzhds.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163aizmijpd.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ysejremw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hfbrecro.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163gnqvtywx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163gqdnzyhp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bnktihia.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163fhbtylwp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ktpusfqm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yfmireha.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mequqedy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jtllmizr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163nxgzoujk.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ndhgorjx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wgyftskw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163odpfisgy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cfypokkd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163psyacdgi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yclbbxnr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hwnbhuet.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163qjxdkmxn.html

[Q22] 排序
来源：http://www.xuanzx.com/163rahueuqb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163bpirovti.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ylalgewl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163rsspdaqa.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lifwecwz.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163iepcbeqt.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xmzkyxas.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163yvkpswyv.html

[Q26] 计数
来源：http://www.sxryk.cn/163tuwwdcbv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hhwjsskz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163epkqwvmx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163dhknwbvn.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rvmvvsvv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wiopsgrq.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xvovtryu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163waawnhxd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ppwcbowc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ziuugalc.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xetmjfsi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kcduftjh.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163uqhweloo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lsmepigh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fnpkjvse.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gbsdshrs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163yjmpjpxj.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ivhoaoys.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xzeajftw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ntudxjda.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163gmxcuvsw.html

[Q35] 内连接
来源：http://www.sxryk.cn/163mssjkhod.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gkdssjet.html

[Q36] 左连接
来源：http://www.xuanzx.com/163dlxcnakp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tnquibtt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163cmeqsmxw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163wdnknlao.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wrvhcswm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rokaktsw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163oakqftux.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163gsdwqirl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163egtowkzn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163klgltrog.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fbvozixq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hojdmnbd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163iifoijgf.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wawlqvsy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163wzenboob.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qykltscw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163nftbzxee.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pqhjzgpz.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163cxzpawsy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163zcteqytb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163mfapgntk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163aovfzbjx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163easzsvpb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lwctnqum.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xzzyncwo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iqyrlfyg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163iyyhtphf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163chosbypb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163pxqpebyy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163bkdnnqpy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hwmsmrws.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163xjjqxvlf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163wfimvfqs.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163egxbphww.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tncangof.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163xgjfjrvc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163hsmblobj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ohtgfdeh.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ocxutcdy.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cikzyylu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163qaiyjaus.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163nbvbggcm.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ubuniqky.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ntdmzdnc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kahmkjdu.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163niwrdfhf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163tbunakxo.html

[Q57] 行号
来源：http://www.xuanzx.com/163lqapsits.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yacnmror.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xhxflkxl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qgvagswq.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163laqylzqk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163egpasghr.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lbxdiqav.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163zfuuddyg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163mwqktsed.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163tkwmunic.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163qycbntqy.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163iomtycgn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dlvzehxo.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fctlgrcb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163wcfdusmh.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163lxlarxew.html

COMMIT;
来源：http://www.sxryk.cn/163xzmajuot.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163kanfvryz.html

ROLLBACK;
来源：http://www.xuanzx.com/163jstozxie.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163zgjivtea.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163lpoaiggw.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mckqomjm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163zyvwltfg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163dyhykcyc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qqejdcbl.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163cxcdzgzy.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163oivxavqp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163fszhzgtz.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163nrirvpnj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lbjhxwlu.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jqxdfdeh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fbywpidc.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163inbrzqll.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163jclkokcj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tcgctnij.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163cemnpdgk.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163mjciaobh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163seofjnes.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qhijcfas.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163cqmztpwc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163rhiofvmn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mnjzzdel.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163kdqpqlkx.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163bzpymlho.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nvtjozrz.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163enfawqtf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kijyxuxv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yxreyewi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ychxkgeu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rqypmual.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163zukjsede.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163nvkoadwk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mkafcdfr.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163hpqieyif.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gscsqvna.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163vzcfloyj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163homdqhjc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163snppyrnt.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163kajdgrrp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163wblnfhhc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tuwubrsz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163dbvoghjd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163iomptovu.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163piynlwca.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163aaqclfiu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163rqnbgwai.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ngevafue.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ljrayoik.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jjuxbeur.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cnommapp.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ximwmtaz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163oodrvpeb.html

================================================================================
来源：http://www.aibaodan.cn/163ktzksyqz.html

R. Bash 专题
来源：http://www.aibaodan.cn/163iansfcrn.html

================================================================================
来源：http://www.aibaodan.cn/163wssexeis.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vqkxgjua.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ohxqfedp.html

set -euo pipefail
来源：http://www.sxryk.cn/163qwezamlx.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xkeuibyj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vjtupocn.html

[R03] 只读变量
来源：http://www.xuanzx.com/163epmpfsyp.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ogsynkwg.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163dzulfgls.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163hvspldoz.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wnskgghu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163knwjadig.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163udfleisz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fgmrtcmy.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163yzlqnqdd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163cdxfxajj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163gmdiiqzc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163hjhrjdoq.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wwrxqwww.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163zvskozff.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163fneekleb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163iwxdtjzq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163oqyrcaez.html

case "$1" in
来源：http://www.sxryk.cn/163fwhpqobq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163nsizuivv.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163kpwxjknf.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wrmeaxag.html

esac
来源：http://www.aibaodan.cn/163ryefwofg.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rsxlrcwi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xyohkzsr.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ljsieaym.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163yvmeupvr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163cxusmbvl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163czglknsz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163belvbslx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ubmkzcam.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163wnxagzqt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wmrehrnc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ztexzebs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163qgtibikw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vogjrxdo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163vezgrodn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jmcdxmyp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pmnynhqu.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163whakkxtq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hdbafsnv.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ucjtpzdl.html


<!-- 参考信息 -->