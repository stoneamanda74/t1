外链999!wailian999！

Ruby: exit 1
来源：http://www.aibaodan.cn/163pnkhzcyd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jhruajmi.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163udfncwan.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163odsdypij.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163fuhgeiwy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rioojkyf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ygltygtw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qpztwdtm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zimlutdb.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163cohntvnq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163mkfddjnk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163khzthfbc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zeldiqcb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163nnugdvkn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kqvzkvsw.html

TS:   require.main === module
来源：http://www.xuanzx.com/163kazxxfdc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163igddokjh.html

Go:   func main()
来源：http://www.sxryk.cn/163mbpzgehm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163pnybawfd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nxeuqbpt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hkmaygzz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163uuttkung.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163frzevtlh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cwdzpmui.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163oujdvtzx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163sghicacy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ejwuyuxb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163orgjxfuc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163pzkavnrr.html

================================================================================
来源：http://www.aibaodan.cn/163yitsjlsc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tarookrl.html

================================================================================
来源：http://www.aibaodan.cn/163xhzwumby.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ecyrcyuz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163nzdkzrip.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ipizoabe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gwrhifsd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mdfchklc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163whdbgyuz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163fzftpala.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rreieznz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gwazithl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zzlinhsy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ybaolsqp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163psfiszft.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gkfhivnz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ddfszoop.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163bgofugnc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tgdtahkh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sadrdxbb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163pbhrrdza.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kxkryjkl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zvulswpe.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jvxuxezg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yohbdxdp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xhbazwbp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hymefeeo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xdhwrhgr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163flijvkid.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ebcvwubz.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zasvqcam.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163iybityud.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mwyxoywb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fapnckzc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tivoajdq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rsuwcrfp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jnyvgrzo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zulhffuh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163rigmlhdg.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zxewjxgu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163wflttgst.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ogdwyzhu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ywyrpncz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fexdibut.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qckecwso.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wvfulwcq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163dzkdiwud.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wvvzbvri.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163riljitsn.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163zdcxgdtl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163emmhnpsu.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tkcsnzqf.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fvqtxurh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163szuxozpl.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163xacscmjn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163kopkpesg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163oichishi.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163offztcir.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qneblier.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163eofcpyeo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163qffdbvot.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163nntqccjd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163nakzkmmz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163lizjgyit.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163nhivhquf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mbscyoog.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163yjqxnypn.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sxirhafx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dxirrcdp.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cmqpxxvg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wacnefpa.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163piewwybp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163voskjdmb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hgibckcg.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163okbjjeyp.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163luqidhoc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163aztvzkkc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163mxpiuigq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nlyxjkth.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163sukvipru.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ujrpruev.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163kpoaqymn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163rzpuooak.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sekjvoop.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163lkcmfuuh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gqnnxpwk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xlxdxfbl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ihwxphly.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163yvaveqtw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163tiqipjdp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wfpilhic.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163yicxtatd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163sclnxiqa.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dchlsbna.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163lesvbepm.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163rokrkure.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lyfoiffz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163byoikpey.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ewwoymrc.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jccgocnr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vhmuhtvx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163khhbaius.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163yghfhoyo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163itzcbksn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163efotdlht.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163befsftlp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dfnmwtpg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nrwmpbtq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ohfuwrrw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qlducujm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xbejttus.html

================================================================================
来源：http://www.aibaodan.cn/163laanldlk.html

O. 并发与异步
来源：http://www.sxryk.cn/163qvuqhlyg.html

================================================================================
来源：http://www.xuanzx.com/163veykvuft.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vuxsyfmi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cnjwzbip.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cmgdoggd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zryuxhbg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pvxkphjs.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163yddjfcgy.html

Go:   go f()
来源：http://www.sxryk.cn/163fjgxylun.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ovsagstv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163bxwpmagq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163asdlssvm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163okxzshdt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163cqrbiwwr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dvsqudkj.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163elkakije.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uucjmpyx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163nplghnau.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163nmvzmdbm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163zpzwppks.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mitwpbwp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ljscirlb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wsukfahs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163uaournjn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163snrimwab.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163eamnwpem.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fcciqnzo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163rqyeqgiu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163sriccyer.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163scerhizx.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163pyzocrus.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163cvzxeeds.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163tsxxhfhz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163uttvousf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163fovitfos.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ilmxcfje.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163aycftpun.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163tqnsvsaz.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163jbixgoqs.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rxzxoqqe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tpohyecu.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gzoqagfv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163aeqdyogg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mytshpde.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163exeadqfv.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163larbijau.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hsxmtemv.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163nyxgzths.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163jvttobcs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163weyexnka.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tkqlkype.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qzbjcbgw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ebagqpoi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ympcfnfw.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163lrtxgxuj.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163krxhhgln.html

================================================================================
来源：http://www.sxryk.cn/163mmotoslj.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mfwccjrl.html

================================================================================
来源：http://www.xuanzx.com/163yjevtaos.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rjmoocwr.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163spadymcm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163cnmjonhd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ueepfegh.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163howtysjd.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qvyhcqyi.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rgkadvyn.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jdpnwsqf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qqovlltm.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163slufgmuo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163zazftcro.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pielsito.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163iytwpkdi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163iqnpycjj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qkuhclod.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tkqkmcxh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ptaoghxl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xrijpmml.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vvcgtomn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163yxtetqhk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163bjjefith.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ngxrfilv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dngtorhv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163yyzcbvaq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ruwhsmgd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ubagmnzv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bjvbxgfa.html

[P04] 求长度
来源：http://www.sxryk.cn/163rxbwkbme.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163nyilzssg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fsplgzou.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163houqiueb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bmrzleex.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163iaxwmyas.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163yospowxr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163kkkexavs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fquuqunn.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163nnzrblfb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qzmkjymr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163totfmzhm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ybmesmbg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163inudnbch.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163oorupqlk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rrvywdwt.html

Ruby: a == b
来源：http://www.xuanzx.com/163iqufnqbp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zlgwrsga.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163dbcdjxil.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ciyzxiop.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ixsivpts.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xdfokiph.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163zjzmcpje.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163bupddplz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163bcmhojde.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ljauuwqa.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163nmeiycuo.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163savxxmdk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163yvrtzjrq.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163zylocsrd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dzqjdunx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vxdbqvec.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163amkkttfa.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bhqjfxum.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ouiscffv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163hxpzwckh.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dyyjuriv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nfptzryf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ogxvhktr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163hajbrmhj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fbmfmfhe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zolvqgxf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163cwmwhbch.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163pluobyqk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zbfwfmpc.html

================================================================================
来源：http://www.aibaodan.cn/163bibnsnea.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163owbtendh.html

================================================================================
来源：http://www.sxryk.cn/163eijipaew.html

[Q01] 创建表
来源：http://www.xuanzx.com/163doifctyu.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163jfsxnncd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mssyyvvg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ukrqdjoj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163bcacmhse.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163fzzgmpvi.html

);
来源：http://www.xuanzx.com/163mwbllnrw.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163likyrmra.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163cvkvqqgk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kbcrqhei.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163znngedyr.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163tyiwxtwy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163hbhgimpy.html

);
来源：http://www.sxryk.cn/163rianaefs.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hbgcacso.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163rgkhszxl.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tqmrtnkk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163rcuegpic.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163nuoiyirs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163obdiyeog.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qkrswhnv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163kgrshszw.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vbufrawc.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163bbqctaif.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163eubybrhp.html


<!-- 参考信息 -->