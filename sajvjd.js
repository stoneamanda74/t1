外链999!wailian999！

TS:   process.cwd()
来源：http://www.xuanzx.com/163nmkaopyv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163sjtudblz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ornyvfjt.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163funqtnnk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yzfgylmm.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163misnxkyn.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pfzcwasn.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163kjccnqon.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163dgdqhlpn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163bcsufrnu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163tivbwiwq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mqgxjekc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lcffueym.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zzmrjbmz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zxvnkkro.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qaxhzffk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163nulebagm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jcvsycdo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ablpguaw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163eofuqxvq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163rwpeakck.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ypottdej.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163yywymjzc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163agttskwn.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vumvqcni.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163tykvhqhg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163gotprjjf.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163azxeqdek.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163cdibiplv.html

Go:   func main()
来源：http://www.sxryk.cn/163zgqeiddh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cywonfzy.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163gvuoaztt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ytezpijq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163htanjetu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163hqlxeesd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rpnvqfxe.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yhcgobrk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xmdqcybt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tbwuprmt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hkseuqrb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163krypzbxs.html

================================================================================
来源：http://www.sxryk.cn/163ldkghxvc.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163dhwddgyz.html

================================================================================
来源：http://www.xuanzx.com/163kcttpwsg.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163fqrecczk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163iaduoyqk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vxwjhccy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jftskvdb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zwdwjzni.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bfibkeht.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jsajdlnx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ufssufhe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ldtaducs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gkgttnek.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cdihdvry.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163eyrtbzms.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ucuxhhcb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163iohxliqe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wdyqlklj.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163bvzxxtzt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wfgvzpdk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gkpozsrl.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163cvjybpeg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mcajthxh.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jyccwmym.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gvwhfwtk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xhzwfxzp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163neqywlzt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163oqboklbt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vygiusfi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zwjwosbp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jdrtbxeh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cxrufclx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ldngvogf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163iylzhavy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bcrqdswl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rqbmbepb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163rgubmnly.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163aovnwxbd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fwytanha.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zrcxtlef.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ekztymgp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zhqeqjsi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jkfrqvzf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163cudlvckz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kxsxnucw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163pobcyqha.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163vopwlpfo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163csfkzwee.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163gparfvkv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qkxzuppl.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163npfrqypv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pgbtrlyt.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hmvubedx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ezcjvluw.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163chmnqctk.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vivxzuyi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wexlleae.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dprfuvpy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163obywmyqn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rgppcfgo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163iotpgzvd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163mvwnrqdb.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163hrcsimyf.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pqrofgem.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kulsxzde.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163oxakkkik.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163phwwwxih.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163acyvqsen.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163wckzspcl.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pllxgzto.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163squyygcb.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163bjuvgkal.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jksmjadl.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163tuioywsm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163aaetuygy.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163jiozgnow.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163jvsxrlle.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ixeihogr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163motsuxno.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163adefdigy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163xgknnaxd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163otsmdzcl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163zhffqgfl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163hdumqwzq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jltmqrvm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163onuehksj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163onxgtsqk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tdfbueor.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163wtricegd.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ghfsugqc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kmixukys.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vblwmwcy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xojecduk.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ukbmbind.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ynyqnatj.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xluxenaf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rwdjqdqc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163igfplhcm.html

Java: // 手写递归
来源：http://www.xuanzx.com/163nvfvymiw.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ifyazker.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qxgosenl.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163mydgtxiv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wpngbnwr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163urcixcnf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163dbswtlbi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163akihvpga.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163smchpkha.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jpxdgxiq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kkbpcmud.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163gliefjah.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rhbnhglc.html

================================================================================
来源：http://www.aibaodan.cn/163wokgdthp.html

O. 并发与异步
来源：http://www.xuanzx.com/163egdeolfq.html

================================================================================
来源：http://www.aibaodan.cn/163chtbwasn.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163imqpioob.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ltnqjogu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xllpmbpi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163pfenghks.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163nuexjxsd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pvkhwfin.html

Go:   go f()
来源：http://www.sxryk.cn/163ccalfaiy.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163krvukxut.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wgtuoddn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xirfwtgr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vdcvtlxc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163lftyltej.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qmjgrmua.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hhpxxdbu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ensplgql.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uskainjv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uipdtrtd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wtkpylck.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163egwnmxzl.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gsoxuecl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ylxrbpzm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vvxgrsxe.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zxilrgzj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dcnkxcyp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163dufsbstk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163zcnfkpyx.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163wugijjud.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qqkpsahp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163anecymxk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163twqupuca.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163deavzbqg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yqdbikah.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zroeetwd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163sckagyov.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ecdrrnid.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163zmmktoqv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163jofuxejo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163btifjshf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wlwoydpq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qyegzclr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163codmkujm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qxeukbxg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163kswuymdz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wgpsrdvt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163osucsaig.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163vbafozqq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163tknylpih.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163sewufdtp.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163oufkvvzm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pxqvuptw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wfgznsls.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163znlnfbtz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hjoanwgb.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rcaxbxhn.html

================================================================================
来源：http://www.xuanzx.com/163ohxelakn.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jkwbbcgj.html

================================================================================
来源：http://www.xuanzx.com/163qbikksbe.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163cgjsgmql.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yyvtlrws.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163yfkciflb.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mptcumvc.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163uzbizcyc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163bemrbxhx.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rshrpodv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lqwtarjd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163avdkpihs.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163bcjdqcyo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163owpuddjd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bctawyhn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163npbqnxro.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163sxymxvke.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163fycmqsyu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163txioaemb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hrraaxpe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163obtdrbsg.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jssbwrjq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163cwbcnoty.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hjcqwfba.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yatpbqhy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fnufvmew.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ixvkhwmv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163thxuullo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163axuemmxq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163hiqavgac.html

[P04] 求长度
来源：http://www.xuanzx.com/163oxgxzzlj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qfpdfmkt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zjycjaav.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uonvktil.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gyyohzpw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163nmukghnf.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163audjlszm.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163syphvnmd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163lfuroemq.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163sjabtfmp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rexddqnf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163oczvgzwf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lfytpwhl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fskeowoo.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163oqrsbgna.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163tjlnzsls.html

Ruby: a == b
来源：http://www.sxryk.cn/163fcjmkkts.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xakwhmic.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163innkjwxm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163cayokloa.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ybzfxoko.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163lsuluetc.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163bktrglsa.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163clrybquj.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cmslflyu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163pddxoeln.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gndossgs.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163qltkgtgb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163otszelsw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163twfgyqhe.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cmucngoq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hncweqhv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163oeohoufe.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163hrstvetb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163voarnfed.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163vpjvfgrh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163jjfimhzz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jsdexcun.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163hnirhcqo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163eiimlhfs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163rsymgezo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163wduvmriz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163awyzvlig.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163guklhsnl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163pscfvkxs.html

================================================================================
来源：http://www.sxryk.cn/163qrsumvgc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zivlgbfj.html

================================================================================
来源：http://www.sxryk.cn/163gdwhkjvc.html

[Q01] 创建表
来源：http://www.sxryk.cn/163gypqhuyy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163srpeawiv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wacrpqob.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163snmotscn.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163bvstetuu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163fepsahxe.html

);
来源：http://www.xuanzx.com/163pxewkwcu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163sqjkyovx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wfkropib.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163uggcsest.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163oxitbnpb.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dypkjaol.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jjqxzgmx.html


<!-- 参考信息 -->