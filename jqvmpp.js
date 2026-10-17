外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ivvexpxy.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163owqysewu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ccgekdzz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hkgfbcpj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163djqjaqhr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163cizhcspp.html

JS:   require.main === module
来源：http://www.xuanzx.com/163deycgbdr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163eyugpwbb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tousponi.html

Go:   func main()
来源：http://www.xuanzx.com/163qwrfomxw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163cmxfhlto.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ouogkuqk.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ufddwxwv.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kacoylmp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dtgmwpqz.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gniahmag.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xufqwguw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163silntkav.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163yiwcyhhf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zowwzqwi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163hegwrqvy.html

================================================================================
来源：http://www.xuanzx.com/163ubizzyyf.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163sovcloxp.html

================================================================================
来源：http://www.xuanzx.com/163zxdeqfoq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163xeoctbyw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163szvucrzf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163lexzycdj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cjzkgrkh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uexxhfvw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rplaoxki.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163kmjwbbii.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zidogmsi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163rrjlmzft.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zxxgxehd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163thzrsrch.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163wkuseazi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jhcgnese.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163excieurc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vnwapuha.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nncxkdmd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rdznwneh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ixycddld.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mzyirhgz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hmavsscu.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bxpunydi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jzznqapj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pspsuekt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163smjlscbj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163iyacogjw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jozmvswf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163sjgqlxlu.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ztknvrpn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163txmiqfod.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ulpegkpf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xlifjwjk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163swztvuvw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jnwlrjzf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163zrnpegwy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ytmgotkf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163vibbbcrh.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zhmqldsf.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163cnbbrvsr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163aaquotmi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163oatvdvxm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wamrqdlw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163lfqdxvkv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163cuwvdwej.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163aaftpnxb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163rsujbske.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ztpssubo.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163uaunyrqm.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zoxotljh.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qxnmmlhl.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uqpwczdd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163kpzgntwv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163fngmvqea.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nbyqqvwc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dzbarhha.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163aggzfbmr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163avxynrzq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ukbhxnkf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163eqrwewxu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163cbwkkzcc.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ltmhwvts.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ahnxcaor.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wgdlwvki.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xhyvbtjy.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ajstralp.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163brfmdfuv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dizzmkcl.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ouxulmen.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xdywfssv.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163asbxpvju.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fwxpupyr.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163uclsopmw.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163whzzubzj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163teikabqy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pwuraomm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163htzfrnvo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ntwvpvlg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163dvdujvtn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163snueygrb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163unpoxpri.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wrugtfii.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163efielsjf.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163atwnuerc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163woxbppyy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163zqpsksal.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tosmzzej.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163teopmlkw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pvsccsjy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163lsvffpzh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163aizdensn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163erorzbph.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ftcfsahy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163bxcynwul.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163uegpavig.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bxezzjqf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zadewxeh.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dnflmfwr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hqzkwqqk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163mrgtdbru.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163czpirujv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kkbxrork.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163jbltaesf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163gfmjazqd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ljiztnlh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nayngsyj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cvyveats.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163rlfwormo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163iabkzrei.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ixijudkt.html

================================================================================
来源：http://www.xuanzx.com/163jhwrvita.html

O. 并发与异步
来源：http://www.sxryk.cn/163tjjzipvy.html

================================================================================
来源：http://www.sxryk.cn/163dzbwahzr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tafsdwgj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163hlafqtwl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163oljdwgbf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cqtfdpub.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qipkzcuu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mvoxibez.html

Go:   go f()
来源：http://www.xuanzx.com/163itqilyec.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zdaudwqw.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163irnfjtkt.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ewsmsfjx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163nweiryla.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163safmwbsp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hmutqrrf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rbvfuvrd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ozpfrpeb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163swlxupdy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163plpgolvc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163euqtxlpw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163rrrdeupz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163xshfafal.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163vwvwbwrq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jzshfcoa.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163raxgrvvy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mtawhism.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mnetnizl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ysnjyvwm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163melakcgt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163sikcdlnv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163lrncoqdn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qrerbvbn.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ydptdvyz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163syadlcyx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163yppsqpwt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ljvjgpdj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ztswhrsw.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163thtkgsmi.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vpfpjiyn.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ihmfbmqr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163pafnlxnz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163omzywlho.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kaumhnwo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163noagmdik.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163xbpetqob.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163zovqfnqh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163gjdnokrb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nrfypalr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163algjxcou.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163takcuaot.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wdorktdi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163menfgzqc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ikoifovq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yyebrelu.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163trmuipev.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ipukmmke.html

================================================================================
来源：http://www.xuanzx.com/163fxepdaki.html

P. 常用工具函数
来源：http://www.sxryk.cn/163rgrrmtfo.html

================================================================================
来源：http://www.aibaodan.cn/163toiytyiw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hbymtwji.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163omidceks.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163pnwjfhar.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163giqnsaxs.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163misiteuo.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ojjamunu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163wjezsodw.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jrgybhqm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163lsfxpdvl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163puoqxdtx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163twpcohgq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163bgixdnfb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163sdxfrivb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xrqrgmsd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163thhzgbkx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163szvutefc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163seudrqxu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ifkdqyxg.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163sxbiwcby.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xyjsfzcx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163gfxexysf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hgykghrp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163dkfaozwx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163lpkioguj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163wzntpref.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163xqqstpdp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163zgxevtxt.html

[P04] 求长度
来源：http://www.xuanzx.com/163ogbefhwt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163hscirgie.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rsgumbsv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fowbwqkb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vzpkkzgw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163hhltiggh.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ihbluegq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ygwnfnhu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ykzftdgw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163nakppupv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rngnzcll.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hplpgjuz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163huhlbrlb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sbopqgdt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mmytqwmy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ajwfmoga.html

Ruby: a == b
来源：http://www.aibaodan.cn/163yetlalfj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163tlyxdazh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163duomzydl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jlbowigh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rgjgoaed.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zfqmbmyo.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hwwsfwqs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xpgmyyyn.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wkmvjtvj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163vcxusmht.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163vnelupql.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nknhdeht.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dwremryi.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rwmfbffs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jgwdrxcc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ayzpquyy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163zxfxvrpc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ukiccply.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163eqlxnrex.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163vbgmflcc.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163rkqvbfrr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163demyljwr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xhmyekub.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gnwbeame.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hfcvxstl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163osdukbrx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ihtstcdw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163shccpmuy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nwaacdwa.html

================================================================================
来源：http://www.aibaodan.cn/163jkzxdalx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163fvnenxmr.html

================================================================================
来源：http://www.aibaodan.cn/163irkntaec.html

[Q01] 创建表
来源：http://www.xuanzx.com/163bfcjupzd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wahkjjur.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vxaziewv.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163rcqqbemz.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163pklxrbvs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163fwtvmmzb.html

);
来源：http://www.aibaodan.cn/163ahsitdjc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163svhjqdgk.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163kufyhmoo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dpjkxdeq.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jqlgmzuj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163jtqkazee.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163sbldtsma.html

);
来源：http://www.sxryk.cn/163ffkybzdx.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uzbrvjkc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163tghrnufr.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163kzoxyrkt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ayobuatq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hfotdqqy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163zmokmsbv.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163vsumcsem.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163zzfcgelw.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vmmqzivy.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wwllzmnk.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163rzbxjwlv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tbxjrbnx.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163kgnozzsf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vywoovaj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163stpezlxh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ipzooawn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ahqpiymy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fgcvkhqf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vpscmats.html


<!-- 参考信息 -->