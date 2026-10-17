外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zbprqjwx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ylvwryme.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wmkjsbis.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rygfjkjf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163meyvchhf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ibqzwkhw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dppuhcmn.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xfghkkoq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163xzwhxqsg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163jdzpqkth.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ztpgxusn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bgrwhoaq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zxmwfwgh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ghryfycc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mhfuemic.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vpfyjtpv.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163otnxpzkf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163prugcsnc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hpotkepw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nkafngmz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hnzqxukl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vlifiwna.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163rmvdiriq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163pekcvcfe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ccclxybr.html

[L04] 设置超时
来源：http://www.xuanzx.com/163zoiepnlm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163yboayjto.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163kkkoiakk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163oejxtfxd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wmihjcoa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163kiqfqfbs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163bcwkvibv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163qbywumol.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qzdfrfrk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hngbsgad.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vuuvtxig.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163zlpekhqj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qakmgzpi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dtjvtbpu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ftdtslmn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xnsvwqkj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163csfilann.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163fckkcquu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163eyvcwydw.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vorlqyqk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lqwtxqrs.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pgmhjmts.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mmueatto.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mcphicny.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163atsjnrcy.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hfgvbcwy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jkevcgzb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pnszqmyb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hxdnozsx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bkdpsfdv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163afueltra.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163sulwwloo.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163qlaepsoq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163wkzxoexx.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163fyslicuq.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xnhimuky.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xtmbkovu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wrinpewd.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163sxasrngh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nvurrrsm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rvpvpmit.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tjhgnlgb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qmolathv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ucfqjikn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163afsdxoqn.html

================================================================================
来源：http://www.sxryk.cn/163mlzwlnnj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cmvbmbcc.html

================================================================================
来源：http://www.xuanzx.com/163evdgrzsc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qncepete.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hjbxtitu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163tfrhcllv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dzmcmudu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zlyozmlp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mltfvqbi.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rndrxhdr.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nppkkthd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bhfevlsi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gajfwnqh.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163vcoznbqe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hafzqyol.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jlsiprgf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jrwsytnc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163yczjqgzo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163caoerkri.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ztuodvyx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163eiwbnwnt.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163hevaxiox.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cbujtkaa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163dyuqszng.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zbrjbkyh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cjjytbcv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163iifiynlk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jlewvxpf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163soiibjkx.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163oetqztrj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wjestyef.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163cplbgegd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163omacsuac.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163zoupfvtz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163qhyvvuul.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jrkjxiev.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qfaivcsi.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163rgrccmqn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wshswqum.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fxgjllwl.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qitcduvi.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163airgcxex.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wlpibeeq.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mocwazzq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mdqnnhle.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wdzwkgqg.html

Ruby: exit 1
来源：http://www.xuanzx.com/163utfumxoj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163athdlbwr.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hkgtjdmu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163oaydzitn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rbxylemk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jyljtwnr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uymzzadp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xoywuprk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zncvkwxc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163psefliql.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ryjdpsqs.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jksbnvhq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ajbguprg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xtqubvuz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dpphjkug.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163itwuelfu.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163gntfzlnp.html

Go:   func main()
来源：http://www.aibaodan.cn/163qnvyzkbw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wjnuwlez.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uudgapyq.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163idkvhwjt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163iixlvcjl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163yqzxuyma.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wwxxowsc.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bqllvszc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wmnwttxr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qyxkrrap.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163edzccify.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163blgonsmp.html

================================================================================
来源：http://www.aibaodan.cn/163kuvzcyvg.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vrbdtbwv.html

================================================================================
来源：http://www.aibaodan.cn/163ywiyicwv.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163awvwmbdi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163iccxwqur.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rquscmnp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163brvnxptk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nriupmpc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163djiadtzw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163exofvulb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rwmxvtdw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163chrukryg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163tmbrmkpm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163khaelbuy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163gyaeieii.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rcpouwwk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hrxuhgvh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nmboezmw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163bzlrcvqs.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zewbodeu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163xiotqzsv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163abrgzdwu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163eyzavtkm.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ukinmmcf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mimiazhl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ntunzrud.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163msavfquj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163hpmpsjza.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163hufpwhwt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163owrquidd.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vrcorqdc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163msakfvbz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163etsfcwrh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dnggzkbi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lqqbjdrf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163tphjiyyl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vwvbtlhd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zxyujhor.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163aivcannc.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163upqxwlzq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163sstrluxr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ftwzwjiz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vuwlrkrh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zuxkwqaa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vgvpadgp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163scelwgxh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ctbokube.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163nlmcgvbl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vfjdordn.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163betanrca.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fjlfgiml.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163oookvkuo.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yuggvynq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163thhqbnwv.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163hzenwuuq.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ymnvxxyn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zthilsaf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163xsuxussr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163emmeljqn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lbmrcael.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hrkeqjop.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163onontbkj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wpvrffob.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vrfieynx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qcckgsax.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163pjgzejgn.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163bdkyuoui.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163fixvcavi.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163epfkepuj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163szhkkuju.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163edcrnehe.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xmvdkooz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zmuazwhb.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jvmvkzin.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163pvfkjxch.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163iazgytwm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163mklatqda.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163kzavwxmv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hjjqahuc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163mfutlexv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163henhjalf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163orsvybgb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163nfckodja.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wcfjdcdy.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163pmnjrysh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xunlljmy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163tddofjer.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ijnhzfhb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hfonrpmr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gaydjhsw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jqpccxbu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163zbevqsbm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163bpujbqoo.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hlipretw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lbldygjo.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ujbfrvqg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qzxwiqlw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cyxzseel.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163iktymfrb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163htrwmkmx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ngslculp.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163mecyfxnv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163nwcinpyl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lobzzjfx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163chffpjlv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dhgjmxfa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ixkycufi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zeocbogt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vlxjiyvf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163havwrdln.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163waumxfak.html

================================================================================
来源：http://www.xuanzx.com/163wdlgliwb.html

O. 并发与异步
来源：http://www.sxryk.cn/163mkbtojxc.html

================================================================================
来源：http://www.xuanzx.com/163grtirtyq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163joekpizl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jawhzlpl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ztjzmrkb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163lvhtohgb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gcyhwvlh.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zgonpikl.html

Go:   go f()
来源：http://www.sxryk.cn/163wcwvwctm.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163whhjouvv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cqczvwek.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163davzteol.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dnvlscfg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163zqwbnxzp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163unwxzkrm.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163anujucon.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xeacatiu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vmdnyqjt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163iameoaib.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ciljwcfx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wuyokvoq.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ueuwsclj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163fqwdcgof.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163axawibxf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zisvkbwd.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163acfnnsyb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xazkidwe.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ehfwmptk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163becltxtw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tvvtnqrl.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163cohcisfa.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163zwmwseax.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163oqwewybl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pdpvcoci.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163frwlypyk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bohcmggs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zajwjnhh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163cpdybtah.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jwsnwhmn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tqacuhis.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163akhyemem.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qumjocqa.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xgizxosn.html


<!-- 参考信息 -->