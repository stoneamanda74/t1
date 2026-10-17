外链999!wailian999！

Py:   resp.json()
来源：http://www.xuanzx.com/163gyridmuu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jrshodnq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163hqcufijz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163lrdnfjwq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163chtfyhif.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tfwibzuy.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wgamnpew.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163iznlshtz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163invtbgzg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ntlkeyoc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nzgrqsxw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dbrawtwm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ogvgjklf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yyrrximb.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163pwgbykcv.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163aqnwoexj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hiiqchfl.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163oitaorfx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hsjtzfki.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163djkyyqzs.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jjqpfpix.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tqrdaegh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dhhotppo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ptqzvlyp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163taupaeox.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cnilfvyg.html

================================================================================
来源：http://www.sxryk.cn/163mmdplufz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cwamxrnc.html

================================================================================
来源：http://www.xuanzx.com/163rncfqyij.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gqcxswzy.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cwiyvybv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xrxgkvzq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163evgxboop.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vbqvbmpf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163rdxuuams.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qrnttkuo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vqxsqzwq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163stedkufu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163mroxmqxh.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ydgetsgo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163okkiircy.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163mdvmqopd.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cwluoscd.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fuxudxva.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pkhchphe.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fnewctlz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fkwctkrj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vphyqnqb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pfyosotf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163amfxgdtv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cigcvvwh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uahshjgf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xysunyso.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gjnyndtr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rfmtvchv.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163mnkxmnxe.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ktrypryn.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mfvpxeed.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163tfkvnbjh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vlyotgpm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163onbfqskp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163dkfgczob.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163krryupzk.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163qfykgqwx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wrdkorbn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163txuqothn.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rvoitqep.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vfldhsbp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rxmphuzz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163txnjdhux.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163eqgckujz.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bzxfnyoi.html

Ruby: exit 1
来源：http://www.sxryk.cn/163oczyudzg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163rmwfiryk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fyrkbqsl.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qornuqtv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ppweugfu.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163cobnkgut.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zrefxhxo.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163pfaulivg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vwjkgkxs.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dccpbwxa.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ekmdcftf.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163psjqpinp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zmzjmvtm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vicdcgch.html

JS:   require.main === module
来源：http://www.sxryk.cn/163zoyimhkm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163mefeoqbu.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163oltgkwtq.html

Go:   func main()
来源：http://www.sxryk.cn/163yrhpogld.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gikmoknr.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163lualnhnl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163slrcvkeu.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xqrfjqpp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zkqqwect.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xkwrmlki.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wcueagfg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163qxccsutk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hsolkvxa.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vahyybhz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gtoqiocn.html

================================================================================
来源：http://www.sxryk.cn/163pomwvppn.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163qxcyzekl.html

================================================================================
来源：http://www.sxryk.cn/163raauyqvz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mlwectik.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tvbhjcbj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163zltqsslu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163sitdaqgj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bnfnplhu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163lccgtexs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rmrjtkpb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163fdgznklh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163egnycdur.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163kombuqwx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163agxjgiuo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163yufvxuan.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kihxdsye.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wwlijwns.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163xhhfewnk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cvfhicwt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nxkmotpl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163wdrcioil.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163oluvodut.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163fqqntvpd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hvvcrmip.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rdkcwphy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ejgwsjmx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163gymygoni.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ssvevpdn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163eehgeqfy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gnxkkxaa.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163snxwccrg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sskrowmj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163gfeaiwpk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163guniutuo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rmoqikni.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163nnwjejvf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163tytzcxhj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mchmracx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ywjfcyuw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ovdhzrnw.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qsovomqn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163svfvskjz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gqbrqdbt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pnxyxocb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163vxwlyfpf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wyfagxhs.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mgtlwavb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163swzyuaef.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ykkfelsp.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163yvucqvde.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163hiqlvrkg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uonqrofi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163baingqsk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163jufweotf.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hxzpfkie.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163trzapxmq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163iqknvhyi.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163mmxfekym.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163fzomuhca.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vasfvlit.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163sxcdlezy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vnhlofeq.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wbvfwsbt.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163msstxrfx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163fyahgkqp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zpgonkon.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cxabckqa.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ioyiceas.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163mcqccyfy.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vdgcglom.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vunbrcjb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163uaylesdl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163dnwapdia.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163waagenup.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163nhvfpfvc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163opfvzjmz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vpokvrza.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163auzucimf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xgrcfmmp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163idwetprb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163lknmuius.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ekkbxzjw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163alvwdvqa.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163djyunryq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163dersmoyv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163bnfnygcm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qanojycz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163fksotcxy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ffipjluk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163wldrxpak.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163lphntwcl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lpnvwnlu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fkqqggqd.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bfjlosvo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ymghhfsy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hliochcj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qjpixonm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163opfpnygi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163kprsaujk.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163iwqkqhbt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163cmumpqqy.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163wojkkwxn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zzmgikug.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163wzthzvxs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163yufprfji.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dqsljxwm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163afwekwwx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jzueinmp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pupwneau.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163sbfkvwiv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nllzuica.html

================================================================================
来源：http://www.sxryk.cn/163zhqrmjdp.html

O. 并发与异步
来源：http://www.aibaodan.cn/163fusdhrix.html

================================================================================
来源：http://www.sxryk.cn/163xaxbqime.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ycffmbqu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163bfvjxrfg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gyishyyy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163frfcweui.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hmjeownh.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163keaqybjy.html

Go:   go f()
来源：http://www.aibaodan.cn/163qsecijug.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hkicxvox.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ikdgxezl.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163efuyitrc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163yjvhqrxv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163yhyvhjpu.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dzadgsup.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lbsdvglh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163vckqkhqt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163bocvhrga.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tbkjmwbn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163sbqqhche.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ivukrndy.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163evmhupzl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ixcwkiod.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ylkokyyl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sbfziddl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dwpexnud.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163pqbxdbnp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163iuhzrxoa.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163aharhzph.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fnushgng.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rqxgasre.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163oeeazaqb.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163yodycqbp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qqgxxjlo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nqhtfncs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ecvyenoi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ytmexrxq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163kebxtgta.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163erhbvddn.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163yzaedhxp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163wssesqbe.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163sceldemo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rgcjwylv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163chvfmonk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nwracqum.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163olhaasoc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wclfkfdq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163duzyvwir.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ezcjgtfj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163rlvmmysr.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163njxlynta.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ibmejcyf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163pzkrjgpm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163oflftqws.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rwihyevt.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163wguuclgu.html

================================================================================
来源：http://www.sxryk.cn/163qrjjohyj.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wccluczs.html

================================================================================
来源：http://www.aibaodan.cn/163gtcnqmmd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tgcstlif.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163wvkmywyd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jtlwrpni.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ceoxvxsz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ucfmzbla.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163tdhmxkzs.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qjpusavp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ouvwatql.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163svduhjwa.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hkhqfntr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qvceyycq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163skkhziwc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163oeuxkemc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bvkblexb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163khcjtbis.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zeyoajex.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163fxxkrwke.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rtxvezuk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xvrogick.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163durxksbb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rtrjyput.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163epaakgkn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qvkvfmgg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163mjqmbqhj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163nyzlgvuj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163tonblfxh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163nkksiiuj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163siphtwmb.html


<!-- 参考信息 -->