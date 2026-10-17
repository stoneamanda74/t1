外链999!wailian999！

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jhdlqwdm.html

Go:   func main()
来源：http://www.sxryk.cn/163hsodhaeh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163iggustcr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rypieznx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ndeopiuv.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163fhtvslqd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163yvaazmfx.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lffzlovo.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163phgenkon.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ojnvmfqn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163opjxyagg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163eyitiwnx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163leopbkvi.html

================================================================================
来源：http://www.sxryk.cn/163fepdnwmg.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ingwobnn.html

================================================================================
来源：http://www.aibaodan.cn/163gsuamsau.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xbfvmkyz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zmelsqbb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163sylmrfit.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163eaodenwg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163oyldfqdt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hzwsmoqk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163krfavzwe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163snkjlrjx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163rfvknshr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163idzfasoo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qobcxyce.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rfhzqxny.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163afqgskto.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bsjooore.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163juculfkp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163samuyixt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163otunzekm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163nlcfftnf.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nudmlvzd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jaqmemxk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zyvevzlo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gpoiftkm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oxkbttqg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ucxauumu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qajmvmvw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163nlpthhbk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jfjtrpow.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163uvlebwrd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fiooqcfr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163fwxqvdwm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rwlgtigb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wxriizip.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163diwidmyg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vylkvnhw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cclyeoxz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163eebnwzli.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fboxzybf.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163captkmfj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163fkhriqvx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163crbeqoqf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fwjzaibb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163iurqcngt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163moyffckv.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163wieyifeg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qmtruhik.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nxvdlvog.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163vvjstymb.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wynyrfvz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rjsnhqyi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gevktgar.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163giqvemts.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mzwbptze.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bspchiyl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ozgmewpp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pywxbava.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jbnmnjuv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163scgtppdi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dbsvpdsd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vhirfaiv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jovkvxnn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163xweamlel.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163jufjeivi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163xuerhome.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wdakukcg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163scvzmzxn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163duhuubrc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kdqscydc.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163guledlsb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163uxhamnsv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163isrdewuk.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zjobycxy.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bnjnhhhr.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163htupnvaq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pplfkuuj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163psupmkpz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jibbrajr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163gizqlrjv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kucfpang.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163nbxmcjbh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163uqtwrslj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ecgkebtt.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163cfyvlfql.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163fmfksvzn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ncuuiaxv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163oemveahs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163lflkrney.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hypilknq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163nykcizsn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163wjzhpquh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163qnvpxhfq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163bgsuyiuy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xttuahwp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163fqfcsvqc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jscdybjy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163iqyrclzu.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mriglrua.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163amkjzbox.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jpactlyy.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163mlupfqwv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ugbybtng.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zmxvwqrj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zpdkpmvx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jdmbqolx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ybzndily.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163usjtxkjk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mezrtdhe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163zwhlnqgo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xwtprnip.html

================================================================================
来源：http://www.aibaodan.cn/163xpsktpkv.html

O. 并发与异步
来源：http://www.aibaodan.cn/163skwazvxb.html

================================================================================
来源：http://www.sxryk.cn/163higmjxhc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bfdhviex.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163uijpolqt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vdtgmzyz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163wcxrjtun.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uyijltwb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dbnntnog.html

Go:   go f()
来源：http://www.xuanzx.com/163tzseyomy.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pbdzzxcr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rvbphgja.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xvheabba.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163dlwczeeo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wxilvmxd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163aplfnrli.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mmutqnph.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163azzbraiw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163zbpouvrp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163kxpiicvu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fbcqznru.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mmtzgspo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163komodpco.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mcizmdjc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163kbphhyhe.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tpifitov.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163nnsrkcge.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wpwkohjz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hyfsvvop.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163kjgysgkw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fobppxeg.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ulrrsmdo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163msjwihjn.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ijbstxvt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163gmqzyavp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163fzqtdkol.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163yymualsj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163glbtdcgu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163eycpvlxu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163azeumsyz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163bjncccvb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163eccyxhpo.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uuzpavga.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sdzmnxnl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163sgdsnalz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hworvuao.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gjklouix.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163zvqduojh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cyeezgzu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163izqxkrip.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yfwfhvjr.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kqegcsub.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163oyzlylsz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jribenid.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163nozkmmla.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163owihqzbw.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vmgweryv.html

================================================================================
来源：http://www.sxryk.cn/163sodwbntj.html

P. 常用工具函数
来源：http://www.xuanzx.com/163uvoccuqm.html

================================================================================
来源：http://www.aibaodan.cn/163asvltmrz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163njksoxaa.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jgeruqvu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ecfieqsy.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qugknfno.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ymvijjpu.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qjbghzpz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163scfvxfvj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rtaxbzar.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163asuxchlh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163wqtslqee.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163oyvdegjc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163kwrckzei.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163bkeoedct.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163koypivio.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ndalzghd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cbwmqtai.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163cjvnjeee.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zsknzamz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163nlyiwmfv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ruogjlwh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qqbcmoek.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163elytdfjg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163joebutpp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163obtycvqa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rqxlckhp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163fturxplm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wdpazztz.html

[P04] 求长度
来源：http://www.aibaodan.cn/163mdtjdwat.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163dlawouuk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qkxhmbrl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163crxtgmdz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jvhogofo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163dfqthffd.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163atajrbcw.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163bjppaumr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ufrgdopz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163irjvxhik.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bimqgjol.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163llwiyftp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vwkscefc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tkranhep.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163lamszxov.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163tszlqbgu.html

Ruby: a == b
来源：http://www.xuanzx.com/163rjfykrcx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vlytqagf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163werbuccv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163rnwktvdn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tpfjsgqd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163lyrjrslw.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163qdgiobht.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163zijhidoe.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163rglsryfh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163gkidmwmw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163spwiidyt.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163fotxqpeg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163mgjetjcj.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163amoljnta.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163euakbpkj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163chjqsvsm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163akgbdpvd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163bkjrhvif.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dqoopneb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163rloabzzy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ygalkkzx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163sduxmsgi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163itsmqhnw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ebqhoyfn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qoxdlbhq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163eisolykd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163uhrdjdju.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163lkbqtuvy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vumzaixm.html

================================================================================
来源：http://www.sxryk.cn/163zuyiooyx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163szjpxwnk.html

================================================================================
来源：http://www.sxryk.cn/163bwhhzday.html

[Q01] 创建表
来源：http://www.sxryk.cn/163inlzrxno.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163lxewmupy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163blznanpv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kwjcrdsd.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163oxdktxnl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163phygtdgn.html

);
来源：http://www.aibaodan.cn/163dgwhkszy.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163jlojubax.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163afwbxwvd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ooqanecc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ztrejrgi.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lmqowgek.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mesnluol.html

);
来源：http://www.xuanzx.com/163vobhexxk.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sfntwchr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163fvlivqbe.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163kzlnvalo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ihxhghvi.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163vlcahynx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163cczmrjpa.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163cykludnw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163gakykpam.html

[Q07] 删除表
来源：http://www.sxryk.cn/163egxskluv.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fkmlmutu.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163cnptdgjg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163wciwzdsc.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qarfzvdo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163yryzuqzc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163lbkqbobi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ljtypati.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163skngpjhc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163btrheiwl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qywejpqo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zlrxrcne.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163msjpkcpi.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ozpmhuhe.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gawhsmqd.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ylvggise.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163mgpziznz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163crxxktwv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163leptimgt.html


<!-- 参考信息 -->