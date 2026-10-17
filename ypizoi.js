外链999!wailian999！

Ruby: exit 1
来源：http://www.sxryk.cn/163qrtzptqx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163steuunxp.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163khpdnaph.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zutdpgpn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163srpomfxn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163bqczwvrj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nshuaaic.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163cggefvfm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zvunwlzr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bsvosepe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rmrkpbot.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kvupfylr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163whcdtdsb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wzsuqbrx.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163potrliga.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rqimtlvx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163girnfwgi.html

Go:   func main()
来源：http://www.aibaodan.cn/163ypxcmitq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163xzmnhoxj.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vijwtxpp.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pqepypnp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mgexqgbb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dqqfkmwm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vtsbprsf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nvfllqkb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tdhutdai.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ryuvjqiu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gkuuowhs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163wqpxunib.html

================================================================================
来源：http://www.sxryk.cn/163ckaofimn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163dcptcbwj.html

================================================================================
来源：http://www.xuanzx.com/163ibnycqvh.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163omhppxhq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mmmehfyu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163zgrrakau.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ikqojhbe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gvuktfcr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163rrvhlgey.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163bjmvqlog.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ksmywmkq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lfklndba.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163piqkfxon.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xibimxwg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163rwiluyeo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lgyvcxda.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lqyoauuf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163qwgacokp.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ornkcoic.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jovhwugr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163waccfyxl.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ahtwwszo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163rlwelejr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zvnbtfkj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fcaslqbl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pdwagobb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fvkcfkey.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163cnclbsbk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163zpolwomw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163nywbmsdv.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bhhbzegd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gxdynfnd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163xvrmzuhc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lzftcmda.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163aitjqthz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163rnomahph.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163yjayhnib.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bgwwwpea.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163tnqdiymp.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163evkthbzq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ealfqmsi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zqbvspim.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rcbgfqrp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163khxopwsv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ospynvgr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wkpflswz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qwslsyvu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dyyjgwko.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163tbtpizkk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163emzjpcuc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163dqzzzjfs.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163txjgorng.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163evgqhtcs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163giwkbpwn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163abvwgqse.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zzvqpeqs.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163voyesyvb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dgopgrbz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zrhrtayl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163dsgwzaaj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wedyepur.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163gieuhtef.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163osbtebes.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163pbtpfylc.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163yvocokix.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163yxjjllrb.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163infqtjwm.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zxebskxe.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163axerduqj.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163znhounzt.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bxsbnbkd.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gzuasxnp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uqtsoftw.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163nenvbwkl.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ptatlxjo.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163afougohk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163fvazwzom.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gommgteu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qexhvleh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nhiwmvcs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163fxboosdi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163emepdvyw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163szkzunnh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163zstozqie.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wymzcqhe.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ghifddnr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163hhqjbmnw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163kvofocmf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163wvessvmf.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163lfnuehzp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163totfmwma.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163zshfmudh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jjpahxjs.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dfssevta.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163evgshsnz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163dnbsfhle.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bwjwbveo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ljgmiafx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163qvyebrul.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163zahkcpnt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jhktcsff.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163houxjejf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163qilozdtu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163mxahzhsz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lyhlwgrf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mhiijkmz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mbczrump.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lxezlldq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163neobqfjk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sxoabwvg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gyqhwfyt.html

================================================================================
来源：http://www.xuanzx.com/163efngzaxp.html

O. 并发与异步
来源：http://www.xuanzx.com/163blvujwaz.html

================================================================================
来源：http://www.aibaodan.cn/163javocpbr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xwkwypmi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pylsjaef.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163cqsutzjk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163hqbzqcrp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163buourjtx.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163byvxtvje.html

Go:   go f()
来源：http://www.sxryk.cn/163afzdlcys.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163frhikddt.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163hwvmzxml.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163pynocpsv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ytnsbhad.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163surdptue.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163thtscowk.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mehbhsfk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163sdsvztdg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ayrtpwvm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163byfwyzba.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hsaxsmoo.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163skcjguev.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lvihwwxe.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163xhqwglbi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rxiejdey.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163uaashtcg.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163codujsvv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163voguymjh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wtbenjbd.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163hsoqaeea.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rbmzsdpe.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163jcoeednn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163lpfmlair.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163psgrrnfv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xthdjmem.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163tmwnbwwd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qrxwmkqa.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ekrwddci.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dcnfjdjc.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163dakbyher.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jzgtfnsu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163dtmrerji.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163paeieapg.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163rjxtxica.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163jrewgjgs.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163zufiyubo.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ebtyeehu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vsbzykpe.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wgcsxtos.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163bexdgaxt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163malchugb.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bxgbtmrd.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xrnupooi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rhyisdnh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163vcasfrwh.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tkgvjsbm.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wohfvnwi.html

================================================================================
来源：http://www.aibaodan.cn/163msnocvbs.html

P. 常用工具函数
来源：http://www.xuanzx.com/163dslnbaeg.html

================================================================================
来源：http://www.aibaodan.cn/163oszwuvig.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fmoznhsk.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nmbhnldi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163cynvfzuu.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163futyrekt.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bxejeari.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163sfiiakbp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163oefubbhv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163fkdtftlv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wwjxiaay.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163mumodbvd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163huuqsssd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163trhxbbgd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ogsllmrv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163nhcfgnku.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163crvtpnjw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163uefhxbaj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163spjchtic.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163kmlaebvj.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rxmwpnjc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163fwyemqkq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gojffeya.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uhwirjqo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xfeappxx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163bkzqcbst.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qdzescod.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ywqfcuvq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jvndsrhh.html

[P04] 求长度
来源：http://www.sxryk.cn/163sttmxljw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163dyrupapt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bkzlpkxq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ifwkmomx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zpeqgczm.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163jrknkxaq.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mqfdqeau.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hgfalhfk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xtrlkfii.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163aemrjxvy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bsxikjdj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163pmekgbnq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163gfuwbmoq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dsykxpif.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163xpssvtty.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xdlxacoa.html

Ruby: a == b
来源：http://www.xuanzx.com/163yoklupmh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jqmfjogr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wnfxsuzc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163lgdygheg.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rfurzzye.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163gnthnkpm.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rhswfxvn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tteokiyc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163eypleoym.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163shvjywho.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kfwoeqdb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163essoxwhz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163yxckfzaa.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163lhothsxl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vnzpoqtx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cnrzbxup.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163jdvzdppn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163btcpmvhv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163dfktjgni.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163tbvmoslf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163amozzszd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wrxvrvfc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ufesxznz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163hjdseqrp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163zoycufib.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163zqylasru.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163sfvqfgnv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kazxrypx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163iwexymcb.html

================================================================================
来源：http://www.sxryk.cn/163xybhtunh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163eanlchjw.html

================================================================================
来源：http://www.sxryk.cn/163nzwkfubd.html

[Q01] 创建表
来源：http://www.sxryk.cn/163kdreyryv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163slfcxwqx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rxggloce.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163edkdzepu.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mzquxfpn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163kpvkpqdx.html

);
来源：http://www.aibaodan.cn/163uyavhorh.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163lsvjymwr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163pbxoqxyp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kkcsxwpx.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dfinswha.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163kftgkrrm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163unlzaahi.html

);
来源：http://www.sxryk.cn/163zyhuhjbe.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163psmfgyhg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ggbkfowt.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163yudfhtlp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163pooiqarn.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hdcjhsmb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163smsncxvt.html

[Q06] 删除列
来源：http://www.xuanzx.com/163klusylqr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163okowswwy.html

[Q07] 删除表
来源：http://www.xuanzx.com/163bheagtvt.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bvcjbcxo.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163hebwdkqn.html


<!-- 参考信息 -->