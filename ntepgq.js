外链999!wailian999！

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wgyffohq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163slvjjddk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163araleilb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163tbnjdczd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163okefvpqf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lbfpbtjs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jczilgrf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ylyrwxuy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ohpwmpnw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kxnlodom.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lnrrhnrl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kvwukuqj.html

================================================================================
来源：http://www.xuanzx.com/163pukkkjyj.html

O. 并发与异步
来源：http://www.sxryk.cn/163qzvforva.html

================================================================================
来源：http://www.sxryk.cn/163oatqpiao.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rfclzkis.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163cuwmcqpb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163asirxhul.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163mqemrhlu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ystzkmpm.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163sfsvunoe.html

Go:   go f()
来源：http://www.xuanzx.com/163hbqhcimh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vqhpsrtw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163iburnean.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163jesuaozc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163awuxtrna.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ornuwdrk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bahwvncs.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vomilbup.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163bazqoyei.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ttuiacpv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mqicxhef.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wojnygok.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hyxxstef.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163tayfymmg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ggydhgdv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jsdqapnt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fhpwqnut.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ymohedpu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xrrshasy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ooxgyzct.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163rigtwqlm.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ggxpytim.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ikdprqts.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pcmrhwtz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163cyfqcnbn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163mjgzepjz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163wmfrkfyk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163vvwilekb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163tfsmzlpw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qotbrwlu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163mpqihyca.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163pxvkdayh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dqrvnola.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163azqfpfxg.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163unjwoznf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ygagszbc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163afxmafgk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163uwkzjmsz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ejuejqck.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ebkwrcky.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163oodhegdk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hzaaxzrh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163eailtmyt.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fsttyyej.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pwwrwzhs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163htglaisg.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163didqcajj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bsronzlr.html

================================================================================
来源：http://www.aibaodan.cn/163zopwohla.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ybhexxrc.html

================================================================================
来源：http://www.xuanzx.com/163sdcvtvvy.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kyqfrlyl.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163byjspapo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ggtuwwkf.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163getzspiq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163olxvqvbc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163gfrpdqaw.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163tpisfpgl.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ybbxscvs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163smocxhvp.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xyupryiu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lulefglq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163uduptudi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lezcmkin.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163pbydkbna.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lawolczi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ukriqnrk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ianuqaxi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163crzdizoj.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qajsxaoj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hxltrwzm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ewyovjbq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hatwnmvm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163muqgacnm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163qaocqzbq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163duiezece.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163wfxzrbhi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163elkgtsff.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ztagunpg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163cwestfet.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ipkrgkxe.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hncewvsh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rnjbugmx.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163dldwszgg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163bbfqmttx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ppwypcnh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163bvmvwnyl.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163mkvivstu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163lwvresos.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163idliadpf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163bvziqlew.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zjllalcy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qhuefsrf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163hpwjjfkr.html

Ruby: a == b
来源：http://www.xuanzx.com/163hlbhbvob.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bdouirmb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163igkajhxw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163vmrapqvo.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163uaxyllog.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163lwiiumhi.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163diqvemll.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163fbavaeee.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163bdczicmm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163bfyetmtm.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163elymwqcr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lexumfgn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hxqfrluv.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163vqtrttyg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tizwwmsy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hhtbrwkr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163oqqxelrt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ntnmhfwg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ifcfpcxo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xurlpozp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qynkkpnx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163yaycwaiu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163vyttuvqx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jczyvxdk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163dopqnxni.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163bqfrltod.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xmvrnzwy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ensofmjy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163usfeazpe.html

================================================================================
来源：http://www.sxryk.cn/163oucmfjwd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gbghoyvi.html

================================================================================
来源：http://www.sxryk.cn/163fcvadous.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163bwpcximn.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163explikfm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lwwycqjc.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163etrvijzk.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jpwfimdu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wcwaoich.html

);
来源：http://www.sxryk.cn/163bcrswvfs.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jtwvxxbc.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163xywyvpwx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jrmfxpql.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163sdnjqdhu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163thvijpqz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163bqzafqcz.html

);
来源：http://www.aibaodan.cn/163hzjdtacp.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qakafrwm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163opeygths.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qbyiepjr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163vzzxmrpn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zjiabxfw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ptddyhuy.html

[Q06] 删除列
来源：http://www.xuanzx.com/163usimbsbv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xkfetlzp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163pqdklney.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163mhqkmvnz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tcezuepm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163euzbpbbk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163xhcwltdr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163umwthpvr.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163gjxbqrwf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ujdktwnv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163okydbfri.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163farbtmsu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163fweyhvpw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zyfjfahp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163lmctybbf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163umxngicm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163aqznjdcc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163chnickkn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ymbnmxkx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163nrwibwgc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163sdafqhvm.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163gwblouns.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163sdntlcji.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163yiqevdzx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163lmutwfli.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163arnujaql.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163nsssbhsi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163yomcysmb.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fphelouf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163yomejqrg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ynjsdnxv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163xueqnfno.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163pvyamjbz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163chdtfzfb.html

[Q22] 排序
来源：http://www.xuanzx.com/163skpreezd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163hqcpbwge.html

[Q23] 分页
来源：http://www.aibaodan.cn/163bbirwjiq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163gcxybifd.html

[Q24] 去重
来源：http://www.sxryk.cn/163efpkzvzc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163bhwvsthc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163llxfwpzu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ajafrcgy.html

[Q26] 计数
来源：http://www.xuanzx.com/163fsrdfxii.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163fipyytpr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163yanziual.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163tcksilpj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fotwwaeb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bimwbkij.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163wskvezww.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xaqqoxza.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163iisaljyp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ddswholk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163vtrhkbui.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163afiasdzq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ldbxrclg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fhfzypyh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ybdoxaoe.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ibghwoys.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163bvnzqfig.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163yypjrhtu.html

SELECT * FROM (
来源：http://www.xuanzx.com/163kjvcqcqy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ufsezmvz.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163oneujbnm.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jubyirbz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ugwtnhpm.html

[Q36] 左连接
来源：http://www.xuanzx.com/163jedybdip.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bvvwwitt.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163lbtdwurg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wsoalyqt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163egtwgmou.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163rpowvlmu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163romlabmm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163psbhgecd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163wtzgpcxg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vadtanar.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ibrhfalq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wxkvyyto.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kgscwzhk.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zczqactr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163vyiphsum.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vzkusbye.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ahqkjmwr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163exfdgaxq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163bkmspoke.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fgeqktld.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163cveczhmt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163oetgexqs.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163tfjbrrfk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qectkuqn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163gfsimloy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163unfnlskj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163vfiubwol.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163llmspcfu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ljvytwos.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qeoyrphj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ajdxvnzx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ckxzkfpe.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vdcdfspy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163uatgirec.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163oobzkdob.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wkjoovzz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163itfsfoag.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hontandx.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163vrzbgaxj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163auzwfbrw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163onveweqr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163guqzqdhf.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163yzcusiwd.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163aojqaaab.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163zxbmnnxq.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163whpxhliy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163mnjbusss.html

[Q57] 行号
来源：http://www.xuanzx.com/163ryodtjql.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163mfpimilz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xbczhjtw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163exstspwx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163hxgeagpj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vkqqpqwh.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163eyuemzwa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163maphmduu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163uzhkdoiq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163nkhgaplg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163spppqcrh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ogqoqvdi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bmdpskax.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163azvmbuzt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163jrazvjul.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163elqxgssp.html

COMMIT;
来源：http://www.aibaodan.cn/163jduhaecu.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163youspxaj.html

ROLLBACK;
来源：http://www.sxryk.cn/163kyaksydn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wpmiosou.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tjysturn.html


<!-- 参考信息 -->