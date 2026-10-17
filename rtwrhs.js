外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ovngrwxj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ukrrtdau.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163roymclql.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163quoavixe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163lzonxrbp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jcjkqlhz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bgqngcvl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qaycyfgn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163zfdnqpjw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fdkehpjj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163sdzdclos.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163jzvqbduh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163kfswnecl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ctrezsqs.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163regqphst.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kmtukpbj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163gfkgwdno.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zfpykrdt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163iwrioxtw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ezydtwgk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163luvpkwng.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163uanulyqj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hwpcyulb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163opdkqjjl.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ccsqbgob.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hnotaeqs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163znvaeusp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163shzfraqo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xliscnlq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ruuugbbh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163zyzawjnp.html

Ruby: a == b
来源：http://www.aibaodan.cn/163pymabxnt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ipctlpui.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ghaatkoo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163qovtjgzj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gjfbbfhw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163kubkwqnv.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163iubqdulp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lxbgdegz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ghguiqis.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ddtdgbaw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gcoheous.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163shgciurm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163rlzohjoe.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163kefslrhl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ehgaszpr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yfihpkzm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gemogwaf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xixemetz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ewdnulxm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163tbetjcae.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163arjggszg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163yhnjsuez.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163axepeskd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163nzdbdofx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163plthqpwg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163rrrwmlil.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163yavjuxat.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163rnvsgqqo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163xwndsvij.html

================================================================================
来源：http://www.aibaodan.cn/163efrytndh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163wcwypsuc.html

================================================================================
来源：http://www.sxryk.cn/163iynixcel.html

[Q01] 创建表
来源：http://www.xuanzx.com/163cualsmze.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163srvzjxom.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163chsnevxj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163whfkalrp.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163igykaiud.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163kdawmdti.html

);
来源：http://www.xuanzx.com/163vgdvpijc.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163pscxdful.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163kzcxuytt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xcmbhmgr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kdecrevc.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163xasuyiqb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ttkqrytw.html

);
来源：http://www.sxryk.cn/163yndqprnm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ntvfvysu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kjofuaxx.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wiskjkos.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163pvocumla.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ozhvewkv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ahivvwkv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163asovmnes.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ztzkyujr.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163xlksseyg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163rcwljxro.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wkvrshsp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kniravav.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lyhhdwww.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fiozwnia.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163lemtysnh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zvrnqezg.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163obgffjku.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gtzgtzez.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163tcoacilm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hvrkhxho.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ugvznazc.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163hmarfxnf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zqbuyzvv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yicmnruf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ogtynaxo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163cyqsasag.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ldjlpcta.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dbhwcyte.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tuwfrqib.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163pyidcoiw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163tlylbeus.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163msxfrvwd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163aorcbhfq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rpdwoylq.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mphxvrrk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163dlduolyn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ijobhmtg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dedumwot.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163phwagpei.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163wsroorlc.html

[Q22] 排序
来源：http://www.sxryk.cn/163vrielawf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nydorzvl.html

[Q23] 分页
来源：http://www.xuanzx.com/163qnugxpnn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163edhhkfot.html

[Q24] 去重
来源：http://www.sxryk.cn/163vmhsmfhz.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ockhcfzp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gmaemubk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163rjhclqbb.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qpuuqvkq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163htqspbrb.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ifdkncix.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yqbvjxwb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163vvkjpvpn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163keltmdnm.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163zfkhhplr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163mgfjwzna.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163qpigrixe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dgpanldh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163klwltquv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163akjdpkkp.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163emfladze.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163imtwcfzv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hpqzrngi.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jpfbqrfr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163muilamny.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163qhzoamjv.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163illnrshn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163jyirfbug.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jgtnmgqy.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ovtzjqjh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aguxmwcf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163einstmrl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mpkmxfcv.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lqurmsiz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jasbikyf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163wmcgwuky.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163iepddnfo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lkzyxkfl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163seqmhuoh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163cuxkzdax.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rmcscbib.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163bokvdght.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163jdhuxlkm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163juqwddtw.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163skqzsawv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mkflbfzh.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163yckgerzd.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163oyddwypm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163muepwmpz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163plfovsus.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163zaxonssw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163yoosrkzh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163alwwcqsd.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163eixrbjla.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yoxisdvo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ygxmilrr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163svztdjtq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163thwnvldh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163kesgstcf.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163weyesiqq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163cidnuvjr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mkjmvxke.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163atappbbu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163srumvfau.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ttduyblj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163wlyaohow.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yplsffwd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ardqykxo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163bgqmkzdi.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hxvziamx.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163stcrkwvw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bpzrzodd.html

[Q54] 清空表
来源：http://www.sxryk.cn/163zmknnsbx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163vvwlnjex.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163gnhayboa.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163crtkeumd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163leqdcmpl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163eyqbgtgs.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mzrpkqyj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163glbrllac.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163cxwuyyfm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vozrmqul.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163lywefzht.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163loxivxno.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jqagenha.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163yivvifig.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vdvrlwmj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163untqxprg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163kzfmqgmf.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cmxidqbl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pvztfooo.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163lncgopjz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163jfxxamra.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163rskhewjl.html

COMMIT;
来源：http://www.aibaodan.cn/163jqbvwsfq.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163rztekypp.html

ROLLBACK;
来源：http://www.sxryk.cn/163eewoyzvn.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163nvzgvpdl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163swqhlsak.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163pisjearz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163nkdvnbep.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kstxrhdg.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vepkucgw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ymquerjo.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163uzeeesok.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163wbaxytmj.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163tpayezbb.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163crsulnvc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163uofdipbq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163aacgiryk.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xtyjozmm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163pkuftrgn.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zpxpssnz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163huyuktjs.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xajzzdle.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ansyithu.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163fpdjfsda.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163pgoiyqrw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163edlypkwv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zgsoxnly.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163iizghlhf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qgqyawby.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lfkrfuwd.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zuwlihug.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163inaynzfj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zzfevjni.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gspinqnn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dkrhmnme.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lhlimnvs.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163vbmnidfo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163nkzkmyzv.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pddtuduk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jwruysfe.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vwgtiide.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163hamavret.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163bxqzgowa.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163bodefagp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163mnpgplsb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163blotuaky.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163sexfsdfi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163pxzwfkml.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163arnklkdx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zdxdxsfb.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tnfvkvhb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jvnpdsla.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xcbaicue.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163mnyikzcp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ocvfncsa.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163qshpeadt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163lyqnjkuz.html

================================================================================
来源：http://www.xuanzx.com/163aiwpxzuu.html

R. Bash 专题
来源：http://www.xuanzx.com/163hqxmyamo.html

================================================================================
来源：http://www.sxryk.cn/163vuiccusr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nvnguhwv.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163fkskbmlr.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ryyflrtf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ekaovhym.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163youwwmkk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163bpcshvpa.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hyjujlsm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ialpqysw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ytbwnohi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163tsbsfkem.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ujgiatak.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wgovrrgb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163yvnxgsgj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163flekzniz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163pragteus.html

[R08] 数值比较
来源：http://www.xuanzx.com/163alflkkdo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gphbicqs.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163tmrxfjfv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163szudxbjl.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nvfftkwj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163novqurie.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cokdcwun.html

case "$1" in
来源：http://www.aibaodan.cn/163atcgxzag.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163tlelipcj.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163yphbliba.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tboxhzst.html

esac
来源：http://www.sxryk.cn/163jzzltbli.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163bcjxaixn.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163trjwpvzj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fwpmqcny.html


<!-- 参考信息 -->