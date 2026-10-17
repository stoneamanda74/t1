外链999!wailian999！

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tldyyyqu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163wloaivbm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163mcrmhazv.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163zavoqher.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163uqqfxdxh.html

================================================================================
来源：http://www.xuanzx.com/163kslopdpj.html

P. 常用工具函数
来源：http://www.sxryk.cn/163mvalpnxp.html

================================================================================
来源：http://www.xuanzx.com/163zijczvzy.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kdbmjmjg.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zgwnizpl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163alzepden.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vwpzguaj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vrivwxpw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163tflxeoca.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163krgbuitk.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163zvjhisxs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ttwnqjti.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163eeyuutrj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163cvslaeus.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163dtjuyxgd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163qrptqgqf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163evvakuse.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mwqhzzeo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163wicunoxr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163begzvjmo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163bmectoqv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163whirxioz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bpbjhunj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163xtisjswk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ldtxobvz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uqwvjkgl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163xwhaldaj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gqkmgzud.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jcdtgnsf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163byzkcjlf.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fonaflxt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163lfasypdn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kzbqfzwz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163znlwpwaw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qzgbxdwx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163amabgncg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ervkjboo.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163swqfgbul.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163gxtdehpe.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163wmwumdmo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wejfeywy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xpmuapul.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163duxerfen.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163uhogdeiz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zqabokyw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qfvalnlz.html

Ruby: a == b
来源：http://www.xuanzx.com/163qfopwlck.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163qjhfowcn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163erqxsoeb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163mijtlldo.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vpatxync.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163blaccwnm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163yfsejbth.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qqhnxysi.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163yrtytmln.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163pxcczzbq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bsuizzhh.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lvenlfwh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qtknjknz.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163biehtrqt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ddcbnlxq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pdiduxoa.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ibluyczc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hmbsyreg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163mvxutogu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ppmyrxlz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ehpeqror.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nbrzprcw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163hcujsylp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bnzhuzqq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ephwegci.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jrpwkoya.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163fbxfhbmc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163iwemigyz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163pintfmhr.html

================================================================================
来源：http://www.sxryk.cn/163ljxldvbm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163tjgfvpxr.html

================================================================================
来源：http://www.aibaodan.cn/163pbmryzwu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hxstdqzd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163afbcwxxv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xfxwkuwv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163uejyrdlc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gsjkjral.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zpiztbyb.html

);
来源：http://www.aibaodan.cn/163aadsrpfa.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163igfmifoj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163vqekjynm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163stexmlsk.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163pzsalinz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163lcllmuqw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163pcwutztj.html

);
来源：http://www.sxryk.cn/163vnymdzcy.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163movkvtvr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163fgnsfuhn.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163lyevifsv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qfstgumx.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ebpcjmuy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163akkblqfy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163cxhdltlg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163tyxjemhs.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gdbuzjxu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vlfeihxm.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163eyojvcfc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mbmifusz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163swggyyui.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163htoqtixh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163icajarer.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163czqppacm.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163cbrciaov.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163nszpkmae.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lezfelta.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qlzteijs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163wsttrezo.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qvumqytl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ejhqfvsi.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xkspdgef.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163jhhpqwcq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163lacfwkiv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163orsqhihg.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ktwzgawf.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163cjszcyyb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ouvwkdpv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163zmjetvgq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ztvxrchw.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ugqmoukk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ufleeomp.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163kjdnlnir.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163agaflwvt.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ylsnnsnt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163szrlsjnj.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163goyvxblt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163fspwgafb.html

[Q22] 排序
来源：http://www.aibaodan.cn/163cabutitp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ubxmbhul.html

[Q23] 分页
来源：http://www.sxryk.cn/163khxjaseu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163grxmplsp.html

[Q24] 去重
来源：http://www.sxryk.cn/163univrcls.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rzfuukpx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163syggbkbp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163mmozdazy.html

[Q26] 计数
来源：http://www.aibaodan.cn/163evzgipho.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163exnghxgs.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163cqwndbix.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163tsakpksz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163jmeikcpb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163njnnymaf.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163thuinnmj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ktkuelyz.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163yhddqyjt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mehodkzd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163yadbibfc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163qzqjkmvk.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163nylfdtwy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163onhuflvm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163cjodwlof.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ygyipvny.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163bbxxjtew.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ltgcmxjl.html

SELECT * FROM (
来源：http://www.xuanzx.com/163lquzpppl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163eqxbdxda.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163alllrhkd.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ewnxjewo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dwvgtgzc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163pxhksaes.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uhyjeqnr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jpficeek.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163bbhegylh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163utfefcke.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zezjuupg.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163wyhiondd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163rodtqygo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163osyxvggi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nuchogxj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cteofydx.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pivbwoyu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rnjtulnh.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qwnshltx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ldercfgn.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163dtcxxset.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nwirqeny.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163yswxhpdk.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163innqvufv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163clrsaaeq.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163pfazcidr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163cknmcfso.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163zmvquibw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pezksfur.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ulgmyexv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163osdltmez.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163gcgeadct.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163yhxytbzf.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ziwbaqcb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163cvvfehsz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163epanzjao.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163poaztnor.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163pujmwehl.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163rjzhyxvi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dxdskbrg.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qiitncjg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ccpmolge.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163yqfqhqnc.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163vwvquqdu.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fgovhafp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163mxzktcii.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163tdmaouww.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kdapkjtf.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pyywurlb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kanbvsqw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163bvadaxhb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163hadtauah.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ygalcrop.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163gouuecqw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qxwfzeln.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163opbqhtje.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163pxrkolxi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163vudtdrbm.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nncknhsf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163afiomkxk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rzcfedrz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vsaeaxay.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163lgsfulbc.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mfdgtpyw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vrsgwxhe.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tvmgwklc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163wikuimay.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163bzbwqgsm.html

COMMIT;
来源：http://www.aibaodan.cn/163rmzzqiur.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163oqykiobt.html

ROLLBACK;
来源：http://www.aibaodan.cn/163hsaengma.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163dyicwwdq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wbofllpk.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pycnfqkd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163iownggbi.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ectmmqpy.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163tjaceuak.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163thaejdxo.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163iojpodow.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hetwpfaj.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163votfswpc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163cqaioell.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ejybrjea.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vgmsohic.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163guardtus.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163idwekxey.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cvpscffa.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hbcyghek.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163wnesctyx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jnmlifeo.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163kyhmtqih.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ddudujli.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jzrdtajx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bnkxlfiv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lfuqgbfj.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163rkzxyoow.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ggjkpopz.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fqoxhhmr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ksovvwky.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163tbtmogdb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zogdunka.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tnzsxixq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163uubxvgpg.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163yhbvrhwn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163zkrqgglt.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163oncezwod.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163qxofdhtn.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163pfhgijou.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163pyojntpp.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nuodixva.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163phijpcoe.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163tbrxjrep.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163gskdliog.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tgldrcia.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wcriptot.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163jrlafxdr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ndyynfuy.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163omjgpmut.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163maukcwpp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163igemncjj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fuphzbca.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163oyfnqyai.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163xhmmrema.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163albmjdak.html

================================================================================
来源：http://www.sxryk.cn/163cgzebgau.html

R. Bash 专题
来源：http://www.xuanzx.com/163wsmqzowf.html

================================================================================
来源：http://www.sxryk.cn/163eadatzzs.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163mupmivvr.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jsncnhfm.html

set -euo pipefail
来源：http://www.xuanzx.com/163fucsjydd.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163wjvqihrk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163hlkhlhtk.html

[R03] 只读变量
来源：http://www.sxryk.cn/163bysbcfcl.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163kkmtaxzl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163dqprvaio.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163zfaalrfy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jwxddrrr.html


<!-- 参考信息 -->