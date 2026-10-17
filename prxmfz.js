外链999!wailian999！

Ruby: exit 1
来源：http://www.aibaodan.cn/163ygvdbqsi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163agjkoxxf.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163btxtcayg.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hxockyct.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163goqlgelo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163cordqeja.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nmjzpner.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gymtqiup.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lnbhsldk.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163oxxhaski.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163oywkyymw.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wpppyqam.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163gxvkgggy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163jphkkkgd.html

JS:   require.main === module
来源：http://www.sxryk.cn/163pjpslelh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ucwtkwjf.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163edjatcfl.html

Go:   func main()
来源：http://www.sxryk.cn/163kkvwoqod.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163uhbnsanr.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163qsqiyvbp.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qwkabqnl.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ncvcslnu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163tbvblpnp.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nbiatcjj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163umhamcba.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163cwvfwsxa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fxjdikbz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163umrlhqfm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jorvdiwp.html

================================================================================
来源：http://www.aibaodan.cn/163fshyeqlu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fptfzzzm.html

================================================================================
来源：http://www.sxryk.cn/163zqewinar.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163lczunhic.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163uepvkhsq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163chytnzxd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kaqffejl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163aijsokpm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163clwnilhq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163kfnkhzrl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163okzgnuwo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163zrktwwad.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zalabktx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fvovjfhe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lbkmdipp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mhnbzmvd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163brsrbyra.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zlfkejme.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163klrdiwcf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vpbjxzuv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163vqezekni.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163bhsjzlrl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163okifnaxv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wlksliky.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ibdtxkwy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163boijfntg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mtamkssh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bxrdganf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163zsmcrxdb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jypbpwxq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163cxhwklce.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nlstyciv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163odznzrgz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uaylnhnr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hbwdwurv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163xsmtjguc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163gdhhdvmu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163eugjgrqf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163byvmirbo.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gxgtyaev.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ooogqisp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163rzifittk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wsrowuqs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163slipbnia.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163yjuyityp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163qquekglw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gxuuotck.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mcgckauw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163zcugqkka.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163kvuxkdab.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pkhmronn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ujbocedu.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mddlmmta.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wgtgkklz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ghpjhlau.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xairgkqx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163emmixjcl.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163eixvgutz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gxtirxzn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163erkgdvxh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163dpsbduch.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163bqzvxtfr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mijkoxzw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ujejponw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wqruoynu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163uyngjqsd.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rtkrcmtq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163iljaxcuc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dlxafwla.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qnolcrfj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163adzjlhcs.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fghcjfux.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163weyashel.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ylxyjpct.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163loppaeiy.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ghhkbggq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kswexlrx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tlfmfxou.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163guocepff.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dwuibixz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163fqmsoyfd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ljqpjuxh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163uhqmcucx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wvdpkkpj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163krnnszwa.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163lhiaqocx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163tmjnjbrb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gkucykxg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wfeurgfu.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vmwuafea.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163kskwlbkw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ljrspdei.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163tbfygycb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bfuviyey.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fctplpbt.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vsqcnilq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163igjrlenw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nmimtqzp.html

Java: // 手写递归
来源：http://www.sxryk.cn/163redwaqtx.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lhdvzznp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ojvvzgvi.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wwrutypm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163yvmqfvnn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bfduedsw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163yftservm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wgalaccv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vpambtos.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xmfvzrhs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163whqmhrtb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tqjzokpr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xunweyzd.html

================================================================================
来源：http://www.aibaodan.cn/163nnfqbgtf.html

O. 并发与异步
来源：http://www.aibaodan.cn/163jtvfoyoy.html

================================================================================
来源：http://www.aibaodan.cn/163rqgahnqe.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163xjgaadro.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163imninomf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fokiwbjg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xpamwygc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tlcukewn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163wvadlkgo.html

Go:   go f()
来源：http://www.sxryk.cn/163ekndzsdi.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fzhsztzn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163btcecrwb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mgdmzrnf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qfvfidrv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163hksgadrt.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kujfyuxl.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nshnuxqu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163zueielcx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zdhxgdsp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163yivlhbnq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fdhlckqn.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163phiashny.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163oactzack.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163muepwpuo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dnxlbjgx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cjavoqvi.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dpgpsmln.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vpbbindc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163scydvywu.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163gxtkmexu.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163hfqgqcgd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tniqjroa.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163yleenuhd.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163bafqqtbh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163hneyrjlg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163fnlxiaaw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yxromdiu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163zmvpxvkf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zpcgqzqg.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163epjpacmv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qlpitkyo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cdveewze.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xzbzbnve.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zdyryncm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163srvtsoha.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163iyajeiyc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163wixvsprl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163cqbaahlh.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163qfzqpmld.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163fbitocfp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xxaljabg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hptlcinu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nggbepap.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163jaovafpj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gfwhghbg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163pdmljfwn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163konztnbc.html

================================================================================
来源：http://www.aibaodan.cn/163uzmkmrzn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wsrypirv.html

================================================================================
来源：http://www.sxryk.cn/163vneqhehp.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163rcyflkni.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zesfedko.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163rwuojlpe.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vzkkrxat.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pbslczkv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xjecqpbd.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163gvbuhvjr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163eonhysxy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163muzuoogs.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zynwkbuw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qurmjfsh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163gspkoknm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163nycesdxg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mlpuzcrh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xeqqinuo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fmcvkejm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163fxyyslhs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163sbcdnakm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163muqzluwk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cmvkunbv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vxoyvcjs.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163blyeeklx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163iriqoihg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cnrwhqea.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163skubyrjd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163mdjvvgri.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uggckcqg.html

[P04] 求长度
来源：http://www.sxryk.cn/163opgmvoru.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ckzfhtwn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tqhrcqsk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163oflkuuol.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163uokjbuwo.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qpesnwwx.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nvqbhjaa.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163apuwtnay.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163cfqzdmjw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163pqwlihcg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ldublwsw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163pbdilqdg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qbpcbsfg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163luusedjg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xljvybab.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163raqagoqc.html

Ruby: a == b
来源：http://www.sxryk.cn/163tgbqratc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163hbwjhiyq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kvtknffw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163wiaohlip.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tsbxahpg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zecdnvqc.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zbphxiyq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163azevrdrf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xsonkerz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163xvfcybuu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163olmnyijy.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163fdtuojud.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163gtqtglys.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cxyhqcxn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qhqngdue.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kftxucbe.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rtrauuqo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xztmimkg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163miqpokob.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ltqdhnvy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163slmijzpa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163wrdkynvq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163tkojzaev.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163frabdrzb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163bpxmpffn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163avamfzqu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pstrsela.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163curytpwl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163lzndrlhs.html

================================================================================
来源：http://www.aibaodan.cn/163zacgrwqd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163lbkaaavg.html

================================================================================
来源：http://www.aibaodan.cn/163lslndawc.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tftrsyde.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zrpetwiu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rpmbllrm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jxdpubtu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163oxoiijfx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163rdfqnuew.html

);
来源：http://www.sxryk.cn/163grpcqtxr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163upeyaiuv.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163aarujdze.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163eavwenle.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rywwemmt.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xkxwcfyh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rvtdpmcf.html

);
来源：http://www.aibaodan.cn/163wgdpvyrx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163edvxniwv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vwyinyzz.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163hsywvyif.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163wblkdcbu.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163kakrfhek.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163dyxsorzb.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163kubivljl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163okwjvpqo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163tstsueyp.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163fiumjzhg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ddgiajiw.html


<!-- 参考信息 -->