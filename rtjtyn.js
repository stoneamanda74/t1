外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ymfujxfl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hjqzwgda.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163peephdwp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kyxrceto.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163uwdxehgv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xczpkiml.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qojjwtuu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pvxppdra.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mnlzsfzd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163mmpguulf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163lacofvob.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163cupcbshv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sjsmjiki.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163mgofiybn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163klkfhufb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163nkycfycy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wozqdexu.html

[L04] 设置超时
来源：http://www.xuanzx.com/163yfybfeti.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163nmturflg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rtkusard.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qslayamy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vybuqhek.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fsfgbxyc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gpacpzfy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hxzjxiun.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163gikzidcu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163lcietemo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163mqrkefef.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163eihgfcaz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uuzwwumx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tkdoluml.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hkyarznf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163enylujur.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163techvwai.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fqbayrte.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mhimnamp.html

Py:   resp.json()
来源：http://www.xuanzx.com/163bbjxjfno.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163hnhqsgsh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lqeeuntq.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wtxfjenk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163svkojnby.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163rtfuxhhi.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ddxsfken.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163quqmvhff.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163kukizdxr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ykwscwpn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163umzirqpc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vwunuzoi.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163siwxlahy.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163jjcrhvce.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zwexjbca.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163cnedlxbn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hiavdcsg.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gcbugzvw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gyyvrjaa.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rbhadrls.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sflsxyyl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xlpzblel.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163eprvzfuw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163piwskpyc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qkpripjh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163owmrbuzn.html

================================================================================
来源：http://www.aibaodan.cn/163xmwqbrqt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163dbvzdwuj.html

================================================================================
来源：http://www.aibaodan.cn/163lvwvyltr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163qmtvawsn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163yfdqciks.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tudlfltl.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dgvgugrs.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163proxhcqi.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163nxagruhm.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qilprswq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163uwonomws.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163reuvusqp.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163aupoiyzn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163xlcwlmxc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163javunjcq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ysdtrgjt.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163puwtocms.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jzdiokgb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tpuzmxft.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zxjtcgji.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nmamrget.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163awtclybg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ozncedro.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dmqewyun.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hhjjakhv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qcprmpmp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163thbvnmlb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163majxiobi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vbhzobvq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bxkymzmw.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163afvwaieb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vfbqzjlm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wrvjztxu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xowzjcva.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ypzischt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bsgardrn.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163bolwucxb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163jkzewiun.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bsrzlnqd.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163yybotjel.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ddwywrrm.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163wxcwzfly.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163svehfdof.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163swbimcor.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vyqdbkav.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jskjqqdr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163zwvalawh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163kkkoczgl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163sbmlsxib.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163waguhngz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163aahelgfd.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ysgkmqpj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xpiawgxu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163conweizt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pgjdjyzr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nokrlwys.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gomhnjej.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vonffcpq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163jomdiknp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ylbnlxoy.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kbzskkjq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ptwzcmxc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163hyahebco.html

Go:   func main()
来源：http://www.xuanzx.com/163vrxeuadj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163igkctvfy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163hwupjlnf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163emdqnron.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163juzfavjo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163vdorzfmf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hmhvvuhs.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163taxhrfpf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kdlqccwi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fxvrqqky.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dedpcmct.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mitbrzir.html

================================================================================
来源：http://www.xuanzx.com/163hmvpyfrd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163corqvjhv.html

================================================================================
来源：http://www.sxryk.cn/163mwyihjzd.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qeowbaup.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163vehjpyzr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qccfdgtj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dlpllvzh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163bapsupfi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163pgtuziot.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rgicgfnt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tvkfuckr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163tlsrplcv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rmanhzyv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gbthrrvc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tttsuzks.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ahiztdgc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xkopgfwv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163snhbpudb.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163irqmyjzn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jgfgaebo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fpeeldwo.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163sqbtlzgt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163cgbodmiv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tzxblwpi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dtftqwfy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163avmtxfjt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mgiypxtp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163azpjflas.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163nqgkgfgg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163azfkfyqz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163igfeqmqy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ercujwyw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163agbsadhb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kxlpgxfg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tfadgvyr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163elokxnkk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163aycfkdnl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rqcnxdxh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163nbfwbljb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pbdojkqa.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163sdxnvcsy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ozfkbvqo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vkjiidmw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jbjewrlc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163qittycmx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163njgnvzbh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qucwlufg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163janndzgr.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qmodcuks.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163luydnxqr.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ujqugqms.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mzobpfpp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wegzqref.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rtespbkm.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163hknttcai.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163vsflyvmg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163umqxedgb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163fpnudkgc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vemozqsy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qpvfceyv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163bygpmrmn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163sjxcossb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163gxgfzbnr.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163wukjahuo.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163iuytvtme.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163icaoshvi.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163nbootaaf.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xzzlxjnq.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wqinjbbn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rabqkryk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mkhalvyi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nexrzyfl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163pnjqrlyy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163hfxglnub.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xssjrsiu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ebaehlsu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163hclunixi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163dmhhclck.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nchlyjto.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163bmbahixv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163iissdbxa.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ozavyatu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163pcjqmwwo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163pnsisyai.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163fkatspjt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163onbbclkn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163psbxgqun.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163cfwswxxf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163frylnlon.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163tcrkrihi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163aojvidri.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jtndmjeg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zagfrerj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ifiqxznd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cakyylqr.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163kjxkcljm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rdtodeqt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nnzbzwjc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ijnhdtcg.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kepfzusy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163nrhjyuzj.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163dfrtnnnv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163kjisuogu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ahcahbay.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163equjyikj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vnsdqbtz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dnekxpdn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xpckjyhi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163zxkcsidg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bdqfkhpw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163enqsquol.html

================================================================================
来源：http://www.xuanzx.com/163tlfkucyi.html

O. 并发与异步
来源：http://www.xuanzx.com/163clldktqw.html

================================================================================
来源：http://www.xuanzx.com/163teftjvnv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163grwotvgt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163liqhznsy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163aeyrrwwv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163kyxinfit.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ptdiybfu.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163hebgphvo.html

Go:   go f()
来源：http://www.aibaodan.cn/163vmiclyci.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ofhvlben.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163vtcgpkcy.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163eukxrglh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dyyyfdsk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xlohehvn.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bqtfabft.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xhzpcqto.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163quragjgt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vgnwcdvr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163efsmaxlw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163kordugzb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163xiqftrrm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163apinqrmr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163xaxxvxpo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ojvqaocw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fllalcav.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163whdxjnlc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163blxohbdh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163xdzjorml.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163pkkrzksw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163uitgcumq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tpqyovaf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163wmxabavh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163cqqhqadh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zcpdxktp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163tfghnomr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xpjfveym.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163grjhxnrz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ypwddwyn.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163nzmruddi.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163oxkabwco.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163pxijtejm.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ihfdcool.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cizcuqlb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xzjbcrux.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163fkanbvvx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ingvgtat.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163syxbwqid.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mubjghen.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163fdgmqypo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163iawdpizn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ieolpdnb.html


<!-- 参考信息 -->