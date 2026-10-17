外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163iporwefy.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jntvybtw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mthrkofx.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163spgwhvmv.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163owhwumcm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ubrhdorf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wjwgxylq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qvhbfwjq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ecghzejq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tvyxscck.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dhoclstt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163tekwcrvw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163rszrqciv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fxdzujwl.html

================================================================================
来源：http://www.aibaodan.cn/163thvoishs.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163pylwxyyw.html

================================================================================
来源：http://www.aibaodan.cn/163oytmcvqs.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163nkygvixk.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zhvykump.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hvkimbbt.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xqcjpjkz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lfmqnmxg.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163kizkuuwg.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ulewxpfk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qjvddsut.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163orqdqshn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xawwxxhp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qaksghdc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wxedeakn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hhfgfjve.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jfjmwvwa.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zbqcnocp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163efkyqkzx.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ccimtdjv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ubkmymfk.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lymmextd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163gqrnyeac.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163wahjwsmf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163paxmnekn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mepfdopu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ydlvbagu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vrquqxwi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vdjvzgru.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163amqxwdfh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163lidkgmhe.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163meuboiwi.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163tiudyzpp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163myjixkde.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ururanxf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163lrfhqvaw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ihdvrwhj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163efgqysrc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kxkthfzg.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xdfcenug.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163pvhbneij.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zwvnsskk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zkmavnxa.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163acauzeqh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163gcabelll.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163aufkaboc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vzhonqab.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163iryzgvuq.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vkgvpjaw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cxlmiylr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zbekdxeu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163bggmdxjz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163scunacxo.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mzkjivgk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163gzfikzgt.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163gbsygaff.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jtiaowgg.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163txhkhexe.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jzezztlp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ckpujxqb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163qcdbrnte.html

TS:   require.main === module
来源：http://www.sxryk.cn/163fgamixwj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163cicuayez.html

Go:   func main()
来源：http://www.xuanzx.com/163gxfwfbpi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ljkdoxpw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zpsozteh.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163bvgzjqth.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163whlphcpj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163xxbiidex.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sgysxztj.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zoaqmwfv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xjkklivo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hdxqjgre.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163nezwnqrg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mrwfhkkp.html

================================================================================
来源：http://www.aibaodan.cn/163vqodighz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tzebrnfj.html

================================================================================
来源：http://www.sxryk.cn/163adjmcnjl.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rktfumfj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gjlhegsk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163mcrnetiv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dstuwrpx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163bgsmttbf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163rrfmzstj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jgwcachx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163szfnajjc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163akugkqzx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163hfgzqlyi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163paaqnbeu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vprxxhpp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163oklxbgzu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fjqpyolc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163coeyrjwo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163yvzmpugr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cnzgczrg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163zsxmjtfu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ehufvglm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tjowcvub.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163uvnzisvz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163omjfraqa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vytbpaqa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163sdwijpzd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163azcbeoyb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xibksnao.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ilmdxaae.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163thpvkucy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dlyuzmbo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163plssekth.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xvjsyzwp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mvkssdtr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163eqhaxtbx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zxuruxox.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vzmvohuj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163bvydmpha.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xefdpmnl.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ynwgcjas.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163iiinpntt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rpgbelat.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cxemaphy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163amckdnjd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kgrqbkxf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163pwpdtmqq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vzxtrghh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163apbeezbt.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xkyzfexu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163crjrorqr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lntmfkzb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163smdilyym.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163nomqmfxw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163okkoaroh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163dthyqmkz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163donghqhc.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163bdsuoito.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163kkwpqibc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zipeoyyo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163lnmcpxdt.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wvwkgvdi.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ufqlopza.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nxbpkapq.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ygefpsft.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ptakiadg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163siheksjf.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xdyflvpo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163peudnopu.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tldpgbwn.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vodnfhjg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163avsvstgh.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163fgnqoosy.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163curtqubq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163pnhsnntc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163uruwbgkd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nmiruogt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163bplydted.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163imqjftnc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tmrzhimb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163yepywtqg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163sarpsdli.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163behjnucb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wzljcidr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163csxivnjo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rabjaxyb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163awrvmwwh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qzbumgdi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163abuarygu.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jbygmrqi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163yjnhfuch.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mdwdydpb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163nhfymxmh.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hzemsxsv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163eitvqyqo.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163plcelvkt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vaozyojr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mjitvvya.html

Java: // 手写递归
来源：http://www.sxryk.cn/163gmignfee.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ybzzekld.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xfzyiuxw.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163oxnwwskc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163qnvavtzw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163tuincacg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dljqrqdg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163samxnvnn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ylyammrg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jkyhujhf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163palohhad.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ntzirvrd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uytdohcj.html

================================================================================
来源：http://www.xuanzx.com/163bhxlaser.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ewomdaoi.html

================================================================================
来源：http://www.sxryk.cn/163aplbzgzq.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163yihycofn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163knpiarlx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dbublied.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uosynwaz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163joxvdsid.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163uxabrznh.html

Go:   go f()
来源：http://www.sxryk.cn/163pacnjwih.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163mmuzqnpp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mpxhprcz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mxbvkoam.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163undeqhgt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ucpvvfwe.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163enykbdid.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uwaxoszi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ikqcvrlz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163jhkouewl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163utvifwzw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gfqlxklu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163uuwzgbyc.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163deytsjty.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163nymfsneu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163uourmvcg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hvmcreml.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ltsuvvim.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163rlzosfyt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163lcywhxdc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163msycvisb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lqdxuzeh.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zvdhhsyp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pbcfbxzn.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163afwqlqrt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163dbmwuqyy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163apeqvdmv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gmbenezm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163tmdfiijd.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pjvnxqvp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163dnlfveyp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hbxonccj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vpbbixfs.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hgyeoaut.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163txagtfbm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163tnfqhnns.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163pouzhyut.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163arfonsqc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bincihjg.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163hhpgfqgw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163afnvqfmc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163wapmqupr.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uoapyhfb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uhoudbdb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163bynuoskp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bpngypoe.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vwzonbta.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163wxjvggsq.html

================================================================================
来源：http://www.xuanzx.com/163euyrhkrx.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hmkzkazz.html

================================================================================
来源：http://www.aibaodan.cn/163tguliuhm.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mxqlghrp.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yjrcafjj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zmlbnaqv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dfhljpoh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nzfucurz.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jnygjegp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163afqwmmlt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163tetepnlu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jayvdepa.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163pcjesuwk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xecoymur.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163bqgektnk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163iavzkjxs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xiynhixw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163cgrkyvry.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mxmmhkpm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163yzrooioz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jrncpxew.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ypjtrcpg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163olnpfjoe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ghyvpnlo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xpjzkalf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163idgrtaoh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163vxuvylmb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pnnkrdbh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ivbqzrxt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ssvycqoa.html

[P04] 求长度
来源：http://www.sxryk.cn/163xzdnybkr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yynrgjxz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163aalvkvvf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eevgzpwp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ryuoslch.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wgtclmyo.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163wnhaewjv.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gyzlyjpw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kovaoxin.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ivjbuwzu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qmcxybju.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163epuzlhhx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163mebhzanp.html


<!-- 参考信息 -->