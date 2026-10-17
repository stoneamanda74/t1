外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163dhbtddez.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mfjqkfvl.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nsdhdfuc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cydrrcms.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jfyxmljd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tjnzjdcg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vsltkqiv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jkmredhv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163civwxmdg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163hauctmew.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163meqabmzp.html

Ruby: a == b
来源：http://www.sxryk.cn/163mwtnndaa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163yjxtquda.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rtqnjrcx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xbpqmjlo.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163hfaqnlzr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163gyomvexr.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163uccvfzde.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vpqpulot.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163zqejxrxl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163kgzixzzy.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xomjyxyc.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163aumtywzx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vdjhhxik.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163bmeosvhc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163txqraqkt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ycvnjekl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163wvsousxj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163yqkmkjbm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163fhgamtyy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163osgvqezh.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163zvvkiggf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ogexqupa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qjwegjnd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163yjacyugd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163efwyauhy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zjlqjfpm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163nxgaedha.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163wyvedgzm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163jaxxpwoq.html

================================================================================
来源：http://www.xuanzx.com/163sejfxmeu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mcxuwwyr.html

================================================================================
来源：http://www.aibaodan.cn/163nljdauwa.html

[Q01] 创建表
来源：http://www.xuanzx.com/163smsoqvob.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vnmkziat.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qhfamoiz.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163zsqwebiw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163iraztbhq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pydpeiky.html

);
来源：http://www.aibaodan.cn/163bxlghctm.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163sfrfjsov.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163twnwvbfq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lypnuwco.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163idftqtck.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ttpracsi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163bqaaiere.html

);
来源：http://www.aibaodan.cn/163jsydoelz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163vkbptfim.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163pbrmqslx.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rsakojap.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163hwnzhqzm.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wwkcwieb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163yygswyli.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163puvpgraj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ukrqsxfh.html

[Q07] 删除表
来源：http://www.sxryk.cn/163qzhllqfe.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163zwgdweff.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163noxekpvs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uogzqkvp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gzelpmmw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163rhbgvver.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163insrdtyt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pwkycfbq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163qsdskejo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163wmzpkfqq.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ftjzifmq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163cvruqadk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jawfcxly.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wdcxyris.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163pqzmpymk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mfaysain.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163mmycgdkt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163gayofcej.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bvlkeifz.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163fpavpvre.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163sssamdmg.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vojyemub.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163oikuhkib.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163akncsrde.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163fnojmjrw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163fbgyandv.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vxjpmwdb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hqyrqciy.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fugyqxau.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163nanizugt.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163zjixqymy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163czlcebgl.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vocuxbmf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163tjudkury.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qynxzjln.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163joiybube.html

[Q24] 去重
来源：http://www.sxryk.cn/163bakijrgb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vdwiftzv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yizhdxdk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163uqfyxmyw.html

[Q26] 计数
来源：http://www.sxryk.cn/163ecubtqta.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hjciadbo.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163anwrdydi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qfrdhnvv.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163krktyruc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ifkdnpjl.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jwjkpxgo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163yxdqmodz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bqbyfmga.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bbjfqesh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163umioibey.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163whxvhrsq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zxfvqhyo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163moioqlvb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mtnxyqsn.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163figqrusy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163sfaqwpah.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rahuywtz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163htztjbpj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163buyekypc.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163krhaxukr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jugciyqa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mbtiauhb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163nhtixowf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sobksxux.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mrtlgjic.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163prsqoeyn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163injqhtje.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wsdvqluj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163rliiucrc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kfxojhho.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163afsgzxqf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163cmtrlygn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qxmsdyze.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zicwzgko.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163moaydvuh.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163uwfbvxtf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163roiagtho.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xdmpjtvm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163gobkhjck.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fejsifkw.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163gfgekwfa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163mcflhnzb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163mvhbbofj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rxqobmbf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163aybwtufr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qzeckguw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163rqncolmr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dqyrbgqb.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vhvzrqdc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163yevokqcn.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tpdhvghp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jizzlgfv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163zvyamlya.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yxrtyyqk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163iyyhbfmd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163cuxnivmd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ocjtxclc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163rlwhvpae.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163njjnkkdi.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ggguzbev.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hmtbjlbk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vwqmqljb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fgnwpdrh.html

[Q54] 清空表
来源：http://www.sxryk.cn/163suhycfhm.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163qogrejdb.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163udcgpotj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hunvdzqv.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163rmkucvzg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163oelnvxuw.html

[Q57] 行号
来源：http://www.xuanzx.com/163chgznuhi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163pzeqosrt.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ezhhqqvd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tanblbgj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163cqltuebq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163lweniwwy.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qruzwttk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163yputnztn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rvktxqmz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163efgqtgms.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163aavqkjme.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163reanayni.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wpahbbcr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163xniyonyy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163tuzmughv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163fgybtbyt.html

COMMIT;
来源：http://www.sxryk.cn/163yobhxwxl.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ydzmyima.html

ROLLBACK;
来源：http://www.sxryk.cn/163jbtvuahh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163xvsbmffn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163pyvwqeyh.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mrvgovcv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ohjnvnxq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kgdgxfzl.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ryviraxk.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163hodzgatt.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163nvqnzdeg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ykmoteuy.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163zduiugad.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xwjibvji.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163cqrdgeiu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163gwzizenu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163yreohspb.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163bypagewr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wktyjody.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163txovhvao.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163guutuyjc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163yqypgwkd.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qnpfaofy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163clfkqmmm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163aaetpjfp.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163hbviuzrb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vayhifyf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bgkdxtpd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ejlirpls.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uhrvefxw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vpdjekct.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xvngpxar.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ijqiqdjc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163qjkouhcl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163bmuwxouc.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163csieipmr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163xrqyrgit.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163hleohsmz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ufgvfdhj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bdynlvjr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163skgnwhfl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163iycfkoyh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163dxmvrqgk.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ezyiacxy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xufqfojf.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ybejvfon.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hzdaywyq.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xxeotcvy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ulnucjxy.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163rmkouftt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xcjrdswi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163buryibml.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jjzjvpvf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163aiqattln.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163pgrcgulg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rocaancp.html

================================================================================
来源：http://www.sxryk.cn/163vvunbtmm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163zqwmxjsk.html

================================================================================
来源：http://www.aibaodan.cn/163pigmynsv.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163whmerawx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163lrgjvztw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163vbpcgtic.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163yvczlyke.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rsaikfdo.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163uukudyfh.html

readonly PI=3.14
来源：http://www.xuanzx.com/163vtzkbgfb.html

[R04] 位置参数
来源：http://www.sxryk.cn/163uhrbuyuf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163yyjpkweg.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163osbqptnb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ahsoqecf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163cohwrmem.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hlezheml.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163cjbdgfjk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163luvrgryg.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gryulcbl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nqbmroum.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163tlmkknqk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wxifdvms.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mdxdapwc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163xuwqcncu.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kqvbwgal.html

case "$1" in
来源：http://www.xuanzx.com/163pgozexre.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163xsyabguc.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wrlngolt.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xbleaaet.html

esac
来源：http://www.xuanzx.com/163vbswuumz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163aswwxgvo.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ydfthekp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ytkrtjbt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163qazmockq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163phxhdqgh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rklxzjex.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163aeswunni.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163lxjeamoj.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163kqjabhxb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hjspwbdl.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jfmuihxd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163sasiysnw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ldcjjocy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wluohbzn.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163homzjyzh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dxccgpfv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ozlruruf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163irwfhdie.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rhlsjwag.html

echo "${#s}"
来源：http://www.xuanzx.com/163lcasxmaq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163bihxmoge.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ioomdsvy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163iupcwxbd.html


<!-- 参考信息 -->