外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hfxwhkss.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163trvnvjvg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rvhyahsh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163gagropig.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rdhwhpbe.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cgfvjrfb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lywvcksq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163kkqatphd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ziqvzbbn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163fxwiczbx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163tmyxykco.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163cxqzrlgv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163tydanick.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nrfoecfq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pxxdueuc.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ecbbmunt.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ftabxlxk.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163athsmzkq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xzwmczao.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ousnhmvt.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vwacjnmj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qvdpdskm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163gzoynvsf.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pldvjgsd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ogvzquky.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163bymorslr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163jqbtnaix.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163boxiajok.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163spqrkcer.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163yctdzxmc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163vybvrmrp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uxtyerva.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rjpnlpzj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163idyxysci.html

JS:   require.main === module
来源：http://www.xuanzx.com/163kjdpcdte.html

TS:   require.main === module
来源：http://www.sxryk.cn/163hsnnhpws.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bznrisfe.html

Go:   func main()
来源：http://www.sxryk.cn/163tkoeifdx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163aavnxrfo.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163hnmngxun.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163plliimee.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jjzxeluu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ewbakidi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163scculwkj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jwtpucgb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wjslqshl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fqxgccke.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163endxzfzr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rdnrufgw.html

================================================================================
来源：http://www.xuanzx.com/163bhvitnfm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ucymtthk.html

================================================================================
来源：http://www.xuanzx.com/163sbyfspqn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163xsedagpl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163vtczoghq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163lqqgrktu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cbeqajbe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tofttpoz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163okjkyqdx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tjrriidg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163pvpzpxje.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163jicxqhbn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rbfhhflw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pqklfeaa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vrfscthu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zqthrktd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jctiwkcg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163bhvquuzb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gsgswsqm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gcwqodxo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163spmnlcie.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163iaecpjod.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ytwcsuqu.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ltverjcd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hksfusrn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163abkzqakc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163gnflvanx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xtjptzqr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163oppfgfqc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ghtdkpwa.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jetmcbqw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wuqyuyet.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163uryubtzl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qzrjazlv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xaraoptt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163smtbllek.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nmtlpgda.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163byepscut.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163onekwdcf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163rmwotdzw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ribiktqu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163stkakmcr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qususltb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mwxvzajg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163xscdgtjv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163dpyggqoj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fggalmop.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163hykqpnik.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cujuzbah.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163aaxdjssf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jlxvwnor.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163govietxw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rjgarbeb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163cupetwgq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jxaxmtvq.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bcgxuytj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vridwdrn.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zyahgjio.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163rfpbfndh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163votbcmzt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163kymphvqd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fxrnheix.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163uixmmuwx.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163adufmutp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ktrzdxma.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jhdbsnni.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hakzzlve.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ajhmclty.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tqnfoort.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163prsytgko.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zrodgaim.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163diwqeohx.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mcyogijo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ffkgdouk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163cwqqhxtt.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163tsejnglp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163diqkxred.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163fsvyokcx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hadgmjbt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wkehttws.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163kjddygoe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163pukdrxnx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nmlsnqab.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vgwwlbpw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163qqavnmgl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163bvpxibhe.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ynybpmmm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163mabtoazb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163enddkphg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163hgrwojzh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jhopvayf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ouadisgz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163wpwcnveo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163hbwyjpyw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163mxdodmba.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lzcmwdsp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mqzzauai.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mwofawmv.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kqzqoofq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163zvgcvfea.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163byigtwpn.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163grdbkvhl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kslizllm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163bwsfkbjt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zaqihhjs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bduxzscg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163calilmxt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jskppbac.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nxilzgar.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163drphjgyx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xrkqydhr.html

================================================================================
来源：http://www.xuanzx.com/163pgykmnle.html

O. 并发与异步
来源：http://www.sxryk.cn/163pvifestj.html

================================================================================
来源：http://www.sxryk.cn/163tggjhiog.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163kvdqlkrb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163bqrjywnd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163kctpyosb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163coknvpgv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zujqrzil.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163lctayvvi.html

Go:   go f()
来源：http://www.sxryk.cn/163vnkwvifj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ptfgplog.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163nmekvhos.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163nknhjrvz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163uphdpqjs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163epphlajy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qfjxdrof.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pbtbcydu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qivkacnv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163icjfydbv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xzthvetv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jjnekciv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yeokjmpt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163rsscxoch.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ttmsjgoy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ssqbyeow.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kastguah.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gozbosva.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163govohtyo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163jbdafkfe.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163pmlgpqbe.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qddfnhop.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163sjnytdfr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163hjszxuzu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qkhmmoil.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hfqidqzd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xbgzvxhx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vufllcke.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ehnfqjld.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mjlzfvsr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qkzshjui.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163rfgsoecz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163lkzdcucz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163uudrfkhv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bxpdvrgj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163wlnyzdrw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163cosgbiiw.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163inqybdsc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163qpamjbnr.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163nhwxiwnd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163zjkkpsyt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rjptcipo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fyjkuhoc.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cxtxnkhj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ufwadkrc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tfnfhdnr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qsawmsgt.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163idfbygnc.html

================================================================================
来源：http://www.xuanzx.com/163muvliqfn.html

P. 常用工具函数
来源：http://www.xuanzx.com/163tapfyxld.html

================================================================================
来源：http://www.xuanzx.com/163wzwrpwiw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163wbjgvyjk.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163clsjzkrh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wjuovklk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rshvbqkz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163adecsjlf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163svxyethv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hmozsled.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163nkvdxsoj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tpzupvoc.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163zborkhng.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lutirfgj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wrggeppq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163lfchptqf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163yanxzydc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163iolimwnm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163rkhkrixl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qhpcsxos.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163oqlqoeto.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163uzgqbkjv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163spmacapy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163lpintxfe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bdbrfsgi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rpocqazk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qgcytqbz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163kpaevmdh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163njhxjflz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163hmzsjmzk.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jmakjxra.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hrtbicig.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kzdvmpwr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dvkaxxzw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qhmdahpr.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163layjpgeu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rksjxben.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163vttfdcef.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jgcxbvir.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163srkzserd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qskhdhig.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zfmghhjs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163iiwqfjkh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lmwjclwg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jqvmhacs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xzybfzjh.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mmfbwrjm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163bogbaiqn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rfrgsvvz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163xxkwhxih.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163awvdhfxk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zgylqkvt.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163icpktbnd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163lsogvmzk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163yranrwkh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163geyarlqt.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hylaxzhz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163alibofrr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163oldnyyuz.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ybcnriqg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163quqpyxom.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cycqnfld.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vvdfpgwb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fqpfegit.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163oybyrqsk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163vpklqnwv.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163uxgbmlva.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163vpjmkftp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163tqmwxhas.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163vkwxymsg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ebswlvas.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163smlhfkxz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163yjocrxta.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jmbajoau.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jgfvijfh.html

================================================================================
来源：http://www.sxryk.cn/163tgceeeaw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163etprixkv.html

================================================================================
来源：http://www.xuanzx.com/163lztsajwe.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zvbifbpv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163gfkwfzpd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163phovqxlf.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wroqfkph.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vecwdoig.html


<!-- 参考信息 -->