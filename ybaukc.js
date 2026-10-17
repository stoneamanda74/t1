外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163jlsznmno.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163mkqkruxq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qwkecysq.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xrtdredv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163gfnldmek.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163nwvnqsuj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yzjcicpd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pukfgdqb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163lzetrujf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163dgfuugil.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163evtvgesw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lqhxnbqc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163vkprilya.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163jiwmtqwm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ixhesezm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qvyrnsyh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fpfwcusw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163apvbqfxs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163qvqsawlr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tfvefqsc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163uamkafha.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wfqrcxxd.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163fgavviul.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rgfekkuq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fcfwvkcn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ohhugcis.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ykbcqlua.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163lkpimfmx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zcblvnpc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163jkuahzkp.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163cokdyzzq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vmpwvskc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163gfnvxdra.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yeqnvvgb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163iyccasud.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163unzgbwvz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ephnjrxb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wvqyxgyg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ocvfwvol.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vdspilsl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163lyxuyifj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wsunmgic.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vaybbfva.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ejvhezyu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mbtovimx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xpghyxzm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vowfbrar.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163dpbdomat.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163smprudih.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qtskxioe.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vtpowqzk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163iygbayhh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163phnlvgsk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163xaxduddc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163agmkwyvk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163gqppvpxe.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pvlolnbz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163hpcpbkvv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wjtyinds.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163osvpzlok.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uxzoimvm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cwslxnxq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163csrohuzu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lttumjqz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163gecnvmrq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ufcifnmx.html

================================================================================
来源：http://www.xuanzx.com/163fomjyivu.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163artmmhgu.html

================================================================================
来源：http://www.xuanzx.com/163irlvkxbs.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163uuxttdwn.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163blnmzbsq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163negvcvkl.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bpjdujcn.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xtwlritp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hdyyrsgt.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qksazmeo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pleayvzs.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163pnyigseu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163jtimyrsx.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163lsagonov.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zcaaaltz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hqsakcgb.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163nyunsbfe.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163enezetax.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163hfryrrqo.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163rcamloki.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wtvvompq.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163aomcxjfz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163aqnzbuhh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vuxyvzfn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163glrdguks.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kluezikq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163oswmyadu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qqmxnfdq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163cznvggih.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163sgzrqptr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163slnkfdok.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uqkviwrp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163fdgsbuhs.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163iyvwuzwx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163aklqklrp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wftbttlu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163inrmjjhz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yqbqakpd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wyggfxhe.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xpxddebf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163jlgripdo.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163aulmhfaa.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nhooveme.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163bganisgc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163lgfjvbko.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163cnqodwiy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163wsrhyodf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wwtdwjgg.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163utpohlpj.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zptyzgha.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ltyyntkk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163xpimoffm.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163njsmvkfl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163japekpej.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mybhrztg.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163plkmaahe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163avhykjjw.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163sqylzwht.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zyuhpctu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163azhwuxel.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bibayxeq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163nprcjsks.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163fvkcdrbj.html

Go:   func main()
来源：http://www.aibaodan.cn/163vcjbmwtv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163lvsilagv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ypfbmlex.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wnjedkac.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163pxgsipvs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ifwfzhjf.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vndnjhfg.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xppzmvwx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163huppxxjy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163acubuiic.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jpzyzdnm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rwlquner.html

================================================================================
来源：http://www.aibaodan.cn/163uarqxhbf.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ffcrxglu.html

================================================================================
来源：http://www.sxryk.cn/163dbyrzaxu.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163bmvcxupe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yspomhbx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163umwqjdml.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163loukgcfu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vyvqizrr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163gpggosqh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163enpnrohj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163szywwuxd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163muqwafvj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gfzxjedj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wrtszzdb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mztgjpmy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sgelgfym.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dduekhch.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nwgwbdbo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163gqcedmij.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rikyecva.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163teziwoag.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mpjwwqxs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ztbdzzku.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kbqqjmyx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163elakvmcr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cxobxicy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hkbblmhw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ukfndocp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163xdpnwlwq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163usxksnuq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163chbmqhqa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pllookiz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qcbqbxbm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163viznmwag.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dohdlplh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mcppjgtw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163nosjendb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tgchljnl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hptskdlm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163nwxaqcjp.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qezgxqtj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163btbemscb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vwnimmut.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163enhfvats.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hseddmil.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163mdfcrudb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ocfskppp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163koyxneja.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163hygshzut.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163tjifemtc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pfriibyr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ghiaufss.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163irbmqhsw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ksxvdkzy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dmxjfumu.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tgiktoeo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163diurgcyg.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ctrlweou.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kjxciixm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163khnamlpa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163oxbxnqyq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163vanuojyh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163atjkwxhc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163zfsmimou.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163xrdskczf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163itbdidsr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qtvpnhzt.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vplgljan.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163pvdtkmbg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yqeydtxu.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ndunibjz.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zmammero.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163dpbjijow.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163yqhmumyz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ckayxish.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ukbqhfye.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cmcrobkp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163abkvnuya.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163gauebabm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163vimodpdv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163oxsrshwt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163exrvwowd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163xxntwfyl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xmhztrkq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163yooyzdcs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163lyovosdi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163rxynlwok.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163hkdfmnrx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163aolbpiww.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ckusfcto.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qgeopwrb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ismmhcft.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163gfdcvgzy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ggdxjunn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163adixvrjq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163rkokxgsv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cirfhxcd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yiajwdsx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hbfectwm.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jmrjpxce.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163hqoeokym.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zmjldkdu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ylobgcnj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163vfdstxvb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163yknejmnu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rghssbqr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uubuebwx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ufavuhjg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qlujejtk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fuqfggwv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163eqitvisq.html

================================================================================
来源：http://www.sxryk.cn/163vlogoyqm.html

O. 并发与异步
来源：http://www.sxryk.cn/163lupvbwuy.html

================================================================================
来源：http://www.xuanzx.com/163sqjcmybz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jwbmfkzh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163plobguae.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163iljqmxxk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163yqxknjer.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wgtwqmjz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163tlebtinh.html

Go:   go f()
来源：http://www.xuanzx.com/163mtchthez.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163adpxflgx.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163grhqcdgk.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ykpqlsia.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163fuxglmyu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qlzxndgn.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mqbtlckh.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tbzhlbjq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mqvkmaky.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xwscqkhn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163idrlayej.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ckbtajat.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mnnaunhs.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163belksfnz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163aroswsqi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wwnhwhad.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163htzczmqg.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163skafryxf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xactjrzm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hxclidsm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163rggsfkvd.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163yibkhtqs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163oixkares.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163klstqdsh.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163lsqkvlfe.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hwhyqugt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163iicdpczn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163iscuilgo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163wkgkhdnn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wucugqmx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pieaofst.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163sqxfnclj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vsyphlcn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lyvsxkyl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iibnurec.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bacmevao.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wkafpheq.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163hhnqjufe.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jlxrocuz.html


<!-- 参考信息 -->