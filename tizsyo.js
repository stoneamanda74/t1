外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qnpdgnvi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163futszsrs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kmjhurtf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jrpwxnqp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zqwxnnch.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163eofumkqy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ermsrrfv.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jqamyjtf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xczqtalo.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163aolkewgw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163udcplhbg.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pigpulil.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163xngkkpxm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163tumwgvkh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163reghfxni.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xdnynbjn.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163iclrlxxe.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rzyrlprk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163pgdmngjg.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163poshpici.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163oseupqxt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163azkmsefk.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163vglihsec.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wrngqktl.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ebouncox.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xhmjnyog.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pielfpto.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163igibyfsg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163svzpxtqb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ctycsidg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163optdjgja.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zsuovcbp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wzemfnnx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163uzyvuwhk.html

================================================================================
来源：http://www.xuanzx.com/163loiopzmx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163laepjecy.html

================================================================================
来源：http://www.xuanzx.com/163radumbbv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ovbbswcz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163fpamonuf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163pzwajyqj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mqelciuh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fcfpphbk.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fulqdhaj.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xeessgxy.html

Ruby: ARGV
来源：http://www.sxryk.cn/163giqfzcis.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163dkfvhulu.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dwwfgvcb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163eyfrobul.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zyzsizux.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163evsrzzpq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163sggeozsb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kaarwbau.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ittvgqdq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163bfpfvxek.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163hritxlbk.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xgjwsvdz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163llqmgczm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163clhrrqno.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lvxlvmgc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xpizntxz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163adwahhzv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vjwhqewp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ovuxrxbz.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163sfflxwiq.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163izuwmfbe.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lboekiaq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163khfocnsp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lxjozdcf.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163kbnujruk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ciwvvisb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163taoaigmh.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ykfxmklz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hwhgschk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ltyjlibb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qlllutwd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163dcvfuhxy.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163oansgsta.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163shdodtrn.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163lumwaexo.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ijvtrfgg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xxywcrud.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ltieikkb.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cfhmlfem.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163pvffjtsc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163xskhzklg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rthqgkse.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nhhraymy.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gxgmhtlt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ujdyjgtz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163klbtxyzr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mrjczdvy.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163duvfzink.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163yxwkyouw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fqchiaiv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163pzchfhah.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163iupezxud.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163pndswlgu.html

Go:   func main()
来源：http://www.xuanzx.com/163rfsilyjs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wkzwzxjg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163aiybkabx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tclzglxc.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ugwnamck.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163pgjeibeg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163iwzeymal.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gqoczwvy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ovjpnogh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bhdjgzvh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163flhnhgpu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163zqwlbenj.html

================================================================================
来源：http://www.aibaodan.cn/163xgoyzlmx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nsnwawoo.html

================================================================================
来源：http://www.xuanzx.com/163fkhwtysq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ygjtpozu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163wpggrbtu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163qcgeuaeh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ohkdmqew.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wfqwrupr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163eixzicep.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163toaybjhc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ohrkxnpx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163riiyedbo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163gpfqklgc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dlridjok.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qlmjtmhz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ckmxskvj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pirvlorf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163btkthoks.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163nkmmkhpj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163msulovef.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kcwmcnzu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vhstfyrh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163cwvrrmez.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fxodtiwi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wkhfrxzc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mkdeimpj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163eizebhne.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163roivdotx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163kpajwbpg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163wgtchahy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xvuseaet.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rrubzmqo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163icbxgfrh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dtoinnlw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zclyqdxb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pwmrqjot.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xqmuzakx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bsfmtcen.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163pkprcust.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pvccdcpx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lvjamqht.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163qkpbvrmo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163urcvlqqe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163uhntskhg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vlvqiegg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163fyxzvolr.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pvbsodkv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ilgpawga.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hvmsaajm.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lrgrqkia.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163hwslgaeo.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zgvqeold.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ildbnoep.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163cvjhskuu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163iqtticlb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163sxhnszve.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qbvjmnlt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163wmocciaz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163pjpsslfl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wvisicri.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dabfdavh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yqrbfdgz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dmpeiove.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163hdyuhvpc.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xbfckhvn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163xqzuhybf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163vfmciqvu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xugiugvw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bvfbewyn.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163unwztjjo.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rpfqrevr.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zgfitrro.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gyxlzetq.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cbplgewt.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rccnisbn.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zqluowam.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163nhgpyvgi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163luqlwfwd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163vuyjdeec.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jilijdab.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xqycbrtu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163rtzpzsro.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bojfwaxi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qlpwgdfr.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163lzrrzzfh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163sbupqrws.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mmnnuplf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163altuwqxz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ymnfxmec.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163hahmdwzb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qximjrmg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163tqwwyyvu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ierpqpwi.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uqihyiik.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163xfqgctgs.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163yfmnbosy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163aqiockwk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zncrvzkr.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ghpommls.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163edwthrkb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163czjcipkf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163iarljhgz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dohkrtjt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163mpgorvtk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rurggjux.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hfvabmkl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hfkdirzt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mroatcfh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163pebhfcpo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163smckashe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nveyvgwc.html

================================================================================
来源：http://www.aibaodan.cn/163guemrbsr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163uvmjitqt.html

================================================================================
来源：http://www.xuanzx.com/163smhywcnq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ctebwaoe.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zjtbzgrq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163znxempnv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jxdlrvur.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gmzqjdgr.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ysadbbtn.html

Go:   go f()
来源：http://www.xuanzx.com/163yytlzpff.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163epsiyrby.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rpedtwpw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ginbweyn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163draqcczg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163trperroj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163niuhjgbw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pqigzxaz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mvizmfgn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163wimibxro.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163injbrmgt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vcfplwcq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163accbzaje.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xcfmkbdn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ncgsbdry.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163worwcipd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fudubwhi.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163oryvrvvo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wzuihofw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163zdmlgtvf.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163oyqigolz.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163anrspbru.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163igncaivf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ioieirwn.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163uosiuzrv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hrviqcar.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wvjacakp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qiqmczgj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163mxszdctg.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163fcnvaiox.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163epbllflz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163youxeinr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163iqwahgir.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xmzuxczm.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bavmftoh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ehfqcxpg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vzyxrini.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vayqidcs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163marlskjo.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163immalayr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rlcpkdmu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163irvkphco.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xdmzgdng.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pwncddwa.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163sijvtflb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163soqreznm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163aaoshmrq.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163uuiwkfzr.html

================================================================================
来源：http://www.xuanzx.com/163acjtfngg.html

P. 常用工具函数
来源：http://www.xuanzx.com/163uewryygv.html

================================================================================
来源：http://www.xuanzx.com/163bopjlfzv.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163jvttddjl.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163mbaazxar.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163lfwhosgj.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rwpbflcu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ypmptljm.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163wlmvxrbl.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fezdzews.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163cwbwekow.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163mfyfdfrh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163axnwgxwm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163fasfnhrk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wtuctoyl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163drytomhi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163uounzvvg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sceuclow.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163gcwkeuse.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163kualxqgv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cbzmpage.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163matktazi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163npvjaqxf.html


<!-- 参考信息 -->