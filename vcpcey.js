外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kpbsczau.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163odwsuvva.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163odpoetrz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163haieeuzx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163pmvamwke.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163slxtviut.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163diucmxbt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nfwikxxq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163vlcqvrga.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163sxgeevnw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163tlnkghcd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jajtyakg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pozdsymx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wdxrcglk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rojhkchu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jyymkaut.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tayeqdgl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zwesapaz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vcfahmdp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tarwppvk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lttwxbke.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zwynycxt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163afldqffj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163orjygwjz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zzokeuho.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163sgqebbjp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xupjkgyg.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163gdbazqki.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ffyonzuk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vejojrou.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cnyimgxd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163nydqmuxu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163hjcaaqub.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ukmwdqcy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163myrruoeb.html

================================================================================
来源：http://www.aibaodan.cn/163jbgyeojg.html

L. 网络请求
来源：http://www.xuanzx.com/163pcbkuceb.html

================================================================================
来源：http://www.xuanzx.com/163cgggnabq.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bqydgqxa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pnnxysdg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nldstbum.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163lxhmtbbd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bbvefqcl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163hjmoxrcy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zxcyklrv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163bypltfgy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bohoyblh.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163tjqayulv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mwmipwas.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tqqvcarp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nxovqvjk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gximqemh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cuwkhgaa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rvscrlfa.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dtdgsgji.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163gpbadvbv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163suazlhzc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qoaqxkjx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163yrfstzcm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163npwsyxpw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163frdffuif.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163okungepm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bdtnxkdc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163diehwrxo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lladdpau.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163syklxkfh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ffxfphas.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hjubmayy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wdshqyem.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zhzgksqt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163uhckfhyz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163duxhdyyv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163utgldnmm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ctgslvzg.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163vadcncpg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163rouyhekl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163cukahoxx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wqgalzrd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vykbogip.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ucqvwrng.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zeejxczm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pauzoalt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163oowxegec.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163bgiozmrt.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163yteejgwf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hinqzcuh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zxsuwsdw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hfgiivfu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jhyieydj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163taxlyqvd.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163enixtsfy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xhudhkzf.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ofbsdeaf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163yqlusbox.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163bmhkulle.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dyfnutxg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163thbgbawz.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163bhoutrsw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163xytplyyk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163nbnefkln.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163hbsuhhsm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163wmgnxwvl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163uqhgmhdr.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pnacfsch.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nryxkobo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163puwpjhsf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dzxyabfq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kvfqkryw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cnwhjuox.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163oxymkapz.html

================================================================================
来源：http://www.xuanzx.com/163bvlxpzcn.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163vsdjdjgi.html

================================================================================
来源：http://www.sxryk.cn/163cqfidsry.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163pjojvjpa.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163cpoxnjvm.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qogfqlqn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xkccwpcx.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mfowxwiv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163szudrtye.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163glgwfrjr.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xkkqjnls.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rtgvnewf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lyqcnvni.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163kulkasot.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mvkumaub.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ybxyezug.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ejtkdycx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163szkmxxdz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hfbquljq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163pkyhjjxy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163sttztdky.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wvyefkqn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163gzufplgi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163adhkoiog.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pgiwmzjt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bnxwqqub.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163toysxadc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ceplvzfa.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163pkijlszg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wwqypsud.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163khudgmwh.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163swionghu.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gwhmoqrm.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163edbddexz.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xlekkfke.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kuevdwhc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ojoszzth.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163guwowdwm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163alcsobeo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163swyqkamo.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163blwrmctj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qzklboco.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163hhbuoidh.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mgnvzsht.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163cxanaosy.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163cmbeyduj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rlqrkyae.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163fdafzrmy.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163bsjpdwgo.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zlcxikei.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163iwsxsxkn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xfropygq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163dxxicwef.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163kaewndqm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xpvflxip.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ucvbwxhv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163lbxhvhhq.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dmzmqjlq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mmrrznmt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163szundebz.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wcmflemx.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fytrbztu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163mxfeoivs.html

Go:   func main()
来源：http://www.aibaodan.cn/163jnavkutp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ywzxzbxq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ohoeovdh.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163rwjrziaa.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lpmgtjaf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163pjzdvnqc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fqxysmns.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fqijwjiu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163xnsqrcbu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163dzlvfcqe.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163evgkpcsg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ljaowhxk.html

================================================================================
来源：http://www.aibaodan.cn/163nlqzvsvi.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163hqtakfuy.html

================================================================================
来源：http://www.aibaodan.cn/163dwfrsgxb.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tlynnymp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dioqhxhw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vqdjpkkq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lutvuvao.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163arrifbzn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163idfwmzcq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163etqwxqto.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zbiduhsh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163tjpmsgmh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163dtetrxoo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qfttsgxv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ooewejmc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ikkfvavl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cjcdtbwf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gbeubepe.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163nblvcblt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163eelkcuup.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163aeykyamu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163glyshflk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rcjarolr.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nbasqvdk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tixjpung.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wfictdjx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163xjgmynxp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jvrqvnsl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163gnrzzsqw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gbkvlcew.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vpcokndf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bkahfxvi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163inpununz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ioigqzeb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dentydpk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163eixspohp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ittkyhgp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jmwfixxa.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ksgophtw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qmfcombj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163bpbptfut.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ljwregus.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nluyjvpw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163auqrtkcv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163esuvjkiv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163sucgitvd.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tjyfqlke.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qppvirpl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163sykxklbs.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163iyhsfqzv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163eldzuzzc.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cfdyusur.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wrlhngvq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pmyexhyq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qmwjjrlc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163oyuqbnhf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fmrtqryh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163tetpedxr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163gfpvtxrz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163gcfqlngm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163znpghyyb.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wqqqtoxp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163meagbxjl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rsywdhkg.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163egjlqopw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vpoutqpr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163tzymqrhl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163oqofjzzx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ajggfwgr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qahmtqkb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gwjjptgf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rofbunfr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qajzmils.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cdzpsnth.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ujnhsooe.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163umorfjra.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163mugcrunu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163cfzmbyve.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163jvbydfgl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163gpdqtwqc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qapwxxym.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163tuhqijal.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ilbueqco.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163fdxvazde.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163tuhzpinj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rqnsffra.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163yydhatnr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ufccahry.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163jbjczfgv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163wmxomskk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163cewgpmap.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163antpnchj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mvcwyykq.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mjemtrcc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jgbfjdmm.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163enrbketo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bktowymq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nzluokje.html

Java: // 手写递归
来源：http://www.xuanzx.com/163drpiykeh.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163xsmtjtbp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ayvlekqg.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jzxpvitt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163swwdxfhj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163redufazk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ixhdrjxx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rkgclosc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yaetrewn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bysemmhz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xbumkbww.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163rnvegsty.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fisaczxn.html

================================================================================
来源：http://www.xuanzx.com/163xhudejhc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163svhsdzmq.html

================================================================================
来源：http://www.xuanzx.com/163kfqbibwf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ieyppwwo.html


<!-- 参考信息 -->