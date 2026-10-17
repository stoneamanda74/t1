外链999!wailian999！

TS:   process.cwd()
来源：http://www.xuanzx.com/163pnnyrmtc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ntnrlhrr.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qgxkhjbd.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163yjuysqup.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163umkafohc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163kavpndba.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ilekoxul.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163eeaximbg.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ahlgpbfp.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nxlfrhnm.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ucumlgwq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ccnazwkt.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163grgcbgsr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gqcyorkk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163rxyensio.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qqmggkne.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163mcdjofhi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163yjwrbiuo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163puhzjzjt.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163vvfwvuig.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163eezfzfuu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yweldvob.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vmagladm.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163emaxvkeg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163neynmxlw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163iqgahcpw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163shgpoaws.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163uoooftmt.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163aseiueut.html

Go:   func main()
来源：http://www.aibaodan.cn/163opsfgubi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vrjhyhgv.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163sdxybzwo.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xxdvwrsk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163puiwpldl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fykvtygn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163eevhdnhg.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hptetmzo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163czhkzfjm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xnblfpgo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ontzzrkf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163rxspyckr.html

================================================================================
来源：http://www.aibaodan.cn/163zszfheto.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kweksgpq.html

================================================================================
来源：http://www.sxryk.cn/163cbcfoehs.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163weusrixz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163oqqytrws.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163fetslwcv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mpuwhosw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ahmhwgld.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163evzguiaf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163uvrgxnmb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jadirkoo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qokaegqs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ztkbbhrc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tbvlnhyk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163iwardbof.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dqktslvz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163koiuxfwi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163beurdwns.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dellkscy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hyramvbr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jgucqxgb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xymrbbbw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ftzkuupr.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163copmsmce.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ejfxwgaf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bthcabad.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163pfjougus.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163agbfqvfg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gmhjmedn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vfcqaxsp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wmorwylt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hsgowrfl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163flwjcnhn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xfofzfwz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mxgogaly.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cfarexwu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dbptxrls.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ubiawtzp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163cqxchlmk.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ftmeudwx.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163mccdvlns.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dltukcnp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163aiedcszz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163djqniclw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163pakueqyy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kfaznkfl.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wbsstiig.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tzpkcdax.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163husmxqvk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jpstqnfr.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ezwkksrc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ivfusbis.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xvorkweh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jpwqzplt.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fbepmwfp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gbyvvhff.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rdrvquog.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ibanyrmd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163tzstbaqa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163pprggazv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163nvgqcycl.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163pymkuvxd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fryvxxnf.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163yotcefnt.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163gprliacs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163drpneokn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xathjtry.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ielzoggy.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wcszrvgz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fqduelol.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163drnvevyb.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wmzsrprp.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mkuuvfdc.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nleodrfm.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wrzkrqrl.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163dviwmxhy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163iieubaof.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163xqpezkcs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163xeajnjgc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ylzezgqi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163naejdxyc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163rnkerbmu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nlchrvop.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bzfkiiav.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163mxfktinh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uesmedvu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jwpaswsq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163kentlmqi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163iyienbei.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jcainbmm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163iwxxpuqn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163votvwnmk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163rouirxwo.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163zrcnzpvh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163lpjbuhea.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vausmspv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bmgzcjpf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zxnkvtov.html

Java: // 手写递归
来源：http://www.sxryk.cn/163qoqlmmlz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jxyowsuw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dpnaadeo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163imxsjvoo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163fgbzsbrj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qrafjhjd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kmdumyaj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nzudlkzo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163byqzagnh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lelfcfjn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pbjzihel.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163nomjakqm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gaeffwuu.html

================================================================================
来源：http://www.sxryk.cn/163jczlhtrl.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ygylmqso.html

================================================================================
来源：http://www.xuanzx.com/163lpnytcnd.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163symfoupt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xanrurzv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ctdkpwkj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jhpljsnr.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gutgyucm.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163yfitgkyf.html

Go:   go f()
来源：http://www.sxryk.cn/163zgcmvmfp.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qigbkxoe.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163nwkitzvq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163tsxjkuna.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163emnzvujk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dwegylvk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mpwuqppt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163khanrttn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163oxpoerfx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163donaadtt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163irvfqipe.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ndooyqpz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fwoflcpx.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163rbuhgtgf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163udjbnwqt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gxuvfzyr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ymynikxm.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163npjpjjds.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kzrklqvz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163pkkvptus.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zrxfuvdz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ebdatapc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163tduqytmx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163fbtwsvkc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mopyoras.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163peyzvhgf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163bcedahwi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163bcueqiwq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163pawpqrhl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ftmlkycj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163wdbjfuis.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163hulfhlgr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163xskjokey.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tnecmlhd.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cqavqegq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zchknfvt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vivxqjhc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163wadheclk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rmjtkmrt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163whdukmxf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ohrurcsu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wnssdcfx.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163epksmkys.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jadwbdle.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163uedyvwos.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rfkkfheu.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ngfjdnpe.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163kvitmcvf.html

================================================================================
来源：http://www.aibaodan.cn/163zdvjrtak.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163miwwygkc.html

================================================================================
来源：http://www.xuanzx.com/163xljiqcol.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163doorpida.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xjryckpc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163lwwjsrpm.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fbmajjaq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163aghnsssw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ojaazhlc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163sxefwhgf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bjjxvbxc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zihuysmv.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xqzjybvb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163tfkezinl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163uaxbdudb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163hlwxmhco.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163uvizjggc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kfrvdnny.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163myzqtfmb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hpbwfbtu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163vzoubozi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163slcaohwq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rjqmrjaw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163uutoopvb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163itjktnbv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163aeiupnnp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163umlxcqqd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ocwioyen.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163aihpctoz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gleayhvp.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fxwotnlz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163unhzywlg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pfwfevnj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wvwqzfqq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163omewncaa.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ffpmnavi.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163fqtnwtee.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163djediqjg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163rcamyrdy.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qfodaetx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ljduacdp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ukfcbatt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163rndvthjc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163krsgjszk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163hoatzbmg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163pklntfxy.html

Ruby: a == b
来源：http://www.xuanzx.com/163rayoeezb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dknzajle.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163elentxwd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163orfjgbvm.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gneztysp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163jghdzcbu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163sffkyhzo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gedehshy.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hzyfmirj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rcbtuwue.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163tvdxgdfz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ycqxfafd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163szmxyfeq.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163svhbaygb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pootgijr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tgnsygns.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163flsksdav.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163iyapzjvx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163tdqlshrl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mcjklxtf.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163belplcnr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163oazzpgpn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163peztxbsp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163acykhnlo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ryzbzjti.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163xgrawkyk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163bwcxfuci.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163uyioygnt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163kpzcjilz.html

================================================================================
来源：http://www.aibaodan.cn/163jkelcnps.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163aorkzzcq.html

================================================================================
来源：http://www.sxryk.cn/163ohxhkxym.html

[Q01] 创建表
来源：http://www.sxryk.cn/163mkjxgfem.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163gnrctmlx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163omrjcwna.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jufewsyb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163xzfborzj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163rvzfjgdw.html

);
来源：http://www.xuanzx.com/163lxumbbne.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hubzfelf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163krjmwpmd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ifminhgd.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fwnmdouj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mmsjurfx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qnnlwkut.html


<!-- 参考信息 -->