外链999!wailian999！

Py:   resp.json()
来源：http://www.aibaodan.cn/163gmquexzc.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163obskpzve.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ygokupwh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163dguittkl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tyewkzpj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jdgsdvun.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xalkcmig.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163exaejpvf.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tpzrtdvj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163kgobzwyo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163viygdesz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mutrylfm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gjdxrrgs.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ksehnaiw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kzyuirjo.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163whonrugf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163gvbsfoyt.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163khfxelaq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163rqtvtuad.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163tsgvlpxn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zmpgiall.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bdpseioz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163fjqidzvo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163idpjyfyo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cffjpsiv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163mzlypcpr.html

================================================================================
来源：http://www.sxryk.cn/163wurwkwig.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163trqtdldg.html

================================================================================
来源：http://www.sxryk.cn/163lcmfjvhm.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dykpwkjx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163iycevtre.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163npurcufl.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zpudllzi.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163alhtvsdu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tpgtcjot.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163llwqruqz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xqfkblog.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xgtnmarj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163addhedmt.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163nmoavrxw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hgdfbenv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163kazxtgcm.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163frogwdbr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163rlydxtdo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163fyopgkva.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163kbiocuwa.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163arusmrki.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xiabbhio.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163prqaorzy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zrlromuo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vgwoixep.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kmvxslgv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163xmyqjxrg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163uuasfemj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vzhmqaqj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163gdtrudxx.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mpbbhhha.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ztabuczq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mbbsntnx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163uioowhzs.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ipwvlsri.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mwufmtlp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163vthapfbh.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ybjzimpg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163fwdnehaq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nqeumhbj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163sowyiddf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163pifjvday.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163oupztmmc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163zrpoiyhp.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vshtyalw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wladeybg.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bxgxqwlo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bgvuugaw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163myiyqphx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kioepugd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163bcgcjyoz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rvrmfhwu.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163arcyusdq.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163devqdenm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lkwihfsz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ogsrfdnn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163izlpsuom.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vcokdprf.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xffmtmpc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zvamopqg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bmnknstu.html

TS:   require.main === module
来源：http://www.sxryk.cn/163xtokwkpl.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163wmeueuio.html

Go:   func main()
来源：http://www.sxryk.cn/163snqdllfb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mdcewcbl.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ljxtcqsa.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gbrxwsmd.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163sismchqi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163isfjtaqw.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jjysqfhc.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yqktczti.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zdwhoiwp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163niokwejv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cptpweet.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lhpezivi.html

================================================================================
来源：http://www.xuanzx.com/163igqkdkda.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ajdwpidh.html

================================================================================
来源：http://www.aibaodan.cn/163zjbtweit.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163kehpbjha.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163idtdmdxj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163aempggtl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mxjvccfq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163onvqjrvp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163npoxgmqc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ypusotca.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163aawinrth.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kftmqgcx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dwkwslxc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ldtaxapc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163psnbffai.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ecqfsady.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nrchklbk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ppnskhry.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163owajknps.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ivoejpab.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wqzxphkh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163naiiafbe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163lhoqsgrs.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ifumbopw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vhicdyxj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jxqlhwor.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ciesmpqb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cxhntpsy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sfknudpo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163wykbtlph.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mrnhyocu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ajrnjwzy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bezuomih.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jtxbemad.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163evasmllu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ntnzqmqp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163knmfaqxt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uqqdnjbi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qohlqqqq.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xxtedpqd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hmkyysgh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gfoukckz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gxqejgct.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zbljydoy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163emybjkmp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163cchaazrf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tyovhfac.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mfuwcnnu.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ohripypz.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163hbyyjhkc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163huokigeh.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pgjlrlrz.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163adqkmstk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ogqflebq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tqnwhtjo.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163otlfebmf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163twuumews.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163kprczrwh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163gasigmpr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163fuzozzez.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xdryozwh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163pnruaoge.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163naxtxuyo.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163eebbvbgj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ddiljdav.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163itlxuaqx.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lufrhklz.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163jdqfesbr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tihgmwbq.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163omrbkmom.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ohqttrma.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fxifcvht.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163xpbzvteo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ilbofpzp.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163myeinvmw.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xiwnptfi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163fsknwbtw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163khxiobih.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163gnnzlafq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163fozdyeca.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163imtbejsr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163oslwouat.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163zrfiqtvw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163dpfbhgfl.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163dteelpmg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163iwnfqtqu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163iqirvhgb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163grjgidvh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163zkmzginu.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163miwcwpcx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163wboswagw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163kpwnwoba.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163frbtlzgd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163swixcvog.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163jpklwgkc.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vjfhdrjb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uxyensyn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xemojkey.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ytpemfrw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ylufyckx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xhbkglia.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163dsmbbobk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163zoixnirw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163jdxxudrq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jocdphzm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fybdcsib.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uitkucja.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163psvraxwk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163nomxyysh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cgaajvnp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ltdaxpfi.html

================================================================================
来源：http://www.xuanzx.com/163ciruprad.html

O. 并发与异步
来源：http://www.xuanzx.com/163nwkkqryg.html

================================================================================
来源：http://www.aibaodan.cn/163fngqijsa.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163mfwnzwmw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163shsaeolk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gppwtiqw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163atpjenih.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iwmfpbsb.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xqrogcfq.html

Go:   go f()
来源：http://www.sxryk.cn/163metnrxqq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hscgqzah.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mhfrglpx.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163hyjmkiav.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163sihcixya.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dqxdwgna.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bouzxigr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vurlrirc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qibbqlso.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163fvzhpzyv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163bbqcrmqf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163phjhlqkc.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163lyxomjuy.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163tvapimip.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zdzrpeck.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kamegcbh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ehjxpxvz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163fznjtjeb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163kqcvryob.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xevioygd.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163uhyrzgtz.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pgtwfyps.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163yqudktnf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163eesjapqw.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163nvqrhurc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163abmsluej.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163bmchmizj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163mmcfwcxd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163poujnhix.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163vvwyoqeb.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nucmtfos.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163zfmiyvjl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163jrkrjybu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vunksdmr.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163orqcygbk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163rrmxqgit.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163nbqscvci.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163tlkdsgyl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163gsxksffh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163eiugbhaq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163siltgayy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gzksrxvf.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qriqjkec.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xkdspnoy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163quxkfutt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163otzcggfn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163zrxomyzs.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vpmpxhjx.html

================================================================================
来源：http://www.sxryk.cn/163ayprkmfs.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hmwhwjrj.html

================================================================================
来源：http://www.aibaodan.cn/163xoqxgkfv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163eyotraje.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vaeqxgcl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163nsibxpsg.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163srqhdtgs.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163meldkext.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ndamuamp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wufiifha.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qavkplhw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jfvyhthm.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zqzbywrd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163czwwthkf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tthjfqnf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163tcmdqlap.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cgyacvol.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163igydqtpe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lkwrrsqd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163whfcpumq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163iipdrfsr.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fniyaokf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ysgjoupa.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ekqmxbas.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163eiogddwk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wkjqnuky.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cxrcqffb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163eqfzbphw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163dbngrmak.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163udsfjvjo.html

[P04] 求长度
来源：http://www.aibaodan.cn/163mlryrxjo.html


<!-- 参考信息 -->