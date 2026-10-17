外链999!wailian999！

Ruby: exit 1
来源：http://www.aibaodan.cn/163godfgqjv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163zjtkquef.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163unafvqhc.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lpdosboa.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zeytjysu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163yfhmoblu.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jueshjhs.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163pkaguhyo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ujrceono.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163hbjmjlwg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qxhkislg.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163mhsheydu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ouqgkhfg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163cvzoywwz.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vzktmsvy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163uoybvfpi.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hbpqxrmy.html

Go:   func main()
来源：http://www.aibaodan.cn/163failvosp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kpmvmwhd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163skxdymdv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qedsgiop.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163gphrqpbw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163noqukncy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oraxaeby.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ldhzacpd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ymlmhtai.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cuctjyqn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jieiavfr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qbhgklgi.html

================================================================================
来源：http://www.aibaodan.cn/163zvidztft.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163wtdxdhxc.html

================================================================================
来源：http://www.aibaodan.cn/163cneevrxi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163cxbsmyah.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fxwgyxoy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dtmhdlyn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gzfwoftb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fohxmksx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ynhlzcvk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vzbxfver.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jnyflqrh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163xpamttvl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rekikdnk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gxzcoxpt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xvgbrbea.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wmbouakv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fyimmyns.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ixnrveds.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xodgjahs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cedmlylr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163egvdajfv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yaukamhx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rykwvcty.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ellslicc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163neuxiuqg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dkukkazc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rsnwasie.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163vnycleki.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163sctugrcu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bimumgmb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lohekosn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163akqkzfkk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163viwtxohw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gspxpixc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hibhnooy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163tkaiifcs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163aswajfji.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tkawputr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163legxkwkx.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kjeyrwpx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163gfulvclh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163nqkphyig.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gqrwrjav.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163drgpjehj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gsofpbjr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kqwypmvo.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wdzelqrz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zvffjydh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jhzqldyo.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163myntuaps.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163lwxadhut.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yukxrxhk.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zlkxcipe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rhshsujc.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163fryxadfl.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163gismrjbf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qwjluwhl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163oizabuit.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xittsqgj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163dixeaica.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jqetcffs.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jizzdtgv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bfbxvrce.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zhnkfmdl.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163mohqrtph.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163qfriucew.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lwdcmhzy.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163epinrnvd.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163kprgkemt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jfdscxkc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163txdmvffv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rletptsh.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163icrdkklk.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ltbaongf.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163sxdriqxl.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163voortabs.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163txjmqvpt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163biexdenm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163uljntalp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163gmpebqqw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163urijvftq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163livnneym.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163gbcwhgfp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163oduinhid.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bnfnihbv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163eufydsdy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163msxooxoc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wlobosnb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163gnavonok.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163eyzhyhts.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lxbhosje.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163awgreari.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zjxvqtle.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ghggrrca.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163vxgjfdgs.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163eyugvtnv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163idvtcehg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163horhhsrh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163zoyeekvh.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163chuerarv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ojgkontl.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163fvjoykrh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ihfyzord.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zhugusqt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163bkdtqidl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ecqunzud.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bacytqjm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jjfpndld.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wqhxeucu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163vivzlbzz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lcwljwyz.html

================================================================================
来源：http://www.aibaodan.cn/163cszllztk.html

O. 并发与异步
来源：http://www.sxryk.cn/163qhcxcfmv.html

================================================================================
来源：http://www.sxryk.cn/163phuulsyq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ipgbjuii.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ufdctyhh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163woscrfee.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163msgnaool.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cvilczjx.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163uvkhqxfb.html

Go:   go f()
来源：http://www.aibaodan.cn/163eulxofan.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hdcsbuwj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xujerina.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163llmrvnto.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163lkrvvhhh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163laoxcpnj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163glklonrq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163czfosldp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mshsxiwa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hjpdyuso.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163tsmdgfwd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wyfqpwzh.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jffpujgu.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hoabakvj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163aoydihay.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163paxwaidx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lpkrmiwx.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163aqjukygv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163hmuyqnjr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163roikleti.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163zfbsyxzb.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qvdfjcir.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163zthobqzs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163acblcaox.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163declqdvo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ybjyehak.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163wjitxqik.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163cgncjjfz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bzqigjtk.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163nktuccjy.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lgoltauu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163soozwoyx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163auckabrs.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zmtdmjnb.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163thygacqc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lkvsmlsk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163jjbmwfim.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qyresezz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163mhysbnka.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163lhazyvyi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wkgfrwnd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163tomflask.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jpccprzc.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bvrsvkei.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163qhabvxca.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ihgfwlne.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163gmnqrjaw.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bklgntuq.html

================================================================================
来源：http://www.sxryk.cn/163cgensyrv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ypezzkxg.html

================================================================================
来源：http://www.aibaodan.cn/163jtjipldd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163gfourrpi.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jokptnwi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fesyrtpd.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qyffqojz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163yyumanwi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163gkswknbe.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163nfnvdrbh.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163khpitjjo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163tfpsrdce.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163zezsrdek.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163jrkzuptv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dgbzzleq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163bcckxdzu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163bvbfqmvc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163mardmsye.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163lbfrcrgn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163yqugueum.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rwiktkab.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163tqrqohxc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163fupzblid.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rnhrafow.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gfwfdsuh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163phkriiat.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163mdhgcutk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163stvsjgey.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ptgfzkil.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jigdnyic.html

[P04] 求长度
来源：http://www.aibaodan.cn/163cqujlepe.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rylrqxvv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kgubwcbp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qmawevai.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pqbdihoj.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163btnbyezw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163srrtwpgw.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163yvtpagnx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163gjhhqcld.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163frsreqwj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dmewvjkn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kiirwufq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qefocstz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ejbtwucl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ewbmcmei.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163dutzybxo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163tvwfoazx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163lhxetwcz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jzhqipmj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163tqfmkcww.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ulyvyfbj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163omedidxr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hqdemcpb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163teivewjt.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fpinjpfn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163gdxnmifz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163olgtckjp.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zfktasde.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nzkodchs.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163mhwopyvw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ksdtnwbh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fnsmyzri.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ztzieqxu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163owzmkhxn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ngultzjp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fehehgsp.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163bwtlskwu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xxwkxpzg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163rhqemwsv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163eiocuokz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163bfwsdxur.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jvrutdls.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163bwimvsds.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xrbwwonj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163njchxjao.html

================================================================================
来源：http://www.xuanzx.com/163heovtyex.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163zfnhbxhy.html

================================================================================
来源：http://www.aibaodan.cn/163zlsssmcr.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kixnzvlf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ltnfpcub.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163cubfqnmh.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ttlhjsut.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163babdnwsf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163dsanfvjs.html

);
来源：http://www.sxryk.cn/163dvztnluj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jamgxjqw.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xkjdsoqs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fnzozbez.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163zshiszwi.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dyddjdkb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ixzarvxb.html

);
来源：http://www.sxryk.cn/163ozodxtki.html

[Q03] 增加列
来源：http://www.xuanzx.com/163kyakzevb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163lhtmbbhq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163yoaxijbk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163orgaupys.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163badezyxi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163haitzhkk.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163jfobqnea.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ebvcqleb.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jmhwfwbr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xwtfvowu.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163kxguelhj.html


<!-- 参考信息 -->