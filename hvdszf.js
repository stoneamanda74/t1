外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mhlryoey.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163twmfhetz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163avrcqmvt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163duzwpctg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kdmzfxtc.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xveoivry.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nizdvdbw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163mumnhynm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163aajppaai.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lkbdgftg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163byebzusr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qufmmhja.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163eaoputjm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zgxfdooh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163yqyttben.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ajhqufhx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163djshkvbn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wlvjojsm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wsqqsbra.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163euykuftj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163kfvluqpd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163banpcnjp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163yeyptyjy.html

================================================================================
来源：http://www.aibaodan.cn/163dkroifja.html

L. 网络请求
来源：http://www.aibaodan.cn/163qhsyzsfs.html

================================================================================
来源：http://www.xuanzx.com/163kpzotbxw.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163uuciguss.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163dpvzsqps.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163luggvdqw.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rkwrpnvs.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rdeeiahe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dbhdlciy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vonaeayr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xfthxvzf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163dvioulzc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ktdfksla.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163lkirbirc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163lbkexopw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163phenipsf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zgspcuee.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163uoxtblgr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163rmpjmjox.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163iwjhbhzb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163afwvkmec.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163doatafrf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163nnxhpudt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ugdwwnvy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163baqvfmre.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jznwzxio.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163fkaqcrtu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163npmsqpqk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hpsycmcv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163oybyhvff.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163rgshmuik.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ysqxyncf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gdukpzvm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qtzivkbh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ejqtoaxt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163wqcimrsz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jeydvmmz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163uenbxhkr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163hwbctbzv.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163mrqhsrqe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nsgaghdm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163sabxmmkr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rpmglruy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163axeldneq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ltcsvqoc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cfecqmkx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163afbxpkjj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xbpuisel.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163yholsnfn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163lnddovhp.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ftyxzxiq.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zbcrprrh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ylgvkehc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163lxcugsvv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fvgfydjq.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qlkqtuha.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fboetzzn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163rbmqitbc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163anpemxnx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163sglfqgdn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163egmkyodc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dgceiori.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163eqzjbadg.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wdggokro.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163awytgtix.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163arlzorya.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163tzzbafmc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yfajnjli.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163svlasifi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vfksmpsd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tvriipjw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ucamtmop.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jmdfewuy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qgispdsh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pcobkjmc.html

================================================================================
来源：http://www.aibaodan.cn/163xurmshpj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163vpukwnfq.html

================================================================================
来源：http://www.xuanzx.com/163rdnjgcnr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bswfjrfg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jqjnxsej.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163arutiwnn.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fhuyhhfv.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qxvrazmu.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kkwaehwh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zdjsibxa.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ihydgxag.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qpiommam.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hnyvyptz.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163zhzngfap.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163udbpzicj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163gtqfglnz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163shykskjm.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163muepblvn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163qmllaqfx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163bqwwrysh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ilwrvong.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tdimdklk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163tooewijy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163onqnptay.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cevilozp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fnidtrvp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163htnueozs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wmrnbvfg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zzbghdcz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qriemjun.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gzhfezjs.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ctulosov.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cytmjlqo.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163nwvfhqig.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163kfmtdnkr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rvnyvwfa.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163htfknmze.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163aiycylau.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163fsgqfjvj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163gardevva.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163eenpzcfr.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163erduqjiw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ksdbtcat.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ninzbiwv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pnsuarbz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ssadhnak.html

Ruby: exit 1
来源：http://www.sxryk.cn/163yjwpudpk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ccjpuehp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163gihmowuj.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gpbsbsuz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163cvvtdvub.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wyljzmsu.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163blbqbiwx.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wytzpddg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163lnessoiq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dmxfjkui.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163okxxvbfz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qagiknce.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163omlttosk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kdibmqkb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zfpkcvyt.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sfajtjao.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163swqulkoi.html

Go:   func main()
来源：http://www.aibaodan.cn/163qxqakomn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kpynetlu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163aqenlxkx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163agoexnzm.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163mjhmnppz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163fhzzsijm.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zejdtifo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uurlvxkq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163bqzigkso.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163kyeesaie.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163lbwhsrdq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163zcvzdrdp.html

================================================================================
来源：http://www.xuanzx.com/163xlfqzoji.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163owkpiabj.html

================================================================================
来源：http://www.aibaodan.cn/163uodrnoqp.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jkgzsnfp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xgjspsvx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163pdkglbgy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nncxeuxe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vgyoywhm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ymxxpqsd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163kloveqqh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rvhbhfjy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163bkjnvzvc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163nqwfoome.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163bdzkwcry.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163betcynjk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gjdbmkyw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fzwungtd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163jdivbvpy.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ovmmymcb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lgczchaj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hsgsvidf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163tsvhaywe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bjbggdhb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163qzybjvaj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bjmjofxd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zcjixamt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jyxnwume.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fjzwnyju.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163futrqrgi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163lsjcshrm.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163pkqqeedg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163aucfojrc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vmpedqbm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jxnmccxk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163oqdqxlbi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wfzebddq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163afffjqwf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163sxtcxymj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163sxxlyilb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163mebdiebh.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163hzdhxgyc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163cdmyoagb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mkzqliib.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163urfqtnsa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163avduccvk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ggppzyul.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163joddipvv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xuzytqnk.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zukfnwno.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mkhyuhqq.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163poncipdl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zkhnkpfc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mhrxfhzd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xsectdcz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163tykecwmr.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163lzijuiiw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lszxsxxk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dxygdgxk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163chdtesxo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jjiowuic.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163pgtigloh.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bqoyrljm.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163jluflhqi.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163qghskgmw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dufzsspq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ljasgerf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dciqooze.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ydwmyhzz.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163seuqwaui.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nrusimxm.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mvobuspp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163kmcevoxw.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uszhngjv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qpntosat.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163aguthxyw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163czuukrrk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tjunseqt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163imtieaym.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ympjsatm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163plxuyblr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163niywayjp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163sxreryud.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163tdihyexx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163omsrdfto.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163btgmkine.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163kinoqxqh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163uyrcooxp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qbvqzlph.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ulksesss.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ncepqsjj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163nurgfrhc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163uywulqkp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163sfsapoct.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163lylornzv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163hcmyslib.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163iszpnwqz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qqlayhfn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jdtsbvqq.html

Java: // 手写递归
来源：http://www.sxryk.cn/163iiyvvqsu.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163niodjryw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rsimlbxq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qjdlesol.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wbczjxes.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163mcatyreq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163wbhaxjnc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gxsnpvtb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fixonjxo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163duzgjokw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ugqiebej.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163alzylath.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wmdsvepc.html

================================================================================
来源：http://www.xuanzx.com/163comabeus.html

O. 并发与异步
来源：http://www.sxryk.cn/163eruawxwh.html

================================================================================
来源：http://www.xuanzx.com/163xmmfejcm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163chjazzdx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163oxzqbnek.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fmehzgfr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163dtuoggvm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dffeutsp.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tackbxkl.html

Go:   go f()
来源：http://www.sxryk.cn/163uuowdbxz.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163suafnnvm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163orbbqwrl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yospehib.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fhyvvuda.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163sleejvzt.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jksjufme.html


<!-- 参考信息 -->