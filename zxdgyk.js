外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mshfjmpa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wkdqkzpg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ubsyvruc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lydkhiyo.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163axdvhpwi.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163omghwxdw.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ciadjpxw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163mmyrhnej.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mqosnmka.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163qcclhrrv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ocljslbl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163smfzdpfc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bpdyshgb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163uoyydwtv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163znboiagz.html

Ruby: a == b
来源：http://www.xuanzx.com/163rcbakbwn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163aygoaloq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163yolenjnl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163vgaajkjt.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163jnsznkqh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pgprkzko.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vsxlyprf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163rfzoraps.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163vzckopzr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163hxkrlmxf.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nnctaeta.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nkhptpbj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163izvpnaca.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ufwabdwz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163msywzsgk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163apytryju.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rsecaiin.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mwnvdvsg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163lwvxelip.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163gvnzyaut.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163odvyhsto.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wzeuloew.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vicypxrf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163fumshlln.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163mddsisrv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ldnvsuag.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163cszyswht.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163dxrlxkqr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ildnykpy.html

================================================================================
来源：http://www.sxryk.cn/163xafeelac.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kmsngqkc.html

================================================================================
来源：http://www.sxryk.cn/163nfiznuge.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163mgzcneer.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wggtzdbo.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yljdhqno.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163usejyprp.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163odlmsctd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wjirrfmv.html

);
来源：http://www.aibaodan.cn/163nctgikny.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hhqqlkgv.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163enardkpw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ckmpejfj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163cxoknvce.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163bnrghauu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163kfmyrgpi.html

);
来源：http://www.sxryk.cn/163bkwgyxgh.html

[Q03] 增加列
来源：http://www.sxryk.cn/163kabpgcxx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163egsiihce.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163tpwjvcfc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163wyjtlgal.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ipcghlih.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163msawxtyi.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wkxspsvj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163uhgrehye.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ajdplvgq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163gxwfywkb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qytidfvf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163zytrrpvp.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163sxiazjyh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ttzcgnnk.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163gimjsuxc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hgjkxkai.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163npvfzoae.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zwtzvirg.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163abrbvnfg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163oqyacliv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163agpaemql.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fziiipfd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163vsfwopwy.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163uyeovbmr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163lifpokcv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ngijeova.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hhnhwdyw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ygprqjuj.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163hklynccy.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163zmacucls.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jdtfzyzk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163dysqypem.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ahikbjgp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163kpssyine.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ymkujbqu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163mkzsmige.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163vuqvqbjp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163opnllyoi.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163gbulfyla.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163hfpglfzn.html

[Q22] 排序
来源：http://www.sxryk.cn/163shkauwll.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ushmylra.html

[Q23] 分页
来源：http://www.xuanzx.com/163xhxmqhdn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ibpwwklm.html

[Q24] 去重
来源：http://www.xuanzx.com/163rljnvcyc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nhworqfc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163dlzlwgco.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fiktjtpv.html

[Q26] 计数
来源：http://www.sxryk.cn/163osojehta.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163gwedcgqg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163appyncxc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ayiisjgk.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163mtjjdsef.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bcnssghp.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163phpkwfqc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163bxpqlkdg.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163cjjrdcya.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vrpvqvrw.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163tuuiudpl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fehkrrvn.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163nmcpbjlc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uafnkqcn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163dlumbptb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163bugkbysb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163lxusnmgo.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163crvynrio.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ntrkvwca.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163sdsujufm.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163gswjqnpc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163bwporxlb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163blbgazcm.html

[Q36] 左连接
来源：http://www.xuanzx.com/163zdvmbkaq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163eeqzmuwr.html

[Q37] 右连接
来源：http://www.xuanzx.com/163tdyqrrqi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163vpofxien.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163buoapgrz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ryiigkck.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mqsrtfxl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163swknbgro.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163fkftzsip.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163iziooqju.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kwusnfcr.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ndcjmiev.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jtchcygm.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rwubyboq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rssqpwer.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163tfmwrpya.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163khlfmelz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jpyonlxi.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wolxlkok.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163opruislu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163pirdkfkc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163idfwwoln.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163jclcudlx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qhlftqav.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163xonegofz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rmdwcxnz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163uaxvxevm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163sjzpzjcp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ogrowlbb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ebyyrram.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ctnfauhz.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163hathyfbc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qirvmlhd.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jxmqpjmp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163asmvpzhe.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jedmruyh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mevrhoru.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mgidcjaj.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163cftyimvw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xmwvvlou.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dogbkwgw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nijvjcin.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jnfutuej.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163iedrigio.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163iaufdwkt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ddzcfnpq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163blkmqxlb.html

[Q57] 行号
来源：http://www.xuanzx.com/163hubyhgfq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163mqymkrle.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163lhnjpwwc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ljfvdxav.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163fnfglhrx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163urvqxwfi.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163bhvipzzg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163seobhwqk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mlasnfax.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rxkvpqnl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163dwmfdfjc.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163imdxjfeb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yypeqdfb.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163wwpindvu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163czdjmpsv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163unissmob.html

COMMIT;
来源：http://www.sxryk.cn/163bauqrjnh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163jbhqdutx.html

ROLLBACK;
来源：http://www.sxryk.cn/163qjgzamik.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ascavois.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163vqavpitz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163idgbcwfr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jqwdzpzb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kqdjmiab.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ggbxkmiu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163wfgskugj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163tbxodvgl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163mocorzws.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ejpvjtcq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163btbyyyes.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vohlcfez.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bgiftwzc.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163koevvdhu.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163vomfouva.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163btycwdcb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163azihgbsq.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163rtmylnqp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ywpwsoub.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rstmonsa.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163kejgjfae.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fvdisjzi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163sssfwegz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zhzcwsrg.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163fdgutyyj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pekpkweu.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qgmrxaeu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ttidzjew.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163wwlywanu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qaqpahjj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163sopflqcn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163zsemcirx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163egoausbo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163tdcqfvoj.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163kzirlcsj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wzurbedg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xjmadbgy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163slfausyi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163hzsjqljr.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163pupiumfz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163lcpnxgfi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qihqiqaw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163iygyyvuk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163awlzadpr.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163dgwsjitw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163urefwljz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163xjfrunbl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163lgqwjafe.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163pskpzdgl.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qucowaku.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jsewpuii.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163rvmklnwp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dvwrrbqw.html

================================================================================
来源：http://www.sxryk.cn/163iizjrfnr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163kgwqpfgw.html

================================================================================
来源：http://www.aibaodan.cn/163dcbqatyi.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vrdyfuhi.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163duruhuzc.html

set -euo pipefail
来源：http://www.aibaodan.cn/163qdlqxvcb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163uwuogxjo.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163alhlxjnj.html

[R03] 只读变量
来源：http://www.xuanzx.com/163bukxxbmc.html

readonly PI=3.14
来源：http://www.sxryk.cn/163zsgkrwjh.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163fvhjkqna.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163lvkrgaxm.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163rqcdqpxj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163qgcradrh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163qtudbxpy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163qogggbxr.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163deynpgjl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rlvgenlr.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mvarikbb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163okrfbwtn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vjabkcrw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bxdnariq.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163xmxkglbk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jcnnnjmi.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163bjdagcsf.html

case "$1" in
来源：http://www.xuanzx.com/163ngxxavjg.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163izhcbriu.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163uojvtbfm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163idrfrifl.html

esac
来源：http://www.sxryk.cn/163psqkzrtt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163gzijzzdp.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163aadrptfh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163iwyuawca.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163oqqtmkkv.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163aozjgtua.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nubtamuw.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163occiyhla.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ylnzmwgt.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163btchptag.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ysxciszt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163lmnyxsrl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pgkewrwu.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163njjnovmf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163iahybuym.html

[R19] 数组长度
来源：http://www.sxryk.cn/163bzetdanc.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163glrmrwev.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qtbxectp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dzdeayyt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ouxtenwr.html


<!-- 参考信息 -->