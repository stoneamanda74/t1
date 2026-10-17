外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jwpprrxx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wnuroctk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qqfrllly.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fzmaqgwt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163xnadgtwp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163yugbzkun.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dnzyqzel.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wjhxlcjt.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163olzkhjct.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ilrrnsuz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qbuiecfn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163eflhrnds.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mzrdrosx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163krtpwmye.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163svicsieb.html

Ruby: a == b
来源：http://www.xuanzx.com/163osetcpon.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163pnmkhrvf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qnmnduuk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163pvndunfh.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rexumntj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163sfeytyje.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163prwhaxpf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dbrotrco.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jfjzwvci.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163rjohaknx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163valcexai.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ookobtih.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rpyzvmoo.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nfgwnmly.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mwtuqtlt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163penmbhqy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163akycivxh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163bcbdbqtk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vuapvfrz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163seqxvbwp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zvvwnquh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pedcbdbx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jsxytxnn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wcmtcxtt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ladnmcqq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ffbwgjou.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163llybfiiz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zzrtddcx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163dyjlxewl.html

================================================================================
来源：http://www.xuanzx.com/163kqnrfury.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163loiqrwdi.html

================================================================================
来源：http://www.xuanzx.com/163mkfygmaf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jfoyuydb.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163tfurocea.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163azxapjjo.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163nrymnvnh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163zyvtdqro.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163uivgppso.html

);
来源：http://www.sxryk.cn/163jfrqoqyz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163vdaxufgn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jdxlwslc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vkejzrgw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fkephnwo.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zjrwprdg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zhvecxrm.html

);
来源：http://www.aibaodan.cn/163dgzudmty.html

[Q03] 增加列
来源：http://www.xuanzx.com/163knbmeycq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163hvxucnnq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ksceqeag.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163wfnegrij.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163faximpwh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163pbtqjcfn.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qxnbhuik.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163xhdpqedz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163rzqhvhwh.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163xgjjkqdi.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163cobszsih.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mtnmxwpd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163mzljykgb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163aynjnqci.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163itumyyrk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163huumarhg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163uoxjqhze.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163nfgdmsnj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163icuurrny.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163noqtwcsa.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ymuubzai.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163oviifunv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163extinzbu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fqxukdge.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163wmzwgmrm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163yyiztszf.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lsazlyyq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ngjklihc.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ujqiaujg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tubgzjev.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163nvsovlex.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163gcibvklk.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163jjwswvpw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163tdkgfvis.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163robosflk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zycaysiy.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ocupraag.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163nminjysh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gzcvhokj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zhhibjdn.html

[Q22] 排序
来源：http://www.xuanzx.com/163mqyredyj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163npdfveyq.html

[Q23] 分页
来源：http://www.xuanzx.com/163agegwfle.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163hatbytjk.html

[Q24] 去重
来源：http://www.sxryk.cn/163gbchnpsr.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163rzmokfjq.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163jjhuwdso.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163yinqviko.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hyjtedvy.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nrokviqj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163fmvabsia.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163glxuagrv.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xlwaburq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163rtylvwbd.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163dicrfzvn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xclyutfl.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xrcugdek.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eamzhacv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lywfekvh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kfkjqzlz.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163aqoaolvh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tgaudjqz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vlurulkw.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163viymlgox.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163hqhgymva.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163suismcbp.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cmpnfwva.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163dsebjhnn.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163opxqvglx.html

[Q35] 内连接
来源：http://www.sxryk.cn/163lunjsbof.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yxmhzlij.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163anssbief.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163slagbiki.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fwlrnbyz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163lptlqmxo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163twletsqp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163efecpizq.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163tnwzktnw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163cmryjupu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163gsqkcuxy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163emfxklnr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163mdihpoek.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163edvyendl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163mkujhlyk.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vengwcfu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lymvhyqj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163anmlzqsz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wwyqjbjx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xaqagoje.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163qypolxts.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163viydnnxa.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ntgrtuyp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qyegrlbj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fvmubqvo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163sfkzktcp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163czqchpni.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163verrjoso.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163dplnhwyw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163fvmduczc.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ltoygbuj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163lnamkgeo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nmchllny.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163eqziivrm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163iwjsjkmy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163rtkilrjy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ikkicmuw.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163jpgvhkab.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ebdzgdbg.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hsdhpavp.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163eanbzhrm.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163gfersjif.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qlhfjvzr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xfypfuso.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ikknkbjl.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163npjutohu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163rpyvqyub.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163dboyrzhy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163siswhvcf.html

[Q57] 行号
来源：http://www.sxryk.cn/163favsvnft.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yowvpyae.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ruuasuon.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163dfyjqvqt.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gbpicxci.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mgnsbzfx.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163gmbhjqif.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hfgwbwrb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163nyttbgke.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163rgzzgcvy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163vsthfhkz.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wxhphsfm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163isbhvimh.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163yvvlfqkg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xlcykjad.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163kqdtlszo.html

COMMIT;
来源：http://www.sxryk.cn/163xkabjhtm.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163eqtnphxy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163absmmsui.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163klkuknnr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163acrctfpm.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dtglmdts.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163bhsofqyk.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163sakgfxuo.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cittxxib.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163knyhmfdi.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qvjsjzpv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163aqxutvpw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163yromgudg.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xvjtqjzb.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cafxthai.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ryliibbr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tuhljlvd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163mbqhcoba.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mmcoytpm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163asiazhyt.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163kscfmfmu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163oqmumfdy.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vubnshdf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163atpijshj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163xsiirfkm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163rdvwyejv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163adceqvhq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163jvsgyafd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163gpkkmkbi.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163mhbjvize.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lzcrkkcq.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163flzlvqpe.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163evnwgryf.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163niqqbldq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ygzlgjpl.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163yjqphgxc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nunyekyf.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jfqzqzyt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sgieuspv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qdcaewqf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vcnuxhfp.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163hbnvwwec.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163nghlqlkm.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kfpaevbo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ldtzytxz.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163oknvvlmn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163lxeewppo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163fxiqtwto.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ciggrfpz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163tvwifkui.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163gphbazkq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cknnsiid.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xmzzqtnr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163eqzrcvkn.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163sanuwhnv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mwxqtstd.html

================================================================================
来源：http://www.sxryk.cn/163fgpvfdmn.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bzwvrfzs.html

================================================================================
来源：http://www.aibaodan.cn/163uliptdjb.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163kxbfajfm.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163rrsgqfap.html

set -euo pipefail
来源：http://www.aibaodan.cn/163dnxyobbg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qcclrcvx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jllgzgcv.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gqheotuy.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gmpvkaij.html

[R04] 位置参数
来源：http://www.xuanzx.com/163iafovqfz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vhjyyczi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163bstspfrp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163pafurwma.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163whxivcuu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163tbndfaxe.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rcywbxhx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163tpundfpc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fpwnggtm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163rcsyvnpc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163beqjvbzj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163sdjhbhpp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163vjbivkbw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163skuoceug.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cxgzznws.html

case "$1" in
来源：http://www.xuanzx.com/163uyndlntp.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163weyydxjj.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163undrzchs.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163kkenltji.html

esac
来源：http://www.xuanzx.com/163osoqccga.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163okbgnxfk.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vbdueqik.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163smhvbugj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jjbverkg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163sljdtspj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163dmzrblko.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tjffzmpm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163tjfsoctu.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163pywgxgyf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163rmdemlsb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163erxczlqv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uzrdxahd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163tllhspjl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zoeebyyj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163eoprdebo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163spelbgjv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ozxafzob.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163uhxedjsd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wogpgalw.html


<!-- 参考信息 -->