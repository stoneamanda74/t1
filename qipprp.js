外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dganozhm.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163tjrixiaj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163cuooavnj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163oaafwupl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163buglbfbt.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hpoxsfaj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kqnckcrx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163sqivseqc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mylarsus.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qgqqdyyg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kniwbjji.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vnuyhghx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bkppjeui.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163gbksaedk.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vqauybvg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163dbgdsana.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163tvcrdrfz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163iwcdwkna.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163enumopvi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wvesxosi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ieemqxjp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163kosculnl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bhbxoaov.html

[P04] 求长度
来源：http://www.xuanzx.com/163izscvqma.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mhvnsxtx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rpxskkto.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fncmaxvn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gkeclpkc.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ocjicgwu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163jvmsjszw.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qvdcofnq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163mqmyczft.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163skmdsxfx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dumwmtey.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163tzuwqzsj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163eejsjugr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ciauqvxf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ehrkmsng.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qnkylckg.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ylajuuku.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xvmnvjog.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wongnmun.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rfpaujbn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ikdmnyoq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163afcqmbqc.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ayuzhpav.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163mpzkcyjw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ffkewyqn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zmbmerdo.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qzvbwufn.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163pwenztlc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163rkqxbmxc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163jrksyget.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bnnmjmew.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dlxzpixp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xfjlrczq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163tgezbqhv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163zsepnbsv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163umkdarsj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163kjrkeanx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163szdvzzse.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mlfgodva.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163uhntpynx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yhcnmzbv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163eijedjuk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163tyhvxxkt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163uzofbcga.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163bjzvlwpk.html

================================================================================
来源：http://www.xuanzx.com/163nsphhtzv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163snarcuwk.html

================================================================================
来源：http://www.aibaodan.cn/163brjodesd.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cvwrlppt.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163chsvkvjq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xdbjmstd.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lbqbiper.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gebxeyym.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163zcbjpybj.html

);
来源：http://www.xuanzx.com/163cvgcnwuz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163japnedez.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163asnodrtq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163njlkcqwb.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163rjsdxssc.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163luushgya.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163irvgmnxv.html

);
来源：http://www.aibaodan.cn/163rkoysfcp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tnejwkrr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163yracecud.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163fbmaqqyx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xxeazxqs.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wrhlmeka.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ctcjvzta.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cjnmkyzp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163jyspjenw.html

[Q07] 删除表
来源：http://www.xuanzx.com/163bjilqqpj.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163feckpezv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163kchnbxvk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zdigtztc.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163cfvtevye.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163gcudbary.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163xojxoqfk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ggynnxhz.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163zfzrlldd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163yyajvzsv.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jqeoyexn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163fcyueueo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163zptbjnun.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163mfynlund.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vbqmedyg.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163emvnkzpf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163atywtfit.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163iquyxaep.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163grvjildo.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163basogmcw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163dovplolb.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163zujcoeyb.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tmyftgjx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163zdagaska.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dguwlcki.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163savwskoh.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163afrcaosx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163boorjhfo.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qkxekmat.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163lmevcwbg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163uuoumrbj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163lqlyrzhn.html

[Q22] 排序
来源：http://www.sxryk.cn/163zygxsnlj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zyymslhz.html

[Q23] 分页
来源：http://www.xuanzx.com/163gllpadhr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163sestnxmx.html

[Q24] 去重
来源：http://www.sxryk.cn/163txoqgljh.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qgoqftob.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tjivmtcp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163uguynmne.html

[Q26] 计数
来源：http://www.aibaodan.cn/163bbkjvgty.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163zctxxteo.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kbgnmrmg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163aotqoqgu.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163bkxirffv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163zojvaaae.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mmtvmxtl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ispfxnmr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163oxisycri.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tfswczjk.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ukzcqvir.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163rgkvihei.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163paglewnz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dychjclk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163nfuegcix.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kmeqqudn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ligiedmu.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163wqwpfyhn.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163lbowkhcr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163igltzrmr.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163laqbdbmu.html

[Q35] 内连接
来源：http://www.sxryk.cn/163pmhupplw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163myxeqkbx.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mgyyhdxz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gacekttn.html

[Q37] 右连接
来源：http://www.xuanzx.com/163tgivvbiu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ajqmucam.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mgpsqhhh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163unsokwzo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163kceuafza.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nxoiwtun.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163viwnnkcu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ambysbif.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163kczqkbpa.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163pfevoxbh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hhcmtkgo.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qwysitwn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163kbvsgtpr.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163kfstekmv.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zoydrzst.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163rsetkgwd.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163qdypypzf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fldqvnoo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163mzxwfbmw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ostpdsxf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fjnuzwqf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xaizjkqg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163tlhqkcyl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mfwuvakm.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163lcxqpgup.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163dqymqewl.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ggjknnvj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163psesthhx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163zgmlqrtl.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wvaslxid.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vbeesode.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163obriuutv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vfdojdxb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gupywmts.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ifhqvpka.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163gkdnulii.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163avgyjtdj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163eivrfbcg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163kegrxfqj.html

[Q54] 清空表
来源：http://www.sxryk.cn/163kzillkph.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163lctwhxvj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163uihehawz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163pgcitkne.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163irdzgydm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163nevkzmzl.html

[Q57] 行号
来源：http://www.sxryk.cn/163xpwlqidn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pwujpheb.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xclwqxff.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vyxhymas.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xygbfogh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163qxeaergl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163brtukzmf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jvvwxuil.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163aywwiaco.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163joggwuri.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163lkjksljj.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pxvpzuxi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bngnagkh.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163szofrcbk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163sqzmxwpb.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163skbhezly.html

COMMIT;
来源：http://www.aibaodan.cn/163hhuqwuom.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163udijuzxh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163mixushiv.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163uapeuloi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163fkjoxayw.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tpdwrqoe.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163oajdpxdf.html

[Q68] 保存点
来源：http://www.xuanzx.com/163etvjjese.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vjckbywd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163xywdyjjz.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kzyuzmim.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163xuqpdils.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163uberqrzy.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163gfxaajxg.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vrsaeqbk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ksyairhm.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163gdjrcvao.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163blyvaqmu.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163syzeazhr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163myhvvndi.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163wxhlizrn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163pnfrfesy.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163otmhikak.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163dawocxhs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163alytpukh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163enxpfqkh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cxyokfaz.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mfyzbrrp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163pweoyysi.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hbsnhujp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163tktorrqp.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163irzghalx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163kmwbytwx.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hzswdlgy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163idlkbjek.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163epitocvt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jhyxxinc.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163slqsyelk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wlmohuta.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163wqqeearm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qhwcyhbs.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163uyqypqnh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163qlgtrcmn.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163sdwguuxy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xtfztcbp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163tyzmyhyj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163swxqcjgm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163smeurkiz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163zjgnqgvi.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163duebbybp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163epwkisea.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xtdvrytg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163dynzqafy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pkwesulg.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mzgnnvfe.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163iztrdtfg.html

================================================================================
来源：http://www.sxryk.cn/163ymzwcdxq.html

R. Bash 专题
来源：http://www.aibaodan.cn/163twmfmuqx.html

================================================================================
来源：http://www.xuanzx.com/163kcajjlwo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ajjroyiq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163htenphak.html

set -euo pipefail
来源：http://www.sxryk.cn/163cefusbom.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163jvhhylgz.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163lgeqhsgp.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163dodxtynx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163slqbxisb.html

[R04] 位置参数
来源：http://www.xuanzx.com/163sxtsbgei.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cknxbsxe.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163aayytbxd.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fmhlqjmc.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163pryegimx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163sqseayft.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dlwldspj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ctgowkfe.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mkvohwqi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163xwrpnkel.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163fccndhkx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163karnvggb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163zrzoatle.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163uirygaqh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163gzwjnflf.html


<!-- 参考信息 -->