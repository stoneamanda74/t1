外链999!wailian999！

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163douqjieq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ecwmbsox.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wofmxcjt.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kagkzmlb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wmyasgax.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163isyexftc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mshmuxru.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vcqdutqk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dhjmuiqs.html

================================================================================
来源：http://www.aibaodan.cn/163xoxopand.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ajevhvzy.html

================================================================================
来源：http://www.aibaodan.cn/163ywgxfmyg.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163dmevkize.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yqadwzzm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163sbhidpzr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kkhwhbhf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wjrqhytu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bjihybeh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jydyhety.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163kwuaflea.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hyblcxjo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163txghogzi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dzxvwoya.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163bhiszswo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wsjqaoff.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hlhrymrl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wnucliwp.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gszrnjoe.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xftxgfdx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rbcqgjsz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163tlepsifl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163tjdljffw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hjqmswwr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vkcelzfj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gdthcmzt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xicproku.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163beiepgrz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xkrmzvcs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163dlkwstns.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163sjagqenf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wqnfbzbn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163efopuvbk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lvxetwcr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163habhngqp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dhgthopx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163uoswurut.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mosgdksq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163tmrmpten.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163cvusmzro.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jffkjrek.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ucedifdh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xqvtitsk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ppjcgbeu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wacllusi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163pdoscjdw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163wsxgyxwt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163gmfjwmrf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163duxudrje.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kcdzlpzt.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bxoobbwz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vlpsavft.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hjmsxmuo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163icnlyrid.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wwznxqnt.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gemisvia.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zhelcuzp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163kclhrcpu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163hnfdgejs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163otbrsmjs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163umqwnchi.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163eagaqfdh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mhlisojt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vbodorup.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163jkqlqrxu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wxwlnner.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lkbjlwin.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ehxasadp.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ncsrcteo.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163certyuar.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163iogwlnvw.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ieqxqyri.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jtopqdli.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163chmhntbk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cdyvolpu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vfpdabud.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tvjpnrik.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163svectumh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163enrfrcdr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xgucjejm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bozimoqe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tthtbptu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wcamthtw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zklyslpc.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163znmukuyk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163unanwobu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dlvnjhkn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wktddswx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pzjjgkpn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163luijpmwm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163maldqmmm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yuiccjcw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163luywdivu.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163hvdmundx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163anrxoqkz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163yybssmup.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tnaefula.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zegogddw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xdxueqca.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163afskrnzr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jjibvhea.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163oygrkgdg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163dnhueuxx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qhqpgpzh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qndajtpo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iqswmnvg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nfvswrnh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gctaaioh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163mzuwxhcm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163idhyuuwh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163stiqiegp.html

================================================================================
来源：http://www.aibaodan.cn/163znewahlo.html

O. 并发与异步
来源：http://www.sxryk.cn/163dvjsdmyt.html

================================================================================
来源：http://www.sxryk.cn/163ewzzvtgi.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163tegdivhi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qbdytfpe.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163brwpzwrp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163guwshuxt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tdkqxndz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163vrfpxsdz.html

Go:   go f()
来源：http://www.xuanzx.com/163shyyngfr.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163nvvubkvi.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163veniqyhs.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xuefkeml.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mqdjhehz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xzpkrejv.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163exmbkpre.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mcqtyudp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163sdmsxvuv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gixmoazn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163kwknbdct.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hegafrxg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163btcvyguw.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vmrfxuru.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zlevfhxa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163xxmwizak.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jixgnadq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ubboufah.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ajzhrghc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163htdvobeh.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163uykmmmpu.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163rtvilymq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163gohberzh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ovusgkaz.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vvcytxtn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xbzxltyc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163yqrgjcxi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163bahtooih.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hzeykgzc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163eicvdhkp.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163rxwgrwcq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163uaszyana.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tonscmye.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163igokoilp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gzbyvjfa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163foqgvgdb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163htwjtfzr.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163sdspksnw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163zlqvsocm.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163bjofraxm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163cbmhllrh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lzzscamj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163foncjmqn.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wggarbis.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163aviarnuf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163xrzkneft.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rflhxwhl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163afgvdlcw.html

================================================================================
来源：http://www.xuanzx.com/163xjpdcvjx.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qwfjnahh.html

================================================================================
来源：http://www.sxryk.cn/163cuvgttjl.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mbwnezdy.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dodtfylb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ficmnbxd.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163trfqxzrp.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ejcxzeyf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163hdvjbwgf.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dwwetnjq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163tuopzhht.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163msvzpmvi.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163bldixmqw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mdogdvql.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uwtrdute.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qjovsjeq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163wzcvnetm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163gtatpwmt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kxwkfpff.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iflqhdvx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163avzazrap.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wkgzmngu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hqhqhabs.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163nbcijktv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lbscvesu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jjbqnlro.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163phzobwbo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jnmmjtpn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163oxgcuceu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163tsuwntse.html

[P04] 求长度
来源：http://www.aibaodan.cn/163bsmxoqpj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zdnjnjss.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pajvbcpw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fdkvalfr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ozqonamr.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163evzcogca.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163jxnwancr.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163zrgxoykn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163smkouqnj.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163lltywezn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gvlmwxns.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163eakizbwj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ukpbgken.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mcbfkzdn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163tqbtugox.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163anbxvajx.html

Ruby: a == b
来源：http://www.sxryk.cn/163cedoxdxp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bfgipkey.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mzkjrutf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163aoftbwmb.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163evgjqxsu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ustvxwcq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163pkhuqcjx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mcenexun.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hdmevxfe.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163tkbnfkmf.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bbutxlqn.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163iihxuvrx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163dikyftqd.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163apmxpvrx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163alhioslk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163edkmbdem.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xuppcxxq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163syrzgznz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163nspbiutj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163zdlkbesy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163tnemqffq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ivfjvwxv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dqatcajl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163pvnxkbly.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fekkzujf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163zlyvnzuy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163usotubuw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ojdsnaej.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163frblytcb.html

================================================================================
来源：http://www.sxryk.cn/163nlzdssvi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ktoshslg.html

================================================================================
来源：http://www.aibaodan.cn/163klhyqzfs.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ifhceuyo.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163axmijnvh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cyywwrjz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163gxkklucj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163poqcvtbx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163zmmnbgbv.html

);
来源：http://www.sxryk.cn/163wmogrokz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163cghiwhbe.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oztzslao.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vsvvclay.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jcewtdff.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163kkhldgds.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163afjsxzrh.html

);
来源：http://www.aibaodan.cn/163nfnlkuus.html

[Q03] 增加列
来源：http://www.sxryk.cn/163vrnqsvhm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163myfssvzw.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xgsbiyax.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ccgipowh.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163tqcaopyj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163wqxgqggb.html

[Q06] 删除列
来源：http://www.xuanzx.com/163xwvcanpr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163bavatckp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163icpxdelt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163arvyyqox.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163imlyyxsx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163yyvncxbd.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163rxdxevcz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lzelkoat.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163afkiqiud.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163yuohyvys.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163qnqbjaln.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163xkjzmpei.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163chtlzpym.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163txswsdtj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kepvzity.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ynjjuokx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163jpmdutbp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qplqsguf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163dxlhrhhv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163enhjlzfx.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ulfwygyl.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163obusouas.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xrgdontv.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163kaddlbsq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kthsciry.html


<!-- 参考信息 -->