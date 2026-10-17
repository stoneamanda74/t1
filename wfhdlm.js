外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163eetsihqx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cxtwxexa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mwoaqwvm.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hnnwdjzq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ewofizup.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wibpduta.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163odgmpmwt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lpwfefuk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163nqcwoxiw.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ucdphhga.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kqskcxeq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qckgozsz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jnuojtxx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163vjdyojyb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163aobwhuaq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163rhffxbzv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ejvwxbap.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ctkuizkw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163igfwazdt.html

Ruby: a == b
来源：http://www.sxryk.cn/163vmvcutau.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163orzccztp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mdhovnpb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163hsjztfia.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163qnahczmr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ccirnxso.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163pwkxqysj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mrfoyvcv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163vhbsbyqq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163dltafjsm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163eryovwfu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163clgvekml.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rbmvtrqm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163fsteclux.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163meqfadho.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fapvvzjy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lfridkoz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163yokjvsmh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dnychivq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163eomebxnh.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163deyhxlnv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163padnqpxo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163inodkhyd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163orbagcin.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kklmmkuu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163lmieueer.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ecyfavpb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mmunyeod.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163yclecfij.html

================================================================================
来源：http://www.xuanzx.com/163qninqyqs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163arlsbqko.html

================================================================================
来源：http://www.sxryk.cn/163exclgknu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163gwseycog.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163gojxdyoh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bgstrzcd.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163emfcpeso.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163kqxieiqz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163cikbmiid.html

);
来源：http://www.aibaodan.cn/163zmrtzvcb.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ktnsnrdu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qiexrgdt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jkvzttsm.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163oidmadui.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163nudyejpw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163uajsluph.html

);
来源：http://www.aibaodan.cn/163thercrpe.html

[Q03] 增加列
来源：http://www.xuanzx.com/163yjpxpkhq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ffsvlshc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xkswujid.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163cyhojmqv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163dgxuciff.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vsdnodxv.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hvjbnkhy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163aqgesyha.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yoxfeykt.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163zztcqofb.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163sjcwbjgc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163iwtsjvxa.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kyafhjno.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mncgjmle.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xxogklvj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ukokceyy.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lugxhuoh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163yuhaztnr.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163fbsgvvmk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163pbhbqczm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dowrqnuk.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fewbqibp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ubjfztbl.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163cqbiflpo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163sbnxhczr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163arcnueco.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163whlgdvsm.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163rxawbvrq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ggypdspf.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tkngqdwa.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163unqhdpne.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zjhlslju.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wchlfzba.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yynpxfpy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163cfeqylqa.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163yzanhjkh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163tgrcckiv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dutqgdyf.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163twgdgwvq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gripolxt.html

[Q22] 排序
来源：http://www.xuanzx.com/163udtnvxyv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163jbvaxnyr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163zqvgmsmx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163gdibqjey.html

[Q24] 去重
来源：http://www.aibaodan.cn/163btpezguh.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163hfneoxwc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tutusolw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163lajniaof.html

[Q26] 计数
来源：http://www.xuanzx.com/163coqjjvkn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163jpuvczyj.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163efyimxpm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lopxmoiy.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rgirfneh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163kxtbcolv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163oiszefhk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163rxqdoyqy.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vmdtgvrx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tnabvpcl.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vgavybki.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163baknxqpa.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qbkgxjmu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cslsbpfp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vdjycxuv.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163deuqffsi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163quhuutul.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163wwxeozay.html

SELECT * FROM (
来源：http://www.xuanzx.com/163irpbykay.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163bkoupuau.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163qnnmdugj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163gytpogxd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vqinfatg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tlmxhrnb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zmgjtfhh.html

[Q37] 右连接
来源：http://www.sxryk.cn/163oxxxkxem.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fxhgpaij.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ykfmgluq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163umocyiqa.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163sweyrsiv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163zdvdeelu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163oojehlzn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dmdrocbs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163pfbinyzq.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zqygatyv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163gfnygmjs.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163nenenmhn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bzijayla.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163xxljkdol.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dpxjjhpt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fdrhlfjn.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163rozbleue.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mnowjlol.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163navidxzg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163qvnqovop.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zklaihpx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tkfwhxlg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ejrzskbn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xymronal.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163yuroekeh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163nomhbyts.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163moujburv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163yxodctsd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bblseatd.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163nqaonyau.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zycxfznp.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qcpygwkb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163iizybagk.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163twgslecv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zrritvit.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163kvglmmga.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163tpagwlun.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163znzhuwfu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gcrgcqtp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163japunhyf.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qjsdzcvm.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pxzvhayu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163onuxnjjd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163dxqarhjk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ikxukjne.html

[Q57] 行号
来源：http://www.sxryk.cn/163ltlhssig.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163sysxupht.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163aybyvibb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hhlqyzgv.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kakybqqv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163gwimcaib.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ijutelqy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ulcbvfuo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163nvrpphee.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nhjzotuu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163tqxfzmvp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ifevopeq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gshibiww.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163xnurowqn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zdsqukoy.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163nywlrfzg.html

COMMIT;
来源：http://www.sxryk.cn/163smovedst.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ujdsgxlz.html

ROLLBACK;
来源：http://www.sxryk.cn/163wlyhicku.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ghwhgvhb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163petlbvky.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163yipzcgff.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163nvnwhzen.html

[Q68] 保存点
来源：http://www.xuanzx.com/163wcpekoby.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rdiqiaeh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163bwmcrxdk.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zqugtypr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ftcjypmd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163yaqsxosd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163txvlsuef.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vqamoavs.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163utjfpvib.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163iucyowap.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ypdulpgb.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163lrruwzuq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163gsbmwpmz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163qgtahwtc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163nukutuew.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rzsypeol.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hlbbniib.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xiperldz.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163auoolpao.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vbqpeemf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163oaeknzvl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mwcftoeh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dcabxoii.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163murmumqx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163zumdlyam.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163opueuihe.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163xvczdjku.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163tuwhdrsc.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163glybiwan.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jgdtfiuc.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ssdgzbgq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163smiwmnip.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163turnrfet.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163nrbnlqlh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163juywkbkj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163oxllctnf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163lzujvtjb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163xyntommm.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163csqhvbon.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163udewcapj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xlfieplt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163znozoqaf.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163osmtnygq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ewkzlopl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163whaorvpm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mzxldxxf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ddpqpbsf.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163npirjlao.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163blytnzpx.html

================================================================================
来源：http://www.aibaodan.cn/163faafilly.html

R. Bash 专题
来源：http://www.xuanzx.com/163oaaciikq.html

================================================================================
来源：http://www.aibaodan.cn/163fqvwatbl.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163txfpbwkl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ybdnockv.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ohhyfqtw.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163twnrurdd.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rrlzxlho.html

[R03] 只读变量
来源：http://www.xuanzx.com/163idxkeiqv.html

readonly PI=3.14
来源：http://www.xuanzx.com/163tdqeezrw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163npdjnvvq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ievvfxfn.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163mycbhpao.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163upcxbhjy.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rqgvxqdt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vwtlerai.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163szpxbnyf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163cvqhukgl.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fdcigthr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163krnxasse.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163aiexkprp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163zglwzqih.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jgqmebux.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mxpwyvpc.html

[R11] case 多分支
来源：http://www.sxryk.cn/163xovgxlpf.html

case "$1" in
来源：http://www.aibaodan.cn/163jqlkdxau.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163sqygvopu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gsydgwrw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163weapxbsp.html

esac
来源：http://www.sxryk.cn/163lcvtrbal.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ulgagsfl.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163lrnltdla.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qswqpzei.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163pndfzplo.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fhkwxlwi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163hfkrvccj.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163yppwrzuf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zurtncus.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163appxvrcu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fnqregwy.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ddgbtxnv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ymamfhtg.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163debdrslf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163zdhygjsm.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tmzwuguv.html


<!-- 参考信息 -->