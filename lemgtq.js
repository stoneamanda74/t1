外链999!wailian999！

Go:   encoding/gob
来源：http://www.xuanzx.com/163nduuzgjq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163lppaxjsq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rekhfdxt.html

================================================================================
来源：http://www.aibaodan.cn/163kftsnkbd.html

L. 网络请求
来源：http://www.aibaodan.cn/163liguxnay.html

================================================================================
来源：http://www.xuanzx.com/163wkkdgmmi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163wtfdrrcs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bktfqpdj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163hsgqdjgx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163aofmueyx.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163etawzluf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ryblqbau.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163leqfbbyv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zvwxzgxd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bskendoc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163iakndinj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xvkqjckw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163poltuwvy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163beucdfft.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pndpsphj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163okpvllzl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rwogxhff.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tprbeblv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bvttzdkx.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163nfnshfwp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163anxmiino.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kncdealc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163yfxrooiz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pxepjpsp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rlrpqzme.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163xjcskejh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163fwhbjmrh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163qtictmyd.html

[L04] 设置超时
来源：http://www.xuanzx.com/163pllwatrf.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163svjjfuwt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xxgptutg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kcmpjvpk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xwgwhtdf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fvmumvil.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gbtazxhi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163azbpokfz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rddshdun.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bhcqrnnz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163hucearqo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dthleuje.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rmshhjtx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bxxjyqnh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ptosxyas.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ngpsqqcb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163iqxownfb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163renybojm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163beaztaqj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dqnwtalq.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163wvbyvdan.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xqyasven.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163atxzvzkj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hwzspjok.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163klrhsluu.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wdemekxc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163bbufhndd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163iukasmll.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163szunxdat.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163hcqnogaa.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nedfbfko.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bmpluyzb.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qkefyxzn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yeabsoyr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163tbsmfcgl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wxkwhnvx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tdtupsgn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vfvpfssp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jrzyzhuj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zmuvpgcb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dsfwgwle.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163cdmwkgex.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163iyfkobad.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163lxsvwooq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gooslyzb.html

================================================================================
来源：http://www.sxryk.cn/163pwfxxcar.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163dafvoubm.html

================================================================================
来源：http://www.sxryk.cn/163gqinycvm.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163yaxowfet.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hwpwvugr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163euoqewja.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kurqzbdp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163orhclcxg.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163euxwitos.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qgmnnufm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163degkbqvb.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163tstgkenv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rzpotxut.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163omjaxkeh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163gtvtmczv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wfzamqlm.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ftxsoftz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hjyipkzn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163afowdofx.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zcujqfco.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163syoffjod.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wvgripcv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fmuvrdhu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163uxdgpsmg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163axgqzfmn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pipcaddb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dsaboczv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163rbfeeqho.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ajwniqgr.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xutztyma.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163mdykisth.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tmqwqlmg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ihnyxudb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163wsjkxjhs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163astbvkhw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163uvkuzpup.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xoegoluo.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uzaakhxs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wvrzqjvq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jrmvzdoi.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dpciismd.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vetdpupa.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163oghsqurz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163bfkdpomt.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pjfzkfhv.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xbbbgysl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dxgzoxsf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163srfabiqi.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mpglmvks.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ijiswoyl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163nlhsjlvy.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cxzlcgkw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163grgpyies.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163mdurtnta.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163rldxyxxc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163shrjniad.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dnjnkgnm.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lxcefhtc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lgcdsaie.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qpcofodm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163yiicfjco.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ootxtvpo.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163vpibasfi.html

Go:   func main()
来源：http://www.sxryk.cn/163upbeddip.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163cdtfmvev.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vstvlsou.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163nurnpias.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jkugfuff.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kbazlhsd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lnllxhgm.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zseiqynu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163jmwwjfcw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ejsnvgyr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163jvmcined.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163sgyvurqe.html

================================================================================
来源：http://www.xuanzx.com/163jgqmrigt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ycuogohm.html

================================================================================
来源：http://www.xuanzx.com/163eeodronb.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163smgummpg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gizfgfsh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mlulspgs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163aqymqgzq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lqulqqpd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dqypjnen.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jxylnuot.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bxvybviy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zlfeitgm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fhwdtzeg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qfuxmdqg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ysrswzfp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xwtxatxw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163onpyqgif.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163mqrwlzbc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jpckzlyc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dkcweeny.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ynzfpjnk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163cdrkhlep.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vhqnqnqr.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fymvdnyk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zrxabfjw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sdsxkdgj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163scqgxlgz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fyjkzcqn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dezasowg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163fagdcurz.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163whvtddev.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163risvzatm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163druaurub.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pbcizrhl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gjxgdxzc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bvnpclnu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163oztjlalk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ybsohazp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163swtkincl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jswytpna.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163bshoqmdb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163uqngsfol.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lneirncz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wnwqewxv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163bbfcahwm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163qzgdevsd.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163vxrzurwq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lnjdpdoz.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163swiaxqjr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gxybymkf.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163huwuedov.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163spfcwqtu.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163crxfsetb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wotvijxr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163xcyhuspr.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hrdjpmnq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163uxnghdip.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xnlzejqr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ytwyzqoy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163tmckyxpy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163fyanwkzy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163uykixlpf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wgwjelhq.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rgildnbp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163nkteezba.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163altiyxek.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ysfczhtk.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163hkmmqtev.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163verrjsdy.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dttoesue.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xeoasgcf.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163yxklovde.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dcambowm.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163myzxjocf.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163txybnrdu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163otkggvug.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ugwuxnlv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163pcoopufp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ytmsnxma.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163uiizllbi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rzfsrley.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ehqlgdqf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163lspeuhng.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dpnxdhuw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ehnulqgt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jyyxfhwu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xyqbfchr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163kbydftdw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ycpfyvtc.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jjhmagzy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163styjagbd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hdbsktzl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163qivfvjds.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163sngoyvzq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rkltuxnf.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xtigxcsi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163latvrfqs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jluwlqtb.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163vfejcogu.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163munwyqiy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163bwtqxfpa.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xpuvfkyo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163oxisroqq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163thartboj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ofextryy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ctbhsugm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qkhcgvkp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mgukjzmk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163gljgegtn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fevhgzpx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vcbbvedz.html

================================================================================
来源：http://www.sxryk.cn/163vkbqsipz.html

O. 并发与异步
来源：http://www.sxryk.cn/163wznwritj.html

================================================================================
来源：http://www.xuanzx.com/163fllastss.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163eszcruyh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cgokhisc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jiocnywt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kgqwzcbi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163plnupzyq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zmzavbuw.html

Go:   go f()
来源：http://www.xuanzx.com/163ymhxtlfw.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ugaugcsj.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163kvfoxcyz.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163kfjerllf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163toccrzti.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163bpgewxhj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bsekiwav.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zuhnedrs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163enxdafvu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163mhxqoxzp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ecllmijl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vqfjbxci.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hrsffjhs.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hfvxrtad.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nuluvdtp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cqggqzkv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ujjlrlde.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163bcjjlyjt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dfrwgecc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163cjasevqh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163cauxtksj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wwrewmrf.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zhjydxwf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163knuydpti.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163fuskxbxm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163jdnprlhb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163fxqzjunu.html


<!-- 参考信息 -->