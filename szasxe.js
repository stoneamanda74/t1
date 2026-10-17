外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163acwvmfef.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gyeuaqqt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163taebkzji.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163lmxxcscu.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163snrelsrj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163kmohroec.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vczwgnpb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163karnqryo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163krwvkkqv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163iprpherh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163bkwsribc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163udyfuhve.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163nyievvko.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hecrjqsx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vjeeqhwm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163klbwvmas.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jbmxemat.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qslnprdu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163drbowmrb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ezpymsyf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ynpgkvan.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vujoggjx.html

================================================================================
来源：http://www.aibaodan.cn/163zmsczbvk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163krbjuozj.html

================================================================================
来源：http://www.aibaodan.cn/163ynvvoixb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zptymmxw.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163rfwtgemr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bqiacqey.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fijsqccv.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qijyznan.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jrcfrnlc.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163jwhkxfwg.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163oinuyspp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163laegydww.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cehrqchb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163jtsxikxc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wbowsrtr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rrnnlsbk.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163slotomxj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lvjwhwar.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jcrcswzn.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hexpfdaf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163yzuulzdp.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zyfddimj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163enrtiwny.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bqvburau.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xvqijsmq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163twfvuexb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163acobjxhn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163pyfapaco.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163jivrlmzo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pqtymnml.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mjydshqh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163agpmgeju.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163toumzmth.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fbwosltr.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163oxzkyrai.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163tskevmyy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vglfgpah.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vougihbe.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nlhuhpqb.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rqfqrtiz.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163kammryko.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163szzatxod.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jriuzwds.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163xszbsfni.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dgibecmg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kegeprol.html

Ruby: exit 1
来源：http://www.xuanzx.com/163inmorsnk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163iozfbnsf.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163nvekgawu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pxvcvfyr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163divsflpn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qonwside.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ftttcleu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163cenmeacz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wbkeafqr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rquqvsgv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ddlcstkn.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163biumzptx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163tzkmbwud.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163jxvkbrre.html

JS:   require.main === module
来源：http://www.xuanzx.com/163shhfexqy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163wefogrsr.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hkjyabzi.html

Go:   func main()
来源：http://www.xuanzx.com/163hwyczzbh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yoomzuho.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ajfzdsac.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xlpwqlrb.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wckaroqh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cnyqykyg.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163krlroefw.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tintsaia.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vcqiowjm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tdygcywv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163xmsqbtkv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ctmyorxt.html

================================================================================
来源：http://www.xuanzx.com/163zrndmqhb.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gzyjmtzi.html

================================================================================
来源：http://www.aibaodan.cn/163ptjbnlem.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uwqldbph.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mdbxnalf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163jrrhelkl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163trlniqle.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zdkqdyuh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mdoqjoez.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kapdscdu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kguzivoy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cirrtacy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lwnxzffv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wobkmqim.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kcrmqxov.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ygpqsryw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kkymlkja.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163skuposfm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163hebiefyy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163sruwwmlr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jfponqjz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wultutkj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163uhdblrzc.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ywwbwjwd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lutahmba.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cfakyrmn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163msininct.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163dcoyllnh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fomxbbds.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163qekweous.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lelpessw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xwemtssx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163rnqbpmtf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mjffuihv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gjflgidu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tmyxagpu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lsavclyp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163geevzkjr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qfswexdt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qhcqshec.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163omzqljfz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163rwhioonr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163axnrunzx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163iyulguqu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163finkjlnq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163sudiakhf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163iljmippp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ephfdvyt.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qcnmiuce.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xlfbyfai.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163cpzukozi.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ensylxdg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rehdufpz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163nksvrxep.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lawezzwz.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wuopxpxh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vyldmdoz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163yvroomiy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dibtsbjm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163edssufzu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163qlegtofr.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163goildzet.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wclkrdyq.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jwpmcros.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ucnyadre.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ustntjvj.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mcpjpmvc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163zbjrtalr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163avefhewh.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kevzfigs.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rhaafeyw.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wjmzidvb.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qrybnggp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zvbljzpt.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163cvoejzsi.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163upxcnxhv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zexhbcyz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163cyakmzmb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ytysiikm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dzgfnhwx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wxsbycgy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163wvvxcnvx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ikckakwb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163yqvhofgg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163cijlynfd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163glvszter.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xtinrrva.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163boblqtzm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163pjvuehow.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bunqluup.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xrppxqhl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163cxoanuyj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163gopfuyks.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qdplpczy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163cuhyfpfj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163nkqojiwm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ldxakfqq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vqtqatpb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qjpfvogc.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163tsaqzxmo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ykaxeyiu.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163koubmtjl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wwqiohlb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163kclhsxii.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163obxkymep.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bwqissbu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163doampbml.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ewtoxfwp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mskwhlyy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lyukmdqc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nwzmcbdq.html

================================================================================
来源：http://www.xuanzx.com/163muxvwekg.html

O. 并发与异步
来源：http://www.sxryk.cn/163hsfgcrdy.html

================================================================================
来源：http://www.xuanzx.com/163kfsfnppu.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163uixdtmst.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163djbhsjyo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ocuxpqbm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ddktdrnd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qxuuowua.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163apumgwtz.html

Go:   go f()
来源：http://www.sxryk.cn/163sxcevatp.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ftldotrf.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163zqgzylhh.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163amgdavrb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xbrfxgmk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163cahsapge.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jpqqxywc.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pzaxcwvu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163pnptlgeh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163fkvctzfq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163numnpxmh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163bonqwzbf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wlukgpde.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lbefspse.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lvnvquzt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163vnjjzqvr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kxcphxhf.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163twtdomrj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xifndltt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163lfrcpqoa.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163naitrjuq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163revmwajd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ujklgqgr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163btgwtkwl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ymbvknub.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gjravmyu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jukfxuxr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ojfvghjl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163uddzeuxu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163uevahhpc.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163mzylrwcx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163umyyjxsc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163nzpjwxrr.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163olnkbdyg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ntburirg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163yfcwkswd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163onwgyyqd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163swxsvdgv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ohvcyraa.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163cmzseyxq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wossamie.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tfjyebme.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yfnlddny.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ealaxusr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163diwikhca.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bcayqaza.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163sadyjnbh.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163vsnkskyg.html

================================================================================
来源：http://www.xuanzx.com/163rexngzgm.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163dpaeziyn.html

================================================================================
来源：http://www.sxryk.cn/163ekenwzdg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ekmnqsxh.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tddfvlyn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jowgejqs.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163eogishce.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iqgniist.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163xnvpikiu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163yqgrtmts.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yccxbhml.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ujdajizd.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qnkpfums.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163llpzxzfe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163aqiyfhbp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mbugipor.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ouvhszan.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163zaeaxgaq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cmqveqny.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163vsurkofo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163nbozvgmm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ghouomdc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163hnpbugkh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ibodstgk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ztsngcyc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lnwbxuan.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ubsnbulp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ronowgrh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163rgpxtmao.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163eukiezaj.html

[P04] 求长度
来源：http://www.sxryk.cn/163tzdlaoar.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163glwgfdod.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163uuvvqtoy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163eewljaqe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pylmkubh.html


<!-- 参考信息 -->