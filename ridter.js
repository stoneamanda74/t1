外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ifyxtlio.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163kvnxawlq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ziuhttzh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163skqocjty.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163lqbkrzog.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rpolozqe.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163anfvjgti.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163btmaukin.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163xmndjsnn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163aalipnfz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hmczatbn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163oaydcpsl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qalzgwih.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kbuypfeo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163dfvdzagi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163bwwkgpbk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zojkwyce.html

[L04] 设置超时
来源：http://www.xuanzx.com/163uoosrokz.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163aijzcyva.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rqsqobjb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xzxeoioe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xgurrfwp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ayxwwlun.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163aqulifgi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jjnrwuqz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fvlyalpz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163csktzffq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zrxlkzsj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163kbjkmjug.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gmoghcls.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hczulwec.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163beyzieuv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163krskeafr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kjhinkgn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163amvjiuzy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mzpwasgo.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lvzkurxs.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163izxtgdoc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163niynhmxo.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163edkdzfni.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163snqkjczv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nvtwnyfc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rjonoywc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163rukvaeic.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pgbimwwh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lolyaxmw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163pmxniqak.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163sxbwdjbh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fmlrygtw.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hrjxccmd.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163umteidaf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xctzhltn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rzxwlvbp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163khgihwqp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qkugxxhs.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ndmuayrc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eugzttuh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zmfefgck.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jznltrje.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qkgiudzo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163gpeoyjbs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mgbwisfn.html

================================================================================
来源：http://www.sxryk.cn/163updfiejj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vkhikmvp.html

================================================================================
来源：http://www.sxryk.cn/163kynfaxhi.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nwguoctm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cujadswu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xsjxilwm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hwtfxihz.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xwmfvfmj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ehtplnjl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mwjknqwe.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zrvcqyyb.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163myvhcvxc.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ljlffnqs.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163uouqofnf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rgvosxnh.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163cmysbibl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163dardeyvh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kdmsutbq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163iamgkgod.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qxijmycu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163acmfpeoa.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ahrwvqwz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163wdhruezi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163wvcadjbi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pgqaejsl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ivbivemk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kypttvto.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163diqosjml.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zfqlznzf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163braudytj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ommqlucr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163agcaqsid.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hvlywdbd.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163dbbbcuwj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fpsvvvel.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pkxdyttx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qhhjdrjs.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bgkxilpj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163sspdwdyn.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163nqqorlua.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vldwpeol.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ujhhdnxi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163gbrbmvib.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163qqvzoikh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163hwwxlpbs.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163anmcundj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163huedhvrq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sbypjsab.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163lhkxbgpk.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163azdismkg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kszgbdmy.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vbcfjkup.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ycviomet.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ueuscomy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xsxajoyk.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163akfasemp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163hfhkxyfj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163gqtiakss.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163obmoqbso.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163augcmqmm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163pbsrxjsc.html

TS:   require.main === module
来源：http://www.xuanzx.com/163eaieppjk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163oedlndtr.html

Go:   func main()
来源：http://www.xuanzx.com/163xpxttnoe.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tkpsprsj.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163usutlnpw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qwnhifxo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163okzlzwhf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dshhumpi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gdtlnefx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qzomvxvg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zcntfbco.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163grqprvig.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163amtwdeua.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gjogaioj.html

================================================================================
来源：http://www.xuanzx.com/163sdumdewv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163cztwgwfn.html

================================================================================
来源：http://www.aibaodan.cn/163gguddrns.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163flhcidvf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zbkusgvc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dyhnblyv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bebwsmuq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jjzssnzg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rdzphshw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bcophwmh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ipfqlyuf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163kztvjyum.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163tjvhmwrf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bldlildu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qjwahiys.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rnfoybbc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ijjtqjhq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163yaxgijpl.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163zrmlnide.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mipipnux.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163fyaptcvp.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pgtufnds.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ftobxuyo.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163tkopocmb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xkxkiacu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163asbtkfzq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163gfxeimiy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163rybehxpo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163iijyrywo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163puhjboen.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163yvbqrbsa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mcwzybtc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163shupwpev.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dwvhndkw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lgoafvzb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163zflrqxbk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xqhgwzhs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bvzhvafz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ijgdqzed.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gbflmrzm.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163nnomzkgf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163wdwsaxgv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dqsxlwwu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fsmvamyz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163olwbjhru.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163mliksiod.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ranhzmsy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163smzckqek.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163jkhznsrw.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hnqurwlc.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163foceeyku.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163khaophqc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jedliokv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163sansjhhu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sikfrbkx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ufenykgc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163evcapxes.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163csocmhhn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163dvvjfyrk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163wupznoud.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163atxoxvdg.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163gdrrzswr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163dhtxviws.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qqjxcrnu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bmxlahbm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163urnwhngp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163oarcqjpd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kcnatmmc.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163yulwmlkn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kwawmvtl.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jteddsxj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vaevtkzc.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hprskofq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xvrqljpc.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163xlhsnnmh.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163otomerkc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163zcgylnux.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zcxciyod.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mliyjylu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kxowyxum.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163alvokhdf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163exlluggq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mwbhkilh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163memuaxwn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rmvnynjd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cnwpmgvp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163hgvqzxst.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xsnlidxl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vlfiyzry.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zocedzir.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163maovxjvk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163bmdpfsuj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ubrkhdxd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163brmpisjn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163pcamydxq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ahviianf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nlrxhhct.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hummdjha.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ksygydkc.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163glafjwqw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mzfhhphc.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163fobckoco.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gwyhtqdg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ybdncvfz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163gqmusqoa.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cfeuwazi.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ihysnfyt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mcezqfnt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163gqpkqmls.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bdircagv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jkydwtuo.html

================================================================================
来源：http://www.sxryk.cn/163cdzcnmnj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zzutdjre.html

================================================================================
来源：http://www.aibaodan.cn/163hphuvotb.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163nozmwsbk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zciwqape.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yshirhuj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163hvhnwonb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163seoaonhl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xovqmkzj.html

Go:   go f()
来源：http://www.sxryk.cn/163bzpsniff.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ejabbnyu.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ighrwehj.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163kcsrkqci.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163twdsuvcr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ypcrydei.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qaafobpb.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163sfgkkgkh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ozmxurll.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163pweqqett.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163rfcmvldw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xapzmljd.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163zdwdyqoj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163iodkcufo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163awiygtuu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163nkfkzklq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dbfntqad.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ydlddjfm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jcsvbsfb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fpazgktd.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163natkyieh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vsxohapl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163nciqfwjp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163impisboc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163crxmifyj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zgsxtsbi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ashldqty.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gcrznlxl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tkthwdnq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163yagojulb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zndqqdpq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163frbdcdmo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163nmuhcbip.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jduphorf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xzmxsfbe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wlmelrct.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163pgatprpd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hxqtlxhi.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qtqnccrl.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163damwsvab.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163wyxrtqqh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163chctvnsy.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ybbdksux.html


<!-- 参考信息 -->