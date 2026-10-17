外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qhbfbsuu.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163bwedkqqf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163stzboebv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ojctopib.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pfhnnboa.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rvihwhzc.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wzaozxos.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qmfpknbj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lmfeiruf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ehwqwzda.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163gborkcfy.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rwfqcusv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wntooska.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vghjpcqw.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163tiqsrpat.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hmqjedis.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rfjxbgky.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ybthbjay.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163zbugwqnk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163lbelnjss.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163kwdyhrel.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163poghaujl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lrwdxues.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dgbxdzzt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163gwxmttmr.html

Go:   func main()
来源：http://www.aibaodan.cn/163ssjuqtpa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vzczifyt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zawcwicx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163eieqtjkw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163yvswytkx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163takqhsdk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tycmixmu.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fjqrrvyb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rykxvmbd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163uxnloten.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163dudyvsoc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163muofcqqk.html

================================================================================
来源：http://www.aibaodan.cn/163mesxvjuj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163bjwubodt.html

================================================================================
来源：http://www.sxryk.cn/163wcqxcypq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ldoiogsu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cprqgqhr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163scmpnlco.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rboxrlwf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sorekhds.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163eejudfas.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hajrkgbp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163oqolwlsa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163wgmgndvl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pdcqsnvt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163aecvkohn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qaqzoxsu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kjqhczvp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xszggukb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163uuoqxzys.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163efqgcahm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cucfybod.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163gyikfama.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ixgikesr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xffjbthx.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ojbazgkr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gbyctufu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oflicjar.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163psgpzuta.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163dfbxfpik.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163soymzmxz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163uibpnefe.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163stwapuik.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jcltqyfd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163qpxcsoxh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ssjllptd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cpdpifap.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163zywhulqg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wtieufal.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ofhggpve.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163aqauuals.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bqlcgnim.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163quglxczx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ogebhbgt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pmclwctd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yictgxuk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mzgzqyer.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tltzyhff.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163edquyktu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ajmqmmzk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xpsxxgjz.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163tukrsxxk.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163axxqlout.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fyanuwfu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pgvofuit.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qoyxtyjf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sthccbtl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163eutynrmf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dinzuzhn.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hiiaeadj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nyothcei.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163xbyzuhtk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163pbkyunpz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vmfnzhdr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kdnobyom.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163adfuncwp.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vuzueqnr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rrruzjqe.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ylheynbq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163bpfuccsm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163pkjuiswg.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jksdcvhc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xlsiuwsh.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163iujxqils.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163fqgcoryi.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163llmrrmzy.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163slbhfqsf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163jzswlkpw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163cepvfmpp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163mxamsunu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vyjbngfz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163bqreccpg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qdeancku.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163rwisdskp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dqiaxknr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163kbjyrocc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jvpsceix.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gqbawpta.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nevqtwns.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ekghcgak.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tidahdzc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qkotiisp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163njknkfpq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163tsyyzfyq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163vnwuxorr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163atbfyvju.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qpqpyicp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163juqfafir.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lyllxcni.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jwcgswoj.html

Java: // 手写递归
来源：http://www.xuanzx.com/163irkzahhb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ttrxzeuo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163hjweptwk.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163mlllrdvl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ryuchwtd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zeowezqi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hwbldlbd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163yytqbicg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xksoftqn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xwxuaepr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163gyoffcbb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163kbgnfpcb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163trjglcog.html

================================================================================
来源：http://www.xuanzx.com/163wmhiwhlh.html

O. 并发与异步
来源：http://www.xuanzx.com/163qzbnnimv.html

================================================================================
来源：http://www.sxryk.cn/163xfgutfhf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163etqmmful.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lkkmbpam.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163amtujsin.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hanizrnx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ycasrgcs.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163jdacmzph.html

Go:   go f()
来源：http://www.xuanzx.com/163splxlhyh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163cunicptw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wbzcthlm.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163skzvqdnj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rvsoldxk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rvnzujvy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yezvvopu.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163eunzrevt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fftzrmbf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163uetgwvmd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dazahgsf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163tcovwmyb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163fmvmlugo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163nvnumwgi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163epfduxnk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kytlocep.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ysphdbni.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jeomzgjh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163mckvvcyz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kmdrilur.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163aonmhtcl.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163vsnusejf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fxyqoxsq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163akebcfoe.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ganzoayd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rekexisp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163whetcnzz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lxamtqoc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163fpxoatcz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mlbxeszg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163xgoohjvy.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163olxqqdpv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163oismgxod.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kicdqkix.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ajcmgmfn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163afpprbef.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tochhmeb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jxajenig.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lwxkcrus.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rjbyfrzc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163wsjaparv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163pqvsfgrn.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163aygykcpn.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kpkugivl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163pokhalkp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tuymxxct.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163smwoklss.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wmkqxtnr.html

================================================================================
来源：http://www.xuanzx.com/163jtkzrris.html

P. 常用工具函数
来源：http://www.sxryk.cn/163glbnyiiw.html

================================================================================
来源：http://www.sxryk.cn/163fqnyqxhy.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163lvknrlbv.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163awxmqhuo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163alythxlg.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xronkwto.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kmxuxylu.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kzfwfqgk.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163xpvaoumh.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wkznvbcr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ixpxffak.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ojijvegy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163elwohvjj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163sbbqchba.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zgnetzue.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163oejmjpqu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163olveyqsi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163dughpmsc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ylqjvpja.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ajvrwwwu.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163imehvjur.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163gcxziesi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163oagogiqg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nlwkwhio.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163msxppaqa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163iicplsyy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cekgbuez.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163phniebky.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163xhdyrbkw.html

[P04] 求长度
来源：http://www.xuanzx.com/163czgjdpcb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qntucbra.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hsqntzwf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kbtmwwzu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bqmryvcw.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wzpxhuht.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xstkknrj.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163vegcssgu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lsaqmrqr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163umglvtwf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ucjueupg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ovkpuizt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163bcvmulpd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tlmrpege.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163aojgviae.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163loxvaswd.html

Ruby: a == b
来源：http://www.sxryk.cn/163ehbdqfmt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163laswfzue.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163kzrwhlzx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163vqavkiyc.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163qmjwqyaa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163iahbsmpy.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rdeydadb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163aztakmbv.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163lgifwsbc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qngbuwvh.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163saurugoq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163chwzcgyz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fmmvoteo.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163imojqtvt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jxcornda.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rkdbyvhu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163hxkxfpum.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kehtxndd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hkakthiv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163pfugpcbl.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163qzrontaq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vugmourl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163crxorogd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163txamgpjp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lgcdpgzw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163zqqclwrj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163cmvkvccr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zmfekoiq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163daopkxqe.html

================================================================================
来源：http://www.aibaodan.cn/163kmmkithn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163niecbyjk.html

================================================================================
来源：http://www.aibaodan.cn/163eohkuuex.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ddlsgbmv.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163asklktqm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vqbrhgas.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tkfoeuam.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163myagodzo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163zaspjmwh.html

);
来源：http://www.aibaodan.cn/163cfikatyn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ferknaji.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jwcqgxow.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163klyypqxr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163omwkukxu.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ocgslrpc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163rqxfqscj.html

);
来源：http://www.sxryk.cn/163jcmgassp.html

[Q03] 增加列
来源：http://www.xuanzx.com/163neeeyiir.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xelusbho.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pmmwpkvq.html


<!-- 参考信息 -->