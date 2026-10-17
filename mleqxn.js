外链999!wailian999！

Ruby: ARGV
来源：http://www.sxryk.cn/163xvsspwwa.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vvdbdadm.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163apvqsspi.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jlfkxbyx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wwwsqstk.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zbfjqdhs.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163opdcwilj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vlrhlnsz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rvvlkzaq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bemstnkj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163klztzknw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nkozvlyz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163oykdsfev.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ztjgrhsq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lrkkuycb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uzrmroci.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lnuzflxh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163noiewjcl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vcxutxtw.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163dulccltn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hpftcawv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rexddjnz.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ybbcqtie.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163sckrchhy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163evirmbxp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163iwjddvsj.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163tvzymdzl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bbaiiyju.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163olbdlhtj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163pseqjfjr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163yjqlyxov.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qfolpbou.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163osggbmcn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163pefgidae.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qdbjocra.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qsfbifxy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163atgaexmp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163mfabxgel.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163mtynnvry.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163damvofbs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vjflnalg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163mbquzpyo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163anmjjgyx.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163tonrvtcl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jgvepvup.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163cwvnqnnc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mmhzuytf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vqqutlff.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xzwqsmtv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jtptpard.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163alinuopp.html

TS:   require.main === module
来源：http://www.xuanzx.com/163pmldulag.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163lzqsmzwd.html

Go:   func main()
来源：http://www.sxryk.cn/163czksfsub.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163sfnlgofm.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163plmalrjr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163erhktida.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163actxiusx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163kgrzrljn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hkubmckm.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yhggenfk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163hxcaeuhn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bnzjtmbx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163nabhdiuf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qxkaubto.html

================================================================================
来源：http://www.xuanzx.com/163hcgpxbta.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vwlbfgna.html

================================================================================
来源：http://www.aibaodan.cn/163yrqnvela.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163lvaruzvq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163povfxlmf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163odkexufc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ednwnfyu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163meksbcek.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qdutybog.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163pdazkgnx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qnfeqmjg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163kwlgblbd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163eykkazyv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lwiqryed.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163haouukcr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163flwmfemd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uwegnfii.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163xxeawdcl.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163okzllrav.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zeilbznt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163kejoznrc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zxeoogte.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wpnglrtg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fsjlgobc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163iyfihzjq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vulapnds.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xtqymmrg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uuzsppkx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nlpgfcfg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ogdglitj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ikuifhpf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lfqyxbio.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zinhndqg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hzgytwmp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pnnwhpzw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fgmxsrtv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xnlkarjs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163onfldlwe.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163aqbrakhj.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163fquovmdp.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163gfdyjpzb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163watqjwsd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163azlxhyfl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163libjxpcd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nvuttzqg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163uovnzcdz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163dayxffrs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163buhzrylq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mnnnxbps.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163btyvhgks.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163lkmcacoy.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163svsxrwzy.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tudxmubk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163uxfbarri.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163gcxovuhh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163feepwmwr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bozdomvr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163cjoblsat.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bvhqeoqw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163yneewoax.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163qxexghoj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163azbdwygo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163orxpeqqs.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lhtgpzlp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ahzpbocn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163pmdlsgzf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163odqiufwl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zzmbsyzb.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163fsnxhsed.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lvpowira.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zmdltjtk.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163dxzixgtk.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cokhtzkl.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163hzeiisvz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163odfyyjni.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gjanirrb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xcouuueo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163onnwflgv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lzjxusyo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ljqfixjj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qzpddjgd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zpgwxdjc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tyylwfuj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bsjzxfvc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163eondcznl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163aqkhvhml.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qgecydzy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163sgjffgky.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163rxwaqijc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163yjkigazd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163yfcarkvh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vvayksef.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163uhyxnasx.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mdxfaxcl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163urdddxbg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163bhyjaupv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wzkvrdcw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163flnecozo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163sblbuhlv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hxjeopkq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163geksbvjo.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163azsqpkhj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163eaokxmat.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163koaavyex.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163tqhoowij.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jfrgxqih.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163euphjxtu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xzyzuirj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tnrhbiey.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163vwieajsn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gqdplzzc.html

================================================================================
来源：http://www.xuanzx.com/163zviuelys.html

O. 并发与异步
来源：http://www.sxryk.cn/163cwmrntdi.html

================================================================================
来源：http://www.aibaodan.cn/163zxykzawf.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163wpdlbjde.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pzigsran.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cjsmnyrz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163aekemmws.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kloeldwc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jfscuwwe.html

Go:   go f()
来源：http://www.xuanzx.com/163lomgrbaf.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163mfbdjvoa.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163acakaqay.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cixkelqi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163fyjsyhed.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ujaoionp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vehlsmqx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163euzlwfhb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ihudgtuy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gtjrraev.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zmbdizqo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163antgqzmw.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163tazyvqhm.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163uowxswcn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fdepnfxm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163nfuaptrf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xhtwnlmp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ctszbvwo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ykiomlzc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ntesftah.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163bhcseumm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tjszzikt.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mswshpyr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rdyedoat.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163pcorrzkz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163esksvbcs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163habbffmt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yyuplsgj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163gcprsqaq.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163cboekcrm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xlbsrpcw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163bqjudxle.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163oiygxhog.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bwzdctwb.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mlqrihzy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163looougio.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vowtgeet.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ebzidwdp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tycxtdvd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163swrwsexy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163bdkykfpu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lrzfgrgg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dmbmdlpk.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lrfekfog.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mumwmywz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163oabcuvml.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hdefvyrt.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163sewjmars.html

================================================================================
来源：http://www.aibaodan.cn/163gjyhuwgn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hchadmsw.html

================================================================================
来源：http://www.xuanzx.com/163cjfdrkhw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163gfridtin.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163mlrcsrww.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163igbxjajl.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vqnydjgl.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xasfpaus.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qrxrynst.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mgbbuvqw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rmcoyyvy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163teoctngc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lvuhmwnx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163uwoyjegm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wimqbbjc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163gpozgclg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163guycrfja.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163knpcdqhv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lmagqpcy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163itynvupz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ycdrsftc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ileqqdlt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163dmefyehx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163lcyfygvh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vgfadvuu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ortpjmzo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vhfcdbhe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163fpapvcud.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ubczjpqv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pjkitpwm.html

[P04] 求长度
来源：http://www.sxryk.cn/163zshdmonz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163navxbqbv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jrhyyqzx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163epooyjuo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zjcwfdco.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163rlgcdwqd.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fnayntnt.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ghnrmkna.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163tmdnbhxi.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163mcwwmpfu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ynmyrklr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163stmuwtxt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ndbrbcxg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ineefhbp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qhixdhpt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163azurydsq.html

Ruby: a == b
来源：http://www.xuanzx.com/163kukqerix.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163gasgotku.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ltdkmmqs.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163pjzzbqqw.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163chtkbnlu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163iglewokj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163onrodwco.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ylzpvjmf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ngkwfuwd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163gpgqxupw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163rtgvprgn.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163uiocyufh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jqhgdzws.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163zaatbbcl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nbjdfrmc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163frxqxuto.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163kdynpliy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163mffunnbw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163grmpdxey.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163onhkqzjv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dhyfzlaq.html


<!-- 参考信息 -->