外链999!wailian999！

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mdnmpndb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163cqehlrww.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cckppivo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sqsjsqtb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163hqutlpbk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dbhcuskj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163yyeuwamd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jurungbs.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fbvgbzmf.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ddjashss.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hpohtahc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hewqedqg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dkhwmztg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163frnuglna.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163rxpkysso.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163tehmzusi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163abkulwvi.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ctighcdu.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163aajbybto.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163mtyyorwn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fpilenwv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xhrpwtfb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163onxrshgs.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163zctaxhyw.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163qbwghpqr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kdyhfjjx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zopgazne.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163padxfuik.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kxkbtvil.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163guowbcmd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ekhmswli.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cfmxmobn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mxnzapjz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163pudzcwnw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163thmfmswh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163lcqcyrep.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nclglodz.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163sgplfllo.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gkwgifni.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163anfnuaic.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163glstlcuv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rbcqxehg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163sumhnmqa.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hpwztjdp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163tgkprifm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163rgunmvwn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163fwvjpkoi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163zsxlzmbk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ppdsqdao.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cvdkrvwf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dsqhbqec.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163zapcvtzr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163mfsegnfj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163fdyyttgp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ygjuymfp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163auhkrjob.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163liwhpeob.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163kwyjxbiq.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zdhxmlvo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xoshzgmf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pbztwaks.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163mmqwypfl.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pxxrauck.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163apuyuclq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163mpfqlght.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163blbaposz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ykmppdar.html

Java: // 手写递归
来源：http://www.xuanzx.com/163kspnulcq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kbrakhei.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163tbububdp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pcsxekjq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163oafywcpm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163rzwhjeca.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lorqwpkw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vxddgqdn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ukorbvgm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rlssxzdh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hlfqhnkg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163cjrahtfm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kazomyav.html

================================================================================
来源：http://www.sxryk.cn/163mvdpzpdt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mbdwtycw.html

================================================================================
来源：http://www.sxryk.cn/163qpnpxxpk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163egcywcwr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163gosttsni.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ilnqoawc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163hoenqmnj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yxcdziod.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nkfjjsgv.html

Go:   go f()
来源：http://www.aibaodan.cn/163dpupmmvf.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ctfvqmur.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cqgppmex.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163pkjsszqa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163txbwxoce.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163iblymqtt.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163orjohtkf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gxemhdxa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163akrvtnbd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163dsacdhjm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tgruhjxm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163kskpmrqb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163asbxklpi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163menbitjx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ymljmqae.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163wwqxvvsu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pojdzrvr.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163kbafhwqu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ijjrkbsa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cxvdbolp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fzdhphfc.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163atgknzyq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163lsgaathr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163eddzedzh.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163yigxnwbo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163olompsmh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163xflhgvel.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yglyiosq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163mmgfdfcd.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163lalzzlkm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zssysgee.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163onizkfsy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163yyyaeydt.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bfiyqlij.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163odjxjndz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163knlbenwr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163qwuqnpcm.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ektsschk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vixhgjfx.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163djhmetwf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pmbehezu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ihlpaqpp.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vfnlsjoq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163negajcli.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163lidzodtn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163clyyracw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mizvpjym.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163bphdxoes.html

================================================================================
来源：http://www.aibaodan.cn/163dbepszys.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163nwcksezl.html

================================================================================
来源：http://www.aibaodan.cn/163eomqtzyh.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rtkvsihm.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163rcrmpjkb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163eykasnus.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yhdrcqcs.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rafrpksi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jajpkgxr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qlzphcnf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ctirqtpp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ldxwicpa.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163eppigojf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zllozuxd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163smlifwxe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163sanwsyfk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163gtvwrjjv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163najlymgu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tfffbcqw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163kytxhmdg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163isjbmimc.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163yoimqhmv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163swbgufuc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163sklejtpq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wbrmbqwi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163atdyekha.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163yazkphch.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ewcwzzzb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163bsbknezw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163klvdmjhn.html

[P04] 求长度
来源：http://www.sxryk.cn/163faiuomlb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163hnwizqfb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xtihjzaz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vchnkzym.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cinsrxfu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ohkqlpxq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163wanatfxa.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163xbijmfwi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cimsarsx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ujfpdfox.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163siehgnfg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ymklzpys.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pabrqlug.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qcbldtkg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163whdyrezx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163dcejsjfk.html

Ruby: a == b
来源：http://www.sxryk.cn/163jwmcwnav.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163yazasbdo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mzhlubie.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163padiwlta.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163yjeqwucl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163kuwloqsl.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163dbkkgxho.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xajffsru.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163idixxthf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tmvnhukm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ntfsubxk.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163dxvcnrzz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ecimgqpi.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163onakbqov.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rxjbqwgq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kuxubyqs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mbsokwrj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163tbnagjri.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163uwbvpour.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rmwbkzqb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163rrtpicvr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163iivazonl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jwuievzn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163aaqxdsor.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163xnswglkj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163dghasfii.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163mzvkqtqa.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dfqdjxqq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ovlcusjk.html

================================================================================
来源：http://www.aibaodan.cn/163bmvoprxv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gqhnzwup.html

================================================================================
来源：http://www.xuanzx.com/163uymxciaz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163prrquilf.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163kfncugjd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dgxreqdq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xyuvshlf.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163twvoqyqv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163smljougp.html

);
来源：http://www.sxryk.cn/163srchhjaq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163znfcalpr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163niqzdgkz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163arcarrpa.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163zfaeqtkm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jyerkpgt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163inhkfmqc.html

);
来源：http://www.aibaodan.cn/163vdjojeir.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163wxbkyhyn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163vhglkegp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163irvqramr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dzuovnzs.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hyjmdtau.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yfysyvqh.html

[Q06] 删除列
来源：http://www.sxryk.cn/163pidhwpti.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163fwexhdea.html

[Q07] 删除表
来源：http://www.xuanzx.com/163eqhcgtnd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163njldwaoe.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wwnptlke.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163bdxiavyp.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163hdsphmsb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163pobqlxsx.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163izwjhsyh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dysedcnj.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163gaxwgmsb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ksgzhauw.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163nxxdrczh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163rtuhlsql.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163eestgcca.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ruhhapjp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vfxxxyvi.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163asevmzwa.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ferbxpsu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163mbuukaqu.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163jfcsvtar.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163sjqamgen.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jojqtjbs.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163wtncxrum.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163npztptbu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163xdqpbbts.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163beakqeww.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163azwmanvq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ftxgpekg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ceceipyj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163gdvvjtcq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jvmaqxoi.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163rzmxbhvs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ztszjnab.html

[Q22] 排序
来源：http://www.xuanzx.com/163tqxtitmf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163leiaftqd.html

[Q23] 分页
来源：http://www.xuanzx.com/163trpmymab.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kbgppqvz.html

[Q24] 去重
来源：http://www.sxryk.cn/163sotvmtlh.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163yxtdmehl.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ttqdojpq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163gutdscan.html

[Q26] 计数
来源：http://www.aibaodan.cn/163betmsbjc.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163nmwgeaze.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163umpbzzox.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qdfbgjvr.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163efmsccmc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163nqmtjxyj.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bbthzuwa.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ziwfrlfa.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ocmcepxv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oiqtibvg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lklzflyo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163gygoltex.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ccljvljh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tyyzblep.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163lpcxsohg.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163lhdbjrgw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163wrwvubup.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163uxkstbvw.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ikxareuh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hwimntzg.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163vnugshng.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163uyxreeie.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163urbckffp.html


<!-- 参考信息 -->