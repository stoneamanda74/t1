外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hpkryuwc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gdqnkjpu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163kwyxinhs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163tmoorqlv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163wxrtyokf.html

================================================================================
来源：http://www.sxryk.cn/163sipoxugo.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163wdwbdqef.html

================================================================================
来源：http://www.sxryk.cn/163ofpqftut.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163kjiylodv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tmwxcyle.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gbqchsst.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163emdgkgnd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jyezhach.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nmeokfwm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tpscyqck.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163xffwvlmu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163wpsjfczy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rnntlvck.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ycefxidy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rkimwstr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163iknvyahz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zszrtvwd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163pwasmslu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163trqtwdrw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ptvdbhpa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jttdgvdo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wrjxxxkd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qlrxxtig.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xbfeqbtj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rjjrnfvi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163czengska.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163cqlgozob.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bqgfkebt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163kuzvpisg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163nvuazkff.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ffszkurh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lnxlcntw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ktoopcts.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nhuhpwwc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rhogyxno.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pvkhcpxg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163oddfxjaf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tbvxanqt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163rqtviufu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hjfxsmog.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163whcwefja.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163bkpuydqn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zwwiecch.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vrwmmxuj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163vttayenh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163cfumxiwk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jcdoybxe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bxaxuqiy.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vfavpzyw.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163espjysub.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163xplotfxf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163chibcwcf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jibaldeb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163hczynltg.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163znvapobz.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163dbmnjcfu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rnpzctlm.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163pydndhji.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163oihxnoyn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163hqofqusd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gfjtkeqe.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163chnkcrgn.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kakmqccu.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ppzgrstf.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163tyorqwsy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163iptwlpbp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kogjxpmn.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163updtsdwo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163onvdflra.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wcmizewk.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oisqyzem.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163aqzwnjys.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163equazhbd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ltieqzvp.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163jrugzhrt.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ijlmztky.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gtiqdqrs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zfhyeaga.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163sdlhobeq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ddxsulww.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163pfmzfoyp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163bsyggwrv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163oybkrlie.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163dzdsoahw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ziplagyn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163gmzbcyvq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163yehgutlu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rgifrsmx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163foxebndv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163tyepvgif.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163fhscbuya.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pbhkfszg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jidkixbo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gtxokfeu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ahurmjuo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163thyqfvms.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bhbhjaru.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163roovqqor.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163njxjgtuj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lxrapczx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xahgnxuq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wqulivqk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mddvfrpo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pvaektid.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lrwnjkpl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ivffejdk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wqbygzvy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qbbahkxj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163lkrcwjlr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163kiuexzsj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ggigqpoe.html

================================================================================
来源：http://www.sxryk.cn/163rawnwnub.html

O. 并发与异步
来源：http://www.aibaodan.cn/163pjmkqtjl.html

================================================================================
来源：http://www.sxryk.cn/163qljqwbxm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163btntfhgh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163aqrfwtga.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fvszvswh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163yumlhjzt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163btzhaqwz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163caibbong.html

Go:   go f()
来源：http://www.aibaodan.cn/163fstylxoc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ieiypehy.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163aiqmuhwy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mcedgtsh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xmivgmhn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nohaxamk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hqcbxhvp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ogfjibmf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163egcjjsbr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163zfjvrykm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nkukzcnn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163zvcxluti.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163iwjlnaph.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hlpwenjx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hpawohop.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163buqprsgb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pagwtpnu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ngynpokm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lleilggx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kvwuokfh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163syqugxcg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163affezaze.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kmstidgx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vscamkdn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163znmqdpqy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ckzqdyzb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163bqsyogyg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zpwfoaog.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163hijoctyr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ceusgduc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zckicdhh.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163jjcpxxim.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163zjpbrpxu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fpougclw.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lkigxymj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163tauqiswz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163qragdksw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163hgxjwzvh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vekbywtv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163tquzwkgu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rduscjea.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rjpodbdp.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fggfibtl.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cvghxfis.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bpnklett.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wezsxvtg.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163yixusnac.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163cqwsksap.html

================================================================================
来源：http://www.xuanzx.com/163zegkffft.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bpsbapko.html

================================================================================
来源：http://www.xuanzx.com/163pqfndmqf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nekcpizt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163czbclxdg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163uvwdfmdj.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tekkliqi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ssdacgfm.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163twyuzxsy.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163zgjloosz.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ftdgrqjq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163pxydrsav.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163kaambuys.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163wtiitwkh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163cuaswesx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163klhdopks.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163otadsgis.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163cfnsbryy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zoxplfqa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163whajyjmt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qrzcpkgn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163pvqzcyrb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hamiiqsb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163wjopnfnw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bfcpnqkx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uqkfnvft.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163azgpplnv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163zlvlekoh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ofujyeyy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mlkzizyj.html

[P04] 求长度
来源：http://www.xuanzx.com/163howpzxzi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hvfsjmwk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hldqaabr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vjtxzaik.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vkykdgxb.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163kutabzlb.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qhscmjwb.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ojfryugq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ksmubhif.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rhoizjhv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163rrblpxxi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kdkopqza.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jwiesiky.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kkvgptqi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lriqndja.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163wyzecwef.html

Ruby: a == b
来源：http://www.sxryk.cn/163ewcwqnbl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163gxiikcrk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163jsiyazfl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163hhpdyzeh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xnlyxuob.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163wwblccwe.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gnjmdgnb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pyjdmlvb.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hrgfwyiy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163hrrkbrsy.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163yvwplilo.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mtgutnzd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163jtqzosxs.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163pjvirbox.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ialcegwn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lcefqhqe.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hvxjctyy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nsjroocs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dxgwclgx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163lhskkybn.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163gmuuyfxu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163vgnkwumx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163rvkffxtr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163kochcqbr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163sjffwxhf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163wqwxilrx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163yfjogcgl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163bbowqtwf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163bsdhwcmc.html

================================================================================
来源：http://www.xuanzx.com/163dkkrfamq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163nmvnfhfs.html

================================================================================
来源：http://www.xuanzx.com/163nckslibi.html

[Q01] 创建表
来源：http://www.xuanzx.com/163jkbxnadn.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ywvqbjif.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jwdvseqc.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ntlvyjmg.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163rdxwigzt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163yrjsxaew.html

);
来源：http://www.sxryk.cn/163wiyjegkr.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163yjknrdfb.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163inymsxzn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mhtfmcgk.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163xsecflhq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163wzvfuqoe.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ohgtkyuq.html

);
来源：http://www.aibaodan.cn/163smqccnqw.html

[Q03] 增加列
来源：http://www.xuanzx.com/163iwuiipnh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163rpmjnlkn.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rfsaspzm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163iiyrwdmd.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ssxklykl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wcndutek.html

[Q06] 删除列
来源：http://www.xuanzx.com/163cyjzlimi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dceekupx.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jxqgfznd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163dalfkijk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163mgrhewoq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163pcspuwsi.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xxrlkkww.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163paltyvsg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ylstmjqg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163trauexnv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vwfvocyg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ccqvoelt.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163bnsypczt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163oowpbhrb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163irntsydh.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163vurrhzhc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vvarvulw.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ksbsmsxn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163aorpmcpn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ohqqiopn.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bmqhgtjf.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163oqgmsvql.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xanoduky.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fdqvqvlq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nzzfvuhm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lgfgdkec.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163rsdlplch.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hfnztxzl.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mesocpka.html


<!-- 参考信息 -->