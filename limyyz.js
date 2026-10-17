外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ibcjiyab.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163bibghxby.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uqhwiipo.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rplvjrbv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xyckmgno.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zhyxbkux.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163auvfxlmp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163otzhorrd.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163wzyigqkz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163vivflkgm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vbglbumt.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163qovxvfgd.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163stdmsvqu.html

Go:   func main()
来源：http://www.aibaodan.cn/163jtqkmhgu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163tbfgxadk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163itswoakp.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163rdzzjygk.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qjyhwykh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163yigorudo.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zyifvpoa.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163moobkhtb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163bccvkjnj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163taexhcup.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163rycjunlf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163eqiucfgd.html

================================================================================
来源：http://www.xuanzx.com/163myuqzost.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163atwavsej.html

================================================================================
来源：http://www.aibaodan.cn/163ddpqhvcd.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xfbfqhmu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ukcmbphq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163hmlhnbdx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eksacsfc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yokjamkj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mpfkvikl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163eqefezrl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163nsimaksn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163imvtkupz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xjsqnsya.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yoonglmo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163tzbksust.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uhkdbjzz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163demsuvqo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vhmalton.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163mycucira.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ikhqkega.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rhmmduvs.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163eipwzdlw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163sfozlnnl.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mswdcleo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163izylmaae.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tpqmepvt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163axioibhr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gtkhadaj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fclmwfbe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rlaadvnx.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tpjvyvcg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qsgcqrlf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163eyzveiam.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nssfswjz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vgttyoch.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qkmlekin.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163eneskmmh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ekchvcdt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163jwssywlq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163tbopcyql.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bpgsnlmc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163tglevnrg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vksuryac.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wlpsowrp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163kazdupvh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163atixoafh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163bqiallke.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163srycnthq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zdmstnsd.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163bxqncpiv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ooykggvj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nvuwetaz.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wlnfpzkx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163omzqlsrn.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163kigeccbl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bljisudg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cpfskzkb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dgeusqre.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gybolrkn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kiyedkrt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ycaxvbgk.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ybrpujgn.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163cdtyhhyi.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163wrvidthr.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163dmrdkzwu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rjeixadn.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163gpwrzxiy.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mehtibhk.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163blpajifn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wcsdkfyo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tbuowrxx.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163bkswtano.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cabgakyu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163sccmuqal.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vmflkrnv.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163nkyienaz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rdlafxzn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163fjghlsef.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163omfzxhdz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163arvskbla.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jlkvxyje.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163lqqbnrjo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163fydtwmhe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cqlhschw.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163iybafbyr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uyengcwh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ttguworp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163avamhbru.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163onbuesqk.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gttmswrq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nuckstjr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163lxwornpp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163yfvcwxgb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163oszdrzna.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163byciajwl.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tshytiyc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zcshalzu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cimpvupf.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dgblujkz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ylyuahnx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163saldonoc.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163mqdsgdey.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ewficamf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lgeovhwc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163sxssyawq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tphowsfz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cyqgxqhb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fourfcmy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163aqdrcogy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163olmdjzym.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163quujeqtv.html

================================================================================
来源：http://www.xuanzx.com/163gtjnwwyp.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hvmqzsbm.html

================================================================================
来源：http://www.sxryk.cn/163aymvkfxi.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163solkxpvq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163fppsvbtm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tmkoxrnn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jybmgdan.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ogbkjtcc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163aifmkmez.html

Go:   go f()
来源：http://www.sxryk.cn/163yxymwsmm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xnqnhatz.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163zkvdiore.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163rfpukazd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mkfblwen.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qvvivpnm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wxzqtmfv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hrafictb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163umwqyyvj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163olkngtoy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dpwryyyl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163tvuxvpzi.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ejghngdd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hdqwwwoh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163forujcjt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ubjlmmwi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163khrhyeke.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163fgqwhdet.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163uniosrbf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163nhifbyyl.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mapibigl.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163httjohcf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ownaioqb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163frfusbvt.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163hthkugzm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163jffpdkqh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ugrykpzy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163oqihzlqu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nccuvkyt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bbejmhjk.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lzlegvmg.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163wmwotiyb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rgzdczle.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ovoyldne.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tpaoueqr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mkqghvfu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vqyictpc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163llxusvpp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163akvedaiq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wbugcgvb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pwxnbsgb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ycwrbpvk.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mlrugklf.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fyxfeefc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163vhvolhtm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163bmfiabgn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163omkqkanr.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163blwdtofr.html

================================================================================
来源：http://www.aibaodan.cn/163hwvgagom.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kkjokffl.html

================================================================================
来源：http://www.aibaodan.cn/163qontyfyh.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163zhkkorbe.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xhgoljur.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zhmuxkts.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vwkhlzwy.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jbraizix.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ziedglbi.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163jstcsgmc.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wkrfhxjm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vhbgnbra.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163htgzvyjp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163akydxeby.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xjjighmf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jszcweos.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163itjypfwa.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163buizculk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163pfwlxbyn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163xmyusjsr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zfacekim.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163fafgpvcz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163amslypsw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163dlovygfu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zcqlzdeu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bickgumu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qavedxjw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163auydkrjm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mgdnsjrm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ozrqetcf.html

[P04] 求长度
来源：http://www.xuanzx.com/163jqxxqhoa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163wyfxrtsr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vmxjianm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lgeuxtfp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pgfjrejo.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fttznixm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163yewfsikw.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163llizlerk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163nwbqbefy.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163kobrfcey.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163snsesarf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xcephepk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lacdmvjk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gwpsrsyk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163onkzqalp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163icejgbjo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163gqyidbud.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163abvhsgqp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bdvecrzh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163vyeeylxr.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163yqoodtea.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163orbfexlo.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gdavxbua.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jbbmahib.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163lpkyglfb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163owetiiaz.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163fgkgtpzn.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163zzaaqjst.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163gtcbutuz.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bplyngbu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hpllysqb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pgdyeyfs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163exubwosh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163grsztdzn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ohxpmabv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fsapbpkh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ygzjqqze.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ttxvpggm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163zobyjaqk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163zvnasvof.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163gfnxltbt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163wbhaddvx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dnhaqhbd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163pgrswjmu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163weqiialm.html

================================================================================
来源：http://www.xuanzx.com/163idodcwvs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163knqdibxq.html

================================================================================
来源：http://www.sxryk.cn/163cievcxtx.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zfsemvla.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qegkpwel.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rhtetulz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mlhpfhgj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163lmqhwlrw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163dgsgtkvv.html

);
来源：http://www.aibaodan.cn/163fuapsbtt.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163cvcatnud.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hodopjgq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ljzfwtcz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163uxvymesb.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163vqqqhgwa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163xmasbhsa.html

);
来源：http://www.xuanzx.com/163bdglbbzg.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ohmhwndq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zpnowwll.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xegqnrqp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ssaettfn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xdsnybnp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163bdffnbuz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163kjjeklza.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163fvhtyntq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163oyuuzeuy.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zfopkjqa.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163zvpphryf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163epflodgy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163atwhwohw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163lxuayium.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bdjkmxkm.html


<!-- 参考信息 -->