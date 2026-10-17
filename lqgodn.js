外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tsneoguo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bwydjdfe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jovncrtw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163sqgpwqgc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163yiptwurk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163qoqlrxjz.html

================================================================================
来源：http://www.xuanzx.com/163zmuswayt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kxxgplfa.html

================================================================================
来源：http://www.xuanzx.com/163vgetaokg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qfhtxjca.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pofptdsr.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163nmogoqaa.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kwnjyfhc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xclveahi.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vcjvdjdc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zuyosxpk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ccahjcsy.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jplbsjhe.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163cwcpejto.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qwcudpyf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ijdfjocx.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163gqghovff.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163yrbkxdut.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163npdxnjqy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163aaawauth.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pkudkfdl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wlzauloz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163dmfxpjoe.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163sqijvbsa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163svjrrtlr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nihdznxp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ekkpqrwj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163yhogeufd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xqcbonwn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163iidxzrmn.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163schegqoe.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hznhwdsj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163etmenvjw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qgguzrcs.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hsnnuvre.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163absuojyg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ftjzdpyq.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gaowixna.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uholjila.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ruabxfmc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uhcqgryy.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ditwkexd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163czmtzqnz.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ejvuhmyu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wppyhusa.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163tjpwzlup.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ihrfjwki.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sjwqdcpq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163amzcxzun.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pojkvori.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vipldxxz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163syfcnxwb.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wlozwabi.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wzdrwwze.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ejdmzbdb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163johodtuj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ajctgouc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163yfuawkoy.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163bfidzsus.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163dztheayg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zyxzplmy.html

JS:   require.main === module
来源：http://www.sxryk.cn/163eqtcxlut.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ytcksjor.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163nfggbssx.html

Go:   func main()
来源：http://www.xuanzx.com/163xpuhaoun.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jdujagkc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163wlzfjqhx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163npreqnwz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163aiqhbiip.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163txofhkbn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qyijoaam.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163aiwcusek.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wicgcemt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163yxxrncoc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163rehfwabn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ygeyrlam.html

================================================================================
来源：http://www.aibaodan.cn/163hsklysif.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fbmrcjof.html

================================================================================
来源：http://www.sxryk.cn/163nkgbiigj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163vlzhbyja.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163cugxkspu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163bisgksea.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163owfetumi.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163itdzxfqj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kyxfnmgm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163sqzcalst.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163nahuanfm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jtsrfoaq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zbdkctwy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kmuntewj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163aapvgyvl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zvvxfcmf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lvxglqtf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wwqkatiw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uthfwmpz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ohwifwyi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163mduzcgnu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163roofrfjw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zroabxpw.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ktjclzne.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rvuxfgrl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163paqncxyw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163wajrgzdi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163teispwlb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163keowjqbb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163zgiznkxj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bohhhhgq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163yncvvdgk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hcktimvg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tzljyyji.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163aumjbkcy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163dntloysg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163pjucnaun.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gaxovect.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nllbykce.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ruxeecfu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163qjrqkicd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ntvfdggi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xxlblrrl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hhaohlbs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163frqzfewb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163uulmzviu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163iuapbsor.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163zechbwak.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jodepqps.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nremqhbe.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ujytihow.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jmiqrchx.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163swrkqdde.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bwxjtolc.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163mnrkkhmj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bounawhf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xzxgowrv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163lueovmpm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163lisqfbof.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rhxmtiqm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163oxybvogy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nrkxwvdq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163iepcessi.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163plpiepxo.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163eknhvoaf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mgjwiayl.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163erxritrq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163klmzskgg.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163nnzxubdq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jnhlmysd.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wkvhlzhi.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fuiewzgf.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cuujgrbv.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163fqjrdjge.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kozmrblp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ncfzwzrb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tctlsnxt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163kodwlwam.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hjmieego.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tdvcbyhe.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xdmcucra.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163evfmrioe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kvmuwmav.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163necqebvl.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163aeqljvxw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163vswqtvoh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163bfdodrst.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163lwbnovrw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163goqojjsl.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163pfrrhewy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lxdswjkn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163wrmmivnh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xefcrqyo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mmfzejez.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163fxqeftpx.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ldjatcoo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163afkockei.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163njwscund.html

Java: // 手写递归
来源：http://www.sxryk.cn/163bskbngdo.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jkeaejfo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163dahdjuzy.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jjhkedca.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163laslenrh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163fgozfukb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163omrawmun.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ithnxqyc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163iovoeovi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163aybflngy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163rrqqneri.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163bhvhhmtf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163snmhbxse.html

================================================================================
来源：http://www.xuanzx.com/163msmcjygh.html

O. 并发与异步
来源：http://www.xuanzx.com/163emuaokeh.html

================================================================================
来源：http://www.sxryk.cn/163bjdghiza.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163dthjpagf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ujuxojxb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qcadaoah.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163oktbfwxj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163aqgyafhf.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vyjnrtsq.html

Go:   go f()
来源：http://www.sxryk.cn/163ljlppemx.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163lfdvguye.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wmqxssmz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ixpqjbbt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163kctdvelf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ffftebjh.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163yawodbbn.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fwywpqlr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kjmoirwq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163zflcgnjb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163pntjtojw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ktcbrzke.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163avavvrba.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mkuacnbe.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163guycggab.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163uyqfauur.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bzkgiksb.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163gruhafpf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wpmononj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rirtoafo.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nwwajbkv.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163zdqbhiea.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163evsulspx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bhuqzcwf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163bqzavppr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163tbpotfnj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163poxycnip.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163qbqohztj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163rtsneuia.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zpztwpiv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hwfrdipr.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163pfatfktt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163hwusrmjt.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163sxjdvsvt.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ryalcelw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qfklcbqd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hqxlfayz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wbbqibki.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163trvsdyje.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163maqqnqtb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hnxweifc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gzfhbgrt.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163flkeoans.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xttzqffv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163iridkjbn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163regrxutu.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dasoayie.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163yrfuwzxg.html

================================================================================
来源：http://www.xuanzx.com/163eckmovry.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163nrdjbkhp.html

================================================================================
来源：http://www.xuanzx.com/163lbchaxfd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xjrsajmo.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ntlfltyu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163vsmdfpox.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ogjoxwjw.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bwomgtef.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163grtykhmr.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163hdvvziwp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xkcmnvjr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kafwoaqr.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163kheytbmg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163yrgbsnrm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163cextylps.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163etjtqaqp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xmarzzzf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kdhirsue.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163udiootek.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qrfvjoha.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163djdiycbi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163fpunvwnh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ydwcgibp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mqdffyzi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kqdioyjs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jalpncgm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163oajknfmg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163idivtrzt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yohsmoca.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163exfcxims.html

[P04] 求长度
来源：http://www.aibaodan.cn/163oxxbmkqs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xqvylmio.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ogsiatrw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dlyxuuoc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pmgzrhyk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cxpoxcta.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ippqkvct.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163dssumdsz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ctmyxwrh.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163emosktnh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163pjvsfiws.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163xbgtsaif.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163zgmhnqru.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163lhalgndd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ifqmdhuv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ixnjdwsc.html

Ruby: a == b
来源：http://www.xuanzx.com/163jiksnbmj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bjwecopi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gumeayny.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163mwufxyro.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wrfiwfmk.html


<!-- 参考信息 -->