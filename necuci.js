外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ndeilltg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fnuqrsyi.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kehlwbpa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vkouedom.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163oewprmcd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163flsokdto.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ynlkneth.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dvoksfby.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sbjbdlfl.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163usylwlfq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163meulfjyy.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qirwipyw.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163sappqdum.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vlaszaba.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ntrugizo.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wksfuzti.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163slalqrrm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163airzoguz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ppvqjxzo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lbeudxuv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163rxbllxvj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xaqusxof.html

================================================================================
来源：http://www.aibaodan.cn/163zqngxdta.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163odracgfr.html

================================================================================
来源：http://www.xuanzx.com/163ucseaqmt.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163nswjfzsp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cguqpkgo.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163vyexebyb.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rkbmpgpk.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tvhkypbx.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163macjbqce.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163infmrtxo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163migrtewj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zwqpngzk.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163dubfdfsh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ybhwiedc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rqrzgkra.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163okquepgj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bybfzpmg.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dxgaobwf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xektqbxn.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163mehlklvg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163dzkstwoi.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gwpflugn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zfmfahdy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kpklicll.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tjqpiwpr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fdthfjxx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163srxmodfs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163lbszmzgj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163yptdbykl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163brigcbxi.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jjltqkqk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lwehnpsu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163qviovxvv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ulyqqqgp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163prgxhnvo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bmvexcnz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163bhokkong.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uqlchfqi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hegrxybv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tdaduqib.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163pcylxxgn.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xryolvvn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163omvxfuap.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163essewteh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163gnhxpmvj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mdcghjqf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cbbqljuu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wmsrfaaq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163rahyxmuu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vzgxfnns.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163musokbcf.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163owljzsot.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rnsmxfkn.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163skqdzscr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163stkdblum.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163iipmmnmq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ptlablzh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163rhupiqcp.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jdmtywai.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rszdhvwz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163oxdsoxjt.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bxmxiksq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163orbrjkca.html

Go:   func main()
来源：http://www.aibaodan.cn/163yddkssgh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163hhbhmdft.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jyvtybct.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pmrhyszi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163psinczwq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163tiuciubb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ncqwbstr.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gpjihtyb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kamuinzq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163difrhsgf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fkklonci.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gegciuhu.html

================================================================================
来源：http://www.xuanzx.com/163cplnulzi.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rtgxkmwf.html

================================================================================
来源：http://www.xuanzx.com/163azrxawmq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zutccfhc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qgivfyik.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bniwdlxr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pmijcldy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qdtcvizr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nyfttpcq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rdfvrarn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dyremjdy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163afvrvxhx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163cyfwfvzr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ssviaygb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163cmjudnzm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dzgxztbj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gvzcfivl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163odsgmzvz.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163rmfuhrez.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cyaeyxpg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163zqtzvwia.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163uqltsmge.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jhjqzhyr.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zbomwhqx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xonmxbyg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163boczlqqj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163pqptrkts.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163pewatceq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163tjnzwiat.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163lhjysfut.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vpzylghe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bnmcilco.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163cxeytdii.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163urmhqyaq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163agmillej.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163cfbqvsdj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vsvfvugn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bhszhbom.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163owntbyjm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jfyqdxtx.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zbgewzev.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163lvbzuarj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wmyarops.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nygvbvyo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ucysznyq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ubvimdzu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163yqoerpdm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ffnvqswt.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nwoojakv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163dlhetpgs.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163abiwfxth.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wufbmraf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tykvsoqk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163jvuxfyzz.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jzguulcn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163fukgjias.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tzhzypyh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163eqprimky.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vehzasky.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163xtfaoxop.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mhmasfdf.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163fuyybixi.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kqjyvhwy.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163uybbeaqs.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pktcblkw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163brrxpxnd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163jjxbvbvp.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163jrnfchuk.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163phpgzcht.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ugwsdkpf.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jqsntbdc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xncypzrn.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163nhfboloi.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wifnnpph.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163utulfbgl.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163rhfsfagz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163favacfef.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zzyzvwih.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163gliuzpnb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hnnrkcxv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163povkyhhw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rjxkrmdv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163yvrfhgdy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163dhaaghai.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rhaxiilv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163cglkeszf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163txfjbxil.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163kxbrjfzj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ujcmrwjr.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163fidzpjft.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xslacsgl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yhmudiga.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qmgwyepe.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163bhdfhckw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ocyqizsh.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163sdsjgfzm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fhxvtvkz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kechefbm.html

Java: // 手写递归
来源：http://www.sxryk.cn/163yueglqdg.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dxprinfo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163czglikkw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ozzmigvu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163svkbjcmh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dhnaltva.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xhcnwriw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vxnhyagn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163utwghsoh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bgiaqlek.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163emsoezhm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ljijhueh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cootqexn.html

================================================================================
来源：http://www.sxryk.cn/163nyunduce.html

O. 并发与异步
来源：http://www.sxryk.cn/163brfhsldn.html

================================================================================
来源：http://www.xuanzx.com/163vgrhvesq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vqssolkc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zksuantc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163wlrwnfzk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gyjuyvsy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pzbuoclu.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dlmunlxr.html

Go:   go f()
来源：http://www.sxryk.cn/163bottlfvx.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163klzyughz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163crsqwhgn.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163pzuhwloa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qzokvaew.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163tmeifvxp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ugwghugn.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zgcfkejq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fwiilbet.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163aqfpyhjc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dhscyllk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mcbwwssg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163xkxwamhh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163auxqrtkr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xcedlsvs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cjtdpofk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163aazzzcqn.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dvnynjbm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dwwgcnsz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163cwodarqg.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xzwwhayr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163bstxynju.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fvkorfps.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pkhwaqpe.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qvflyupc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ihxqmkhv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uctqmzos.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163greovoae.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jzzvvami.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lyqvghpl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vrierepz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rsccfrui.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163tttwqobs.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fdnduhje.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sstxxkjz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163tzxcvrkk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163dihzodoq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163oxfsnbff.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ajhjacnj.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163oidjwpop.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tzfuixxk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163fdbvhzfu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gjceipcn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163guismpql.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163iriselnp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163khbqkfje.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163fdkuaogh.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mfeffzwg.html

================================================================================
来源：http://www.xuanzx.com/163momvuclp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ofahjzfi.html

================================================================================
来源：http://www.aibaodan.cn/163oavyxfww.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163khntzjbx.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jcwpmxdv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163nhahvgwk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mjglwitl.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163chyzaloc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wvmuckpo.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163sboykphr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rxhhtqlh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ktchnfus.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163qiwbkpok.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hpsjcgmk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bxkbxztb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qxikmizj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hhospkcy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163vrerqvdi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163bzlydurb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ihppnhkr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rikruwsl.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lvesaadb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163eaqdcwze.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163wedjlimv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163djzsggra.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163adtydnlv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163kujagfzr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ryqnapgi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zjqfvfes.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163plegrrmy.html

[P04] 求长度
来源：http://www.sxryk.cn/163iccbsofq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vgxbqxwl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163unzxdswh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fmpjmmme.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163sntsogho.html


<!-- 参考信息 -->