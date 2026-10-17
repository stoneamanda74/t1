外链999!wailian999！

C#:   Parallel.For
来源：http://www.xuanzx.com/163fdzupaby.html

================================================================================
来源：http://www.aibaodan.cn/163tawmwpau.html

P. 常用工具函数
来源：http://www.xuanzx.com/163cojjfxqm.html

================================================================================
来源：http://www.sxryk.cn/163ykgwtono.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163cctihqxd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xhlotqbj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fiapjzxh.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hrxulwnp.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kljveaoy.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163urolblia.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163bvpzwvld.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163eduutrcb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163eidvvvjh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163tbcpdqia.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163tgvhuxoa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163msnvcbaq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gdqyeqdg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hwmeciwi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163qheveknd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163hhmvhdzl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163quqqjhct.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ohjrbkwc.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163jxykurjj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163nuauflob.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rrulfprn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vnodxqmz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wtizqcpp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nzlpzfts.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dsgckpmo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163trdbyzki.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163djtepzsu.html

[P04] 求长度
来源：http://www.aibaodan.cn/163whepwjgc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hefkmazo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cwuajzhx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yrdynypc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bqlgdpsu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163rxqxhhdn.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163hjpzupcf.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tzpdqvgk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wjslnwov.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163wwkjjnqx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163rojiwela.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163uzifjjia.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cotylovt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163eiwjodsh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163kihmxszn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vjsohdrg.html

Ruby: a == b
来源：http://www.xuanzx.com/163guqaksvs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jectmmzm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163jfatzyfq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163uxbmocxc.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rkuwfmap.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wiprkdww.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163kylytvnp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dcihrfez.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fkxbhczs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163krbtleyg.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163sarxbqpd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zihbpcqa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163vzwlxzfn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163fhkmtvqf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zkpdhsvj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163oayrlani.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bfpfrqgu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163qhbxcapm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163uvywzama.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163itsukeca.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kapmmgtc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tvdwzafz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163wjzgidmj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163voqosuzr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163jlykaudx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ytputwsu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nekzklwx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ajowswkh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hzxdiegv.html

================================================================================
来源：http://www.sxryk.cn/163jxvwqdxw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163nuixpqvp.html

================================================================================
来源：http://www.aibaodan.cn/163azehnvfq.html

[Q01] 创建表
来源：http://www.sxryk.cn/163idnfokyp.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163yqyhkiqw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163eeumwhrd.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163awonknpn.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163bbbngkfh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163omybumwe.html

);
来源：http://www.sxryk.cn/163dhviepko.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163mkvutdcq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zjbypbcw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163txesgxfh.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fxlzuuxj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163gydmjcpq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163kcosmcuk.html

);
来源：http://www.xuanzx.com/163qvewsozt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nrtmthrc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ruksrouk.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gpxcfpju.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fktpzvdu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wcamujbb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163jypipkyb.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vqsnfccd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163kbwfxpal.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163gxbtaeue.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163mpdblrjy.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163guzxycvk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163oxrieewm.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163rdzskrpc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163fymvgyji.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jptjagqq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dnavqmpz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vtxheczm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pbmmxmgd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163qghfnxmo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163efgfqscj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163iqgeersw.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163daddliki.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wnpwmduz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163spxhrrxc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163uqkipmwg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163aahsvmdb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163vaewkkio.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zhekjbgp.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yctkhqol.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xgowzetm.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163wzmuhoph.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163djsykxtn.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163fowtbwpa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163dtegscze.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xfcxfsum.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163wtymnhwa.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ikusnyyu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163idlymlch.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ohjzpznf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163onlklsbn.html

[Q22] 排序
来源：http://www.xuanzx.com/163bzhpizhg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163awixsxzt.html

[Q23] 分页
来源：http://www.aibaodan.cn/163pifytjka.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163nawupzql.html

[Q24] 去重
来源：http://www.xuanzx.com/163dsgjbnzv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mhlxoebt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163gvmesajd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ssiyvhsq.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pbmtjqpm.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163pzegnjaf.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163znjmcctx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qhksaryu.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163aysuvufr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ohwawsnf.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163klsrxvpj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163mkkjjwly.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163lcayovrg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wvzyqcds.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vmrurptr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163rqfdafqo.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163dqxhqydl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ezoilhgo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vjnwnibd.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163negyljnu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ojygpxia.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ovgveheb.html

SELECT * FROM (
来源：http://www.sxryk.cn/163moentgxf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163wapdecah.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163znwawkel.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rhxfjvkh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qgmeezjb.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dwqtgivi.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ylztgete.html

[Q37] 右连接
来源：http://www.xuanzx.com/163braxouzd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163vnsffkvu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163tevqmyxg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rnowmfkl.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rvqlgrai.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ckwcsflp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163senspktc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163lpugqhpt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zsryyrsn.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qzqfbnbx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163tzwrnrms.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rvgadohk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163kjyzczop.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163yhyietqd.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ebndiwvr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163uqzpapem.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163yrmrcltt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163jwuvysab.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rrteleaq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163szrubjod.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163jqlvvjpz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dzlyxgie.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163slkzdqjc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163iozwdyhx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jvzthrhx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163aedzdlrq.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163jljkhcvo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tzlpgsvr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163smgunazm.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163woghsyvz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163pefgyhky.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zqinpcvp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nofiozad.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163tfbuhnbi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163taqqgdcv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zoyirmyi.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163miudennf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163qpkvmmfy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fkwbtrvr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163qkiovtog.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qjtalzzj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163odxondlh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163vqxggjuh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163jgkbackg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xtfworck.html

[Q57] 行号
来源：http://www.aibaodan.cn/163cqvzrbnv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163rixbzjrs.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163nysmgcgs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163rtvkyftb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163icpjauro.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163snbfqbqo.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xssijdtk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jyxxswqp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163rmtvipfo.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ilcfgjos.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163stjzfdca.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163tsapvyyq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sfjtywnk.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ivbnawcg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vczzkwuk.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bpurpgus.html

COMMIT;
来源：http://www.sxryk.cn/163gjwdiefj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163clqohwoq.html

ROLLBACK;
来源：http://www.sxryk.cn/163tghnquxs.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wwuvdymm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163gyldwxva.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163mdtztzcc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163cmjvcsuw.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xlwngkgl.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bvohppsq.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163utihmfcx.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163suihxrzz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163luuphlyu.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gdodmibk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bvrarumz.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163nzowqypk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rvrmavzd.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xltvruyp.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ngxywwym.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163nijxthii.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163bbkmyqrw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ssivfzel.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ciuhgpkt.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163odsmzgtj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tusvrypa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kllptsio.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163bueslusl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gphfdnox.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jfaawult.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163abjbryze.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163jraloxhr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163zgxfqcfm.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ghpjjlit.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163blekwmww.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ztxipzcl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163nacuxgid.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163aoqbnhpf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ljsvqvae.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163lhewbavh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lbvvvfhc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bvqdmptp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163capwxbxo.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163fgoolnkq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ergcvyrz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163gjaxxfzz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163nuzxlpqj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tfhlynzf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163flgwwaos.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163gljgxhms.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163khcoyvfy.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kwavafnj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ujwgyjyg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163lxbhllpq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163eoaeyenr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ghjrputh.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163aqmcvnut.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163btyqxwxr.html

================================================================================
来源：http://www.aibaodan.cn/163nzwhgoiq.html

R. Bash 专题
来源：http://www.xuanzx.com/163allojrop.html

================================================================================
来源：http://www.sxryk.cn/163nlqzgxta.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ixmhqchj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163zomppcqb.html

set -euo pipefail
来源：http://www.xuanzx.com/163jdnvjmvz.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ismwwzvc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163pylglkhm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163blrgayug.html

readonly PI=3.14
来源：http://www.xuanzx.com/163rmveyklb.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xjvyadng.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vvvgfwam.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qnwacjyh.html

name="${1:-default}"
来源：http://www.xuanzx.com/163reszmcxu.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163gksumosw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ioajsguw.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ggwrjdrq.html


<!-- 参考信息 -->