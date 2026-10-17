外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cqxeujuq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163mseoiivi.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163whburwsz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wrjlonzt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pzrxqnel.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bmtvttgc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163puvdxujk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163phuembhn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163lkafuqvf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163axzgpepl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ytxxqzjt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163toowzcey.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ragxtysn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ockuxgea.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163wijnggwu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qfntmbwn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163pqttmuhy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wethoqop.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xjiruvzg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163dieenciw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163chrkxndk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zatbgqtt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163yuhdrqwh.html

[P04] 求长度
来源：http://www.sxryk.cn/163yhaectmj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163zjvoadbc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tcvzuabo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163dvxjcwrc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ypcrglrr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hxqgodtu.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vyxivanu.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163unjriwrd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163hesxhvew.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163dqrldbhs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163cbxtrvpq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163sxypmwgh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163bicrsoag.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163pfdoqeeu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ucxoxvkp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ljstjsdo.html

Ruby: a == b
来源：http://www.sxryk.cn/163wdhqymik.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163qplmvwbv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rimwobci.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163lkghxhza.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kpkpiumy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163wyysrmny.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cnwjkazc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163cvubntbr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163aaesvmjk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163xkzstsit.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163lglxxjyb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nioduyju.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ypkemjze.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163oscsdkyy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xzztbafz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zlhutpus.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xexvvuix.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ytuhvexx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163begnhhhy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163elbugiov.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163bmhvrybj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pauhrfuj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163svicvbjm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jfkcmdbz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163mvgyvbrl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163dvhkbkvs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163tsqemslu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163nwwxsfoj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163xvldkgpe.html

================================================================================
来源：http://www.aibaodan.cn/163rqkoqfnc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163bljsojgh.html

================================================================================
来源：http://www.aibaodan.cn/163tnzmqdva.html

[Q01] 创建表
来源：http://www.xuanzx.com/163rcqxktja.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163hyrhaxhh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163uoxbknan.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163yurmzrtz.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163uhqdbunc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163quszenfp.html

);
来源：http://www.xuanzx.com/163hgbqyzxr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163sncumviq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163aylidtxk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163emcuepne.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163polhnhvp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163elakphqd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163povjhzwu.html

);
来源：http://www.aibaodan.cn/163bovsjfru.html

[Q03] 增加列
来源：http://www.sxryk.cn/163uwlninfq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163jzgsclmu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163vamrrtwy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163uhulrcqd.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ivzxwxfj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xhozxqar.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163arvsiwof.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zjvdxuck.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ihnumger.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163rdfobiki.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ptrgmpkj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163egyvmfvp.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163cjxkwvxn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xiiuxlcq.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163epoyoizd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163etkgqqml.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xcnlntww.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fxmyatcj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163tabksrvb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163qaamjldw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vbngxfxx.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ujoxprna.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rzufkugq.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163flwndbbj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ibaaqqwg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163reciaazs.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ohwacyri.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vbeyffar.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163giuqiodr.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163lylslpsb.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163kblblqbl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163sfvgduho.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163nnmisojk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ijwippbf.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163tsxywepa.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ufxtdzap.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163lbihekzv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ntgmakfo.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163cfxkwige.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163qlrgyjkn.html

[Q22] 排序
来源：http://www.sxryk.cn/163fquoqnfd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ncpccosu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163wtifcklw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163syakjmmd.html

[Q24] 去重
来源：http://www.xuanzx.com/163uovkfzzf.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ptgvtcju.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163uqkqjdjr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163pzknmhlt.html

[Q26] 计数
来源：http://www.xuanzx.com/163lcbmodql.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163sbsyplmr.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163goycjwfy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163zmfqpwxv.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163soybekvq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ioonhyyg.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163whdtbmne.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163kfdivpip.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163rfrxhvbf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qeeyuniw.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163dyudnbgn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163lwuqewte.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163mpylnduz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kcbeyybh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163itvvhqga.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163staruvhk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hxtigrfl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163nhkblcvb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163fcbsvfda.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163unxebdbm.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163uzpucmum.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dzrslxtg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vvyskagk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163yirxzbad.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163razdekwl.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163bgrivmaj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163nhcfrhct.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163nhptblxl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ybrazpod.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yguipodj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163pdhewuwk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hdxkqnqd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mpkdpxxt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163peevaxqn.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163sgznwcsc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163wqdvhujm.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ituserhm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ysllmger.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163cokjidbr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163rrwehgsk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163mxaadhdc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yakegfjp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163mqwcmaqx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163sbkaphll.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rktnmaqs.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ytihdxhn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rzwrjcyw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163szjxclzd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rrankbvu.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xxlmjuoq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jwqarygu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163jaryyebw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163kjtmkifm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163gibjedeo.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163brclgobs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163apdagaeq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163uxuzrsxz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pflfldda.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163nfierysa.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163gnzwvfsq.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163qtyuswcp.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163uuthsrsq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163arhdhbqb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zfxrhrto.html

[Q54] 清空表
来源：http://www.sxryk.cn/163glmbkakg.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163yjfakkbx.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163adqxcflh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163owvsqjtc.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163xpgjcrcd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ulfvpaqa.html

[Q57] 行号
来源：http://www.sxryk.cn/163lkkuggpj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pnbqbvvk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hjvupnum.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163khghlonq.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163oazfhprb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163qosmhddv.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163rpklwnxe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jesijglz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163wuctjxin.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rkbjmdpa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163rlhxtoop.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gsttomeb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163scuffvub.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163muuisblf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163xdmjzdex.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163gekivrmz.html

COMMIT;
来源：http://www.xuanzx.com/163fefcmdgi.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163jwzlszwg.html

ROLLBACK;
来源：http://www.xuanzx.com/163jvpqejhd.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163bkyclnbv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mcmanfeu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163oswhqkpm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dvlyunfe.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163lxeiiszg.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mntjmbzg.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gaojqodm.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163wdnjpyau.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ehsmewuv.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ifalbvdd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163chaxjohh.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163srizgdth.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163dpzenjhd.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163cfkmtbgz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ortjfndv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163seelknpf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163nlphpofd.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163suizaxqj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mmjxysir.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163iblwphqb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163uwfvirxc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zgznfjnk.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rudopnnj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zrfymsij.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163hsuwjexz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163cdcyshej.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163zggiqrnh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163vulpmpke.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zujhkcln.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ryhauqfr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163deueplrn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163aounyqdf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163fcgjqqqz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ewfkgldp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nojjqksm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163nssvedzm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tyaasuww.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ryxcgohd.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163shvlbnpe.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163caaxfgvy.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163tabszcqk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163auefxgtw.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163bdsdbxjq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mxqabebn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163livtzpwu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163fgawmhpl.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163cvtnspjx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bbhdlgzi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163tbawelrr.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163frwyaurh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163zsnyvzcy.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163uzfgbgmh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dyknrzps.html

================================================================================
来源：http://www.xuanzx.com/163xnjfdskb.html

R. Bash 专题
来源：http://www.xuanzx.com/163ubhhjqju.html

================================================================================
来源：http://www.xuanzx.com/163dyvvpdoi.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163egcdgcqz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rochmlqa.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ppsydztb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163jtubhbln.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fijdgcxi.html

[R03] 只读变量
来源：http://www.sxryk.cn/163celphipi.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lybdpxvv.html

[R04] 位置参数
来源：http://www.xuanzx.com/163znqqvhoc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163dyqyiirt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ywodcmeq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fhutxbgj.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163azziincr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tvpmqmyw.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163deausxgx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kyhciunm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163eiafptsf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163accjvejd.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ryjlcjmc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mwqxcgnu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163dtrxbhqg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163tcfiildp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lbjrhott.html


<!-- 参考信息 -->