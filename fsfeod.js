外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163lrrqrgpx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ibszqwtm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jglakvak.html

[P04] 求长度
来源：http://www.aibaodan.cn/163qqzzgwhl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zsgvckqj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nvtdjjjx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wuannkpk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nxwnvgtt.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ozuyfico.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mwebimta.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pdsbfzbd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163nemspypq.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163szrjfkoa.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163khminiht.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163yygatagv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163nzzchwvc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vwwpyvva.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rpejbzcv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jntnepfm.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cbgqgjdt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bzeuvevt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163muetcxjw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163thgvbbcy.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163llqkukmt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163zgqglxbu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163iteggsuv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163iphrydlz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fzzivjtx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lsauadfp.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hpeudbcn.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163inmwqnmh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wmwauhmf.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xfjkaubb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uzsloqoh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mlsaxokn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163oplgrjuf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kvafykej.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bvwkrlye.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xzuuewjy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kqwtrzdn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bkgggaup.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163fksrsscc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163zdgtbqxy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qsmbknda.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ckvdeehc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163glqjxblh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163smlrjwcf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163syilyuym.html

================================================================================
来源：http://www.aibaodan.cn/163isbzhdvz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ycpedcaf.html

================================================================================
来源：http://www.aibaodan.cn/163gqvqrfuj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163hbeduzhm.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163yvkyavqh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yqximpwf.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163sydiquuf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163zcrpgqif.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163thbjhaqp.html

);
来源：http://www.aibaodan.cn/163mwnrghql.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163jfftqbvk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163gqbkuflt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163srnssjhn.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kmtejuje.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163edrcufdy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163bgcnsdqo.html

);
来源：http://www.xuanzx.com/163blfatjmc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163xqtemvfr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163uujgnlfa.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163phinbqea.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jrqwaaet.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163irjeviwa.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163gxgroobl.html

[Q06] 删除列
来源：http://www.sxryk.cn/163uongqajq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163oefabpzv.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163sxcmoqgy.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163jhxnvsmr.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qggyqbxv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163jbnbqaol.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gcxjmbbg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163sohznbbp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qseahoxq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163axoittfg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163apkcwdiy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163xrckgzzx.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163lckmvruf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ajfqiaoy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ucxigfhb.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wzeukqql.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ftmvpztx.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bvechxum.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163zxgxrndo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163xrgauufw.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163hfmqnpfj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qhtnwfkq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163kpspbcdv.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ynuhwrud.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163orlygexj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163fuxnopyz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mezakczm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hxkkevps.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163porubgle.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ixrgltwx.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163quoahqes.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163yjmbfety.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mmmmicbo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163pcvkewgc.html

[Q22] 排序
来源：http://www.xuanzx.com/163cwxnxiga.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nqqngcti.html

[Q23] 分页
来源：http://www.sxryk.cn/163hxtrjjty.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bepmycgw.html

[Q24] 去重
来源：http://www.xuanzx.com/163mhxoxmjs.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vqoxoohc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163weiqvbfv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cavpbaut.html

[Q26] 计数
来源：http://www.xuanzx.com/163kpyjenlt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163jctpuwnz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vwauphxr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163hvxsbdak.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qmosjdxj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163aqqcbbts.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163etlnavaw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163wdihoxih.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zqsbcpjo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tzuxynol.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163qwxqwgyw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zmbolocu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163uowpxgfl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163guihyoiu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ohjsevyq.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tdqvtdbe.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ybkgpnii.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163qoneedmi.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ojvbimjn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ifknkafk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163mlbshgqc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163nfgkrhlz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ldvexusv.html

[Q36] 左连接
来源：http://www.sxryk.cn/163nfktbzib.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sljzjeno.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rrofkacd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ynzhgzdp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rwuvumgz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163fsdvnrvm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kcxrrsex.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tmtkqhvw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hdxmufas.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rtlgohyd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163fsvcafly.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163csdqmkqk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163adjlvxzy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mgacfytq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163zbzweqnk.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163fmsnlxqw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163dnuubyob.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163shuooyga.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ynnszqdo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163trsvzsep.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163iaahtbgx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ywwwdcyt.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163xquciotv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tpqbwywm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163aihtgprs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xsxvnaca.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163nruotrla.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vunsutth.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163prsryxsi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163aetwfogz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vnerfzbx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163milpbydv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163tfecepoh.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163cytxwsoy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ikfjvebf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jqiybjku.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163egdrdfit.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163putrqcnd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hiuxywkz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163fzfurwvg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163epdynltd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163dkpycdbg.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163xbzftsfd.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xymtchsh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163tlldnjfw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163xyeebgno.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kdnpbloi.html

[Q57] 行号
来源：http://www.sxryk.cn/163owphylon.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163oulugknd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163yfmmzvfk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vcqvzaiz.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163neobfgfl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163qoqucjef.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163gtfhoygc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ffapkfbp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163pzzprwxp.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163yudkcthw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163gxecjtyf.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163mjmwiwcy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vypxakqv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163bsuqfezg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163jtupqlpn.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163vcpkgovt.html

COMMIT;
来源：http://www.sxryk.cn/163bcofupju.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163kbkandum.html

ROLLBACK;
来源：http://www.xuanzx.com/163vvuphdas.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163cunoljgw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kwjnwuam.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163dkxsaixf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mhyfgirm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xlhdbwxq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gircknqz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ryjrrkrx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163hyrpfzav.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163khkrknrf.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163yfusvxxx.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zqmnmdim.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163bxqtjjaw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163dvooqnaw.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ythavpeu.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163xgjwjssp.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163rhtridec.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163znnostfx.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163cjdxgfad.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ccyqsfeg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qrsazdwp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163exrkhhxa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163sazumsdz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163gauxwrxf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pqkjipmj.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163crlrgzdl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jdwlejts.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163einhlblx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qdwxcwka.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163nuamkocs.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163sbqdpjpu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163eqgcspip.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ydyydunm.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rhmpapbx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163aaxgqkya.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163klqrcjxi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163vsjpapzt.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zbxzergt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163hduzmztj.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163tatmuqrf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fmjxsmdj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kaednjgk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ljyxjhhr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163twuvpdhz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fcjfqfjz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163cunozqjn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vzwlueht.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xtzuhupo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mmyegaqm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xiobfsye.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zatxkyex.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163smryicqm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163vvuekofe.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ueifokvl.html

================================================================================
来源：http://www.sxryk.cn/163pmbxwvaw.html

R. Bash 专题
来源：http://www.sxryk.cn/163ziscgowr.html

================================================================================
来源：http://www.xuanzx.com/163mynjophj.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163utbeiatu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qtvuydyg.html

set -euo pipefail
来源：http://www.xuanzx.com/163eurjyngn.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163wtreqxth.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dqksltag.html

[R03] 只读变量
来源：http://www.sxryk.cn/163nuqwaskb.html

readonly PI=3.14
来源：http://www.sxryk.cn/163nfcmpaxx.html

[R04] 位置参数
来源：http://www.xuanzx.com/163plwijdsa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163permeowo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163eflycacu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lafpycxc.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163kcffyzqq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bnekfjpt.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163jmokofcy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wabdpgvt.html

[R08] 数值比较
来源：http://www.xuanzx.com/163knqcvtje.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163biatlksi.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163frndwwsz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wfjsdcsq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163vwzexjms.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163pgbjxbxf.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ppvpenvd.html

case "$1" in
来源：http://www.xuanzx.com/163gwwsaliu.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163oowhtypl.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163siplnqth.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163nhdblikb.html

esac
来源：http://www.aibaodan.cn/163rpmuxeci.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163yykcphcr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rskoqaxi.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zqqqrezq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163pmeofiac.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163advnnxeh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163savmkldv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ygmwfysg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163cyllhjjb.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163asxhihvn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163oebaeinc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163hlinnltd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163glsopqcy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163dchvvjdw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ulnpfwep.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163tubjjdto.html


<!-- 参考信息 -->