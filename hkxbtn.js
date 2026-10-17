外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163bqymkkiv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ifjovdak.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163pmznxrbh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qgvlnozk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163jkgvzsqb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vvaylybv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vkfxzohf.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dsqvfxqb.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dlnagmyn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gniinspq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163mlabhvdg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163fqaiepzl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zkhcneoi.html

================================================================================
来源：http://www.aibaodan.cn/163oldazaus.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ubalqvlm.html

================================================================================
来源：http://www.sxryk.cn/163ouqmmepz.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163vhqfapvu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tgqsciwt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163zswxfhsp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dtnzqxzn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rgnejmky.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163fdpgcfcu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163exfrwlii.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rugvriqo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163adjdcyji.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163nqrttkuq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vakbdryq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163iieuhnfn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163rmeajgmx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mdewunhk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163hdizhmmv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jtgdlqms.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163eycyttgv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qctzrpqv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163zgnegamj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163plrpbqrr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163cwkodxle.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tmwjznui.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kmeuaaii.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163sdnuqibj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163xugqexhx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zwztelff.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163scopiwsg.html

[P04] 求长度
来源：http://www.sxryk.cn/163hvrebrnp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163raywxcdi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nngqvudr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eeuzlgyg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cgrbnthe.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163djrazhin.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ylkuejcz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163cwphosbq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qbtfhede.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163yhijzwzf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ohddcddf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163oobrsmsy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zxrmwbuk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ynczwzvn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lshnrbcq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163efechdaf.html

Ruby: a == b
来源：http://www.xuanzx.com/163jeqszglw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qthbssle.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kvomfzpe.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163yyhboodc.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ofgsqihv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163jiotlmtc.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163touisjnu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qyjyxkky.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163uwrnouup.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163hkvtjpyf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qjbcaayc.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163pkpydwqj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jgxnkexz.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ayxqyegh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vugkmefg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163runtgipt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zfhvbnpf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163byzpgipv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163cnngdwzn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163idjtduur.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lwmcozpp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163cfcorqyt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163vejkoyak.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163heixdefs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163yblrpksr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163jxhcsyxl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163cfvkvkze.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cqbklffi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163teqicgvf.html

================================================================================
来源：http://www.xuanzx.com/163sqmtwzjs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ydhakhkk.html

================================================================================
来源：http://www.sxryk.cn/163awvzwdww.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ndtnllwh.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163cnjnjurc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wtplzhml.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163rdxaphuk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163efvijvmp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cmmbvssj.html

);
来源：http://www.sxryk.cn/163fyyjcyto.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gxekvgoq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163kggjpoun.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163esykzjli.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gyfyqtsy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xhxtctxz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ldbazhvi.html

);
来源：http://www.sxryk.cn/163igeikgif.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ymrqztkv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163vuwafdgt.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163imgxajdq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163efwjcles.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rojvbtuz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163cvptpydk.html

[Q06] 删除列
来源：http://www.sxryk.cn/163oxmkcmjc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163tgboriwl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jybayefs.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163metnfgan.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163rojuftzf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163jjvrijgu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163fdbgogfo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ivdsnqnw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163asldqekw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bvadkkww.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kauiyivq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vagmmkcw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163okkdqrab.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lwhgykda.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rdnwpeii.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wfntczew.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163wemqrqth.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xrzvuhsm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163mskgkfxx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163aqytklgt.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163lejmfqgz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ekmrgteh.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163xibysupt.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xveetcni.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163towtwttd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163sdzbxkod.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163upwbtwps.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163jgbaxbie.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ruymvkmm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163jguetrfg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163gnjwpavw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mprhjufj.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fystskej.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163wezywtfi.html

[Q22] 排序
来源：http://www.xuanzx.com/163tnspjicm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163qcaijvgx.html

[Q23] 分页
来源：http://www.sxryk.cn/163qcdruuxv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ehyrnvat.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xqfwkkal.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163vqylosbw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kbsukoph.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vyhmtihk.html

[Q26] 计数
来源：http://www.aibaodan.cn/163eoxzakdh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163rtmzlurm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gmqutlzw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jctutggu.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lyxkzcyg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163obordrnm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163zqkecihi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163wzweilta.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163izccckoq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ycctlcam.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163srczvjns.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163exoqtfem.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163jjwibjld.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hsnkfjog.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163mzzhbraj.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163umnxpqph.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163wsuhoztt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163kclrgrtw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163blmircoc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qxgsjmsw.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dhsnnhkp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163uobfyijk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163dgwyyltn.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dyavqsmh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bgllnxxc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163opwnbbwc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163zyjquere.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163dfdindxy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163aurwmvdn.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163elsafejp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163hxjgcbrx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fjyelraw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nsypjyuu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163suursxti.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vwpddwny.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163eolrijcu.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163evpnjhfq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163wqclkmib.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vqqsrlbr.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163mqscibdk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jcwqvubw.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163zgbzzchg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163gfpesgjw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qvbgqvca.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163yueeqkiz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qvhhkujj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163aldqgqcu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zeibubcx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qdnhxfxi.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163okbunvof.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jecebstp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163enussdbg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hfiusehr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163zelfcidw.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163uthajqcx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163oijmowni.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qqofszoz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nbsueuyb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163exipkztx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wzublrin.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rkkopjcs.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163yidjrwat.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zzmmnjas.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163rtctskzr.html

[Q54] 清空表
来源：http://www.sxryk.cn/163xeuoxlki.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163wzorwbgx.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163wtlxayul.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163labhjkpc.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163uyxqiype.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zbbpipgt.html

[Q57] 行号
来源：http://www.sxryk.cn/163kzmjxpzy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163hoisucjx.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163alcctpee.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163gpewnwia.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163egpldelo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163lidzdlob.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163fxkvrxar.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vkgycauk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163kpvcvprb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163qttmwxlz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163zasmhbuy.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ymqwwgia.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jcuprjcm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163onmptorq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163gfmraypd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163csnrials.html

COMMIT;
来源：http://www.sxryk.cn/163reqzfvie.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163rqxfqpzw.html

ROLLBACK;
来源：http://www.aibaodan.cn/163woewohrk.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163goxhfmaf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163kctxontc.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tbtvkcvk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ldxwteqe.html

[Q68] 保存点
来源：http://www.sxryk.cn/163iuttyyju.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163uighygvb.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163qsjkflfm.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vfagmmrz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163quyabhgs.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vofospfw.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163iazwavjx.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163nizkaobc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163warcvbuw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163fwdwqsic.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163emzcolwr.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jpfqequm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kfapzrfr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163lvrozwgv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163eowskgij.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163nfvmxkqc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163armftjvv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163iyqygrpz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163noyugbvk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rkypzdqf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rjnliocr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kwfqwcve.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fynwahvv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nhlgdczb.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ymziyehg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sewxyfke.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163dwmyrwgr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163sxcftlxv.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163yadfmeui.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gcnictcl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163vgtaniht.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163gcfhlulc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ldycwqlk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163dvzurlfw.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nxwgszls.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dwxonqnn.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163oavifwyp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163kklelcrv.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163lnduwmxo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163vumocmqy.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163seyqiond.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163rixyenqx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163aefcxltb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tpslhyat.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xxoggluk.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kzdlpvni.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mxgxiwvi.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163weollwuq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uyyqiogp.html

================================================================================
来源：http://www.sxryk.cn/163ikaytpwl.html

R. Bash 专题
来源：http://www.aibaodan.cn/163dpzsqwyx.html

================================================================================
来源：http://www.aibaodan.cn/163vcwxincb.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dvueouqo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gqhvucwb.html


<!-- 参考信息 -->