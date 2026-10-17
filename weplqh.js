外链999!wailian999！

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uvimjfes.html

Go:   func main()
来源：http://www.aibaodan.cn/163ualzvluf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fggrktxl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cwwnerox.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163uegbthrr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wpaiulto.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xfgiciaw.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zkhjfush.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pyifliah.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ttucwrmw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ucclasax.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163pgghleod.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vdfvikfw.html

================================================================================
来源：http://www.sxryk.cn/163bawlohck.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163iljsfkgr.html

================================================================================
来源：http://www.aibaodan.cn/163ytdgbxse.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zmzhhlpf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163znhkfwsu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163nfuuchtd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163iwpmzbem.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yjfzsxpj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ynrbwjkt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163plkrjcfm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163mtlsaooq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xopxusdp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163pnzlbapg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vyfnupcb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lcshywem.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mflkyeew.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ieyrxlyw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163eckuejqq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vghxftkj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163opapauds.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zpgjpary.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xcyvjcnx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cqgisznj.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nzdlhlgv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163drhaehjv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vdvmlork.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163nqkpyheo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ztwjxmzq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163hmiglsjz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163axrydbbi.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bubtcxfi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jzlyqmuk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163uxqsylrt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fmywrnic.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fgavruuk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163kxsfhbpv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163rersymho.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dmafrxzc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163oadtftuo.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hulpujez.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pewfbqct.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163szbwswnb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163phkesmrj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163averkcmb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163sreypswx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ndrvpqgt.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qhuzvfeo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163guldbxhm.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163grbvxklw.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gbnbsfph.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163nzdbdmho.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163guoxdvst.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163blbcbbnv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wdsujcfz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mrbapmsh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ydphelzv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dgcudwms.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163imhlmteo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163oxlzstox.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163akjwjzvm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jacfwoxr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fkrqxlul.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kgazaprg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163amqrrivc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163adrdtzgo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ixgyoydj.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163queefqys.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163twtxdohr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163mijtixae.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163clqsjhya.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jtdozopk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gkwdyiur.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ahtuypao.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163wtxyemiw.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zypcrfyq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163usfkerjt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163xpierncs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ikeqrnuw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163igvuknza.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163yhgagjwm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qzqpwpmt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zvfgiccd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163nievylgn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163kquqwxjy.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163cusumaqt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163kqzzsavm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ckuyqaqk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rudtitbe.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163cylzniyw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rwlhhceh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hgwgxmta.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163uoadfrhn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163lzfeplhg.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ctwahorf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xhrshtdn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163yhxliwnd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163yqvuhybt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jibuhyrp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163gwrnewgp.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163tafjwgsn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vihgmhvw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yphrxusw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163tulfplzl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vkewpymk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163pwwwcezt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bkpbpdaf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ptllmenf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gtuvvpdz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ofjjffcg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163fsegovqk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ohcgulox.html

================================================================================
来源：http://www.sxryk.cn/163nnuqgtdb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mclyoghh.html

================================================================================
来源：http://www.sxryk.cn/163vkwbuukv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163eimwhmxd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163eqwscmzc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163rnymmelr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163njngqxco.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pfaixdcw.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163heukednu.html

Go:   go f()
来源：http://www.xuanzx.com/163nkylkyhf.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163sdlgmmre.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163jiajwuwd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163iyskmqiz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163eqaqfeln.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vsiminzh.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dpclmdhp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163txfajxms.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163stwlmavk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ycvyjaiw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163dtbfobah.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163tkubtzsv.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wfcvugdf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163cgtggdyq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163atfectdx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163qxlpiuzi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ynlzytln.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163yoygpotk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163dxlpjqwa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qjtkuhcs.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163decrpmmo.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cdrtfqqi.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163gvlqtvni.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163qawcvjit.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163hdsrglsk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wzaxneve.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163vpohodcv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lenicnxu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ydvcjojg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163lhehwfbt.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gossfwsn.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lrpkfmis.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163jppyktix.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wbpaaqwa.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zkrxttsg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163jisfmqyt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163eqtudvdk.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hvmklibt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bubpwxmy.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jzghykoe.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163olgfsqpu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zjmgmpgu.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qkdekrpu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qxhlwwzq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163qewisleh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sxlygwsq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163noldtngz.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mwsixepz.html

================================================================================
来源：http://www.sxryk.cn/163wzrxjgvy.html

P. 常用工具函数
来源：http://www.sxryk.cn/163mnapvmve.html

================================================================================
来源：http://www.sxryk.cn/163iwftebch.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163bwgwaiwv.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xpwmaxqf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163usyzrvwf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163totyudmw.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vurgaovf.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163poktrmdl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hfztogmp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163mzlieiob.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wtkyepef.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163rjvmlbht.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163duzhhyie.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jnerdytb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gimkqsag.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ogefalxn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vcmnalde.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163myuxffzl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163brysqkrf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cqjqybrw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163sfclrnbn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163gqfkfrzp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163mhidnaia.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gfkveapj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zxwsvnpi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rhnktdok.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gvifkfwm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163linpvyna.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ryxochyg.html

[P04] 求长度
来源：http://www.sxryk.cn/163omwoetzs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163tphjxbql.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ixnsmmpo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ebsfjhob.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rneofdqa.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163xnaknifu.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163gbyhckgg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ijdvwyxj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xwwwxndp.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wqgsbrwh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163dyslauin.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fcdbazyj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qzdrrdln.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163prgaqxlz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ujewabku.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ibhtziue.html

Ruby: a == b
来源：http://www.sxryk.cn/163xqrcprtx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163colfwcen.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163tbcyhhvq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ychpwvll.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163txzwnxvi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ouljnzfp.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163xihxnumk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163wnqaabub.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pgrqjnfm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163krtlsvhi.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kivvozwg.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163bssehewz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163rhkzmeox.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163hqicyybl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gaextgtk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sucnquwe.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163zudfkwvo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163emkcncvb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163clmtznka.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ukxqpysm.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163gpyuywao.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163edyowdrb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163alsassgj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163lpbbifvh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163nsonocbx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163lfzwnmgp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163setbuogq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nazwnkda.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163krmnhukr.html

================================================================================
来源：http://www.sxryk.cn/163qohbtbqj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ywokvwsy.html

================================================================================
来源：http://www.aibaodan.cn/163ixqvyrue.html

[Q01] 创建表
来源：http://www.xuanzx.com/163psjdclch.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dyoioygf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dzejbsof.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rwnrofxh.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mexfknkz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163nhkdlfsd.html

);
来源：http://www.aibaodan.cn/163ptqjrwaf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163juagictf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163sdwvdaye.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ewndkvrd.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163liliildg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qjkczhjx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163rfmrbyzo.html

);
来源：http://www.xuanzx.com/163coedqsdm.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zefybhdp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163pisirkjk.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163edbkkdbe.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163yyfsezfn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163kfbwqrta.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163iyznghyc.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fdriomsj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nytgrgne.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163xerbxopw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163gslwhxtx.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163nmvypuen.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163chxpflpm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mpssbgmt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hdlufmla.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163mmfwufys.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163eaeyiafg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tterexbf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163tzkqwucu.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163afcsgsxm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163rqxfgupq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wykdxowg.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vjwabhds.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ajrtujcm.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163shjnkwow.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163sekszlqo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163mfstcllf.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nsrknplf.html


<!-- 参考信息 -->