外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163qrvfphzm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163fhvnlntp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163biquolks.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gukgbadu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163uzfumkhb.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yrclwkte.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qgpyjbyk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163honhrnlj.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ojdyqemk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163nyncljpr.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jkwewqvj.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163urdeubjr.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kpytodga.html

Go:   func main()
来源：http://www.aibaodan.cn/163yprgidgx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jpixhibg.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qvirzwva.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bmylrngt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wrquazcc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pghmavdj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hihhmwrd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zcwkkiiv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tpnjfrtx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163rofjzneg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cbirjfff.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163eombjipq.html

================================================================================
来源：http://www.xuanzx.com/163onjxbdpd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163siyabkmh.html

================================================================================
来源：http://www.sxryk.cn/163xbjeblzz.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bfrhguso.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yoicnwol.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rqhojmsv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zhzssqdk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ndurnfhb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mgubyrgf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163iykudzrw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163jeslfmww.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xcbkbhih.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163nqipvloh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nujuimik.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xatziiro.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zzeenxtd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cnyhaelk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163fdkuakyy.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163wktmnvgo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gyzlfbmr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pyuvwwbu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ibxptdcn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163oacrjhth.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kdpzgwgl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xbtriwpl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rtyennrv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xdosjdrj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mgshdlqr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163llrzwfnr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ezktdhly.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163pabvvtkb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gdiwfcna.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hqyqjurm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163eodizoei.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nfericze.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163aebfaxyj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jtntiwxi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mkyckxxf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wrdjkdat.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163hgancqcl.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dmpjeyid.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nhjyhhub.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163strqscsv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vfjgxibp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jmscfght.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163nbijpizw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cffvriwz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163rcfxqhvn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qffefoho.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xmithatq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163phwlevxw.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wifkuvue.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wucesxcd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163xjwkkifm.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vvfjzrwd.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tujikwds.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163josdtbts.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qbmrfsrs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163intinora.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163nydiffkk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163erdjdqid.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kntvdfqb.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zoljjmke.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163shibawez.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vdkzgjbt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163efbkaxba.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cxfdxmtl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lhdokzey.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ucpagkze.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jjqonbkw.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cnnqmhbh.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163uulrhxuc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xgfirdys.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163djvpleys.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163byouibqm.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163bykfxujg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163mxnxehnv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ucpfqsmo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lkspjjwx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163yxdqfokk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vimnoqhr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qncftgti.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163srkdqioc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xxixozhu.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hxyosmxx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gfdxswrc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cklrugyl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163owpucwjg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163pmtahhju.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163wcqwxmdl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163uzqpbyyb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vqcfothp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163bbmqfxkn.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hlgosvmr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163nhopnejg.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hwlgqxfs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wsdyxkpd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163avitejew.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163lchxdqjv.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lxhcltvd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163vztaszcr.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lkbuynba.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163qrtgwwpp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ipjkanvt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163oukqklln.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163svojonqq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163oubxeysm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bghqgvbb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163mglweadu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ackhryuu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rxkjgzwi.html

================================================================================
来源：http://www.xuanzx.com/163ynpsvqhv.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cnesrhdr.html

================================================================================
来源：http://www.sxryk.cn/163htarlhxs.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163uegpvdbj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ijzomdkg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163sjxconit.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xmovxqcv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kfwqnzio.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mnsbaxbz.html

Go:   go f()
来源：http://www.aibaodan.cn/163tfgmbtwm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163nvxrchyt.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163idxnlzxg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ptugasdj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ukfabvbm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163buvyiehh.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163auuaqzbv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mkdbkprz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qslmzouq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163medfhazk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163nsotdwxw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jzukpziy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163cazhxjhu.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hkcyugbw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163vooycywf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163sipekhzl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pghgcnbh.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hsxsfmkv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jpeyzxbc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163penncvjv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163pnvjujyw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163eisewzwz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163grljscqi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ukbnylnh.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163cpxqbems.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163mqgabblz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163umzkgcwg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163mspuyxqb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zbiottln.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ijjtcbkm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163sewiqrch.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ogiuzhip.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163unoduzde.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bwkmxcqj.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ximbufpj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163fqmxswcc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lmpuukhe.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163hcqwvtfu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163cduoruuy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163eqffgspw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hqvkndlk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fvbepisv.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wdbdodkw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163krvtpvyj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163dvwkgexm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163clsddzgo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163lenzerep.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163nfgrcjjd.html

================================================================================
来源：http://www.aibaodan.cn/163evernqfn.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163mkzykqzl.html

================================================================================
来源：http://www.aibaodan.cn/163ykxbsqrc.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163djldxvth.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163qfovvzha.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163pwwjoavl.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wcibliod.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zqjpllan.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163uybeifcl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lcoclvig.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163pecgazzj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163catpwbqe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163npbvdnlb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163cfhdrcfr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xywalbxq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163crvmgylb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hapradup.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163vvkpmwsy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163pgfsegjf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zijaokol.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163pzpihzfv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163aofbrtxt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ikjxtwod.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163jddhansp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fsksoiqp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163coqpymcf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163sfnaocmh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qqfmeobr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163pxzaweuc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ykyxmcmd.html

[P04] 求长度
来源：http://www.xuanzx.com/163robooejk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ojcemrhb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163fqkxloeh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163itgdgosv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aegokxzz.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163poxsasay.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ceoguumc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163jtwfcyin.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163oufrtcil.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163sksqcgzb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163llzkjqgv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163yfxflvpx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163glwyfwro.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rvmlqdms.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163kkogpiap.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163olnjvhkx.html

Ruby: a == b
来源：http://www.xuanzx.com/163bcoaemrj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163wiuoagqf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jlxvlttz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ojdkwkll.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163uxkxcric.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ijbkzcdy.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ckmzspzt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163eweofyfw.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gkdwtxso.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vnifofuw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163wqqtoigq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tqkwmnre.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163anazbsbx.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163fnzqcllh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qblhabwb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xcssmbwx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hajmsdfb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163wslihsox.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163lveduzez.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163frcmspxk.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163labjzrvi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vczqcxci.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163rmeehqtq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bylmuhlj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163xngclfza.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163gdapmfqd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163flunhsky.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ixdzznvl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163wucanjno.html

================================================================================
来源：http://www.sxryk.cn/163tppryopo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163nkzlqgay.html

================================================================================
来源：http://www.aibaodan.cn/163sygbxckg.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163srkvvqcw.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xelffsmc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jigzwdqw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163lmitkwpd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mlslwksy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163csuujwze.html

);
来源：http://www.aibaodan.cn/163djwmskar.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ubmqguer.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ybsufhnl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gbkxsxkj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163dovhpwuu.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163vjremcgp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gyeysjxl.html

);
来源：http://www.aibaodan.cn/163bzcuievy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163pnefmxal.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163guqaoaye.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ynaqnyvh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163lindpcxp.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wawkisbx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163yirvlynj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163istzduyd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163agnnoxhq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163gjjbjplm.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163utddzewr.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163eulxgmgu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163avcqqzbd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163hiixqaou.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wzruddsb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ochiskcf.html


<!-- 参考信息 -->