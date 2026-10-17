外链999!wailian999！

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163eexcfmpc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163kzmqncly.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163yakbgndr.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163zjhqfzja.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dkpdghkp.html

================================================================================
来源：http://www.sxryk.cn/163uaoqiitv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gmqdfxtc.html

================================================================================
来源：http://www.xuanzx.com/163idevefbx.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163erriiuov.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vuvejvvj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163tpsgozvu.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163iisfkelh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wtfkgpzg.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163swswhstw.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qeqbaoor.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hssoexhr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bnkeqmsd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fjashful.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163uyrucsix.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wfqxhfqg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xriqprhl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163rftvelbc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zygpllwf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lxhapwkl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163sbrmubzi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163kdyedjks.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163zbihwjdh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163suixhmhv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163enamowkn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jrqvgjtt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163brotwrnl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163pqdhjllr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163frvfbcjs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163lmgdowig.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qjimlmhm.html

[P04] 求长度
来源：http://www.xuanzx.com/163wkkvcaig.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163llehjamv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yoxzxupm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zaujsdec.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jcfmxhxd.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163baybpiwm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qdpzolml.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163udvuvzmn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kbskczws.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163dfxyxcqj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wmjwklje.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ibfhoead.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qdwlujvv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ohioisbf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163aeeefzfb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163rnfcwdvo.html

Ruby: a == b
来源：http://www.sxryk.cn/163sodmekxd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kcnqpltg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163vtqihkuu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163sbazioyt.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163uicpckpj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163qwzlixks.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zfmoiwux.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163igzzwgjo.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163kxitysls.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163phmhbrgp.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163jpteiewt.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163mpozbkhk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163lfcjvbhm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163rtkcxdsv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nibyfils.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qefywgjr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ooftuxuy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ogsfbbou.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163aksifcki.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xcwcnvqp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163cagbnlhe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163aoaltdzu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vzgikqch.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163gucahefz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163iiatfiav.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163slaajtwj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163efqiwobv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ugtpuuzf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163uxqcofos.html

================================================================================
来源：http://www.xuanzx.com/163irkmdzea.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wddsiaen.html

================================================================================
来源：http://www.xuanzx.com/163tjcsyrls.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wizzeehw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163cnwfkyfl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163slsmrucz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163yzenpxap.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163xhxkeqxx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163lgslxgqi.html

);
来源：http://www.aibaodan.cn/163ufjspjvu.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163aizwijzp.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163uzadqdvu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lggwzpnn.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vkjibtoe.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163prpjongb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qlsiwguj.html

);
来源：http://www.aibaodan.cn/163qvebtbnf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ysuzaric.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163snqkrpof.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163yjlqlmzd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163vubpqxyy.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163avbbldqg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163dpevysft.html

[Q06] 删除列
来源：http://www.xuanzx.com/163olonvprx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jjlldchr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vmizhlpk.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163gbhindaf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163fnwsixqc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163olvmwvgv.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163paalqepa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fuavjkvr.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163gekrfcnb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163lfxaanpj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vwanpjct.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163nxeveolp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163qidtconl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xubpikal.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fwvdfsss.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163pgcphwat.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163nvwadewh.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ycapaunv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163lgtlcuiz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tybqavxt.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163olznpecb.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qtabtndr.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jewoofoe.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gtapjpcy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163rhavbptw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163hlxcbumb.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gvkhbsfx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163npaeusgw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163xkezevhd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ewdznkqh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163zmbkgwwi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163osicamhu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xfhyrdtw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163kttymlhh.html

[Q22] 排序
来源：http://www.sxryk.cn/163zgrygpol.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163emdwntaw.html

[Q23] 分页
来源：http://www.sxryk.cn/163jpfzwhrl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jiafrvhk.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vtdijdou.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ocxrcwce.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qrlktquk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163gcixygkr.html

[Q26] 计数
来源：http://www.xuanzx.com/163pbskvhxi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xxovpusf.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163agpmuddo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qvrtmhku.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163oozbgcle.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163edmtiolo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ssegorgb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ufgxuwhu.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jlruvfyb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163joajxxvg.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163oyabgqcw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ydhpqgkm.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163wwcwqtls.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wtbnbzta.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163dpqmtelz.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163qmveygeh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mogglvkg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163rxncqdex.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rstqcjkh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163xgstbdea.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ngtfznng.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qikuptwy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uutrzofn.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ghjtujml.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163txjrarjp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163rlrhuaet.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163waqujuqe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ascijecq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163mlpociui.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163lsqpabmz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163wfvblbmv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163tiyazqal.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163qfhsvvem.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163kqsfgazj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ohdeahsi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qwuzlobq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163yutkpqut.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ztbhtcuc.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zamaffka.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163rdzoaoxd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163dpeszsuu.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163imcgdatw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ohvlrhhe.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163afpbmban.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163equlhigm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tmlflwza.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fxmqilom.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vkyaryiu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cvjwmjmx.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163frcmsumk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163spyfopqh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163mmujppam.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mzudvvoq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ikqhhakd.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163yrxhbiyl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fwoavzja.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163gkbqesva.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pfzogzkw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163iyckcwlx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nsjszlme.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163caibxctq.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lgstjyjl.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ftpuzbvl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163eshuffmf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zprpgadx.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163crzvltri.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163bqiaxvsr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mwqbspjm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163agzxptwp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163czbftezq.html

[Q57] 行号
来源：http://www.aibaodan.cn/163iyyzzjsx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163epxlfrxi.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qpefiraa.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nkzqcejz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gkqiajan.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wbqsupkp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163nnllwtoh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163tmwngdfw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163enykjtvn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163fdrozfgj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163fnemlvrr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163pnmjchtq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wtwzesle.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163alquehsl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163slorsfgb.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ccchfmqv.html

COMMIT;
来源：http://www.xuanzx.com/163tdyczwwb.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163fitlzhfc.html

ROLLBACK;
来源：http://www.xuanzx.com/163zfguuwjb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rszveqnq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163nueitoai.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163zoltyldj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qlewnuct.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xvvgglxz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mwykitat.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163xluwevuo.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163npsqmgzl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163aggrmuox.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163drqzkaxm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bgpylche.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cixzbtdm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fkobjzwt.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163urjlafsz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163acpylqzf.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163tjpevjqn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163uijvfkic.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163bnszcalx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163cmybpizp.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ylssysoq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163kiiiztap.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163bcinnpsv.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pkedlkjs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163yhkctfuf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163cmhgjvyr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rloupkcb.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pyjmeppb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163gcuuwpjb.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yojflrct.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163gswcbfkm.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163qjdpwebs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163dhbluabx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163yoniycat.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ueyavufn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163pxxqjyzb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163kexncqzi.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vskgatoy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163wqfbvyen.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ixaeqvzp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bdyjwmwe.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163hytxfhep.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163oasqsfcp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gfdxclrz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163eqkcnwif.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bojwtmfl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163udnevrca.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ugovokju.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163adosaeae.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wbzdzywk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fbqkrcmo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163nkagdmnz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163szusfqkq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ikhffvxc.html

================================================================================
来源：http://www.xuanzx.com/163tomgsvjo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163hodgoupp.html

================================================================================
来源：http://www.sxryk.cn/163mjovnexv.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ctuvdrqc.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163agczvdvl.html

set -euo pipefail
来源：http://www.xuanzx.com/163bzyyjger.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qznkeesg.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163rxfxjtxs.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hodjdyvm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163oluhytwn.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vkavsmej.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163hkxckfcw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163aazrnlgj.html


<!-- 参考信息 -->