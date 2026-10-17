外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ccwynyge.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163olzyvdxl.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cbojhsar.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163fmzaujld.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qfnvscvm.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hssysxqg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kfrymgpj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dwjebrwu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lpbcxzkz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163uhncwlkg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ftheljen.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jpgfasjw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163yksbwkur.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163prlgdyhc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163tsqlrjuk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bohrtfat.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163szpejwmq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xcqbmsqd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ykpcrcfd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lrrgumzq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163wcnxwjwx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nyuvxamm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163fuclwknk.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jhxtvevu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163cgchgiun.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ggqinqkg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kbyjriak.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jgsaccfq.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163nybdnolv.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163cwzfnydk.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cifudegt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163hbekpyyx.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qiusilck.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163urbihfxp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163nebuidgk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yactrmji.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163flefmqch.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fzssggzv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ikssbxrp.html

Ruby: a == b
来源：http://www.aibaodan.cn/163eszsqzyb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163psvzymbh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163utnegntr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163kooifdfc.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163inkcfvyz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ejypwozu.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163tppygcqs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vseoadmo.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pqqzeeit.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163foesaxxe.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vlemsiqv.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163heyytyug.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rgrtrsfu.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ecjwbhqz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rujywegf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bhemeibu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163pjfjlmzd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163yjvifysa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hcitwska.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163bmonddtx.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163cqlqveve.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163otxuploe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wqgjlpee.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wwytvhlw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gckyvcqc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ogakjqeg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163avyrddrv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ikkylnbb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163xwuvmwdq.html

================================================================================
来源：http://www.xuanzx.com/163ghvrhhnd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163clubacvh.html

================================================================================
来源：http://www.sxryk.cn/163exvpkjbj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vnatigax.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163gdamvgoq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wfzkwpci.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wgobxpbh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fevlprwh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163uahzbpfw.html

);
来源：http://www.sxryk.cn/163uxwyxgqp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163kvxhghjl.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163koresyoc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163spkmbqxb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163klgeumiz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163qgvtvmnl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163izqvawxi.html

);
来源：http://www.xuanzx.com/163qcksdfxu.html

[Q03] 增加列
来源：http://www.sxryk.cn/163oculkbfn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163cbcbdvjp.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163lpkaksai.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163hfhhiwwl.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ygrvsmak.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mfudtnvg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xmljqfrw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xbtbuznu.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163gwdqxczo.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ouptjlps.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pvpuxdxw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kptxbtuz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163iiybfrhf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163lvupezfh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163yvgitepw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dujzetdz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163bnnqntbd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163rgnfctoo.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163aqtxwxly.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jboenoje.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ehvevbah.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zlpdiicq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ymvijgdh.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ceodenen.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163qwhcwbzc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163qizlqpao.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mbyvczfr.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163frjgdgnm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163edavjlmi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ammcqgzr.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ccszioal.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cnztnmfb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ctwalqvy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mlqadnbr.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163bsrmxrew.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163uooibwin.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163hxzdqjtv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qognmmtx.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qqvwfyjh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163lflwwwbn.html

[Q22] 排序
来源：http://www.aibaodan.cn/163syvqyasr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163uiazsctn.html

[Q23] 分页
来源：http://www.sxryk.cn/163ddkkpxap.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163asvbvxht.html

[Q24] 去重
来源：http://www.xuanzx.com/163blbdxbha.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163kdzaakpg.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zqulqdoj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163oruygfpl.html

[Q26] 计数
来源：http://www.xuanzx.com/163zxkjrgcy.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hxsyhyou.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163levlrdlw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163blgbhnae.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yptcxfgt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163fvcqhhti.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163iunbgjya.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hymetfdm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163vohuwfiq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lhnguevm.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yjkbozfr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ugrqkrkd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163bzhepxbm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163csgmoyot.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qlsubfbf.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hzqjfwax.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hfnmqwvr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163rhlvpkrh.html

SELECT * FROM (
来源：http://www.sxryk.cn/163tczqyisr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gzimffse.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fzbgphcn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mbxcqjhl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163opuopcmn.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ivpmttjd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tdixyuhc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163iyscshwk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163kjqwphop.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163amzfjris.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163jakxktha.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163hmqghrwl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163piuruezb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qttotgoy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163uykrofig.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163mepzurjp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163kberxcij.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cjwqglzj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163cgmmzucr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xotyhkvb.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163twmynlhv.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fggoulfp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163qzaqmsad.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163mpukvgfh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163icdfcbzt.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ccktsqed.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163uedmossf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163jbagvvai.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dyrvpbtm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163dbrkajfv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cvmsukii.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ohzwonbw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ebmecvpv.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ujzaupoz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bxdjxaxv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163wxecxixe.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163sayldqjg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163dvsiyjel.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163tifpzvnn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163luosmiip.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163nldomgyc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ezgnhwgr.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163eaecwdjg.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163gwqthmey.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163efkjoyei.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163nacunjus.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ufvwquuo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163bvtvmbqu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163auyajdsu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mrlqogvh.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163achhqnow.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163wdqeykpl.html

[Q57] 行号
来源：http://www.aibaodan.cn/163nnmagubl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163hzyqsvjd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163iunueekl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163schdytgl.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ikosunhv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163aippoarv.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163fexplfgv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ecigtoug.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163lnfiiayt.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163fqlqlyxm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163fqdpwrnv.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163uuxpgtbs.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nfdffudw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fdztliuv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163tynuqzgc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163qurhywbd.html

COMMIT;
来源：http://www.xuanzx.com/163qotsdqjz.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163pdtdohwy.html

ROLLBACK;
来源：http://www.sxryk.cn/163inewiosw.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163spjszphp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163lkfhvuiu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163bkjeokdg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163frdyiqny.html

[Q68] 保存点
来源：http://www.sxryk.cn/163liqsrigs.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163llrvdvxa.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ssakliiq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kkhjqahq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163fgguvoii.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bbtavtqh.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ifiaplyd.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lgiyqjlb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163klhuztmy.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163agambucb.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163csgajgqs.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wkajihwl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xxkjuyiq.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163fdqdkolz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163kflnpmvs.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pfqfkbid.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jzzvadcs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xyccjudg.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wrvlyfyd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163auepymas.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nodlfazy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163gikgatxj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nijvbpye.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zzawlbgc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163pckdfbcc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xsncvmwq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163iietwfqf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163kqpcqoqu.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163vmzgiceh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163bghixtqj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mzztqzis.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xpnwcdcv.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tgljkgif.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ogtoglkp.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163wymgtole.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jnpxdrkh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163dkqrnfdz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163soudzbyu.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ashxkfmo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163xwthnkry.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wpafvzmc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qwqzdfgb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163msfiitnp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163vyzrstno.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ksftsncy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wmrqspiw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163zwesxlia.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tnzyhkou.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163taryrglm.html

================================================================================
来源：http://www.xuanzx.com/163xqfxmqzv.html

R. Bash 专题
来源：http://www.sxryk.cn/163yakksluw.html

================================================================================
来源：http://www.xuanzx.com/163ztncziia.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vsadofrk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163vjcbvjnr.html

set -euo pipefail
来源：http://www.xuanzx.com/163gzbtzisl.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qawyjfnc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163exerrhzs.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kpqeafwq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163auqljago.html

[R04] 位置参数
来源：http://www.xuanzx.com/163cjvlpubz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163momtklvk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163aueolaxs.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gobkktsp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sawcfgnk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nazeqiou.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163vtgdfiuq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mddaiyii.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xakmeqvi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163niwoqfov.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163nfehymbd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bjzbbasx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163iqlphvnv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163acmwkqpi.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163zcmbswdv.html


<!-- 参考信息 -->