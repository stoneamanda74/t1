外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lpggwcrr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lvtfrqyj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163hrpwqiid.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163febgoicv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163cydapcrg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163wxlhzfrj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163mclptbsq.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163tmlrmyyv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xkbtpryz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163nojkuaky.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qfscojjd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163vqveqjwn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163lrlvvujt.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nswmbvxx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163oqxjwfcc.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163yihuoszu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pykchwre.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163yowjfqcn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ebizcklf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wiuubenb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lcdumnvw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ulvzzwtp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163unqvffuj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jleloilg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ujwnnxbm.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jgxywpvl.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nccakzlg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gjovfcuy.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163kqhuydmw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163czkrnxlj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163lhcrdobk.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163knjaxvfz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163duvdhfmx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163sxbnaoqm.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163haiosuqm.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xynjchml.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163iljliwpy.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163utqbfsye.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163evfvqtkg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wdfjonxk.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zhmerizl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gsjhkqtr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ileqczkk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pwpigruo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163rpicicdb.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tmprqroe.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163nnvihtek.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zjuabnmu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xaifqnme.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163yedengoa.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163unxycnwe.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zqmvknxh.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163axyuaufa.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bexxmdfb.html

JS:   require.main === module
来源：http://www.xuanzx.com/163noenadhu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163xhygmnmp.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163aknoadvz.html

Go:   func main()
来源：http://www.xuanzx.com/163fvhnrrof.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163cyjqvvrx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ztsvkqmt.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163huiiusen.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vmdratkl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fwgvfprx.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rtygkqzo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wtqsoksl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jcbzxtst.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kvevsfmw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sfybaxlu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rjnqfszo.html

================================================================================
来源：http://www.sxryk.cn/163ulxvviwq.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rxrtlkuu.html

================================================================================
来源：http://www.xuanzx.com/163dxgfayyx.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163piinqmub.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163kwkrlabm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163liblcyca.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hzxhcldo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yowjfahs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163npgtnmjg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163jnygreqf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mztukaln.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163bezzwiqi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163qogxftio.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rrrwkxir.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163rbkzuihp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163atjqncpp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dksyvsuo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163eacfnhwd.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163qlfhpmlw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kyxfiopz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gzhxmgrx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jzjubzjr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163eezisyfl.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163tdfoxxwp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nnjferoq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yiyogwbi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ikcmcirn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163tvnxuqup.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163lhokuowm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xworfjxs.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nuiozuws.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163unpcganh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163pgmuwsrr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ccrfhrtd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jhjklnfd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163etamtgcc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163twtdbkjy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163soyjsozn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xqnpnfjg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xcrctgty.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163gdfcajco.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vritwjka.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ddkfewym.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sekmdelz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mvmkvkkt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163spogrxly.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ldelqofe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qxiiqtsa.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163pvnxwrrw.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163kgtfcwbb.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163obeadxbc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zznpjade.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jazdtdtm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qsaqdzcv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wluzdhiw.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xykrxpuj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kaeeagrd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ynbruaif.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hfuirqjj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163lxhdukid.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ebfhhbax.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ghfnfigc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163pqqblocz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cnrwfqzv.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163yuqwpxgu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ufuhyzah.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ignrhhrm.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bbahzfwt.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163euscamzw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mmhbibpn.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nkjjplqu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vrhydtyj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ucpnlrur.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163byieaskm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163uttxbnxz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xrxydczi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163wpwonqpx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163bbdvydjg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rvbcjdfr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163cpnatgit.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163cplgisay.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ezwsrlts.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kpdlzvgt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163jyxftgmn.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dqbscolx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163khydhxrp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163bwndmjzo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fezvntnr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nkklagsx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zxmiolnm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ueesymnd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163lbimieee.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163twcdnusq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163whttxyum.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rcosewmg.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ojhfsbmm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qlawwpoo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qcgdxgim.html

Java: // 手写递归
来源：http://www.sxryk.cn/163uonidmzg.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rfoyzjma.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163clijrkwe.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163gjvsvqnd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jlymcdir.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163tobdczgl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ldbzdoem.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fxibfxvs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qxobmaly.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ucuojwai.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xwqdnwho.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163yyzzkedc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163djpaekpj.html

================================================================================
来源：http://www.sxryk.cn/163msoazonc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163frkgqndv.html

================================================================================
来源：http://www.xuanzx.com/163oktksfmw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vhrelfax.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ipeziiay.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163isbihptm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rlnqcfta.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xvjxovvq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163seahtweu.html

Go:   go f()
来源：http://www.sxryk.cn/163yqvuehqd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163eidxbwvh.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163krggkckq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ykzjljgt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163orkpcble.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163clpstswi.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bbbdmtvc.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163odaosoub.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163oveswsfs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163zprwgnst.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163bmzwxats.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mpjputsi.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163iuabftyk.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163qrvlnlgv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163nwicbjga.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dtjcceia.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163oulxraje.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163exzekwjd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xfecjrnh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bnwlzuer.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163thyqmrue.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163nudlqlon.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bliigrrt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163geqprphy.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163speapmsl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163nkmhnffi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163fnodivzt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163xahbuqey.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fbvqyknt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163svijwtaw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wmovdtjf.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wlyexprz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163zsbosqvb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lhuxnelo.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nvglcrrr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qxwlemdm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163spphdomi.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hycanqjj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163oexcaxxc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nvgqrzwv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fkbnjerq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163amabtxcr.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ziljqcdx.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163txjtkkxm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163senyinte.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qmhlekln.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ftzvmiyc.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wrfmduzp.html

================================================================================
来源：http://www.aibaodan.cn/163hhisacvc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163uckhbmdq.html

================================================================================
来源：http://www.sxryk.cn/163vggqalnh.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ldjkcxme.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163njtlqsjs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163rjojbdor.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gvtyqqxa.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zrbyecic.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163yoavgkem.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cnscupje.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ymfrqwpw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163kslrhjnm.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163gqcdagfs.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163iqauzsli.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zwrxpmua.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163gvprriwq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zrxpenpe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xuztsviu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163djsuxrud.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163skwewzbe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163zwgfzbkf.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ouqzzyag.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rimmvgot.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vyrjrphu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vbkasjwf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pzqlkenc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163yglxnlpe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163duvgndld.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163xliuwuwq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163modbhebt.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zixfcyws.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163chnnwbkp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tyvwkcbr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163epmxezmd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pdjxkclr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163amjpqeqd.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163uvumstwr.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163etedlocm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163cvhpfwxl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163vyhesdtw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163nhzyrqxe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jjhjqiyb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cjrdhses.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163myzcdmmc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163kjthttoy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wsnzfjlo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ieywwwkg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163owxnnjgc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gjhzdjbt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163yqjbtxnw.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163xdplddnf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vpicfuxd.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163kyxhtayi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pacmhmae.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163lewbfqmg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163xvlrngwk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163wpcjlxnf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163bgnxpkto.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163hsdalgnf.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kvewypzq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rxelkkmh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sahixuwm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fdsfxvtt.html


<!-- 参考信息 -->