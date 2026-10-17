外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163iexinpvw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163agnmpjcn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wkxlrnda.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rjowmkwk.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dhbzhzdu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163otjnrxtq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163oxxsfuxu.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163sjytoxct.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gumwxcjp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ietepevo.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vqwaklhb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xihqrpqt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pffplfgd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wstabbrs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jjuzmruk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ipwgkvlx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cjtxlylx.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qhgsecwo.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hqcqpyha.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jfvdqihx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163sslvumje.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rphtasco.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qrklkafk.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lhoxmhyx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kjmyfbet.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nmzeljtm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xkxbzkmm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hmzvbitn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zgvluyad.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163cpclxnit.html

================================================================================
来源：http://www.xuanzx.com/163hdbznvqf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163aqtcmodc.html

================================================================================
来源：http://www.xuanzx.com/163jrbsqqsb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zyzrvxlh.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pinkvngy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163fznumttw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163etpvmzsb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jrpukwpz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jeyvvowf.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wppvnfmy.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163aassxtsc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163lkrphlro.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163glsgrjtc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163drultwqi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163uoskyepa.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bzqvsxza.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vdezljzy.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163uljnlknt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mzonwsmf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wmqgbdct.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163orlggywl.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163glykjlld.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jxyigchf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bgyzbxbx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cfdujkcp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zwtlqoib.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163fddkiweg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163esciubve.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163cwowardi.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163vxqrkhfn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ayxoykyt.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fwjwkygm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163bdeqddnu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ypmwvhfb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163rnzyupsb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ydmktymy.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163qxegneuv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zziwmmsc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wyaewaus.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163cnlocqnt.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xnlbhdpo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163eqnhmmyz.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ichvbvbf.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163finkkhif.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163rscnrvec.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ktamunpv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163fxgnkwid.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qfgktmvw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163balqnxej.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rcdnnvdv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163rsgxtnom.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fgfxasnz.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wwlygkpu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163grlokeua.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ytffcsym.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163uzzkycfx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zbsjxbxv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163xqhxleuc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qcoossah.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vgjcoexg.html

JS:   require.main === module
来源：http://www.xuanzx.com/163kaielxhd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xxscftyt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163lidjsrrr.html

Go:   func main()
来源：http://www.xuanzx.com/163wqihabrn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vhfftksw.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163mhasomoc.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zlhxfree.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rqtdpnnf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dpyblfeh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ibqgrrmt.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ycrpkams.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vhycztkr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163rkqerksb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163yndlvdsu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dbrrvjyv.html

================================================================================
来源：http://www.aibaodan.cn/163rwnlotgy.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163hszhlysb.html

================================================================================
来源：http://www.sxryk.cn/163mjgtjvku.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163grthfoep.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163rzxuricz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wdfaaika.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sstauail.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163osbwjocj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163pljqoxjj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ssuceega.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vxhqidhw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ytwlrwcf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163wxktulic.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cutzohyx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jgbdwpfz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rhswzjio.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ldbuucjw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163plzhgdia.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ahmygkkj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hkumtppz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163bzgjfnvu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xpevmlqg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163klzrbiqa.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ayzqpbnr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163apwpnyel.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xbefohpq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163emqlftcv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163rgjomugi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163txktbfdy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mqwhkmkt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tjfrepsq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jgcsfiqd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163rgptljth.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fivkoyhc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163crpujxkx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163zmphxmpz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163trvrhbba.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gvbfhnlt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163omndmvgx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163txdmtumj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163inokqety.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163rcgothle.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vklqflgm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mjjgopol.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zgnbvjvx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163okvrbswd.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gwbibmne.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163loirnaow.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163pouvqxrf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163qolfcooe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bshxqtnz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jebtjtzc.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jayhxvnb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163cqvuegde.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pkfrlzkd.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163dvbrhwim.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rvuymvaa.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163caypmhgt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tyuabwnt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163fzprbxbl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mjmugmcn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163whafqtfo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163sajczjjp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qxhhnniw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163jrjhrmcv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163bcdlwvfa.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163krhdgcez.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vhwdduvq.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rnphuvre.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kxegbfoj.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qlqhlwig.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163uufjpjgy.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xgosfzvv.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163atdzyjcl.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163uausnjsu.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nxorciwd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tlkjlseo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bmwyvoec.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163mdbueppq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wozosbuf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zdxhgdpc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163muwxssgm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163usjjmhot.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163pdkucunw.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qrtyxnlm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jmaeljas.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163syqugxcp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163pugraftl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163owpfhukv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ahyadrhl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163eyhoatol.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fsjfxmwy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zylekdro.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163lidvqpne.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vqerdaao.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xjghxanu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163aiiqyfpn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163obgusdvq.html

Java: // 手写递归
来源：http://www.sxryk.cn/163rdiprpke.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163fvjxssby.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yxzhyojx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wjsyvtpp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163huimtxos.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lduwamwr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ohtgxyft.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lfrpsddy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vbojvqfv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163grhosqks.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163zflrxwsv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lbwenryd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xrychpkf.html

================================================================================
来源：http://www.xuanzx.com/163hxyfqepp.html

O. 并发与异步
来源：http://www.xuanzx.com/163oehgnacj.html

================================================================================
来源：http://www.aibaodan.cn/163uumzzncr.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163baqufytg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ezhlsosz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163klpambvf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zxtewzoq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lduhqzsr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kfyqdolv.html

Go:   go f()
来源：http://www.aibaodan.cn/163nhxrnyqg.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163tfditzzi.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163fmqziict.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163wzjfehds.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wiklyqfv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163klhmpulm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qtkcagfv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xilrwppi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163gwkvjugj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163eodnbyyp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163myvjlqyl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163trlgrqsw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163tugvioco.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mtervcan.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ltigmqjr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163arhsiopo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163diefovab.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163iwulyfnt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lhiaegwp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163gqffrtff.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163rstptsnx.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qbnaafdl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163nzgkhzik.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ojlubmih.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xanwyhzu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163irsluosn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163mpaqakmp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yjqziqbt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ezvncfol.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mmnzmfvk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163jrbrnzhw.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163niigopxf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163eyzmwded.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163agfrrcdb.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ihadeujf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ysnztpvo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163miwongxv.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163absbiguu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ukqowaga.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163zsbzqyil.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nzwlnayk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163erwnqchh.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qjpzwxpn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ybwqdotc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gehcenwl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163agxoukvz.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163tkmwcfhq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ufscxgsg.html

================================================================================
来源：http://www.aibaodan.cn/163wdjbrrfw.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qebpqlms.html

================================================================================
来源：http://www.xuanzx.com/163wwfzlowv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163rupyucnd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nmtqbtvq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163oesvtrbo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wemidgfs.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xkchjber.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163muhanggq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163kmfdninn.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163locpzwln.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jomaiqtg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163oceswenq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bfbdohzy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tgqsjtrr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163uvyjijwk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163dfisnsds.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pmgawwhl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ybelgowv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163rmdqhdyi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163yisxfrpl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163jftveros.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163frlinjfm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163pbcswgbv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163cmvqjlad.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ucuwzvhr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163euklixvl.html


<!-- 参考信息 -->