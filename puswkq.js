外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163zcrnalao.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163czituiqr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163neeqczzx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rhqnjhlj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163iznksrww.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hqgqviqc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163qhuqncxf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163forgeyxa.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fmjcmuuv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163tkktakif.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hnrflifd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ccksncpe.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163cmwzjcmj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gsqvkken.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fbwyuuzs.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qazjhnot.html

Ruby: exit 1
来源：http://www.xuanzx.com/163issucpdc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ibdzklpw.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163klkzeyvr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hrgoaiwl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163kiysfdps.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163emlxnbrb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yfbepuop.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rfspqwtx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lnfkleyv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163nkseuhdz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rajfiesf.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163iwfhbece.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xjinsmut.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xjiislji.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wspsktyo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hmhsmbov.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dywznagv.html

Go:   func main()
来源：http://www.xuanzx.com/163eefgmarm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qjdgasdk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163tqcxbqzj.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zscjqgfz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tfhnrfeb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gqlbclmd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zrbdqodz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163llsyqauu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gvcmvaer.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163clxdypfy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cszseuej.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ybnykiqo.html

================================================================================
来源：http://www.aibaodan.cn/163ympyarcj.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163pylblcti.html

================================================================================
来源：http://www.xuanzx.com/163lfmfybvc.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gxdrknoh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qbiwkjdc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163txeypqge.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dcpvvvtq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vuarecfh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163seifixjf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hdnbdrbx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fmicwpkw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163chfhdyqs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163dtlbdzfe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gqwelksg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mhugrfkk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qwmkmsmp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iowmbauv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163robosuha.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tuvoconm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wbkffpjn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ixamvuba.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163cndtyqpu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ruphtmmv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wjklxjps.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zvhwzpjx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mqacgvch.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ktqgsxhf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163akkmduqu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163exmbjjtg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163snkpdhvs.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163uykuwkwe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rjvmijyr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163dsvoisoe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qdbwthhq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fdzmkbfn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ikqbgvvy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zehkbgnx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ewnqnbjh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nsklaohk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163uroufnyd.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zcblstni.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163fygqcxej.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ulaakyop.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wsirbqby.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163savogcgz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rrbztxcv.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xkpddyvn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163koeqtbri.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163bodmionk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163heutaieq.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163handqmzq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sywhwove.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163yllupomk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vxifpsdq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lzdimkvp.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nfukcxzr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ccuplumq.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163eqogsnif.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zygbmmvj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cwdufwfe.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lzntdgkg.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163hudtupjt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cdafiosw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mbuoytvd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163mjyunxfq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163momcevur.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zyfgknrg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bhenaydf.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xyrbnsan.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uluikdgi.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cixhzqqg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dvrysjda.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ijijfuqe.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163fcgbdnas.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fqpusvis.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163zzykgpsl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163rurfuwiu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mfgfgvzx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hrgzpmyq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lqdsjnbd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kscgarpa.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zabejtme.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163sjlfzjhx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qietvwnw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163akqxrzdh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ayusrupr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163osohniyb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zdggvmkd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163sutokwxa.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163aqjihlaa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gpslxyhk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163asjvlify.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163kjojhkjp.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163kedwidvq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zhpjmtqo.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qoskcxxk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pevhqytu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ooesbcto.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xfqvzhxk.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163tfuckqcp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163iabxwnkd.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hruphcld.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qhwxgttu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163atzqwyrl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163swklwozt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163crfqqizf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hnuvtjjf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kagowgsy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163iqxxnboi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tqjeypew.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yxnbbkhi.html

================================================================================
来源：http://www.sxryk.cn/163markdkkl.html

O. 并发与异步
来源：http://www.xuanzx.com/163kompapch.html

================================================================================
来源：http://www.xuanzx.com/163aqhwaqcf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aldermbz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ymogqecs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163abziffhi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uieqvwdx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uaykcaad.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hjquzooo.html

Go:   go f()
来源：http://www.aibaodan.cn/163ibdgnkun.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163czdocxzt.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wzzzwyno.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163bzoqfqep.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qlpprunf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163equtxoee.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ntbpbmcq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163kgiuwyjp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ydtjgzlp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163nrgdkipe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xcaobrtc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zcebeqrg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163tmfcmhch.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ekwwtnia.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wyubrqyg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163qspjfmgq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163chzrheic.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163gjcitztb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qizubhje.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163znarkdtd.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163omydfzbt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xrpgykhu.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fgycunqx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163yfrzhery.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nregyaai.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wwaxvkax.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uufxxyqs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163srnklfhm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163teskhxsi.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163chhpdndj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163artadpex.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163midhncql.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163kowzvyvj.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bmwxrgqw.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163tjrppaqt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zeuezaou.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bgmajikf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163bzclpgcf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163jigwxeec.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163henhywzy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163smyrixfr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163abrxixya.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oufogoci.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163aftaxjdw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rjathici.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163syuaegyp.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163oanpdxdy.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163hcfbaimd.html

================================================================================
来源：http://www.sxryk.cn/163ncfawqqd.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wzttobie.html

================================================================================
来源：http://www.aibaodan.cn/163wfafvcnb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ctiencot.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tekhvdkk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163syehqnny.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163lpiiefyk.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vvzjvzvq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163szrrpadp.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wqavzxdz.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jlkdxilr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163mnhhicyb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163okeoudow.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gjkrddtd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163lbrebcuk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jfhofueu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163enhmgira.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pvzyxulh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wfdxcnyx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163winkhcgh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mhydwigm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163hazxhgaz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jnfpvtfl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ywmlnhfe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ablvzpnk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163aglzzhqh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163wnimvsfs.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163khjpdhiy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163smmviqpb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163objlwdut.html

[P04] 求长度
来源：http://www.xuanzx.com/163ddqgdhdt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163pnogfkpf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qdessqya.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uxceomcn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nyeuqthd.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163bjsdswci.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ggzgvgax.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163uwnnmdqx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xhwwwppp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163redaiinn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163tdrpjapc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ycatsmtk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hcczordg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163amyiawwa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rmeknfcm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163gqqovmtn.html

Ruby: a == b
来源：http://www.sxryk.cn/163ijfsdbfk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mmfpmvke.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zzzjvfry.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163uobzkgoz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163souczryu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163crhmvgqz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163liprgifb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163iotbqyid.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163dpuapipc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ftwuqoeb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163noxlfndw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tzuffisb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163czmrxcva.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kvcrptbj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yekphxds.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kepbkcvw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163uxlyrvwl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vgwhsljo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163hxbaqhsi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163zqvtjswc.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163uefifcsv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163wonfwqdw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163dfrpycvk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xzisusio.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163wfhvfpax.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qwsqqymz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163axijgefv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nbmriahd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163uzpgrgqs.html

================================================================================
来源：http://www.sxryk.cn/163xeohjtpf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163stkeyrkc.html

================================================================================
来源：http://www.sxryk.cn/163klyvujlp.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zyxawzzf.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163yevhcdor.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163pkypmvzi.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uulhyktw.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cdnsijmg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tvqzetsc.html

);
来源：http://www.xuanzx.com/163qvwgrqvj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ixpowihe.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tynnighj.html


<!-- 参考信息 -->