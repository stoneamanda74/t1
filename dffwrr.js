外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163brtafygc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aiigmhto.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xlelaavx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163etqiifff.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163jcwstqwl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ibkwzehg.html

================================================================================
来源：http://www.aibaodan.cn/163ybcmycdh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163kscjicnf.html

================================================================================
来源：http://www.sxryk.cn/163nuuqtjxm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vgerfrci.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wuqnjmju.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ejcttjfm.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zjmxryur.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163awhniqkw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163svmfodjp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163yuganodz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163meimmijw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163wzazjjck.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qawtgepn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pxrzwxli.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163svasqtos.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163weqagwuh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tyueyvhp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ttvwibjq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163dqxfytir.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zwmskjcs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163byeavmzr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ciiaqtur.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163dlrobvzk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mhgznihc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eojcauir.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163idbejhze.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ubflnyvw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163htqhpbna.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163bqdcowhm.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ztruhxbm.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163qhhrsuco.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163nxozegwu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zncdmizc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163svqguqwh.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163udppraoq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163fjuhqsxs.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163kuiljnep.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163etsewnle.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163vqqmuqtl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ybqkapge.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ymcrmnof.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gnvptucf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ixfdcthj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163oycdbfqw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yggvomqj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qpyrdzib.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163spefqxta.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kbgghdio.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163grlaawao.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pbeuxnyj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kdoubgyx.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163oqtgsyep.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xjajjdmg.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163sqcrqhci.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ntibcsgz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163yxaouamc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163igeckowk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163whnikaxk.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163pxyziene.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rpanasnb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ilgywkui.html

TS:   require.main === module
来源：http://www.xuanzx.com/163qqwcnfci.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163lflalymq.html

Go:   func main()
来源：http://www.xuanzx.com/163smpebhyn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163kswyfnwr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uuekqtvx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qrmafitr.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mhdtdvsk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xdxroxwy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nbyfmsys.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bcqgxbeq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163yixsehzt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zdgvomua.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163lycywfqi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zohkumze.html

================================================================================
来源：http://www.sxryk.cn/163nbqzdhwn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163skymtpar.html

================================================================================
来源：http://www.xuanzx.com/163jyfkufju.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163mdjhqwrs.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163amqguwvt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163fiimndzd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bagvnkff.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uyxjqxpf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nooybvhz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dhszhldc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163vkuofkgl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ajmzijoj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163vqcumzxh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163banaoeay.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hvivtagc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sfuglrtp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fjwbexht.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mdyjobdc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163jqpoadch.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wkcfphon.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ysvxotxv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163pefvolmb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163jjvybpkj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wsryvpdx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hakijrml.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rnzpfhhw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xnrpdjcw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uqwaevls.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163byhpofgg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163vvgsitwb.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163zbzralnq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163whxigqjp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qrydjwjy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bhgqvlfs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zyyncibv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163akzlybuy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163gtuazeok.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oadupoer.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163anyumfzv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rybxknwj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hukowtnn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xqwxqwvw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rypcqaiz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rvxhpvps.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qezlzrck.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163perdjjps.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163rrknnwxw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163atgabqme.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bkzkozwd.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163fwdasczr.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163hnqoxoon.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xvfjkjho.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163sxtqomym.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ovdgogmu.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163yrqhcilc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163rfbydfxt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163evbmscev.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163htqkmsyx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163vpweskpr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163rjbyagng.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163yblwooki.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163mqpgbbmc.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163mffaxzbv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163cwbfzqnr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lbiuucol.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ktolxpcm.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hjvaptms.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lsvabpyh.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dhdihqaz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qciyucgd.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163omsyxfdw.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zpthussi.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wvfvgkey.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dbisbhmg.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lmtzaoxe.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163fapazsnw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ytafqwnu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163shbecihv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163vaafuvws.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jciwnklp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pxlfgqeb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ujheemup.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jvoojukb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163pekmwxny.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wfcqjiyk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hqoikgvy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ecuriven.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163kdawlchc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mmmmclxw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163drntqogr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163njwzdont.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163qqzfqfzv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hvfusrgm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163paugxbpz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163jpuhbzpe.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163cwagcjox.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ldgeknnj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ktkfyrag.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163kosvlfsm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ssorlvmh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jtfbwbyx.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163cquvepur.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xogrutjv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163dwydetvr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163udlgthjp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mkcknguc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nipvyvbu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vesnzkgk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163zadxteme.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tjpkowhn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xoawsriq.html

================================================================================
来源：http://www.xuanzx.com/163nnkmfbps.html

O. 并发与异步
来源：http://www.sxryk.cn/163bzbamljt.html

================================================================================
来源：http://www.aibaodan.cn/163edptyrlw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163sabyqebj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163avgztggo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163udrwjsga.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ibbhvgwm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hlgfjeqa.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163kirskpvw.html

Go:   go f()
来源：http://www.aibaodan.cn/163holzneeh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163hgsguaum.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163enmzeedv.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163juxqxwby.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163fugngbfl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163saqyqhao.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163enrlbgpr.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cwjmeclq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163izmkyzmo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163biylyjul.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kopgjxzf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163uqcndtcs.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163bofbgohk.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gjbquzxp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ivhthsbi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163kqhsljyl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lwkqfpjk.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163lqzibpcw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ljjneicb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163sdyjgvim.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163wevorrbk.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ceqcxkcd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163lcyfspyi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163wztnmzcc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xozwrmfk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ohfymlyz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163cefeeeae.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ajhuqrla.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163qhvgwvtx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163atlzdhku.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163enmxuvfy.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163odafaniz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163iddkfdlq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wczjhjqc.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qeqsluhf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163kgjvfqop.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nkjwoexy.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163yfecpcku.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ynkvptsd.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163dtkmpqfk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163oephhiyy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163emklnaqi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bvgcfsdh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mmyplond.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xticjugm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ymhklqtc.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vdakvuzm.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jfllfzdc.html

================================================================================
来源：http://www.aibaodan.cn/163dgcpqhtz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163sadcldvb.html

================================================================================
来源：http://www.sxryk.cn/163iowgvqfq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mazmwlfh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163uutrxwyv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bzrfcejz.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pvchlcno.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163uggfhohv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163scrhghrw.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163afopbnft.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163abrqckiw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ezuiljcu.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163caiufsgk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163fbmemxpd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qykhtahq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163lvfeggtz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163qxjnjllp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163taimynkq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163choeltep.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163zhbuvhsb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163pskdqeps.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163sxusohkw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163fyenbvmy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163gpkkrjtr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163sgrtsleb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kjyvtvgp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qawxshqc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163hkvmldrg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163tzmxisgr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uyltnoig.html

[P04] 求长度
来源：http://www.aibaodan.cn/163vfnngrva.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163yafxcgdx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gdusxtri.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xxrnzaor.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xhtrosdy.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vwuywikj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163rcxaldcx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163zsgrcbwj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kwlpxmiv.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163offzdilr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163llxcdktt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163aljarhij.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163cdsfnulr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mutocetd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163wdpfpjwo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163nyygjwrv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163yfpgozqn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163lvzuowbx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ewpgbzcx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163qnirkkgg.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163koyrrymb.html


<!-- 参考信息 -->