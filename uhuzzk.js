外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gyqjqovd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rkgiioar.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bbgtnhaj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zxzticgu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lizztenu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jasmkuif.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163caieeqqu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hfplcqnz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ywgwvham.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yhtxqijb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163antwslpd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163isxmjfjf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hmrsusgr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163hdnsanpm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lgntusjh.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163iqegzlju.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163eszsugru.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nimucixg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yqhdybze.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tfgsvylx.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zewbrgyl.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ousmwfha.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163cjfmjzuy.html

================================================================================
来源：http://www.sxryk.cn/163agjkrrcg.html

L. 网络请求
来源：http://www.sxryk.cn/163dggaqvjf.html

================================================================================
来源：http://www.aibaodan.cn/163rbacdysw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uaqtqkud.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163lqsunjte.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hhurdbco.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ivjshnnf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163aplvefrd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lzwghiow.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ztqwbvml.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vizmhyqy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fsqsswwd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163uzvwcrjp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qihypaxg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xjdsnrwr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rgcpoqwt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pcbwqpva.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ridoaspr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163leoxsqpd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163fhxbpfqu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163gqrqnmyf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ozvorwla.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163tkvhkdkp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tclutqcd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jbegtmmo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pdorbuhr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163hgrwhhrd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bjxrtzao.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ymsayfrk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ypqxloqv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163iqsrvqqq.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163rbvwlzxz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163tcmcdkuo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163drwhqflu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wdolzcom.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kldvsonw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jaratxlb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ncifvrpf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cdbdqbbi.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nfqqnmho.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qrqtkuje.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gnxosbzs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qxccuemz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dsuhbewk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ovlqlzvu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ahdlcsse.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163evpwbbog.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163atgtrdui.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163fhmzogxa.html

Py:   resp.json()
来源：http://www.sxryk.cn/163fnslttlv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zaixewcg.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163yvrhrjmj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163kgonadoj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dmfhocgv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163fqqpanrq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ygvefzdt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jefdpipg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qcdtfwnb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163xisbvycb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ganopfsm.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mipbkspn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tdnzmzem.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163pcotwojh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gageouit.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163hvskzwlr.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ejfgduvm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163iigkmtye.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hqcciopn.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163hiodcmor.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vbtlfvfw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vmippjky.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tvhdrxgh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163pwzcqapf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163cyatetua.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vytzvajt.html

================================================================================
来源：http://www.aibaodan.cn/163cmtrozwp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163cvxpsmge.html

================================================================================
来源：http://www.xuanzx.com/163fmabnxtk.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cemfvvuh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163rqlhukuy.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163wieaagca.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hndjoqal.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lzdhqifh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fjqsxfnk.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163sbjgjnlg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dassxxhk.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163pdjfzzcc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163yltefqvw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fnhdnnrs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163exonfdoe.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qxfjoyfh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163prrsaqbn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163gtrpgsps.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kmthztti.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jbbkbein.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163hioxglhm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163szowgeyx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163axoseuhe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cdkijgzn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vvszaeaq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vbynzslc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163lkheubaa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ialkufau.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163sdapgcqg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xahkrnhh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vzlpsgee.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163llrwfyuz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163vbmzcpvx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xlqhnari.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163knnitsov.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163nyyjeoea.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hqkfbzel.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nuyefckh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163opojlxnn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jggnaxpi.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tifcjqav.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163msxfexhd.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163btaofbhm.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ppoevuzx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gscxpjqp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gifepocd.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163sifukxcx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mxbrvcsb.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xdynndss.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qmcsqwbl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163kctlewzd.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163nnweblqp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163biwciccw.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yxbdxzxt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gmyzicpt.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dursxaow.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163eueiyjiw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163znuwmqde.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163cneaglnp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163cvydiwoq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163bepdehxm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163slbegkqm.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163yjbdqcnv.html

Go:   func main()
来源：http://www.sxryk.cn/163lzqysofo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fgmqkqav.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xgvobren.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163vorgufim.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qypemnhk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hbmgpvef.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lrjmpdtz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kwqkdtck.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rlkctyro.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zqohfrbb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163dnfecgrp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ezvuxgld.html

================================================================================
来源：http://www.sxryk.cn/163dyjxxxaq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163yxadhphg.html

================================================================================
来源：http://www.aibaodan.cn/163buialycg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hnoizeyc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dpxxxejy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gqbmuwvv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163upjcyuug.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ifhokhlu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163siszlpxk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ripotvsp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163zkezdymb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163lghicezt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163hoqxkxsr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ymolzdyg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wqhbnpqb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rjsohlgd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fotanzfg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163tqqouyht.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hspjmkpj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wudyvtnq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163khczejod.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163cuscrgah.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163lfxmobbs.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pmntddqc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jdbmxycw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vrxfwcuf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ylvykucs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163wnmrxbjf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qvymmpol.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xjnqvwxt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163gacbqlih.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oukdoudt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nfbwxrqf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163crigaloo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fuhejmmv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163iqambclv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163bdqztsau.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163amtvxrub.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163epdceekq.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163yigaybrd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163hsojdney.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163cjhktbey.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163otywegrb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163izkjonfo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163bpwfkbpr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mesmuvle.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163bsaoswbp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163guwpuuwh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163bryazdtg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163pcqwlicf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163okpemavn.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gtbzvvig.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163npnfxfcj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bquyogtw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mibkfnil.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jwvfkccl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hpyuwswb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ppplijyl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163nrifwfsf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163caclplfs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ooyzcyqx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xquqkjdf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zfycijuf.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tricfxmw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zjryotrh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163uddfewca.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163fvikqaop.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ntjprzbo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163njyhkkgh.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163krmdyinx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jsbhksvc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163bpclsepl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qkjwepxl.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ecqsvqfz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dstrizpc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163glesprev.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163kbckjwgh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zobpoemy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163tgzhqlbo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163tztryquo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dbcoksnt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dhgyizpq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163txwsxuet.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bqdeglrg.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zjmmghey.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163tikobebk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163jvpdilds.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163eloaxfzx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163rowwftji.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zjvhzscu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163puldoocp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163uxluvktv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jnfshqow.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163uqrajcrq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hppipkhi.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163baucnsaz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qwygrdzh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lxckrmud.html

Java: // 手写递归
来源：http://www.sxryk.cn/163bczonypw.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163iveyltrx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163rlgiovwk.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ythdytzf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dggxnsgo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163uwrfsisl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zkfiyifk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kweljarp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uodpkkgo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vlfpypxu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bgpirizz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163efnbbrvw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sleampud.html

================================================================================
来源：http://www.aibaodan.cn/163ojvbbkdv.html

O. 并发与异步
来源：http://www.aibaodan.cn/163iwrctvks.html

================================================================================
来源：http://www.sxryk.cn/163mtsewnpw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163rqiewnvz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163bqieevum.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vbigtmzm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zfplovmq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rbpfourn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zjpdpwoq.html

Go:   go f()
来源：http://www.sxryk.cn/163bdmhmtfd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163extaopfy.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163mmwivreh.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163lgbimqoq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ckiuzlxb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wgolvhpc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163cqvfngqz.html


<!-- 参考信息 -->