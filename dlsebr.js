外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mrewxowi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jhcwytzr.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163onibrdpd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163rfmspnsn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ueuulqik.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ypistdaw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rtwmpmis.html

Java: // 手写递归
来源：http://www.xuanzx.com/163bcoqnmsv.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xiopnsyo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dhrthhmd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163uahwqxlr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ofuoajkn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ueuupxiv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163qxzkjshp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dueufrtv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163etqjbgws.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rlydmtic.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163kvmaemgx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163povrhuhk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163iwuutqhd.html

================================================================================
来源：http://www.xuanzx.com/163ytowunuo.html

O. 并发与异步
来源：http://www.sxryk.cn/163wlncycvo.html

================================================================================
来源：http://www.sxryk.cn/163rxdjjvlf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lceolgyh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rqewqobp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vormbxrc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163orcbuoyi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163chlphmrk.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nmjptkpp.html

Go:   go f()
来源：http://www.aibaodan.cn/163didyvmmu.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xfydftyd.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ghxwszjp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jczbztxu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vcpqecbz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163etkjvuqn.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163iddyduxv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163aukclhqa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qmfyzalt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163aoqhjlnz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uvvmxrww.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163yukkutwi.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163zdjsjzbv.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163adkddafx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jckajmto.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vpvdhajl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cdmgrfap.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ahnwbtvw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163toomirqv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qhiakmca.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vfrtacuh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163atfuexjq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bxmltnnq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tfdlfhbc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163qanpyazq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ekzfyfnq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xaskkbcv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163wkekrvur.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163svjsxbnl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qldtnipn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163nlflxczz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vuutsrmd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163pxrlhkfi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163orounykn.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163autdstku.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qbanxemv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163oaevyfzh.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vlpvjqsk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bprmguqq.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163wvslupwa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ikxfhygb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ttlivzbb.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fashckoz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ntccolqi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rqpewvzz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ekqkaemt.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163inajnvbb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ilqqwdko.html

================================================================================
来源：http://www.sxryk.cn/163ojmgrwrg.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163jtrxfwtb.html

================================================================================
来源：http://www.xuanzx.com/163ugbogvht.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163jckvovhq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yymcobcb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163evwbcukr.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kduidixv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tegkfktf.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163phmvznaj.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163zlcfrgkp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163usbkiuua.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zpbsirkb.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ttgiurga.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lnjvlutc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zfbilisy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163huypokhh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ypeoqhtw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vyyvbnox.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xfcrnvjo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163daugqkir.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qclvtenq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163zwmauvfz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ayqqrclt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wdhaqmls.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gmirfkdc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wceojmam.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163klienarh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gfyuhwvb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163verqyelq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nfhyogcd.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hyknvvfz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163fnzgqfwd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nkglfuyt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jcowothc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pazazjrh.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163jrqsbsuc.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163yltlunkl.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163fuioirhl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ypuyqclx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163lkocbajg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ujhyfecq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163sssdscsb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163yvnqxqes.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nwdcfhsr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163beqieuno.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163mokagwvv.html

Ruby: a == b
来源：http://www.xuanzx.com/163sgawgmqc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163edbqdbkr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163plcxtjoz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bnclrmnq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qrescpbj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ccozggzz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163opatfmxl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dsefatva.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163uaexpbaj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rgatkkfu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mmqpuuka.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ydytjkdh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163kbzswiss.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163heihjgvi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tyoqsxjd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vqolkrqi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163jzkbiypd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163aroewrrc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163zcjhhtal.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163thnagvcf.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xpbqhfhr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163rwvqxppu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hsfhirdj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xuyixjcv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fgioagtm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163sprwiwke.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zcxdwtkg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163sppajvwp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rdylfwyh.html

================================================================================
来源：http://www.sxryk.cn/163frtddyhx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gikodzbw.html

================================================================================
来源：http://www.aibaodan.cn/163dvplfuei.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163lgqwitik.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163krzkdyvw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163soeconeb.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163nagyjidc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wlnacmps.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163jcseclbk.html

);
来源：http://www.sxryk.cn/163rpsbdcdb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ntluprne.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163csljpmhq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gamsgcis.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163eiwurpjs.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163qsrisfkh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163upyoqtnd.html

);
来源：http://www.sxryk.cn/163kvkmcpbk.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ogasfodq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ppcwboys.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ebsiugtm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163rhxrcwgq.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xvlmmijx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163emiqyukg.html

[Q06] 删除列
来源：http://www.xuanzx.com/163naitghwt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163cywtijcc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163widuybpx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163auoatcra.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tjmwwdmb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163zbvthyym.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163pcdzdups.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163onljhpho.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ajiffqtt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ywivwnuo.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163rloggfut.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pbyuzxkg.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163qvtmfjga.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pqxklkhi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xyuukczp.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wxejdiqy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163kjgfvmhf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163zgdbkpgc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ghmqibhm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163xthvufyj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mfzbhavf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163gybatoak.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jwwiqeje.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163atmynnrs.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ocjyfuen.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wqpgrcgq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163putaczbp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163jittrsjy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ptlfoxke.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163fbzplgal.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163tonqszch.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rriidfch.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163snxvowsj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163unndmprs.html

[Q22] 排序
来源：http://www.aibaodan.cn/163thieghtu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hoigjqky.html

[Q23] 分页
来源：http://www.xuanzx.com/163fzlszsph.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163tpahrksa.html

[Q24] 去重
来源：http://www.sxryk.cn/163zisuojmt.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163hngirxrh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163rkxnpdtr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163vtqgfgim.html

[Q26] 计数
来源：http://www.xuanzx.com/163llxltzuf.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163oxtenbpu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163tqudfefe.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163kjndtaca.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wujwyqbm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163erutrijv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163yrbysxjt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ergiuvyc.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163yvfdtwcu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163grcncihi.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163kfwiclwj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163mokspmjy.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163csfudclj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bqfxmudf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ayqygcni.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rqevmovt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jfqjsxut.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163aspyrizz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163uxnxfmim.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ujycqnsn.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163tbcryfsp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rbjxtvrn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hhlhewzu.html

[Q36] 左连接
来源：http://www.xuanzx.com/163qammnocb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iposayxr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163nkldccea.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163oyjzxgki.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ytsntqyl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163fhtjnawt.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163urktiece.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163izbxyyap.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163njtpkbyw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163eztxlstg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163lursdwqq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kevyvhmv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163cnrqgino.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pioewuay.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ijcxokyt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163sypszyhu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qvxhyclt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163uaqtndyv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vdfufhdk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163sdlxppmj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163iclbvstz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163gkltouog.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lcxrfnsb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wnbyywit.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163cniuodja.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163aedvvjii.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163radwbyxk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163afqjunca.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163odaironb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dxhmhzkv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163rvtxwpwh.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jgdplwzz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163nqbrwrdh.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163tovwpwbr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163wtnvojul.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163qcmcdtui.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163exiyjaef.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163abzkkxlk.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163kotohokz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163erswwhcz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163txfwddzs.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jfkozscp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163cblpbqrq.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ezxxdpfc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163jxtobswy.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qayphrmz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rccutzmz.html

[Q57] 行号
来源：http://www.xuanzx.com/163uxwwvbrc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163lschzwty.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163exlphkui.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163xwhkpcpb.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163iyanzxnw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jurfchdf.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163qyuborzj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wbxraxpq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163skyaxdik.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163hczarleo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yeegmmno.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kxtilmoi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qpmmewkz.html


<!-- 参考信息 -->