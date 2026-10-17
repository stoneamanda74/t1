外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ptowbipu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wmlldwct.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aqztmcxr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eztttzbv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163cgqekepm.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ounwincx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cmxwpbid.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xozlgezs.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jwwpqeou.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163vdvkljhe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163eqzbfeeq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163htuwqohx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dbdgvayc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xknyxhfx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bvmjhdlw.html

Ruby: a == b
来源：http://www.xuanzx.com/163tnndeteo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163oknsjbtk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tnptplay.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163wrcodsba.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163cvowysbp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163odgifttu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gsmjrxyw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163cdzzqqxp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163sfqmnavi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rdgjpfze.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ikoswzdf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ejlcmzno.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163noigevrw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163mfkspwcq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zeqwqhne.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163eczplwio.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vfmexwtz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ktqzdfyi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163qyczkpfd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163yajngodf.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163rxddtiku.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ehfcqeoq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163kdyygszg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163oufdirvy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163vvdgpxcp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163icnerctf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163tuvktyyc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cimcpudv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zzpfoduu.html

================================================================================
来源：http://www.aibaodan.cn/163oxlemman.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163akleczaz.html

================================================================================
来源：http://www.xuanzx.com/163zfrfeoiq.html

[Q01] 创建表
来源：http://www.sxryk.cn/163durvpuvn.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163dfzimkbp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fltrmual.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fnoayaem.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wjhfuaat.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163odqllwap.html

);
来源：http://www.xuanzx.com/163yjehchqa.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cglftgzq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zyzgjesj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lqyfvfwf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163gdcqtlkh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163akeionvd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163vifbfvum.html

);
来源：http://www.aibaodan.cn/163qwmwcodz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163wtjvylhk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163orvvnrvk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ushbpcrz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mpwasvso.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xzuhxdjx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163cqbadnyi.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cuskwnth.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163raxcrgds.html

[Q07] 删除表
来源：http://www.sxryk.cn/163rjcptpgq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163odommxss.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163rkvskrxo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ebnbmnwq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ijmegvob.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qrfwqfsi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wewnhbqx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nlszuenz.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163iycijadq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163kqciecov.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163zwwpfhqw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pjckryiy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163srnkvpfm.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163dljdvnym.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kipeduvn.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qvxaxbow.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163cuuisjbm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rrgbfmsc.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163jtsrbtsi.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163fhtewkjf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ndkhdlzg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163npkcbgho.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zzwgcfaf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163tbijdtkh.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163omebisxa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163vvtigeei.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163agypqjnr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ciqmvkpe.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163duuoiqkw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163aesskbxh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163qqwmdbas.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xkyeosmb.html

[Q22] 排序
来源：http://www.xuanzx.com/163lewsjyij.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163gosuocpg.html

[Q23] 分页
来源：http://www.sxryk.cn/163gkismuny.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163gixwdtht.html

[Q24] 去重
来源：http://www.sxryk.cn/163cmjuwnsn.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163fgkklosm.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tgymynsk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ttkzvhqn.html

[Q26] 计数
来源：http://www.sxryk.cn/163dmkegrzm.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zukrvobn.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163jfyfohxw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163lsyitfvz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vmolyjth.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163uyjhwluw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pnottzaq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dxarpmqi.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163msuvnjhd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163aspqbhfz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ezyummlp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xnjugdzz.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163pvavhjmj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163naersbkf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163pstenszn.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163enshahyx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163xezpnkwh.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163yearnozt.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ziushntd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163abmtbdtn.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163atltrnhk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fcbjyqio.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ufznuhbv.html

[Q36] 左连接
来源：http://www.xuanzx.com/163wytbmjyp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sqwfutkz.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vnbjgsoa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163buhoybna.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163wdmbipew.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ptpmuktf.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ieplkgch.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ncdstlxl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163apspimgb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ovmefviz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ausdogee.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163xsonioff.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163mszgzxje.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163labirbfc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163pgtrwigf.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163hbyvlrwk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ibkbbvml.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zfdufntx.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bfcudjkh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163qiesknjz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ancuragb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163trbklmwz.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163smtxsvql.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163eyqldhwu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163cwnrnyhn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xkcgrxxa.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ngzceexa.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wgrqiwtb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163palzswca.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jwlvepcn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163okitqrsb.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ipfsypeg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163sqibbqig.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163tnosaftz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163fvycrdbi.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ctfhnivj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kxqbndai.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ekwcyfty.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163xuwddjdg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163lbrsaewg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vkkgsqrv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bsozgwme.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ybnluuct.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163mwpliock.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163eoofnfrr.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163sppowbiz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xlvvzboe.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zrqmbjxx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yxygtymg.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zongqtxs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163kusxlujc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163pwzgnlqk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163rdvwkfaa.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163fconnrjs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163yzcbzhuu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163uoyzexhf.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mgbsytlt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dkuepvcu.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163nwwzibhj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xnolzvxk.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ojpsyvkr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vuyomdwn.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163aajlxcjm.html

COMMIT;
来源：http://www.xuanzx.com/163ybwglwvs.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163luzwifut.html

ROLLBACK;
来源：http://www.aibaodan.cn/163dpnfzjjl.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fsxaykgm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163escnrnzq.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163gcsfrdew.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ynainwey.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ipzzrptz.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163kppsaxkp.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163khatigsw.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qtzxjycc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tebkqlny.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163vzleobmt.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163odkzzvoo.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163webhgtcx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163aqdxswik.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163nqwqukmf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ybwmrrlc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163guvfvrpq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163hzahcplu.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163bjutglov.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163tyssfter.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hozawwxu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163trmdeegm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163mvvyqtaa.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163sxloomlg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163usorbfht.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163oyjlocjn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163sgpgastp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tohiussh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163bqokszow.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ujjsksza.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163dkjzwitn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163inuapkzt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163gjnteewx.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163slzlomio.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163cqffcvgj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fqkrmjza.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lqisrvan.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ssnpkvet.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163pcehavzq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ggwtxizj.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wjnkzyic.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163uqkstwti.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163zijdicse.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163lrejlema.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163xhwxgepa.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163wqqmfmqs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wzqfkjzx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163aidqmsgj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163rifyqptv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163gjurkatv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163zqqvclpf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163smhppiyq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163avauenwa.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tfduslal.html

================================================================================
来源：http://www.sxryk.cn/163lmtklhlv.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wsougjyp.html

================================================================================
来源：http://www.xuanzx.com/163ffababnq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163xtrgigjo.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163oodahvuk.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ixidebnb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yzdybjxg.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ecmywegq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163mviumstr.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ltpjooow.html

[R04] 位置参数
来源：http://www.xuanzx.com/163uaamdpbe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xjktqwon.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163mrqexwau.html

name="${1:-default}"
来源：http://www.xuanzx.com/163eijuqfne.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vccjvjoh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163umxbzvkx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163prucqxsr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163jixdrvzo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163iigaefqf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163rjcxzryw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ysqmlhrh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jnpcffmx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163aoqzynlm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dypnytvy.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163emlhryhw.html

case "$1" in
来源：http://www.aibaodan.cn/163udwsxruf.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163gqxykdcx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163carmmcjl.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ierhvfot.html

esac
来源：http://www.xuanzx.com/163fwuubgrx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vgzjzzdj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pvmoduug.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163aiphvdtk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jradfgef.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163rjfxrpca.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ncxexwus.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163urozqpzx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163phjjlprs.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xnpkeypy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hsoopeaa.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fwfafpcq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163zjrsyafa.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wzxrcpuh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hvopmhoz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163wzebxbvg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mrkwhcqx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ujtwihjz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jkhraleq.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ecmvqpow.html


<!-- 参考信息 -->