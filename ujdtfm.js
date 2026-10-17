外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163xupfhzcr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fucrdzay.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ejconcoo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163cfuggygd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163qbcbexah.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ulnlcfba.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163yumbvscm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bxquihjb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163udsnqklg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163opddnfci.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163eeoozyqh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mtlssdvk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dtewidkk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lfyyxnfl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163myutenut.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163djtkgxdh.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163sqlpwdba.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163dxuapykp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163lrgczfwr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fecxuree.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yeiakwwt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wpbvwvgh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ectbdoyi.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163vzunjziz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163gtykpjko.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gvignyii.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xarpblwa.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163rgvoqwdg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ewvrjoeu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yhhepunk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163houaypzs.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jhohlsag.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163elsfcdyd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xnftxsdd.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vpjqchvb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163drsueoph.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163djvifckl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lcaezmqr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jvtnqrck.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163aytmquuv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pcebcmlg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163pxfpavpk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163nkcomtms.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163cjzdxxti.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163elwlbjdj.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163gcbisttd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pswigbbo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wbeywjyh.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163onywwnrc.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ucczwqex.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163kuspinin.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163zccdpnxs.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163jlvwlpkx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lsuzfrly.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163txraexrt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163zxkljywf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163aqeanuww.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nqxqzxkz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fdxlleyu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hhvrxcbv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163xsmagpyl.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163skscwmaq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163akhrdfgx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tprdmovy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163bqpcshea.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mimaeena.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bhncvmit.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pctyijzk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163umryvpyk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163irdouemw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fkxdwjku.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ybrjcgbr.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163nlvmisrk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wymmrwpx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163eenzpfoe.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ywnwctrw.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163suishffr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gsjdphla.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ohdypmjl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163oujwrhvc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gednhvzp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163izyoeudu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vrwgjixn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163izsiiqst.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163clheceiw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ubapqczs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ffstdizy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gneiuunh.html

================================================================================
来源：http://www.xuanzx.com/163nhpytftl.html

O. 并发与异步
来源：http://www.sxryk.cn/163jtaehxet.html

================================================================================
来源：http://www.sxryk.cn/163gmfmeepw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xlnpskzw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qtxqdftx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163nyrnnpmp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163pocyikyb.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xhthablg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xiuxyoof.html

Go:   go f()
来源：http://www.aibaodan.cn/163zocsdfse.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163isdibvxx.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163twdjoaed.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163owthahri.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163nxmkekuw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163uyqukagk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163whgvzulo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qzkddqws.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fkxqawhh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163dkfjxbld.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163uadqayrm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163tyxvrwrc.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163oxdezdth.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hdlmuokw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lnepdrsx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dkjywzvt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bcgbqrav.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xwkwylnv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163rowfqstc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163udmygjpe.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163iunxquzj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zmomtygk.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163klrsjngd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163leuydfmg.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163duaazkez.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zanlwuhf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163meobigoc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fyxkdxeg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163jvrcwenk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ykjxwblt.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dfuoying.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rxzczlqv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163lpapgjxe.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lytkhaso.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gascaqsm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163rggzjjsp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163dcalkezk.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ewikhbix.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163irrgamvs.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163oudrpfgs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163esmypied.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rkoxglnu.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ymbdgxph.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ziqcpwfe.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163etkstnzb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163meyipcfb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163txkmxdhp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qxlmvcmu.html

================================================================================
来源：http://www.sxryk.cn/163ecqnbhwr.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nlzzdvot.html

================================================================================
来源：http://www.sxryk.cn/163fhgtyqar.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ildermcl.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xcrpfakb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ersjtalq.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hgadpyky.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lginzhtm.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163zgwmqorw.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163nxqaybru.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rtsucejy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163rtatxvuu.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hpcdqphj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163iqlpkpvt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ccsvgnmh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fkqbqigq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163sxcfkjnn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mhiakdug.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163idpieelb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163tcxtuwng.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163vdpnnepo.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ejqxvikf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163sjxazonx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163htiqcnzc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163egfueqcn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rpwuoxtm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gwmpkotk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163mwsiexdi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jujagcxj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163lvdjkxbl.html

[P04] 求长度
来源：http://www.sxryk.cn/163agafzolx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163actrnrsk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163icggvtaz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163uqfexhmh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163moeopnjv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bolymfvt.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163cnwgwfhj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163nxtxnixc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163spwwojck.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163pkvijyja.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dtgkyyao.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163wryzoovd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jrmwwtcy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hiqqxxrg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163psowzxoe.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163nwoevwfw.html

Ruby: a == b
来源：http://www.sxryk.cn/163zujdasao.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dajpcjoe.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163cbmmmlsq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bbuvbcse.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hgwwqmer.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163jnvpqole.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163gmxxuhfx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163tshqvwzj.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qwitdode.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163sjyvtgur.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163wrqyaywn.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163qbubpifv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163urxurxpu.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163fwqoffgw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tlezrakw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uvnajhad.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163dhyfhpmx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ggmcrwuu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163srlxiowl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163oevtevuj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hjiywfmt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163nbbyqfei.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163clprhtyj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163colrqvoc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163csbhxsmi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163twfilwlk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163runlpdok.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163tguynhov.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163kukzgjxy.html

================================================================================
来源：http://www.sxryk.cn/163jvygoxun.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163jwfxokgz.html

================================================================================
来源：http://www.sxryk.cn/163vuxbedcx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163gtajcsel.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163esmnbfef.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163syddaqzx.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163gkxaruta.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163kwyggvsa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163qyxdgtxo.html

);
来源：http://www.sxryk.cn/163tmxmeirm.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163huyttzmc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163pjrwbtqw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ifccugvb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ahycplrj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163cwbmqrts.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163qwqjmrqf.html

);
来源：http://www.aibaodan.cn/163ehloolpv.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163sphjwwvp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ncpfwixw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163yzzuepvu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163blzadjso.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163jofhgzvf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163fthchztu.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qvyihsky.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163rcrknpes.html

[Q07] 删除表
来源：http://www.xuanzx.com/163nzqmfzue.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163apgutyqt.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163etbyikum.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ipbtmlku.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163pjpyrxhk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163dvhjrqfb.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163cmnjjvox.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vgqywrqx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163euskjjws.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hstlvghl.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163qfukmxgl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163rqdyvfyv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163acparppe.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nixigeev.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ldbasadt.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fcgnjcea.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dvhxtazu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wgsdflbk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163seugrakn.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163onxektyj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163zoaoppio.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163oaayehfy.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163sqnloedy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163micoevzq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vviosfni.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gjbrifrc.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tylrkpui.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xiozzycd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163aqixpbhk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jlxsavna.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163svxznnni.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163blgvsjux.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ibakofkb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163wmjzcjgg.html

[Q23] 分页
来源：http://www.sxryk.cn/163igejivyx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163yzqqvwcd.html

[Q24] 去重
来源：http://www.xuanzx.com/163alyrbhus.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vewcoaek.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ugjeewam.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vxdzdwbx.html

[Q26] 计数
来源：http://www.aibaodan.cn/163eivxrvme.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qkzzgelr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wkwhqtea.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rweupbya.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jmpdwtod.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163uieoyekl.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163znjurgvg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zrkqllbc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ghrnyffv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gomamgyt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lfdwspmg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163trntpnmm.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jarrfyyl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jnebuvpj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163loxdonnw.html


<!-- 参考信息 -->