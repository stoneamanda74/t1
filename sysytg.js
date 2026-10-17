外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163oftzafba.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163nvqgrwxt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cokgeulo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hxggfstq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163tjmjhtpk.html

Go:   func main()
来源：http://www.aibaodan.cn/163ejenbgyn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xdrjazcd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163pqjwgdem.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163gheukwfo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ubzyzllg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163xqxtnsva.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zcbbtgeq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163anclqbkg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tlkuxkae.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163dsvikqne.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163eijvwsqk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163msjcvwsq.html

================================================================================
来源：http://www.sxryk.cn/163tebqlpnf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163eiywsiuk.html

================================================================================
来源：http://www.sxryk.cn/163eyzhyely.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wwvuolme.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163hyfrvnjh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163yhoimxyw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xmpiydzc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xnupobsd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wqpqhwqi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163soncvygl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tjvjilqc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163uxbeyiho.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163uvntmxzk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cpmlqhvj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hmdfgxua.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iftkwchx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kqqvlmhz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163mtoymtxc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ljzehejh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zpiwamha.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163oxvrkulp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163sskzyikc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163sltrpdpz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dknwuirr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rqgnelqa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vxjzxxoz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163iakuykii.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163kdcuijgo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xsuktnaf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163opgnsnxv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dnpdhffs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zznjtwih.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163kykjorwm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zrxncipb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163psobsdys.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163xrrelqiy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pamjtomf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163grurcsco.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dspgdkuf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tmglcnly.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nbotzfju.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ivtuldiu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ajzojdvm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hpuhvbcu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vexgsyzk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tpjwjjwn.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163uqmijlad.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163uruxtaoe.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163modsdtaw.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163byurcoxe.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163niercedd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nehnksoa.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wilnsgoy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gekdmkiy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mldkwydm.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163lhsbrujg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zkfsqmjf.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rhjikqiw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ratbfwqs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163awtvcoyz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rckipwqw.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163woudwmvm.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mvsqllgr.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163gvrrhxli.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ggicbpqk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zannzuzy.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163eqmhtcwb.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163znmgbtzk.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ezrtqfyt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163owkalaef.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qhxfxcft.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163uaatxgfl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fdideify.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nsvepwlh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163henjqaeq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vkuupanz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163iaooysit.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wlpkxadn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nakljpsv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pdoxdzaa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163sgqgtrki.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163wzowgrzc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163txfqbqhw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163twgdbdgf.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163wezzigdo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163cwszefxd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163prsgnqzt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163uwmdyynt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hmgururr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163sxrffapr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hrlyeifz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hxwyerta.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vtayzvnt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vrthdtjx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163sjswaqsd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qswnafxl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163opflkubz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zlixpkhq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163cuqvsbpi.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hymhrtrg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163vigfbxzm.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163czvxpvnt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kayvvfyx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pxbjsjpc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bbgxlybh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rrycwubx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nmcmyldr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qcheugdc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163diqixlhw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ilbhlqbb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rdmktxij.html

================================================================================
来源：http://www.aibaodan.cn/163jokwltqr.html

O. 并发与异步
来源：http://www.xuanzx.com/163pgmmvlie.html

================================================================================
来源：http://www.xuanzx.com/163ittsobiz.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fqbigfsy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163lcniwvuy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163pxhfkngq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163rlvubbmv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ysjitiaw.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163tfjcyrkj.html

Go:   go f()
来源：http://www.sxryk.cn/163zvitlfzd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kltqlnea.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163kgedguko.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163judggbwb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zrdyuvjw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163lhitmnnp.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nicgeqno.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vxwxccjv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163tahpurkl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163plbxqnne.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163qlofyulk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hwhsiqul.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163oaxjexam.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163wndkkpyf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163oyypllyi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163uymfhfli.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cwbdqtka.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163kslllxjo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gopjfnto.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kojhhyod.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163nlpxhviq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dbggcqdx.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163wfngjuvz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163geklagtc.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163knsdewjf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ieuihjhb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163whivrplh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163psdxutav.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jobbkhje.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bhffkyfj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163dcevgyji.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163slmrqzul.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163orupjmfb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ycjamjee.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hankzdiu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vxjaydax.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ofmklwvr.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163pjlqnlan.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163tgzugejd.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163tswprypx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163nlqaobas.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ytsuugzb.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ayfetcss.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163uhktbbtd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163djwutxrl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163eglglusd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ecswjovn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163dpcgnftm.html

================================================================================
来源：http://www.sxryk.cn/163eonbixbx.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qmkrqfmb.html

================================================================================
来源：http://www.sxryk.cn/163xhfhfkpz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tepwzwsk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163gwngpgnu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dulxsrne.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gslhthqj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wtbfjpvn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rneuszhy.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163fvfobxqk.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vrlbxwwh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163vaapuzsa.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tpmvmzfk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163dvswhpzx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fvupoybl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fmbhnmxv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163guuryhuu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163nhhjysjp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ofxpkhej.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163xpokoxuv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gsmqbikx.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163wmcxdeml.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hrprqnoo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ivsyvmzz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ibatdwxx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163coyxhmql.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ommonquq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163slfhlqjb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163qhmtkkvv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wbvcfcuk.html

[P04] 求长度
来源：http://www.xuanzx.com/163ylziruys.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vzheugkm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lbaphrmp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tyqjvwfk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163usocytau.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163zmuklgqy.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xztvakhz.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163jsqeoemm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ripcbsam.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163scnlmeka.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163wbxcueka.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163dslgqiey.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fcctlysb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ikwxvfjq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163bzzfpwma.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163oisfowtz.html

Ruby: a == b
来源：http://www.xuanzx.com/163pnrcjzsb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163agkfqysr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163acwgcyqu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163copfgfos.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163iengzgpr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163feqevcth.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163whkcmmkx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163pnsfrfgc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wklokhjc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163hqfajcbi.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gwwcglrf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mjvhzkoa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163zqhvxgne.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163lyysoozq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163oizhsdfj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xvxvlalu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163qxkotagu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163hqgrraje.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qkssetcz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wubagcke.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163crrqxtoj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tukmmitn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163svfuzdzo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163barjjrzm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163eugidydk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xclnkmfg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jmklatmm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kevflkqm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nopjefoo.html

================================================================================
来源：http://www.xuanzx.com/163cdptcewj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163xwaclyjr.html

================================================================================
来源：http://www.sxryk.cn/163ftrlwbyu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pwlufnby.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163pqzraabw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163truyqfzv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xdccwqgg.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163sxoscsdi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ryszmnhu.html

);
来源：http://www.sxryk.cn/163taiwufot.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qyccpluh.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163pvihksik.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hnnaeixs.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jircucwp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zzthhlxn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163siopnoxi.html

);
来源：http://www.aibaodan.cn/163qrnhbqxd.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vvyvkpim.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163mtqavfjb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163lhqlvfpd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163omgcbdmt.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tjitdrqr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163atpxoxgu.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tzaycidj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163aebdjdzk.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ugprywks.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hlrduhsz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163gtfowkmp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163sqrbbzdy.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163qagqmare.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163zkqonjwr.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163eqskumza.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163gvhyosks.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163fzudkxdr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163toeibwgj.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163kkvlkgmz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163efberlwk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163axnsoter.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163unkbxakt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163frgscwcj.html


<!-- 参考信息 -->