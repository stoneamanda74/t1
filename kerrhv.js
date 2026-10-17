外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hprtnuek.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163zmhnbeza.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xbpdhpde.html

TS:   require.main === module
来源：http://www.sxryk.cn/163fbunlvrd.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163qctqynbu.html

Go:   func main()
来源：http://www.xuanzx.com/163wfpcyivl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163udvahkwx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163bthrhmhn.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163cjzanylr.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163zmvbqufp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pjzfadmj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ihkhazxe.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163djqfyued.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163bxdkegjm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hzidejcp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mvsmfvdt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vsavnofr.html

================================================================================
来源：http://www.xuanzx.com/163inzdaerj.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jljxpiog.html

================================================================================
来源：http://www.aibaodan.cn/163gwivgoqe.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bppqtdwi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163hdmjerfr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163suxteerc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vodkmybx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zyszppny.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163tashulna.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rqocjkht.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wceasdgj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mxrajodu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zvbpljvi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uaroqmqw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163pbwwqrun.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qxqajept.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bjxheyjw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zlnsagno.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163lyommupr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163psgkywcz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163gdtgiylw.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ksgnkxti.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163hujhkbrg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163qaczeyso.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163sixeghyg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qvefziog.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163cyeiavav.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vljrbhqr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pxptxmmi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163sytvmrpw.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163xfjccbab.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ykdonuvd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163wybufnla.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fsosqphk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fgxkvcgg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mwilnrpl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xlplujpa.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163menuykej.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163kldqnyla.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zqknhvmc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vycklnkp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163cimwzxms.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qksdudry.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vmqpxoxl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jaghgqtg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163dxvwtose.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163iqadgxyo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163jvkcetoh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163srwhxpeo.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bxpbnrjf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qonstmvm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kvatusje.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jiqrhrno.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163bzwbeyuw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fhbcdvjn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wdhswjfw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ltcvbqii.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163tmmypglc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163gjvirotv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163arcsfizm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163retlflhw.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qslxeuvj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vdvhgohe.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vilibzoe.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zepgrlav.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163quuumaqj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163emdkdiuu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tgrhubsl.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163oggtiaxf.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qpbqeusp.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sthzbayk.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xtrazame.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gdmkbqiu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ieapwlvs.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163okiyegpq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bcbugawd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163wqguevgi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dyleqxhm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163gbughvxg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163sfqenvbk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163dnkythdh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163gwavdgwo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nzxvpeuf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163gefvpojs.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lzqgxokt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ygakbzjb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hwmadnfa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wqddmkyf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vtaxihsn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163skcoxcak.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mqgtkhsz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dbiavnll.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mqepejwr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ammzhgzv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nijblcpc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wbovoroi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bpimvwcz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bqcpbiim.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ypnwyrtq.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163yxtrxhio.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ijgvplyu.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163kimvxxfl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163hnitnuqt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qkfordmr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ityniuii.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tcpusjxp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fxcmljms.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bvjavdvg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163pbkgzxcg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lpiswzko.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xxmjncez.html

================================================================================
来源：http://www.xuanzx.com/163ovwrxdqv.html

O. 并发与异步
来源：http://www.xuanzx.com/163infqjobs.html

================================================================================
来源：http://www.xuanzx.com/163jhzqxshk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163revhaczw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163teitdpvl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163stccqhle.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163buryeyib.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163oqritlvq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163urglsqks.html

Go:   go f()
来源：http://www.aibaodan.cn/163mlcyygpl.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ahobokin.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163clqofwbm.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163reqxlohi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163audpehzq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163odxtkohr.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rleigftk.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yvygufti.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xubwnymb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163maxdwnvp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gguukpux.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163deeipjru.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hjjwvfug.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163petovpdv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163npynwxki.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163xuugcikw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dkjygkar.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hbhajfqo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ouskjobq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rihppubk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163efpjkejd.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163uzprjlek.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wtopyghn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163zqjuamev.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xwhdmnba.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zcxlboqx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163meyflctq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163dospibev.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163wtqqjwts.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ohobwpno.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163xefmajqk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163oxrmgdjp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163rvjpbnze.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wksbwrnt.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ngfllick.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zoaldqgd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163fbrlsbdv.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qahaqrnu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163grvctuqi.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163foorjusb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ytfmyafl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vrgmpkxm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fgdbzvkj.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ylxxnvpp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163msgnqhiq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jkvhzjtp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163kvgyeljy.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163fswxgjra.html

================================================================================
来源：http://www.xuanzx.com/163ilkbombd.html

P. 常用工具函数
来源：http://www.xuanzx.com/163sxgmbtmc.html

================================================================================
来源：http://www.sxryk.cn/163omgeyrub.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163pmsxfrsg.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xtxnapil.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qzmxnfrs.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gojauaui.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163suwgbfdj.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vhdhijgy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ejhkrydi.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163aomtbcnr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pbjmimzh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ftdykhet.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163evwjosum.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dkxrznog.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163acbufhwo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163olzqyfmc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163onfxsdee.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163dwifmsdg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163vrsprbra.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uzftgvgt.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xwujjqah.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qvbpuslt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kgtthogw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163whewzfup.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163alfehbsr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163swbwpwul.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vygdzkef.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163wrnxxnni.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mpvvwkhx.html

[P04] 求长度
来源：http://www.xuanzx.com/163ngumvcvn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163uwrzjiox.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163blmehwte.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nhuwwtti.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vhfeulik.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wmsbgele.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163gbkylhen.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xtrzvswp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163auqolotz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wzkmshrk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163trbthpvk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163koroinco.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163yelxtevp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163prrwtmjz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163wkqvulvu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gepznxkt.html

Ruby: a == b
来源：http://www.sxryk.cn/163srpmxxfi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163lcoxjfew.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163weemyzvx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dgmfdxre.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jrxvyjuv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163gizgxwku.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jyzayocx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163zpxmsupk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wvpapryv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ugezfcqp.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163oprzgwjx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163fjdmhyjx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ujejyfof.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163mrapdmfr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163njflyhdw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163htqkufns.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163dwuomrln.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163eqyvjyyt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163cceljoez.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jvfzwcxs.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163scrigwbm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vvwjcavz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nozboiwx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163qymsypwa.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fobkktbu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163kvezdujh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163tdmdblig.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163roifvejc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163sdrwvosi.html

================================================================================
来源：http://www.xuanzx.com/163vbyfoxmt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sntfcbjg.html

================================================================================
来源：http://www.aibaodan.cn/163vzipxoou.html

[Q01] 创建表
来源：http://www.xuanzx.com/163qsdquauu.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163mgokwjou.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163roqmdjrm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zwwzztrm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163rgcckwae.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163twsgeksm.html

);
来源：http://www.xuanzx.com/163kdjwxaou.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wexoovdo.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163dnepsbga.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lzsccdzb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fmukhliv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wxnnltvj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wdrqupdn.html

);
来源：http://www.xuanzx.com/163vaxnfxjb.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ionuelcm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qavvdfja.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163quwaudfc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163qyhaspww.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jzhytobn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163iigcinrt.html

[Q06] 删除列
来源：http://www.xuanzx.com/163kewdzgas.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163uguccfgh.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ejcyzfds.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163llqlrxlw.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163htiktkwv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163xhcyvjeh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163kjyondon.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mwfgstjk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163qhsfkban.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ozyvrhum.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163riuclqpf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hiictqou.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163yyxeqpvd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163skclxaqe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163skmjwdlx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163lnleyfgv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163agbhuald.html


<!-- 参考信息 -->