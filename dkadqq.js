外链999!wailian999！

[P01] 生成 UUID
来源：http://www.xuanzx.com/163diufephm.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ksbygmvy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163iywdicbl.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vzzxhsjw.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xcvsaoki.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163rbenlzkq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jdxuqobw.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163jbpyvggp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kblprpit.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tsedymhb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pzbihuhi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163arrrmywu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163utvbhufe.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163wwiimecv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lxtxquyg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mckxttex.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bvanakse.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rzffdaqo.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fjpfyerd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163wwsinbiv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163fwqhmpgp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ovybbwxk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kvtlhwsg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163azbjdqck.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163bnlinlhw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hsobqezh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163clmtadyk.html

[P04] 求长度
来源：http://www.xuanzx.com/163nfncuqjd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163phqgdlts.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ejpsgshh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nawzesjl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lftyhqkx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163yhxgdtzu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mxhqotvi.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163dpicvxey.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163iernideb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163elviihka.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163almhigmd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163tvjcauon.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163xxiqszqr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rnpnmblb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163tjkbpvxq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163mevaziux.html

Ruby: a == b
来源：http://www.xuanzx.com/163apoxzsvf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163utijenmf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wakyxxnp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ktpnmzlk.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163hnpxsjjb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163qqahzopj.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163esomrdkl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163pyndwlgo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163zpfqymqv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163fgnvxyei.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bxdsecse.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163thtpbdbw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163xhgbkotc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163glfabheo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ivbublfa.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mubfayim.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163lgwrajeo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163cpiyvent.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163lrsfylsw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163wymbtkbn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163tmvsoeww.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163naifkkse.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163tdrrtkbk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kihdsqxb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yhgccchy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163rpnemfvk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163scwfscdr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163hceuuzrf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ggpspdkg.html

================================================================================
来源：http://www.xuanzx.com/163mxdajoay.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ysvrvrlg.html

================================================================================
来源：http://www.sxryk.cn/163cerzemal.html

[Q01] 创建表
来源：http://www.xuanzx.com/163njdycbeh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163opymzlmz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ejcgbnsd.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163okxebruj.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163scrgotip.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163nnuvydef.html

);
来源：http://www.aibaodan.cn/163qmzoteuc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163gsqzhsrz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tvlbekep.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xvelriqj.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163byqcyazj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163klnhhwpg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163qoxtqjle.html

);
来源：http://www.xuanzx.com/163konhgwzd.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163obijfaep.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163avxtetrp.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163fjxzuztl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163txiocolq.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163loqtgzsd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163jhmvrctz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xbwpuebb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163adjgtpsk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163wldpqqnj.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qcgimgxk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vhfpnrxe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163pdysceub.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ssjztukj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163yspnwcbr.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fcfmiaxo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163rccqozlz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jtjahfbp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163dujoomqi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lgzasbwq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163sxphrzun.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163nuexdfbd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fhzzvdge.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163cdtewcbo.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hpdgbmxn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bzrjvkmu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rxtomkkt.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bhsbjnbs.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163zdoxfqpa.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xstdefsi.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163uhunjumi.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zmlnzztc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163vysdgxnp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ylijlnps.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163njcrcryq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163pnurzmja.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wxytgjwx.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ibaiacul.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jmqadmhp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163dhvwtylh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163cqdfkqwv.html

[Q22] 排序
来源：http://www.aibaodan.cn/163qavrsdvs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163bbbstybo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xiqzayng.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163kqleewmi.html

[Q24] 去重
来源：http://www.aibaodan.cn/163nlhsubdw.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163notyabmh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163koymfklp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jirvdtrz.html

[Q26] 计数
来源：http://www.sxryk.cn/163lrdvumwf.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rsfqwekv.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pcqqswui.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kwdlrrwo.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ipnzfmwq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163atrzopxw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rexbxamm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hpnbcdld.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163krhevpqd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ankcmchv.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ilxlasdt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tnxvjadz.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vkcuxelb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wvhalgal.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163aruzblvo.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kbibtqow.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163iyiuwovx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163swhfsjjw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163rldyjoai.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163povskhei.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qlbssach.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vhpsnwqw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yjeodagc.html

[Q36] 左连接
来源：http://www.xuanzx.com/163xchtlfuj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163quneyjob.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163cjisxxqb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163toraotsu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rjtrkfsq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163trimsqmc.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163efjsieio.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163vdzcplme.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163sitypadz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163gqosfrao.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163cwbjeein.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163hqreydxr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ihqgveib.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163npckjwki.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mbzomhvu.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163iffulwqa.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163hppgbenn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wyzqhiro.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163iydyqyzf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hcmlityl.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163rlgrrmfg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wqmtgidt.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163mztztqpl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bqrkzete.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fgxyykku.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dlyfgjkt.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163jxesvaiv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lxvmanix.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bjoksche.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163blsapmra.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163giooizpu.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163kkxwzgta.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ysfxrbzc.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163zibpgraq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ezhbqbmk.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qihvbagv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163gltsmuto.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ytzubvdr.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nitvdbwc.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163jljnzgxa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ygkrujcn.html

[Q54] 清空表
来源：http://www.xuanzx.com/163namiwvor.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163luityxxi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163sutiuhzm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163lnbnnics.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163exsaiung.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vznrwbra.html

[Q57] 行号
来源：http://www.sxryk.cn/163nmimzdog.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dgovzmra.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163xjajajlo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hcogbsns.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163whbcfgna.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163rmvzcpta.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tavdngks.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ieyfgpsu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mlnvjycu.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163megamnfz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wunganoq.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wrsefqyw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xbbgixzc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163etaaeiud.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163kjthkrmu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163cjftyrrm.html

COMMIT;
来源：http://www.xuanzx.com/163vigxalbk.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jgrwxlfs.html

ROLLBACK;
来源：http://www.xuanzx.com/163wmsngdzq.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163vbcpvbvi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yfjkzmbk.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jowgywuf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163pwhougop.html

[Q68] 保存点
来源：http://www.xuanzx.com/163lznmlzse.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vgdlszpl.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ggbujybh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163caiktlny.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163btyqicym.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ctscuhoy.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163uncsojbw.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163sacswzuy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xihmtrai.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wtdcmgdt.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hjexuytw.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hnzkuqva.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163iwgwhydr.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163hwxlnobs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163fsewwnhw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163mmumkrol.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bbakmrmo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dzyxorvi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163uhilrxkg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163lxhvmaev.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163snstedfo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163skjmyqov.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163opispskj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163dsukzlcw.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163njyszzvc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163grofymer.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163gqhisgof.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163akfhrvlx.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xwmbpdre.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163qgrvltog.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163pomyvdhh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163efxcgsyo.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163wxhsvjya.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163sgohyxbg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jhnmnaoy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qzbhggrp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lzsrlyeu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vuydhobx.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ddoqpxrd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bovdqhre.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pqitvkjj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163hxobeome.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ksvvcipn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mnuokzeh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163mvlnrnxe.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lwjhixti.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163wplwbquq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163gcavvrzo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163veeovfog.html

================================================================================
来源：http://www.aibaodan.cn/163gtlhxghy.html

R. Bash 专题
来源：http://www.sxryk.cn/163sdbtqotu.html

================================================================================
来源：http://www.aibaodan.cn/163aeevijjq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163gtivhgaw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zuxlvkcy.html

set -euo pipefail
来源：http://www.sxryk.cn/163jvkgaojk.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jhsjrvok.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ltlhgbfl.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fakxulew.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163cmdtyerb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163delnutvq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163imoogrdx.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163gouqqekl.html

name="${1:-default}"
来源：http://www.sxryk.cn/163rkbnbztj.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163btdmmlfr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163uoyydruj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dcgqedhp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163dzzeasox.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rakkmrce.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ctjymmyz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163qfoqwnqi.html


<!-- 参考信息 -->