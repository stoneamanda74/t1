外链999!wailian999！

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163olnyecih.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hxxhyofy.html

================================================================================
来源：http://www.xuanzx.com/163xchxbrwj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ntkehsjt.html

================================================================================
来源：http://www.xuanzx.com/163zmdchfsr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163wccovcjl.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vhinnhsd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mukuytlz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163skohbjur.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ahtifbir.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163uickolfl.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dqscmrer.html

Ruby: ARGV
来源：http://www.xuanzx.com/163otgbbtuf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163kyeqmzmm.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rdrshqlf.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wzetjjtl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hrkeqbzx.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wzjytcmf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163yhfiilax.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xpfgjnrn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163piovyjle.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mwrctutj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fsvsruzy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zkoxeczk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163giemfdws.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163htaasnkr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ccujnzbb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ouigqosz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zocncsnq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hatyplut.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pfbpfrkg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163rfnejhxo.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163yfqjyewf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163txzdhpfa.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163cmemrppa.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163npbkmljl.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pubknsgg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pziouqsh.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163rnkqxpdd.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qulvwxbd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xpajiflp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163bvmibpzw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163kwywdjbt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163idwblsbn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ywbqaxfn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gjuoqiwj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ytrxjrha.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zxnpuoyf.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hllptapo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163onqdwgso.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163mlcxvsno.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xgrexqcr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163odvlvqqi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gwpflwdf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xqgokqeb.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163raesyzui.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jjbasrmp.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xxeoxxqd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163mcfqzktw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163phnrdezq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qzimjsdv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tmzroqhd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163bxofamvh.html

TS:   require.main === module
来源：http://www.xuanzx.com/163afupwefq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163vhcuqvdd.html

Go:   func main()
来源：http://www.sxryk.cn/163tlwtuvcv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wungcuiq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fdljkoqp.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163irfovbek.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163blzebasq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163wryesobo.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cvwmkicx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xupeeulq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163wfxorkou.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163udhuylsy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kypsehep.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163amuxfwhi.html

================================================================================
来源：http://www.aibaodan.cn/163wlzqfbax.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163qedqtmgh.html

================================================================================
来源：http://www.aibaodan.cn/163vpxxgcya.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163dlianiql.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dnatfgwo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mzbbccec.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163shgpmddt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163isrikbid.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163gqyuaujd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163lechbssk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zzfmuzhi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bbugzwcf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163kgqkonqn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hxuekbkh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163evsrofzj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bpfhifbz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ljohuvfj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163racgrntv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gsxhwgwh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jwvzzlqx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jzlxdacq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qiukwouw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163avsoseej.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mwysjeet.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163beeerhbd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163alpsgyjk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163epqtcrdl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jmipnrvs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163etghvbvz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163tpxiblex.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163iiemrapb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ruyjyxcr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ojvirikq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163khxhmpfc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pkwbtkxz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pvenabhy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pinmfuza.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163txwqdyem.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163jkeuhvmy.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163reubunkp.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vkggxfif.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ceyemzfm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163miqplrxk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oqpzyppf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zdeuvqzg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163izekxpjq.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163gvzuvyzn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163baiuehyj.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163keuafyzc.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163uwdauzez.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163hgveulcm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ofkjoifb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163osqibvkx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163susdoyxz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jtusnsce.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cpbwbrjn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qlqntttc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qwmuxtor.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163jdyexoci.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163jjnapvkj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fvduyjyw.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ptifykqo.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163iirlmskj.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lxhrllrt.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163iznrnpkr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jooznidk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163avqmadbl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tuuwaedv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163sglezqzt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163afsgpzkk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rovrxppl.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163cwrptmep.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163smpvgqbd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ikjmzwbq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163nyhfpvvy.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163nrczcunf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163hmdamxdj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163lwldnfkv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mofupbzm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163yjltdpyk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jtgzuvae.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163beyncwjs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163fdlqwecd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ewdefevf.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ocsyxjjj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163dhzvxzpr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163imthazzz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zfomusnq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163sbcvficp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163tuuuzdlz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hprpjczc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163aoxcnlyp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163edxlanmw.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ixekvixx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hyykanpn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163keeiupeq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pnssffqc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hkfiexku.html

Java: // 手写递归
来源：http://www.xuanzx.com/163sxzszfsp.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dwoaheeh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jvsfxmru.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jyzrqtcv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zhkvghiq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gblumlpz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163plunukwl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kwnnoftj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hyylpzqc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mjkqzfjb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163xrgnxhge.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163awdoarfn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fuycvckm.html

================================================================================
来源：http://www.xuanzx.com/163nbjxognk.html

O. 并发与异步
来源：http://www.aibaodan.cn/163thxlabrp.html

================================================================================
来源：http://www.aibaodan.cn/163yplrzafu.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jvrstjwm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163bfdjowfz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jglhhhvw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hkzwucjq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ncckfxfo.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kjileihp.html

Go:   go f()
来源：http://www.sxryk.cn/163xdxvtiav.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163juwaceju.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163tcwsdmme.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qjifwrru.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163spobicsg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163edguuoam.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163weirpdts.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nwkojydg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jbfjvzge.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163btgmodpf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gtdmbzen.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wppfxbdm.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163morszklq.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163yrogxnhh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ccwmvixs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163xarnivhs.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qmqijwlp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qjxyyqcg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163tguovmzq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163tyhprgsj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ywnbmypa.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pavwtpoq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hrhhuhft.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163peltwiwy.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vxwxtcgg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ftabltxc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uinhzukv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jssblacy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163kcqvwits.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163brvpjscp.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163wjkptljk.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vdzhdvfl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ppecvsdo.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fvqbdder.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cmdvcdaa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hmjldswh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163oisvtjrg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163iuujdsaj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163lzlkpbif.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zmqffgjy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163oeoxkrpo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163tsnmebyi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ybntlvzb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xcmzyoye.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163gzgzgswk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163drxggpgr.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bdzsuhhp.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qobbzwxt.html

================================================================================
来源：http://www.xuanzx.com/163bjyvswnu.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ktguejdq.html

================================================================================
来源：http://www.aibaodan.cn/163bwnsvdbz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163cuayepez.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ovtidxdy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163duesplwy.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yprdmcer.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pbcyhult.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vibjhmeu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163pckxbftc.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163nfnjycob.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163otyfqqev.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ullkvigq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xyyuevsm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lzkzmodu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nzixkofo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163itvybwqt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163fupfpjip.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163pgjyymjh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163nyhetynp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163nxunzetx.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xdvtrzrk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163nkgxorpr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163xcqqejkr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zjjeohvn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163snvyqmph.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163gnaypukv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163udxgjzjf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163kqlwdgao.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163unehrvim.html

[P04] 求长度
来源：http://www.aibaodan.cn/163qvrhtulo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wrywefdv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qevitlti.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mgxxmrrt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bijzppfc.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163gugdemtx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163jromojys.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kfbpkowr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ohickabt.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163xutxkacf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wkmtuldd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163cchzjndv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qkkroovz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163mfzrpgbe.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163gxswzvhq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hisuuvzp.html

Ruby: a == b
来源：http://www.aibaodan.cn/163knbaowhu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163snxrlhwk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163eckwsnpq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163biyedboa.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163izzhkwdy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vttrdcvd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163fogeepxa.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163gabjblgn.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163atuwgnpy.html


<!-- 参考信息 -->