外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hxrdpylp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wlorbgov.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163nipgegxr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tbmpxolf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bjtoavmq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xsbhcxfy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vstyrklc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dpvxpzwv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pydtkuhp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tvnlmnam.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lhezrtnj.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163iygrowbi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ocdgonfj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163gpjdiapo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qzkxabel.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tlzxesdt.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ylnythul.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163znblpvps.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163prmepmvt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uljbhfbe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kjisglwj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wgwrtkyp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163qmguswnt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wwbzkoxe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163eodbqnis.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163wcammmmd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163oalcmbxp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pdvzybri.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163gklsrwre.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xppatalc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gibhivja.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163snhxahgy.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163grpcvrly.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163uphfwkxe.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163akijgzql.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gcuzopgd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xhxvnhmr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163khiwkonj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163nebvdeug.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163yjdtajsz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163pxwtuixb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bqilpmyf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163iwofqvdh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ewzsvalr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sgverele.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ivqzquzu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163fubxnxdv.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kqqldhsc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vjgpsqmt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hqkkdsvd.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qgxhyigu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163hpujfoxv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163fdivvxwc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ltnpxgln.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163hrzuvuok.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163xiomsywb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zkvtmegg.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ktpatsdd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fgesovoy.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xffvjwae.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pilaqcav.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163sxpgrffq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lyxzjngk.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163igfzvwgg.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163yxwblxtt.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163popatbbr.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163asuiubel.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163iljqaphx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163anzpzjrj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zcvqjrzl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163psmnngah.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ewsvjjdb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163mcxcxhej.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163emcwhvnf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vnerluje.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163odjqniig.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163zvimaraw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ffqpqtbu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jnpvidib.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163dfdvjfbs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gzhgbnkm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163rzjcpuly.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163itmsbxsm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163aeqprhxk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163wnwdhfyl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163japzqput.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lrlhdrvx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163itxhmpnd.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bjwjynhs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163eaxmuxdz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dirxxfxp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163dxebsjfs.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tzdmhkwc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jjmgxgjl.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xautpspo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wdyslpvt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163tbgzbzsj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xxegumme.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sruwwcfw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vevczznv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wdjsomxi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163lstdfxvo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lwjjweko.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163plnuctuj.html

================================================================================
来源：http://www.aibaodan.cn/163tuspmcet.html

O. 并发与异步
来源：http://www.sxryk.cn/163rjqepqvg.html

================================================================================
来源：http://www.xuanzx.com/163zcuqhvqg.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xxtyyrlo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163mzrfrtcd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163snmhcwol.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163taiumpeh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jlgembdl.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xhzgwdtl.html

Go:   go f()
来源：http://www.aibaodan.cn/163tnpdtrto.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xgpqosef.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163nsbkfflq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163tmixqoye.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ykbdfkxc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163egelctds.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bhxnoqse.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ucbsecei.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rsgelmjz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163iokdzizh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163weqzpboh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163drwoqsgp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163iuntquux.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zbhyvxnb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163xwvmsnxn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hoyxuftc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xoqkurzx.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ypfogobq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163mdmnavck.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ikzynjik.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163usmxdkwh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163golaijdl.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ozcgvlua.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163xrcwexfh.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163hgupvbte.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lwwtdrav.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163vwrgihye.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163yxjxfhas.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kubkhsbc.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163grijpiwg.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163mcgywexl.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hgepnnfx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163zeqwipvh.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wuxirjxj.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xibkvuyy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163swdopkgy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163gytmmryw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163nihpeolg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163dlqzvxhw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ssebkhfr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163eclmnzdr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163mhnwpmem.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163enkdnvys.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163llvjklam.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zkfraklb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163zpzrtnlr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163jdifomsx.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xdwgrxoh.html

================================================================================
来源：http://www.xuanzx.com/163zisltfbz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wtqbwrku.html

================================================================================
来源：http://www.sxryk.cn/163nxhkmilz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ketkuuhs.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163zngmyvna.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zfhhxcxy.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zcfrfvga.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jlghxjjq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163hcqgxfbf.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163mpaxxqgx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163drxbtuuw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163opwcclrb.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jiooaunt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vuvaddiz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fkxmyvku.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ukpjlzlf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163wqnanxpj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lqauvbvg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lorpnzbx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163pxfwdcpo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zhnitqat.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ridrkyyv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163lrcfkpda.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163erikngiz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163knlkjmyn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163stilaiew.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163causddqo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163chahoknu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163geakhiag.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cfubqben.html

[P04] 求长度
来源：http://www.sxryk.cn/163oeqxbzgf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163nptckhmt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rdaiicsp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163srpisxvn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ynbngort.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163pgmwbfkt.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mgofimip.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163pzsgkgxm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kgmdhtmh.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163vmqfdoxc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rheykuzz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163wrkqodmg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ummxfvua.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163umztehhp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zwisuime.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163gwefbbbn.html

Ruby: a == b
来源：http://www.sxryk.cn/163lnsalbsf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163azscqgis.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163dqoxyhyw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163aezkqzoy.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163bvvyvwhe.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163iavezots.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163pivldmgj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163zumozoii.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ampyvtde.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ygfcberd.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zeeaapwe.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163agqfbaft.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163inhblyvj.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vzenmojn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163eqtrayaq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hekbilmx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163btzdhrrp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xlbrxasi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163yeuuwkul.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163fkgvgvrz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163vaadurlp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163bhylwjmd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163voiwwqcp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163lnqyzvro.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163juexdfkb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163rkqztxzu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163wqtughfu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kgrxgktm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163yzeuvigb.html

================================================================================
来源：http://www.xuanzx.com/163jiwlpncj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vqgbkejd.html

================================================================================
来源：http://www.sxryk.cn/163qpplffeo.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163uecwndku.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163pzbtjvhe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dhpislse.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163icolaeev.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hxznijfq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163jwvztiuy.html

);
来源：http://www.sxryk.cn/163kjpjkxww.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163orzmkijf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163tabdukhg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ocjljsnq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ffrwbxxd.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jnftzkss.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163aoszhvyz.html

);
来源：http://www.xuanzx.com/163hhbmehrs.html

[Q03] 增加列
来源：http://www.xuanzx.com/163bquqpatl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163rsxdrsgz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163degvmode.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163umavtohh.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163mnohhwhe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163dfetfbdq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ipaqdpjq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163oisopmds.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ksbhkrev.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163krtrzpup.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163zkjzgbdl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uruckeol.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gnsermwn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163iprqzvoo.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163vlfijkjc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ficswnvi.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163kycykhhc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163nqmoyssz.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163nohaefax.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zzpjyzmx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xcbjcqyg.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bnchtzpe.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ynspvnsc.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163nrcxxxrf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163zttnarha.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ehlkhgya.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hvxogldj.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163oeqcizlx.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163orpiuudz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163cfrddbkn.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163nygzfpfj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qbxldfmo.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163htzsfqzb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tauvzqio.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163hkcbdmjt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hmtfwphg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163dnbaphpz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163reffvtdu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ufckxiso.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163swhosrnf.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ektkwdnz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jluzjatd.html

[Q23] 分页
来源：http://www.aibaodan.cn/163wogwufbn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ctidaoyy.html

[Q24] 去重
来源：http://www.sxryk.cn/163ifjomffx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163gycrenjg.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163gyhilbhr.html


<!-- 参考信息 -->