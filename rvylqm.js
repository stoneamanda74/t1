外链999!wailian999！

[O02] 使用线程池
来源：http://www.sxryk.cn/163rfmwtaov.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ggjxdqok.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163vhxqtjjb.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dyjyxgkq.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qtaqjjao.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163oyivpexi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ustxiitf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zanmyrnp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163evynconb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163lyeukxae.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gbzidkfy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163pjjxqpsj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163gijdgptp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163orugqhrh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ocyjcgcj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qqeneasa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ahyiflfe.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ygcpfwjt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gzyykbuf.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163lwbtfnja.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163hjdikqxj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163byivzjkg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bonxbrwh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163fylnlaju.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163mhvmtpza.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163akoubkar.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163giipzzwa.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163yadyzvyj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vwktlggd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zrrvstqb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tptxermy.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iikcnomf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163uellfhrr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tpdxlpbi.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163glnozgxd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ukeguzru.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163riautyxu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jrlontbz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ttvqgyqa.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ktmpnwid.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163oqmhovlw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163fwplkvwd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pgqjtilp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163kuysnqdc.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wgqrqoze.html

================================================================================
来源：http://www.xuanzx.com/163potmnclr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163irehwven.html

================================================================================
来源：http://www.sxryk.cn/163uefvwrni.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163qdgnvczb.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163aoywiqzi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163mgdwyaco.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jfupmgif.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gvlwdhbg.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163lqjojvke.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163isliyklt.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zbppaton.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163opsdvowd.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bgrvorai.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163rkmeppjz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163itcwxuef.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163refjzngc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163qnzprzyw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xigbztcy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ifrvyfjn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163melsqdaj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ghiepowj.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qltmfwaw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xnvcntog.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fepjepis.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dzauzwqo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163arnwfhmj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163wdmgqrmg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ejewegow.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163gkltpjvz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163gxcnyczs.html

[P04] 求长度
来源：http://www.sxryk.cn/163hernwwst.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163itxhztnh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cytdkwwx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ckgpqkrv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163isbokybz.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163deifilie.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163scldrstz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163oyvnrbpz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163frqqngsm.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163sqtojdoj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163aslrcbfs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163seftyvor.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kngnghzz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vgvbduvi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rysknoqk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163xfkspybt.html

Ruby: a == b
来源：http://www.aibaodan.cn/163yyrxxqnn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163gzyewilq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163pdwwgdti.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163fugneafv.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163bqoyqsjz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xjalvqkf.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163vmdinwzk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nholjyuk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xxxrbwtd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163baejpvuh.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vxjcsjll.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163yupwxqbp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163yuejsjjm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163uxdetalo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dbzjjwll.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xfawhwey.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163oiqjrotg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ejjsavvb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163znwtwpvb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bnntqxjh.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163eepfmkpf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kvkumaya.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163oiuuozie.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163kfzvaxnm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lmmgmxnc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163blwpooyq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ijvtgoab.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163okjvwzxa.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ebxujhwt.html

================================================================================
来源：http://www.sxryk.cn/163cbubazzn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163tpqnmpyk.html

================================================================================
来源：http://www.sxryk.cn/163owsokzli.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163wofwsaiw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163dnzfifnd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tvehirkl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163yrkcixzq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163grccbcvo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163cbhmhbdy.html

);
来源：http://www.aibaodan.cn/163twrmchwq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qqrwrbij.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163cnhmjwsv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163btlicqss.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fibqcqit.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cnxjmfeh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163kstfrvfu.html

);
来源：http://www.sxryk.cn/163uozlnhuq.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tyrqhral.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163sjtsxmzo.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163mjysgpun.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163yogeayqk.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ztceizvf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hqijhwbq.html

[Q06] 删除列
来源：http://www.sxryk.cn/163smopjdbh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163deethmoi.html

[Q07] 删除表
来源：http://www.xuanzx.com/163plfoaxts.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163gyakhtkg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163bxzhiryb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163efldzyec.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163lwdzqowd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163qaangzfl.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163awbvsjll.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163vbvdwgeq.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wmwpfsgf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163kxitfgur.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163fdolxtxg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163sgdkjpfk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ujxdkulv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163orixreco.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vavembvq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163kcfkpyif.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ilhlepxw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wevnobma.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163vbuysomz.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xvpprejr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jtpndkjg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163bybcfukv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tjvtnlej.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163kskhandy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ixlcgfkg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163rzryugqc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163nqzlixmh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wxinmtgo.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163vxtqkrrj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ppnqzjzm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fdzrklll.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163guywqyzt.html

[Q22] 排序
来源：http://www.xuanzx.com/163iqdeiazy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gkncjrkr.html

[Q23] 分页
来源：http://www.xuanzx.com/163afkfwlsg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163zusqxfdt.html

[Q24] 去重
来源：http://www.sxryk.cn/163pgynvzxx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rqcaiqgi.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tfcicazj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mchfvszr.html

[Q26] 计数
来源：http://www.sxryk.cn/163axvfujrn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163rkdfjhcs.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163tthgpzqz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163uxktdpfe.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163bgflqkyj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163trkrxedq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163gqnjqtwc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163agblfote.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163exvugamn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163brqvuhsp.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lpuiuzam.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163iaqpvyng.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ikqmzubw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zqhsgfiu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jkpefqjm.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163oyotbggc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163sqbojsjs.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163wknumfdk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cowgahfn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163oyxzxltv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xfqqibly.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xcqwsrzw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kjzfnsmy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163yurhbsnd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jnomhuxk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163elplfqvi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ljoytbru.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163slzgjpqb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163gqictzeh.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gqpgxqfw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163njkugfku.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163oydurxqf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163kakhgfjt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qdxgrpeq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163nzjpoieg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163jnwxkjne.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163yizounum.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163hrlummcw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wtjivdng.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163hwcioepg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ktrjotap.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163lypbpttz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hryozjhh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bobqzjzw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163riflcfln.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163anhvhpof.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163upofsisy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163sfeksthu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hlixtlku.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163bvqxvcsq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hkvsslas.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163odkpqaxg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ztpnoxwn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qzhecjom.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ohblrqpd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163moroxiij.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163tjdghekr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163hzwnialg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pwudewik.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rchnapxd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163eioyetwk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163lfpinxco.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fdpoedyn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163uzxqruji.html

[Q54] 清空表
来源：http://www.xuanzx.com/163jpaefkhw.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163crekdhzq.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hrfypobr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zdxxgsev.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163vtgaxbcl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kvrfuodv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fualslrv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kwawwddf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fyntnqhu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163fbbaopzw.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ubmouogc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163qxecaolv.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jixwnblg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163orjkyhvm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ppbqihty.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fvwqhdav.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mpefpvbd.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kbtxrora.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ezqvtqca.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163brflrpmf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163rmsqhwlo.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163cmirurhu.html

COMMIT;
来源：http://www.sxryk.cn/163iavlroqr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vmmpoqvk.html

ROLLBACK;
来源：http://www.aibaodan.cn/163mhapwlfo.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163qsevamhv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163usctbrpv.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163curogdxh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ytbcwrus.html

[Q68] 保存点
来源：http://www.sxryk.cn/163snaflcux.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rsblqhdx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163uasiytox.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163gmcdkpoi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cobnlsny.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xvjiytkk.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ouuxcwun.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xdllhiui.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jmaedzav.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163kmbcsqlw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163yfnwsgjm.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163bnzancuj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163mmyuosws.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ugxfplnt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163gkxelswu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vbohreni.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163phpbdjmo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163qcrvjvrv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163nojennit.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163sysygrwp.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163tpulbgqe.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163guwxlvsd.html


<!-- 参考信息 -->