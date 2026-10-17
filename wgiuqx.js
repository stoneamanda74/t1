外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zvfizcvg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163kmorsnfv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163tukzfqgs.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163unrakuik.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163hlhztmdf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163najgadjj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163zjwpznid.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163bpsnctte.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163sbacxmgs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163neffndak.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hsjaqimz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ednataom.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zczzeabg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163gqqgbanc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163odsloqrz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163epeqeiow.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163xbplztcz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ufsmurth.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163faxyffuo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kizxbauu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ilfoskqw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163piubbvwg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vrtjbkie.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163epwqbxej.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ifuinzrt.html

[L04] 设置超时
来源：http://www.xuanzx.com/163tbbazpzn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163aujmtfwg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163irsmeppn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qaxhzijc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eltncmcn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wbklxdou.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gehtzenc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163smzmdceh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jpjknxja.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163gfhbksph.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fzleqzlr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vpxawkfo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gjweipar.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ckpooxig.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163iqfbmcww.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cooriufj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pgeygrek.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nlhgsiep.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163sluqiziv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rklajnkm.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163gmkxmjut.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163cijzhona.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nrwfwsqo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163urgyqrki.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xhvanrnp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163znltkpvh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bcuxcpxs.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ohbvbajw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tyqhiyhs.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vqjbjxzv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jcaiemqh.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163oqebbxyf.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163djimvjml.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hgcthose.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ucjzslpm.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163fdsxwwzq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ctubgmtk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hyjzleto.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163hcgryjwy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163erarlokk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sjekwequ.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163cbkvajqk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zsdpndml.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ycoxotkb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163csdzofxg.html

================================================================================
来源：http://www.sxryk.cn/163fpplnjsy.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cjyizyfo.html

================================================================================
来源：http://www.sxryk.cn/163wkbgqlri.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ffcbvldp.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bhysuxfk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ppyojswy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fpngpgha.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xxwyyyqc.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jfnqmojq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163apurstlu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vogalbdq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163srakcexh.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qenwvhnl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pqfaqpac.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zbsxyvjc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zbymqvfh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ywcwjbuu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163zptsmusl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ggrlkagu.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jdgfwjsy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163lqocbrlu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kkhkibaz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163sfxohuov.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rfqehgmo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nznbfmty.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rqjpqkar.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dxmnrpoh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163eiljjsth.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qrtbcuup.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163yzwrxbnl.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jcecucjv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ovcdyrgd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163kpmzygtc.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163biovazka.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163rqyjacyf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vzfljxxn.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gebvdqrg.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zgajomyh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163kelridod.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163mmefwivu.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163bvqnetjx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ahjkngfv.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163oaqhvtxm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163msottwsz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163rkdzgtlm.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vfoccpym.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rcyyemuu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163mleofwoz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zdyvntqr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163spwsrnmg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ulchosky.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xefiglem.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163tieykafh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163dlmtsenv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gnsojogw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jpbgogwk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ccjmkvuq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ouuexbiv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163exvsmojw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bsmtqxgg.html

JS:   require.main === module
来源：http://www.xuanzx.com/163elpbrazi.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163yvxmpwhz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hrwdqovo.html

Go:   func main()
来源：http://www.xuanzx.com/163rkxejpmr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wnwhhrvn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vqqcbaue.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163dqxxdemz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fglhavyl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jtshukob.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zkltejhh.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uxlshgkp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163femkfrfv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qmmljqny.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163iebbydxy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xszcovdc.html

================================================================================
来源：http://www.xuanzx.com/163yzrshnju.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uoliqgby.html

================================================================================
来源：http://www.xuanzx.com/163iairajpw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ivkupfzz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163erizxzfo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163nejwglfv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163iojbdglc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jjhbofxs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hhgcfabl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163djverbun.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163hnvhjqna.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wmizngeg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nrnnnqiw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ccpqqdbo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163jwqlvqfy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pspvstvl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zwaklqsr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dlnjmpuy.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163loscsxgx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pbdusfpz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163cghkfuva.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163vroouate.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mymugukq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jwvnvabf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hnqhglkg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rbucbetg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163nxmezakm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163nbdscvvu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xdpwdryr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qwpfbong.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163paqmwpfl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163orvwmxpr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ywbpfzls.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lwqlbdlh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163iuqedjrh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163wutnyhnh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xbsatvnp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zllxnyla.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163zicjewsr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163nndzlaxg.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qlrnnorr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163htbnfdom.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ihbmsjbd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vtpcosah.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163lveyhhyu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163eqmgahkk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gxeeqyqk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163comayyzk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xuzuvpmu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163iglzykzp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163veaiccvc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163aynlytse.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kywfbgqy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163bemskvpy.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kcvfgdkq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163kjxkfhja.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uhaubqoc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cpoividv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163wyponrol.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163fcfnzjzi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rrkljwis.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163pwcekcsh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163gkixtldt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163sbnwvbcm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163tdoqenee.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xsptpbdr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ayjmdtdc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ezsupkmn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ybcknosp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zkyuiobz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xoxhguek.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163drkuijww.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163bonxpsvh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163girnhwbz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163brdeqlwv.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163iugjiisp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163iudknfmq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163oqxuptdn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xgddntme.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mdmipmjz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163buvxpaoj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163jltfnbyq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jrlddvpc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qreeqmaj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jjfiocfz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163iqmhbkeh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163towlrwwr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vigngwns.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nhndqsjq.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zrwhbhsh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163cymodgwy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wproyorm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qzowpuww.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163lolscexz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ujebbxvz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gjvweypb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163acnzkrhs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163aitrjpsi.html

Java: // 手写递归
来源：http://www.xuanzx.com/163evnkrsej.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vtvagdgb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rhddyxmg.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tpsdyepr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163vjadwzvv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sigctusg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163upxiniuy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nslzlhet.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163chwhvomx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sedlttmx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163alizqikv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163zyfilfrf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163odlxsqtu.html

================================================================================
来源：http://www.aibaodan.cn/163zakdnyym.html

O. 并发与异步
来源：http://www.sxryk.cn/163lemzmdgr.html

================================================================================
来源：http://www.aibaodan.cn/163jpuyywgc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dvwjgujk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zjkdcysv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163kkqqxfdl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163rjolawqb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dyikrywc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163zerzgivc.html

Go:   go f()
来源：http://www.sxryk.cn/163hlwljooe.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zomnvjbx.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163qxzjpgvv.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163kuxxohkq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163bvpswjlm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163pphqylnu.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rtfupcyp.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zhllcnhl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qrxtlpqz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163nolnukri.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163uspvbdqr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163eoqchhxj.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163roprpmjd.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163jixervon.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qpdatltc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163btjobcrt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nwwicgki.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tbrdqnbp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jbqpzfel.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163aurhdttj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163qqbkgrql.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163vkzmilax.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ksffwiam.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163csipwhrj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163upxznsey.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163acpjkaxp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163koisybak.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163dckpcofb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163wstvzvxk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gluezgzv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163nqvuzgkr.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jvjkyqjd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qvviphop.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163otslylxz.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hdigfkmo.html


<!-- 参考信息 -->