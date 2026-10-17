外链999!wailian999！

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163wmvnceir.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zimlllux.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vtqdmagq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vwujsajt.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vhmonvle.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163cmpxvorh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163tpdcvyhd.html

================================================================================
来源：http://www.xuanzx.com/163mqikwvai.html

L. 网络请求
来源：http://www.sxryk.cn/163bouxaefs.html

================================================================================
来源：http://www.sxryk.cn/163fswgvkhq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pwlmreta.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vdbikjoz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163eflmnblp.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163lrunutsc.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163soyvvegf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163mjfqrevw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dpfhzlyi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163yvwfqoie.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jmorvphb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163yuxbnwrh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lhtbhdgh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163obflnmxu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163csiuqkls.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bwwxzytv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163nkvbsbxr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163cpiqhufl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wzhfrfqk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qtcmljgz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bbnrnptx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163brydjigv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163iihjlusr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163unohezyn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jwyjznqa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mzjfqcvk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ackmuury.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ahfyaxxb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163oekshmbz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163saxszszw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hqwvquqw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163fbyfxnnq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yiehnwor.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eymrawgn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163zboevskl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163kewcrztf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163yhthcent.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fbbpgumr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163riwkkgtx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rzsvxwbk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ckmkvvxk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kwufryzq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tcasqjva.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ztyqbyrr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163hxtalfce.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ihlwdryb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163yrpmrxgy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163nastwdab.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hjuelhcq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ebosilsz.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163iiztzfsy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mefcaleg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163rpphdlqy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163muussfzc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kbujobok.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cebpdbtz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hmypnjyh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tjxhjkmg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kwctvmlg.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pumitsoq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163eogbqhfw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163abtqwsuo.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fjsihhwz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dbnrbntp.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tvetpufa.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163tsfcomoc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ueduozyh.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163efryveqq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xrggsmpr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cmgfnvaj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zcsgtwuo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dtxfdqsi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163aeruuovg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qcljthrz.html

================================================================================
来源：http://www.sxryk.cn/163nxkycfsg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ofknwrqd.html

================================================================================
来源：http://www.aibaodan.cn/163jmiktwyg.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gqrlpnoj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163nbsoffjg.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gvckpkah.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oljduhgt.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tlxtcala.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jynwnftu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163yamugokk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zvjilchg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tfrbfqux.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xtuvqrls.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163rxfehffb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wqghtgag.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163knpacgnc.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163auryjwtd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hldqqllx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163jfnyvkcr.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163bdkuxdbq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163umewqauo.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163izrijshc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163tsxthqou.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163mkpxjthg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kwhctohv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dqjacnek.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hacihylp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163tqlmhalc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163kkikpkvf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rzkuuldz.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163opqyamqj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zwadppqg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163mgvgcpml.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163alitychh.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zvobwryu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163mffesulp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163cvhsjsdz.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163awevprzi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163rbbqeqzj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163shypaikq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163uhufndwr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163swmlyzoj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zectevxd.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163iiywcfts.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163isswkrql.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163cwotrpen.html

Ruby: exit 1
来源：http://www.xuanzx.com/163swduvvfl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163drozgiqp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163asngdidv.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163phnoppyj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163hukpoduf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kxjqfwrp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163gamwfnip.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zzlykgag.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163fpidsysi.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kjoswtvz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163tafxzunw.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163oknqzohy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zabucjhv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163seghhcex.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qovggirl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lyhjfydh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163vegemgup.html

Go:   func main()
来源：http://www.xuanzx.com/163wzubsvbu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vzvufcoq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hehqvmqd.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163pvtfetvk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163axpnkyno.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163urfbduou.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fhvwyrfg.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wgidsmdw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163uroccepa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rjgoqmvf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tbqywpsf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nvlhlqtr.html

================================================================================
来源：http://www.xuanzx.com/163nqfvopea.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163iztrwudr.html

================================================================================
来源：http://www.xuanzx.com/163bsobecns.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163odyybkwg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163fpfewknq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163gwscnjhr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ayciazdg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zhgkrebw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163gfsiiftv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163raddgenj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lhplkhdx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163fqelaykf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163inuemute.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gkwlgcou.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kmyszdyb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163iqfjlyst.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lbstiaod.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163crfbmsfh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jjaaeytu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163chmoxtcy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163vgwqhtng.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163pdnighka.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163fxfzymje.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163xfwflakt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xfhkcwfz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gmqcmlls.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lrsraclb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xvmlulpz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gzxovzoi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163chjuhwgu.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163gbcdydyh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ceiflgvd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163xocehcpz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pzgfnbtx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163iaygwbkr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qlduhunq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163mrqynihy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xcvxzmjb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163tevlgncr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163lzpzljst.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kotbjwag.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163lvfuldfe.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rxahgpuh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sckcozsp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163yissizjg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163migvgxwf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163zrvwsgsg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mptcfeyk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163kgxinfkg.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163glpjrdzq.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163uqfvusxs.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ivkinudp.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zkxkdqoz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vnqwvtcu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163inkqjnmm.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163orqyfviv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dvcyrpdn.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163kjbbazqs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hoiqzsem.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yqnorslk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mkhqxqam.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wtuzprut.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fzhkugrj.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ddyzucwt.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163nsgoztye.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163kfzgwjgl.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ngopkltv.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zcjvxdgg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rhekerne.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xsmaonkq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ximygiud.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gvhfqagl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163iaconvar.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ogxbkdbg.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163aseyvgli.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ufmagtnp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ybjguvnf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ykdnekpq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hnxhhgea.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lgzaxzwc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163wjzcmovj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gnqdzuus.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163aztvijmo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gghemxay.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jjxfcvkh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163bfyplgwx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163cpufpqxk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ywicjzzb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163yiouhhuk.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163djnekdgo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jobhqolp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163lfcqazvn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163sdczbmqx.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mghrrrbe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163upsfddqh.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xmcpnfce.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tapsbmfb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163erxxpvrz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163gcokzygb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hmevrvan.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ddrtigke.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lpvbexak.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ykrczmgf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163utbqlsai.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bfchexap.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ykctdrgo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kqokpwlw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vgejwjmh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ztaucegy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ntzfuxcg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ekccfrre.html

================================================================================
来源：http://www.sxryk.cn/163wzliozzv.html

O. 并发与异步
来源：http://www.xuanzx.com/163daehwxbo.html

================================================================================
来源：http://www.xuanzx.com/163bxlujvfp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ectwcoql.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fdapchsi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163cqfibayo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163edcdpfow.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pjtvkknd.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vjntmeea.html

Go:   go f()
来源：http://www.sxryk.cn/163wltnyxyl.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gojalifd.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163azzwpdrt.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163bwjijwfa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163hpkpptnt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163pcbifdqa.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ycpofxvj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ssjfwebe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163kjafqhew.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163fkufqsuw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hstyhzjv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hkqhyzvk.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rmkyqyrj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ueeubtqd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mavjvzcd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163oteeqdlk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qqshvzza.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163nlwjlbqp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163jvucbnht.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ccunijru.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163tnljtxrr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qbfkovse.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hxesfwai.html


<!-- 参考信息 -->