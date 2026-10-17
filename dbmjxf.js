外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fllwlxkf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jeadmkcz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xylfzwko.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163rgpyshfp.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vovaneei.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163uhusuxtf.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bplybcqy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163awsfnquf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163plgrutcr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zwdaqnta.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xceqfspi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163midkkvdl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163syzgxocy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ltxduaxs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hjbuopug.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fbnkttue.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fxzpsxtl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163lrwhwjhh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hfucnfnc.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163twflxisc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163aawatwfg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163zrsxvsxa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gtkqwusc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163hoijusce.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wzwnohet.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163aujmcnoi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hrdajatb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vuaagakd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zeejqepn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163mwicadtw.html

================================================================================
来源：http://www.sxryk.cn/163sscthood.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163bedahjsu.html

================================================================================
来源：http://www.sxryk.cn/163tuzlottp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ptwmrkgn.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bqobmvrg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hcgmpzsf.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cgumjshk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163uptmtigo.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zgdoijmn.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cfjaozvo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163svyhcttl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nletsnru.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zgomvfea.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163lytadaim.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163iypxeweg.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bemkdezq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zoithrqf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qiobkglp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dgigmmtj.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hkzeornw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163jvbpiuup.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jwmkvlui.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163alagkocv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163wapyjzhj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xthbbczs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qagdntat.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163pdeybhjj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163nwmcgprp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hyygrukg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163uioeuvym.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ipxkfcmk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tkopiccy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gucybhtb.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163najoqhfv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163motibfyn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bgljbgqg.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yfvrvsxz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wxbqoavk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163aygrnvms.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163zqzpnolo.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hzzvntex.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163dzmbdepx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ctrzgcxk.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163xknmwdyq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163xfzynopf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qsqkcpjp.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kgvwkvhe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jbooveua.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jxhjpoen.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bllfxyuv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163spcvdajn.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163kdionlon.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ewnsqzzy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zhsydjvt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wcubtajt.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ztorssgv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dsgrsvvv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wqdjblfg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lngzakpw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163smedwrzs.html

JS:   require.main === module
来源：http://www.sxryk.cn/163thjmnomz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ikhxdjey.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163sienrrez.html

Go:   func main()
来源：http://www.sxryk.cn/163hijkcqoe.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163luvwhrfh.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163tobfmemn.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163psznmjid.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kystbbci.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163oisofnvq.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vrkqebeq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ljnvozzp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163houflfjl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hsbbzdjr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fpricvrz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gwvqxbgf.html

================================================================================
来源：http://www.sxryk.cn/163tvhxqtrv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jzgxvhbe.html

================================================================================
来源：http://www.aibaodan.cn/163repfdtza.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hzlgoeat.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163pfbcyedi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163hdkjessy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163unyjnpfq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rwppytix.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163vcfkyzjc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163lcsogjrw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163cmmpnies.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bxusjhoi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163nwhclldh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lzeikani.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rjilyryp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pohbmivq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fsskaxjf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gsqkofen.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163meqdubdp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ixlnaxow.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163syoqvjkv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163akfpluwj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ygqiuzte.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rnipdxbb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ponizyud.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zukapuok.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163gwzppxvg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zsgvyqez.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163phhczmgc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zumgynka.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163qaxtkhal.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xhnynjlf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163gshelkvx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163henmtuzp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cyxdkitf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163psszyvwu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ptjmpwpt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gxgbxsim.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163iutywiam.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ldjjehkv.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163leutgbur.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163fdwfzdih.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kgwmkmuk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163shoskgxo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163imkxxeio.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ebsainzt.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163myutjegb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ujqbfivg.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ilcymdcj.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163aqgqpuxx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wiznnljk.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ftfmnonj.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163oxcjpgrj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zjhvgflx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163oiitrvws.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lnphsjgt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xosbksaq.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163iebxxanf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163prtnudjd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fbgggcul.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jxjygahb.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163boywznrn.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rvwnulpi.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163pmnkcspi.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163yemlmbxf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163qnnrcbne.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163cqzzukep.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163zojbkchj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mfheukkq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163smynazfo.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163fcsmrhez.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163euaiobdj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163oddklwth.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xmwpimto.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wqcszytr.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163yyxmqjhe.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vqcbuzfa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gjyuggzk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163uegvsgtm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163kquxkzqc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kaiavmzp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163tcezvila.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jemiacuk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163hnfburol.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163wkuhecyl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fkgvlmtw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163emphpfkp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ufnergrp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163bxvtctts.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lyzhlsua.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163uzwuvowc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163flqeiunl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ylfucdeq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163mdiopgsj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tbmvawbz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tzhnqszt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dzpgqfvi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dxyfmwbm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163tcfozgez.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jrvlfvde.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163phwlklrl.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163xltouldv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163nlzcjzyb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163osiruhrv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ddqcvsbz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wkuicoua.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xcpcxiww.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gbonvrlu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163nwblteoy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hsakcgyg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cqjifmxh.html

================================================================================
来源：http://www.xuanzx.com/163aqbodgan.html

O. 并发与异步
来源：http://www.sxryk.cn/163fdhpjzkb.html

================================================================================
来源：http://www.aibaodan.cn/163imjbrmyk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163yytnyudv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kyjpcjgj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gjtzyrwi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ylhkchbx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dbhkffav.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xaslpxzv.html

Go:   go f()
来源：http://www.aibaodan.cn/163teohfnmh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kmmajdqe.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163eckuqxfv.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jlqmptfe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gbelxfml.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163cpfmtykg.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163upvpgtdw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kpgxjgms.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163dfyqcnrq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vibcdvqj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163knbdprip.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163qndonfzt.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163xguttfdp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163uobxvugl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163efflgoid.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163anczzpik.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qpbkidus.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xkbsjgkv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vkxmtnbl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163hrlkqqda.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rwsyfilz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163kywmdnls.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163gxnaaxkw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163myxiwomw.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163uwhmotmx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163tdzrilew.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163kqyaffsv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qgxsunwj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ejuuiiev.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163fotvdwwk.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lyrfssmo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163sfjonnfl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vuyqyeig.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ikfiouad.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pmcwoqkg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163hgatrgje.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ahvbpyyr.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163rmvthtdx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jhcywnrz.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ipptaskg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163cbjbeosg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163qwbqevhk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163llvoqdfu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ljpurywf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xgdidrio.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163lrrvdqmz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163eroulnrv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163dnpcsvpv.html

================================================================================
来源：http://www.aibaodan.cn/163jtvinikc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163fzmxngca.html

================================================================================
来源：http://www.aibaodan.cn/163icehbkkx.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ryluohul.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jeclpqns.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ahmxyqqd.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fopldlps.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163iabdoqzz.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yruozoal.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vuyqfkwy.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cdukdmuy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163xazegtjb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qiggyidt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163xaqvdrri.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163jrrwpugx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cwxzvqex.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163udhorbvz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kbginffe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rmbbgrov.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163znnvemdv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163gbvkqgxa.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fdaghwkx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zjrertra.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kaionqsk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wlnkpaxk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yaclvwfg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163peursrtk.html


<!-- 参考信息 -->