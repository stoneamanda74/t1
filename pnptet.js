外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163kykzrirh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163urmgeovl.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163omwkamzw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163riobcgri.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mgbtfstm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dojwagev.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163evwdpbht.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163hdfcikua.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wzyslxcs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ndxkzade.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163pbeeccos.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163yfglgdnq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163grygusxk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163soaroyds.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ixscghhr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kayevfgu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zlhuhxhc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163fvgstbsc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sajbswpn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163svhepwnw.html

================================================================================
来源：http://www.sxryk.cn/163xytbzgby.html

O. 并发与异步
来源：http://www.xuanzx.com/163wbbudick.html

================================================================================
来源：http://www.xuanzx.com/163nxzgrpfw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xkkxrnaa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jicuzesw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cfudrnzo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jxeuzxhv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wrbbthww.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163msplgrni.html

Go:   go f()
来源：http://www.xuanzx.com/163jyanhwfm.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ynignlwr.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163aycsrhgr.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163leufqfgy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163fgnrmhqc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163oyewbzhy.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dzhpqymh.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gideiact.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xvukmmba.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163jvrdenuu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wsttqxkq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ojmzbjuy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163bzlwvizn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163mklqmkiv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163yecwxouq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ykcaypxm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mbrkhdye.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163gutumscf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kbvuragu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163juzrxrtt.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163afivhwzc.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hakbiaeg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hpragovf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163xqxitryk.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163znhizpwq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ctcugamw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163dnzijknd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163flsczuhu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163lsjtoktz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163nxtxqwwl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163onqbmoso.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163yaqrvapv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163aofhecin.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fonnhjss.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cxnhztbi.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163uvracnbn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qylddozm.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163burrdkuo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163iosdmvqr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rxmckcjp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163nockecwv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163zxfyzlzd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wwrbjexr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uduhwyhb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rcqpfdsa.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fzswtbjf.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163yxpqlfpu.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163gmfcfusa.html

================================================================================
来源：http://www.xuanzx.com/163jruyepne.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vzbbdell.html

================================================================================
来源：http://www.aibaodan.cn/163uctwdnmz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163rgfwdrya.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163unlgcbcq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163owboyfgj.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tvytidch.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cblpueve.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163nodarrlq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163igpudtwb.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163nxftsfbu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163uuytsepy.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163uhfvvaid.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ojychzqq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163lhkfeaus.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163etbyhtww.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hbcyhthy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pgryoexp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gevjxwak.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163gpstlldu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rvoljpmw.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163eftcpiwb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qoxdnqmu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163zwnxovfc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ypslrqzj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yecziehi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dbstlcya.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163myxjxqdp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163uoxsvcgi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jjotlwqd.html

[P04] 求长度
来源：http://www.xuanzx.com/163lyxxjchy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163dnarqubu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ritrddjp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hdxqrdzl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zeflfqnx.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163tmzishzh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163atsbjprv.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163swhmlyla.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163rkdoibsb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163kkwsvhye.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163vfwpixvn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vqagaxrq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163nimwdyjd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163oaovfzbi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mmgmcnvp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163yjjvfomf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163frgdopgw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hjdtgzcv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tpvkmwxj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jhjgalcl.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ehsyuiyo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163agjeesnw.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zieuoqbk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vjhvndsu.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163kutovfpq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pzuzmawt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163omburzgw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163xdqcpcsx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rzpxbnid.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nsqwyliq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163oiasfgzf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xqxvmkwp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163zvymatfj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ncpucyvi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qggbtftm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mxwnfxpz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163zzrduimw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163hwxrryfm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ryydqmlv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163jfqqmmcv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163uxpfkiua.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163dweavzml.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zovgfomw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cpcbrkwr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163izxlorad.html

================================================================================
来源：http://www.xuanzx.com/163kmpybgiw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163kskipiyv.html

================================================================================
来源：http://www.xuanzx.com/163rzsjeqms.html

[Q01] 创建表
来源：http://www.sxryk.cn/163dqawzcem.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ymildxvg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yeznkzjj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163flsfoxec.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163xvwbpqpa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163rlcvohpu.html

);
来源：http://www.xuanzx.com/163zjayspis.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ravlfvab.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qosbrdng.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dysamylt.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163lxhgmral.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dcfyciet.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wmjegfjb.html

);
来源：http://www.xuanzx.com/163oikvcsdm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163rqarvoee.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ymcglavf.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fpzixakf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163pkjlxayg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rrnrdgtu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wiukpuxd.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163pohrgnat.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163fwmzirdm.html

[Q07] 删除表
来源：http://www.sxryk.cn/163rcvbzzji.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163esieunqx.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wzspqstq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rzyoxnks.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163vztkinkw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mstfdpfz.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uvinocax.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ttvhfymg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163bydtnnms.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163oeyzjtiq.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jgnfbzsr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ytpwwnay.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163iuvrkcso.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163njqlvdwu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163daqjzvjw.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163znafmupm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ucqozhtd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163nwlebhmu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163alxitrby.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163pncdnbsf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ojletwtq.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163frfqcttb.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163xbfpsjtp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163rxypjtod.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163urjwuteb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163eutkvqua.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163uxtshwrr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ozoapdfb.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163nqndrvfr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kdsfxqbs.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163eezszrqn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nvlwlijf.html

[Q22] 排序
来源：http://www.xuanzx.com/163jlzskrde.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pvitqtaw.html

[Q23] 分页
来源：http://www.xuanzx.com/163tsztcsil.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163vqvxgkee.html

[Q24] 去重
来源：http://www.xuanzx.com/163dtgsuqqc.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163zkgbjcdf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163rkeysgdy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hxthsmqj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163alxsbihg.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163tzhluqbz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163afogqtsk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163bqxqdawk.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fxystimv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ukxfcyen.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163axkmnqad.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xvisihzm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xpbwrsst.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fkwjkgfg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163nntzrolj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xridnacq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163spckojnu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bcaqdkyz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163bufliogv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zhuerdud.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163fqybnrtw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163pglbvuuh.html

SELECT * FROM (
来源：http://www.sxryk.cn/163hsnatnhz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vjsahglg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163itgdzqmb.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zgcivptm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xmwsrurj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163hjapcoee.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mdigkvux.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163pbxpyxap.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163uggedoyz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wrknuyst.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hifesish.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dhuzukkj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163kqijiyjp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163auydkiur.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163hfgfpfkh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sqhywdhm.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163pnzvizqk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163sphiiyik.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ixrhsrgb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163snnzguhs.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163pkpafeko.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163jnrqshry.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vtnjdehj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163xxzdmyvd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163injfrepn.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163jozvgsbx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163iksmmjol.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lynheggm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tmyylbsy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163abpxtpbe.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rkfbnuyl.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163dublukdw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163guduozbs.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163gnplgjsy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163xrgttpqz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mxpsmpsw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163amupgebh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163tyrwsueb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163gwoefzwv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163rwijauhx.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qdhaugzc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zfouxpes.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163yqojxmmc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163xrjvkvjq.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vhpgyrei.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163mjdnqpwb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163nspqscyk.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163uzfypjgp.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zlsynics.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163bejrqcgt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163cpitvdbn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mbmfqscc.html

[Q57] 行号
来源：http://www.sxryk.cn/163geitytss.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163mnvrqxlb.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163nyakdder.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163immsttcg.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ksvaoajf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mhecekij.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dwpyqidd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pkpphetp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ugamjhbb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ehbcskgc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ztuhqjiu.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163cyyfqfqp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gmannqhw.html


<!-- 参考信息 -->