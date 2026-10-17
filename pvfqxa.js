外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vggckira.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163tjosibhi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163sqsjdjgk.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qzjznhru.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dxyoclzv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dgdynock.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rajzuxkr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163sgvogahx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kbsbfmqa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163donztled.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xtxsxfkp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pbjscekt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dpwlkbnk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163efoirwng.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163greazmeq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jkmhsxmt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gfanbtlk.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mamohzwf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mnyvgrwv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163azurzjln.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163mkgpnlgi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163lwgochmc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gjtmgczj.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163rfrenhxz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fyzuhtyu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iqhtmzhs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gdljtmro.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163phcxerqh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ktlbasta.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gycrwdsd.html

================================================================================
来源：http://www.aibaodan.cn/163ntkokhmp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163riizbqzf.html

================================================================================
来源：http://www.xuanzx.com/163simugjlj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rpadzuao.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ltqludmp.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163fxjgxtql.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fhcmselb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163paeqetjf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163akjdjmwu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zyrxlxwp.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163wzfgjxvq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vuzhosdb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163jfmyjnua.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163oljruwsa.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163xgygajsl.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163pgutghsi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qzqtuzfj.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ncsvaoor.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xfhdfvws.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163oxzlwgeo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ncuwbraw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pojlmjor.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vaskzcuw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163aaemiekj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lsqjbisl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dkyqktff.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kjtwfqgq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ozyizvwd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163kvcfpmjw.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tcjsyetq.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dsyriqco.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hcbjjhrf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jhctncsu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xfydxcxg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ibnhujrd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163swvrdanz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fuwxlwwh.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163bjntmiqf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163olpydozj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163diykekvl.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tetcykgp.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163nqxilfsy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163osfyltqf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163otidhkqt.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ijixxnik.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bhysafcg.html

Ruby: exit 1
来源：http://www.sxryk.cn/163glyuaatn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163znuuknfu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163chpezhaj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163awdbpojo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163rafjdlfr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163yogeqwui.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ezznyiqi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wncyczai.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163poqviqki.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bkbhsend.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sczkzvne.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163jzffxfnt.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163osobreqq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163tkxdsege.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xtanvmbg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ikzbjsdq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ghdxtnac.html

Go:   func main()
来源：http://www.aibaodan.cn/163snlhgitk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163dwvkdtkg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zgjsmdyv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163zhjyodox.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xwcbnnan.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wgrbkmlb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163abfxuvcr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zmsaqydi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163whwhjkue.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kusvyhan.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163abiczrrt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163okdclajz.html

================================================================================
来源：http://www.aibaodan.cn/163mbxqbsal.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163bmhcethi.html

================================================================================
来源：http://www.xuanzx.com/163jephefto.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uwxspuxf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163brgctdjj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xbeqlnem.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ppzwkciq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uhhmmpmd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163spglnkpt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zfetgfxg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hupetfcn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163emufjuwa.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163pzcnpuar.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tppnagjo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163vlryqgxg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eojdvqhc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163diwdjnbn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ziqfskqn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ozxyuooo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163chhpuvrl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163eejgszva.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ftmipkgl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163tkwqpvhc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wxwryenc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163escwowkb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hcpnidcl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jgvdcxit.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163oivkjyqm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163keounjzh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xwyvpguo.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qsgibaqf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cahmaruq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ohoqknym.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163myfjkrgv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vhgccyvi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xcayneat.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jcfbpomi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ulgukfdk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163iolmobdu.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ydkshlck.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fnovlwlc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dkuopliq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fmgfnoke.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wsibjodh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163udpdbhll.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wqhctlrb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163nozclhfa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163iriwhozb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fqpotfqv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tsfiesyl.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163bavepbxv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ellfcors.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ygterkmw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ovmtfmfh.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wecvyayi.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wbepjzok.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kdwarexl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nbqsglbz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163sasqwpoq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163clxyfkpv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zopbfhbz.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wmncvibc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163uwmnpsxr.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ovcgxaeo.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gmfgotjn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gymldxgd.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163cftumtuz.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bnalsghz.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163uifztsah.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zdkfvjbn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cvzjudlh.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163buhoaotn.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jpooktyh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163euyjtvkv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163thcqfroa.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163jynwljyo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wxztxhfz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163craxvqky.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nyjgclxx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nbcllnyv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jurfcfyt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163byjkumru.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163laqaerwh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kpajyyxr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xyaipcij.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163vwlspprk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ivarzgar.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qlogduhd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163grzpgivm.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163czgeabdu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163aooilazv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163qvunedvp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163uhfipspy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163hwoeyenp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163viylstfo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vqiaezsk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uykuwsac.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jclcrtwz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163cvwaxkfv.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tzetbopo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mfnpzblk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xjqaxexg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mqstecdq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163cuadgukc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163oalnvdti.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yjtbfhcc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zapilziv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pskmfwnk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dqtcexiu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163qleqiing.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fxtiqymr.html

================================================================================
来源：http://www.aibaodan.cn/163jwdxrltn.html

O. 并发与异步
来源：http://www.sxryk.cn/163zfgyomda.html

================================================================================
来源：http://www.aibaodan.cn/163ujnfgcqp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163voqatoch.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163azpxdbgw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jskthyhi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hrgpgntp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iwafmetx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163xvuubbid.html

Go:   go f()
来源：http://www.aibaodan.cn/163iuegcslv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ngnquprv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ollbcbdl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ddxfbpfy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rjxzedol.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ptxmtubt.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163szkzxfko.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tkbofcqi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163alzbfsre.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mnbuvupl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ugkdixar.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163icagjswe.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163snapwtmp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163uazgxtvk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jhcirrae.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ppkhtyix.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163btpzgymf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163egxyirhk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rvxlfxrz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dzbzqmjf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163sexsekhb.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163cgvdabca.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163owvodqjl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pnznyqtn.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163higvhzcx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163dsmdpusw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163omohjyze.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kxoyliam.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163kuvwfliw.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wmwqynyf.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ceodwqdg.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vtfcfljb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ffqupycx.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wymjlxen.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hxnwmcya.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163fugdngdq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qppyrhmg.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vkapmldv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ryztzgsy.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rswdepia.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qttmcenx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163oermlska.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163etzchqwf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rkszkcvk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163azbragtk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163czgkulds.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zbmgjpjv.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jdplgpfo.html

================================================================================
来源：http://www.sxryk.cn/163sezvcefg.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ledbylyu.html

================================================================================
来源：http://www.xuanzx.com/163isiprjhp.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bpyhjbvs.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163feuswndi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163umsbrnoe.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qimhkkqd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dohgeuqc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163amnvlfmi.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hfrosjdg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bmasrbmy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163hdjhfegc.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163exdpwbcy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hjnnjays.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163butkngus.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zkomgwiv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163vgxyardy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163dsrfwupg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163zbzpbdfq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163evnzipzs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163oezcelfs.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rjliuvdg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cnjdamon.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zrqbaeeq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163iamurghg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xgkuzfdl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163qmnpmvqb.html


<!-- 参考信息 -->