外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fozthgns.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163hsotbqom.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sowynwlf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jkplgdun.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hgnlkyqd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ludkqrwm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163elcgilac.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163svtegxtq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163atjehhoc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163rlykomsj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163gfmqczzh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cofzlcmy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wyqtkvbm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163dtjkqhho.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163gqybdsfq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163aoevswhs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lzetkhmu.html

[L04] 设置超时
来源：http://www.sxryk.cn/163huhssscd.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163idcuyvsq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163alivmoxl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pmvjaeqo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163htrgxdbm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ygfdlqbq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163vdtglkok.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163quqdhcsf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163zyuyxerk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163vrlzlmae.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ljwiarrj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rtihhszd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nhfunomu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163beknyxgr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pejnlays.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163snyebwyh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163aoirarhq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ksbulhtg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vsvcnxkq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163elgivysf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hplxwhuk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163sriczxrm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mcooqxbm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dvvtqhpd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jwkrjhqd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jwbhtmus.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zeitdedv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163yagrttao.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fizfoyvv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vkioizfx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bmceplnl.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vofeesav.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163itfugvrj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ogpzbgul.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zladinci.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163brzucrqy.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ttglbwxn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vycztwjx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163yqzapsli.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qkjxdmep.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gpfneree.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aumwnxtw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fxcariqi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cweamgfa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163zhqpytps.html

================================================================================
来源：http://www.sxryk.cn/163vccgtspa.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tbytginf.html

================================================================================
来源：http://www.xuanzx.com/163jtzsjpdp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qbyvpiqr.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163alxlivki.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jtwtwlsm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rsyogolq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qovubvbu.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163njiounbl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nqfktkkh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zajgcnoj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rwpxpesj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163daficrqc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qwarhlvw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wmlzqclq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163pghzobks.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pacpwlsd.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jvzchjqo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163klyfdpcs.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jxwjozqg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163bfaaivaq.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163silidoxu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163nytkwfyp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163cmztjotu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163umishkqw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dswlbrrz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xfxdfsur.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hfcsswxf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ciojumoh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xlnashfn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pyswdbzp.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tejpzjbu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163lckftubk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hqzgfrms.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mvfdvuqp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163yqxexlwn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163itbupovo.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163oiiebskv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tdhucjbu.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bdthxytc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163qrjcnaoe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163oppxpxcp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163yoiguyay.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wmvrrxbz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163bdouaiqs.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163teamxnuv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gvtocnbr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hrfovtna.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163zyyafpyb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163yiwarasb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dmxkqtww.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kcjbumxx.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tscrrees.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163phxivtes.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163bucuccfn.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163tksdjrak.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163nhorzocq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jeldfrze.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vmdaffnn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xfvkqzxg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tvyckvee.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ukksevxp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ctruqfcb.html

Go:   func main()
来源：http://www.aibaodan.cn/163hhexhrec.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fgnqdnnc.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163apsxkxlp.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ufshetdp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163pggqebpl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163trgaipmx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163btvudgwu.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xptjsbrx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ttegzllo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nmdnzgcc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163tsaccisp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lliyehlw.html

================================================================================
来源：http://www.xuanzx.com/163xeyqoxba.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163bzjgzjza.html

================================================================================
来源：http://www.xuanzx.com/163cenhrvij.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ggqpssbp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gmldjyvs.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wjgybmcr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163umzqfqac.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163henvwnyw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rgrpwaym.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163eqlcqyhp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bpsgdjhf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xvenqqbs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fvevfdfa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163inhkebkn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163sbykjwiw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163utehgsfr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bnrmfrme.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163usginqcb.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163abrhlqkp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163babkduub.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163filgrjmz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qhevkcch.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163peghuuvp.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pddcvloz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ohneiuuj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163docidwnv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ooqnztmy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bwmyoqmj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163recpkobp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163oihdcfzw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163txuofjkb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163irgnpawi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163zmifhvut.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hawkywgy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uivqanko.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163yjtsrpqp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ioryctnw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163khllamzy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xbwtsdkq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163oylveyif.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pduadvqn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163havafqif.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ljejswcz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tbegsomi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163defhqmhh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163slxtlsft.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tzkxuyyw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163eijlofyn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163deomenfb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163qhimwwvl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163snwzxfsz.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zgtqfsby.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dfhpvvnq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wsivnghu.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163eryxedyb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163khkxqziy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nznkcqah.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tlndneku.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bwvwgqba.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163pswcdqof.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ugtmuwra.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163inesfrqa.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wzbaphkp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163bjcgektz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163bmzhokwv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163bpakjyyr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163spkcmlwf.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163nwieadao.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rcaadnpi.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lhrqkhdg.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jmbzcgkj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qnyqxvzr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ktwhinso.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dsapyevp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163udpqzkuh.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wrrcrzgn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163vzrvnciq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bskqduic.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163bkjomrzh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mbtirgxn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163tvprcmgu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163fpsatouj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pjqgyxyw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163peucoxhi.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bnahdfwq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163tgumofex.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qjycludx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163omfcnkhc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163cnghikbp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zicplnkw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163gtktfjbq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163savsocen.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ecwujysv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163utnhownn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163rxeagirn.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163aqmffioy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lsmqytgt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jzssaphb.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fxtewzzc.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lwttbqhc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nzvovxxa.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163awbxrilf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163msihjjzd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163epxhxebs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qwrjdeym.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163oxnkefkr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163iipqejax.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xhfumpjz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163zzufcvpe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qxxdohxc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ryadabol.html

================================================================================
来源：http://www.xuanzx.com/163uqiadygb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mfvwealx.html

================================================================================
来源：http://www.sxryk.cn/163qfihqtzc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zydtlrro.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163gjdevzdc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163udfwyagn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163wqsqvtrj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vlspeelf.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163umqrsqjh.html

Go:   go f()
来源：http://www.aibaodan.cn/163dytxrhrg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zmjxeroy.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163tyszvhfs.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163prsnblab.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163hexxalyz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163flhagtsf.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mnysznbo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163akyepqfj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jlwtbfjb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163sfvwxkax.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vnnlmipl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jncixifd.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dpavfwyw.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xbxuzbot.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163dfrcseel.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ldaeuaqg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163phddnakm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qguihmja.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kvufwgrc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zkdinimc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163hnmkpylo.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xescaymd.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163udyikrbo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163fpwzaeng.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163yomvrffx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163nmxcopwb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rqbxdsdm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ytxxuthv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163daekzuhq.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gikbdctv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lhodqzta.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lfxyceew.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163pywlxyea.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ydtrzpxp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zjbxnpqq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163axdeheli.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163envautdy.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ejhknkms.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qfqcsgab.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163xafuvrtj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163imhsmrbp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163mfbtamux.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jjcjcatd.html


<!-- 参考信息 -->