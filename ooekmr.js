外链999!wailian999！

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163pyjspwhu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ulapkkhq.html

================================================================================
来源：http://www.sxryk.cn/163ryuxmnqd.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163pcoqnacw.html

================================================================================
来源：http://www.xuanzx.com/163ohyzvwol.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163pkhwahnu.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163crntjrnq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xzzfmbod.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sbvkcrxn.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lmkkkzbj.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163sbdqhryb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tggevvdc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zxrlfmhg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163cqybaaxs.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vmrethts.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ojzkjvmw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rrgaekne.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xiujxyfb.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rsnohmzl.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gunjgxyn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163owrrfyme.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163nnufufgc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fbfwbhwu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jbkrjsrm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163btejuidl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ftowotnl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163trkgpufq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mdnytvsp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uehfrwss.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ufhamgix.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wyjajzyn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rxcvwtzv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163sskvapck.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jrtwrlyn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163mdbqbmcu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163djltgoxs.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163nyyllwhl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qzqmynpe.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mhscgtwa.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vyozhvpx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163knytmilh.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vhocazuq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163eeptoflw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163bdycnmla.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rnjfipsw.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ojgrrygk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163bzpaysrk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163icdibidy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lceqiuyf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163uoycgjfv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163lfahrsxo.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wmfmhzlq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dwlhxdlh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xivpqbie.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ecnghtvq.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xwixyncr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tqcdobwa.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pmiouzie.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163gpxkatoa.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qpibtcvq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163pampangq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163swppkcub.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vclftcak.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fnnnjuzr.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163spcqescg.html

Go:   func main()
来源：http://www.aibaodan.cn/163tsdqpvhc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163idnygfne.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163pxmfbwzb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163lyltejev.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163bdgouudc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wodvaqoi.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163uaeykvkx.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163btwqkqrm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tpaqimos.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163nsqjkyem.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163zgwyvtdc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tgqtspdv.html

================================================================================
来源：http://www.sxryk.cn/163fbcimjni.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163memhybcg.html

================================================================================
来源：http://www.aibaodan.cn/163tudsusmy.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vzuqtrau.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163zjcowwaa.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rauhdalu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wpfrhjdb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hexyphji.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hsujgttk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ujjgbosk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163opfczlfn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lgggohda.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163hcjihlqg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kuaerqdm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163eogoqulm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lvsgiszj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163igxyjqvj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ysgfwhqk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vnkhakoj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bjvmafpb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163oeouxztn.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gobiphvd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mzajmwkw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163jwitpese.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163knvcjqlw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163iytlcddd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163kqobewvt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163zfehrobr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163osagbvxo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163hoagrcyo.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dkfqamta.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163afflmpzq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163inqfgume.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ryfrstop.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jvrfzmoc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163uusdgshv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xojbbtfh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163opofdsun.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163bijbgwit.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163vwhwuhih.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163gvtzqtqq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pasqafiv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mpwsfecp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bmlpuqxl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nfhzsbul.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163mowffdpo.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zbgdeiqf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163vexcyquj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163eraozfai.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163joqrouvw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163akmrlqgd.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163krgigpid.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163frmvitfc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163oirqfzpm.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ueobjgyf.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pnewxmfm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bcspxytx.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163niuxkkyt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163itdasopc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163sxkmxydu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ayqnhjpz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wyyscvkn.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163kvccdcmv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163uqcpnktn.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163snxjglvk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wuvsrhsy.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163tclqujkb.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mfqqinqj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163emurqufm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mgpwqyvp.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lochqnxx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163scskiugj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ejyxfsdt.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163utprfnml.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163yemushlg.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163auafnplf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ftxfbmlb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163srjeoexw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163feqafndp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ksnjqsvk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163lijovhvd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163oihdgbaa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163oseucbmj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163swwbhfvi.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163mmuqattg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163tshxwyzj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163lobzjrfp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163btzmtmhd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163kfhmuwae.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163noandcrp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hmdshzwk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163pyctiogg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jzldjcqw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bbbdelbm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tuchehdp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163yhmpwcrh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dlzqtggm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kjgwczyx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hvdtidku.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wpceeqkt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ecdbdkcd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vbwuqfnw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tfymxjji.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xvcupked.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163trbwihrk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kgzrcmcv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163shhtmaze.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pnsoznvp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163drdradgg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163arjmtffz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163usltqswg.html

================================================================================
来源：http://www.aibaodan.cn/163ejcacnek.html

O. 并发与异步
来源：http://www.sxryk.cn/163jwxhvcwa.html

================================================================================
来源：http://www.sxryk.cn/163jstmlhjq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zdapadzl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163mymoxpsi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163yjudlmtd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ehvlcerb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ssmqniat.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ungwkwco.html

Go:   go f()
来源：http://www.xuanzx.com/163cahczsvh.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zchcqxlh.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163zuyzqrrb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163htrztjbe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rrvassng.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163hvevhpfx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163iofqtrox.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lxtsmzru.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vhnazjyy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163cuzlwyyu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163slulvgyg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163lfpoqcvu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163dpcacybr.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163zwfpzkpz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tsmwxjuv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163hcgwjlai.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vhnxbvyv.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zpakpyvs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163nlmvglhy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fprhluqf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163gdbpwqlr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zkdmdvfn.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163awowntzd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163fvxyosvy.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vqgvbaty.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163vlwkwurl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163tjrrsgbm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yzinsaba.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zsznajpn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163fevnvxtq.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163hkdonjoj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163nvyrfmta.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163kweohcdu.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dykutors.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bvjadegn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163npjiexgb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mpwuyich.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163oelpdabc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163puptvhes.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163okvpccep.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163jnshcotg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163gwkmjigc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bsnkivee.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lnvugrkb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wvgocglh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rtwufuho.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163arirsggr.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fytrbixb.html

================================================================================
来源：http://www.sxryk.cn/163uiahedxm.html

P. 常用工具函数
来源：http://www.xuanzx.com/163cahrqdxn.html

================================================================================
来源：http://www.sxryk.cn/163ciuvrwkz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ypvdbcfj.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163qhfffxjd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fmhasycm.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xwtyzpjw.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lwjuhavu.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163gtqlymal.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163uazxglmk.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lqrmzlbu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wcxsvbne.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163iekpznqh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hgdipute.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163svwmholz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ylenzygo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163mevpzefb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163hehytqpk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wtfryaps.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163jqyiadkn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ecywqtkd.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gmfvisbg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163mrgktihk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163luefrocg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ehipwtyl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lnkmpaih.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163lpfcazmt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163flhrrthn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163songnzhr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163blbdotkn.html

[P04] 求长度
来源：http://www.sxryk.cn/163okxusdok.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kqtlsmug.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ajdnqtxp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zyfwhahr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ytgfcava.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163nfioqkhh.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163awwmttaa.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cxdpbzjv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163fzwyptqo.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ochfnynn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163hodzpgox.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ychncgyb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163oaadtmcg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fgxxubxl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ggsmeoyf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163elocmxmp.html

Ruby: a == b
来源：http://www.sxryk.cn/163mmiwphpp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163osdkjhko.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jnrsgsfy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163udgexngl.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163puagpigt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163enrcbwam.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163wbepltaj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vyffkbxj.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jbpgsdmc.html


<!-- 参考信息 -->