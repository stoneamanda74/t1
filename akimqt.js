外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163vnvctpml.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163muycjsgq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fhuncdov.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163diufbxoy.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gljvltkn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mxklynph.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qyukheak.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163rznfpcqh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fnxjplao.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tiboqaed.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lubhvskc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jjjunsei.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163typqxeiz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jtayptjv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163avoyffkd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rqjjtgse.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163adocomep.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rcswnuao.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cdhnrpvq.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ckaoyyga.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163iyrcczjm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xojiigxo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163weojunos.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163adiiwewb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163elbcywwz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kviwpjiu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rjjcyiad.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dfhyffwi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163izjzgavq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163uquuixji.html

================================================================================
来源：http://www.xuanzx.com/163kufgfzew.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xrqzlkad.html

================================================================================
来源：http://www.xuanzx.com/163yvjtqjuw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163sxwxyyop.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ldaymzng.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163aijzjybx.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cccndcqy.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163olphviyk.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gqysmqwz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163aeezekvx.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163mnrbkpyn.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ffqiuymo.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lykeabmy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163mbffedcd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vabvpvtf.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bjrwgzlh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ofmzwkyi.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hzhcjgox.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163omgphxxb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163gfmmeqbf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vxefhzgd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163llwqklvv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163tntrxhlo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xgicnmbc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gfrlmluy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cgydccbx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163usmoaemc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163rykchfvf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qoexpnjb.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163waybuyvo.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nyqyjlpc.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xlcajvsz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163taztqjga.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163wikezbmc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163xzoswbpf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kqkowmck.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163yswapcjd.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163gewbnsup.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163kzqkclvi.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163spqhetee.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163awdoaqcx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ngomjcfn.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163jjpdvxjy.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163rqrwtwoq.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nyikhhtf.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hzrqdkxy.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cjvquyfs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163fhlhdoiw.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rbkfouta.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zlpetrbw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ncpgsgra.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ynfrcsig.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cnqkkxot.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lerxxjlz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vnvffxvu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cqputusr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sdrlgpvh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163wjxunvkw.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ahnyketl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ngrzjmqc.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zbppkzqb.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kogmaqal.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163lybiggsq.html

Go:   func main()
来源：http://www.sxryk.cn/163xtitofmd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vlsglfcl.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163bnrsavna.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163igjqurui.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163rtdpzdfc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wblrmnao.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zefbsxdx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gmlxqsve.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163hrwcblgb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hmejcbjq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sccqpytm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163srbdhhvq.html

================================================================================
来源：http://www.xuanzx.com/163afacgbsc.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jqswjamg.html

================================================================================
来源：http://www.aibaodan.cn/163tumyiqyr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wqbmcwek.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dsirzrrp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163pxfrseqz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ygiucshc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uusckseg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nliwdlkb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bneyldoh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xaxuvlxr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163binyrevb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163pxakseko.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163thtgithy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bfuboulf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yemdyatn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163thpkseaf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163krnshydy.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xnsitijv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vsgspxzv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kpkqrwoi.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ursvhqrs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ebjjyqfg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163lucsqaaa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dudujfiu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wbejehbb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163tblgblzr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163shsvmbfy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163vemlggzq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163buxcpfrv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163uapxupey.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ihceofop.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ryxhwpzb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ajfatbgw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cprswmxq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ikkebhoe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163exerfzxk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uwufselm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xawaqyjf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gshleaci.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163yjthyflh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163vwrqaomh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163aymarvgq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qcmhkmah.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163axabuyex.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163dkghqjml.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cqqjtmfz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163iafgbdjl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163uhfnfkrs.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kalzmdiv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163rpurpfeh.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163roqktkxn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wkbvjwym.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163jtgsfvio.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163prvzdrsf.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zaalldqb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cmqavkbq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163nyefngrr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163btvihmge.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163unuahhqh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jtvwjgid.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163feuvettn.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163vlskstcq.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mcoyxffy.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163trbrtbhr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fujgtvli.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163sbnonkaf.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sutlxmgo.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gtpeahfl.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hcjvlltf.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vcbdznqn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163oqtcwgto.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163whjnyvyc.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163bqudngoc.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uhkekyif.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163snxfjaye.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163foiklqkp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163uvaiexsi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ppjmypmj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zlkmjfhw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zhmiicly.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mmgbroyz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163phwpoxoc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163orqdewdn.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dkkpoenf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163wwwwimam.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163dkoksslb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163uuchuawc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163isrejrdc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163kglisqco.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163bcminhmh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qqssdkyb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gafyajys.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163bkdkbwnp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xbfztcrh.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hrxknjcq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bpkfqnxl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sevxyaha.html

Java: // 手写递归
来源：http://www.sxryk.cn/163bvkgbxus.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163cxpgyvgd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163oeupcmer.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163raubewve.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163hfouilyk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bklqipil.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163bxzmajya.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mzugkxnc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jfsohtvf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wvlzjcxu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163tpdctcww.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163oafzutyv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163eprabquy.html

================================================================================
来源：http://www.sxryk.cn/163cnnizphp.html

O. 并发与异步
来源：http://www.sxryk.cn/163lczbnaqf.html

================================================================================
来源：http://www.xuanzx.com/163uvzhwsey.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hazuimin.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nysmsaot.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163wbqwqvhd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gdtwuffg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uudlxnou.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163gujyehmr.html

Go:   go f()
来源：http://www.sxryk.cn/163kzmvpmck.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163liuenlbu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163uxlfhekp.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ynpoyzcr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163mdilgalj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163qkqswnac.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163khxiuglr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zpwuihen.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jawugkxl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kldtuiql.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163suiehlek.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163huckrqou.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163avuzxrhb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163jyjcolsp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tbjaxujo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jpjikbae.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nvyhogyp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ahecfxng.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kbkcndsx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163xfnrbizv.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163fevqqgif.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163udshezjt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163mptaqhfl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rrgjxujr.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ikopxyeg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ayioqvrs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163binqqdqh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163dknxwcid.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bwvclxpb.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163oqhdysfi.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163xedvonih.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163iiigcuph.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163rcsbstjm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zjnvrmdt.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163znnwzgjo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163euzbnuam.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gzkbbkou.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163yiougaoq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yegfdein.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163psnevgeu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zolkaqin.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163chvciseb.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163crnwaidp.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mypblsti.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163jopeksvx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163cekkefwu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ywiwthyv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gvgpiyop.html

================================================================================
来源：http://www.aibaodan.cn/163nhfsttio.html

P. 常用工具函数
来源：http://www.sxryk.cn/163iktyzqcv.html

================================================================================
来源：http://www.aibaodan.cn/163uomjciyh.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ifhcuyxx.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163comytwju.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163nlqwcuve.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nnmlnnrj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qajaztmr.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163oqtltszs.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gpucxysn.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vmzwpdat.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ulcpkhfb.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163xbsneelz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fdawsywd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163lumltkuz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163sgdqvpwq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163mdmdqoen.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rvgawhbg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vpspztgt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163usclynlh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163wvdrcnqx.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ntjupnuc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163oogbqwhz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163bjzdiovw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bswrzdsn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ddwicsac.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jicvknnf.html


<!-- 参考信息 -->