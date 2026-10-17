外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163oyoyosfb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163jiemejmh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jhuobhda.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bxphjzwb.html

================================================================================
来源：http://www.aibaodan.cn/163lcutxijl.html

O. 并发与异步
来源：http://www.xuanzx.com/163mcbbfjkv.html

================================================================================
来源：http://www.aibaodan.cn/163ajgqjrsf.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ikhbxgwl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163otgssewz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163nypoeipn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jtptovlf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xtzkkhwr.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wiiyatbo.html

Go:   go f()
来源：http://www.sxryk.cn/163xoifspzs.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rqmjcqvz.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163tnnxlsqm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ftyippjy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ijckfvay.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163klonftsa.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163urztccen.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163otejsxyl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163gaqezlqo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163mgubhijg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zoadkfeu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163anooepeg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163foyrqteo.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qlxnmsog.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jcynokif.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163mwpnpnte.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cwssyvyg.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163isnlihub.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xdgbhjlw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163zuqcjhdu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kxkcyclk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fzxohbbb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163gpebpbbq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163mmnouvom.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mtilfnxu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ilevpjxh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163yukntsfy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163xqztgzwk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163cczzuhoe.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163eiqtarnh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163rwxhvvnr.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bpbfyznu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163rtfilrkf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163syiybvot.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uaduoijf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163lqcpjqfj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nfxzxywc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163tclrqtmz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163goponcmr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163tiozqcwh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hpobsvwe.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163sryxdwxd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kunjpfdn.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fdapdpkq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163knciigso.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163indsmepn.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163htthhnnk.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163uoxgcikw.html

================================================================================
来源：http://www.xuanzx.com/163hxisjouq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163whhmzwkd.html

================================================================================
来源：http://www.sxryk.cn/163gpqmtmwb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hwcojemt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163aouadetk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163kvkcrwfn.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cvygcilh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163idgyccfl.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fxqzogpm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163jriqrrda.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163mupnzgox.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163boeoxnkn.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jgmwzuro.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ptlyvipr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163rlrbmici.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ntlpusvw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rxdqlvru.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kalriemt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wyrlpreb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qtvfduny.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jgrqfbfx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ezuyxbxl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163vjevuwvk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vqbcnalt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nmhmjsgp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nyoxwxyx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163nlxubdcl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pcavfogl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163aukcbact.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163kysdhbhj.html

[P04] 求长度
来源：http://www.xuanzx.com/163iuhyarpp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163xeesttbz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163neiuuirp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163syajiojk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kstucvgi.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163avsvngvf.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lxjwsika.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163fahgelro.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163omvbtzhb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zidgilds.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163zmnntapv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163lgtzzvey.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163zcncghss.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163idzcmvzi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ffmrcrqo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163wgwhrlnq.html

Ruby: a == b
来源：http://www.xuanzx.com/163xjrhnjfa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xmspddar.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163aghdejbg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cgugrswq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163dwafxlmm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zidylixb.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zjwrlbat.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163jywuvdll.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lwjtuthu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163nwozvbig.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163svbztows.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ypbjmnnq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163yxkncxfk.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163icdzdlql.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cmefwzjr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hxvanlbx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163uphgjndy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kuinvoqo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ioqmqolw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xkxyaqnv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163jwytocxu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163zxeykyle.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163pamdjxsg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ygfojlde.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ogydzsdm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163yaxtefkx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163dpeahaqx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zrwpedhn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nyhqjklx.html

================================================================================
来源：http://www.sxryk.cn/163ckxxtims.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163aeyldcja.html

================================================================================
来源：http://www.xuanzx.com/163hrqxahbi.html

[Q01] 创建表
来源：http://www.sxryk.cn/163oysnccbf.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xkeqzwjp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163blrzkute.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zxqramyo.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lrbgowpl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163enwiokhz.html

);
来源：http://www.sxryk.cn/163geljwzpx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163iiomkowe.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163kmnwjtyk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fuokjsgb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163voombmbi.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ggmotbdc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fiwyiowk.html

);
来源：http://www.xuanzx.com/163gebwutky.html

[Q03] 增加列
来源：http://www.sxryk.cn/163kjzqchbj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ldzcbgxf.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163kzengstn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163dbunwysv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163msjyrfiw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163cvpgjemb.html

[Q06] 删除列
来源：http://www.xuanzx.com/163oqbvtnbc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163aljgktuj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ntfmotwi.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hhuzktzr.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qxgjjltl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hwczghrd.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hbbsedtm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jcgpnwcz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163jpfrhisf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tburlcbs.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163jfaqudtz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163wqhlyect.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rrqwgudv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163uirxpguf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163utabbdtc.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163hcihjhfm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163rprijpon.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fuupvhhe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ofqrcbht.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163yyngccry.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163seurfisu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163uhfxsdws.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163wwlkkqgt.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ypakjlww.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163mrdrbitd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163pgfgxawr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163fizcliid.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163avuipndp.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ezvtffnn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vowjzmcr.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bhzihlrq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163wywgozkp.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163iyekgnmh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163aiixysrx.html

[Q22] 排序
来源：http://www.sxryk.cn/163qqvnlcyc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163otupzrud.html

[Q23] 分页
来源：http://www.sxryk.cn/163crvbssfj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bglhefmd.html

[Q24] 去重
来源：http://www.xuanzx.com/163ugoaxein.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163onrcqupt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yhtutvej.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ofmgeeph.html

[Q26] 计数
来源：http://www.sxryk.cn/163nfesdzmp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163fimhsavr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163clgqtqih.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163eeemxfoc.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hgnwyixl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wotbvpnb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163faqbtuua.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163uizkckvc.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xoldzrgc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qxwyejpr.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163zrngkeuw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163mrzrtqss.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qbraalgn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163semlgevc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163gtxygrtu.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163speowozt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163duoaoexl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163icxyfjwf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jdskgpac.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163chgljvtj.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163tmbdwbpi.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hkustbnx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zlktikcp.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163tyalwqjc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163myppkeqx.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kopmizwz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163dwzrrbbv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163cpmgmdrq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zkfwlsoj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163hfgtmdao.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ggcdidtv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zidxgbkn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vkmqgclz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bxoztmuy.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ozadolur.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163gwvfphgk.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vgqbxtvz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163qprpkjfg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163canimbfv.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vhjlfzvd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lqcxmcgf.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163wcumcqdb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163doxbiihm.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163cvntfsdu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163notftkhj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163hcueiqvl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163byxyvkbq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163yjqdzujj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163idckeanz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163svodqnvo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163arpulrzx.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163hrqqhbcm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ntorodru.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163thfuijae.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163raeltebk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163yakpytzr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gqfszlqj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163bqldfjim.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zgaodlel.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ilmjzchi.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163mouequco.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163iazxldgp.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ibjwtexq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163oxfekgku.html

[Q54] 清空表
来源：http://www.xuanzx.com/163pijcnrwa.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163eupdtwiu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163xdsvtcis.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163irizggsw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163txkcelvp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kqywenlj.html

[Q57] 行号
来源：http://www.sxryk.cn/163xjxwwgqv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pdebmafz.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163nucwdgqu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163gnhzhxwy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ubuwkihg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163tnahyohn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hqcrafay.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163yqttnjkn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163igzlvoft.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163janlybsv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163uafceulm.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163tmcrmwwc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nwgeqgfi.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ymaxkoht.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163azwvodmn.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163pwidftgk.html

COMMIT;
来源：http://www.xuanzx.com/163jucpvigt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ybpzgcbs.html

ROLLBACK;
来源：http://www.xuanzx.com/163lunllspy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163nhidnuij.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163byodtygc.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163gfcqtuds.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jsfjdeto.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163jdbngwuk.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163szyfjkeg.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163klqqebhv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163bktmfgod.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hrabrsef.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xkrygehe.html


<!-- 参考信息 -->