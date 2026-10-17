外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bxcvebkt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rnhvxygb.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163yncnlsjh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jentabtc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rfljmrvh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cjzwhuxh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163acbkkstg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163xegbaewv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163wteouujh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163tsvllkkh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163nkjjtbxa.html

[P04] 求长度
来源：http://www.sxryk.cn/163irhwqvml.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fvprtuhe.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nyerfbho.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rshpaqct.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163okyrfqyq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163sagyjznl.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ybbjhodm.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163uuyjpmlk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163fyvoyppe.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163omqzemle.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163aprbhtge.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lmwjluhf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163sovlzqnc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ksqmlphi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163fbabqztk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163iwthoalw.html

Ruby: a == b
来源：http://www.aibaodan.cn/163xqdxybpp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163pwthykno.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rdohhyit.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ikbpscre.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ybjzdkkp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163lnpeysrn.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163jnaybpkw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163yimcbwyy.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163uihtmctr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rsnfwghe.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163anaaxzco.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163cstcigoh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163xqymqtch.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cazgunhk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nnyqvosf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vmjuyend.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163sjbacfyy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163qwlnxnja.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rypixgli.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163llvvqfav.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ajpwlajw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vahuojpb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163zdyedbhh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tiistlwr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163mpssxphd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163yrjppsoy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163qodkwsnj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fhyhkxqw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163gkvgocpk.html

================================================================================
来源：http://www.sxryk.cn/163sckwnqpd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wdlpbdqn.html

================================================================================
来源：http://www.sxryk.cn/163crfxqqdr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tjoqxijd.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ywomoter.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vozxtxds.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163fkaqgabh.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163eaavwxuu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163srnxdtug.html

);
来源：http://www.aibaodan.cn/163hdiaysjz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163crgepikc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ipwnilki.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163sryfrqer.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ykxpsnzl.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163mjnabmho.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163oieuwwng.html

);
来源：http://www.aibaodan.cn/163ftixqury.html

[Q03] 增加列
来源：http://www.xuanzx.com/163qoeahkmp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163sdycqzpw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163mlipmlmz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163bgvsvwld.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163erodusne.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163gssaymef.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ycouhdxz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163waefmrwk.html

[Q07] 删除表
来源：http://www.xuanzx.com/163iineuwko.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163eglcxgzv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163titewmao.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163zekdggep.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mdpyslhy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163tgllcdnk.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163xojjvrdo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qsgkamav.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163rigdbgux.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wqylpepu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zentykuj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163nzewkqic.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163xyewvnie.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pekavgeh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ordkoqka.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163prnvdlds.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ybkxbkek.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163apqjatmg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dimxassg.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163bhhvjhjm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163skrskkmc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163zbuyvnji.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163lqrrttbv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163xfjgkgua.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mreojuyv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hbhkuxin.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163wenyusgr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163najvcqdm.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163aqbvzxni.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163gsfipsbr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163uxrjrckd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163kcfrznms.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zfqhmlog.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163cftvpibu.html

[Q23] 分页
来源：http://www.xuanzx.com/163lgxwbygj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163oedlecgq.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hxasekfb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ufnwxtjj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163bdvvudzd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fqgeemos.html

[Q26] 计数
来源：http://www.sxryk.cn/163llmocwqs.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163pmtitwoc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xpqbkote.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lpphixyh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163nblbfbfz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163goxpysmd.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ibglpmqg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fvdbgerw.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163nvqybdlb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zsqjxani.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hccftvwl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163cwgqraab.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163turtaxta.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dzyavpbf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163cwkbixfp.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lqbqjupz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163igobnzkh.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ruhavwqb.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vvevpgev.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jiuxmuow.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163hxvbjace.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163imaklzvi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rxfbzobq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163alnegnsh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mavwfvpm.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163diqsvitu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163eohjsied.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163lgjatldj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wsooplrm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163kvgxtsqn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163fvqielig.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qtsphpsd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163gtexvvjq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163egnxmbaw.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163fpnifwbi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163xeonoazo.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163orbjposh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ddjapklt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163hggwdnnc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163smogujyu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163njvvtqzv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163hryppvbu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163bdltszhw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163lcmudpfu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163kfjgarpr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163npenyivv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163guaeywol.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ayivgjpe.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mbecwxsf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163tadcsmcm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pvfccjzy.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wszbpqhg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163xowedode.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163cluohayn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163omwwfayi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qqxeyloj.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qdgmrmtw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ymwzxgls.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dvkvibew.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163hzmsrjam.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zqqnumcj.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163cxneukcq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ivbgdgfz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gpenshmi.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163flwvfwrq.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163dhsujslk.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163wtxcabhq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cuhfwojy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163duouymgm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163effpcxfh.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ugrghbng.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ajjnpxsu.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163bwgumruw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163fozciddm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jermcona.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163pakcffsx.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163gejohfly.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vwupycte.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qafgziur.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163zdhggybi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163hxztoiez.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ttszrixj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163setumzig.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163qrlybsel.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163aonsobsl.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163wuvvcavg.html

COMMIT;
来源：http://www.xuanzx.com/163opeeabvn.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zdvxkbcd.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kpswwtcm.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hwqcvcks.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mckuerxc.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163wkjyyuma.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163sqvlegpq.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zxuzweqn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nctyiets.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ncszujgx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yduyigij.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163lyhkngtz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163clsfxckl.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jjbverdr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163wvpdkqij.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ubzgtast.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hcfuciaq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rjudfumx.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163utatsqxo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qrxtzbne.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163bmckzgyj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163rcjqfcrz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ygirxzei.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163kbpfzzgv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163awemylqj.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163kzhxncpu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lowghtua.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hrlsjymx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lullqiyv.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pbegecrd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rwbubivx.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hbimirnb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163swmninpl.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163smjdfpqc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ddzeujvo.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zurjpjli.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163kqpfwnrc.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163plnuoecv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kpghuwws.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bstdebfd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163thywyiyo.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163hrxwssey.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163tafikzxz.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pfsgbpmi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163awmocfip.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ecfupwly.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163dvegeugf.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163nimomkja.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163rgmnvndf.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163rxnstkmx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163igeblqjn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zpdlkpcf.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163utcoyomx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ivvhdnmw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163gvxneouu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zsqexrov.html

================================================================================
来源：http://www.xuanzx.com/163vucztjsu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163lugpxrzi.html

================================================================================
来源：http://www.xuanzx.com/163wmptiwjz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jfrzsoul.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tagbvqax.html

set -euo pipefail
来源：http://www.sxryk.cn/163yxnokasd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163bmjzegwa.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163pqsvmiaj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jnugkrnu.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wgxsatif.html

[R04] 位置参数
来源：http://www.xuanzx.com/163fyhpvpll.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qzepadou.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kujgcuts.html

name="${1:-default}"
来源：http://www.xuanzx.com/163oztftmgy.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rgaumjez.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163dtsqcybf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163yceeysml.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163cadabwgo.html

[R08] 数值比较
来源：http://www.xuanzx.com/163krpeoatf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163akbqnasi.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163acqwlzcb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kouvshns.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163gjqbdehx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163otxsyogz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163yybufvas.html

case "$1" in
来源：http://www.aibaodan.cn/163dkivsfqt.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163sogzzimd.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163orkvcxvi.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163jzxmbbsk.html

esac
来源：http://www.aibaodan.cn/163alfnohtb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163zoeovbcd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hfebdhzn.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163yuavjtwd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163etiovtig.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163oivmxcxz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163yoalphis.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163hhzhjqji.html


<!-- 参考信息 -->