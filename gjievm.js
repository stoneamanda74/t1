外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vvpafxmv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wsqhsdps.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163cidwmpof.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fsggetlm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zjhvuaxd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163fjyviqro.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dcqmscrr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ozxvopac.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bcpytaww.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163benwcrso.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gxeuseyh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xrtdfnwq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rrkyjozr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jinqxunx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163yglafgbj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mhsdpfrz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vwlqefdu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mqwyhcry.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163lyfhwtrc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163yomerdsh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163shopwmxr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163cyiaatmf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163smlrveki.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163sululkvh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163meqrewen.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tmrcvdxv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lutdzmpz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fzeiqjwn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bonjjpfx.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hiaybabg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163nnmlvhoa.html

================================================================================
来源：http://www.xuanzx.com/163grbixkoj.html

L. 网络请求
来源：http://www.aibaodan.cn/163hihbpjel.html

================================================================================
来源：http://www.xuanzx.com/163mhiyqjtp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163atjwkngo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wqruolbw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jqjrcgos.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163oiuhvnph.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163okaneoyh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kynchzju.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wqebqabj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163giuwarge.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lpwcelwr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163doykmwkf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yvzxyzvi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163jvrwsxpm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xyvlkbid.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gecnddkv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rcykojqx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ssodfwvz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163rydefnjn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ubqeckhg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163tcntgtpj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fhfxtpto.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163zzzokhaw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xfnvsdky.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kfsaxvvy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163nhkavrxx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ucvdhtgb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qtmtfmof.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bubnuwhd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163dijxwqmj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163skmccfid.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163skivjnpr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163slasfces.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eklgsnhk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qckqopgu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163zhhgnpzt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163uifjzsoa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wqzjdvoy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ldzhytlq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163mqcrpfff.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163jgmlctfh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gorsinhr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163szmrdwrx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kddlvlgb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ykozotyx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163amfjfdfo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mgvsalro.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163uiamhyjw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163xdyjimuk.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ojafutzg.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163irgpogkf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163axjxnmmp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zikyvwmn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163kbsiiqvl.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163sscpxeoh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163dcmnympw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pxqegdde.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nzfqfliq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kqsurpre.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tqpqhnmd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ejymroyp.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163eidwrdti.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zmscines.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xcluiljl.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163neonejxa.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hnkrpjak.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163lwzilvwh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163puvilvhw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163axnnzzue.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ynkrzyrf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163shfeoxqe.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xgjcgjxt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163lgvopuck.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163iatpysek.html

================================================================================
来源：http://www.sxryk.cn/163lotmtqyu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vqveednw.html

================================================================================
来源：http://www.aibaodan.cn/163ocexxzhi.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163sjrvduog.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163yefdaowu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ghddmpfo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163aquutypw.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yitaivud.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163stgfmfsw.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ehzfndsa.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ombeaacq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jxisphjr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qzextchf.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163sujyfsft.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mxboxedi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163uccsbaoe.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ejhdiljk.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zvryhurq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163vkysvnvs.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gbybbtwf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163tnwayykx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rqrnucbp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ucrllyqr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163tnqohfey.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kbeggpmj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yavagvfg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163doadznrq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cauxqxsi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rvfhemtd.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xcssrkxg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163otvuewxs.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163yfqviadg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163nbgvhdxo.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163xujogftq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163srnsllwj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163gkjierha.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fmaxkmus.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163rxrjemsr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wayirqua.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pgvqmipr.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rfqzawfv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hobihfwv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163mphmtatr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ukptdubu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vugwfomr.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gpmwvknk.html

Ruby: exit 1
来源：http://www.xuanzx.com/163srxfqvmn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163voohaxss.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cotqjcho.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qacfortq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ngdoawkg.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qwxsycae.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ocwmjhpt.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jekrvowg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vsmnaxgk.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wceiispo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163esqokual.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fgqompgv.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xesbioqy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163pegtvvbl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lfvgjfno.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rvmcivdl.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xbnzyawo.html

Go:   func main()
来源：http://www.aibaodan.cn/163hzqmqigw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163cubdddiv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163cdicuzgr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163figlkiaa.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jzctskwd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cczgdals.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hfnqtrmv.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qoronkpb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163eavttepk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163rwejwiwz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rddzohcp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163btttswey.html

================================================================================
来源：http://www.aibaodan.cn/163xykybmin.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jfdrqnrp.html

================================================================================
来源：http://www.sxryk.cn/163wxkzuksy.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gzuaypfa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xjbnrhbv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hefxdzkn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gqdliubq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163atwedgix.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ugfnspii.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163yvbzlcxo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kqhgfkch.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bucheoqt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qweytvuc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hgemwdgf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wvfeihov.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fqzzgpvj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ykmmjpja.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zervevjm.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163phtwxize.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kgndqlnt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163sqexyhag.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ilxjbxfg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jvbopbgw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mfhizpet.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wcsxawfc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bcztghos.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163pdhmqqjr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mjszdqze.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163lbkuhrrq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mkabesaz.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qthtjpfw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kyfgigud.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163nudhlbzq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163byrhimcw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xujbncus.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tqxlnvgz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dgjfkyya.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dzqrxrma.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mgzpkowu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163oxntcngg.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163dtsimwqx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163gfwgklnj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163eptazvub.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ajtgqdac.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qbqnymze.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163odtrkumn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163posczvdt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hoprafer.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rhfoijff.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163bmggfjix.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vdbejkiv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yggxnkso.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bwefetya.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163fauwldnx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vvofkqps.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zjcxxety.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lcovdtvd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163kyawhryo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163owjmhfqf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163muqargna.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mdfiiwrs.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163hzvaeqte.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ohzkybte.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163btwynovm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163sjibkrgy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163hbyktaah.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163mytbturg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zxuhvwac.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rabkflow.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yijbumjg.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oouxafmz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163clhuzfxg.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163duedshcf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dvnzwgpt.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lksrkidj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pocwiuwp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gdylffws.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ajujsqlo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163wakgmzmj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163gycqqned.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wqygoouk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163yuhzekom.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kcyluyst.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zzckppdm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qhuuomrv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zljfcnwp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163hjiueray.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fxqccvyx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pfclsjrm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163sklidbiq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pqiyaspy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163fthlusam.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jwbcawhi.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163rchwlwqh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163msfhpzbb.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163mnjpadrz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163uvsgqxob.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qnuptoix.html

Java: // 手写递归
来源：http://www.sxryk.cn/163cumonygb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wkmcmgmz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jphzvgwf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163hbqxnycp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bwkydofn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wnwjmweh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jpvhdvjw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ccuqymci.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qjtbcswl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pnghctui.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tdlzshdf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qavhfeow.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rycflwhu.html

================================================================================
来源：http://www.aibaodan.cn/163tpoqdnlt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163peousjhr.html

================================================================================
来源：http://www.sxryk.cn/163xccgirfq.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163elpnpstx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jpimaztd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vcjfccvl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163uktmugek.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cyzohiin.html


<!-- 参考信息 -->