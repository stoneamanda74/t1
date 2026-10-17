外链999!wailian999！

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163epgpuxof.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163csqlyudf.html

================================================================================
来源：http://www.aibaodan.cn/163tuowkhih.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163shtaghmt.html

================================================================================
来源：http://www.sxryk.cn/163natbtytq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163sdrotjxe.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cijmovgo.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zzdjtagf.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163enzevrji.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xhugxexh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163umuvomsw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163yxfachjp.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ewenzyeq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vlxooxdw.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gdbzeanh.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mkhqmqbi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wuujjpma.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163nnzhcder.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pcexcbdm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mhkaalwa.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bixjveak.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tdzpcomb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163iwthbhkl.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ztaocxcf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163nabuwpyp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163sbkxvgje.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vyodjqll.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163oqheiaun.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qqknqtzk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163dlmpubbd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163twtdlzbh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163chxxkuag.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163evetdeqc.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163awcthjth.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vmjubwry.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163qhbyqvyi.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ngvllghg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mtpbxkbk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163aqtturfg.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hmcrnbna.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163izaqcdgr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rmziibzv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ernrgiug.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ezbswysy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iqgpkasu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xrnomgph.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163zkkqgaan.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163rrsblgol.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qpcrjglz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163nhpyokvn.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163klusnqwx.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qaxigdpw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163gpwzctuy.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163cyyzlztp.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cnrlwudd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wjbhfyyc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dyuegyds.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163jzdwggbc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163auubtywp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163sowaoivy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lvhmtlwh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163pwadkeco.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hnqvnfns.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cjeuooqs.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ueaktmjy.html

Go:   func main()
来源：http://www.xuanzx.com/163lwatjriz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163pubbqeed.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163imzfrxgs.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163nnaaksug.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jrrpgmio.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qzmqedpj.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dgkzetpy.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tltosjdp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163bhghlkog.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163jqkwfkbt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163xljhhgdp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mvfricns.html

================================================================================
来源：http://www.xuanzx.com/163xdujifwi.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163avzalypi.html

================================================================================
来源：http://www.aibaodan.cn/163xybfrino.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rjblvwsa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dldpgvbk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ytmcgrzv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tbjtxgzi.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163llxfuqlo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hhkflrvp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163iudtlbcb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xyqmjvwu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wcatcvlm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zqrbryxy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vnvhpzym.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ttnvbrag.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cswkkxzs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fwunamjf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163iyxsgcvm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163zgpbgndv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zmhyrpeg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xbiamutm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vzgrxzka.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bhebyhei.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hhdbblok.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rcwwkztr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163cyaxvxhb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163woxttfhm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xxdjqvie.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mcmkbmpz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163yrwbpbzx.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vyelsvpf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dwfgdzpm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163setbsbhn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xcuzmwfw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163udtgmewc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163beenkocs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163lgyqxonm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qbrsopvn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wzwlrtwq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163rlclykoq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hqupiapq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163eytetsqz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wqtrltvx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pakpsebu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zxkblddg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vilcoovg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jdwilzta.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bjjmqkwh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hthembuw.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kzcukfqk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163qxqxfpow.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163yishdpiv.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cirojuau.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163bpbmggca.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163nyarmfku.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163yxljjddo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xexxncdj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vwujfsjc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dlmqghzr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163awhrwwqw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tjduwojd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163edeuogyf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fnmkwmou.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tlqlpzuh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dswyvxnd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163gcsvfvfh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jxdncltn.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fxyabshx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163aujvnowh.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zcymybjs.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eafxrkeo.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zapriafj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cksiiszp.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ixdtziio.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163kjjknsmf.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163arkborpk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kznddfdc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dludnfgv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163rfaowkuq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xuhchomr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163brsbotiw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ksjdtlvl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dkrintpg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qkcbmfwx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163luzhvrql.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jlkyjwyg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jkjwcwkf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tfdaixwx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163evqdwhcm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163eesnzjlp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nzyophxj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163qbyesfwe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xlkrspxb.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163feazecdj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nlxkynsv.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163fgscawgl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163riwcqhxg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ybvtjpiq.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ialilcaa.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163rryyjbvj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ofkkrrpi.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zfzcylfi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163tstrdwcs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163airdaona.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kgpyekbp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rmakdsuw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tprcjalp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163owcuotjg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163llhewsnw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ofrmdhhm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163irpwgzik.html

================================================================================
来源：http://www.aibaodan.cn/163urxwjfzg.html

O. 并发与异步
来源：http://www.sxryk.cn/163zcplkgjj.html

================================================================================
来源：http://www.aibaodan.cn/163mnmmvmjp.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163pafwyxgo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163cyhafmrk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163nntuxlzl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ndtncmdk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163etwzjjxm.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163aryfklrq.html

Go:   go f()
来源：http://www.xuanzx.com/163rsqctawe.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163deogvvys.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163zxhwsvxx.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163oxvdnapj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163pivovltl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163jspnhjdf.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wxbqocqq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dteviqpw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qfcpsrid.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163mouzfhfk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163kbmwlxxs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163usqcayma.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163xgrtljcu.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163evmgulxj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nucmwygz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163sagxbbcm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163goabjcii.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163gqcfczgz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lxhjxnwf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163lrnvfwrm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163tuflmspw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163sktpfevn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hqalkisq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163blxgqsul.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tfyejkmt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wpqdzfgn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qirrjpcv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163srtadglg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163wxktobfu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163xshmsept.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163whrlrtkq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163cwxzlysx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163tzbsepys.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kjgcivsr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dnowyqce.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163sjjodfvu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tbcvhocf.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ponoseaq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163skrbihqq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ddabubjp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163zmmixjwe.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163teeicvdx.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163owcryapm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lbepcixm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ofsdisdx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163iigzjrvr.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163zosjqosd.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163mywedvzr.html

================================================================================
来源：http://www.aibaodan.cn/163fjcquzol.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163psacmavs.html

================================================================================
来源：http://www.sxryk.cn/163qcnhmwxi.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163muzgmbns.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163sjmnkbmj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fujckkxe.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ubahbcsj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fhehtkyy.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163jnblmeiv.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ushdsfqu.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163tofxmdwi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163rlrxstmu.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163pvrnggqi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163igyocpbw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zajgvieo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163dtyyraqo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zoqhhjiz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163dqkdzpcw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163xomlnkrj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pyqjsxut.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gkokrvgw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163efpvxyrn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163thnyghmy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rzrsqcrv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fdvwmhbz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qhejznfk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163fxisccem.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ouexjixs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ucldwiia.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vugnnkvm.html

[P04] 求长度
来源：http://www.sxryk.cn/163xelymgxv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163bxzdcxhc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kxfmowud.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ebukrmrz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163sdyipyah.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163txlfthoi.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hyidmaeg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163kiowqhsh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163dfflyuaf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bneuvskr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163okwbpgrt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163khaahhcq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ligzgttc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qhjctszb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163jbzswsia.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vofobtoq.html

Ruby: a == b
来源：http://www.xuanzx.com/163ufwuomtz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163rdqvocsl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jmmrjzac.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tiubkyrt.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163jcdjahwy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163sxsqgcyz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rkmprnza.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163apklheqp.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163tmdkhxez.html


<!-- 参考信息 -->