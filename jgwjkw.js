外链999!wailian999！

TS:   process.cwd()
来源：http://www.xuanzx.com/163danoidqm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mgfixood.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163knygdwdb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163bqjtkkcg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163vooovdot.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163fkqqrypm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hagoyknw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tdoipvbm.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bipuulgw.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ztarkvvt.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qaiyvyib.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163yjolsbyn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cqknoyoz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163fqrcdmsq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163yjmbofhd.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kyidclph.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jqypvnrv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163idnmhoov.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163lnfuvzhp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163kjbgjevc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163tertylbz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163hxicfwgz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163misihhrt.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163kkgttfmu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163tywyahhq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ykjepiww.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zvfqrybs.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wzazirgx.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163begkvrho.html

Go:   func main()
来源：http://www.sxryk.cn/163vvmlfflu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tozagvqi.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163pgjrpxps.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163nycbywzt.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163uylbmesp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163iysgfhum.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163uvmctfwy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xphbttvo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ukdxwfgo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163fhrvdfuz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vzfrpzyl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gfsfdixw.html

================================================================================
来源：http://www.xuanzx.com/163uokzhhor.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cnxbxkfb.html

================================================================================
来源：http://www.aibaodan.cn/163brgqfsvr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qjcwizil.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163idjwjcvq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163linstowa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163appmckzb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nmlnmytu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163shnbcmek.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163lnjjkfyo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cddmwjgh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163wxxferyn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163eeyjhyab.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bwiqyafh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rqbyumus.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zroroaqo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ttyduvjt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163kdffkecl.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gqvmintj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vrhhyorn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ftyecscr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163kkcvvqlu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ucfnfupd.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163milfpzag.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wthmtluy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nqdmlnfs.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163qmvggesv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163qcedzcxc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163lpturlpg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ykhubprq.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nbdwhbju.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rkpolovt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163nedowxjp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lhikmymn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fjuczmzb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ywmbuqzv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163phcwoiol.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ztvirvzx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nmmlmpqt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vuihjszt.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163vdsyocvu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ohtucttn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163whutfmwk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zqfzrrez.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163izbizvhm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163numgoewq.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lfzbjsip.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163eoylmswy.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163yndzuasf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163oplpywgz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163muoppgqn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163yrhzsvwp.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mlsbjnpi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163znbaeaak.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kkpqsmsd.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rieyvumz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xynefdhk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163eoiajzfy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163jxsmhkud.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tdwiptby.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163qbexjghq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163eqkdtwof.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wohfkjox.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lctiquye.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163chhotfxs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mwwoyhwy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wtjuzecj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xpijxyub.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tmxjwqri.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nniywork.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qutsfdgt.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ugywtksv.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nwdpkrhc.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163crwjcfci.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163pgumjgvx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163lxsewmcz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163aucgtmsa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163cylzaaqq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wswhhzju.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163jrorbjja.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163crvzjwod.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ptaziqla.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163etaifziy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vdwfwfor.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163cfmxoydt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163wdqstotc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163qkoqpqzh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163hkmlntrm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bqocwyno.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vcukwlwq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163alnrysyk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163iebmmdbx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zbhdbkeg.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dbvcumsi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163rdntycjl.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ruixicvv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tgqxggra.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bkqqrzoj.html

Java: // 手写递归
来源：http://www.xuanzx.com/163smgrdxhv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163xcyewokd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vpdndlun.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163txvspfcx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ixektrge.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ufwpcqke.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fjafcyhb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ozzhtzdr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bcnpoptt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xkxahwme.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kthkluxf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jqodfxze.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mrtercsi.html

================================================================================
来源：http://www.sxryk.cn/163mcpunfgo.html

O. 并发与异步
来源：http://www.xuanzx.com/163moajkmvl.html

================================================================================
来源：http://www.aibaodan.cn/163dofpioxc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163zdyeucfg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163equzeovq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163nsdtgfga.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163zmqfllas.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zzfwcgbm.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qyplvtcn.html

Go:   go f()
来源：http://www.aibaodan.cn/163zgnmccqd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163iykaspge.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163djutewyi.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163sewodzzs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dbuapfhd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163awtvrtot.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gsmvggja.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jzwgjyrw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mejnvefi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163pydaadam.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163tsyidstn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163gtypunfe.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163fxmsxall.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qmuqnutr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nosbvlse.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163poalqrgs.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ltphtush.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vimzvfpz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163klfqyqmw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vdqacrhf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bwvqyctz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163murlyofi.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163upgkdpep.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bmtpudvr.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gcsphclx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163xnzftbdo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163hjvunvpd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163eowmqxso.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dmxvwsvw.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163culamtgi.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163qcjarwyk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rawluvhf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tihzhadl.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163brxmlups.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mzxhcozm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163gnpoyevg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ddcaumcq.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163eelgjfii.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163mjjwagqz.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163vbncwfrw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163uvvazggk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163kjwwzbfx.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ycdyqtnk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lcqoeccn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ggbsfpau.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163dzxbalay.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vgkvmzlh.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163gslmtxly.html

================================================================================
来源：http://www.aibaodan.cn/163umscxvji.html

P. 常用工具函数
来源：http://www.sxryk.cn/163eugyrnxn.html

================================================================================
来源：http://www.xuanzx.com/163ndssrcaf.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163asrgzbkf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163askpthvj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163xikvrtnv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jepaviqr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wdktukwh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163orvpvrpv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vsafdpwg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163pkqrgaqx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163vfcpejbe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hugbjmmc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lpkxuomc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tzrzicws.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163bfflojro.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xqdtgmlb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163yydjohvz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zmacqtya.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163mrdnvhsl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163vdjmyrif.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hmdrlyys.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163tvgmptjy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ufcpwrdq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zbdkjgee.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tvsbbddc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wtoqnqkf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163mtzdcngn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163frposxyp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pupycuwl.html

[P04] 求长度
来源：http://www.xuanzx.com/163pzeyiory.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163rcnduxqm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cfcqnwza.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zrmkkfqh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qontmcuk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fmgsdzmm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163wmqtukvu.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mbkbkzjm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vtrbstjx.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rfrricqm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qxjpbovp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xfkutwkj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163fxmyjhhm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lbreuozl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163cdiskkjd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163kxnsilll.html

Ruby: a == b
来源：http://www.aibaodan.cn/163nbjsqkae.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ysgactxs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qhxnpmny.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163uozqwfsl.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vvszrxwq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163aizdpyee.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163gctpgzzm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vzcfnkij.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163guyhchzv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163djkjkzkz.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ukpyfccz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ovjtwjuh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163caddcrjh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163oziaxcpr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lspvpmkp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gbfyvfdx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ijaxpxsm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163btwsmjcr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163oooupogf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rixciavv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ojmsmhre.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163eiqaoerx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nqwvevtj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163tmpfklfr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ddhqqzed.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163bejjzpxs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163qedizwno.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163utvnvmnx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163avdbtckr.html

================================================================================
来源：http://www.sxryk.cn/163tbrxjsrd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163krxsjzbo.html

================================================================================
来源：http://www.sxryk.cn/163ctfhpcga.html

[Q01] 创建表
来源：http://www.xuanzx.com/163aqyukjpv.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163vacfovdc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ufvculqm.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163utziyekp.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wrlgpeff.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163otfrhqag.html

);
来源：http://www.aibaodan.cn/163uoigcsce.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163fwujnbww.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163yvkridlw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qqtxdzym.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163qdjaevip.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ludqlwhi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ahcvdyqq.html


<!-- 参考信息 -->