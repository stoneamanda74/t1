外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ksrwqiva.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ysgadzzy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fyeldzzf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163srtabjjg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163oflwsihd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163szrpixji.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gvydwhav.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bzouaxhc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hgyftlug.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163lnakamzz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163jlthusvw.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163folfivui.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dfdczaeo.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wwbjgnhp.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163mlkpgfgo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163evaklcsj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ujvyikvh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163xydwatrr.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ttxqhimk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163locdknfz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163auhgargr.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nlvzlulx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zalhtlox.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jfjwaeft.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dmfaabbn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ilgvmjlg.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ztfyxsis.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163armqmiyt.html

Ruby: exit 1
来源：http://www.sxryk.cn/163wdscflqv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163nvjsodjh.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xfajeqwi.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mjhfcfqm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163edpefyoc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163zugzonpk.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163sztcgbzn.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163vyksceug.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163oadynasj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163phjkffih.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163padukhxw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163lxpznsoo.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163uswrsxsd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163eccbxkec.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xvhiduiv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163udhedpgw.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zmglhuon.html

Go:   func main()
来源：http://www.sxryk.cn/163lsqwmihz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gyytsizp.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163eubknthf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163jnfqeidp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rgqjkcas.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xvgqnoro.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bzpnhqqw.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kpvebkns.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163dlcbligb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rriszwjp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hebgwyle.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163kulkfmlb.html

================================================================================
来源：http://www.aibaodan.cn/163fhxcgltq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ghkgdrpk.html

================================================================================
来源：http://www.aibaodan.cn/163dajuwyzf.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fndfkdte.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163hltxoqjo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163etuawyss.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vsgdncsu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tcckjmys.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163agezayai.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rqyeooty.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163oraguazg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163pfbjejph.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vruekcyp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hbqexsrd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163dhzbjxam.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pygghidl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163muekyzqq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wofwtqmg.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163iddogner.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163edjdidle.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ikbnydjv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163llszjufb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163etuxlsfg.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jgunlbcm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oxbmwedw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wfrfzpey.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rifldlsl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163krdbfpsr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163lvkojdsm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163vwbyvpwd.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163aihjcwsh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tgjtvpne.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ysupctoq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dnqxaiyp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qqqipmpg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163eafclfpk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wyeimcws.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ztjggtun.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163mkcdzgkw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mtttrbgq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163pinqddrv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ckgeyfqa.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163skustmzz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163aiuvjjjs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163nfudxnjn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163aaogefit.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163rnskpmcc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163afwhxxuz.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163sogtzxzj.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jbmieeqx.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163snojdnfl.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163toksukwr.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163kyyasawz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163dcrqnoca.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163nmlryeig.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pitvubdv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nktlzctj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cfaqdncy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163upgfthsx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zaunyjge.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163whxcbbgy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bktbxkxt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jvjwotra.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ldeicnhf.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163hafyzodk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ughfatko.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163txovxaic.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mzejifdo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163kktxwyql.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163anzpcgln.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yledcmdl.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ctcejqsl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qxwqbtkb.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xklawxlv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163uukmqffo.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ybjoicev.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ubvzanjr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vccwtckb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rbuojhhr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163svmvrndz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163quhggwtk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qpqgnfbs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163yfuxxnuh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ksdkllwg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163iawruoxy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163inxeonqq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nsstammt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wxpvrnsv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gzpfjluf.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163goloxkqy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rjanciir.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163jivqhovu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ljkhlgwg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ysyosluk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163bfdzoaew.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163iibvpqgo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xypzzsxw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wpznldku.html

Java: // 手写递归
来源：http://www.sxryk.cn/163uxeluhco.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163tjvsgzwb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gmmjhitk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163mgjjtqhc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ynzapalx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163atxcwure.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vymlgydy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fwdluhru.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163luycbvmm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qftvkvli.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ctllwmvc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ztlsyalk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kgymivsg.html

================================================================================
来源：http://www.xuanzx.com/163wrlpwnlr.html

O. 并发与异步
来源：http://www.xuanzx.com/163bxrccsfi.html

================================================================================
来源：http://www.xuanzx.com/163sgdzjfzs.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ewtelbwy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163fbuyqjgy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ljzmbhni.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fhsxfazt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dappmyfc.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zjpyvqnl.html

Go:   go f()
来源：http://www.aibaodan.cn/163rakxofom.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vziqdnfn.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gfjwwuly.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163apqibsoj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163jhblnrfj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ykkxnefw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yzvkrxvn.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hbqcwwfe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163pkuvbbom.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163pgwveosw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163natyokta.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163igkglwyx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163qktagguv.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163arpfdiqs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163tlnqtuwu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dzbkopvp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mtaikxiy.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dvbuipvv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163cjsjtksv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zuucgasg.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ovgdvoop.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163sifkiofh.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vfaxeehg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163tyjmokrx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163dndgtmip.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rvxrjimh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ruppbipb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ivzqszzo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zumkrpfo.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dpillzkb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ixegjygz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wicdhnng.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xbeyfyzn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uwrlamnt.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xmlsffto.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hpfgqxyp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mporqkoe.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163bmtcpsdq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163khiucfge.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163yiwfeudy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163onglklcv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163cgsvmqqj.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vugcxist.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163csoosact.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163wpbfeacr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ntfnbpda.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vfpfskbp.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163wmwmhqaw.html

================================================================================
来源：http://www.sxryk.cn/163rfoaxjww.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ljbhpjua.html

================================================================================
来源：http://www.sxryk.cn/163ckydnhjx.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kopwolhg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163uwhmlspq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163asrwipnt.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163eckhibqm.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ugofszap.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163kbdjgtho.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163cqcuupck.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163maozadty.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163khbmwrec.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163oiizhoap.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163wwzadxtu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163iezydrta.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jwivnhlf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163zgwmgaei.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163wtaxjled.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163oykqrxwa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163fpunjvyj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ubjyhrci.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ytprxgby.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163hshmentv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163cqfhxsdp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xpekfxag.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tkbkvhwp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163fxkclyvk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ssgiqejf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163twnpcjvz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jonpnigz.html

[P04] 求长度
来源：http://www.sxryk.cn/163uebnxshc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163awxvdjif.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163aldnuwjy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pwlhblqi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163imblyirx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163azlcgvmb.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163bbkjjkfq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tfbvslrw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163yowwpaef.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vmqiqlvz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qtxvqget.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vrxauulk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163zderwmja.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163uqbocvbz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qxassbuj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163zaxlhomf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mjwozpen.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163rmkcooof.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ayzthrjp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163prfswcoo.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163lavtvccc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zynwhtec.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mtmxlnjq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tcxkwouq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163rsweoeoh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rubbemzj.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163qgkmcjuq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163esfesijr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163milpflzb.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163xcsksgoy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mavtmqni.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163axfnvshr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163dbefeucl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fepsjnef.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ertlfgkt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163sljeocgs.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163rzyvztxc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ckotciso.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163nputtacu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163azdkckod.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163zzodmygy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pkviavrz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pbuwghbx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163llfprkei.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163fnvfiybg.html


<!-- 参考信息 -->