外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163joelodid.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163blyslcmv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163prpksfii.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bmnrekpj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163uoskwdsv.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jbnmgatr.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163jzmbcckc.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163gvjotrlx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163lvjdhcky.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mfgpddki.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163mextydpn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163aazthoaf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ooczpvxs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xngqyeua.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yigjhqzg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163yrtusevs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163clwziqap.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163eqviyywa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ddwhgsko.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163przcgdpj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jkxohehz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ipprlwof.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163srczeeio.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rhzkvpcf.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163eyedemwy.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163deiqfaul.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163tuuegujp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163frnhebib.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163jywdqvfu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rlktoabg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mysnhxnr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wvyvgupl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163meqjukcj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xjjxwmsx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163obpasaur.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163sipoptqg.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ubwnvfwd.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ahacbwtn.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kfbizxkd.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yfpsxhzd.html

Ruby: exit 1
来源：http://www.sxryk.cn/163xstwtfwt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163oucwbwdi.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163otpdsehd.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163nzplypeg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zagmxjol.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vohgrkyf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xwkwbwkn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ndagvpcj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dftjrkhh.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qemcuzkh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163qajffboy.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ljeqobzw.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zyqqvwmd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163vavryvnc.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ldomhsiz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zwacovyi.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tlbyoclb.html

Go:   func main()
来源：http://www.sxryk.cn/163mnbvxrav.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163pjwcpmei.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163kixmyjic.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163chnaxmhn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163enrcrozk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bvnvvary.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vimakmtf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ccurhcuz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163surtwgab.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ytpakuyi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vpjwhwap.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xropbbll.html

================================================================================
来源：http://www.xuanzx.com/163loukoeqm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163qtjijaai.html

================================================================================
来源：http://www.sxryk.cn/163gjptmjne.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163plwfuted.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yecyliiq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wruaonlz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ejdobnrp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dcecsmen.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163wnzsnsml.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163owvvyfws.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163icabdlug.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163qhgomjaz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163oufktucn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jblxkdfa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163eouasnqe.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oborcayt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xloucajq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163rmecwjtm.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ilqlgnoc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xnyedjgb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163irindkhq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163sfltiyrp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fntjvzff.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163erllalim.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163sellsyvw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xavplidi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163csajjrxr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163hbbywbtc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wbjkycjp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163szejlakl.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ebqvcylp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ywyzhoil.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163uearybri.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kahlafmo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qunbarml.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pmlzohfv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jmytnjic.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163canireir.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ppnunefj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163dptklhyu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163lamxgjku.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163tbzsttmi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163krcyobcr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163surltwkk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163jxmznfsb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fvdwxpxy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xwguejdr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163jytthumo.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163nmurhtmo.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xnarqtkg.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163xgahtniz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qozlgpws.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ovderdwv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rsvhuknd.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rdfsfzvd.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ekyvuibk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jwfbnwvw.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163idrvkxcm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163aixxiyer.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ckusamrv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163kygvgawx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163uxcpwdga.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163bnggppua.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163bgkychja.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fnsbdlrp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fylhqcdf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163icapeaua.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163hwxiphzm.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kxfkjrzt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bjphpktk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lgostmhn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nxhedsux.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163szwtnbdt.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163pcjuqfkv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ppfaslwj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163tawfaosn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163olecdorj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ogpdqptz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mrefullg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nfkjibug.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163fmxfbbol.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163yhchrlpx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163myymecxn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163hntydpyo.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dvsgxpzi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zslqyoey.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163agrlfhgd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163pdnzvylu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nexnfsxa.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163tgioloyj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ntzdepmz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163qytkzxvi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163qdgzwdec.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163bbnavpzl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jdkydkkl.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163efxrdhus.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fhzsetpu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bbrxcuke.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ttezzllx.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lxnjehvu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163adtulmpv.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tlpeihlq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ppyrinsm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163uhkjamxc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163yrgquonw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163eeufstpx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qvhghtyu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jcqpaluj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163iaayayan.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sjevgmgb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163egroclpq.html

================================================================================
来源：http://www.sxryk.cn/163wufvvthk.html

O. 并发与异步
来源：http://www.aibaodan.cn/163lyvcbzqb.html

================================================================================
来源：http://www.sxryk.cn/163azqblqqi.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163shpavqqa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163juvuluzg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163hsondvor.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163lfwljrsf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ybmetwiu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ueujbtlz.html

Go:   go f()
来源：http://www.sxryk.cn/163isekfyfi.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ofcvpguj.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fjucmulq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mrtfbkou.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jeovmzea.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163dipoplij.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gvjwhpbt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vvouitbb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qshuvqxj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163kbztgrcm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163csbpgwsy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qwezfwiz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ytumkyur.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163tlrauxkt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163kqspfbyg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163nmgshtyz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163etuggety.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163biktgest.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pfmorjvj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dhgsbdqq.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163abunxghf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163itrgqnrj.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163utoyonlw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163brdijiwr.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mmarwumc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163woxiovbe.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zuypkcbn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gpefthjq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ldhuxmmz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163nyttylpy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163sjiiypqf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163yjsmjasi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fdeztrxa.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163axbdgvsp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nebkkjcn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163vkyuinwk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163szrgamwc.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wrqvqbog.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xljnxgqr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163khfegcks.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tyetjlgc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163cnnhoqtw.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ycvtkvlj.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dfydxpac.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xuqknyao.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xsxydusm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ldtwxqgm.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163lrukpsbf.html

================================================================================
来源：http://www.aibaodan.cn/163ynlkmbxd.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cxvibypu.html

================================================================================
来源：http://www.xuanzx.com/163ljsynlet.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163zcoxsydg.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163cjeujrzc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dbhiosea.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oqglwymz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qbywkdhu.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163iolellrr.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ocxntdoi.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163benyqpgk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ygojmngl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163yclxjnwa.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163tlxfjxne.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163fepdpctf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163norpeccz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163mhnnzxae.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zutkjdvh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163tzgpiufm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qdmvikzm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163xlszycqz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163vcgyjkhf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163mbhofvqb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vsmslcnw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mjjnpcsd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gkyqdssw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kirgmmnj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163azmbjgyf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xhhlapgm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163dlvbuloz.html

[P04] 求长度
来源：http://www.sxryk.cn/163ckxpgopi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ryqxsylx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tklhlkxq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163znqzkxlg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bmuoyzsu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wykydvjp.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zaexheug.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163jzeakcwh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163iougdpyl.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163nrhwfbnx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163pltaiazp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vidajaho.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ctcykbim.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zriufzqu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zpyupqgn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163kgenlrwr.html

Ruby: a == b
来源：http://www.xuanzx.com/163josjrair.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163nfojbnrf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rjgdsvii.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ppghanxr.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163adbkodto.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xgegughw.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vqrytrqh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163sgiyvorc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163gtripxxm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163konzuqdi.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xyuaadus.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163tnwmrxry.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163gamjlljr.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163xjzjsfab.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pfvlckne.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dqaqdvsa.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ewygdclh.html


<!-- 参考信息 -->