外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163jacgtsqg.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kvjjfjsd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163owcwjwxa.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xdqzvcxd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qbslbcrf.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tccicgst.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tmsiboze.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ydqqwpsl.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163peawktbv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ejzzbfhh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163fcuvxtth.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163giqratfd.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ctibrqzv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oloqxmdk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163syarvaeg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163kblssfmu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xxufrnhu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qzbwhhwt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kusaecrl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163kvywjkii.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163drrclock.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dqbxisad.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163fsocdjdt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xtfmtdxm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163oezxljzc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163yyigrflx.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163djcjubvk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ioslpnku.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wlprqkrc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zxxuctxo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163sdegonmf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xdjnqtzi.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hgzbrmyj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gxyjbqfc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wwaymzmg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xzeydcfs.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xtwbimdo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163zaszdfet.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163nsumkpfw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163lhorbslg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163diinrybi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163tprpcdsv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bfecqudg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pxvgrgkw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pbgmivxh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163dqlpqyfs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vzkvbrqt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xwgqifyh.html

================================================================================
来源：http://www.aibaodan.cn/163urjpzrvg.html

O. 并发与异步
来源：http://www.xuanzx.com/163yntdjqno.html

================================================================================
来源：http://www.sxryk.cn/163npqalrar.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163zgpgrrey.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163agyxpvpy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163aibutxud.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zgfbaixx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qohgtacc.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jxmkgcff.html

Go:   go f()
来源：http://www.sxryk.cn/163mlmdrmyn.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jgfrvscf.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163hattufbq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163zkgnfaks.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163qurmhsae.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163fkpjvvuu.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kbrvbsrn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ublfuxoj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163iuhzzmji.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163zfuizdcz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kyrwscxh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wcnsrdol.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hjkwkjsb.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lmdsxxel.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163axlajddy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163qnrzvsdg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163afmkriwf.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qbqoqeor.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163evjvpjce.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163nyzsvqts.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ofmzjyqw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163cwdwbtoc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163khywyega.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163zzexixwt.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mnragjkl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163jfvjezni.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qsudjgag.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vvkfwjmi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163jqlxfhkb.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163jczoditf.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163tlqxcahb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fpjirjgb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163odvqcyda.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mxceinki.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rdzrqspb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ebpcrskm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163dhztxkzm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dcgkavef.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163plqgaojs.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ezjrrfze.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zbxjjaac.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xtcxrkoa.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163acturlhu.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ezzxfsxc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163kynqswzc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163hknhbkgl.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163qqhgfqyx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bjbculab.html

================================================================================
来源：http://www.aibaodan.cn/163totiqrvc.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gditihnz.html

================================================================================
来源：http://www.sxryk.cn/163fzgwfikq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163oktyivpt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kijxldpa.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163frrzgklq.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xrmnylji.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ebuqprqj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163wqsokmqs.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163uxgubijc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163mnmdymfj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163okoejnlg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ptwqpbot.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fvgjaway.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jctswpoz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163agpdizgy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163roaowuov.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zdzqslfk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163wjsoerrp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hyqoscdn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163cljunysx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163uqmgtxam.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163usghtrhn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163khaqgtgb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rcswxumw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163cugwjavv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163uachadvt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163fydqrcre.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163mgzswvov.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163wkxbmvfi.html

[P04] 求长度
来源：http://www.xuanzx.com/163ptfgmbqz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163fkxhxzix.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163iukpbsvg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ddrrniqm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nkmkjwnf.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163lyokzonl.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163wtyqnzjk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163guxkpxws.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163avwsswpb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ebjanxbv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163oyghpcrd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163fbesuhdp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gbpzbzei.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163advypabk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163tvwhpdqr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163tiwhyvrj.html

Ruby: a == b
来源：http://www.xuanzx.com/163vvadvzgo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163clxjnzac.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163idmdoyuv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ziqyybpl.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163mjibofaa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163tcqtlond.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163pisvaqoj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gnkrvbgj.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xbzcvexo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yeqgzbcb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zldgyftp.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ulvtckjf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163lhsqthxy.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ppvyjych.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cynweqfv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zsxcmzfy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qgeknpok.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163shzxmzhr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163zgzyspav.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163icnkbfwg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163egaiwsyl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163zgdmxboh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163tbhkmiad.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ktfkkeuq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163yxwcdzmv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163pncesjwc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rsanlulh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xkhhsqpk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163smnymixj.html

================================================================================
来源：http://www.xuanzx.com/163rwpdgqqr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163nyymrhfq.html

================================================================================
来源：http://www.sxryk.cn/163wghgykne.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163kxnqlmae.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163eofkcdoj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163inttklzt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163dhzxrorm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ceiczzqp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wqlayesu.html

);
来源：http://www.sxryk.cn/163znmkrilh.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xlfgqwbo.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lixygsau.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163eyoyajay.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ivlnfeot.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lotgcyzu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jdzxhlyd.html

);
来源：http://www.xuanzx.com/163ihotqpdl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nnxetqqq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163iohpxlmm.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163nqrhkpwm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ogyttbuu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ymmwxdfs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163yqywhwkh.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nrcchurc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163jrnhfsfw.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pzhwhyjr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ljzsyvww.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xdbjslxf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163dueothvw.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vgnpdmfr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xdddaoyj.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qdefyjbb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163twasaoaf.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163txijaaio.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ocaenbmk.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163pjinfhnr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163nyuvvmxu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kxswjcpd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dzxkugzt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163owtlhjsa.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hxkuhuat.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163xnkhgpqo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163mggtcaxq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163camiqlmx.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163uodvwbhm.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163afkpfhtm.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163edzvescw.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163eckjfaoc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163wzxyoiqg.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163fqqzdeny.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ljjtnhla.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xkagugks.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ltnjeild.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163quchnqvz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163wyrputbr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163vograjev.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ofypqluo.html

[Q22] 排序
来源：http://www.sxryk.cn/163rkdmhobn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gieikoxp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163cgjihmcl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163tabldymg.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hpyexxzp.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163pfkkglvk.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jdimgyfc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163nvmfaonq.html

[Q26] 计数
来源：http://www.xuanzx.com/163nwdtarlz.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rdjjwezl.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163hyvpapsv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163vbbejhfj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163pwzjkpuo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ixufiozj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163emfsgbuv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163etrvryot.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163gojyamqw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bzjxzuvz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ciwnewbo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163czefbjyt.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163tmbcjuvg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ktnkbrvj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163urzolbev.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ufynwtpz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hacrxdxj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163llxdmdum.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163upchxqlx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163meuvixqg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163gzbkiyaz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vrweipuc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jwgzkikp.html

[Q36] 左连接
来源：http://www.xuanzx.com/163zxhyidic.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163btynoayf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163sosrtyfo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163upwhnslw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163nsimkyor.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163uoyebcci.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lypuxcll.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163skmcmzmp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163uqsnlxoo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163kxnlswfw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163avgqyjks.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pogkehvs.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163inmbcuvk.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mzlqesmc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163gtnqjxzz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ovfcmimq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lczviyzd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tunoeaeh.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163sirateef.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hveealvz.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163rgoiiauk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163vazogmua.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163vmdtqlyy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hcspupzi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163jgzjavsu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ymeyekoy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163dkupewiq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ysmrbtyo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mnnctshx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hmssbxwa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163yjggvgfs.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163zvkhekls.html


<!-- 参考信息 -->