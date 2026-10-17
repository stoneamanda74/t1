外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163jefjmrvy.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xgvnoiiz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163guguuodl.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ghicqnpq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163blykdrxb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ieddqgjz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163yinmwony.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163sqxfbdup.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ajxrykps.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cghqyrjl.html

================================================================================
来源：http://www.aibaodan.cn/163ecnqmoam.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ouuxxizg.html

================================================================================
来源：http://www.xuanzx.com/163wvzfenza.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163jsilelfi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hsgszduv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163dwlruwdt.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pelnmoan.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bzzputai.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163gkkfxseu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ayqsrgvm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163duhdkgtf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163hjzfafwl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hckdkdmv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163whkudeva.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kukghrgv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jhffxnwt.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ubbneolc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ciwdfcoe.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ybxqdssq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163eihojthg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zmuafhwr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163qmeftqwv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163skvlflbu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163prtlfybq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cvjlnbsf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163giqnqclc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tpyjuadn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163tkfpysbc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163uhgqwoxw.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qmondqqf.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163mgpazasm.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ljugdrtm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163sqytdmim.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mrldxwyg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dvhoxgwt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163piefgnwh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kmjgxjxz.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163igtnownh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163venfomgs.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163foxliiha.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rpqxxdfl.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163dlkqjbkx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jliihldk.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163rnxiamhr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163yfmaoulg.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163dzbacjao.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vmulvria.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ahsdtjja.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ujvfhlnx.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xwmqkoef.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163tnthzvxi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cjsivzys.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ichifxsm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xkjfptqu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163dholiyqg.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163pbyvodou.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163yhallzxh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163yogrucwk.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163qxvqoqzj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163mxrqxfxw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hbjqyzog.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bkxxflze.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hdfshzoh.html

Go:   func main()
来源：http://www.aibaodan.cn/163lkaigysc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163eaeetaod.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rsbliywn.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ntympnxd.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163kotxkmfi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163wgobqaoo.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lurnblay.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163esbphqyu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163usbbtxhd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163wrwucvhk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xaofgcrv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pyczthfc.html

================================================================================
来源：http://www.sxryk.cn/163wnjcdpsm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kdashobf.html

================================================================================
来源：http://www.xuanzx.com/163jorpxrsn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ydjiiqgb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yqzpifgt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ocfxwris.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jsteocyl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163igsejwtp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163knzfxhel.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vynydgzc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163uwssuhrt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163geetojki.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163cfajzrhy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pqyvkwaa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nxplourk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eomkolcu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rpnaahst.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163hmqyaean.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163mloegscd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zxrazqam.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163lyryslrb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ohjjloea.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163atqxccsc.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wxrnvngx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wikworpc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xxkufeir.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lpnpsipv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gayrqufn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163mydojzlq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mbjkkczs.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fyzxvepe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ikjpifdt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mnxtcuwh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qiovioyy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nqddewvl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163magnerkm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tgxwqpgj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dsvhqoxh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nunphsyl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163pppgxfne.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pbxxeiab.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163kmhncsha.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hgnmailp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163oghpugyq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tsbkagmi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163usktznui.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163gzrnvuju.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163csozwwih.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ynomyyfp.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163bkqtxdlj.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163deqjdmck.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kzsfaahi.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fiqqjxkc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163yaqchszi.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163deegiobf.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163clwdhbej.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kpewdpuu.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dsabcorb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163pupkifli.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163zrzpuygp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163yunglwzh.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163plmiwiyw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163eqdxceuk.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163fgabvsks.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163sqrxylfc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163uwldqdvd.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ptxivjqg.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163cpgqsspe.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163airntwby.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163guxamcga.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qviyludw.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163eigldqcz.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qssilers.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lbmojmtj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tvtquqly.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163dmnxodun.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kdodybkq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163rdocodzr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ltfxkzwt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ameefema.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nekotygl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163wbhlpuzm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ijjonqsl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163aquatsmo.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jkbuwvbm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mcaonkpe.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ppwaaznk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mfyyuctp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vquxigbp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163blwqghxv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163uzybtphg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163lzagqtvw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mjmdkmgv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163mgyuvulb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163qorvnfup.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ivagzvmk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163inmfonky.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dnvuyssp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163imejiyij.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jodjhcct.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xzukbkqz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163sfleqapj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163xhgulawl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hpquneag.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ljnbaxbm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zvomxpkd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jmcnwlyb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gpjfueav.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jtwvowhc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163aivgdqpj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163iivdykfm.html

================================================================================
来源：http://www.aibaodan.cn/163gmqxhhrx.html

O. 并发与异步
来源：http://www.xuanzx.com/163kdcphbqa.html

================================================================================
来源：http://www.sxryk.cn/163gxasalbj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163gemavfid.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163gvzfnbgx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ydzwbxnw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163fnjutdga.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zrxlyclp.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163kcaepdju.html

Go:   go f()
来源：http://www.sxryk.cn/163oydogove.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xeqoliqq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163edudpxdm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ocnvffyw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163egejnsxq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vxgpmqfw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163uxnnkrcm.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jczfmtny.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163bafcqmuj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163tsuednhi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163muxaptve.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xwjomylx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163nkadpahh.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mlragycz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163sufmatms.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gqbvzrjv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lesuiqam.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ylghnekp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qmiottaq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qtzxcdut.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zmqkxeva.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163jnezbehk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163tdxjlsdm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163bwvrfdrm.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163yexmtklt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163hisivybi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163icgroaec.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jibuxxjy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wprblnzs.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163nqonhkgb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ubzchilz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163pfwikjeb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163woyqvutg.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dvtxgrvc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bcxkcqif.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163cotsgfmt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163fujyakqk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rhzmjrvg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163hgmicjtm.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ywmfexab.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163aijrzkha.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163yxzsiket.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ejbxleqx.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ocvimszo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163pfecjvqu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gttrfgjs.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163irtvjgrx.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163wxrzekhh.html

================================================================================
来源：http://www.sxryk.cn/163uassjzfn.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163xbqqzznt.html

================================================================================
来源：http://www.aibaodan.cn/163qxptstbi.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163nkpodpoo.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vvrbrpzr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163lkmixtlm.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163impxxzeb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hmbnpjgo.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163zertahfk.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dlkxyegp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163hpuzpmda.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163qrryqffz.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163fnhzpodc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163feciamzd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163apubujsb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ymqvuwhi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163dhwzsxlf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vrjqjnmh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163dpvedlva.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qdnbzzme.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mcyepxca.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163naxezfth.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163iondlnex.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163lbnzawnc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163yscvxawx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qwepnsjf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vvsiycjn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163orxwlfqy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hqokeasq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jazydvia.html

[P04] 求长度
来源：http://www.xuanzx.com/163cwvkrigt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163aezldwdc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qvbevowh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hjateipb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ehtgcbvd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bdlgxhcj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163csfckiwd.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163kjaxkioo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ovewrvea.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163afoxniko.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ccokzfei.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nznnneib.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163kiivnvxy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cygndzck.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ksnishog.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wptjzosk.html

Ruby: a == b
来源：http://www.sxryk.cn/163aqjptcbu.html


<!-- 参考信息 -->