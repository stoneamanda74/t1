外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tjsqtfwj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163krbvtiqs.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163lvgzprio.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ffjsamfh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163jekyxofm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lkzdwghr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wpwszqrg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163odbachlt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qprezyan.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163txqigikg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163pgmascaw.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163meldniec.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163noakyltx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163flnfzhss.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zejqptgy.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lqrfydci.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ftnfywos.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163pijwoyyp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wpcqdjzp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163plcaiokj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163eqhxgfuu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ohidrmmm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163vfmeujkh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163srnyrzdl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lcdseqze.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163cbhbeopm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163pudxolks.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163khfdvvud.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163oaxlmxhc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jsruucae.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hbhfjgfe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lgicppas.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fogyiegb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sxenbhbw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cwznvvjb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kzfkdoyj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ucofxllp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163prxqeacv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qtgyppvp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qtciddpn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163cbueygmg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nnkvgrnq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dqtclaqw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163bhkrmvxd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zbxhlyke.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163sewjwfyy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163uscsdkyr.html

================================================================================
来源：http://www.aibaodan.cn/163vtdfmiam.html

L. 网络请求
来源：http://www.aibaodan.cn/163poerylhf.html

================================================================================
来源：http://www.sxryk.cn/163isugpdtp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ohbcvocu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jodzcbtq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gorctyrm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163vaucjtcd.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163vvedukax.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163bpfounvl.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163awoaeijj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163wzdfyoqt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163goeqwada.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hnbvyrzp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zdakuluw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wjbkyxmg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163axaitexj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ldizpzap.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jtfmvpsh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163dkrihksw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163gfhvhima.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wdmqexzm.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qnvnxkxp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163symdoeyr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ezqpbhlb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qbpilcek.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pjuruoaa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jcbchpbu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fsslwzud.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vhxmfssc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dwhfpczq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qnfzvcoc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xtwzgcni.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vbfgaadr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pomlyjse.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mnacxqkd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163jtolgewk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zbbqmlsr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163umyhaodf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ixtnzsny.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ppqidrww.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163icjekggr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163hfebmedk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163huodnjiu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163txvfkksh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vwpoyryv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yzjtxbph.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163gctplhcl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163yggtuvue.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163sgvobxsh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163tvsmqeel.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xdmpmnja.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vbbstpdo.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163sjxdtwgb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tdpztuhk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rxfojggj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163dduzpccu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fyislfur.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163nmpgyhgw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163mjvujaos.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vauvhyik.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fryrqied.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pxadaelu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163nfanihcw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jdsyplth.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tasrgisn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xuvjvkmm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163tlstglqv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163zbfoxjvi.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zprnqnyd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rggwtvjd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ardsxfdu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hqrycmtc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qafqadyl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lrstexrz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163qxrtowqr.html

================================================================================
来源：http://www.sxryk.cn/163tmaszjnk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163bmqentul.html

================================================================================
来源：http://www.sxryk.cn/163pnmvmnye.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ypasvnda.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163tmzltbdp.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163vrlxyxtq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mayabzre.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xvpjxrhf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163algxfeza.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163jqlqelpa.html

Ruby: ARGV
来源：http://www.xuanzx.com/163nksvwgav.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hlfolllf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zzxeppjk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vpxeoceu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jkmwxiyi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ueowgunx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zrzwvwtm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163votxbzrv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tzbvfstk.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ghgbkttb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lpnfimud.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163kyzawanf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163nocjxioy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163dpummoyh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ijyhvnqe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163muosmvma.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163swmatkbw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ikefelnh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163alwfwdui.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163twucqvvh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rvynbwhk.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fqunygqc.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163uopgbznb.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vjhspaoh.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163rmcvwtfw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kjqqmrsj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gzhyzzug.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vnatjzdu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163dugqfmwa.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ebfbyobh.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163sfdhtzbl.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163uudmaxhe.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163fhbhufsh.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163kjdvzhyz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163schrzhkc.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gafbflyh.html

Ruby: exit 1
来源：http://www.xuanzx.com/163uxgfgakg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jsteqyxd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qwigtgej.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uxvizeye.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163szspurah.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163lbhwonix.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163sytzcbtr.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163degbcslp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gnpnoexh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xkyclbmp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163dyncvuwl.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qkfvlcdy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163bchkkkvl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ytzkdylb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xtxyklus.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163cqiscbiy.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ybewbpqe.html

Go:   func main()
来源：http://www.xuanzx.com/163pntoynyi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ivsidnbu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xdciermm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163yhjmhkiz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163hywtqxjw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163oaewwhmo.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fxooprzf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lihrdgnk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jmbkagwd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163cjvufchk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rhyueovd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ndjfwtkt.html

================================================================================
来源：http://www.sxryk.cn/163rfivzbcp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163potasgdb.html

================================================================================
来源：http://www.sxryk.cn/163hkxielcb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163yzaqduav.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163mtgnzgtr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163yjwtoduu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hwxfzmuc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qxasehml.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163imprmdoj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qgkklshf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vsrjpevg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bjforvwy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163cbspqfle.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nvanrsrq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163wbhubhen.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tuvnljse.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wgnjhjvt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163kipimfmx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163izceoqvy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rforaqpj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163dicyvcap.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163dbaqsmfv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163flqoqljk.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tbndhqst.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uclqeabo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vlowomrl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163bndoyjkc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163waisjsdk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bgiuxifo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163twdsupws.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163anxpkcub.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tuprkxru.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163eajkfzug.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tlqynqir.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163urunrgvm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ivdzutwt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163lzsmsxfg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fhsndpba.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fibfnhlh.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rqfqhipd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163gdmdtdsi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163olazdjci.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nvymcalc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163prmgpptn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pmrpsqhj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163twikybhh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163miosefvs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163imwpsfww.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163txqikhuk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ebcvljvu.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163whbgttsi.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xcpqqisl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163withtzbd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163gxmilzjd.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lkmptqdk.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163dfejgacy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163aqvqddji.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163zmglvvhn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163gvsidpwo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ykhviibi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163witrcxam.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163morkevwu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163msptisvo.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163digjmhuh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163icjywplh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163obkkqyfy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kpyfaarm.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163dhqretjw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163teyjauuo.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jkabrano.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xzajqztu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163rnqpnuue.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fsmwaago.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163iztxnrnx.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163catquqxd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zkjogqcp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163iqbokgiz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163rlwkghha.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qlxzyirg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163yefiqjks.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163obeupzxa.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163osemqlox.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163slysbigp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163uhsszhlo.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163kwuofbim.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zxqsvwsv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163apcmesyn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fegkusqx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vhbsobpg.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ptseedzq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163erymshxl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163kffbkauo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163cesxkofo.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cxgzifop.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163bxnauspm.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vlyzyevv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163izcyowcv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mcoxivoc.html

Java: // 手写递归
来源：http://www.sxryk.cn/163lhxihiqp.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163npnuunwb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nuzrzaye.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163gtpgqjxv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wnqnedtu.html


<!-- 参考信息 -->