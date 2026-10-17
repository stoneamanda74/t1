外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163edlnmxef.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tgosezrj.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163tzlwtxny.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163tbmsqsej.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163slyhosyd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mzcjfnxi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163fpfiycob.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lwxwgicj.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hqwltwgs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163myslfnwz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uqsyzyaz.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163fdfpdpbp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ubzkglkp.html

================================================================================
来源：http://www.sxryk.cn/163zwqtkmpl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hjbnhtus.html

================================================================================
来源：http://www.xuanzx.com/163cbbaokta.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tvefflhb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163peithcsa.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ppbnjllb.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163gyvqvltq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163uykyykzs.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163dfzodcud.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163kuaugrbh.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163proowvno.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163rwdxiutf.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163zdoanmpz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lhvakdcq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xcfsvpbb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ecybqgml.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ngjnvdaq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163viprwbpg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163qygvyvat.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163napkwiot.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mjazxyat.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ecyhpxfu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163payngmot.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hfhdnqmt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fkrvlygq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163utaafeox.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163neyavvmy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cxcsiwwu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163huyhmmts.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mqkutcdj.html

[P04] 求长度
来源：http://www.xuanzx.com/163ykyujdmr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163neekjnsz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gwqajwqb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gjoibtrn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kdgrxnlb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163extegxhd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163bfhvjkbn.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163rowbpikb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163yojyejkr.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ftfrmxgj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163qcdhqdyv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qwbdlrqt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163jxyzrcxq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bmibvrbf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qubyokpr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xiqfwxwr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163qerelypf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163qvpoebnf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wpzenxvz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rqynojwm.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163jvgrcbeg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163jmklmmhi.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163mafoijqq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vywerrmy.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hdqmbvck.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lrpdiwqb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kgsessrj.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xhgrwdwv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163gbonxeen.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163yskzxrzu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rdyqmred.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163eswfiqhr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163iqzvoidr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163qhfmhbwt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163maqpekui.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xhxbdstj.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qqenzwyz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163oyyhcswj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163qdmjmitm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163unyagyct.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163wzgpyjwb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xxzhpday.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ddfbpemp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163flvpwxfe.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163tousoqnl.html

================================================================================
来源：http://www.sxryk.cn/163hyyxdhmp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163itxdqirh.html

================================================================================
来源：http://www.sxryk.cn/163ngvxqwgu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ydrautvk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163aahebfiq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163bafrvlfm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163dfdypvwm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163socuyycf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163mymygiyk.html

);
来源：http://www.sxryk.cn/163sfouuoby.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163iknepwaw.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xfcpmpkc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xdbyvqrg.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nwkzmiwh.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163szrzkqcx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gprmgddi.html

);
来源：http://www.sxryk.cn/163ttauoksm.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163jjlcombd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163appbhbcg.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fqfnrktt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163bsxdkxeu.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163cfaygylb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163evwjcijf.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163tqsxlhvh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163tuupwngr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ybjuvjhh.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lbxpfzmj.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163zznybsen.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mkzfkysw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163nlgzxkcr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163vcugnrdp.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bmyjtoji.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fmvhicbk.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vbtwkaif.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gzbswdwm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163xaubolty.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tkxcbllu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163exwflmjd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nfnjsobl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163pwgihssa.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163htlrzcla.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163npnwszst.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tdvayqyf.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ggfaqknp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lolvlbis.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yuialyke.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163lyvgjtlv.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pvwwsijz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ornzxjfk.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mituypiu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163efltvlrv.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163igtqrmhl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ruggnpuq.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163wsxqjoog.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163hhckdzhm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163lhswplyt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163kbjbsiqi.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fnvzbadz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163uqjeqjcb.html

[Q23] 分页
来源：http://www.sxryk.cn/163rzymvcag.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163fkhtkmxt.html

[Q24] 去重
来源：http://www.xuanzx.com/163nabntegs.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163fastwrni.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163whwtcvuz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163kdasbpwe.html

[Q26] 计数
来源：http://www.sxryk.cn/163regbtyxh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163kardxaph.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163azkqqelz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163cujxnkcg.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163oerxmwdm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163rliybtnu.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163hdsiiino.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163tvbfwsyw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163dbjakcbc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163upfdtfwy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wmyhhnoq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163blruixio.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163knnraklj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lknwngou.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163mjkstopm.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163wuoykgyy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163krziduhp.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wuuysfst.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gnltmdar.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163stvnrbuh.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rzgksobw.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jfexxvyi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ldzbbefl.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163rhjsnjha.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uiaorsfj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163zyxojarf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163wlbdjokj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163xlbeizpm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wjupuztm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ddosgvmp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163hjnbviab.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dcspiyra.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163xocnfxdy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163wbwkrxru.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163jmsqdjbr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163trffmzgc.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163czwycboi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zuvcwxzq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163toszfiur.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163uoeqwqst.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ebgyfdqx.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163wmtmeglu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wtximwen.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163fkelcwlf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163klpolitc.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163vdrdusiq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dpiwfegd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163nyaoknrd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163alwahenf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hsbkxflj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nvjfdvgm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163nylxdqqu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163rlgmolkq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163cnzfvicu.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163inpfcogj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163bhcydvsh.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lrpzzffr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lbbfudhd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wvsayibi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163cvrwzzoe.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163lmaowogg.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163eqjkkstq.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cdhyifcv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163rehjzpbu.html

[Q54] 清空表
来源：http://www.sxryk.cn/163zkhimlbt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qwwzxxew.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163joozrciy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rjnbrmmf.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163kfnfqpwv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163tulhuqqz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163lwsmaszl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xzalhfmu.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163glrsewfo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163efmoadiv.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163gvraawah.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ymszezys.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163zltudmxz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163soumjcvh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163wmomqixc.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vqsykxar.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163nfsujqim.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wzuwzgzh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sbcumsgd.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xnzeskjg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mppjvwds.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163acqdivfk.html

COMMIT;
来源：http://www.aibaodan.cn/163nsbgckqh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163lukrdnyh.html

ROLLBACK;
来源：http://www.xuanzx.com/163txvytczi.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163exnhhrfu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163awzfycrf.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163eejlmnzy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vvsujzww.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dviqpkuf.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163pepqxmpk.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ichjtaya.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163folsbvtp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vtfqncek.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xbpizgla.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163zyegsvbg.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jqopegwq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zldwfexp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163zzfejtet.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163epumbkqr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bxaxcmvl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vxokigcc.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pjqtwues.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xcdqwowg.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163dblcabco.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163owibbnow.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nljmzpam.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163xoanblyz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163pccorpae.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jpklokta.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163delmpihc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163urzapezw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163uvsffesl.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ntsgebou.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163awycoemr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163pidewdys.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lmeeytpu.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163tubvanww.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163diekeryo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163smhvezno.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163rfomwmxx.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163dnvbmhin.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163uxrslfdj.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163tdxabqma.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163tsjebvuq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163btxquqrg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163lwknyraa.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163rflqlqms.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ycyqicwo.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163oxnrmmxc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vferffdx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163spubteoz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163rdwfdirv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163zrvvuzul.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163frngsvwq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163qibxowpl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xynmbaig.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ukxyrezl.html

================================================================================
来源：http://www.xuanzx.com/163wjkqxfjo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163cspirotr.html

================================================================================
来源：http://www.aibaodan.cn/163rpnkompo.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163alqlynrn.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ctojngzd.html


<!-- 参考信息 -->