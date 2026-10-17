外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dcpcnman.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ymvmkain.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163etukvdvz.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163nxxuuqaz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zjtuaclq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163wfmbetmg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jonghqru.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163lixjctsj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xmmjqqxx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163tlsypuhu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163mdyztaht.html

TS:   require.main === module
来源：http://www.sxryk.cn/163vfpxbqyf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uacldpbk.html

Go:   func main()
来源：http://www.sxryk.cn/163mjfuudbg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jkkomfvf.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163mcoybgfn.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163mktniads.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163sysbokle.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hbjjadge.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163npcywrzb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jjxflzok.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vzmnclha.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163blgxbtzk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ctocgesc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rpndhgdi.html

================================================================================
来源：http://www.xuanzx.com/163uosaodkz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163zlldusqi.html

================================================================================
来源：http://www.xuanzx.com/163zzprlamb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ecxyzlkx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ufqvimip.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163esezbxch.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zjnnzixg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163pqdlzccu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ylkefwhp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163bngdwaah.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tunzmvsn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163yyundcru.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wdjxbmsm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jmtailhq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163cfwwgcdb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hizovjak.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bqibfnnm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163csknqbka.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163anvopuyf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zshnccub.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qyaslixa.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zrrfpvdm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163vhxqzrqp.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xwtwcrxa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163udsebkdj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zccwpszp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rcpfrkos.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ectkfnzr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163phvxllwn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163xsulwcvz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vhhqfgzf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163adtduoau.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163injyxdnj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fjqysglt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163njjbxule.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163qfibjscq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ztmkhekm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bqrseyof.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163unykhdkn.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xdejctie.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dwyphbju.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mzikrlmw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163luaujxco.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oywvqldq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163svnaomkm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ukyylkxn.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wfdqfvtq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bksgsxsi.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163sjxorjje.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163hulrpgcy.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ogyiuswn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bqvyfjlu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vqliynft.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163mctgwbpm.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163bwpcoorp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163qsdaiwue.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cfzdxlpj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zmnbnrbf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163jwxkahzy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ycoghhcr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wlaruzrj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ytipuvqv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163alqvtvra.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163itesclac.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163aeurdgzz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163dndjhkke.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rpijtgni.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tjpcxwby.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ivisewxc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jjfsjfrp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163peebinvj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gyvlobrg.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dvehfakp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163nwkhjmdk.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zuegbfwh.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163rwafruyi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163oncgvaou.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ovdwlhaw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163unccctgj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163zwgdttvb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ecyufjvk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163evhplobt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tonxnhgb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163xtxnyuya.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163hlquajbf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163orhpyjcp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163fhjvqifv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jkpwoycg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qotoheos.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163bscftjcr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ehuewvem.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163uctjrhpe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163dqmvford.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163tmcwsrmm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163wrrmyftq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zuncgaic.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163iwpdguhx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163naljysyj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163pkukjyca.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ecxnukxa.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ywhbzfuo.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zduhfgqj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kilydqfw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ivvuhmfz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hlfltddj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nifvofal.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qlqtnmic.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163habqmvyb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163kuxkveud.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163yvfpyojb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kuzmbxlo.html

================================================================================
来源：http://www.xuanzx.com/163ziowioyy.html

O. 并发与异步
来源：http://www.xuanzx.com/163vbwhperx.html

================================================================================
来源：http://www.xuanzx.com/163exchvxrx.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ybwoydlf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ljhqqvil.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xickdczn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wrcsigki.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yojwilim.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163siaqhhhu.html

Go:   go f()
来源：http://www.sxryk.cn/163kxgfbxfn.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zeyvugyh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qaugyuqs.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163tffmfisc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163fvhgisdj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163tluatqcu.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rfiwpbbg.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fatlfjab.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zrripvbm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bdwicfeb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163frsqytoq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hcshkujf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qfqmmlrx.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163szslvrsr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163himuxcvd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163cgrdavjx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tgdxxzpr.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163jpynckrt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163nymlwnxn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163irixkvaz.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ektljkwl.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163yglvwamw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ckdvtifk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163legtxedx.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dfypuntb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bguqtwzb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163gtplnzdu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163dhzehlsl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163igbnrurp.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pdkvvzns.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163uljikiui.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xzetmcys.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163oiwoxnmb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gmletcej.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mlqdlroe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163srwcaemy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163yjyibbpw.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163kpuzzoil.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163gckrdnfs.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163cjlqstil.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rtamzbwl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qnvaujyk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163haaccutq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ibrolfcc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mcfkrfct.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163wnqxuudd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ltiizgbi.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163thqdzhan.html

================================================================================
来源：http://www.xuanzx.com/163idbfvyvu.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163dukjssve.html

================================================================================
来源：http://www.xuanzx.com/163illdbwos.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163gdmfhbml.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163phcwgqhy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ixbztrfp.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163grqfruhj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163uwhfrnkp.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163pyvqtvqj.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163xewbyymk.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ncqzmwia.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163czvyrpsg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163lnhrwuav.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163iwjvncef.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zkssahie.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kjpowwei.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163imbgvzku.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163efavoxfn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gzqnpndp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lpappwav.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163mroesrci.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163usphvsxg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xpdgspbe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vmhrfrbs.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xheqimlt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hdjszgny.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163uywfxvcd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163fsbkbmnd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ztozrgxv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163argdnwqp.html

[P04] 求长度
来源：http://www.xuanzx.com/163edplcziv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mzioguey.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ejognljp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tkfkognb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163weieyufd.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163nhmgcopt.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163kgrmptiv.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mpfgrxpu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163adwzfzgu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jqnnzgje.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xicvneim.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163oblpadhi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dddbqcje.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rlznzccm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163cljgbjxo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ssuqiovq.html

Ruby: a == b
来源：http://www.sxryk.cn/163qolvolge.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ffpbtbnu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163clcosjti.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163kolwofio.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163hlcnxvqv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163brmyxvam.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hydqktpe.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163byzntvqd.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ghbegzvs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163qqmlfmnc.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gmvczcde.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vcsjnaig.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163mokhljqv.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163hslmekme.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fnlvcfrc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163peryoxgj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163qlmbkgkb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163qsuhvlmi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163tzsydmik.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163hqsdqvpo.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163zozswwdz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tzzculgo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163qmxtmows.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ejmuuvyw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163atrgjeta.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163jjcopdny.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163byftbpww.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ajjiimnb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163yfhiepmv.html

================================================================================
来源：http://www.aibaodan.cn/163brgjfuvh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163tgubdwsd.html

================================================================================
来源：http://www.aibaodan.cn/163bbzrfvwo.html

[Q01] 创建表
来源：http://www.sxryk.cn/163mjiknvwf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163lvoalnsq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nshedyfy.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163gbiuvgwo.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wfxjpbka.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kngiubps.html

);
来源：http://www.aibaodan.cn/163xupixmkd.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zdzxwlhv.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163epfryiwh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163clegodne.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163qlyvsdxw.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163bldigxnq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wkoqjujm.html

);
来源：http://www.xuanzx.com/163hwzemvre.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zhrvagye.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ijzynzic.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163okkmgljw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163smdrvxrz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163iayfcseg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ipvhcqjj.html

[Q06] 删除列
来源：http://www.sxryk.cn/163dcvfefhz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163axuhmokq.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xeuhfaan.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163kddlsedy.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163gjjiauhf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163fsvasokd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bzkoyeki.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ihkwmssh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fsawtnvi.html


<!-- 参考信息 -->