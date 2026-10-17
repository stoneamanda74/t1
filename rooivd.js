外链999!wailian999！

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163idwyegoi.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163iizvmtcv.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xofxrqms.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nchmfssy.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lldldvle.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163khteqvgg.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jgoqxoan.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ssmijpkc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163dguzrbxw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ikxhqfkt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163innvgjww.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163xkpttwlx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163yqgmxbnx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zjjyxabz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163vlqjnvpa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163eykqgiiw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163npvwfhzk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163osejdpqh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163gcwnauhd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163wcfxlppo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163pojygupq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163etkkszai.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fhhhmpmv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163cqfwxdpr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163mkfuifcm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xfzcubak.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163syebfrpw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ojudktkr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wwrohysz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163clwamiuw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kstxxtau.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tovjcvan.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163odlllayi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163uebrecdc.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lhchhgev.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ixegglig.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163uagiqsba.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lbsnscfz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163glznvpko.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cfdwltke.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163duoyegfk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wpaisdnb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163rxrbdhoj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rstpdqxe.html

================================================================================
来源：http://www.aibaodan.cn/163vrmucmvn.html

O. 并发与异步
来源：http://www.xuanzx.com/163mlfdvbxc.html

================================================================================
来源：http://www.aibaodan.cn/163mueclsep.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hattnenn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163gayvvyrz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163nvciteig.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hiskywkg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ymgiipbe.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163pfsubokj.html

Go:   go f()
来源：http://www.xuanzx.com/163pswqtjzs.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hmnpoicm.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163hcktpbqo.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163eouxaspy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163usddmcks.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vbnqowxy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163aavqowic.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163horremeq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163xjfybajs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mticbkqu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163djdpywkd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163doxmomkv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ppvrrcys.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fsqyhrkq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163jmpjdhxt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163oujcudkv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eilsqjhd.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ocewqywv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163dyzbpylr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163evvzjpln.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pkvfhojp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wokuxghk.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xatvachx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163iknqtfbu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qsizmyvv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gqaeilee.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nvflneto.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163dikovzag.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163paqbxwqp.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163cehqslzr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ixgrlrel.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163sfasaahr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163hkwjjrsi.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pruemfyp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hhmxzapf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vphwwgoe.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163htqgunqa.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163hmwzpoyy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163htiswjas.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jyzesyih.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163kmbkgwfq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xsylzqoc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yhonbmgy.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tbbrvvpr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kwdgswmc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163nzguirim.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163babvnjia.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163colvvyrc.html

================================================================================
来源：http://www.sxryk.cn/163rdjkuesi.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qiiqamix.html

================================================================================
来源：http://www.aibaodan.cn/163otedowiq.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mmggfkpf.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kghvznad.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fvenkztl.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163erdcgrov.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163frpsjunx.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163pltqxais.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163woxzhpcm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163dixfsdei.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163mqconkkz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163edeassir.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163soctngmp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lfhhjvug.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163zeiwjovn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lqodnxrh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163frfokfxi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163typpyyfg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163vrfgzacw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xlqcnusu.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163sbzjjucm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163pkuusmrj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163titlyicn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vxbgedkn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hbyxbqct.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163euwbucwl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163wdogsuit.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163csvmijyg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zxztlvtw.html

[P04] 求长度
来源：http://www.sxryk.cn/163wikmucyv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zwdgifep.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qzpoezti.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163alrefeqa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163saycplxt.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wogvhvrv.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163vycxrfnb.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vzpnbbpq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163jnknimkg.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hsxlefie.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ejzumduy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gjncjugb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wslxgzvk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163rwfdlrxp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163epizohip.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ncywnjjm.html

Ruby: a == b
来源：http://www.aibaodan.cn/163kpzliuer.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qidwvdsu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163etdzzflt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163yfqwljgz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163byghgrlr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163vpwqvbfg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163qwnyravv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163omigtwqo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hczveeks.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163fzjtpkkf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163cyrrjyle.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jbdbdpgu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163nwpkwnqb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bmtewqtc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xgdnzzte.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mcsofzjr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163pekicpog.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163lircbdar.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163yfizvzcf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163bhwjydvl.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163artgsnhc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163uaxwxxoi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gkhhosfy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bbcerqnl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163eijpmrjt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zgjruszv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ixkxcvzx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jusdxwfz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163feqdxgpo.html

================================================================================
来源：http://www.xuanzx.com/163dsabflgl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xeeugcxu.html

================================================================================
来源：http://www.xuanzx.com/163snxbdtyt.html

[Q01] 创建表
来源：http://www.sxryk.cn/163aszvivqi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ogepalaq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vqthiphj.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tjifwfis.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163baolnsvu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vqipseki.html

);
来源：http://www.xuanzx.com/163ierwfwtn.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wyxmdtaw.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163afnxjacq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ilttubnz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kppmmxyg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163fkdwchhp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163pbrgykmj.html

);
来源：http://www.xuanzx.com/163wvsniavs.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tocrmexq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zfiwhuyz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163hhpfdecn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163encqjnxc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163gvtmveep.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163nxjjvqay.html

[Q06] 删除列
来源：http://www.sxryk.cn/163dizbcgnt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163zczxpktn.html

[Q07] 删除表
来源：http://www.xuanzx.com/163spyelgxj.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ulnblpim.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163okdtckyd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kpbqxbuz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163cyktatji.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ibgvisqf.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163zezxlljq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163cbheowxs.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163cswsyqac.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163djbsvhqf.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163oudmjvvl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dqvfwblp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cvtunhfe.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163lsozwcri.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163imupkslu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163mebxegll.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163krvmkehh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163kxloqliu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bepiaoum.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nnpnqzsq.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xlkoejzo.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163bezqpafz.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hembhfjh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hmbnndtq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163gzpddclx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wssvbmge.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xampsfzi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163twfbemzo.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jmffjayb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163rkicnpbr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163alsqdjlh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gpkmviht.html

[Q22] 排序
来源：http://www.sxryk.cn/163eqcsrhtc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163zrjhjzpi.html

[Q23] 分页
来源：http://www.sxryk.cn/163wionakhe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163fwbxwlys.html

[Q24] 去重
来源：http://www.aibaodan.cn/163zoyrfmqv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163fgwgxtuw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163rwzqrfqi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163lljngrvr.html

[Q26] 计数
来源：http://www.aibaodan.cn/163lkborkwo.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ldyqoiyi.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ctgudxza.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kqpmvmdy.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ydqhkhqk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jeucekhv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ecvlbgtz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163phxprbxl.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163zieyidqx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fsksdirq.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163kptvrqwi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vweexizr.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163rsqagvyg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pgsiboco.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ntolaxmi.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163iyfidmrw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mpisbjfr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ilibqleb.html

SELECT * FROM (
来源：http://www.xuanzx.com/163inmtfyqj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163frhpitvt.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163tplzbopq.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nbrzszmg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163chvtnhpt.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mopukrzd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hseoagxg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hgcjrhfw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lsndowhh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fdgecyct.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zypjmtlo.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163uaseczfl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pgxbogcp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163akccunys.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wzmgyrcp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163orfcaayb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163tdvxzbcv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163uzyxzjpl.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vcdokzhf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ldggddkp.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wxqbsibl.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163gbasidwy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163sdggsrkn.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163msfuolrp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163oxywtfnw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163prllklhd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163cdlpqkpx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zcdnryhy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nysojjay.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163uiviwfps.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163naikoosy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ghyzfkom.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163nqrzdvyv.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ogbutqnd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163rrwhnxte.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163nybiwpwx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ydrttsdk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jlxranvd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163hlxpvill.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jfajxtem.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163tsglajqa.html


<!-- 参考信息 -->