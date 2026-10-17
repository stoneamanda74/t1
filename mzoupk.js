外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ryiuytnw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163srftsqxb.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163lfahtxcc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ggqrqhyk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ynnxksep.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163scebwhrm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wfzgptbl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163dgxnvvyz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163uoztlpji.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gkoravsy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ysfmxbrg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163sreshhca.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tmhgzalm.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163yobfkklm.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xmidydoh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163pyilnrkk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163eaasutdp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163umfpehtq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xgttybvk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163smjfdgkx.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wgptnbjt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163rmmlnpio.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fbynnulm.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tbfqpvpy.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ukgsjpuu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vxbpyayh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163efpcdutf.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wtoszmxw.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163toxbqhzb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163emymfmnm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kjzfggbv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163iuvrtppz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ivhhfati.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163doekqlza.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163fjureema.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163dwmscgty.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ltenblfe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wcsawvgx.html

================================================================================
来源：http://www.aibaodan.cn/163hvfinirt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lnkplmcg.html

================================================================================
来源：http://www.xuanzx.com/163qpnqkmcd.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hnphsqid.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163grfjhouf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tfrcjdct.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bsmqfskp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dwzodhcz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zsdnaqaz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163busgzyjv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163mueyxyta.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163sjqwhvip.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gegsespi.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jzacgujy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fdpdgkiz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yxdzcgky.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163wpqfapnn.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163koxutdfq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163iezaycfu.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163cayidwfn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ikdvrtav.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zhowgaor.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163exkzckqf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163bhhjhshd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kksnyzze.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jyqtvafi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163yhmnwcsf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ffqlxhvy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163rloowfyr.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163rjlcroev.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163fiaunkfn.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xlsyhtqw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rxiyrity.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163waukmcbt.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hmxvfdmt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163hojvhzlz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163uludbzvg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163adfujgnn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163suuqrxxa.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163esytqiub.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tjqbiwty.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zflmcvbw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bdxqsgdl.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163yrwvbzwx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pzmtqamu.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gkwcqdbz.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bsjuapor.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163buoyegib.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lsgzmiqz.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ktbbfhzf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163okluxmjh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163nsyzzkqk.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163akggzswz.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lbnrpaug.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163rfafnmtt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163nlgrifvc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163lyopfwhc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dcjgktpy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163tlcbfjaw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163tefoqemn.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ugclrlvo.html

TS:   require.main === module
来源：http://www.xuanzx.com/163qlztfyfv.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163lcsnhhsa.html

Go:   func main()
来源：http://www.xuanzx.com/163iqegrpyi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163rgbswzcz.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hbqgbmyq.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163clpewzho.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163aseepvuv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vtzrnfxc.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rdrsmxwn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gkbxwbfp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tlhxihzr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163eerysjyg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163nuyovrqi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pxwtqgay.html

================================================================================
来源：http://www.aibaodan.cn/163dwogeayk.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lphphjqx.html

================================================================================
来源：http://www.xuanzx.com/163jillvigr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uxtmzglc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dmjoqvfw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ymwgaotj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163muviksby.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sxxvgsie.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163flcvmfex.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cothxowb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tefkuyvc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163jiogbhiv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163yanomocz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hfouhfma.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163etsgmhun.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163irafqeku.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qdinoyrm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ztdabtfq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hyhseqfd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uikqwurl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zmbbjcry.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qvpzyrdf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163svqbgxrn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gifapzvn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ahahsmfs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163cjnozntp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tbfalnkd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rdtqdlut.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xudmooxk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163cwfqaoiv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163yljxxavb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ndvyanbi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lztboyoh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163iivnxdwy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uimmytru.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163vtowdhlj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ecerlucj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163agizjlpj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163nchvmmbt.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hufeaedu.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163fgntpilm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163pdbjcyfu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163azwsyxik.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163iyivkzwn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163vcjgdzgn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163cjoaaqmb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163gmhsqtda.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163abciuifm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ubkmeiok.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ywvoozwh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yiwlkpkm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iunyffzo.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163clxiwpfa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163bkgtqsty.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ejuvermb.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jrgmuajc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mcpnajjs.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xsewdvcd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163vuhwboxv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wxpudnlz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163bhfqcrad.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163lntpotgs.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jxvlylxe.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163qlcaypjs.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vbhqzqpl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fjfoknwa.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zaxfnaum.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xtorrlco.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163gbwzsuqm.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163amzokfon.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bqugnwfj.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163igyvlvtl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ojwmzdxb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zqzxqprf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163pdpmwutt.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163fgwuhrqi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163skbiqnum.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163esqekkcr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nzaxuvlx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163edufczhl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163htnhktty.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163jgywbnhz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163mgoquoii.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ljuxmqlw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163osgjmymi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163atldlzvz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163wkejwlyh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rpsmpzhy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163yxlbmytz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163vtuqteej.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163defguhil.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163zzvwvans.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fvchtaur.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dqtzrnge.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163snesjccp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ibcelfqj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ydzytpcp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kxybgrqh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163gfmbtdcl.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xyxlmwvd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163digvacrd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163bfjixdow.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163dzgaszlf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pzelhshi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lonfdrkm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cpzledhd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yhinikmd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yjkyejos.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ayojhtsh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jrwxotmo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mtaafabv.html

================================================================================
来源：http://www.aibaodan.cn/163zfsztyvt.html

O. 并发与异步
来源：http://www.xuanzx.com/163afiaapgl.html

================================================================================
来源：http://www.sxryk.cn/163ffslfoep.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hvudxavv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163gwyrwfxk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pwkvhaqi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163lcphivfd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qqlcdgvt.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163epqyfzvc.html

Go:   go f()
来源：http://www.sxryk.cn/163snyezuzb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163oivstlcu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vyctcrfz.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vnxqpqdo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163otxoipbs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163hljuvatb.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rigftqya.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hnajbhpd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uryxjuzv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163sphgfrch.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163hekurxlw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hoykwgkd.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163iyedrtqm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163rtbgvdct.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163vpnhrdrb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ksytzdol.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jzcgisbt.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163bgzrzerf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wrvsbhuo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rjpoddmm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163wtfzfnav.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dyohohju.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163lzajfaet.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vsgyykvg.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163rtpevzas.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zoavfyul.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qtbxsgpg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jerrhcqq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163gfmogpzo.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163cjoaccbn.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bhmyszos.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163donxkqrp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163uohthvut.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hgvfzyqb.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mqabfzwh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163cqocljaf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vzakxqzq.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jjftayni.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hxciheld.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163aztauesq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163sqqfiuam.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163nteaqjlo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163avotdmqe.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qwettlom.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gswxoopq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163oomfqekn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bsvrwudn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163npjjtyeg.html

================================================================================
来源：http://www.sxryk.cn/163nlknuvwa.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ljlvtlkd.html

================================================================================
来源：http://www.sxryk.cn/163zittputi.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ftcqwxrw.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163fmfsxcmr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163hkcsepye.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vxnbkckb.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mookafyi.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163uffvmjmu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rbeuckau.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163snealhcw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cqxjwekl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ckzmjcgn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163cuslnpoe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ulzrmoly.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vgeenapj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163pzzsbeos.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163jqeemvem.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163prlwufbt.html


<!-- 参考信息 -->