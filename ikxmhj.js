外链999!wailian999！

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163oxteiegy.html

Go:   func main()
来源：http://www.xuanzx.com/163zqkkynzx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163rgkatvhg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nknbpegb.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163bgbxrpko.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163hxnalqai.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gbbhnqyi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163shqkqdmd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rhqhoyls.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163cuepnnaf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ovslbson.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163goohbhsm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163szvaisut.html

================================================================================
来源：http://www.sxryk.cn/163hqanaxzt.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163xoaecnif.html

================================================================================
来源：http://www.xuanzx.com/163gmnszpkn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uoxcblyz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163agoicpbl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qmylrirt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163winpqtaa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rfvycrky.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163dwjbctbv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jokqqqau.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wdstflkt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163nlbrrjfw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ybxewkfz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163niwmldak.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kekuzmod.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ehpjsccs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163oeqpjtdk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163frytfdcl.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wctulnon.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vrpvhfbt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163xccxzmcg.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163uvuiieze.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ecnkhauo.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163oaejbxrx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yhopuzso.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ivgzcxas.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tkodjpkz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163wtlfxmhw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163glojfdou.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ahxrjrjh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163jtuckedf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uzdkpfns.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tsoojhmj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pjvsbflt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wymhegpk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fsdhwviw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nctntncn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ligkgnqb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ipapowfh.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163kvehgxpz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163cervigeo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163yszkpwjy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bapplovv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qqjurvvt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163dilecolh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163brhwroyh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tvwwqgee.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vlegkyda.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163bgalucyt.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163pakkhbro.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163rycfohib.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163urwcixkn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hmecyfbe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tyeodfgn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cyutxvin.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163woruxdkv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mxgngknk.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163iaqdyxbg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163fussqmzb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163alytitcx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163tgfsliof.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bdqktcxi.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163hsvuxevu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163yhansrnb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ovbisfpq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163laxdnfpa.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163aalkdgod.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163krgoiipv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163srexvjoc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dkxxbwdu.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vqlzfgtf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163krdqfanu.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163dkbvuqjh.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163lxwreagu.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lwqvxobz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vhrvrzsd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gptqjxcu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wuhhvqjp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163krnflevb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qxeqoogx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163iwdyeguv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xvhijvma.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hxlfyjet.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163eeyrctop.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rtyrhthp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jozbxmxq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xvjabrmi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qddrywzg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qevdacbs.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163xfygzhtm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ujvxtfne.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163lfrvlzpx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fajgwadw.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gyofvapi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ypjjlijp.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163idvizjtz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fdfwwppz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ayncoqkg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qtchpdpf.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ydqwkyhl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163sissmwmf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163fgnmrocu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ccwafiay.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163afvgvaix.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163hvbdxaop.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ypltlucj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dtcyxorw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zzcmubks.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jrmswuxr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nhvfplsm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jmmgmjix.html

================================================================================
来源：http://www.aibaodan.cn/163wbpsotdo.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mpnrgmza.html

================================================================================
来源：http://www.aibaodan.cn/163lfvarjuj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ntbmfcbc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mnqqolyf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zuxwslhl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hrorxxrs.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zsmmvnrb.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zxbtroul.html

Go:   go f()
来源：http://www.aibaodan.cn/163buzkkstq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163giqzeepk.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163iikckfaf.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163cwfzkedg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163oqimnnjy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ozqaibpi.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lacrywuu.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163urfukfzj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163umtrwctp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ctmadnog.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zdciigyz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zwtldmkq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163qtuvzvyp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ddgauqny.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163vxysyybg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jjrozsgj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yoyjlrbj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163nskyacpp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ksuedysg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qjztyhxw.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163alzuuwsi.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vwnzhyps.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163tzadncze.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wodtwcsu.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163bmwygzel.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wehgrmoq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163slpewqrv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163skloksyu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163lvtfvwft.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163bylohgdq.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ylddohhi.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163upjudyey.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163bdtselot.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ijmaqldx.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163umxaasch.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xfusxrac.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163rlylhsjw.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163fhlnnvfz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163cubujeux.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163uwujeakx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163cpkbwkvt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163gspttgoi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tsqnmydo.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163grszbdpj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163einfdluc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qnfyfgki.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rxuufnzg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163yopyqpdd.html

================================================================================
来源：http://www.xuanzx.com/163jutrpdmi.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163knixewzw.html

================================================================================
来源：http://www.sxryk.cn/163zbmxhwxr.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jpazqoqc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163npvssost.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163tlkubyjz.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ndtiykbe.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wixoqqtb.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163dkuseizx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gefderwt.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163jnzcpqbo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163hilyingr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jyhmduxc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163znbllqkx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163icpktmfs.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163yoqrfwbp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163iunyxgwq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163oaujrsfo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163siunshmd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163tacztllv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163oybxpxmx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wjjjtavj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163thltfhda.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163njavqxcl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vrclyevq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mgyocilg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163tdhnwovd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163otphzljq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163qfjqkcmk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163yzvujhiq.html

[P04] 求长度
来源：http://www.sxryk.cn/163mdtwwnxb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163yppdapue.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hmslxqqf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163infkmzwe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ecdlzkvq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163nugdxetb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hwkqoaeh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163lsxahudf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163gtwqfvbf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bbtrudoz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163fvdonhfs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ghnhyzcj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163arvbpztn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cltvtemd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163gyghnuqv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hhtokokr.html

Ruby: a == b
来源：http://www.xuanzx.com/163xrpvvvww.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rrnykspz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163edimhipf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tqdpnzux.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163owruzgmf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ugsxetwm.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rjumgooq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163pypgoagv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ynbheyvd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163iptunipw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ajxuvkmd.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xaqkfrpw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163urpcruuy.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163uvoeunxs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163itiixeyo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cflrckxx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ggigcotf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163apmhrcjf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163egxhcbgc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163hvhsswsv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163mbvwlpyc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xdtptifb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163amlqilok.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163eqhnwuns.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ncunnegk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163medqyymf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ubfxbfvt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163htsnndbe.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vljcnuad.html

================================================================================
来源：http://www.xuanzx.com/163ddlhtzyu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hhoewkhh.html

================================================================================
来源：http://www.aibaodan.cn/163dgwnckau.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163aamphcjl.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163hyqvcyua.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ybozhiuh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163mztudpyn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ekmedapa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163haaknamw.html

);
来源：http://www.aibaodan.cn/163rfctmgne.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163bloqnout.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163etrlwyyu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zpevmcnz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163yqtyoeug.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163byemihhy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163vsfoycbt.html

);
来源：http://www.aibaodan.cn/163lbaalyxv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163wmlfwbkx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163bxvxavom.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163bqkevtrn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ngtuskva.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ggfrqmty.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163xfnzkfiu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163civnnigw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qhufzonf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163qquzmcez.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bmmuxnoo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163kpuhawvd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163nxpljbww.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163errexhsv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xmpofbzx.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163lyoqlhib.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163umqvcqef.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vngfjnzu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163loqilxzd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163okhqgpst.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163vebhyxnv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163cdetrmoi.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zwviuctp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163zhvtsroa.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163tchkjhph.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163cwoflazk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ijgnxlvf.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163xcwdrmfw.html


<!-- 参考信息 -->