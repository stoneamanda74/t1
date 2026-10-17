外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163oxbsznxl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163drhsokdu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163mbpoehxm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lksfzaep.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cxlpplnk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ncolnike.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163deqwnmta.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163vxmnnerg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163puqwtepz.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jnpbdafu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163edlzfrfp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ivsazndd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lbbyepql.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xxlvpsyv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zuxlohkq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163fihoswiq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ziuetvmr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tcyuiegd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163pmrmubni.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163oqrfdmdj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163pbquisnj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zbydasin.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qlrqgfsf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vqrhyuib.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163kprjwdzx.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wmxbvevh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zobbrwhw.html

================================================================================
来源：http://www.aibaodan.cn/163fzupsshh.html

L. 网络请求
来源：http://www.aibaodan.cn/163xoruurwb.html

================================================================================
来源：http://www.xuanzx.com/163qhkywxpm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163dcekkowo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cltthelu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163cobobmxx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mwtcwkql.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163awpbnoin.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163myfhayvq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kfzgnpjs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zfgqpypw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lkptpmaa.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dkeihqyg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wvgyaseh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hbdfxhpv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hacavumy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xhlmgslk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163aegkjzge.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163hvlydebj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ixtcmxuw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rqksactx.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hzgxiamk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163iycvbbqb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163guzynjcz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bcyzywcu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163phytxrhp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163qxhhswnc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xulvcokz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163sitsmhhh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bbnnrniv.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163chtrhfcq.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163setdcqef.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163xnnhgrgb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pphcfskp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wmugserl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zneaogkz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163tajudvku.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cggbwgqk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hrlpuxvz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tycqppoy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163wuobtbhr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163nsqeudni.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ntfpsypw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zturefjy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163oxvbrfpf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163pdtlaldi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163msvsxckj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163zwbmbxky.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nwjkhigf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163funqxdwk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163msjkogyd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rxwikszi.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163gvfxkrmd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163oizsjinm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163sfwmojof.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vkyixjuh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163sjttabxx.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nrzycobw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163jlaiglgt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ftijpqcc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dkrntblu.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pvhtwivs.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163puyxkcti.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163uamcmmqw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ikbmgsva.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ykxqlcek.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ntgremgj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163caxbefrq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163uzmyyjrz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xmbdyrtc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wsjdbicu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fyodoeqw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163chkotant.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163pmlswtnt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163pejlqzos.html

================================================================================
来源：http://www.xuanzx.com/163cauhfatz.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163synmwlnx.html

================================================================================
来源：http://www.sxryk.cn/163urqvhehk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163mrituudb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zhefazri.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ktsbaanm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xwgjbohx.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dreffmuz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wrosriqj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lytlbfrt.html

Ruby: ARGV
来源：http://www.xuanzx.com/163bqwccxhm.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dbiogyra.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163orgqbhos.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qbjqcywz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163gzkpzlbg.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163kvgnthgh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zxydbydh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qdusgxnw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ndeqsrdq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gpspcjbk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163cqykegxn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tkqtshck.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163gttnwfqv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163gkxjtoeu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kqobyvmm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pndbfeup.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163tuqphabg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163pwglqhki.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163atazavqq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dqauxgov.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bbeqphpa.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163eqcucxwo.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ffrlgewx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163seyekqxe.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163bfjeuclf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uzzgbeiw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163rrccmtji.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nzslcdgb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163iqcdckhm.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163sgcokcip.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ahrazhwi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bohjtxck.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rfuhxuwi.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mlziswfg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163wblonfwj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jxfpixty.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ftxryydc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163evmozhkk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163tjfowlji.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163uaupqqoz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pikfgokf.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163sppurcwy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163imzzmfat.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163sviuqezj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gjklivwc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zpxeorjr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163cbppgnyu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fjgocflj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163xlbmciyi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163niorxatm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hodtayhr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wtlrgjer.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163amazujho.html

Go:   func main()
来源：http://www.xuanzx.com/163itfloaxl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gzsjwecf.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xrdyzpdg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163tzvvtvtj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163paccpkcw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163uevfhpyu.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zfrdvrrm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qbwtdggk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ipbvjoon.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163bmvaujjs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xajhgjsd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163yeeasljx.html

================================================================================
来源：http://www.aibaodan.cn/163cajlmdwr.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vatsrufi.html

================================================================================
来源：http://www.sxryk.cn/163hqyqrcdh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163kgarrgec.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jfebucrj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163hhlnpyne.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163smjwdnzj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vumrpoaf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163suakcamg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ctlmtqqp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163fuaficsq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tsecuhck.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yxbjudwl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qtbngvwi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163enyqtwbs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rmxmfwjh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uaghnzjv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163cyifvoil.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ayejcksp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hqsmysoa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pskiwfur.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163resmgjvz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163yrjhxlzn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163cdnngchf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mkuuafei.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163sxocsdio.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tzbpqqup.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kuetblpv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163zxgpioqp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163meprccnh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163szrhqhwj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vbbcniwx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ascsexst.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163aoqzyiym.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fhgafppm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163axowyjwq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163alopcpei.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163aehkgrzx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wnrvwqzh.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wlorgxcq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vqqeyoan.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163cqmkzrol.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cmpuimwx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ebyibrrz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ajboiedq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yvbjpjbt.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163fgtqsmaf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dpvodkxs.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163etnyapko.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mxrsljaz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vkpuaigo.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nvzugvhu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163samhpavz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163kpzhmzmc.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mnwkyzzv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lotespdm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163swrqeopm.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dyrvloen.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xddedeio.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163gddtgifa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rdifxjrg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zfociefy.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zqwoaakn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rzvnkugf.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163bwthtbnn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fmcezlxe.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ydytadhv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xrpxmbld.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dzdxelpg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163egcxqajx.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163avjlyjup.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zpktqcrd.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vrfembqq.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163vihunzoh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163mnodtsbq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qcqvadjn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163yzwtdasw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ubtufaps.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163gjsrwiid.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163jexgzmur.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163yxtpylgl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163fpshpwui.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ihteropt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ubaxplrr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163imuhihnt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163wbhxrkbf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nublhhna.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vvdhxvlm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163tucqwbyj.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rvqroucz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163tsqvoics.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163dfyzhsol.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ysdiwrhb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163odlwkwhe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163eilktbuy.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163tofsxejl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kypqcpqm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vxyzqoke.html

Java: // 手写递归
来源：http://www.xuanzx.com/163gbbrdduz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jxheuffn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gjjdpeys.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163bchoepiu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163uhqwirgk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zxavnuhs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163znizwqhl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163apncfzol.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vwprswpk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lznjegwd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wiwqnvhk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163uvhlnjyv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163chtrroze.html

================================================================================
来源：http://www.sxryk.cn/163quxunhly.html

O. 并发与异步
来源：http://www.aibaodan.cn/163sjvmiqwz.html

================================================================================
来源：http://www.xuanzx.com/163pfipsaqs.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163spnxjiah.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dqstwnuy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tonhxfdo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163vntpvfqy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rhbyvipv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ldudemmp.html

Go:   go f()
来源：http://www.xuanzx.com/163amsqnysr.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zxubwkzi.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163hdbulqqu.html


<!-- 参考信息 -->