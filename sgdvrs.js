外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163anppkqwp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yyucrkte.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163izepyrwg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163uivgyejc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163bzzvaaqb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xvhbkgqg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163cpwupkit.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163qqktnqxd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zcvnxxgo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rnymajih.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cpytbybz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163lgbhimhy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ugxjzpcd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zbolhfsx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fopgjtkv.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163csqpwadi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163aknxrvsl.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jfsiqoqs.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163iodflxvo.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kiyubepg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163aiepkomx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xpytjdad.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jhcxvfco.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vhafbisw.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ogjwtvlp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sccvuxjk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163eychxcdp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163suoozzyb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ujoguzyi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vxspyfvy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qhkaqzhq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qaudfett.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vdagbvnc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163uqanokpn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zfvjmysf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163oejctfiw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qpryzcej.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tydszase.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uroqxmms.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ppcxmlyh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163oplwixwj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163fhwjzvtw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163kjdmxqba.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qdtrcqvf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jpabxwyi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163luqfkbmu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jcdvzxue.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gdgfprsj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163aokrmzwt.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nqqagjme.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163yfnpqxos.html

================================================================================
来源：http://www.sxryk.cn/163xuytugqw.html

L. 网络请求
来源：http://www.sxryk.cn/163icauyrvw.html

================================================================================
来源：http://www.aibaodan.cn/163mppccfnf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xfxoffpd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vetsecwt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jcvvcdip.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vcytodtt.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163orekagje.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163exoapzsb.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mnrokgkp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ymbwvcsi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ufbydrey.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163alzlugls.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163thoqqlwk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163poiwkjza.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ugqjcebb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xvastaym.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163vtoicguy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rmxectge.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uwfqyaxr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rmworikz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hopakoay.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163sqibsvnv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163efrmtklq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qsihmqpl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mqxkiscw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163iskpsvzd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ifpiqhze.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xtvpgyma.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163aibbpapt.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pzfrbloa.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163sgzknslv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163osueikhk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163njsqeuij.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uycqsghj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163alhqwdio.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dybqyihs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ykpsyrim.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hnpdoghj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163nqyigebu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163aokdpjbh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vbdyqgah.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mrospauh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tlydypmc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163bwedlqfk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163mlcgpcmf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ztabsyvy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163svnpxfnk.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hdsqljeb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163myrdsvbi.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163thzywpeb.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jngndsfr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163lvmdnwhv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163akzscelt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163iiogrgtn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vybcrnlc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163alssqocs.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fhkkeoxn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163msioubiu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ufwogjsb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qjjqpvyz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bishiuhf.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163hkytnvwm.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gxqmpiak.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163txjpbyzc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163clpzfkqo.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tqcqdfvh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163byqolpnc.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163uzbdrfkv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163evchpgti.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tjuibfov.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163jeegghms.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163xwbigtzq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wuapndcj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xlkpzkpx.html

================================================================================
来源：http://www.sxryk.cn/163rptomhmi.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163kgnaqujr.html

================================================================================
来源：http://www.aibaodan.cn/163zrxlmiiq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163clsgexkq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vaaytprj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163sjcszjus.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ugqmmwak.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kkwbdgco.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wyflznge.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pricdsnq.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jjggjiiv.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gjkflrui.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vibdiqor.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163jzwzcwui.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163pkrhovjy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163neusycex.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163wtoopwmr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163chomfbcu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ghmplyen.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163rvtgzpeb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163riaoblzm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ogoqhokm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163tntcxwrj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163mdjzfbdn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pxiwlama.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xnpandmw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zmgohtpm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163hcbjsunx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163udoxxkoc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ateatmxy.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vikoojff.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163qubqfoyf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163fnstubqh.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ffgvfpdy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163xsyaiehf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pimjvdhu.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163pvwtgelv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kmhzvudn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163bkxtcuof.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dnrugyld.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ulxgvpji.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163skanjyhe.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163uvflsgep.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163abfotvoc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163rysgpazo.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163doctbtna.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cgtkhzrr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vtnqlgjx.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163udjotvko.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hfdguggl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163xlitshvz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163odcmaqlg.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jqzcarmc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rcaenmxc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fbtmqaeh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qotzugdg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163nrlpbvtr.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163mfjrrost.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lfpmxqzl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163drhcpdlg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163baqgdqir.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rjxvalyg.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kroizymf.html

Go:   func main()
来源：http://www.aibaodan.cn/163zckljnij.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163hicnkorv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ryuwhdsg.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tgxfbzgl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163fuctogkw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ulnnapks.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qxyyownb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163edxdwvqe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vrptakeu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ceezhavk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163aibqzkvs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163txwfvgol.html

================================================================================
来源：http://www.sxryk.cn/163msnhwuoo.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ylpidplm.html

================================================================================
来源：http://www.aibaodan.cn/163dvuspspm.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163iyzdqogz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163eytftxvt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163guigpndn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yfyjdwbd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mkppssvo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163esbzulsd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hiuyfvck.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163npudbuig.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rutwwcch.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163qczgzvdx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zfbrfazv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rukoqhll.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qqyfuyus.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tyuwbbml.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163asoujkjl.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163qvsachxc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hlocrpfq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163lpwlknla.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ewhrnxbt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163slxzlcuj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163bobuwluk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mzzgijwa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tgpxnqgi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ewhfnumz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163wkjcwnwf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vnpotcpo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tqxdjnpl.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163rnjbvlbh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163objqaqwd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163wbiqdfph.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bcbgsfoe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lxjwnazk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163zyaqheqf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163pxrewdcm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163unirvotk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qgpkbdir.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163vowzdjhk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jxmtxngn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163lyiugakb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dtcivqhl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lihbozyo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163tbewdxkt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mcriilve.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ngbszdia.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hnedmuil.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163iwlsviiw.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eokugsek.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163stxyazvv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163opjtevhn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vqiscnqh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ozztzngm.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bkjmvedd.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rsbpqfbh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163odfunxte.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163sftabksn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163vpetywww.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163aandkzlc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xyvqzyat.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kapozsvl.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163sxwjoqyj.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ygnluexm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163gwbszwti.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163sblaqzqh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163liujloif.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xikdieuv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163zhdopxrd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mlyvembz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163quzyliyx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163cruntust.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tsnytjww.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jyzybarv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163msdugumg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163kgvnuxam.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ywqiuuth.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163otqqpuaz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163maidpdku.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lqtiduuq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nkglxoct.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163skzrwwon.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qfzhgqiv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qqsiehex.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gxxbmjxg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jkesfbdh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163gqutyfec.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163upalnnbe.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jekbwfsm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163basvzlcc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pnqochow.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163rlapityu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163zjxsnbvr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jggfgaju.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163pcykcbaj.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xlfimkpz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163letwnhpq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163aunncykw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163yjhqjgma.html


<!-- 参考信息 -->