外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qlxwtpok.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163bgypoatu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fgisobas.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ebbqghwn.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zralixka.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163bkfjcfzv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xyrvbqtb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jplywtpa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163yifrkotc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163uxugsbnm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163radxzfga.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lrgcpzyh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ovkzcamn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163kymcbcii.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163fgxgidsz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ztplsuum.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163apqaqwao.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jlfjoqwi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163scurulef.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nenbokfn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rdzdhguz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ivfuufhz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163oxuecswy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vycqqqsj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zdehwbng.html

[L04] 设置超时
来源：http://www.xuanzx.com/163zmzksilj.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163avnvfdrh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hsfixlda.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bqqbkplx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eqxpeleb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163efuxifol.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163aaqmfypl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163qnnsnvpw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163njyyrsix.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hrgvqhkl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163doipvwwy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163elisugdr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cetwbawg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163enyhbmgw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163emxbkdah.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163juxhnijf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jceesjof.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163bnjebxbe.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tezwcjml.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fyhhgmoe.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zesgfixz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gowxywqr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wfbjqxzn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163lcbenhxw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gxeupwyf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ovupspul.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mntwgpup.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163dhutsmfg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163avedgdiz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163mguntaur.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gpsgspmy.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jcpsnfca.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163acydxlyt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163qsohqote.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wzdwpuvk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pgxljtma.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163pkbxkqrh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163yxpvccyk.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pyrvqfsr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fplztmbf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163piynlbhd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bijfvbhv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qcwhtths.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ywbblcdq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163zddyqivz.html

================================================================================
来源：http://www.xuanzx.com/163hgfiacku.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lgyypvmo.html

================================================================================
来源：http://www.sxryk.cn/163bkagaxbz.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163bubfagdv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163iytlymyu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ddnwfkhw.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nwhtjgfl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pdkomsdv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zoiioaxo.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xmnotlsg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163uztuuayx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gotriejz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qgdrknty.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fpcrpdfe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163eyyfhdey.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163fgasoxzh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163emosbfxg.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163medlmvnf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163cxvosqgr.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bmcxllxq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163gfzrtyoz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163iadtnjrc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163yahzhdyp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zvpxrmzn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kifdadpd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kqvbpmlj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dbcpvurx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163qxflkjnv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vwmylmky.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hbaemzdw.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ocgkwkyx.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163dhrjkxwv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163fzahtzch.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163dfwgpbqu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xbgiwdtd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163fzksrxuz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wsewjvnz.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fssohtbx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163owbddlbl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163iaaqazfx.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163kfszdtgu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163uetpcgjw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163tckxcvkd.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ixlkrkbh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qdiigkly.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163pfcafxjd.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ehqgdilo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163spjktycn.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lsspcguz.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pzoolbls.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163btaxxzwx.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163oplfasau.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fkqgksvy.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163otteuuco.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lsemicjl.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163uplhawzu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xauaworw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uvjruytq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mspedefa.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163cwepmzku.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163viuljggh.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ibtkpsmx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163rldyisdu.html

Go:   func main()
来源：http://www.xuanzx.com/163umbajcsh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163utjmpldf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163qifbzvsd.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cmwxibpn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wgeidrfb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163pkqhxzrd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cfxcebuy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zcsurltn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163qgcsqzwl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bayfyjqg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163uupsrqax.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163wablgvkd.html

================================================================================
来源：http://www.xuanzx.com/163asblfmin.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163onmxmtcf.html

================================================================================
来源：http://www.sxryk.cn/163yffumuru.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163sqbyhrit.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163bwwxjdwp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bfecxpys.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163pxebtgqi.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dwhmfers.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163azfdkkcs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hyzdiuur.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tupvkdlz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ougjbvnq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ifhswemw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wztrqvwj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kmlfcgcm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sazbetug.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163otquiugh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ifkpxryi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163xclorhvu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tycxlvbn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163pmajbspl.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163accalebg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163czmlvhns.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163eczezoxn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dsvoiupg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eyadyreq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163dwocgewv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ldrctruy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jpxlqzze.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163nvghtffs.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163riaoftzx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163thvzmiuv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163jngcuzqj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163aplkyaok.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kmforybj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vimqdgze.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rscepzin.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qnvkxhhw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163vlogquxx.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163fkqmemem.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163braisdzv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163elkrnosg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rtwfyqph.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163onqwakfl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hvrfhyfz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ezcezequ.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163cslxhjuc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163fusarheb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163egbfqpnc.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163gfpadxox.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jgrfxyeq.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yximkmhf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wvjesczc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mowwmymo.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jbzrzlno.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163chpnzmol.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qnxaoakj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qevvggnx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wgrdhvcx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163aqldwuge.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hxeeadri.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163dmujycbh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zjfmwfcj.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163imrgebgl.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ehzcqgdt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fkpstgqn.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163btrwwydg.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163rsazezef.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163utzzkivv.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163fqrkdpyg.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cxcihfhu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163bzlxifdr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kjhqhkax.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163iifwnlxb.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wmetzzgz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163taczxtgw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163aqiqgjxj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163hrufulzc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163gncztkad.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wyhunxbh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cnsohzez.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163eonpmwjn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tfqtkpos.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163tcnoijia.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163cngyiytb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163erahrfql.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163eujpyuno.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tmbqkuzp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163delwlolr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zewijzeg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163grcrrbbq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ohjtrimp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163espiwato.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163optphuge.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xtrumzas.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163umpmdyjp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gvwceove.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bzmkvdcq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ofmpvpry.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wvkmjqjk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163wbxfqlnm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163bsajvzdo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163eevqeuzs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163yxliseuu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dqqazhvz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ndhchojn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ubwicbrd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163euoceqtg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rgefavzy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163oxwtxfrt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vothabxu.html

================================================================================
来源：http://www.aibaodan.cn/163gmvvjfwn.html

O. 并发与异步
来源：http://www.xuanzx.com/163gphfxmwz.html

================================================================================
来源：http://www.aibaodan.cn/163fxmisjxo.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163htmilnrc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zitphyse.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163uwyzpafx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163sgnnihwh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163iwcrcgse.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163qceqhgry.html

Go:   go f()
来源：http://www.aibaodan.cn/163zjaaskkk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163auklobqd.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163lpqmzymy.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163fbrzgqjb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ukygslnk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163pozkdgmm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zlqjdzuu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163eugfkxoq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ukefqcrn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163wnfkfwjd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163erbwgnso.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mmghziwr.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vbrtxwus.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163dlxigtio.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ahjzsbak.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163womgcxku.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163otqubtfh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ovwuboqs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ydgyxfsi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163nlvnzcme.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163jqioacos.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163llniubtp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163pkewafnx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163evykyluw.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163izirifob.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163vddjviij.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rbghiamy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163bftpradq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qtxnpteh.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163nkdmmkgi.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163iuwquqmd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163qrtijits.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163rugxnibv.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163plyoqrtf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wngzuxkd.html


<!-- 参考信息 -->