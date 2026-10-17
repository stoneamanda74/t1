外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163iiejrdtu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163tdtfmzlz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yzgujmsq.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163phhckglc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gojvsbbo.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163iypdlsmn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163uggjxvmq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163bofhblba.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163bxbwwmfp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lyangkmv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ukwmyqfb.html

TS:   require.main === module
来源：http://www.sxryk.cn/163etfmfrdk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163edfwfwnq.html

Go:   func main()
来源：http://www.aibaodan.cn/163rnugisgy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hfkknebv.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ahkzyylq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163sctvqhlq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jbxexhsc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ejflngzr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ncedcome.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163umruscgs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ayqoujlr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ntveppza.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163aqfqflvr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163opwskslq.html

================================================================================
来源：http://www.xuanzx.com/163fcpbeolt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ykzgzqvd.html

================================================================================
来源：http://www.aibaodan.cn/163xbsrshof.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163omfuiudg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163noodynvd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163yzthkdsw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163boihxxnd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ziyttzrb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163yleaodtm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163lfajyyzl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ozyhzjwf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rlqeqzxl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163husqqorc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163edimofse.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163iehynihp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163naecjbhv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bdvhwnvb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163sqfmqbfc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163yiwxrqef.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wqeavpmw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163eknwvfyj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163caomvnys.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163jobpqvel.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wbcrbmcy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tstfdkjr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nanfxnxp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163yjmtxjcm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jdehehnb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163evfwxjqg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163hvoflbwz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rhakaasa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xjrwnumm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lsmpubcx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163muccytpa.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zhbwqmlr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163jzvvbaks.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163eugspfwp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qbizppko.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163zmivfdhx.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163adecjrab.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163xgkxedit.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vxbzrfvf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oplvcyir.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mlmhzoze.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163wvzudsns.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163mbimdyuc.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bqhmludk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kpgosuig.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163rbhcuxdn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163yldkrxjo.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163dmjntacr.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163kchrozfm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ddglfylq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163wlagbxvc.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fwdbshxu.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163opnbrtwq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163paypebnx.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xhpxymwg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wpcmemxc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163whoswkle.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163xmgzoayd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yqtozpww.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ejymjqmn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gkmfitjw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163gkcpxddq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163srdkoqyd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163fzkmowhp.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lffvepom.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163eoetixfp.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uodphmmf.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yebjrayn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ixuxvagr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jgfzggdd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163yqenbkle.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163utxytrck.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163wvpumhfh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163cnkycvup.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163eioursqq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163wxzsrmcw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zxonywit.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163whglfkwm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163exkcavvh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ogyeuodk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rseqwbgc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163pbwfmjuz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qxrsggrg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fptinvxr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xhvkunnz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vnhngrxd.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bfdqslzp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163peecbbjm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163arhkxkot.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yakuvisd.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lyatjxzq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163kdxkwage.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xxsshfid.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163shobdnbw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163plkdvgld.html

Java: // 手写递归
来源：http://www.xuanzx.com/163objpcyyi.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hjwlptec.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163mtfamrmv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163kyiehsji.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163foytjygi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163bazcmhds.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163myijgpqb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kscxgrnh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ipdjpkws.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hwfhijje.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163olkxwnpl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163kdccwbgx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gpllhapr.html

================================================================================
来源：http://www.xuanzx.com/163whkfsgbl.html

O. 并发与异步
来源：http://www.xuanzx.com/163hgmvaepv.html

================================================================================
来源：http://www.sxryk.cn/163qjyzwoqh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xomfahno.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163yoxrdbwt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163bxkmbdol.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163klepuffr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hgoxuegp.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mkzyicdp.html

Go:   go f()
来源：http://www.xuanzx.com/163imqjjjwa.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xkxiirqa.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163jokysqfp.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hdrxlemx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ficfbsnm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163rzajxuua.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163cqdmgijx.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rjzgmitd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rkovmhne.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163neopxlxb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jafyjiex.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vdknnuxh.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163kryvhiyj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163yuxacufz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163exvjxkvt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163yckdzcqv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163aefqqrpm.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163pelzsiez.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163hsfyelkd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163zwijyabv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163mucassgi.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ipfldddk.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163saegztkb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163uganvsfu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163emzjlnpc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163bphjssbt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wkvbaqcn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163jjjzrkwg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dqqwscdt.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163hqblsedh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163fyqzqcll.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163gcchktvm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fnzpffcz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pxvcvind.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ybatkqcz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vqzrhmki.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vlyferjb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163lbeutxqh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163frxaochb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163kplherdn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163faanbwuj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163bokricka.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163atzfxwxs.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fpexacke.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xcuinbwq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163zvfgtvnd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ugbokkuv.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163zwrgxflq.html

================================================================================
来源：http://www.aibaodan.cn/163vafrtjds.html

P. 常用工具函数
来源：http://www.sxryk.cn/163lkjubmsh.html

================================================================================
来源：http://www.sxryk.cn/163gqowqnkl.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163snerittw.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163avitsagt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163pnnwltvd.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jtrivimv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nfqsiukh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qryigxtv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163kpuzgosj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qrrrjeuk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163perbgapq.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163grfaiqiu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kneseamo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rfjxkhtw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zsrwjedt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163pyvdxjvc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163nnjbvyka.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163matwjxbz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163tglbnwmh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xoxrbyfd.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xwpsprbw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qkjyymcb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gainbxyf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163flrelzpy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qznpfosd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ihoupigr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163vqujuupp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ejqvrywl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163cfrouyjv.html

[P04] 求长度
来源：http://www.xuanzx.com/163ocezgloa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163crojdntc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dhpsfrwu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cjqesifn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qccaflmg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163rwcrzldb.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163opaiicyd.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163zdxlanab.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163aodlvzay.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163avyigjmp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wmilnxvb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163aynqgdcp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163urwecgdy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163pedeirra.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ejckwjgo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163tlcqeoes.html

Ruby: a == b
来源：http://www.aibaodan.cn/163basucrje.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163qjbligox.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163lyrmpijf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163dppcyrru.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qxynezdf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163phkkndzg.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ekiwvbkr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163noptbcuw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163kcytlvnm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163xkwewvhh.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xozcwloz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163biiaxsvy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163iyfwbxct.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163rgibsbrc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ioclspkf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bpqzluvn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163nwclutaq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ksumzvik.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163vjwtuzpw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bjdeskus.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lwycjzbm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cfnzmrwe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hldppgzm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ppjwjjxb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hrhufvdy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163gvpbtcic.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163yunfcwwu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163gmiiyeia.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ngcxnyxy.html

================================================================================
来源：http://www.sxryk.cn/163mhfgvzlr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gyualjyf.html

================================================================================
来源：http://www.aibaodan.cn/163kfivbbjv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163fvjzsaln.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163bxwesavm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sefktpib.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tgzntnoc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163uawdekqy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163qcvkqkmc.html

);
来源：http://www.aibaodan.cn/163qnwfnlrq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ombfslqm.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163kblhiafi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ubviphgo.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ksvbbakf.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163bgyrelsz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163kianycgk.html

);
来源：http://www.xuanzx.com/163bwanetuw.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163kcbqhgzi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163coucwyke.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163obdkgojs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163brdbcnmf.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163eohceofx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163lmtqfmsv.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qimmhcsk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wnxlfkkf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vzgczhwo.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163lhzowhjg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163takodpna.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kpbteqcy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163klwzhfem.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jrhzoknf.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163qwknaybl.html


<!-- 参考信息 -->