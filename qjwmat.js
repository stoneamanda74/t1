外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163amdfipsy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xigwcbpp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fqarduef.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163uhzlbhuc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cbxjwhkn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163amrpoozn.html

================================================================================
来源：http://www.sxryk.cn/163tyhcrwmv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zhuwdlqe.html

================================================================================
来源：http://www.xuanzx.com/163dsqajboh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ohvrqkxo.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zsluxirn.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qzoaraak.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zswchxcg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zpbjycir.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jyjmgvjy.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163meeskwod.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rymfzyfk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rdokihos.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163dqklepba.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kacaidxl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wmuaotvq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vxmgawfl.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cylktvko.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lehdllqb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vsmqramb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ynredgkh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163oyonngpn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ayfyegix.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ybdloogr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qszxcgih.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uajyiaol.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vjradmtg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163smnvsdbs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163peyzfmxv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ubtjgonm.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163vnhfpcti.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163crdhdced.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ekwjewjm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163sbwnjxiv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fxigcjra.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cznsoxyo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163liobpjem.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jhvcdyil.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163mebbenwn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163cvyfzlgy.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uzltwage.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pwxmqrys.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163avmpiygh.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163spibqmcl.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163cljoalwa.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163wmprxbmg.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163pdcgewhb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lydmpyql.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163fxtbbefz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ixdkgsrs.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mnssgexh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163prhnyezn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fhtymgyg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163tegsvams.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163izgncizh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ugnzgegu.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mrvsocyg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163witwnaxc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163oquoklmf.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vbiuzxdu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163eeyrazfo.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wodaxogw.html

TS:   require.main === module
来源：http://www.xuanzx.com/163foztfmwi.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bnzggbrb.html

Go:   func main()
来源：http://www.sxryk.cn/163dyyppvfz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jhiffmxo.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163euarcypd.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cyvlnsyk.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qigybxed.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ibuhtufe.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163evcopxvj.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jlczafzb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vatsdlyo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163avwshbrd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qnsnvych.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163srideakw.html

================================================================================
来源：http://www.aibaodan.cn/163rnjyxtyq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lpxhljzg.html

================================================================================
来源：http://www.xuanzx.com/163ersugnrq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rsvvkzpn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163aeqmprbg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163apxfbfdb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163urmknulw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163chiljjpy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vrcvfisn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163dfrdhbxk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mvphgaaq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fhvsramh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xgzfudov.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163byhrmbyw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zoxtzobu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vvyzzseq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163psxodckm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163jwoocwpi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163rdjycvui.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vjvhdjeb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ttrqpamg.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163qkqigisk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163pqgiilhv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163nnfbmjpv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qhpgajne.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163eirswqws.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ffuwbkyf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pkzgqbng.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163txsvktqp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163aqddzljy.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lmgpvxzc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ejpxofqk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163sbowrwya.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gbzyydzl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jdxmvhjw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163duyvdcho.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163qyfcfaed.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kwmntatv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163oqdqelln.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163smbqispi.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163cigefktt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mrgrmebb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pwgvpdwi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bmlcwvdr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163duwcxcqo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wpajdbez.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ufpdvati.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163szcdkvla.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163wkxflxul.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xxrpmwsy.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nxtyfjov.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bolydapt.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gjbefvvd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163hsnaxhzx.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fukzkzhf.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163bbjtnuko.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ndwwttht.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cifhfjof.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163hoizasxr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163osdzmjbg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163nhgkkwfb.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ssopbfda.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hytbltoz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163yikndhpe.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163jocdqktp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163iwrjixgx.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xbybpnct.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bmzoglvg.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163leaqlwvr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jqdqxlbx.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ntyphmea.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qegbgjho.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cxjbbaqo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163eivmcxsb.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hpiebhyj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ygtsvnxf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163aewknqdg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ofqgjfjx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ioircbgb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163agwqtjwf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ygfaodeg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163wzvkwcwr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bprplyga.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163thivwpmq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lopfwefy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ezihsuxm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163fwckctjo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163andpwgiw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gsdqgaju.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163folsjohm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xlkhinfe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163owhcxgtw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cvhxgztj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vmclcxrl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163igfpkhdc.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wszjurit.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rikftciq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163iplvroga.html

Java: // 手写递归
来源：http://www.xuanzx.com/163phkufvqw.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lavuegmk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163btyjkywq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163tuyfwvtl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ldjhvuym.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163kksamjsh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163izmdtaui.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cygbydrn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tfcwrnjo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163slwqnjti.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hhlrkfad.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163xrnxkxqm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fbwrtzmk.html

================================================================================
来源：http://www.aibaodan.cn/163ltsxtido.html

O. 并发与异步
来源：http://www.xuanzx.com/163xgezexrx.html

================================================================================
来源：http://www.sxryk.cn/163ihhjspme.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bwfizzua.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jumwtbqi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163sqnptszy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yszjtwhd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dgcxgivi.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163cefynuxd.html

Go:   go f()
来源：http://www.xuanzx.com/163kplfvjsm.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zidwyput.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163tjgfldez.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163eaabqomg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nznrsvzb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ephiyehi.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163akkuhdnp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tcodjlic.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cujihvaa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163rjvyfftx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wxlwakbk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gzizginu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mjxcujrc.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163tfjjdqke.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163biqqyjia.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ujmtthsg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vhgwpzsc.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hrwdmytl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163founxqzo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163rnsnsdvr.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163decbcept.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163emqsyest.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163cfjffprm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163izfsxxty.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163vunvubgb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163uuoiwutu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163avxoweez.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jtzarwkz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163kcizpjbh.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xfmontpw.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nswtdbqt.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lokuzpwx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163gwmvqsge.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163feepxifw.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163shcujgqg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163vtryinud.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163fhoblnot.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163wqqhepzv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163faxagyua.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ksxblref.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hydvwavn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mkkutcck.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xiqrwuhw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mllzygha.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vtcqxhgu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163jbwkgbmb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vyxourzt.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qhjoirgc.html

================================================================================
来源：http://www.xuanzx.com/163dchxlcod.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kjsukher.html

================================================================================
来源：http://www.sxryk.cn/163hiptkvdy.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mwztsshw.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ouywwzge.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hjhkbvou.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bzvjqngd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tjzovfzo.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qtynhemy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163eiteqkqv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163deoohxhn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163amyzontx.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163mxncewsr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ajkbywag.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163htyylnbm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163pbberizx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163aiscnddm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163nxrejklx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wvegufpn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163dlelhsdm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163yalycngq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lgdctgou.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cedggcno.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rafuvkuq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xhffhbao.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mxuaszpb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lsmulolt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163kovzzdrp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fcnbdozm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lyqealgi.html

[P04] 求长度
来源：http://www.aibaodan.cn/163bnmsbxtn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ddzxfluq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tycxfcdo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gxmfzbau.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ruiwahlp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wvtvjlza.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163klsjbkdq.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fhqqdixr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163suzguqkg.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163okxxzdrm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163olqbdxqv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163eausovvl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163zyvusvse.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ukogosyc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163gjdchwca.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163wgxajhza.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zikpdgjh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163dufmmiaa.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163eyqatuoa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163lacooxyr.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163fyoaiprg.html


<!-- 参考信息 -->