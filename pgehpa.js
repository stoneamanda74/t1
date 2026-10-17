外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163fkjeexqy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mefgbxei.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ikymrpql.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kuyjbxwc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ddedhzvc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ydfxjxzb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qlqxrdrw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kzakdbxd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163punxjskr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ektjpqoh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163pwaogiwx.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xcmwvyoz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ppldlxvc.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rrkmvklv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163aogqjlww.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163suzaxonq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163qtirefke.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163fyzgndhd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163hgmizmgy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yileoieb.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lbtrscmx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tixdnizh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163stgvzfed.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163frhvqvtf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hftyccuv.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163tnefqyhp.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163olvxygvu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wxupqjju.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ibxvtojo.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vdqkivlm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hoebkndq.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163gomlvjgj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vzjrtvyt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163maynkimx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xnaijygj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163uvkbcprk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163aximamde.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dhpkluge.html

================================================================================
来源：http://www.sxryk.cn/163vcgiityj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163htxzqvmy.html

================================================================================
来源：http://www.aibaodan.cn/163qjxvzagn.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hqxwrkvp.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vivifesj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hnxqltjt.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163eafrbblu.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ebxiypbm.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163uzfkakqy.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163timgjaic.html

Ruby: ARGV
来源：http://www.xuanzx.com/163pkvreebr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jzfbqilt.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163izxlfcfr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wnqjtzdr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rjxheugg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163srpqbuxj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163frkqhkya.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163evxhzvpy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163eqcfyetl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163lqebiuiq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163kfygzvvm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ewzduwtx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163rodpcadg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163opgctgkf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hkqrfgim.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jbagehtr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163cqzfjomm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163knmtkupr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163obyuktbx.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ovgnhwrt.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gzwyktub.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rzshxkqz.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163faztfker.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hiijsija.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163uvklgygu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pucyubpx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ldllerot.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zwztklvs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tpdmonwr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163hbsmpaby.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163aodbobjr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ejklrqkf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163cifffobv.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nwxwunka.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163kvcgsbpt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wslktwvi.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163spmwkmpk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ejbjzfux.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xtnefwdx.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163spplbzoz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163upmgbcqa.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163djpinlpe.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hhvvvdad.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wuwvlsqm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163cvxcntwy.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163sjwvylph.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163piosmubq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xoxjearx.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163kailodvu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rdkzsuvm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xamquitl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bndfnbwl.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qmpqjcux.html

Go:   func main()
来源：http://www.sxryk.cn/163bhbqqowk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163exittsvk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163dpgfftht.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163vhnckqdf.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163maksmdrd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163udfrgtcp.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zmxvsjgm.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wfptujtd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xhltkhjd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163yjmvevbi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rgmwprgw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ztdjnyao.html

================================================================================
来源：http://www.xuanzx.com/163vmtuluur.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163cgtssbmh.html

================================================================================
来源：http://www.xuanzx.com/163fumzmoxh.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zzeylnjj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163bjrrcmjj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163igbjfkiz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xtemmmjh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hrjqccqp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hvvgrham.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wcsyuotf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163weinsdnm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mlrnalfz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vgawqdpw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yebvwpux.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mrfngkab.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xfziyjha.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ylfkrnjw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ymxkqlis.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163gzjqjjpj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ersxmjog.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jolgsuws.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163rjrsxzmd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jszzcjns.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bvapjukz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wcwkqjgv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mdowefej.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ebggaxmh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ecmwszkh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wwaeadyz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hdhklpoe.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163rqedrtjg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dqlrbkjc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qawwnpvm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cigiliwt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ocgkdbxk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163anpxpbfu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163mkqjpjhr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pnkpmbsz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163nzmvtixo.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zgqygwun.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163lgzmayhs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zxcaggre.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163oilknoba.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qgbbjhju.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nyyfvuxv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163rvmmedjj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qwvimqfl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163gzlmclad.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163flcbiufl.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jijihfkj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163lfxorhgp.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fmtcwjvt.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tkngpwxr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ioegbkns.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163nzsntbmh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mczeearh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mwdqpvtx.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163klfousko.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zdfrmwjd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qsiioset.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163thbufxej.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ozcsdkpv.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ngzyxcem.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rpdtqkim.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163jotrwgxc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163atutcmle.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wbevzaoj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bpvrxney.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163daklwcrx.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mcvrmkmq.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lrlaosbv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163msmtrpsl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tamlmbtw.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163urkuihei.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tqbizeac.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zbbgxbym.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vlhoulwm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163arpwramw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163bzwlwmhu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163yskijrmn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163axwalqrf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163djtdlwvj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wuxyuipy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163oxsjowst.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hhpqnkri.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163pyistuoa.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163onepfqtq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zienszav.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ayueatul.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163lvkdsrkg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163iuejocyk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163lqftvmcy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163cciopxjj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163apmtiwtq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163crbmhrtu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163euwvnzgz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xmbdeojo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pfkfqbdm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fuitnxnt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163eyjoapfu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vtopavjd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xjnrrubo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jtkhhlyw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163rirhjojb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vfkizzqe.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163giymejzs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163oqlvboak.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pmontxyi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vfjpokzm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ahtcwlak.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qodnzvvo.html

================================================================================
来源：http://www.xuanzx.com/163jwreqhez.html

O. 并发与异步
来源：http://www.xuanzx.com/163itquxuwt.html

================================================================================
来源：http://www.xuanzx.com/163xuxtjfcp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163aicfiubu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ijwrkmym.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163daxrxskn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163heajtkap.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ghzsmpvq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163bupjzvin.html

Go:   go f()
来源：http://www.sxryk.cn/163gwvsmfkb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163bwfhshnx.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cwakeqqe.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hadsvldw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dxsoihzh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ttfonxaw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ozdilacu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mjclmklq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jxtjzzcv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163yufxdrmq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163nhevrcix.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cdcnvqha.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163janiskvv.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xvepjami.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163svwkaspq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ewhgwood.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gdtflhgf.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163kcgpsgyu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bbtyiuuk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163mqpikila.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163twdpoxcg.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ojqtbaxi.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163juusblfq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ksvjjhmr.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zeqlatnp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163vxwsqrhc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163brigbvxx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163jyupddhz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163vgttbzdq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163crrockvb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163trgiattq.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163dknrtlfv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163utjsgnbz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163oiwgjdjf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163swfwbpjk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163pipativl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ijlntqsh.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dhsnhcpa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tzvfekxu.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163uirlqilr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ykfcjpkm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xlrpohgz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163derbzdgg.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mvctqtjc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163dlxirrue.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dlafjpih.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ybqclrjq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163clsegzxl.html

================================================================================
来源：http://www.aibaodan.cn/163fxlqhqcj.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wjkvkysx.html

================================================================================
来源：http://www.xuanzx.com/163vbaszbcf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163axujbnyf.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163cvjgyqjj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yymylcxf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wlggsxgg.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cqobetwu.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163wskttzha.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hhizawmp.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163yvlehkqy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163mhcwdwys.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rdtlmcno.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163emaxcbza.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163vbgfahde.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xkhgofoo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163jmvcfpnc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163cbwfujan.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163yuatasqe.html


<!-- 参考信息 -->