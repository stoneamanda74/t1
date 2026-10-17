外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gkbbqjae.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163lampfryf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ahkubrlr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nwubeuaz.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fmhqkedd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163oksmsoyr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xlfzivqu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yjvepqoi.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gtbjcalt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fcpccmye.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163thuhlctt.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163vxaruvzn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163vftxamyx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tukgjokw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163khptkwuc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163epobjalr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yalmmbmb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vgesvjjn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163shmixgmz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163swmbrsqf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163tfcvfwwb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wiuvrkab.html

================================================================================
来源：http://www.sxryk.cn/163qjfdxpba.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zmcwynel.html

================================================================================
来源：http://www.sxryk.cn/163cubmhpky.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163msbqjkgo.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163fpldoxbq.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163nakpdczy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163johmfeyj.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jitmcgew.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jjaqjief.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mvhhrzqj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ttgyichd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kiljvlzc.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163youlkzua.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kblbaced.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163whcyejkb.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163onytbvpp.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hlbuxdij.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ehsrmotq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163fvykhhqh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jssckiht.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ddkgnond.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163lizudjku.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163entrdqsx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163iqkqtwen.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163atkgqipe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bhacasqr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163jztusuku.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163boausvuh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vatrouif.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fuyeutnb.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163oxopefym.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rsvlchrx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mmptdzmn.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xwvkndey.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163cjkvwfhg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163yunawdlk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163aeatlkxh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163npgtjhks.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163atnfuadk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163yzsyhsoz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163jjzxjwhw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zyzuvjlz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hjnzywxe.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163isaenoyo.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yeznxeis.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163bhzwcskw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163exoqsatt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163huehpimw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163trtrfgrm.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ixmdeinp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xdjckqzn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163olqsbweb.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163doipenrj.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163yyglxppp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163iwbbnidf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cvkarsjr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163eudxcjjo.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163cambibwv.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163msazayrf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kjzqxnud.html

JS:   require.main === module
来源：http://www.xuanzx.com/163bapumjkw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163jraqgrbc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163egskfukp.html

Go:   func main()
来源：http://www.aibaodan.cn/163pjcmiymg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tcjpemmn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163abhvwldu.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163tjwzwstp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rwvmqtnq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163gxgujxym.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163axtfcaov.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163eylgeutg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jmdfqsfc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ktcibthk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pvbpyart.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zdtbguqt.html

================================================================================
来源：http://www.xuanzx.com/163ugtxgzvf.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163qrmuteno.html

================================================================================
来源：http://www.sxryk.cn/163hqfejbtg.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kxciqfzi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wepxjmgl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163qceocwmp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rbswrfpo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hqgcazav.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163swfalfet.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jbydpzbb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kvgqhmpu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163krnouyfk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163vzkvzoqy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bhzlcfxv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163bfasakdc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163etbisblv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tgyrivwc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163duszhpsw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ekatbess.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dddrnhfc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163smorgdml.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mfhsloib.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mqlxguuo.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163oulcyjmx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ygaxlkqx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ybzmyeff.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163gtecapik.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163yszvkzsk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163iwjkrthc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jkhnabhs.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bzdvpyoo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vrgpgcsx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163kggzohjn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163execltiy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nkftwflt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mqvwjhgk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lzkcqfms.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163unntujar.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ejlmbekl.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163sdfyumve.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ykcpbolo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163nhbbcrnb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163erjyjghr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wqauryrn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163thoueiyy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gpuuccly.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163brdnwmqw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163cvnsbegg.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qyjnefcq.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ycvdverz.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163akbvutnc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ibufflwx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cgettqlj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lsvweqcp.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163qogzcajf.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163iwovztgk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xvhpqknp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163vcxksipe.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163lospfmgq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163sjddadhq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hbumwcio.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163btrnlkek.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163igezobpw.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mlazzwfn.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163nyxosjps.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163yxenpkst.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163pgsbifkt.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lbumukcy.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lrtehkoa.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lfiodtvo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cfxrewbg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163jqrduiiu.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163jdxichwq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ijivitok.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rysusmio.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163fekhxxmu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163axcedues.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163mnikqyhi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163aeajaalp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kfsppjag.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ykuobxzp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163xaspvmwx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ictgtxvs.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163jtqopmyq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wyjjimhn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ejwjigyf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163blnciwqk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163evinjsro.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163cmvexdno.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ovrypwtb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163sfkqtowk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163otyzzyyy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mndrbglz.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vycvtszc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163nvbzijbz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vfrqymhv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zvhxljrc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tnzdmpxc.html

Java: // 手写递归
来源：http://www.sxryk.cn/163zbvctohy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163oguwwncv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163eendwmhx.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163sgcgmrvi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163sljjehmb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hodrvazm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163krhwwvvw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163aihhnvaa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163snwxavqa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kamwxqur.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163vrtjtsxp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163qzpuvnvb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kmwspubg.html

================================================================================
来源：http://www.sxryk.cn/163xjjehgrm.html

O. 并发与异步
来源：http://www.xuanzx.com/163nfhkngkk.html

================================================================================
来源：http://www.sxryk.cn/163xzxtbpwz.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dsrrkaub.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163frxsbuza.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dxgdrwqt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163sekxvwhx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fdgvfyau.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gjmozdjq.html

Go:   go f()
来源：http://www.sxryk.cn/163wzvetsnr.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kwsagtgp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163mqnnmrap.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qaufqjqf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gdvouwcz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163umddzxea.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mlesuqwf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lrhgngof.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vnbvxocf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163dxnkhqrr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163szzjojiw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xzrgdcpy.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163sagfrwrn.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163uschihod.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163xvehqgym.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163csupyjdn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mlujqtgs.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163yyntyogy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163zslrzvau.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163sztbgwok.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163jhtkwuyh.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163jjdbggbn.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163mwsncndf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163xldobjpt.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qaetenyk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163vhajbskm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163namkmncm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tnkgqkkn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163nhctpyru.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dlvfeedg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163uvciyfed.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qqtdlytm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163wmlgwrze.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pjwlkmii.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jpiiztlm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lsdlqher.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163utxlzzck.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163fdcnnfng.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rohdgvww.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163fbvsovhs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ieiutpul.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lagpkngu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bjflnusu.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rjxpdaer.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163uelqrvvg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wcmcwgvj.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163llscfiml.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163wnsktyup.html

================================================================================
来源：http://www.aibaodan.cn/163obmlsqod.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163kgphbfse.html

================================================================================
来源：http://www.sxryk.cn/163nsurefle.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163sqovsvfn.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zduhdfto.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ymobvddm.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ccijyzbk.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163yfxhhykg.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163glocmhxf.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qiopcrgb.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163syzywhar.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qboytxgy.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163vbkqmntf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163qntwkmot.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163krbmwxbr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163plcinift.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163yvkygnia.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pobmzvgq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wwdoodib.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lmclanmp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mzclufvq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jcgapdwf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163iqxiiivv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jrrsrqkb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nxucfhun.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ysnrsoon.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163kpympxqo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163querizjg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163wowmozdx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163kkxiqltq.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rlxcayoj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163wzwzspfh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xumghfck.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163itrewkri.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xmyjtovy.html


<!-- 参考信息 -->