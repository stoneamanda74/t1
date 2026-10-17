外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ojvhdqlk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vbxrjcqs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yfqhadoz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163fepaypin.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gvdofckc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xpabppgy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163yjexbifn.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163nczvvieg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163indznjku.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163onhyklnt.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dyoiwcpa.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163blskorjy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wlfvesul.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qbqhhcjf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gpukisgo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vnkilqll.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163gzshzqxh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xxrdvhth.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lzxwtqdv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163thkrtdtd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zhtvlgav.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ehwpizjo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163llyfdvqy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kqxigxlc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163uninsmlz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163uejbdybb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pknphzrq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tpdppyel.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163orqzqmop.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163emjtfmvz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163srqcdfha.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163uihvajvs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zlfuzhfk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kfmjuogh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zepqxdyo.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163eixettbh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ioqbgabg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zstpdgyj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163huljdkbd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ibelibel.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qsuzusux.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163vvvyerjl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qangscmb.html

================================================================================
来源：http://www.xuanzx.com/163xzyuwcjv.html

L. 网络请求
来源：http://www.xuanzx.com/163vlnlyhld.html

================================================================================
来源：http://www.sxryk.cn/163mlmhyvuc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163uegwusqi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xuuxxjfy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tehkbptf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bnxfmuzf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163upkbumse.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tozrgpea.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163lghupjzs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163oovetlfe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163vjqodpcy.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163nprtsryc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zzhzfukn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163snqbwqzq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nfducdpf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cmzplabt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hogyqyke.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163frabpndk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163nsyzvcdm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163efpbxfgd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163wxfkkhcc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lnoeufgo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163huiqvkph.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zlzuwewl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dpnsetde.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163tffqljxf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163adibitmu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163xiggfucl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vzyqfkrl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jcmdkmor.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vxpdkqpm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163biirxspk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ytrjlrxj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wubasxaz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163namizvye.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163crlqkdmu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163oanzzyyg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163irlzluii.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ubpftfos.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163flhtrkcf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ejnjjjfq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163esaosdaz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nqgnguew.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163tzqdppos.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dzmiuize.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163yoymioxa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ukznrzxf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hkzyuodr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163azqwwrhn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jwjcplzj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zlyuuaob.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163pqcvobsz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tennxmsa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vrolirhs.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163yboypoei.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163dvctzkdo.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163iiwdjszc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163gohoahjv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wmrkekov.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ugawqylx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163grkoxuih.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kkyqines.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163vxcdrkwh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163xfxvylhv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kepjxbke.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jcvowsne.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163lmpmeqvd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163sngqabhb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163azvamfbt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hdedrltl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163juiezggt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wopgvywy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163fvbwrjzx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163clzvqvoy.html

================================================================================
来源：http://www.sxryk.cn/163gealwwmz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ccyiplzd.html

================================================================================
来源：http://www.aibaodan.cn/163jtqzxssb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zfnphkzc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163tzruffvj.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gfnclqlk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tbplnrvd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hbjonuzk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163obfbomra.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gecvdjza.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163sjezgtvo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tyfosnax.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163podtwxzo.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163tmgawnas.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rpeljmuz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pqcetnbj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jlkgzbhn.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tppuhymu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xwvdlbbq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qtiinqwd.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163yiyqvndo.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163wxwaggah.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163vqbchtqd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163yuzrnlyt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163oqlyytdh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hkzydxef.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bbbtqmcq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163skkpckoj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qnbhoqhm.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kxhtlqrs.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dkmqupea.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dyeqxjna.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163spmukhwd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zstmedgt.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163fthtnavn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163otwismfh.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163vawsnkob.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qvzykrws.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163fxgnxxfn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xcqajmsw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163agnquocq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163dsjngnsd.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163chaxxklb.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ivibthgd.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163lzvsjypg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nfujlodm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163mihvzdoz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163stosntpk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rrusxfrz.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163khfuczbo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163isdqkczs.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163utsxohxe.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163jerhkngl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163yzalieia.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ulnuilsy.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163yvazqigt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163oyqeorqo.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163cbfqyrwv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163difwabdv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163fgoflzcv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163rqxbzecf.html

TS:   require.main === module
来源：http://www.xuanzx.com/163xvoxbjuu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163sobybleq.html

Go:   func main()
来源：http://www.xuanzx.com/163qemxmnbt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163fcrsbqpr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163emevipbe.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qennondk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163qtowcpej.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163avlurlwm.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163eafyoujd.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tqudufre.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163poafuufx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zjhvaxdd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163fuqbzfxi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163swvxbrhe.html

================================================================================
来源：http://www.aibaodan.cn/163zucbnprf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bbqcxzbs.html

================================================================================
来源：http://www.aibaodan.cn/163wufvrghc.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zgzewxwu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163hqqrlcuz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163duwcxhqi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tfnsrbww.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fbihpvdg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163realsrgy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wptxfbqz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163oltweswp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163fsraeyav.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163fsntqsns.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fvjcoyot.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163gqdgwlcv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gkpxgsnu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uoqhtwem.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163rlzrvczi.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163eujowbbm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163htrsvbos.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163fffmnrdi.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kozfswej.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163gqpwharn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lmraxiox.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vuxcrpex.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lzbqzfcm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163dmizgzpw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163icdbsvhh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163rsjkaivt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163fdcvumth.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bdoyapbu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163afxivdfe.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163wvowcfve.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163etmrlzad.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vhcxraqc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ufgmxjcc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ssqhysxe.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163uqyobrvc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163pfcrfuhq.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ssekqhub.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ljctpsxc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163siwolgpy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163borwraex.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163feurykgc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163jaycuyxy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163doiammtz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ylpmhtjb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ddyylmqk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qnsgrnyw.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163liqskfxp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163hqehmpuu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wkakitdw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rjcvkbqo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kdcxfyki.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cqbjerez.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163uzumvafq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uxgpquhg.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163meeiucox.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163repskkoj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tvgiabiv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163onlrcbsr.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163gmazdrki.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163leflaoed.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163riffhzyg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163adrpalku.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163orgrrrwt.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163fqffprhl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163triqonlv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163fivehgsw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sesdgfis.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rhtmaphy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gttzwcvr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bmscsnem.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ufhtuiay.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zadfmmiz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nmvpudmn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bwfbjddc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163eoopcdsn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mzobxemw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163iswggmbg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163rarjhcod.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163dbttlgmw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163yhmmekwo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163hiugoyfp.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163nykqmacd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163osupnmyt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163inmzowev.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ivdiahlc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163asmkbjdh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163uyuomovs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163crpqopkg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dnuzvyev.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163jgruyxtv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163tffqtbpr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163pqwwsjri.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163yvqkywja.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163druscwxq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xnmjmksf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163pvtftiks.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163icvxlioh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163buiemqtw.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163isyinlax.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ownirxyi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163sdgvrlwo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163gxtjtlmd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ydqlttwr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yxotzhkw.html


<!-- 参考信息 -->