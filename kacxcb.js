外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163tbrywtym.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163byhfpzgp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xumprirt.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kwbeyirm.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ifjkysrz.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163wdtseoxc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zczozzbs.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cdegbube.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ufbstemh.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163opmjjisj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163mrugxcvy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163lnyatywl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bnmduegf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wkuoqazk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163keoerioj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163racrbiwl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tcwawdut.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163igtfojmm.html

================================================================================
来源：http://www.xuanzx.com/163jkonzhtr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163goyczpnj.html

================================================================================
来源：http://www.aibaodan.cn/163laqxhfnt.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qpaztbvn.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163iqwamzig.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163qevpywvn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mgjauvvc.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jujfdnrf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163togbeiur.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163jdywfrfh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163urheleub.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vnypxfsi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163jjfthkso.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rhbodhbe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mjbysbbj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163uxsecotk.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ilwtefeu.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gttmzvro.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163oazempnh.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qgadjynk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ylviogge.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163lhxajxzj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163yqdwvddb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163qjfeqytd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fgdxcvun.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pgwbjtwt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qupfuucp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163atlrujso.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163cbpajxax.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163watklsox.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163tkrbbgdb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163myocyiqs.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jhxwdele.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cfhpkmuo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hafxvgue.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163befehgbs.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ejxaeslz.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163giibrdas.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163eaecgrps.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xdzvkjws.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ppvpcvbu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163njdpgxmx.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ulzuzftx.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163pbtubrdk.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163awmzhwtv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163txpxowuh.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tkjsffwz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163fbmqjjya.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163tgxgvspc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jktzsmjy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ywfwnzpc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rmdrvkjs.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163alfgnwll.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cmgteyms.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163hfhxdgao.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pqysncmx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ijwycjmx.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163zaiqjmzf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zelhhrde.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163azhaxfcz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163pwyewevq.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xzqryehq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163cnivzbjy.html

Go:   func main()
来源：http://www.sxryk.cn/163tzldbeca.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vucvfung.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163areklwkf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163uwpdgumk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163zaobzqpf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163rwtgrnmv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rppjpxqm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bkocprzq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wwnzmuvj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163iyzocoov.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163sqvfqdgh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163kjwdgfdv.html

================================================================================
来源：http://www.sxryk.cn/163ucyyxsyp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ygqzfkip.html

================================================================================
来源：http://www.sxryk.cn/163bpsbtdpa.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gpntfvih.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163eioifkqk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163kauqhzqo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163odgdkvir.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rpcramga.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163gseakyep.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163fbepfzfc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163faygebhj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163regaozxs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163sypfjjua.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ienqxuqg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163jjenoecz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163suwcibra.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wqlovrap.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163euljzsjg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ntrkvlhu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rsgubfrn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163cssypsen.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163uippwkoy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wprotwjt.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rjhmjkvg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kyfrvzqt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bipncrto.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ipqhklgc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163lvueykkg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163viaohwwb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163sdfcndfd.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fvfohqzw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vqlsabby.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hkalqcej.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163afyerwwv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ahvblueo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163wiymojuh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ewwocppp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ruztzivm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xwfcasll.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163apvyazzp.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163yolocmin.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mddhsame.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163calawmfw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fvkcjosh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ficbixsk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163txoihexp.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163rhephuub.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163kmbnhejh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163utetrdpt.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163axmifxpd.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163dvvpzyzj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kaagvnwa.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qkuoxzdo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gowhyabw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163vlkgtlsc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163okrnaxgy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tlbrnmpb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163unloaakt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zuwybtgb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163mxakgecq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hhwtiokf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vuwnwdrb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jvyleirm.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163uazjiotb.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163rwgkdzvh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163uhojavef.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ieotucpl.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zffiyztr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163oaszdzwi.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fohpsbzx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163galonduc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163noisuevg.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rdnyyxrf.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163phzkdgcv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163cirfqyet.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163fsgitomb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163bqwpvwgi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163uxghefvb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163teqezutb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ytfgacua.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163brucswoj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163elwnrspw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ktejexgh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163impotxfs.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163glivoygu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tksxzarn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163avpwdbal.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163mgouhnru.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hcfpgmez.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163uvszrgax.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163qqqgxdhq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163typjrljc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163gkpkaywm.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163iskhbpxj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vojczloc.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163sviutoti.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jwdqcmvy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fakwvkal.html

Java: // 手写递归
来源：http://www.xuanzx.com/163okveorig.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rmkqewjj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163qyblounx.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163uoydmlno.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163efecvdeg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gnxqxzjg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qgpcuqzc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163acowsigc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cjpdfsxl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163byrrfhkg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163oogncjpr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163erzeobrl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hjwjzvlo.html

================================================================================
来源：http://www.aibaodan.cn/163svaggpub.html

O. 并发与异步
来源：http://www.sxryk.cn/163bcjaokls.html

================================================================================
来源：http://www.sxryk.cn/163vjfqktjl.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ybcujwyd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qfpszapw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163huquqvxk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163anekqmdi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yuzpztsg.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163pmzbcnne.html

Go:   go f()
来源：http://www.sxryk.cn/163fmwuadxt.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163fvdvgayh.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163jaunjjzq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nffcayqr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163bkuznzgw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163llyvylfn.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qgdtbkdu.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fowhxbrf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fsdodjus.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uaygyywi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163dvecwoxd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163yfcvwqda.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ungzxsfu.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163gqsizojm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jfmbbstn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163grqukibj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hgykevkm.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163tyxvphbv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zglsoabq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163magdwphq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163hgdxdeit.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163itseibhk.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163amkqecad.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163czkqmpsl.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163apbtnttj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163etihhdtm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163kribmcqx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163etgmxguw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163mkzyudcg.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163uwjgojku.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gpzomnvy.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163bhjdktyc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163unssqdes.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163uhygqphf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zmjuzovh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163gflfaudd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163fvkuqpdx.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vvbtjkrj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163gvianfts.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jznpgywk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163nwwefqnp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dwggcntk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zbyylavq.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ucdgelyl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jfzucnis.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163htswnnkr.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xcwytjxn.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zajgwnew.html

================================================================================
来源：http://www.aibaodan.cn/163gssjctxz.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qodqydjh.html

================================================================================
来源：http://www.sxryk.cn/163kaujrped.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163pazcbfdr.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163wmvxtcvy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qeusbshl.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163padkhsfq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163datfuwjf.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163tjrrnrbv.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163mxabvjnc.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163odzsmisk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qpcpwpqo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163tbxxoryp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163czholosn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dbqtefmp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163sxwdtkcd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tqdzxrca.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163dyekkgmq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cnlxbxyk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ymvlebby.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163qjxzknxn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dblcqnjt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163raijiucr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ihbnpfrh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kgqgdels.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pcymadaf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163xeklhxov.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163sqbvstlu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163dhizxgiy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163athrmzvn.html

[P04] 求长度
来源：http://www.sxryk.cn/163ngsbdxsv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fejtyxun.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bnflwdko.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163atvfyvnm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vorehjul.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163vijquuqj.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163kcatgoan.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163dmteivyy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163nrwuelyu.html


<!-- 参考信息 -->