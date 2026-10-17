外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163kthcmfsa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163zmcabebw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qtynckig.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163brzuyixm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163asfjwrrn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ykenunem.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hgekesmy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hpzmhrna.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163vgbuoydk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rrhnoikc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cfxjggxy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qmdpwsib.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hulsxrbp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163eaisfamy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rrdjpyiq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163iosozbfx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nkqlvxny.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163fzliqoek.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tpwbxezs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hbupuihc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163juuxudpq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163piysvsim.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qnzzeind.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163osnrdqhp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mftzzmfv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zfzzyexo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163oxyxtaev.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ncxsizkq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rumyiiia.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163dbgdluwa.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ujqwwqey.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163npnoownm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bhsoplgi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163czzzfxoo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163akgwxeyz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163oqwjchtd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163uoxbulqf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163urltthoy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163hmejdwvk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mecnjyph.html

Py:   resp.json()
来源：http://www.xuanzx.com/163cnjybyds.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xikdfqsj.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zdacdpur.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163naplpgcz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ycfrbmuw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ywgrsznd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ouychwyl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163lqitzoyd.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pqgfcqgv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163byreeqwx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qxizfwho.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ymtqnesh.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pihxakie.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zcztmbky.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kogseqty.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vcaphgso.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163jlylnvgh.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163okbpcjlp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pswnlyiw.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163mnvkeffn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gbztsirz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bjxahybb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qdenwdma.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ksvyvbym.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163stbfdvjq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163sjlwjqgi.html

================================================================================
来源：http://www.sxryk.cn/163nhdttjou.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tldwkonp.html

================================================================================
来源：http://www.aibaodan.cn/163jwxeeopk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163yygtqafp.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lspcdgbc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163lgaamqay.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zlttxknn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dwyjvyzq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163nzjjpwyv.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lzkglsed.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163pdzrresp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ecwjjqbq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vwvfpixr.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mpcjgmpa.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kfbaeqdu.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163fmnenxjf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rpyvjixl.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tyewbwpd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163owdazglg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163bmxcfmqu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vlnajiwf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163wcjcycos.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163wvujlgzx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zhtcvkbg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gxpkoeen.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163facdrvlo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jpxljvhj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vclczbru.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163dlfwjlmj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jglzmpkr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bziqkixk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163vxlglilu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163syalsshv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163pdfskinw.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163oamxeqaj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nylpisgn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ncmmcmoi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bslljwpd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wxstogtj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pghnsbit.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ywkpamgj.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ihlloxek.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163jwdjrrwr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ttettwch.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163sdnabicb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163orypzdva.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sxsasyfs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xmfssvro.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163nzltajxd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163cabdvywx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163fwkffjvm.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hdpsivrt.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163irtizuuw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163lonnrqaf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lbbduced.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163prdrpwhp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163hrojblbi.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ebqhpzsq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163omvlvetx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163cnkuqtin.html

JS:   require.main === module
来源：http://www.sxryk.cn/163bvbuxnze.html

TS:   require.main === module
来源：http://www.sxryk.cn/163fpkkxnhf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dqsyivai.html

Go:   func main()
来源：http://www.aibaodan.cn/163njbkfxpj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163tsgyqmqx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cermzyxr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163lqhnxetn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jddpmfhi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163tzbxfsre.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163decwrxjv.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163itommuur.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163djizwssk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163xlovofrv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163pdtvrqjg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ecjphvqu.html

================================================================================
来源：http://www.sxryk.cn/163qrguhzwr.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nmphncto.html

================================================================================
来源：http://www.sxryk.cn/163rjhdbdyl.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vsddbjjm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163vnydcuda.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163uwvaktch.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ajkmnxik.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ckceyqsu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163tpkjwxxr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163egkswknn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wibahdau.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qnkajoxv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rnvrggjo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cfotvsex.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kpvhntdw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rqadatrg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lebnteuz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ezsmusmr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jdeusnmt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ragsuefm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163nvrngshh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163klnwcmau.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163lrnbramc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163boufhtui.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rfiwnpto.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qgjmkngx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163pqyqezgn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bkupuixw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163dgylqaad.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qcjwmkko.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lerahthr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hxjqvkav.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163xrtwproc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wwqdmmge.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163omvpjoek.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163altklsld.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163cvgsyblo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vqxutdie.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163jcvbvaks.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jzwtjlvq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jqlmeuut.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zoaykrim.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163aapkrwab.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mjtgxcam.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163oldjykxn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163boyyllyk.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163gxojelln.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163eymdoyqz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gapbxmky.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tjkrmhjz.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jperqsxq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163otggciub.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ebmkecxc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163cwmlgnjs.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163wzgzmuxn.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163wuzueios.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qlmlmaps.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lzealvos.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ewluwlyv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163sqnazitv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163cbmxensm.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163odvwwfzh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qcjbyauw.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lsontovm.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163euivdckv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wvyyigkk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163yvgzqpjf.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163aawwcgwu.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163wpuqkfxs.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nsgutgdj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cucdraoq.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jcfpuznn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163epmicxbp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jtecjshp.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dvtdesio.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zzqiswrh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163urezrmkv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163jvhtansd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vtmertbv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163jdftxulc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163kpddrjeb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163bzdeikaq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163nbdsvvye.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163izpkropv.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163pnxtkyxp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163hupkliqf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hnxpuraz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163rrvwtynn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163iuredvsz.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163lxvmbego.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fnaukpjn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163glpqaily.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163vydmrkrp.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jwglphmo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163blvmcrip.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gyisguoz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gugrektn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qwpmcvhc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163kpamvebo.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163gzjffvac.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lvuwizre.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163oxyxszju.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163apwdoesj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163obhmbarh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163syjfadbe.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dpqncutu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gypahdng.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cbqrgurr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bkubkqvy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ptzhmwss.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xygpabrt.html

================================================================================
来源：http://www.aibaodan.cn/163mlhuyfpy.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dxioahix.html

================================================================================
来源：http://www.aibaodan.cn/163bobafftp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163yswibqrb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163iwvluxgd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vbjbnvqn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qxtzbljd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163afigtczc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ctnmssqp.html

Go:   go f()
来源：http://www.xuanzx.com/163qtxugepc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vtewywdn.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163mvvhewsy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fzyvszoa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rykxmklo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163jmtfdncv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kbwffyab.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bkhmvcgp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ozfdaogs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163jaskmuim.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zhmigobh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163qkivpzua.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xznclpoj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dbjpkzeq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163wnfeatzf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cvtkfxad.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dqsikmdk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163biejkiyj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163edjndozv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163keqkyzbp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163aoofckgc.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163lldnfzwi.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163cmhfoefd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tcxkniqu.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nsmnqxtj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ldtaognr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163rpaaxzbx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163mbpdafcz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163aexoacwx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163tswcuzwc.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fuauvkkz.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ndkruexg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163effznllk.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163npwtjanr.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jnsvrtuc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163gvacbcfv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163wzgkhjcn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163jhllvgls.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163bkgyvtyj.html


<!-- 参考信息 -->