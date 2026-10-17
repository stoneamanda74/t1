外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qnalwxxs.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163xegowaox.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163aakfxrjn.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163bhyxfwyt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nuxbnbso.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ptvmucth.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xvuoxgbw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163smitpkbr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wwnlqade.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bgenmliw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dilqgtcx.html

TS:   require.main === module
来源：http://www.xuanzx.com/163xyekwqjs.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gbighwil.html

Go:   func main()
来源：http://www.aibaodan.cn/163atyxofnh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163iuoeavpc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uwqnjbhw.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wsytvbtd.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163cohfltci.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163twbmtarv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163miaoadom.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163poyviqst.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xcsivbik.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nmjklgzl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163hpkjnwib.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163wnlxdwhx.html

================================================================================
来源：http://www.aibaodan.cn/163imssuerb.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163orfvgase.html

================================================================================
来源：http://www.xuanzx.com/163ptjlutbr.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163benafqrr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163keslmghh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163uxrsdnmt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jdpflhvz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163piktrtol.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ysxrjucd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163gwokieuk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ouerobtm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163teuiseyw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xlxzdbwo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nsomejco.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163klgmtvvk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xzllpecw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sepkfyil.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qslnzoqi.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tiytywly.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lcfzhkko.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163tkovoxtk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dyinyxdh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163wjqupprp.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163lctecdpc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ywkbvvad.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xkqnwpfl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tgbbzhtp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163isyhlhcl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qkbjqcqe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163msmgqoin.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fsbugbiw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wciqqguo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ilwkpjpf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163szfczxin.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qsacvofz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163scqocpti.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163cohgncjc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qffpzljl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ypowojlg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163cftnuhzv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163vmfasnzy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163smtxrglw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sctoakfs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163afztgsre.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rghuimea.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163mnaedhxv.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ufthokyw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zvjtsogo.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163lvoraget.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163iyodifwk.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163okpdiisp.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163odpmtgyk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wyxytefh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lbbylvtk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163mmcsfodi.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163aqmyrmhq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ybqvjawu.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163oqjhhbzt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163udshyqkb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bbxopmhg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ydxwncev.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163iqonkgol.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163eehnhftg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ohughjgk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vhfrveay.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163liqihabx.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jfilnjgj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ybzmsjno.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163amrlvdpl.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163oilvmepd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vlynhmjs.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163mmnzavhu.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163krnltean.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163culxvypc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163yycfyvmk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bgizgrcd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163fyccijqj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ftjktxzw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163icvmtuoe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ilwzijba.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rteimpfz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163yfconsyc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163npuvmckt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vuovrokt.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163evmgtxni.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163aulnevyt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163gvzetonr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163suvvlbwm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163vrezdhug.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163czxylvco.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163fjwqkcjd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163advsumqn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163krlqufnf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163knyxelht.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fhymmbws.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163isrpycff.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fslzqzrg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163htwktibs.html

Java: // 手写递归
来源：http://www.xuanzx.com/163twioiris.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163rlysprsf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163soiyuwfa.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163shroaujj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163satmwapx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ppmamzjy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mpfnkqis.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jwvawttx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rpwcljpw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dvbqycmd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nhltgfgv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163zbrtbrnu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qtxkhnca.html

================================================================================
来源：http://www.aibaodan.cn/163xqpynszr.html

O. 并发与异步
来源：http://www.xuanzx.com/163jniamesq.html

================================================================================
来源：http://www.sxryk.cn/163dyjbdcuv.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163fpkzuwdn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163gkmwdjpq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qqtxwgdo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163aexipwbb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ezbxeuey.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163alyrcufj.html

Go:   go f()
来源：http://www.aibaodan.cn/163kkgdewit.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163viqdmepc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163skdugtvo.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163sufnqjty.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163lwoaruvp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163rikylrmo.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163elpeifru.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163worshogc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qozclqgp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qahocfvc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xryzjqzf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ufwqaett.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fwifdybr.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163lbafgzrw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lofdlgzh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163iefchnly.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ahpctlcn.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gpgfhfle.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gheahyqo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163jlshhdly.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163uhuwrcpy.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fklyooht.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ocdoyaar.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163bgzkbdyl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vtayvgtk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zagtlnys.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163kjvrurpv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163oudjkxqp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163szajquvh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ihsvooln.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wgyfuhpr.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163dejvhlhc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ykeqmcss.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cdtuocbn.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jcdwkafj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gsbovanq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gysqmzxa.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ebsqitgc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163gmrkupwr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zmgfyyos.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163aghaukdo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163czqlgmes.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ovrltgmb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lhiirogs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163lakzcibw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163lwmhiqoy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163juvjrhzz.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163btgnzbqv.html

================================================================================
来源：http://www.xuanzx.com/163djktdpaf.html

P. 常用工具函数
来源：http://www.xuanzx.com/163lpcmshjj.html

================================================================================
来源：http://www.aibaodan.cn/163agmayvqy.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163aufawkno.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xwuhunsz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rofezcef.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mizporgx.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dbpmzeqa.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163phindfhw.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wkzgwuif.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163acwieveg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xxokpnhh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163dghyfjvq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163yqejepkb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163vtaudyrz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qglaqqru.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rbdcfbgs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163bmvuczas.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163dhfdxiiz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163knweeobj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163nmoyphtt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163rivcqwfd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ovxdwalc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rwmzmzwl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uobzrcwu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kxcwafoa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163eaetgahf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163uxppqtfe.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163rtpiydrw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163iffzsxrz.html

[P04] 求长度
来源：http://www.sxryk.cn/163taygvmtq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163grtbjzbz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qwmkznnj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163udgdzcwm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hpnxgpfy.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fbkclmam.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163meakinwq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163voisypep.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163axjwzwjp.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163uhwljlnl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163qwzawuns.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163gvmoafgf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163tojvwnme.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gfjepine.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ssrsropn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163dtjiybeh.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mjfkatfe.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163imeqpehu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163cnypehcc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ybgwwrrx.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xktdwulf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163grkkzghx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163swsnqhin.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163svwfamhl.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163nwcqmqpx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163dffcxffo.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163exvxmoqw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163kjjhvswz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bszrxetm.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163paylzmme.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vlnwacga.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lcmmzwvw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163tzhssahf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163quvrvsva.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163pvfjdxql.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mxwycwfp.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xwzwjpdl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bfcjvwqc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bbcmoddk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163gfiowreo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nzepjxky.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163lqeaycev.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163qyxsuozf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lmjioktc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163bbhhmdgx.html

================================================================================
来源：http://www.xuanzx.com/163qyrdccrs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zruaxhfe.html

================================================================================
来源：http://www.xuanzx.com/163nuoipyjv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vpgexycb.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ektzlnjl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nsltnumy.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163uamnlihs.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163llpphaam.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163lpknswjd.html

);
来源：http://www.sxryk.cn/163wpwaiilz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163pacbravr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ebckcguk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fibpgjfz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rgwapall.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163vmlevlen.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163onnvytqp.html

);
来源：http://www.sxryk.cn/163yenwaljp.html

[Q03] 增加列
来源：http://www.xuanzx.com/163yxuzomqj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cafwafen.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ckuvnwon.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ivfpbmop.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hxgzirah.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163dwodbepo.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tbfkzhxw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163lbfclvpy.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ziagmhin.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fxtufpst.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xedpohla.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rkckzxci.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wkwywgrk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163eahziszq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mtzjykmm.html


<!-- 参考信息 -->