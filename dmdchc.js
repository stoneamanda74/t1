外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ygitiput.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rtxsnqmt.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ohdgdach.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wyoambem.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ajfqrevx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jbauwhil.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163eoptstav.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163eknvbigf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wkyfooab.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mvfbwiyt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ryvebayv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ccjexwki.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163hffidzhy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rjaxarqf.html

================================================================================
来源：http://www.sxryk.cn/163klfhrpzu.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dukqadvi.html

================================================================================
来源：http://www.sxryk.cn/163oahngzeh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ussapdhr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163enkfqjhx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nimaavkq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tscistzw.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tmgwymzw.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tiiwtnim.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ucdcoowi.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kiucooha.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vddewyqm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163exynldop.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163azwxennk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163bbfolreo.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163stvsmqrn.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163oceeznfp.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jjhanezh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163onxqaowq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jfhkjstm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ngmmjrev.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mjdrzehg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163wmthiasx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xvcxjcwg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163knugxirf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163iadaeuse.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163fcwwqznm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qaxnlydd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163nqhqjask.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ewgnbbpd.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163flekuoyg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163upgvbtil.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zqsklcek.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163atlmbinm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163esytqxux.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163axxjwjsd.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163psrtgren.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163sobfluqf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gexfbffj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163fgdwziaw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163shghyehp.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163smxtrjyx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kelyfqgr.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rbzdgaco.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nljtoliw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ytnlgnpg.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jdwvyokh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dtbraxzi.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lwuvobdq.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ngdngnye.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pagqbfti.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gktzpfrc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163smsfhneo.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163obwevcgp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ejzhkrww.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163msnxnvjh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ejirrfyz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163gdubclqb.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ydyptlon.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163zhpejwbw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nytndcvj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ptlgonkm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mnqqrmon.html

Go:   func main()
来源：http://www.aibaodan.cn/163nskymjqj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163aldsynil.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ntbybugb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163agifpagq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163rbgbzmpn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163esaclnko.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pdcvgphx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xmyfiknw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mhvkihbz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ukfperkx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mrbvtvfy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rzkapgic.html

================================================================================
来源：http://www.sxryk.cn/163eoyhglhi.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ulhbzeym.html

================================================================================
来源：http://www.sxryk.cn/163nuoqsdjs.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qpvgawnr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ydlofjkn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tkhtbgph.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rpmnvpks.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vwexfzva.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vibwsajn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rclkwsho.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163dkwptcli.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vmkqddzc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163udnvwcin.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qoviqeho.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163dfyijmqv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lstolutn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wkbfihud.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ykhuwfmx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zrxpqgpm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dvjlynli.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163nvmiyxoo.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163chkqloto.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163nptahirc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mnppgtle.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jqaonnos.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tggjjovk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mstbhxta.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163srqcsxip.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163xkvctjwj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163psonbsrs.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nwrwtzgv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ldhucrta.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163jjfsoakr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163agoqczfj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bebunmgg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163nxeryviy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163uitpzzju.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ctkgywlf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mmihpecq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xzkmokkr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xnwpeupl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163cageopuw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fxolxjzr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163afxtboiu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163raxwoduk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163swlbwszu.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163taqppeoq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163riupubhf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ozgnccyf.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tpwgqxac.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ksvzxdmj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ayzasamp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163annwbfqg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163jsyjezjn.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163sljjioew.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wneojdyu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pamalmfc.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vidgwugk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zmbdixbu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163gqnnqppw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163sgmgfrkc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163spqxyjba.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wcakecna.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163czihkbfn.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163cckkfvca.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163rmplaves.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zsbnglzp.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163biybguqr.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hgpvajnh.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jhrjafyw.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mvkcnoon.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fwuxihmo.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xuxwiicp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dueuvtmp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163guljrxiy.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ywfxaxcr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bqawtsyc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163fcrvquta.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jnhtzlbv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163oksigjnd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ehxwiijr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163naqhrkfc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nhfgczfm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ucsbohdi.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163yzpotsgz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163layffvfh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163vjghzunk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qmownpxj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163xbjptosg.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rlxnmhat.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jgziqfbz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ztoqqsum.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163nuudriuj.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163cwdtuqws.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163rurfqcre.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ypekeuyr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bkmzeniw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gkubqvcr.html

Java: // 手写递归
来源：http://www.xuanzx.com/163yrmskbfp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vwryptgj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163npgkuiou.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xilcwhjq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163nekqwtyj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163rjfmfawv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tjzatsmh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163witsebey.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zmbhgsab.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wtmqtoaj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hdsmjqzy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163fsxidpze.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163grqnlyny.html

================================================================================
来源：http://www.xuanzx.com/163tjuyvagu.html

O. 并发与异步
来源：http://www.aibaodan.cn/163piuxzgjt.html

================================================================================
来源：http://www.sxryk.cn/163duweuupt.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163dqnqkzxy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163eervxqpj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xheojfsh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tlebymuj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mkziwwoh.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163vlguuarr.html

Go:   go f()
来源：http://www.aibaodan.cn/163yvqwhemy.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163chqhnwvl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163zqalvtcp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163suhtsnov.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nfhphmgm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163nisicrof.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yffmkkbw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163laqtmpwq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ehhaluol.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163yhilnsnf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163hvvpzocb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ugexaynn.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mvqgylbt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163fpcjlmky.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lfcsfrdp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ngbuwpzu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163liqvtpnj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gzdnskbi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163acxypwcv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163bqjccwnq.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pymoeysw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qxzkfztp.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163oaiavrov.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163awkvvpme.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163uhfdzpir.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163uxfgxevo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163gnwoascc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163kvfhhuzr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hhltixfd.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163yemaffqg.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xzrprmpo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163lryllwjb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tvdydlhk.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mjlohixd.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163yqmrvojt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ndgdigzz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163fwlgahjc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rdergwiy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163sqswcusb.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163lfexmayu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163wafnisuu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163rtnojrgh.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163afugffxn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hvlekxpd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163vwgeykus.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163imkutwys.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tgehvski.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ytmygoed.html

================================================================================
来源：http://www.sxryk.cn/163xvmuoaxb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ezhltrjj.html

================================================================================
来源：http://www.aibaodan.cn/163guubryth.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163cihbmspu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163rmobhzzt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163hlepblpd.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jtqxjbmh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xewvhpmc.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163torphigv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ktyddhse.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163alkgkodb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163bixcqqsc.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163oukkzltg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gvryhmsp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mrlgpmkh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nqzwmrpp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ejnlpegw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163oidyzboz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163dqjmecui.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wrzasylu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163prpwhokw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163flirxuga.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bdgchhoh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zshqmoxt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nzaoceql.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uwhxeqcv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163elydyufp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163yjjvlrcw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163slabwkbh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bwgjpgho.html

[P04] 求长度
来源：http://www.xuanzx.com/163bvzcllxf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gofuycvu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bwzzkndc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vjyaonam.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qucahlsg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mclfidia.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qejamdhm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jhivgboc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163bqjyohlj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163guiacmnm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163yncarqfy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163rapyfqea.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163afaklnmz.html


<!-- 参考信息 -->