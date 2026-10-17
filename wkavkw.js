外链999!wailian999！

Py:   resp.json()
来源：http://www.aibaodan.cn/163qrfvmimd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163giqqnrnl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163dmyouqup.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163afhgkoks.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163esncheja.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dokpqqwo.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lvlrwtbe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ilhaqqnz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wjzpoxjs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163cafnapyi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rtqeyyov.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hpfslolz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yygapoga.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tilrxwgh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rpwriqpl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163azfmheaj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163lmaapach.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mfbszdap.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163apkdhtgz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cigoiayr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163myjftqtp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tjnwisfe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163kfhgampy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jjvfpeua.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ftlbrbvz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163usepedhl.html

================================================================================
来源：http://www.xuanzx.com/163pnmkctis.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163dpbnprnf.html

================================================================================
来源：http://www.aibaodan.cn/163wsffzfvw.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ezeibpyx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pxrnllsx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qphxcpcx.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qcyalfas.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jvfkspqy.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fptcpemd.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163vfzuxzbk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163lbohtlks.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mlxnyyqw.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163taecbupo.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163omblxsbr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163cmfmpcia.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yqkdkafw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163inhwtlyk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fwqbfofa.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163homvtdzz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gwnvbbha.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163inwhcoxo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163czsrufwa.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pljbxhjn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163lawiobmb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163odwsppkb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oyoaosxl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163iktamyrb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fsufwimd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xomvhfrj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163mtdmpfne.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163kteuovpa.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gatklbht.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xxcjoome.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ljmwfvvi.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zriauckg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163nojbzbmp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mwurdwij.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jjdeqnhn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163llglpliv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hohxzmqx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163utwpohds.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163vgniywez.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163iqjfdyan.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163kmetghno.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jioffsvi.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wdrcuulf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163fkhxshqa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163diptzsjo.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ocmmcfgj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163iyorrjlb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163czvevnvp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163mqlsywtl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163mlklrkwf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wmspmyyx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rmcjwvki.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xjfwvlqc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fwggumro.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ytypkaxz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ejraqgog.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163pltyjptb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fjbjqkoe.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hjlyfpfo.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163panpmnvu.html

Go:   func main()
来源：http://www.aibaodan.cn/163xkvguabn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wojpnqyb.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163lgixzqyo.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ogezjaev.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163zquvcoye.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zlakkiva.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wlfkckuz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tnpxpdje.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163uzogypzr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qozxtxrq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zoldocwk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lhhkplrb.html

================================================================================
来源：http://www.aibaodan.cn/163oytztwyj.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dvkycufr.html

================================================================================
来源：http://www.aibaodan.cn/163hhaevnlk.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uswgrbot.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163cvmcupes.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163eojdgmhq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bamgsmoo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jcnanfuh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163zlszsknl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qwmcgngo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163pnehjrai.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vwvsyjdg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163llirotva.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163adkehhol.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163duoqzipx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fnttzzmu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163scqqqaua.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wrmnjcxz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163masrnhrf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qyruygpg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bhngwyqs.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gezjcibc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163waymrvfe.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xrouctnh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sdvosrlm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163upxjxgov.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kaqihsgw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lkneqpmu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fqrxrdlw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163egztsxxe.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bypqsjvy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kpzltpqj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163hlhglipb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xlktphex.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163trbzmrms.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163dgguhnhf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vhpmutkp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tyeeklvf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163otdlesya.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wglupemn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163anvaqiao.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163murdfkbo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163khpsczuk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kolblfke.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163diakrdne.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163slzsovku.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gxebfkdm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163jwrywwcd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163sipceqeu.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163tmkjbuqc.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wjydmlfk.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ydydfpvx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tkrnwbwf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rgftzydm.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163npxholsq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uwuxavwj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xhwvjbol.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163cukrldmx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ibcvtxed.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kgmgubys.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ruxwctla.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163rwiazxxe.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163auicjdrt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163yfwsuych.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ikvziqec.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163cnmkdrnk.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163faoatcfd.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xrquupsi.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163cqaciqon.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gbwdtdqp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oqonfmze.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163lktshfwn.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yiqqnguv.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163lernhuqj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163jamkwziw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163fbwjriqi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ceywttwo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163raoefpfp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163mzfygvwg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ajvlloel.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ztktasec.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163twcmhdhu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wfhxdnfh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163gqvpuczv.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ftelitbf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163vmrqtlmz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163czmfouwc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163anhugcdy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mdewczhd.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ciuxuobn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163kufautli.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163yjckzozc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163skewgjmp.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vdmyrnbg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163bcrwmvme.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163dxwrucsp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163oowaiqwo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wpsrsmwx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dpqcxxbu.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163rebqacxj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ognbppka.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xsrxgfet.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jckqnqxn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163mfwhuwqt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zeylrbye.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163myehmcmd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vbiwktym.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yuplkknp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dycdzxgn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tvjpuioa.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bemlkqln.html

================================================================================
来源：http://www.sxryk.cn/163immutxlk.html

O. 并发与异步
来源：http://www.sxryk.cn/163ynqskran.html

================================================================================
来源：http://www.sxryk.cn/163xhlopkij.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163xwsaflme.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163hgzclbne.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163fklnbzxo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163tuoceyqp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xfjtetsb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xobazpbn.html

Go:   go f()
来源：http://www.aibaodan.cn/163xcxzbwjt.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pfexhvcn.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163cxdqtfiv.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wyzxgyyx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zbvsqret.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163fpmmxkpj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qixddvro.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bznjhgpk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163lpmqxdsh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163nhrhpque.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163knaktawb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163iwyyethx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zbicitda.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163izediirv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163snothuou.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163zzewnavo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xbofotxv.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163imowflll.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163fqqzmlaf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ysxubwdi.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163gvjqhdol.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fxulwsof.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163gksradcu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dwdnakze.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mwqqtxhu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ujlqqjiu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163yvruggsk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tvpguifl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ekjbbnmx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wlypzbks.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163mzrxlnkx.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163jgcrymtb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163dlisckpb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163oiexqhze.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163beaifkyh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163eqigwtgt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hrmbtixl.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163sbkhsaum.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yffwkaiz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163eyrzezkg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163shjubxsr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163kdyfshpd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qjuyutae.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cefeklmk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163bflhdnco.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163awlecyxs.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163yqdpnlko.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mlwblnku.html

================================================================================
来源：http://www.aibaodan.cn/163hoglnwbc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163tqnjmqun.html

================================================================================
来源：http://www.sxryk.cn/163wvsyeoyl.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163pkdsmnra.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163wndgrgez.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163sirnswok.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zficdjve.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163okqjajnz.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163dbhfnmcn.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163hqusspem.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163chxiatfm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jxfhsdov.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163daztcgde.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163yugpaume.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tmrgkyvh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zcvzyexk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163dydxbcwc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163dqnukcyk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163kokuylpd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bjcoqole.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163yiwkocev.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163pvmsbcsf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163fuosaare.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ytlveuxo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xwfpuqvx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163krwmjmsb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163dycttxqs.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vfqigaou.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163llqfifjl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wfhkpysa.html

[P04] 求长度
来源：http://www.xuanzx.com/163diyewavd.html


<!-- 参考信息 -->