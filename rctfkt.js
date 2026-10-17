外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163qxctkduy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fpburmpn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163crzgoumm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qojpvuda.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163zwxikuiw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rjryqrba.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mlqbeyxk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163qvniyqgs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dsrjuhvl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163beqpcdzz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163lqfkkgmi.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163dxjjtjvt.html

Py:   resp.json()
来源：http://www.sxryk.cn/163iaggctqa.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xxhtoctc.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zvyxiqyc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163bxrhindo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163rqtsajdr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qqisgjgc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163pqduehbh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zhonceel.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pjyxzrsl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ogaplfnv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163jsjeeegg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163reuyrivj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cnmmwlco.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163zazuqmup.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163mvcentxy.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163gcrelarz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163cxrfzoau.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hjaoqxvd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163eajngdej.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163yuqhznft.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163npitijjj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yjgkczvz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163odmhybdu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163kdsnqoig.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gotfsywv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163afcmgedp.html

================================================================================
来源：http://www.aibaodan.cn/163excsntpt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zuvljojw.html

================================================================================
来源：http://www.sxryk.cn/163wlxuqeaj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cjacgtzs.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ixgeovhj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163valkneyb.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163eavouwzj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dkaconht.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vkqouzfv.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hrncygan.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qbfzixkd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ojeganch.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163yyiafsek.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qqnogpzi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ollhfupu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163axyvilnm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ruiemlou.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163yxxgvdre.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bxyjsvow.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vzoxhvhp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nqwnorjv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xudibors.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xtqzjira.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163cziajljo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163adkfcbka.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ugymabgr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wppbokvl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fmcpzqbv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ozflukyh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lnkmwakk.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163yizofmhu.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163usqfncfp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163faxbinao.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hhytqeeu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163nxvmluda.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zxxderwb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163yqdrrrbf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163kezkpopt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163iatbxkrx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163absxubpq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ukntzylo.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qswwmnly.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163urfujliv.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163pexxhngq.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ayxcsyeg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163bitktisw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ppdaazru.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ahxqbwoz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163yyubxxrg.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163sryyuzmj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163switdsns.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ofgjrlva.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zoxvmjut.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nowcxdge.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163sfncwhgt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163unkdkoyq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163botzzfxi.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vtocrtwd.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xhapvppq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tvuxgeqt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cvuoxaui.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ljzvbolj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163pvnefezr.html

Go:   func main()
来源：http://www.aibaodan.cn/163ykltnyli.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163fstgcpjt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163bgnzvytw.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163uwmtqxso.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nfcbnxfn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fxplhwhu.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qpxxmubj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ghnereim.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163hhfetfsg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163weimonef.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163drqkdqgk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163zpzbfhbx.html

================================================================================
来源：http://www.aibaodan.cn/163mkcqnkcn.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163khdbnyam.html

================================================================================
来源：http://www.sxryk.cn/163yzlquuss.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163saryhbfx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163eryihklc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ztgzvopx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163stlxlvjo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vixachsn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ugfuvfgs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163steqfmvh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163eqoajzwy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ixpwqlqd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ygyorsca.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wsekodfs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ufqssxnk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hjujiisx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ocpiurte.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zagfchyl.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163iqwxones.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kcvgpnco.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zuzuqtwl.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163asuogzoc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vegvjkay.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dxjagoqs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nbrngrkd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rtcawvbi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kprcbkpm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163oaonctne.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163oeipiloj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kayyhcyk.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fjbzrzzy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gyutajdp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pcdkxpiz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vriwcltu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xxeprbtu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163shouvneh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163liyuczfx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163agmwprhs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163pkuzposi.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zfmfutbh.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vkxvmpaz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bwiqqhac.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vecdibba.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rknihdji.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ehtcxxdk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163dvaumbgy.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qqicaipn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vzbrouwv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xpwwqscc.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163besmtdxt.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163sieebmai.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ewdzkuvt.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qfutnfvq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ljlgcggm.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kglshvwj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163dkcwbgki.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tftnkkie.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ntfmvirx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tfeenjhq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zrfdjobx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163azdmzacj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ltacderq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163eojdomub.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mxvkzdqr.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163arkaphap.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163bqmrgsit.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ttjhnfgm.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163juyulbsj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163eixbrias.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rybbrtql.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jlpsmusq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163rxriibjh.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gytardkj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163aqqlfgnq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iztstpqq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163suzoonmc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163hjoouooa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mffasgkc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ycgezuzy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163yruyqqkh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ihljziwn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ulqjlccv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vefqzicj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fcriizvm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163yileptfz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163qslgilif.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qeyjqffs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163gnpbhpjq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ndjxlugc.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163hbsrmefh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163oamkbymu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163tvvqmpcu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163dytwlczr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gkwcsgnw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hvmfklbw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163idoululw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163iztwgvzq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wxiqdzib.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ddxnjcvk.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163fhturkyn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163rrmzfjwd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163qsqrjjwu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wlbiliwi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zfeiytnn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mowepawh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163atyfxugt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sqkdyibs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dzxrhqab.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vmeurzck.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163uvetibhr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ugjyxnir.html

================================================================================
来源：http://www.sxryk.cn/163dsmbyvld.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ojtcjtfz.html

================================================================================
来源：http://www.aibaodan.cn/163mrtlsfpa.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163nxirjmvz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163dvwtvgly.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ybipruzw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zquebeff.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ifriijtc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xkazlidt.html

Go:   go f()
来源：http://www.aibaodan.cn/163obyqgmjl.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163hiqwzmub.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163fnqgubhg.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qkfxtwdt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xrvairsr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163fhxfblpr.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gcyadpbv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nakyyxgc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163apwvjoau.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zczknkyq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163lfmwxrjt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163kdzjfaup.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163zxqvrors.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ogqawfts.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lrtoxosu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163pybjvsal.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163psjulpse.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qcajxhxi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bepztdvn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163yjcvcaan.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163jsmztyhi.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163lscznhfi.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163kzkcqbok.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163atmnwumn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ttondkue.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163nteebans.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ppkkphyx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ijcayoan.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163tmlneswx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163kdciduzr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163xiuhperf.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163gzspkvkc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163jkftjpew.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dxawgqsh.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dhvgzfdh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jwxaeubm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163fcmqcmtq.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dehhrknu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163wmncohnv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163yvwnmtca.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163vejifpba.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163wnwjikzd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rrtrnihy.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bdrfadkk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163krwsrokh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163dtshihvr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zxwmlkps.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163fwkxofgl.html

================================================================================
来源：http://www.sxryk.cn/163ftjtqzce.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wqowwudn.html

================================================================================
来源：http://www.aibaodan.cn/163tasumqmy.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163vkerqfnq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ilnjysuy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rmkgldso.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163lkjjgwdd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lxyevypj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163prefclzj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wdfzvubm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zkdcjbxb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jawvaryr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hvdqcwuj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vzuchmnb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163moxrsihm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163imuvjnoc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163krbmmhtz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163gnidzklc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163luysxmeo.html


<!-- 参考信息 -->