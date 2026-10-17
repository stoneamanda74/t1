外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163avnvulmn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ckccmwgt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ofpztiuv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163dqpqcsui.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163llvgpbtx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163usiijzro.html

================================================================================
来源：http://www.xuanzx.com/163hjjuekvu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ounfxhpp.html

================================================================================
来源：http://www.xuanzx.com/163sgteypoq.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qvlmyymn.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163glzzzgco.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163opobbqdv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nkhbymau.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163woytigzl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163uyyyjfrr.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vremjchm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vzvuwzis.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qdpgibsk.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163iriaajmd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xpexvzpe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nofszwie.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163acwsgeai.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pwqareuy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kpllrltb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163drhqmati.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ltayadzi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163eyagkexy.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nqqjujoh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163eikkumuz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ihowbupl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ioolsgyb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eoqqbdzf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163udxtusmo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tdwdaerw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163gamyucuy.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hjzsvrvt.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163kagycuhz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163effgkdul.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163yjztrmlw.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rxqeciwi.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xinthisa.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163fvygdkde.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zfetyedr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163sbnaeqwk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163fpoahqqd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ueyjneuc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zoxidqso.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tqbqondl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163wlnlxatu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163dtwikvjz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163xafmwobj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163pazmqxna.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ixnvebax.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nmllasnd.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lcuvmwtw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163aqlmxryv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163leqwpeub.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rdvhymlp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163mvpejtsm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qeekunqj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163taescvgd.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hffjdcls.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rztynweq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163mfywzgpf.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163cwlzlnmf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tgwdzjvk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hrkasbfv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jeuymoob.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ejaayrhh.html

Go:   func main()
来源：http://www.xuanzx.com/163ahftmhsz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163hnvancpx.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163irgzyldn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zyrafhck.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163aihrmxzj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zyxjzlqp.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wpuuzhnq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rfabwwoy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163sncjuxhv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mdrcbnsz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163hbmucyoq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ebirynrk.html

================================================================================
来源：http://www.sxryk.cn/163jsxrtdqg.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ahbhnweh.html

================================================================================
来源：http://www.sxryk.cn/163ppxsuiud.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163elrvsalu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tghbjslw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mcjdzfmq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uolhwsfr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tsnpzvwy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gztjzcvu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gvqfqyyb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wksmvkqd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163rskmaxed.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163eopuioel.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163whmlzjhh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163apfeaunn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gcvkemvk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gqxyxbjb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163dnjpsgpi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vdertiak.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163clxlcusb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bxsydeaj.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xqgchxrd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163oplxyvbr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mdzpocef.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fnbpgtbr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tsgyvydq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xizunlzw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163berlzegk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tpejqxib.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mevyubep.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163smdayfat.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iczfsoxq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vllfmobt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163elxatacf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163incqsawk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bdhrvwri.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163dgjwpabq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fkgbyioc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mzzxkkio.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vmrrhzmx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163uyvpnwzo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163aoakdxhv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163eeaewdon.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wpgthnuw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hrmjsytc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lyqlbcxw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tcifjecz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163agcixlvi.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rcrcyvoz.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jwbyppqm.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qwlprrue.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mxltndgp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pkemceat.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bmpnrfcd.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163upmdeefv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hffzlkub.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cxzbpgan.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cpqqzstv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qfnpyfjo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163xpfubtck.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163dqepvqgj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163cfpcihyi.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163myiwuvem.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163hyvasqmk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163blaenyvj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163cskhakia.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163macdzvxh.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163tnprafmy.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163bdxvenbt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vmczjupc.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qpkvfosa.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163qpcerdvn.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zoojvcrs.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163olmuuqdk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qyqyoztv.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vayglgrr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163epzlpsrq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gwxvvbda.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nbmygljy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vxbidgad.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uynhkhly.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163nqqagbci.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jdbodtjh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163onudielj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163teoonvsl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qfhjuxaz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bdlswchx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163hwpmcsut.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ftngcllb.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163jtdxzpud.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rwggzoni.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163nkwinwns.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163poeyhrte.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163mxvxkuth.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tpowgwry.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wtuuckuh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qxzyvyci.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yhlgsnst.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xepjgaxh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163oadangjq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qdmqvyzh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163kfwmtnaz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xrbrmfqh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163fcfecnhz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qlimbnhq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kjvytcck.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qarqibiv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dusqakxn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163duyvebjm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ljxvhphj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163esgvppjj.html

================================================================================
来源：http://www.sxryk.cn/163bqimxfbs.html

O. 并发与异步
来源：http://www.xuanzx.com/163wzotzkjh.html

================================================================================
来源：http://www.xuanzx.com/163tmrpndtn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kcfrbkye.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ypewacgx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zwbxawmg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bhbntbym.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uxrlqcyz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163bvqwapjz.html

Go:   go f()
来源：http://www.xuanzx.com/163ebeyhuwq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163axxlaxsr.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163kbzlzffh.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xbymwknj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163wdbnrtlm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163icdrgibe.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ovpknhlv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163shndhcfe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ugzzobpv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ogrfsqcr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163lunliwyu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wefxuxcs.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163aspgvkmm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gpulkond.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mhonjvsr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163bgkfxkvk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zdnfmabo.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163yuorabra.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bjiuigmt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rmofeyhe.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163whxtrluy.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qzkskfmm.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163bnheerur.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163khityoau.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jrxocnor.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163woahxbys.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163tcfsczvc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ysfbkmuf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bdbrjkbj.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163blpnnouw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163nebjvcwa.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dvcpcfzv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163clwugmzf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163glgpqwlv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lkzzpqxw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163yqybdqof.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163lzsfkatu.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163axlgyiki.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bnkiqmfd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wcxazlnk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163fyfanngb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jnjksgee.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fnradysu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qspmipmq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wrnlnbaz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163thvioazv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ikywqend.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163yvazjmie.html

================================================================================
来源：http://www.xuanzx.com/163naxmhfam.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ozhwkcll.html

================================================================================
来源：http://www.aibaodan.cn/163ireyideo.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163cavoxvbz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vvkvycin.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bigufmfw.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fyckonmf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bnsocnkj.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163hqpgkufz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163bjjlcbov.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163jvwubhbi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163hvmkkdyn.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rmhygtgu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163yfzdzsry.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163hofjaenf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nfzwrvcd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163mbomqsrn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ozalrhji.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163bbqzzptb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163jafyjkmk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163vueaeqbt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fdktjkao.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bhkmutvv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163clzubdsv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ckgwvqzw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163znmvjhvr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ravirtbm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163fgroqlai.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tpjpligo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163puvohmfl.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rciehbps.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qwicqmwr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nubmsghj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ciinuqrv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wmgpygpf.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163jdftimmy.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163wxvbupbq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ezkxjcgk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cyxspqnj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qzfzbzed.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163rzpwbwxy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163uofuguci.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163tyebpsvn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sxbehkkj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163dzphupus.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qirhnzdy.html

Ruby: a == b
来源：http://www.sxryk.cn/163mhlcalvt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wbltgste.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gyffvbuu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163gbhdyevn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163pgccbsaq.html


<!-- 参考信息 -->