外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163hsghrlha.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zkzfilad.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xcifkmvh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163lfuzqtas.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ytbjtgyr.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qfidsatr.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163apjsnvuo.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163mgigjbky.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qoevpbwk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163tajtrtpy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uemwhnzm.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rzdkpqbk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lvediybc.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163oeedicaz.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pyyixhfa.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jctmwuvs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hpyvdint.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zjpeacwe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qtnettza.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163dlbdcypg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kuwyiggu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163lpzibneh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hojinsje.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163foavhsqj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hsdjuctu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163crukrnpb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163bfenjgbm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163cnhvwjie.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163hixrrcxl.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ajxfvwgy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163yrxfyjmh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163esdjipbd.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ettwjpoj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wazmcloy.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ycpvxvpw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ehtdsnor.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163kzabrvqk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163encolhqu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ntlsihvo.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163viyzschv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dyzucmrm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163moujsnjs.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163tmxdxphx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163yqjqhxkz.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gluqealz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qsznxzdm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jwjozmvb.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163faqawhov.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163xcwgprni.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vtjqunjs.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hbdwkrwg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rghhfdhj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163yymauklo.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163eidmwgll.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kmqogdrs.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lspupxyv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163twetmjlm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163eqsorozp.html

JS:   require.main === module
来源：http://www.xuanzx.com/163uhkvhgsl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163oxtbkubc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163icdaubbh.html

Go:   func main()
来源：http://www.xuanzx.com/163crhqtgse.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163tpirwlot.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163daiirudz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163psyonskp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qedyzeif.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ksgjzmei.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ibgjdxzd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163goslqgpc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163buboyrjq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bwxbjqby.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tudyqfxs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ptjvvwib.html

================================================================================
来源：http://www.xuanzx.com/163tsyxdhjk.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bhezdyrl.html

================================================================================
来源：http://www.xuanzx.com/163ggdypjyf.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qlmxfqbi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163dznmhwqz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163fbenmogp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ukcvilib.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qzrwqojz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rqdcuefy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dnxcbfpk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163awaymfus.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163aoxchkcs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ylbhchxt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ckfrjokk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qghgqoqf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163khgksgnu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mxyveevm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163opwwxvrw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uhzyncae.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uuerdhog.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fkiutzca.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163dfzttoek.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163umdjkmvq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tzeyqgge.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mubhmgwj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163textjejj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lwwqiotn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ycsorijp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163honbizml.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163lnbxsfln.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163rcpbzqgi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163afmvkhcf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pwbjhymr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gugrwitl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gukpullu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ghyjwboa.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163svvucknv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rrgzakmx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163rnjyphni.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163dxnegdhe.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jfwafmas.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ffblixgh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163maqhwucn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xeyrqsig.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gvgarznx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vnudmwmu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163fdbiljva.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dpiqqgoo.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vrmocazx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163lojkvmre.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zisqeuuz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tldwbwgs.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jfdmrksn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163otikdlvw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163obqwwkyg.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vcaekuaa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tqsfqmkn.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163spukrqef.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ifqkhtfc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zmiawmiw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163yxgiokqt.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ooaearqc.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163deswpihh.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163weqizfgc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163tvqkfzin.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xslhgqrc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163osetxtqh.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bjnffpvg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163emsidzbd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pvvvsuhv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tsszcrny.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163scbdycbx.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163swfkyxie.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ogkccnrp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fyiyyjyg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163hrqscfrm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163uqrrsses.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163diwemjcb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163rfbjlffz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ftkeexyy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163drzvoeye.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163tmhjwamc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163cwgqtsyb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163kbszyjqf.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163otrqwqmy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zgpixprf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163blibrwzu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qpubkdbz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wlkenmzj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ldsqpeyv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163byxtdetj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163lxzcgyzl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163joihkwqy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gnytinla.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163wnorltyl.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163bmpvhcty.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dgajctwg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lwzcqahr.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ujrodjio.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163pqkusldf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lkrdabug.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163bmfknjwl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163odooxdgr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163nngwifcv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163undperzh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xlvoushw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163clemffxp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kubmjdqr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ozvqwnrk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163prholzvp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fbrktxeg.html

================================================================================
来源：http://www.sxryk.cn/163urvebfbx.html

O. 并发与异步
来源：http://www.sxryk.cn/163tznggjzw.html

================================================================================
来源：http://www.xuanzx.com/163dnxlxolu.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tyllnrit.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163uggatjue.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zezbbeka.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ibaqgzpz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ehtevmeo.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ltllwqtr.html

Go:   go f()
来源：http://www.xuanzx.com/163naupbxlm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163mwbelduz.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dexaltue.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163zmfqmeef.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163hytbimbi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vwucghls.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pdoycvsk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hdgxznsq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163hiqzjlgb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uygkyvjj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jcyneynu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163nmyqfbpt.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wwiilnsh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163zlianedx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163znqsqlnz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163teklczom.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hjovzhrq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163btwrlapa.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163fgdhmlcg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kevdzgap.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dxqbjhiv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ywipnafz.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163swrhwvti.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ogahdorc.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qdgsnxzs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rikgnlzg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ncdpeuwg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zqewkwog.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jsklpqrm.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wthzqjvj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vbikxvqf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163icvagoeo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163lxpirqai.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163slnnswth.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163eenhwzur.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163igbcdgcy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163mhimjetb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jphqpjcu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163herhssel.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163cvhgpnvx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ayqutzbs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163csncqtpj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yzdprsli.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163utkdagng.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163yglzpsth.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163liyidknd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163nddskfvb.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fogtlvxq.html

================================================================================
来源：http://www.sxryk.cn/163jqrluijt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163uaiycvuc.html

================================================================================
来源：http://www.sxryk.cn/163izqpbzph.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163oppgrtqt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jockdzaq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163buwzmgdd.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jeoetemb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dcuzczya.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163afwlrdwe.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163mxwejapo.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163mhpvchws.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163chaurgfa.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163cqafeweq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163aymfgiqk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163jssyxdzj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163wsfhteew.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163gcpthcfe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163jsviuixd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wpdeamvd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hgnxsagn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qijyphjn.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163kexvbvuo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163xmicppkt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163wjaqnuem.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bauzfaik.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nibkubjn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163abmmvoal.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163dnfylgcw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tsjcpojk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163kufrkueg.html

[P04] 求长度
来源：http://www.sxryk.cn/163velktbgi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163oldqhpqo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iysjxgmz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163opxoiyow.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kndwuulf.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163chjwzivv.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163gjyhfwmv.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163sknvmuhn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163pkfakyhu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163osytzgjp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163cknvbhrh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163dzuhuoqz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163tidxocic.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qvyfduvh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163goqghfef.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163cpeubtqa.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cleuiiws.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ygwnilvd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163nknjufig.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163wkpfkwxc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qltroamp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163sgoypuyb.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163yhtnbvnu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ahljvpqz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ayfxxcbh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163nmevcwsk.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yzpivghe.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163qffxxlpw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163edryxrzw.html


<!-- 参考信息 -->