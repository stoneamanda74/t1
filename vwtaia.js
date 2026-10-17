外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wquozofi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hgwkiaue.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gfwhobjw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hvhzdrta.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163fcaidtmm.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163sssxjagn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163adljhpza.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ghewjnhw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lnmitrvm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163blwwtuzr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ovmtzyfo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tqfagpne.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kejzzcno.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mngqglcy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xxgdwyfn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zdxidkbj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163colbycwt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163nhwcftwy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hlkjnybt.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163coxlygwy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wfsfjkzr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163yovtegno.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rrqaeedl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ukwflkjz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163jxgnnzpa.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163lnsczuiv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163kakgrhpg.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vjhazlkd.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163iegsasfc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ipdcgxms.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163voqyobal.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qzqvsmqe.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cacwhyao.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163iehkpqkl.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ylwnamyh.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zilcdkcq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mtucudve.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zqvevrtr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163shritfcb.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ydxxckbd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zggvzhwj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ikbpgcow.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163hnlqigya.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wknrmwfh.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163moityrvi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xymvacut.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wcnugtqv.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wmdhnddr.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zbnxrymk.html

Go:   func main()
来源：http://www.sxryk.cn/163xtwlzvws.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163cucmqntz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yloxrxvt.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wchbeipg.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dzuhdgyu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ogyvqkze.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163djpffcgp.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mueoheqs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163idkevlwr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qhtvmmkz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nufdbxru.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163fenkjmby.html

================================================================================
来源：http://www.sxryk.cn/163djhwqflx.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rxhuzake.html

================================================================================
来源：http://www.sxryk.cn/163hoiamwaf.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fmuzgxfh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tgpmkgsz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163lnmtmome.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lyaniyto.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rtdxbytf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qseucpgr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163xdoxrmwk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jpwrkrql.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163axlwqlvc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zauaogia.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ukjjgtud.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ulukcibs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xtihguhq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cgtikbcg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163aafihcnl.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gnglorgm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163atlslbvm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163hbhkinwq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163aasihwld.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ppzfzbbr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163gceypogb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bnozjcqk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163kyhiwmff.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xzmjvinl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bmralvnt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163mtavsxrx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163lavgrkjx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zpiiokcp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zxphvxml.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163euqtpusv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163buodesko.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cbyjnlgd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jmhgdrbd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zluvarng.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pipdbqef.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hvkptuze.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gvppjmez.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163uxumkwgd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163blbpfazd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hrkktghc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163thaxebsf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163twrnpypj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gzsuyfoo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hldymwnw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163cwyvygje.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ozucfdqf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163druxkbze.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163byydzllp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hoxlmiml.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163llnzcllf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163rfxixpjg.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wpkssmyc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163qpwhlasc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163otacmufh.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ntxmimzj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163nhwkaiyv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163xytelouj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bpcenbum.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jiyydnkg.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hzzvhako.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xrfkthck.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kajjonyq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163cywckezw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163imhcbwce.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163iavlliiw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ejdkyzhm.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lpzeqklk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jceytyrr.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163cbjdlcko.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mpyowscb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163njygllah.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163cfbdakky.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gnkgypck.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dkqjvjgm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163maxjliqy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163sapfssbv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163dhabwyad.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jmnjcjoo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163sybggzkp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163puerdgzr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fxqvhcao.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bzceeixk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163duicyxbh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163afbqsxcf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163jqsmcnho.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vrvfteen.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xbnivuhu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zhxycuay.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jqtqazni.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163efpyuthk.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pedkvkvk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fqacgoqs.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163totvudmw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zbdafzqf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qpjavzjl.html

Java: // 手写递归
来源：http://www.xuanzx.com/163aqvenbwp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tslytcse.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163cnnexrll.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163oueysufp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tljwbmoq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163vyfjyhcv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jsumdmcf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sczwmdkd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163euslacue.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qwgagbrd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163lsykzocl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fibuqvjs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163yqcdrfde.html

================================================================================
来源：http://www.sxryk.cn/163qtdilbgr.html

O. 并发与异步
来源：http://www.xuanzx.com/163oyiqmick.html

================================================================================
来源：http://www.aibaodan.cn/163isckeyuz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163fhhdyeuh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163evzwltgs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yhwgiobk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nxtjuhtj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zegxrgef.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xlribrea.html

Go:   go f()
来源：http://www.aibaodan.cn/163hvwqitou.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163tqgqiibc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hoswfgsa.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163gmyrtrel.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163divsmppg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163xhcuujyj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cjvbnbys.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ztswzpuf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163malyasee.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163lpxefrwa.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163idnjjkbm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zzrparur.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163oerazonz.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163dordkogv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163crhbdouf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163impumatj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wnqibwkk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163rrlegbjo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163xmnbxsmf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163musqgknl.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mfjdnkvd.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mrlsvnsl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163gcfmhogc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pzmotvnm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163aexgkgmq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163etuxduhl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163wjgkjokm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sxjjhzbp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ofilkzsz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pmhvfuqq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163paghjxgk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ebjckjkr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vblszmlr.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vketajnd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tavvpywf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163enjronfq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gyuygvhk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dimjvkar.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ucnqkuwt.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wtnmzbxg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163irykpffg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163tcdpwiqm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kjozmoxr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qrunhfny.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163bulahpyw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wwsgcipa.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163scnbmevw.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163irctnorh.html

================================================================================
来源：http://www.aibaodan.cn/163eejgzgqo.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ahddcqim.html

================================================================================
来源：http://www.xuanzx.com/163wopcompo.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163xlotmpld.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ibicjzos.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bnghtozv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xiaqqfuv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vhnnicod.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163fyjixugc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163erhvzovr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zmqvikqf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163awnqoeec.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lokxxfgi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163dliihagj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163htfmdwip.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163whwzzaum.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163vomincpq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163akodacym.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163frhcatun.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163dyczmmdm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163eyypmnya.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163igcwjhuo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qqohdqaa.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163fqxcuius.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xcjkevqx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163cpuihgwo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jjlmrtcz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ilmwvezv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jsebaipb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jimmjhuy.html

[P04] 求长度
来源：http://www.xuanzx.com/163ycqnzruw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163bhedljox.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163slnwcnsi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eexsugih.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ejslkrfz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163iwxvdkki.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163moqneear.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dtdmuipb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kxueoccm.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zivdvtzc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jnbabkdp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163fxpmdgqw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163rraxgfkk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163eesqfngs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163nivxhkoj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163pxcqyxdo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163neyledxt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163zfbececb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jswqyobv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ishdkkza.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xkhjfrof.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163oyayiohx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ztphcdpd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nbrelvai.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163rxbnbwdf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163nwwexbgk.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vahdvhfk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163gfafkeog.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bcjfdtem.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163zbutahyc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xutyemqs.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lytmlorc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163luruxwth.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163eddstihh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163olbwvokt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163kxroaqkp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163haqvgibw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163njkqetoa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163keulmifz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xywhzdbc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163geyoljta.html


<!-- 参考信息 -->