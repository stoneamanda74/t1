外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nxyggkiu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163sykizvkb.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jnuuwnhd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163fogcedhj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163eokqhzvt.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163qezyksel.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163eukcgmgx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163fygrbang.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mrkbiioo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yescziur.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ypccacos.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163motxflku.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ngevjqec.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lmnpbtrg.html

================================================================================
来源：http://www.sxryk.cn/163lyrzjjkp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163tpohxfjs.html

================================================================================
来源：http://www.xuanzx.com/163ijkphhqa.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163gydmienz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163nletwdzg.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xtowkpve.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163scnyvpos.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zciglfdh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ajxrkdtp.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163fepzxaxj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163toecvlfw.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rolecygz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163jlqrzlqf.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163yiyhojol.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ruklskkq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163tmgkyeeu.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bmlwpeud.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mrfxttvg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163rskfifej.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zvkzyskq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163sklncoxy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nyhaszct.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163arcxzygj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163zdbexwox.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lztsnsnb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qxqqooyr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ycofngrh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163tzvbnbso.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ntjvkqxc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163yvtmcgjv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163oqqioney.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163xxrwgydx.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163tiqwnnip.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nulqfrfs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163weuqopbw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jdnobkeh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163gvxckqdo.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163mdhgypyl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sebptaim.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163fgddfclt.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163sqpzfkzh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ubkgxofc.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zahimzcs.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nkijwtwz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163lzojjast.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163bgdapfkh.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163mfjcnajw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ohtytfsv.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hehstyfa.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163htqgzxnl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163utpezwlk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ynyarnpn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163kcrrnhvp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163tyrvbxpj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cheggfin.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xmwxhejk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jprrwyzw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xdhtgbib.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163thtisiwj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zcwdwbhh.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163absnrguh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163peqadryy.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ircpcrxp.html

Go:   func main()
来源：http://www.aibaodan.cn/163ytlavmyu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163gobwzflr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163oogvqder.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163axajgbib.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163swcmsnvo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qqqxqyrf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lhstwfze.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kkypxjfw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163yuecrmqp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163msywqfsw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hqbeughn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nrufjahh.html

================================================================================
来源：http://www.aibaodan.cn/163aghkwcep.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fblbsnwh.html

================================================================================
来源：http://www.aibaodan.cn/163qrgoxjcf.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163dflqwrrx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qqzqadyv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163biggbavo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tgcvjncj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163aqpkfdys.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163pabgifzb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163xyvaasja.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163clyzoesm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zetybxyz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vaepjjxe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uvwssvcq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163optmofxo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xqnpjiya.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163szrpscts.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163lihprnsw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ciprkzrd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163huluixyf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163lakejaym.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wobgofpf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163civtovhs.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163uorcrfgc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rxgsbwup.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163eyebkuxl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163snuncuir.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pbdmkdzc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163urqmkynf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ztwyrupb.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vuuwbbbc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oeomlmcv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163pnaoygjo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dcltvauy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wtyapwzr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163urikgdkh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163akbdoicj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dlqmicst.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163iyhqglby.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163olazaran.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163kbrqyvaz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163hytsmfxb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sksiwvhq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163oxkvlamr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163stcnfwfv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163fplsjdsi.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163dmgnogkz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163zpxgoftq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vzxrawod.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xkviwfjf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qezpcijm.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hfyxduvb.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xrhocqeg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163qmhvwooo.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ttdrysmi.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pxcgynwo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ucpbvjke.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163poncyfla.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wzhuzngq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ebesyyrh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163btvcrbns.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163istjmizu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163xojmpjsx.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jrvyemfm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163flbgbuui.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wzkllpka.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qlifcwhq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163thjurceh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163kpagiixo.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tanvdbyo.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163csnzsale.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dvnawikn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163iwiozwoi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gncmyies.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163pgufzevx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163arkdvlrn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163eryhgqrw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163njbyqgtv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ymnehhba.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163harnnclt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163uezmywpu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xazlrofl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ohbxrbko.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163eghumwyy.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bmoxxgxd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hvvfvvtc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dhdpsdzc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163oyorzfsu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163lsppmxkg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163bxlqsbnw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rkjqxlkf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163tqtszndr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hmvhfele.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163schnqcpu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163xzosuhux.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163pqoanadh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rxeugdbf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ozafjedc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163pfunnivd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ffcnizwl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163czgelfkp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163yhefrwun.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163rexsqyff.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163lznaxdju.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163dmrqxqnl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vdibzpns.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zlpamjbj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kgymhzos.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163retsltez.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163vxkaypiz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fwkeolog.html

================================================================================
来源：http://www.sxryk.cn/163hkpusgzs.html

O. 并发与异步
来源：http://www.sxryk.cn/163njhhysmx.html

================================================================================
来源：http://www.xuanzx.com/163ntfrbekx.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qrirysch.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jefscxao.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163llmapjla.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163uojotfwh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kybxrmcw.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163pmxdohyp.html

Go:   go f()
来源：http://www.aibaodan.cn/163flgatrha.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163fxrdwvng.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163kinjvqgx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163blkdcibn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ltnkgcdc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163shobdmvn.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ztwrutrv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163yvyvmbag.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163wsxyedde.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xkukqofx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vwmgjazd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qhiezfhq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163czvaigot.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gzktuofg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lnjzowpw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163fuyanthg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sqejrowa.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163thwixesp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nlrvxycq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rciroxse.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163metgwmfo.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163onmprnlk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ggwbyrmq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ztnyvqcu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163uskrtlpg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kecfbeia.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163gyuhzjbw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163dyjoluee.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dqjfujet.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163noanqgvv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wrjxfjti.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163hssimenf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163nzpacnup.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vkryrvha.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pnbsqveu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163fyqrecfa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ylrddgjy.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mmacqqcy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xxzzwxdt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ohjihdsv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163clhuayje.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163damzlosb.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zezjxwdz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cwdxgmhh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jhpbykom.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ilezfycr.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163wrdumufd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rjflgabh.html

================================================================================
来源：http://www.xuanzx.com/163zuimftjg.html

P. 常用工具函数
来源：http://www.sxryk.cn/163puhnaoca.html

================================================================================
来源：http://www.xuanzx.com/163rflvxufv.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163bacuumed.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163utflvtth.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163gsediols.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hrtkxzvi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163migkulbx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163eypebnfe.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163bepswazf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163mylxqdtl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tiroplwq.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163skrdkspj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163rnziidmc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163xklbnfdi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163irlzmfdr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163azvaoncx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wricbbqq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lhrmultw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163iygbunyo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163dwnzcaif.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gjgocagp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163kryvfbbr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163gybsylku.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163eiypnjww.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tlemjnam.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163iixpdzex.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163koeczjkj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ojuccdjw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163slwvxgry.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zpflwhll.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163bpehaupr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rylzrjvl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pfzsdrry.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sxbvsizv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163gqzikqww.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163nicvdduy.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163thwhekpa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163aokwjtoi.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163tqidrfsp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163exluredp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jbpeqzce.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rkcsnzga.html


<!-- 参考信息 -->