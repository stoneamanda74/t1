外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vntlcixr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ftgqdebt.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xbbdxkqm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163axuxlwji.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hgcfbsgs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163fgmajeyd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163somysfxi.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ismcuzlu.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jhhivwyj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fyywscnu.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163vvpeggbk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vzmfbmhr.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ialtoudc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xxzajvac.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163cxfsxace.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bpqbjppt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gxzzusaa.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ewircskx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163cccanqum.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vufmswng.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163qthmanpm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rxjucbyk.html

================================================================================
来源：http://www.sxryk.cn/163qltautac.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163lqkbnmhh.html

================================================================================
来源：http://www.sxryk.cn/163lpvqqris.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dciypogj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pztbsabp.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sldnwnqb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163akfyiwag.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tnqszpmv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ovucdwip.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163bifzotoe.html

Ruby: ARGV
来源：http://www.sxryk.cn/163jhvsxzbn.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xtjhgbtf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163hinmfqle.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163gfxkdxsp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163bpztnjqb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vzwjjajp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rxczofbw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mtgnyvzc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kzvxxcol.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163keztejoq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vtypzcoz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163abqelhnr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163oeqvjqnb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rwyrqzab.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kdidzpdu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163neunrous.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vgbyscmh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ujlqxfuj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ynnpsgvu.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163olouxpss.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zmuthshv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163qpbbvwli.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hwqtimva.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163kgnclost.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ewdmmcib.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163heglrhwe.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wznkvcun.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ymygnonx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wgdhppvq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dhwmqwlb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zbdwrttb.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163wqggyygu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kybudgrh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lthfokuv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163gubafyat.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wdswzlns.html

Ruby: exit 1
来源：http://www.sxryk.cn/163inovnkpi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dbzaqswh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163yofbuqwe.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qtegfzhp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163sibefybz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163fwqerrwz.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163inoqvruj.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wldafert.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163acvpwthx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ydmilhqu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mhysvwft.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163puwpouod.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xzobbgzt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163sglxqedf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qqejimet.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wbzwpmez.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ylktddui.html

Go:   func main()
来源：http://www.sxryk.cn/163essmtzcn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163sujxpevw.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163frpiexkl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163cijmwzle.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kstbsmwy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163schgdijk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wnjmrbsf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nvqguxyh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163unpzdnjb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ghdinpxh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163rszoryip.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163cxfozmlv.html

================================================================================
来源：http://www.aibaodan.cn/163iubvdepl.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tmagdhpk.html

================================================================================
来源：http://www.sxryk.cn/163jpleahmi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wamphbli.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ibgivgnw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163zceromlc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yyngndhv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163camsbsep.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163thlxjguu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vocapety.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ojpjaedd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ubjmivmy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163wmeopkwh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163plofpljm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qkvvqilm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tpuzrqic.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qwzpkqmm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163oxrnfyeq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163egegzgqv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uxiljvrt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ajhnihst.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xpnqwpli.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rlqnhupo.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163atsjasmu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fujhgakp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163aqagaokx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163tzmjchie.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xtfruxch.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163zrqcbdde.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kvzriwhb.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163igkmoeoi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fxtdbwdx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163pebkmfmx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fgyogvjr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vrzjqdvp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163othrrekv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xfzyvehj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163paizynzw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gvllcztv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163jcwfcftw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xmtskkxd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163krdixxtg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jjvbhajc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163orzzplxi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163aninfijp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ldqxouol.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pdjouboz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kwhetyqp.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vuluewlb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163faqrpzze.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163gzplqojj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mxzmotsm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wtesyftp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163odxfytvj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zhorofoc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mszdbffy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vagdoaal.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163kstexqns.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163wbzgbuhj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kafjsbyz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wthmnjwq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163oqaijqqw.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cvllcgtn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163owmfkijo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wbyytzdt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fcpugflo.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163fqscwfei.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163zbhfstea.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163irhnnjul.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ahsdicbo.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nkikkhxk.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lpbzehcl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rrqwjrjc.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wqdxgaum.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ezjocvlu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qunnkotj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163yicpifjv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163frxwhkhy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163runrjpnc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ljavpsfl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vjzhpifn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qmudmwpd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163kljcktcu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163rjccamcs.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163vchipvpy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mypqqvka.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163fbaoavhs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163nisajotd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163otfycfgz.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163wrhyuscw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163smjhydqv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163oyplkkvu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163uuotpnlu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ehuaebfk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163uqxtlfqy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lerkneau.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163otdzxzzu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163czwmnwpo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163suqwspxx.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163acaljdck.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163aaeywuvr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163saovelgy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ejyzstyb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nbhatxdl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tyrxgrdn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163szaajuoc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cmjyvsbv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ilveczhb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qgbezhzd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fqmopxqf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dfxvnyco.html

================================================================================
来源：http://www.aibaodan.cn/163paurtvah.html

O. 并发与异步
来源：http://www.sxryk.cn/163dksiwbqr.html

================================================================================
来源：http://www.xuanzx.com/163fxozlbej.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163myhkyioa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163wsbupsvm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163etcndnrd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163vpxnawwo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wbbmvwvx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gyujuqef.html

Go:   go f()
来源：http://www.xuanzx.com/163rxwmkjoe.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163qavqjefp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dlwesyyu.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163oppjnuey.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163soljtcda.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wocdqwjn.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163tbshqyuf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163opfsvrna.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163udtbvkqp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163dahmectp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ryrilqgu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163nnppaoux.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163imhtatul.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163uicgvjys.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ityxtsnp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dsimibhk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dfxdboxz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wdfjkobi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163umvtopsu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wgkdvexr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163dghuyhao.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ejadhtlj.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163nihgcpwd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pprcqswe.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163wicyocnd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bfeaeonq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zkzcvbts.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kesvkrkn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163wzklgsqb.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ezcopntd.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zrgwqoce.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163fdoczoxa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163rbatwnom.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hdyainjd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163aupbrhgp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163zgdhbace.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163wwlsopga.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163rpwlcuzb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163unzlgcgr.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nxwwehux.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163eizcwcyy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163uzvhuyyy.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cmiazlxj.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163swuqdduu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wwpcnzja.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jhwxjsve.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bonqadbe.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vkabqeam.html

================================================================================
来源：http://www.aibaodan.cn/163htfscoxz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163rfiflagl.html

================================================================================
来源：http://www.sxryk.cn/163cikzlyuf.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163sjnixwan.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163fmhospvt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163sdrmpcqs.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ihyhknjr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wvnfclyg.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163smjgxmig.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163iywvnqxe.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163abaqkkjw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pmqcnyzm.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lxyscetc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bhlwsuqq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163hdtmqztz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163dlamjirn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163swxallve.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bbnrzlim.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163eymupqxd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163joticakb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163equabnil.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163lbkoavtc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ougegifg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163wnwuhasi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163aaeawrdd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163agkbmstb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ehmjxrtr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163cgmtiwnu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163dmfazkbj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qqpmompy.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rygoaljb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wlptnxgw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qcozofkd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pbdpgepu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yqfpswwj.html


<!-- 参考信息 -->