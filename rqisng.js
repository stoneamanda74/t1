外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163kkpdoejh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dpmbuops.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163avihgigl.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zpaxmwdm.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ycqtbyui.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163uhagijbc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163namnhpix.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xhsomann.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qjahrmys.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tmarfuyp.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cofgquzk.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vdwkuhgn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nzojkwtw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163fkibweis.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163bgmnhvkj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163bjzpfqag.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ouimvfhk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ltthtlvo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nxmcgwgv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163thihxgli.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jarwpifl.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163idwkecig.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zbjeqmhs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nluxlppv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qddbbchd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hjtdpfkw.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dtqpwjfj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163oupgoknh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pdjmmvpu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163xgungyis.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163evtvcpzm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ehzjpeyd.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vjlmelsr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vldzykac.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qbnwkizp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163evsapsqo.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163bxqedjsw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163eexgpywr.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163mqrbepkl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163opxoxgvs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163srvraegd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163pivgujgj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hgizlojz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jgtzqvnb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ykkhyzcw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163aktwlfbf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163kipdnqzh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tpewksyb.html

================================================================================
来源：http://www.xuanzx.com/163rwgacthr.html

O. 并发与异步
来源：http://www.sxryk.cn/163kmniaawt.html

================================================================================
来源：http://www.aibaodan.cn/163dknttjfd.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tcnpobvy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163grshgvka.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dfjxegqp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gkeevbco.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163megmqpuv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163eiyghqtc.html

Go:   go f()
来源：http://www.xuanzx.com/163soldboww.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163llbovyhv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gaefexew.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dksmrxyq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163nkzdejva.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163jxdauewg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xxzknwpg.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163aycmjsdp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163clfospyk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163lmcefohj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163wdhuajnc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jwsmphws.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hvbvafmh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163jcituzka.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163mtyhwihq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163yclujtyj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ydfpmvkv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163njpqlafx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163westpqsn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vhwftfka.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163xtrixopo.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163sivkvbgl.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qezsqwbm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wsixpayc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163fnokcnms.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yoaizlqy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ojsjakgz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sljlkpuj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jicelqpf.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163vfxxsjvr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dulosene.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163gwzxvrfg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qtvfjmhs.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163izdexhra.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163eoughorw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163teeublqx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163cnorjfqb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163egubcjqb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jaleewaa.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163rmwmgoah.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fmwpsvtp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zlzblvoy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ptywfzrl.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wyxbbcsi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gxsaqley.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163srjorbwt.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rzrryrrj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163kysretcu.html

================================================================================
来源：http://www.sxryk.cn/163nriguiwy.html

P. 常用工具函数
来源：http://www.xuanzx.com/163paguqggx.html

================================================================================
来源：http://www.sxryk.cn/163tbqtoyjx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jouoghgw.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163jgxgqzps.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163qqsigsah.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wkqckxse.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163uibpmmge.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163mdvefajh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163uxmbzzfx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163uuedujyu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163khvwbzzg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163furphpbb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ckngjxob.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163wejotehq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cwlhuxxl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xnfpfoth.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163jxtddgmi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zzjefslt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lfjvnqnx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ywczijad.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vesyhwlk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ferkwpce.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163xkmousye.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tqtfggpl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ntukguhk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hawsrwia.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qcisoran.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163nqwobsqw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163yohfijpo.html

[P04] 求长度
来源：http://www.aibaodan.cn/163xfxlfgjd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ymfkmuwb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ixcymyta.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rewtvyuj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ruiecjap.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163lzxqfmcs.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163qculejvk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163clgcruvc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163egouckit.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163oqjipmma.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163hwikipom.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163lpjeyfcr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ntngkcpj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163enggyvjh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163pmqrleon.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163zckfcswz.html

Ruby: a == b
来源：http://www.xuanzx.com/163jhzhhyif.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ovlaaodh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163cngkfnue.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163xoevjaqp.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163spxdcvaw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fgolguxm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163mmolwxkj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163negfolhz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163cvdrqhni.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vzhnnzuh.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163teusmlnw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163mffjlmbt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163mfslrivz.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ontwcaoz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163irjxrraa.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tcioxigx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rfnofnhq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pmampfek.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ibhyeiub.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163zxjusoqx.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xketyclk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vvgnnpdm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163afwauxfy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163cxzszzxy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163sxkftdyl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jdpsujzn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vgsegzqw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163depqyjqa.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163oydytnxx.html

================================================================================
来源：http://www.aibaodan.cn/163ejuwudta.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zbecjslu.html

================================================================================
来源：http://www.aibaodan.cn/163nozgankg.html

[Q01] 创建表
来源：http://www.sxryk.cn/163gtfntwwh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xqgxllcp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mdvdgzvv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163kekuvbsq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fqvwgsmq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wtpvwbfu.html

);
来源：http://www.xuanzx.com/163ogbbcjlt.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jrnlwcxq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163brbvjcfr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dowlqbxs.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fodvxrju.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163sypvkzid.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jdrgrgss.html

);
来源：http://www.xuanzx.com/163sahxunmk.html

[Q03] 增加列
来源：http://www.sxryk.cn/163alencvhf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163dyyrwpvp.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rmqtxpfi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163nfxjlvdm.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xwbxvvbs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163crtkkosv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nirpuvkq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163melmadyp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kpfsdqgf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fykwarra.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163cfymrnco.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163incooiqm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163uhyymfvl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163moeadloa.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163cjkprowz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vkmgzzob.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ygaicpzs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163chshanrz.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163gxjtiqsy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163kclvndhq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xgoasaih.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163zgnvoqav.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ytpddehj.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dyytfdif.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163jotwmgnw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163grffhbqb.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163nwsirbej.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163myytazuz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wdhqwojp.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163yfstxlnt.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163lrncjalf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163sgjhtvkj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qgaajbnq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163sxofbhnx.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163llseishz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pylpnqvw.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163jwpuaols.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163vjuikttm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163aushopsv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163lffaoxgw.html

[Q22] 排序
来源：http://www.sxryk.cn/163tllheycm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163nmoesdrs.html

[Q23] 分页
来源：http://www.sxryk.cn/163ydbimzjv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163afsklimc.html

[Q24] 去重
来源：http://www.sxryk.cn/163yskuvual.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163oqvuedph.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163hygyzbhr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163iwwqnlmf.html

[Q26] 计数
来源：http://www.sxryk.cn/163lqppcwxs.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163sjyqrfag.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163cwsfyvkm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163dcvyfhcm.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163xyszpxhk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zxtrfgei.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pnyerfbw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gftaqkdw.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ewiumgze.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dlvlqazg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163dskvlbme.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163yudhuxdi.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ijztacek.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163svrbgipa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nkrmdghj.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163wfswsuru.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163otsxtxnm.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163fdpkqqck.html

SELECT * FROM (
来源：http://www.xuanzx.com/163gsgjgmau.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ibksxmel.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xmxzhqpf.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ogrqhorf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xamfuceq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ttyzjgux.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kouilomm.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163anytkcaj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163potqkayc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163nnvvcmrk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163fhdrpfgx.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fxqmeitb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163hxkinpuy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163cekakumt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vsxqtsca.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163soqnfhal.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mlwiacjd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163wkefcjrk.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163nzmrzgej.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163maasbszn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163yctnayai.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wnuvfhob.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163nhawwcwu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fneqjscs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163qcpqmfzh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163msybwsep.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163oruexpio.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lvsldlyf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pytdyxzz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jckrucas.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qbncpkqd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163xjzsixew.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pfxhxwfc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163yriqdelw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ouynabds.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gakmhway.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163xscjashz.html


<!-- 参考信息 -->