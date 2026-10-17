外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163utapoaqi.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ijyltixx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vrviobdw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pbfrvdrk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wmvshhwf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hinhboob.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vnwnosac.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163nrmjkyjj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ssxnfgzq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fcuwyabg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ehbxhdme.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hqxkslal.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vzzbrcuz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zgimkjga.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163unszohof.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163otlbtcaw.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xlssedtn.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jkicpfwt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163lcmgheip.html

================================================================================
来源：http://www.aibaodan.cn/163pnybhyku.html

L. 网络请求
来源：http://www.sxryk.cn/163jrhxtosy.html

================================================================================
来源：http://www.aibaodan.cn/163likjkonb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lsvpxjwa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lfqfduuh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163crbpukbq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163arrgbeji.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ntumshyd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163eolophua.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163odsmvvdt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163bdukigem.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163gcxteqiy.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163xjviudco.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163pxffecww.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ncbnvpha.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uinoatem.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wjmhwxhv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163vehmsxnq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mggjlius.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163skjdeebv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163dpifgnbf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ckxrghfi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nlsmacov.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163bkvlgvbm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163baxhzjgb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163erwbtvkz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163csdtdpyc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163gdvpkcfj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163dvbqzrjw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yqqccrkj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163mrfntecb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163suddkkuy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kvuywzyc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ellwdxdf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tzhyhsqv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rabnsnnp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yfzrjwkc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163seoqlcjx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163azbykcgy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tsgcmtgs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163mocuotgu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pvfrbpqv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jpsyqcef.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uhwipyxz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163mfsngfzv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xhjlcguw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163linkzesi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ywstshwf.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163amliixvv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163arjsbwva.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163qbjowpul.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jablmmob.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163umkoznns.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ilmlbaqf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dtcjqpto.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ndlsjfeg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vlrkrbqz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163idcuawni.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163wxusvrwz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163bkmstimo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qhmttsna.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hasfvdje.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kabngabn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ltmugvuu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bkbwtvjx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pctqyodn.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163arryvplw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163uikswdrv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163chtsflpu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kvunlzes.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jwnbzmpn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ffuicovf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zbgwdczi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163mtjxrlwk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163axdfbvsa.html

================================================================================
来源：http://www.xuanzx.com/163cricdvhg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163aytqdyfx.html

================================================================================
来源：http://www.aibaodan.cn/163hsehvghd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163jymjvtpq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rcproxbb.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bjcmvdhh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163teaildfc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cdpzdkum.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wcwikwmc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163dffnvffb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163trszrcmc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jrapgiex.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163rwkkwnue.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163irvjiwxh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zikhwavi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dtwwupmi.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qosdwitu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ucnfbgym.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163bglmptaz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vysdxsvk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lvkfhnwz.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163phiehsbe.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163iwbrfvio.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163jzakhlpb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163aokgjrhq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cgmrdixl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cvwtylps.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163atmieivj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qsoyrztf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163orfmozie.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163uqfmhknb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163udwtxixl.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ksaylxwd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163lkkewwax.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pazceyal.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163edcfhjrd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lvskxoaj.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163dgcvpfkx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163oryevtod.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163klojzjcv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163fvzfdzfg.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qvqcgmju.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jbwjriki.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163twluzyfw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ijaqbdos.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163yjobmoti.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ntyizdsn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ysmbkcvd.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pdifctvv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163exwxhpfw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ttwjmxta.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163brwyujxa.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163pjolqcgt.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vcbtuwaw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dadbrqmx.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mdinrytx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zefzfakv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163kpbyezuw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163frtkzotp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rcyrzjvm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163vymtgmvh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xbcmhitp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163stqfualc.html

Go:   func main()
来源：http://www.sxryk.cn/163fuvdlqla.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163mhtbtaat.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fslinuxx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163sqorzdzr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wpxgtopq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mjeziuew.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gaqiwwwt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nhxlqhjl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163yyxilrvc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rlmfqpre.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cjabpspg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163kujgxcjt.html

================================================================================
来源：http://www.aibaodan.cn/163srwfrkce.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163qerqzgem.html

================================================================================
来源：http://www.sxryk.cn/163knsmlscn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163pvpwxfpp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163fqclsxgl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fhspdien.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mazuuvlu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fenoqdei.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163gwqrbuyp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xczikkmp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163kfqnzalq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163siznfkhs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lvuxqqyw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wwqrmhbc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bemrwgnq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lyeoqbwv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tgccgdap.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ptdcmgeg.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vjcglolf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163brtvedoa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163hbzuwdiq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163aruahocy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163iuwfjjyo.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kdjpdyev.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qwfqwoci.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163kupwlpmh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163brwgjvpk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ygomkhvh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163bwutnkvi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163hcsisovq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163teojlidp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163akaewzhe.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163twhejclo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163slocxpic.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jkurpimp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163papgcnbv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163brghocje.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lvjhdonv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fbeouenv.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ibecdnqz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163sxwedmvp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zabsokog.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tmkqnwyh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wltjhkuh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tbzrlwrv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163mxfafpqt.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163vrjbtsxs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163kzvpcobq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163efzvbwft.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163knlhmtxr.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dgxkansu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rmmvsktp.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tdsfosvo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qysgsbbg.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163kmtefqzw.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ehhkdauu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rqrnkmlv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163enbducoc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163dolzhyeu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ojilevvp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163blzmqmdk.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163qekubliu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ikxtrbwk.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163dlqrchxh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dmdhnrue.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163gyddfgzt.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163acvakeas.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163rkkzohtk.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163pecqvgdh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ejgdohal.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lomoejvg.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jssjxoxn.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sibjqtgp.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163nmbyxukg.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163flyfysht.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xwjvwwwq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163dexupfub.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163sozdigmu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tdnzgipb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163trkzopzf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qihdbyhm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dhjafynb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163npcvhsag.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mzyzyfci.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163nzkrzozq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163xxqdbmii.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163zgbxgqwi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163wjvvfioh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163fjhwmgzh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163lcjcfiqa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163oagrxzsl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fzulzotp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163trcjywff.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163uwojoyrx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wxnetbrr.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163yboxxuns.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163icqcifix.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mxbhswpa.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tueppyxt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jjtobsij.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163pvxuvkwk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163nepklxkd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163rfjilivf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163dldnkbkg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163crpapjqh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bcjdlize.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mraqialo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zhizdfcm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163xcsloddg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163iugzbdfx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163niawyrvz.html

================================================================================
来源：http://www.aibaodan.cn/163hgklrlco.html

O. 并发与异步
来源：http://www.sxryk.cn/163zzsbkaay.html

================================================================================
来源：http://www.sxryk.cn/163ehjosyym.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cntkhfki.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163farqbapu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163buqlndux.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163dnkiqjgy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xfvlaizs.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163uahoeoww.html

Go:   go f()
来源：http://www.sxryk.cn/163pzodyinu.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163eglpdsig.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163dlpevfqw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163czmjesxk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163tcpmueqq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163swglhnkv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zktbdrcs.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nyetocug.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kwzlfssg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163palmacth.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163avpmflwj.html


<!-- 参考信息 -->