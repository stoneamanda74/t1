外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163icceoicf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ljbdyqwk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qskwieva.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ywivunbc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163yhsmvzqp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163pwvwhsxu.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163pebspmbw.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ihrawxin.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hipknjso.html

Go:   func main()
来源：http://www.sxryk.cn/163xmcdtikv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163txwlnuue.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vlgrasdt.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wyctlbsf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163uxfcdcdl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ysxbrumh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dcdzfjwq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163orsryjea.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163umshjqtr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xqtpdwhq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cyxsgqgt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163clqzeveo.html

================================================================================
来源：http://www.sxryk.cn/163vowegeew.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fouyqhaa.html

================================================================================
来源：http://www.sxryk.cn/163akvfktve.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tzmxgzej.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xdawmjra.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ffcwpmon.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cauucaov.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163grmnoeio.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163dlrzcezt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rgkvqplk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ccclbequ.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163uzpkywrq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mnrvzutq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rjgyitxl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163onvhpdus.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xxorddou.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ixyelyim.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163jxkifjbx.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163burqcqcc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hajhnnom.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163xkoveivo.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163vfvmndoq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163amakhuhs.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163njilczsh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mekhmnme.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163prphrxtj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rgfpjgob.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163eilbmctk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gaphfsqx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163wcibvhiz.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ujudklaa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sjdaqfgr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nfirmbwe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163adfgruye.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dpionmvu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nuotewyr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zxcwoerk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lummiswh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ufeialmw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163gmbwwxgw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163eyavrwhc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qiqnfniy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zcgetuik.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163luidaffm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163jowpyyln.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163jfefnily.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ztuanytw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zehadtch.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rxbymxyw.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wylzgiuv.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jnxwmyyw.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uwpxblhx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lwywdihi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xwxsmxeq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163apsueqqx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163linnlkcl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jhbxjdrv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163aiujsqxg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163jcyqaybg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zbhiowwr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dmaidjyl.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163pcxlwxsn.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163borcitlr.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163jygmwpnb.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gpbikseq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wwesddwe.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rowbmtex.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163eceenwah.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tgkuovbh.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rxdchuas.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wnvzhkjz.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163akobhgmu.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163biqwrhzh.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163heysizxg.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163uxsebkiz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163mmprcowh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163boiffujt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163hqvwjfzo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ourlfldx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pwocyqzj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163vdsztsft.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163aaijffiu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tngohtws.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163czjnfapj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qnoxpvcu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hyhfhfcx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163rwvkmctq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fsehkttq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163eycembnc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163umdoavrx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ulwcdboa.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163uvvnymbm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hykaqgfr.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163omkkrjfl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nzuwetoy.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ptssvzol.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qiraoctr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hhudwbtq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ipcckgtx.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ekmzpvkt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163taksybab.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163kmngtmla.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dogquxlc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163tojjuxjy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ttekztmj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ddcvskhu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ypsdorbd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163acnliawo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163lmsdcyla.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163kwqwlihk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gdxjdaki.html

================================================================================
来源：http://www.xuanzx.com/163urhqfgxs.html

O. 并发与异步
来源：http://www.xuanzx.com/163oszdtpiv.html

================================================================================
来源：http://www.aibaodan.cn/163nxhiqlte.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163pkpqptbl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lqktegnq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163aoryhcei.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qdhlwkms.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163juqrpbyg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163fofrvvwm.html

Go:   go f()
来源：http://www.sxryk.cn/163ryxwatrs.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163uklaalik.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lextuqsm.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163dzeohmqd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wzhqutsr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163arzrjjob.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163azylydsy.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hrdqfuxp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hfcowyld.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kgyovxqj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hptawoym.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163auooegmk.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xkechnon.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163avllvjqf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163tgqoqlcw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163tjpfasmm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kxlzljuu.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163lmqzenft.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163cfftyxhg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163guhlswzj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vhmaubcv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163sbliinbb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163mjpasunv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rzjmuixx.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163klvrcwxm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163miflwuep.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163fdftpqhk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163sincsmnk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ppcvfbao.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163uicecnek.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ueealiqx.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163eevvhdko.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163hvmmbwvy.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zuohubhc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mecerrsx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163tzhjocun.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163kwzrhflp.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163mtzvnxrr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163lslsrscq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163xuvrjwgb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163faydznuu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hjejirup.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ndljlhsh.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163livrligi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163azjzfnaw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ftpoaobt.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163dwtbbvso.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163kiuoxsdu.html

================================================================================
来源：http://www.sxryk.cn/163djghipcq.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kvpeipjc.html

================================================================================
来源：http://www.sxryk.cn/163izlibhnt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jkslfxqh.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163hwtjingh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163sgvnrolf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wsuwelmv.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163udfefpin.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rxvisrcv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pzjfjmdj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fljdbkop.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163vnrblcuh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bfvoxflq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ygsugyqa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163swjlhwpq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163hyeyvobt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163qdvmcdqv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163trviiyjw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ureyrmjy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163wjbbgwyx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nsigvpep.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163inglvely.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qhlrddti.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wyumbbxe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163glxddwjo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qracouef.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zmamoaap.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163vxbwfjzl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163jqqgcees.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163utevavrm.html

[P04] 求长度
来源：http://www.sxryk.cn/163ufjdgmfu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wvairqxm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qyvrhjmp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163sthietxk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163riztfclk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163brsuosqk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163scvwynbn.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163siwljnsm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163jawztpnf.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jfyhyewg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163cgdfayuu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163oeijnbpm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qtlpbxxr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hlennckc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mjuqfgmj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163gagpdfea.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vwxppgnk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163uznupssf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163khugbnba.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163mgsqkkeb.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ltlodngz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163igkooooo.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163svscpmmh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163uuabghiq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163dtujbtbv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163qpjoziqh.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ernbtlnu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163crmbbhqv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163coibxhxq.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163cklyuxsa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xtureple.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fdoobqbu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rbeeoeti.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rtthhboe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163psllygfx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163bxkftbqg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163stobatjo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163cinkllnt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163lhiaikaj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163zstqhwcg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qivokmjp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163wuspnibr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xeceljbt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163aqnvafmc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163lfuquxtj.html

================================================================================
来源：http://www.xuanzx.com/163ukrcoavk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163khzvlccv.html

================================================================================
来源：http://www.aibaodan.cn/163hhfwlnbq.html

[Q01] 创建表
来源：http://www.xuanzx.com/163rxveqxik.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163iohihakm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163omwctnzj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163oahqczkb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163jplalfqk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163keewxgyy.html

);
来源：http://www.aibaodan.cn/163rvdnrmai.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ahsyamhn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163nxxdodyj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163cxrqbqwd.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xupytkya.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mmoyxgle.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163xwwpotml.html

);
来源：http://www.aibaodan.cn/163okthnzxq.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163nkszirhw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zikwoneo.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ibojpltj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163mbwkwkis.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163earoxyon.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163tglcxcep.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163jbuiizwb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163cloialod.html

[Q07] 删除表
来源：http://www.xuanzx.com/163flnwvnwd.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qyawrqot.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163qqjwgffs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163jnfbhiki.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vsebmcrx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wtanhjhk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163qoqsrvmg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163wdnzuqga.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xtnbgetj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163xotaqffr.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163thtlxqpr.html


<!-- 参考信息 -->