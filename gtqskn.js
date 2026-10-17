外链999!wailian999！

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163klmisheu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uupffmkj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xhlgeujj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dgxlmnjv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163pyquruef.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163surzfjae.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jpigmwax.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163sjvxzrbt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163snjcmcuu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163euxqewwv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163tvaezvhm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163aueufwvv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163icnvfiwq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163upfbzkwh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163gunltaiv.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163mhwoysjz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ihlxeevz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ctjylnnx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lkkhrsoa.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rnnlrazb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163utmfjgae.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vkzouwzi.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ozcrvgce.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qviteslj.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ltnlaqww.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ssosagwh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163phymclxo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xwogknuz.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cwjaowbg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hsdrwsmt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163krgbcwka.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163gzqxutvp.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163yvdjuetl.html

================================================================================
来源：http://www.sxryk.cn/163whbaktuq.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qemdmrbo.html

================================================================================
来源：http://www.xuanzx.com/163glaotaks.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ytscqlhb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163hnmcctzo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zzwytijg.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163lamhdcxu.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cztappnb.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163dkadvfip.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163fyeywqbt.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163hcaqtbxa.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jnetcqtd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163qjmlojxi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fqcczdxj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163abfufkjb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163bjvajvig.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nlkixaev.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xnwgrwxe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163vrfdqinv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163reaejulx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163erqizyvj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ylnxpirs.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zimhqcyr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dycgiulp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pkfnwsbn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tnifqwpv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ikxyioik.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163tpfgxgid.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cuideqix.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bxdfgukh.html

[P04] 求长度
来源：http://www.sxryk.cn/163jkzufqik.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ielayysy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bzhqekid.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hdskotlt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163daedaqgk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rjyuddzt.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163udfpthxz.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163pawmxyft.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163rsxjmcvg.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163cbgmhupg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ddrmiqei.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hcefavnv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163spwsewhr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fqqbqnqu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163zfwbumst.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163vbvombnk.html

Ruby: a == b
来源：http://www.sxryk.cn/163tuyrltdq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163eehfftbx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163zeuitica.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163drwnzsbv.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163uyyguaam.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ovxlqbuo.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gxthbptf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pljprjis.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fjhwbbjc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163prjnpozj.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qohwzqjt.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jfhurhlc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163pchpikzf.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ozdshhdf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gilppork.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vwpgfwpy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gmlcmenp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vmhkozhl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163iwdjqtdl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163udokvhzu.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163aoxhysgo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163oradgory.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163rnvnzdtg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hsapcvaj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163pebdmhyf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163xmfmvnfc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163fvnufobl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kprywpdh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163qftnhmkh.html

================================================================================
来源：http://www.xuanzx.com/163ymkyoqha.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hwotgwcs.html

================================================================================
来源：http://www.xuanzx.com/163meykvoxn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163uxngymiy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163bnaclckr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163csbcyxgo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163coojjeib.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163tnfzzefg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163rqqltiwn.html

);
来源：http://www.aibaodan.cn/163cdtwfedw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163aqbcktnq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163gzpffnxv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163njuelwwb.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163vgdzfivr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mjrekwpt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163qukudtnd.html

);
来源：http://www.aibaodan.cn/163lotmiqoq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163hbfyuikx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163husgfdbp.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163bqvbibgk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163lkvzgalh.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163pioodscp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163gebezjhj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163sdcyczng.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163uhxdddxs.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ttrzpyup.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163gxrsjrge.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163jwtwqmpb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163csgahyev.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163uivqnsjm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ktijyfoh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163uxnrhefd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zeaupeuo.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ftiuhhdd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163raivcynr.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163rguhckod.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163vlzddtob.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163exxcezol.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163gsvfmmnr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163sopxtxvn.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ldfhcyuh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163lwpanqcz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wgcrjjrv.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bxhzguim.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163dtvutnxr.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163xzxptllf.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ivqciptm.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zzmvkxec.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163muyqoxhe.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bonupvnu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163kximosjm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163isxxahie.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ymqieofy.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163owtkzuly.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rmibdozx.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163xdhkhbno.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163oplemspm.html

[Q22] 排序
来源：http://www.xuanzx.com/163rifofemp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163iinelemx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163iqdmzfbx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163rtutczka.html

[Q24] 去重
来源：http://www.xuanzx.com/163qkfimjtb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163wokdtjhf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fjqlppbt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163nxbmntxu.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jmukalym.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163uvijtixe.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vqlbrxsq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163lnqpctsf.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163jkvxvxam.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163bmegmlju.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ffupomnq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163frhangid.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163cyfjcpcg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lozvnndk.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163csentukg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ovtljezx.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163djedwwzk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ltogjqxi.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163yceecyye.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163brrdrdtv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163eddgdsdo.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163zdyqwhlr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ztsrebnd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163xhtynpso.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qvdivjpg.html

[Q35] 内连接
来源：http://www.xuanzx.com/163oesvhotb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pfloeehh.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lljiuhct.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ubysnhcp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163dxsyiayq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163jnzdhvzb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163gixxlgla.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ykznfsif.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163pbbirzlw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163wgsahrjc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163gzxepuph.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fsmeeylp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163oeccpvhq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qeveaifs.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163skvlfbyb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qdcdokwq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163tcmutvmb.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163afexpwzu.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163xjqjigqf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tdxzjhyg.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dlxovnwc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163smykwxrp.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163fgucbwxt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163rghxtuqt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163fiosahmk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163byjafyvq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ufrtjjpa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zxszmsru.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ugchntzl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qjvtseal.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163fovphgal.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gddddiux.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163odrdbhkm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163nrcacczk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163kqiiazac.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qtthfafh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ungznryr.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163vvvzjtfa.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163phssioko.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hxgrynue.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163mqcjrsgp.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163sdfvodzi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163brizqwfl.html

[Q54] 清空表
来源：http://www.xuanzx.com/163qmlocqii.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kaevaahc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zudrtdjf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163lbzwowza.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mepzzbzz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ijzokare.html

[Q57] 行号
来源：http://www.xuanzx.com/163xmptjgwx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ueczvpmy.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163abvpisly.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jkswerun.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163omjwlyit.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163tixkxccl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dqplqghg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163erhwuvrb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163horzwzay.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ohimftic.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ydzlvmhp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ypzlzblk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qhahasel.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163dekhjywf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qobbwafg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163czjmyybr.html

COMMIT;
来源：http://www.aibaodan.cn/163nyymqlft.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qukjxzdy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163iaznhnak.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wrkaeace.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jgmtoops.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cjqhxnxm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163diaaepqh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fchleqve.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163skdlikjj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163wraogaev.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kxtoayim.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163claovxlh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163dwzithmb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163skrkvnji.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163aggfuiux.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bvfuefoa.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ttjnbted.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mgpejzju.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163dpsbsnev.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ukfzmtoj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163rqupxyxa.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163wozvcfbt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hcskwqya.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nrghddkj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jzxqndkv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163svpgmbmn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163eaursxls.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163icpakqyr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163rollomeo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163touutvtb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rkdgtvvg.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163acsbyqhw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zxckrfyb.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163naxccryg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163vffkjlql.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163nfajqayq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163iqihblzx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hodezbes.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ttormzhd.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hyhdqvlm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ohprklco.html


<!-- 参考信息 -->