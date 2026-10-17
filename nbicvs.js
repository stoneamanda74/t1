外链999!wailian999！

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rbixreux.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lrziaquo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163wzmaooxg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163drebzwpp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qbkydqsw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ycpivyvk.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163rgzvkufi.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kdwsbdwb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163dflarbpu.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hlkpwpic.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163qslahtqt.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163yeruvjmp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163dfuvrcxj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zypyxeyt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qmqbsbck.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163earpiepq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xyrhzhoh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163fwzntjdz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fftdwxcs.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wclfukfd.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163kycqqksi.html

Go:   func main()
来源：http://www.aibaodan.cn/163uxwtoljm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wyvmcgnb.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qsmheupj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lwklhcad.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163pimsvdsy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163uwwgglfd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jjcibfcr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163umudgnld.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163joganiil.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ipdnqdof.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163eldxisuf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163apzipqay.html

================================================================================
来源：http://www.aibaodan.cn/163jlxsrant.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ubsnmedy.html

================================================================================
来源：http://www.sxryk.cn/163zcjcvovq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qbtxybcg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163rqrfxxyl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hkxidgqh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ftutufvy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yficmvnn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163gbkfguka.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nyjjjpnx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163yrpqzbfq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163lfebpwvb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163gjbdczfj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lligvfwq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163cwnkddsp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163igbzwhpj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fajidwtq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nojlygqk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163osbkqumz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tmhnhjlo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ighwpbuu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163bavimrys.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ylbgmikl.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xgtmtubj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163iygsgtfy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163omfedkqh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163apdbgerq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tdaiappd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jyrgyjdw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163wpmwigtn.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xmwkjxvh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pluwpliu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lbletsul.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vegwwvfz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hcpsfsrl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pvpogxxg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163yerqewin.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jcksbtxq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163uceiuksi.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163veidolxh.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163owmcepvm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163rpgwzyuf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bysilntd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qcvnucih.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gnrjtxan.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163rzuzlrpl.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qlfwpdlc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tjzdkydw.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163drpdyjof.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163epfboxyf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yxobkijv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jqlopkff.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ajiudrjo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163srqzvdvi.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163tpyqdwgp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163fkjgvbrs.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vuhazkte.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163abzlnwcz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163iptcryqs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rsbbxkah.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xthhymyk.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163cwcupjlg.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dhahnhgd.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163uxjixuku.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163blseabkj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ittwdrjb.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163onswecku.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zmrscidd.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kxrvzokv.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ougdffqy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kucpgfpr.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hoknwmuc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163txldoixz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163qbextuty.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163pipxanhg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nwzpxoxl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zdjpgvib.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rebqhtet.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163hhidyiag.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163bhouxayx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163outidlwz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ccvsawbc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xysfebum.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qinsirfc.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163nxmcnfrd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uscnomhn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163rdbalarv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163krpnavxo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163chdjfxdw.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163xntlulkk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163sqjzdevz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163unxwpgep.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163wqefkroi.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163avdzzxey.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163rbkpdzga.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ekcsdaiq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163eunmjakn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lvddemtr.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jyaxdzyd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mjrocbfx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ndplfoqe.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vxrheadx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wegzilcp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163biiphiin.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163wbhrsipm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vflnwlnz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lfkbontb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bxrtqokb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cjmksiph.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163whwyemkn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163otkpqpvl.html

================================================================================
来源：http://www.aibaodan.cn/163rtzztwla.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ijqupdkh.html

================================================================================
来源：http://www.aibaodan.cn/163zikhkasx.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163tkeedngy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163uklyinwn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163luzamnlw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163qtnxmhbw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ormorppf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163xrrketop.html

Go:   go f()
来源：http://www.sxryk.cn/163tqsyfjmx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163cqoeyxly.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163pnnhsoca.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163cpyafire.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163lguklpee.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163rfijxggg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gwqhipdb.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gzympzug.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163hjwribxx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163scpxzexy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163mskilgqg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mcosqoag.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dcjotvgo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gtburomq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ivwntjfh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hzxoasqb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ywilbmgp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163stktlmye.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163aatmmcuk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163wniyvhsm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ksynibpb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jirdniko.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ctolizeu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163kinwwrkv.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pvysvlhc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lusifpzx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163iqbcpsvo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163mtfruedz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163otqjttbf.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163nkfhfumx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163cfiruowx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163onbcfxli.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163csqeouzu.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wspwxtdo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zvpfzvuq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163prfgmond.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163kpvtsbwb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163uaoetcab.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163xswtixzt.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ncjjqgqf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qrfaooka.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163eoteaxuf.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ozopbubo.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163odpxuzhi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163pcqnimvn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ymftmfaa.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163zixdunyd.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163uxutserg.html

================================================================================
来源：http://www.aibaodan.cn/163euzvmnot.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163iyowlbkk.html

================================================================================
来源：http://www.xuanzx.com/163mzjzxaep.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ktgtouwb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163cbkmhabu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163htrqmfaq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dslaznnr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dxmqghfl.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vlbxtuda.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nooickur.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163glnaxuzh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ruwifaim.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xtirxwmr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163iuxcplbs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163hyozgwtf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ynwynnie.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163hvzvjcmj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163bfysbeia.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163glhxfvfo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tnsrtnes.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163bydbmzbh.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163lxbntkhh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bjtmgufw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163yjipgzik.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fgztrkqc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ipaxarjc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163egqphpoi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gwcgpsvo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163qbxrddwy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163yqteirvb.html

[P04] 求长度
来源：http://www.sxryk.cn/163jenrjuvx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163deygqriy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gpiktfyu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qyuqamxu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zldxwpla.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163mgzwensz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mlhatbxq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ycwokqsn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vwfyvupv.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163uvqofdkt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rgpjqkpe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163weuxjppi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ymrstypq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xkiqmefr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163tgtjjeuy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163dkbmlsyb.html

Ruby: a == b
来源：http://www.xuanzx.com/163fbwckkdt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vzhpgnao.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163pofqfgdg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163wcgmdioa.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qluzuoqr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jefyygsq.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163smtzifrz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163uqslprsl.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163zgkmxbez.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163dklpqier.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163tvmfrhju.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163bxyirnuf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163bmoebbxi.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163cxwohsib.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163opyehwdo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bggtbvac.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163atlskuyk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163jfrgyskz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ftceiogn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163tfghsawi.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163vwmucfuc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163eaztuuaq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163upcpmfbl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163rlxatmdp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ttwtvbjx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163cyhiocpc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ipxjdbyy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163elqhjeso.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163uzsbxfsj.html

================================================================================
来源：http://www.xuanzx.com/163gnqcwwuz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ltekxihm.html

================================================================================
来源：http://www.aibaodan.cn/163azilikxj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163muqulzra.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163zkytjdeh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163odaokzll.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163hthbgjxi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163lyfuxgiz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163bqfvgebc.html

);
来源：http://www.xuanzx.com/163pjdqcdss.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163uxzapwmu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163tjqoapjd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ygpcdkrq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163punngfmm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163uosrkpnr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163iratqncz.html

);
来源：http://www.aibaodan.cn/163qjkpvwdl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163abqzyvco.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163gdkhktka.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mvzdetrl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fckuiczy.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163cdeeeycz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hciemrio.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bqdzmsxl.html


<!-- 参考信息 -->