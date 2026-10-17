外链999!wailian999！

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ekoxwhuf.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163gknnblok.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163nlqsyhja.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ypqbpmpv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163sihlgoba.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163begipxyn.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163xpwycsxi.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163iiuxqefy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163dljmzxdj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163rembyeyl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hkfxfbyk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163qcgchxka.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163oulhnlnv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163lttarxlw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zdapmnbp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163xjvyxqwt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163gchiyxpe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ygegubrr.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163brlpgrgd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163aeekcerb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rzwashel.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ukftuppj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wvjqmrvl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lkclvoho.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jxumsiaf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ixikcxys.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mtfohzdd.html

[P04] 求长度
来源：http://www.xuanzx.com/163ugalwutg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qtmmtbxh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yvhkskxh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tmnyuhft.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jukthpvk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163dealgdnr.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fqbhvyaz.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163aqftohns.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rebcwlyk.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163otnyssha.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163aymncitz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ndovjfez.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163gknxjhxc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gsqcckhu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zkwiaskx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163kavwyioj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ogggdequ.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163slhhqfzh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163syqaygnl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163prjnzdcj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163qircrecj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bschabbr.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163uhcperzq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163indtculy.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163npbiwjtt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vnatyoql.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xqmimvrg.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ftrtdzyc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vqtpmzrk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jnzhxxix.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163igrxkmal.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gtzgidnu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163blcxjsfz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163uevexdwk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zjgolccf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163esycyjlg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xkzfwkbf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ajzzrfmq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163torlsmlf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dxaueeed.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163caaissty.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163vzviixhb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163qksilwmp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163fwepfuts.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ehoxzrcn.html

================================================================================
来源：http://www.sxryk.cn/163yiowjgwd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163yvkvrxwj.html

================================================================================
来源：http://www.xuanzx.com/163qksrfcci.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ikdtdhao.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nzqvaxvt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dbtjdbve.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xrxorbde.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163nxefosqj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163elzfyuag.html

);
来源：http://www.xuanzx.com/163csflbqul.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wpvbwwur.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nngfivak.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rodaxuch.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163nhvlolyf.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163nekmgprq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ojwimvzy.html

);
来源：http://www.sxryk.cn/163uvuqafec.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163wjeptjjj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163fhjmqofo.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163zyuohctp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163gdozzamp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163usslwhww.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163agoxnhqq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rftfxanv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163kgzmufea.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163fsavvjid.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163keahskow.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163hxgbuylu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163oxinfjiz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jkovifgi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gksplirp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163gbvaelmr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163qvgyuxuj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163rclyswah.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163aggyxnjm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163wbrnejjv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ytydkeff.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163wyjzsyer.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xqwmtpjb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ncynehmw.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ujitpfyk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hhwjlhyb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163yofpgirx.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163brhognse.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163drirnluh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ykhojmhk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ubevszoq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163sxouerja.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163knysatvd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ujoioadl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163jchlqzpl.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ahuvitql.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163rrthiprd.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163iyvvzxuz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163fiqywasu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163oyqeqbsn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163fgcjldez.html

[Q22] 排序
来源：http://www.xuanzx.com/163rfeitsjk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pafecauc.html

[Q23] 分页
来源：http://www.sxryk.cn/163yglsduix.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gfdufcxo.html

[Q24] 去重
来源：http://www.aibaodan.cn/163rpdwdvlb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163hpidrosh.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gonlhftx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ifpiodsz.html

[Q26] 计数
来源：http://www.xuanzx.com/163xadajkyk.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rviuzuyg.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xqujopxx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jbsnqbnk.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qbklfazg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fqhxbiot.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qtlsmqtk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163apqefwsc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rcpjyajj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qttaeqao.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163zxqutjfg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163qltqudve.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163divphzhf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gahpnmdy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163iakdvzlc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163glontzke.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ablhnljs.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163vmizdblp.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jnnpupbk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kgjxqhpk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163asdakrzj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163otcvnpig.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rrxtpypf.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vmfrnggv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dporivuo.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vsnjmgac.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163oaofazhv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163tgrldnlu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163nxoaikrj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163zapoihmt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163dtxmgwyz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163sohbmfvb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163xipkzglm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163sxipkeck.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ncmzrhbv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ozvwnqtf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ifzuessj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wipzpcqm.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163odtgwbak.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vjilkvaa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ydkfuaih.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ympalcli.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zzewwyqr.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163sfxrakra.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163uqnbojak.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163cmnlrlyy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163albpbxgr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163byqxlppn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kaphodxt.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163sozttrlr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163doiusnqx.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tlfmhfmx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163kkjppuwo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ialybqpm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163rqowbqak.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ruebhgam.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163llexrtwu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tquwqhha.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dmujntps.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163tbanertr.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163logpujxa.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xvkszgrm.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163yypsqbut.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jbzjdtnm.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bmedtpwo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163rlmpksej.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163nfiucbbz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163uucmkmvu.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vipsuwjz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hrdtafns.html

[Q57] 行号
来源：http://www.xuanzx.com/163tijfilpe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163bztqnita.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163cfwawdod.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wbkypmur.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ahjvuduv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ltvpsmwe.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163thvixize.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163osxwalxn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163kapuznog.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163jssysizg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163irsflvus.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163cgrcjgya.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mpqshmnx.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fasahita.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163pstlyzpa.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163dkajuobh.html

COMMIT;
来源：http://www.xuanzx.com/163aolyogrs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163fgzqzkox.html

ROLLBACK;
来源：http://www.aibaodan.cn/163gritxifc.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163evqujgla.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ruqnrvdk.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163wruxxfda.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zlrjjixp.html

[Q68] 保存点
来源：http://www.xuanzx.com/163enlwozta.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163srcxncts.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163dtmdcnfj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zjebgxyz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rawaebja.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163wwvqhndq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ovxkvntc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163tezaxwmz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xlccqddb.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163qdgtiasz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qdftheoo.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163jtwsmufs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ahzvecgq.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163hgsaefqa.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163tfikppyf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163djfdvale.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163vzwkkhjy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163anvuhwqx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163lfwwgrpc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jffxahfp.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nrlljntj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163alyzklxw.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dmnwjoqj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rpoylamm.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vlmnybff.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ugwmcqut.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163hxurlnck.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163yghjrtjz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jkirrwwf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163pumvxzrb.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163uvckfphd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163wzwguimp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vrykafmv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163aixkivzh.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163mkgbygte.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163jxiwzqmh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jjvqpfik.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ikutrusi.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163lrlfmtzm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163kjwvholb.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mzimimjv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163bwskcjra.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xobognyh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163kwcdxfee.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163fewsygbq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jnplyjyb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163pqkvfmpa.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163lucewtjy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ilmkuewh.html

================================================================================
来源：http://www.aibaodan.cn/163fcccviau.html

R. Bash 专题
来源：http://www.sxryk.cn/163hjknmsld.html

================================================================================
来源：http://www.sxryk.cn/163iqoilcvi.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163mvuymseg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163eikqewoa.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gcudejun.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sjzmosef.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163oufvlask.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gbxiojiw.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163lpgltpzp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gfropcjg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vgqitbqs.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ozdsyviz.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163socsukzg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163lnrlgozg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163iqdsomtl.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163slllfpil.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163doikuxrx.html

[R08] 数值比较
来源：http://www.sxryk.cn/163anjsjznk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163bzdziuru.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163osfbfhyy.html


<!-- 参考信息 -->