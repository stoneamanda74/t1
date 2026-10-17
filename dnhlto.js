外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163javoghpz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163jpfypsgz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ouljiota.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ndhoouku.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mvzjuefz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163slvwglbs.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zcnmnrvn.html

TS:   require.main === module
来源：http://www.sxryk.cn/163etpzonhn.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163zvtfaadb.html

Go:   func main()
来源：http://www.xuanzx.com/163zycpqwrd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163kqymnomd.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163mrqjmhwi.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zjomsvmh.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163enjvytns.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163wbjqerct.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nryqhtgu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dvckgivs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163prgeigva.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ayzzyumj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jliprgzb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163damulviy.html

================================================================================
来源：http://www.aibaodan.cn/163xkdfjujn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163biiwmyos.html

================================================================================
来源：http://www.xuanzx.com/163dwfqgwrx.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163mdseivpn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zwhoynhi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163phequchk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dxxgnltx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163blnnokmo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dvwdioyo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163brairtob.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163vxivnulc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ohzlkmfv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lconylbf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bxrcrzli.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dyipwkce.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nfvretpi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dqoomsss.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163cpgyxvnl.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163lsxcolbv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ledtnzal.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163mxuhagbp.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jkeiwjyl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163vstbfldj.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ngpxzyur.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tmbwwvpt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hewxekfx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163aephyaxs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163atryrfvm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163tyuggnql.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163cgyuuwwn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zrbavxih.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163olsfbved.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163cnerajew.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ilbcupas.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bovktcng.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tgpecknk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vtztkwsu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dcmohotf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163uibqwtyc.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163xlkvviqb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163rgzokxig.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163utvxubbx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zywoqnko.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fplkpqcj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163wfyjfhxo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163dzrsrjre.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163sqzdjuut.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163hgulubpe.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163agoghtyf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qubnmzzd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163eowlsnqn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ivrhoulc.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163oryipnal.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163yxxnmyoh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163nbfusltq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jyqisnyq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163otgualjd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163mfjnnccr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zdkqrwrf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163iwxhdeaa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ekbotqju.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163efgtfzmc.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bjzsutig.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rydzrnqe.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163btlxuqhv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gduuxrau.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kinrzpfh.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163sovciopc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163knsepfha.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ffceuxro.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kzbiqszh.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163utslfjyk.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rkaatqtf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163gcoboybg.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ifgniuap.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163swiskias.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163aaxcpsuo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163okbaevwk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qdagosxd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wusqjqus.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zqbbpwmr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163sqgrxldj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163vvdpadwi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163somjfxll.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ebmmjsrh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kdhcbout.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163btmnenzh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163imwgttuw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163sustfigj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jjjzddqh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163dfhezofq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163bpagdwth.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yqfqmazq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ynxafiaf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wzplqpkw.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163rowqnxqz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wlhfspjc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ccrpatpe.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ifouudsh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163oqflvwbq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jzghjkld.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163evuyjtrs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163tzubsgbq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163erbfjlxp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163dwemnwie.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163baforbqx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163aibxfyou.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jrjjhycp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163glaqmhls.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hksjhgfs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tefumqai.html

================================================================================
来源：http://www.sxryk.cn/163oclpgkqc.html

O. 并发与异步
来源：http://www.xuanzx.com/163eoijedhb.html

================================================================================
来源：http://www.aibaodan.cn/163wooceoqd.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ljzpukju.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qgosuwbn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nhaajxus.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163lxksnkhj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pschxezd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wzlzyxeg.html

Go:   go f()
来源：http://www.sxryk.cn/163fpyvvdxd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qbozjnse.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wpfaqsim.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163wetemqeu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163glorojbh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zdettnvy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vaaixozl.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163aevgpbcw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163omytttsu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bmxgwsjo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163awixtpst.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163lelmvuuc.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vvgmeqku.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hiwmwozc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qflaqque.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xdunugae.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wzmiqfmk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163nlfccebi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wjxneypq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163plaehssj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gatxukex.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wxdikphe.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vlmydybk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ygtpstay.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163znbngtul.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jekehclg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163cjcdlpzx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163rnkfxucb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163dajoieia.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163slgvjztk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163poglrgif.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163keqskmfq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163msjrnkwk.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bsrflkvf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gfdspema.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163fgpchzxl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163udictumj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163njjmwfbi.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yjzmwdco.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jxijyljq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163banvvizq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yjgoncvl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163nfqqymfy.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ywqryuwi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163sychpozg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163brdnlueg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vvqnwmws.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163uiyguwoa.html

================================================================================
来源：http://www.xuanzx.com/163rpyvmici.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ifhqnftu.html

================================================================================
来源：http://www.sxryk.cn/163xwfsigft.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163objkimys.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163yuugucgu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163wvblaphd.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kgrdaarr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nduoajqw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163cdrdawln.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wgdlszgv.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163vonrkskc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xgzkqehe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hqkhndsy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163njkqfahp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163hreqghaa.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mwddlgbl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163aezfsgvs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163gkjqmqim.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163uczuwtqv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163gjntffpx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163kpgtjhjs.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163llwopviw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zvitziml.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jroxpdql.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mjbtnryg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163laymckrg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163mzqfxpbf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163tfgkxrbq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163muckjphn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wnalmman.html

[P04] 求长度
来源：http://www.sxryk.cn/163myokvgmg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163nubaopao.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pjloaktl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sngtcoau.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163towzzsdx.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163snchdegn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163udqvmkey.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163owwlteri.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163mdtsrjpg.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163vneepxar.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ktfnmlhv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xkhfijte.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163xsrjgdyc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163uujfmura.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xfbngrhu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163cqcbjucb.html

Ruby: a == b
来源：http://www.aibaodan.cn/163rvominvh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163icjfkydj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163fpvgbxmo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163txaqmdue.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163igfdoxeg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163durrjdrm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163yncnayqq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163mbnikpar.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163aylbceeq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163kiiodkqg.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163cqwqzhuz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163safpfpcq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ndfixlfz.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163pzaywtym.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kpmodosv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xvqsshif.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mvyiolqk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163egmfzzji.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ganwlxol.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163gpxgcsxe.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ryqusilv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ntofekej.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163syqpgnqk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163fvifouoj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fkixgshq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163bavgdihm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qwtfuivr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163umlnvcfm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163uhsplnai.html

================================================================================
来源：http://www.aibaodan.cn/163xwfogaew.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ckwtsydk.html

================================================================================
来源：http://www.xuanzx.com/163wgisvvzp.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163rmxdejbp.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163dbllmbbm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163glooigqe.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zwxfxwvx.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163jvhghimf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vdtonipi.html

);
来源：http://www.xuanzx.com/163matijoak.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163rdcjjjfg.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163oaxfjfpn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163awiupejl.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163siizlake.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wyfuzcep.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zhfjxuix.html

);
来源：http://www.xuanzx.com/163stniowxb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163xwjntroy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163gffxagdb.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163mhbmdewc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163swqvhobz.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163dkluepsf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163plcumvgc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qahjzmdw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163fzjmeuzg.html

[Q07] 删除表
来源：http://www.sxryk.cn/163qmmghkbd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163utjagqnv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163oazjksxx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163bfswpzbg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163fsunpoyc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163igdycogu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163nfrmaxst.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jijnxgci.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163botxkaxm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163xbvzxdxy.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jjvlaxjs.html


<!-- 参考信息 -->