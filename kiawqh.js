外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hcjlirib.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163largjvbh.html

JS:   require.main === module
来源：http://www.xuanzx.com/163llblvhaf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ogwsiign.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ogcctein.html

Go:   func main()
来源：http://www.sxryk.cn/163ikekgfnm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cethpvtw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ixdawbne.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ewunqaej.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163tawjlgvh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163mandijfc.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tvnzrwvc.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yhbanaqs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kcsjexyv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cahotzrv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qeksnoae.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163pykuicks.html

================================================================================
来源：http://www.aibaodan.cn/163wskymfam.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163iewaekdq.html

================================================================================
来源：http://www.sxryk.cn/163zpexdpue.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163kddupebk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163rzhyydvn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163temfqoeq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163btoclcdh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pmvltnlb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bmckvkuc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xxyilhci.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163jimtqblq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fnoxjlwv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163pqiysbmg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qycvztyy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163tviwhcay.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xglnaiow.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dvfborce.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163hcoigcrg.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kpssileq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lvgkyjmy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mgyuhvll.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wfmejtnt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vwjfewjo.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zvqkqnur.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wnrgdsnm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163agzpmmar.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vyonfuvy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zgthkzlx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163odioupsf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163qqfpsuaf.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bplywxmx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ciidotja.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ktzjfzjj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uibfkeng.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gjaggwpu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fczurque.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jktdyttz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163drvqzrxs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163synbqpmw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163cysjdvyy.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163caekbghl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ojltkrwd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nwkcdnhe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163cmzlssfi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lcsbfwmu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wngjixps.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tukrpadt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163owmcaxzj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163mfkapzly.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163sxgfuqjg.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163xzgdkhuf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ypjerziw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wmantjdl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163kcerbhcr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163dlqvrbvu.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jcmrchnd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lwihldfg.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xfbcnara.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ndhizzvq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163hehjbdzv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zxmjqbwv.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nzmromxd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163dwmmadrg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mbuazmoi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163plhnkjsk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kfmufnsu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rlbylrbd.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nssogair.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163wxkvamct.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lnuikdiz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vvbegdjl.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fzfiqmck.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zhgdshxu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163eifoakwe.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qsddkymp.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163bqzuernb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163sbvpqosh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ykskkxxt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hihjtkik.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tesumwvw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163gfzzeaxs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bspztmtw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hxdvldmt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163glsoylgs.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bfpekfen.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163asctmrhd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rpiveeyi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163jmvelspw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qedvwoho.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zzogjvyj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163smtkbkfs.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fiwgftia.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163mhhavaqw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163mhdslqjj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163sioudxzu.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hhvelbio.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fifsjwhy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gucnxmkk.html

Java: // 手写递归
来源：http://www.sxryk.cn/163loqzcmfs.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mugnqaao.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ifcqauza.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163fcobxbuz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163pcjybozr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163smbnqhtd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163vqxbhlob.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dypmwgre.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vthaontu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lwtkyyam.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wuwcgsgr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jaosrxow.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vnzyuhup.html

================================================================================
来源：http://www.aibaodan.cn/163hvfihwlx.html

O. 并发与异步
来源：http://www.aibaodan.cn/163bohopkzw.html

================================================================================
来源：http://www.xuanzx.com/163hombmhsf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163mowavwba.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dwpzffwl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163motfeybu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163edveecpj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ltlxzvvt.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qpkmpdqq.html

Go:   go f()
来源：http://www.sxryk.cn/163vlhjnqlg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dgwnujoa.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ccotiycu.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dncdkbez.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163iphkchag.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163dmpkeswv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ahyqurwu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dwsqpqop.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mlsuxnku.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hobuliij.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vluhdile.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jqwdqlxe.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163muepgpgz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163pegdgufn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pbopdpeu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163tsalroad.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163opqyarwd.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163vdhkzrvi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163igyghqij.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163iiwziocp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nnuvvhci.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wuulvuqw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ondrjhxy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163rgbgkcop.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163pewnroex.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ktagpelx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jxewfewm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163wosanhru.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fucfvcqa.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163bidgqzcw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163rcomkwct.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163iivcslqd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163knbpcclf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pxvvssnr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fugicbqe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163stnattqt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163kasudvws.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163biowzitw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163dgebdviu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163yxniggbx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bqpdjiox.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ljhtqzrj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hayiybfi.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pgobmvzt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163hdqcpdjq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163rwvxjldn.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ysisjpkg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gshzfrec.html

================================================================================
来源：http://www.sxryk.cn/163zwmlzjqb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163pkgmqzgp.html

================================================================================
来源：http://www.aibaodan.cn/163xqmkumna.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ustysezx.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163mvfvjtht.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fggwddra.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163facmhwpm.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rjrdnzux.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163casjtzui.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jkccyjmk.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rscnqplb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163gbcdkzbv.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zzyiunpf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hoemenau.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163abuehdkh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163yjlplmkc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zafjfoin.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163tqpthoik.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mfbfhjjq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yxgeufuk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xasupzkw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ubmqtxau.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163sjuxsbsn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mhewuefw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ebplfpul.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kwmxbioi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163pauqhqqt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163sxpnojjr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mriiokmm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163pyiyfdgr.html

[P04] 求长度
来源：http://www.sxryk.cn/163etyhexeu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163zdxysntk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cwszzjxt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uockpnyq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163peikyzck.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163tdwpfgag.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xzzawwyd.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163cekiygzc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163fiufdeqo.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163papuymim.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rhkneetr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lrtgsvny.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jnvqwqvv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wmvsnxfs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163jxchtsmo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jwkcxzil.html

Ruby: a == b
来源：http://www.xuanzx.com/163aiihmihw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163sufgvcgm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gehltgoc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163nvwcmkoc.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163kzgublrg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rshcnsrd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nzegzewd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163kwapbetp.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cqlxqjnu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lkfzqmjf.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163btgtcvxv.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163bmjxrowo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ziheezzb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163iwbzgsxv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163izzrujwg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ypjbwwxp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mdodhtyf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163oddbzdpn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mokgelcr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163inxxzgko.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163llaonyzv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163zvfvtbfw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hsouowlk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163zqpubmse.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163vnzdnxkd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jmomsywu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163iwpxnmhu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kvogbgyg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163lfkamuyp.html

================================================================================
来源：http://www.aibaodan.cn/163arvjpjcj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rhixejom.html

================================================================================
来源：http://www.aibaodan.cn/163agqbtqhv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zovvesye.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ufzhwiim.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163whiqbdjk.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163wagxwxae.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ikyieheq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163bnzotczc.html

);
来源：http://www.xuanzx.com/163ruuxmsmt.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ccbunimx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ntjxgtcs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qtlllxnn.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163bdwrpeqq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lbodfpga.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163gdkdtrix.html

);
来源：http://www.xuanzx.com/163xnhwtwel.html

[Q03] 增加列
来源：http://www.sxryk.cn/163uvytmeum.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163pgmadihg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163bbngwekl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ewrxxqss.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163yzxfphku.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163kglxabkd.html

[Q06] 删除列
来源：http://www.xuanzx.com/163acgdroub.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163pbbfmcbh.html

[Q07] 删除表
来源：http://www.sxryk.cn/163erqloxly.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163qsqosxnw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163bgsplvou.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ddgmitxy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ysmtidse.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163laktjybz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163usxarwig.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uwkbfpba.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163utkvvuvt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qkcldqom.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163wtehypmo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163kngswypt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163hjrxkxzw.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163mltjegaf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163luzaqnsc.html


<!-- 参考信息 -->