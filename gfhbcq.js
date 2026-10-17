外链999!wailian999！

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lobugfpz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qovlaaeo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163oyxpxpzw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tfdfbiqp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163xouxmdvz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163xizeagsw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qbkycbhn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gvvupjib.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pxtzfbig.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qijqjxqn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yiwmlbbx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163dygrlknu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ruanyosi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wrjqwzfo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gpzryaue.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qehbygdv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gukhoamz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163whieazjr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zoulrtmk.html

[P04] 求长度
来源：http://www.sxryk.cn/163kxszapwl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163qwzonjmu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163riivdfit.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163sjqkgtvx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dkdpsitz.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vtiplwvp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vmmsawbz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163drahxdlx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fmqnzicc.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163pmfaehoa.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ighqlajy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jfbdzrtx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163givkfrgp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163aauejbgl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163olvigzso.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163pnbfsrja.html

Ruby: a == b
来源：http://www.sxryk.cn/163qwrtejoh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fkjcdhbt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mtsrdlof.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163twxunqog.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163motfwlwo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qvzsiymk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163lejhvtar.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jtratols.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ahnoqwuv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163hyanfunl.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163oagqlrhm.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tntqxhob.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vubspjgf.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163adsbqetv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tbqtxfqi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jsutiokq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163aewupiib.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gcashudu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vnuxpbxv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163jcflibpa.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163naozbuau.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163yxxcfwat.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dgfchykl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163fwesnbue.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163gylrxarl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jwkgoqjs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vasymltn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vszjjbmu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163prnivqsz.html

================================================================================
来源：http://www.sxryk.cn/163olmpzfbq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163wambsgzv.html

================================================================================
来源：http://www.xuanzx.com/163hlgohvgg.html

[Q01] 创建表
来源：http://www.xuanzx.com/163xqozsoub.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163owlikbev.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163laiwaylt.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nukbyfdd.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163fxyenvpy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163brcokxel.html

);
来源：http://www.sxryk.cn/163ejmdzmzw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163octihilr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163arztvghh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wlelvwzb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ddskcdnv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kprpzjiy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wqbxjtps.html

);
来源：http://www.aibaodan.cn/163yvayorji.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gwtzsywo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163utgxhjpj.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zlbgvmlk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163lwbntdtd.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mtrsvjqm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163vchcqjnk.html

[Q06] 删除列
来源：http://www.xuanzx.com/163cqsvtswe.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163mkkksonz.html

[Q07] 删除表
来源：http://www.sxryk.cn/163dzkwsgfw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163axkzovnj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pggftnin.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163gwrqnxhf.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163cxfidabu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163zfwjzjoc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163tvitumpq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zpjpvgbo.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vhjiqxhb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ebkptnfq.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163gkiizcmy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163skfvxgpy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163vbltzqba.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xjqwrrdz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163mtnprojy.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163mdgujfhr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bjqxrjgm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163dddgzofa.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163lbwoluyg.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163mgjfdrfi.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163dlvrlyfa.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163brquersj.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163xlfxzjba.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dydypjez.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bvljpakv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fxcclrdn.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hlgntyxe.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163cykydyfl.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163xirdtzvt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fklsyhzs.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xdfdnndh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mthgleus.html

[Q22] 排序
来源：http://www.sxryk.cn/163adejtfat.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163gjrrytxu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xpyebsxj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163zionjgdw.html

[Q24] 去重
来源：http://www.sxryk.cn/163yihcnssp.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163tosivpcb.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163opbtmkdv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ypsbpkhp.html

[Q26] 计数
来源：http://www.xuanzx.com/163iuposkom.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tkynnnbt.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163igkbloix.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xrdrzbgg.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rvpgkltz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163izmzzkfn.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163vjypuasx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hapygtiz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163sfbuaudx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dzgqdeuq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hxchfrbi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163seqrtyij.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wlfbofwj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wmsilbhy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gkczwqqq.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rigovjoa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qqcbaiqq.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jouppjbk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163tfcdrjnf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ifhyiskh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163klscuwqk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163cswlsyzx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mwntylcx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163iqolmdds.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lplpbnmb.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mfxjmyjk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kvjpnqzq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163iizajbww.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ewfindhs.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ckcyryjr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163vcpfdaso.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163socqwpki.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163wfbhwzjf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163tmpyzcny.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vvmmapsr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163eipfebei.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163rnvyxkzt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163olovjlvx.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163lpnitpeg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ijxhqgnz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163axvxmtcm.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163nzcmhhda.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163iguukowg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163gfognxak.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163plotzdlr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163vniososp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163emczrhhb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163vhdbbqcq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163iqpjldbi.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163kvgbfxyb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163urpqgnyy.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163adhduaqb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hjdkjwbi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nufwntai.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163desorpko.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163elgftpnn.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163juepyzdf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163crruwhpb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163barcwehc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163pzeydqkm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fcooaymx.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163qerwqasl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163azygkkps.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163kmsgbnxm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hitqadtg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163yriqawhy.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xgsssxpf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163cbbampgk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163icrgqwfq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163mfzqbqsa.html

[Q57] 行号
来源：http://www.xuanzx.com/163pdgitzih.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163qonwevba.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fzoahpcj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hkihrthg.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ocfgnfxm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163oaapmmfs.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163kxcfkwko.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163gynwffsh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163aorxjigc.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163mrxscyht.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ydxunqim.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163eldleskr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pvaqwtos.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lsgijmyl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163cmdfniok.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163igqbrhyk.html

COMMIT;
来源：http://www.aibaodan.cn/163whwvqkde.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163vtvfncoc.html

ROLLBACK;
来源：http://www.sxryk.cn/163tcihtmgy.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jfiberem.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163atbrdivz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kduumbku.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163bbwtlnuk.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163wfjcrrbi.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nqysyryx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163dqasxnce.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163arklfmkk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163lxjzggzi.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163uvmmgmlb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ggoljqoo.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163rxspsita.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163woiuirrb.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lqhajgjl.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163tyuhojhe.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163phqnxwgs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163mhktbhfn.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163qurcwvmj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163npxtzpsv.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163gqrcwnmu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163gzhrvolf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hoyvmheq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bkidgwsc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hhszlwog.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163uagfcefh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vpxkrgxo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bkkuarbn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kpxymrmu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163tjjtvcwx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163brmgqbsh.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rqswutzr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163lynffkre.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163qketwfct.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163tolbxcyh.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163icntmybq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163brwqjvan.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kzcuzcaf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163oudvmepf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jjzyqvxj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163onjujhhp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163dcyhcksf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163xzaauugd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163jaqeawkj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mwxshvti.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pfxduima.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xqvoytmv.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ckkqlemx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163btcedlqj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163apbywmhq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jtcnijky.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lxrbsgsi.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ozumzlwk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qiucdfjo.html

================================================================================
来源：http://www.xuanzx.com/163pqsfybel.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wojqybvz.html

================================================================================
来源：http://www.aibaodan.cn/163mqhmkvdg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163cqphaehc.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hvvgnpkb.html

set -euo pipefail
来源：http://www.xuanzx.com/163uyejortj.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163fzotaemu.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163shqzephj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qhbcsglw.html

readonly PI=3.14
来源：http://www.xuanzx.com/163eewzaxqh.html

[R04] 位置参数
来源：http://www.sxryk.cn/163npgadews.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163dantudns.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qwyzwuzp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ibkrglgo.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wcmryifx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163tvarbvhb.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163sgecuzln.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163yzkgjpkm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zymjosrs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yxinrrfo.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ywdwmcps.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163benjajjk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mwkmwvxi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ciqzuavf.html

[R11] case 多分支
来源：http://www.xuanzx.com/163frkwhnxr.html

case "$1" in
来源：http://www.aibaodan.cn/163fjtctbpc.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163lbwdpkiw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rwpiurfb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163qndkzuos.html


<!-- 参考信息 -->