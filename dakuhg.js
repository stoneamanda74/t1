外链999!wailian999！

Ruby: exit 1
来源：http://www.xuanzx.com/163kjplhfgm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163rsnkilza.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163jjdqyrqy.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163oayfufpx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163yzkokmfw.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qcchqpkh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163evazehqi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kizmnxxq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163umohyldq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ndqsklax.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163haosxper.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163zabhbfvn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vtpmitbr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163znxghrlq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qbnshxbx.html

TS:   require.main === module
来源：http://www.xuanzx.com/163warsznqt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163xvdndtxc.html

Go:   func main()
来源：http://www.xuanzx.com/163srebuuuj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ozzbglkl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cqasyjsp.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163cmtjeijk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163giijtjxx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163mulqkuis.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163etxrvtqi.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wfofuows.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mpipllmk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nwafudpj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ahvtivvs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dqxvpnsy.html

================================================================================
来源：http://www.xuanzx.com/163levttzsf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163mlrpwrwl.html

================================================================================
来源：http://www.sxryk.cn/163nonuqkmt.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gjhbydkj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qzmewruv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163zwoihpje.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jusgyqfs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xlxvplon.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163zceyivzq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qnctxetl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ceopgedy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kecruybx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vuuunaur.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163guptzauz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ffmmdmie.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gypyttex.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163riynvbvo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163nouipyxr.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163nzzokyxs.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ycwmqexm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163qactixos.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ywztiamh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163gfilddkc.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ildbbzex.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tdrhuuti.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eslnagvj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163muuqtcwc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ifnghbzo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163blsvjfqt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kmvmyryr.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163uvdzayqz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hdybwfta.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163jabtvhxd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ekelrdmd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dgpmtoam.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163nlzvsikb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ypormfbs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163whswtfiq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163oaxecnws.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163iezgpwgt.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163szykzsah.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jmxaojfg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rvohznma.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163towyujou.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163grkfzkld.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163onoqkprw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163osbtrseq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163decnaycj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qqenpllf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163pnsywlnj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163zkjoeuyj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hmyborjg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163izimyptx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tutqnmiw.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ueiodmkl.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nrarizsx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nwtmdlbl.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ofskszha.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163afiakwji.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163qmuiiybd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163eibcoqhc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nvfsjeiq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fpverddg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163oyrdrkjs.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163blovgzgd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163gloviggm.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163crostnkj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mxhvtuzc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ehkuwqpu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tpdezxvz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ckidetco.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dwrmiwze.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163dezjcxcv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163egmrhvuo.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vfjetdgj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163bibbtams.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zylgkecn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163kdwydgqk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xrurobhj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163hetiqrwt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bjcqglhe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ojyzekjr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wftiovcw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163wfmkqmgu.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163srcvcpou.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163arsehpow.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dnyyalwd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zdnsiwng.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163evlyxftg.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hfvhnuob.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163nouvohui.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163zzlqpmmp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163afygjjri.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163fubaekyp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163myarfplj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ydssrbae.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xnuzswty.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wokwhoiw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dqguvidz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xawoxzwi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163tlgftdwv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163erhkynlv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163fsybrjij.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dbxkdfog.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163vhptgktw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ktrzxyqz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zoxmytsr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ppkalumr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kqjriwaw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lixgynma.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163uknxxcez.html

================================================================================
来源：http://www.sxryk.cn/163yazpvnnd.html

O. 并发与异步
来源：http://www.aibaodan.cn/163udbmymsy.html

================================================================================
来源：http://www.sxryk.cn/163bjzwonox.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163qnsvefmg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163stonvptm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nxdssxwz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163oawzgdwk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cppocrcb.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lqkhebqt.html

Go:   go f()
来源：http://www.xuanzx.com/163vidyrapi.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163aiujzcqs.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vafccfzn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ssfjxjah.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163hnrnpgvk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163cjviykuf.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xujbkwbb.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wwpftndo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163yrszjova.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uvjtzowy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163hqmtkesu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163bogwpjds.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163eqhmettl.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163alpwzmnx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jdsfplpj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vrnmwmyy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hgqohhek.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rhvgxcyr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163inexixsz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pmjmuzas.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163frqqvsfe.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163gykivsfo.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fvgwvvpl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ycocjywv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jcnealss.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163pjqkjjts.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163xrkvwbmm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bjthtzcr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ahjostdn.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163brpbptxx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vejrzcbr.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vofbytbn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163cekmxfsw.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yprbaqzm.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gpcptwsx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ejatcthd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163yesfrucs.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163hpkuxkhq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163zoashnzr.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163lzrsduyr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163rgxpwavx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163najqimfp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163izhhlfpl.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pcsoszwl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163nxtenpgp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163sjhkrbya.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vrfvicqb.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163dhjxwwxz.html

================================================================================
来源：http://www.aibaodan.cn/163iqqdlsvg.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ovxznhny.html

================================================================================
来源：http://www.sxryk.cn/163iefnezhg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jwnojizx.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163lmgzuayq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163rxmjvkho.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wxbrmkjs.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ukuipoiq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163tiyzkxiv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163tdpggvhn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163epoqzyap.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163noeqanvo.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163yckbsqad.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163bnhrdjum.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zoczypia.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163broufhja.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163kmsvgheb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163hwldnaff.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vqmggfyr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163sxlfrqoc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nkcapkio.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xgcwioxm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163pslwxbxi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163jruyozqg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bglzoqjd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tzgqjeuq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163sjgehner.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163wqucrydo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163uovmkwby.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163svzkrekt.html

[P04] 求长度
来源：http://www.xuanzx.com/163hohtfvin.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163kpjxcijq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jxipqgpk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163atswlvit.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jrvbtkkk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ngdtemcw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163arqegvaz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163qzeodjxu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ofjrnbej.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163chcwebhk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163cegtocbe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xouknghk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163evlkpxis.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wpmbbwtv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163eawwtshb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163gpwzcmgo.html

Ruby: a == b
来源：http://www.xuanzx.com/163ptpjllci.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163usprzfyg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163cpmpqohj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163iogqtzhd.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kleqitdv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xgujabqh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163toojgrfy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qflwwmmv.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163mmhdmtip.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kbokmknc.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163saxojxvc.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163eibkxmrx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ugcmpdhm.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rmnhoeyj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163iohxewgm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163igcubkqr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ipwwlgvo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163aywytltm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fxiktqha.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163zlgnwone.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163eigsdgbu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163lugczycc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vncgqzub.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hkunyeha.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163xgbsllad.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163wacwcbib.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ibhxiymr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163wjsifpay.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163kmtuekbk.html

================================================================================
来源：http://www.sxryk.cn/163niykkapz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163byasbjgb.html

================================================================================
来源：http://www.aibaodan.cn/163zdrmeoqu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wnbsprpw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wncirozl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163pkmmyjga.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uzsnqagy.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xmtbpqab.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163mbqcqbxv.html

);
来源：http://www.aibaodan.cn/163hbpifqlj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163bhjttazc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zolbjcmf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163arimldsn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gfrydvfr.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163vpbghusm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zuxychog.html

);
来源：http://www.sxryk.cn/163wuqfqayd.html

[Q03] 增加列
来源：http://www.xuanzx.com/163xbdggztq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ggepbiwk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163zdenbwbx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163odhovxwa.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163arumuwmz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lmjirhde.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fhquuayn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163amokukwu.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163cddbptvx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lvbkzhmv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163uoueazws.html


<!-- 参考信息 -->