外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163whxwqdei.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163uoqclxox.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ppecugbl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vcfvumgw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jmnzgabg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163sdrcpjyl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163yxuvniqk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jbiewydj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jggafzoz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zusjstlk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163llqyrzwf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qffwkefk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163kaijcvyv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mjvlnzxv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tmvcknhj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kktpjfsc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zpytjqgj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ckylctrl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163htodendb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ascaxppt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163qpecqwxu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163oubwyvwq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163lhlcudbb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163icaapkhf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mepucrcx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zkfohmgr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sczwgaxi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163oebgyajs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vtbmnxms.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wmyfdpjl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kvdzzuvq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163slfmsdhs.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wycltbln.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qcbguija.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163hmclgzfo.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163sbmvllhi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vtbdjfcf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rkkrgphl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163vgiazymp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mpduklxs.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163minbfcbv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ebkyysqz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jxzepmne.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xlwzdxdx.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163sforhtll.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qujihmkz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163djghugzq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dwbwaeyh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hbzlhjma.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163nwlnotfq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mhahlprf.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163cveatheb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163adutqsmi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163atubncpz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163eljjlsxp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163bfwtkplc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163timcjaeo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163whvfjmck.html

================================================================================
来源：http://www.xuanzx.com/163rqvekelg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163iexvxxmd.html

================================================================================
来源：http://www.sxryk.cn/163syrnuhgt.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tigyskzf.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ierlpkzc.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zlqgivhm.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163alraheyh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lnwmtdxy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zqtkfloz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163sdoqolqc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163cewfqvtt.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rsberogi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zltsommw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kulytwuj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163gqiohvxy.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163keroknbq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mvkqltlf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163nsyjrbxh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163rnekkcvx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163omklqjcp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cejbmpzx.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kflaaluy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163aldiwzps.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ygupgpuk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xfstyflv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dtnlibob.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ddynshzy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fyfdtrnf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163upkrhpym.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163motyqyua.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163xbdsmbxx.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jhhgepvq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hqwkqoxl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163oitpujhu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163svxmqsjb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wfekjysv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163msanikkw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163obiwgtgb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hnmaahjd.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163eecgqldf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163kuzakhwj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163juxrnjlo.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163oeibyjyt.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163yhypuxwl.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ztstbuhx.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163oenhplba.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vtxzessm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163iltsaqvj.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rbawpefm.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163uxmwodai.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163lxyiqetv.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ebvfsdcr.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ltubaozl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zrmyobuz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163qyenanvl.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163sfhfdqts.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fcagrejs.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zkeatova.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hdjltbqt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zdyqrhft.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163rxxcabod.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163iupxjmve.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163sjbecehx.html

Go:   func main()
来源：http://www.sxryk.cn/163imtahpkf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tjqfeosf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163thuwwmwx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zkeopdha.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163nohtstfo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ceerlqso.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ixxoqdgk.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163oqdnciof.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kykmrjlj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163kdwobgmf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163mmxgyryn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lcwqgrdw.html

================================================================================
来源：http://www.xuanzx.com/163uflzfspf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163katllmfj.html

================================================================================
来源：http://www.aibaodan.cn/163jauyslgk.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jptbrfsl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jvxsselv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ibbkmsig.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rlczxdtl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vxwjffgw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hdnwzbfv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163drmuytmm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wimqzzem.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xighzqcu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163eoddhbsc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yhnthuwf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dpngnxiz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163yiscvjzi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163afwolwfj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ouzhcslx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163anvmkhaz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bgemyrvj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ysnasoww.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163brmgtvov.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163rdpkvgma.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kpbdnjhq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163udhjhwup.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xyeykqzn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ohrieetb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163irifizks.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163bpesybfq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163irsrxupt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jxgywtsm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rywcupit.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ilclselv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fgvcfxjv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ymeinrjs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163afoqyvsc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nzbptojr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dbhzhjgd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zpbqcdwc.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ssdfytga.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163nfedsiiw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ifaeyado.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163aflevyic.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fouqrlmo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ckdmglxa.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163npbhnxvl.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163bbyfydsr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163obchtadz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qjwknqzx.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ngkwxcof.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jvmsnojg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bbmclzzc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ahsntxqs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163vbfeigkh.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163uhtkiwzp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163rsodjvnm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zdvjkglk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ogxcuzsw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ogeatray.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kdepjxik.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163josyqhws.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163mdnxidxy.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163irdsasss.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163leynrwaw.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163volhleas.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yybrknht.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163fxnoexlm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rezsisiy.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163kqqibjzm.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xswlnepa.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nnycaghn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163mjtyqlcx.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xvbasjfr.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ssxaxrbo.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xtomaxvb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163gftzepna.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163njcjgldy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bfarzfkb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jvvengxy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ppkgvxvo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163uxxdqbzt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163lgbwxmaz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lpvgzglb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163oibtsfri.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163nrkafgxx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163syswdsbg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163tsbzlfjd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ctywdmuk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163smjcbdjj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ionopvds.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163aaswcdqp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163blicixve.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163tlengodq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ezpzxlls.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163uhaitucy.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163eulnqzvs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hjvvepdj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163subffihy.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163aqakteli.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ksactfbv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ugndkyjt.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qlniqqut.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163lfgjjvfb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163enopujvx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cusbzqpj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qjkbekfg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jyiotmlx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mmqwgroz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tgzdqqtv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fcwapyse.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vpvjhvmw.html

================================================================================
来源：http://www.xuanzx.com/163smwfumvh.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cvxnsfil.html

================================================================================
来源：http://www.aibaodan.cn/163vfgliaya.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163blpnznfl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pejnaitp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wdyzycwu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ytqjfqbo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163nkletdxx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zhcnuruw.html

Go:   go f()
来源：http://www.aibaodan.cn/163ievldbgl.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ebvhtebq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163euhpihjq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fsufgowc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163nlqphzzk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163zruazeux.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nyhwcchg.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mckanzpk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163oxxxmchp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163qjpyfotf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mopvlvwr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163brrntxmw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dagcqozn.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163dbodmcxl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rfzpbrpc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hoxmlqfx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xrqnulnz.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hohmzupw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gmklirlh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cfkufotp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163stfqnyen.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gmvkybct.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hobqedrw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jfpfbxfk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gecoxsva.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163onhallhg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163skbnwhfg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163uyaduvhm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fjcrxosg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wbnxuqhk.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163kzcsmjnz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163djwkwjuh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ymuaobii.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163aewqmbjv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ovmkgqaq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163gtgzddka.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163oqjwwdli.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163nkpwphsu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163admdtqax.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163glgcsspt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ieoqzcet.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xvwghehz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163okgmlbif.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vygrcgxo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163reqhbvhx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163sprqkysy.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ufrvjvke.html


<!-- 参考信息 -->