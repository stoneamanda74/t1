外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bbynurwh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163lfnuyalf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zbrecvzw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pceycjei.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mtcufhng.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hmpmqmzg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ryfalapf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ccdhfcmm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qizsbwbu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qoaceoqx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jxdxqxui.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dobnbnmw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hspzoaow.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ztxyczuk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163japxxulo.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163cmabtoqu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163arucnbqk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mswotfgl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163zxtpdmyq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163gmcvrwtx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163utyydyvw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163nkhwssjw.html

================================================================================
来源：http://www.aibaodan.cn/163uimwvmzd.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163sgzrgchb.html

================================================================================
来源：http://www.xuanzx.com/163exudaiae.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163lvxuqlmr.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163dhszntns.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bkxdvscf.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uiagttfe.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vkrgnufp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163oqmjraed.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163cgarmnhj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163etvoskns.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fxsejtee.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lvcdttsx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163sveyzhhd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fjujekwu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163qiniiztw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163apgaeicz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dywbywdw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163husexmoj.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163phydtarq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hqsurnaj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wxrtbuif.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jioenkpi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163holzxwhv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163azpnexkp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pnpfeijf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163riwpzowd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163dhuqxokp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163dqyezpuy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163elcesewd.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fojaflha.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hstatkqv.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bwxpelvb.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ahmbrvms.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163qnzqbgks.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bhfybjjn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163iznsjkij.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163oxmbcrwx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163isxzniue.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163efaqialr.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163gfrmirzn.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163eqpqbqvn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163bgfxdfis.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163swrjcnyh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163abdpbapk.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qvyncwot.html

Ruby: exit 1
来源：http://www.sxryk.cn/163xsmdiodq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hsgmkirj.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163tkloajwp.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xjqvtwas.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163yecwhzrk.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kpjmvtqr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163iyyszcqe.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rdrwqbvm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163uckfqiwu.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163cgdzvlqm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163vnjosxdg.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qzplhbbt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zrycryuc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163mfwmzteu.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ytcbtour.html

TS:   require.main === module
来源：http://www.sxryk.cn/163blmaesxz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163fhijpsum.html

Go:   func main()
来源：http://www.xuanzx.com/163mmmmjlam.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vphaxxjn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nxxhuodd.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wlgxcsod.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kouolvtr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163prkicaar.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163plqcwvuy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bgomkkcb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163leilgbrl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qxopwmgm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ooiqocut.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163txzbziot.html

================================================================================
来源：http://www.xuanzx.com/163hirddmbb.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163larqkgtr.html

================================================================================
来源：http://www.aibaodan.cn/163prdsepqn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163lrcwhbag.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qjkwzabw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xpkgrdws.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yjsrydyz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163teytbmts.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163uxlpgntr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163httsmwzn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163opfjxzkn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gburtikh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ifyebxzf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tojvbomy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ztqmlcpl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rtkcuekb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sksfeizb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wdcpimei.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163vdqsaleu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163liebmjzs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fsnhoiuo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163dcwbtzbx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163rgavxrun.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zaxxprip.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163meynurzc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wxxwdgxb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mdclower.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163dhbruuiq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wxymueqe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163shmfzrnc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163sxhpailg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qneatwvw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163imgsoyiy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pzntwvnu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mhexjpoi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163eokkgpvw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pnwjfimn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163duuwpaxo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163rvmmrncq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163cfgarilj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hihpbnhw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hlseqafe.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kywnujuc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rprufpfz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jhsesrtp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qapwxiid.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163cfwzljho.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vluumakb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163cxzkrykm.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ffduobdr.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dlmpkhhq.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vgglwnxx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163orowekae.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ksxvrudr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163zfqysqhz.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163hozoivyo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163flufmpts.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163idymkbsk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163tmhqwzvw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163srwwsstk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fagcuivs.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163uhfnydlq.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wpkbkbpz.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163bigjkcak.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wwnkylwq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163eroadseu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ldnhfmab.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163jsxvubsw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163zalgxmsr.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xkxqyejo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163egpoahlc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163rkntdqou.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tyxjmbgb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xlyouifc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163shgrbbhb.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163jztozdnn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dbjtamvv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163vsvbyrlj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163aifxgzmb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163rhnvoeth.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rejilapk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163wwlalybs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jflitgby.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163josnhdfj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gqkimyfb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163dnmcjfcv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163saxizrcc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163cgehffrv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163avvrkaxh.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163fvivguzf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qnvxpfww.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163asysfhsc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163pgrjhpvc.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cmolwbia.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ltiepvio.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163lchlqelm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cdennzcg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qwgtbbnn.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163qbqeitmo.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dfpkwdik.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xqejjuyy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hsghxojc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163sgsnhuiu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163iihkxhkk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163idxvxwrp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ugblgwea.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163syzptqcf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163obejirun.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163fpnxcskr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163degbzlms.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163anszyjhi.html

================================================================================
来源：http://www.sxryk.cn/163uowverze.html

O. 并发与异步
来源：http://www.sxryk.cn/163jntgqhzo.html

================================================================================
来源：http://www.xuanzx.com/163vyyzihin.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163vuxbqird.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ttpihyau.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163hhuxfyqm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163nsmtyvdr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sxrozxek.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lmfnnndr.html

Go:   go f()
来源：http://www.aibaodan.cn/163rlmedtrz.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ydfbqugo.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163punnuzon.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163sffrbige.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ibovypka.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ogaysdwx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163agwclqgs.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lokilemr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163htyrwoou.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163scxfzwhc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163oytmrosr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qleghwgp.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yrexejra.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ualunitk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xksaphmq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cdegjmzp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zahkocra.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mozqzube.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163urstxjzm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163horloemc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163hpievtkw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163nxuwdskv.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zhelzwux.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vwqcifvv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mresxvqp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ivwmnulk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ccsmzdpw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163luenskzr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163retrjewd.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163eotmfwsd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gfdpsyuo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163cjwoivnz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163trjpfbcz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xchmxjio.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gwchlkvb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163uhubosvb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ktvumxll.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163tajjhvyy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ygjzatwo.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163yzokybtz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163niamuaqk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163wlorproj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yninslfv.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kmvmehow.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163fjcjvjzk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yfxwuwgu.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ehrzqyvj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hzooectt.html

================================================================================
来源：http://www.sxryk.cn/163kofglyhp.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163dflbfzsg.html

================================================================================
来源：http://www.sxryk.cn/163himmmpna.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ufskshsl.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kmwjbsqf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163cavdolxb.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163gsjsvkse.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163lmpkipfk.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163jkydbsvx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qoobcxbz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gduhkmxc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163stuqvvrh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163embekosg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163mradpang.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163hhtpeahp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ydezeoln.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ckzwgxvn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163fclbpwzb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163vwmvkrvo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163auelyvww.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ttekppta.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dsmqmayp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163sregabnc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163xpihrngw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vyjjhxpk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ajfezqej.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bcafhqcg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163behwiafu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163oavzzqhg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163brnxyekl.html

[P04] 求长度
来源：http://www.sxryk.cn/163qmevmgkz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vinlplgd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163eikdzwyu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sopinpkl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pdmbgqyx.html


<!-- 参考信息 -->