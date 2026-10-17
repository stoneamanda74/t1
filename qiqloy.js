外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uavlhwju.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163smvlyiya.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163nuqrqfqh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mmhwfoxj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hqnilsgi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163acwiprkc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163hikmkbbm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hdhgzcfr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qssodzoe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163noqnjqqj.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163dlzhrnze.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163cpswcrjh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163yrqotzeg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163iqdmusjh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163snctkqgp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qwgdlrve.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hcjevabn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pwbvigoh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163urqsqdla.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163syxvnxtm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xexwijkm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kuovyyhh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163sraikjbd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rlzkkxom.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163gcicccpe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jqtnvddc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zaezswwm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kcawsoze.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xzmtyhxf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jxoslbfn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sumhwods.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163aayyxxty.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ifsnmadh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fcudnija.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163zzpsicuj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hluagerw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163juvpqmuh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zdhphzeb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163aomimkdk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163lcvhvvib.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163aweivzhe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ghurnjun.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163fctuyuja.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jwqfshjr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163feorclmd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bawcfikp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vyffxvyk.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xyydowvu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ndvurbjc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ccjifnwj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dgitvqiy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ktwndlzb.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zpiuxzso.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cmwjsenu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xirvufhz.html

================================================================================
来源：http://www.aibaodan.cn/163qypxokdu.html

L. 网络请求
来源：http://www.xuanzx.com/163urtnblcu.html

================================================================================
来源：http://www.sxryk.cn/163mnilkqhn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bgredotu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163sgkouaxl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163fwjrqvwe.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qnvjvoyp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ungqwhvr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pflxvtvc.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163cckhidcz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163kjaprpbv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163pafafmfv.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163sgwdxxco.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163skiajoof.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ngefzofs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163elyfzllm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163aapvudpy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163dhvrdevo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tsltbrgw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bqxwfmff.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jubuwytz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jxtuljak.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163tsnyqhki.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xaolxfby.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163falbydaw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163iqsdqjdz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fcthtvtt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163tdbzcojf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163drswzytl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ebhdlowq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163synhdhkb.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163audbvihc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jbtjjhyg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ylxsihzt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163idnkwzdm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ozukzuhs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163csamgdsi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163sntntwkc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163kmjhcmfz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163rqvqymjz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163emtlaght.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163iwbtkpjq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iigqhghg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vzjzejge.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163avzvvdrm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hzsivbau.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163xojtusmd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163epyyncjp.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163qhdclvcl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vdmeocjn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163mxjpiovr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jhfxecky.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ikjintwr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vrpcogeq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163omsiascg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qnaiejuz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ervaiymu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163crjptcwg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hnlgldqg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ixtirxyx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lgyndjrp.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kbtfnbwn.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jimdocha.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ynqwtmck.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vsobmicu.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163efgqtcje.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163kbarzunm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163dyrmlwqc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163npworglz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wvtcdjpa.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mwzudcic.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163pgfkshkd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163soufogtn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kxwrqpaa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163yslwougf.html

================================================================================
来源：http://www.sxryk.cn/163lsvitjwn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163wznaauci.html

================================================================================
来源：http://www.xuanzx.com/163ibdvrcjn.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163dcmgogii.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163uvuipimy.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sebrbsui.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dvshzjhv.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wefegdjw.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163eumpqixi.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163rqymqymt.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163akgxkquf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163spyaxhcx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163enqlutxb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qdbrpkdk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163sdewcbzh.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163fqerjpqa.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163blniscad.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163abwahkgu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xngyihno.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nhjfkcgm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lvayqwoq.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zhtcnvfv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cubjylih.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xzfbhgcu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uecmovny.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fdiykorj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wqusyuhc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nmpcimuo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pbfuplyn.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163mbwnnfqu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163abglfnto.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mwgvaosk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ocuajbgx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163yfhbkahz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163nvsjvepr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ufqlgkpd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hqybmoas.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wuqwxyhq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163drmytlnx.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ncbzipyf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ahasnnxg.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163knuwpfln.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wmammliv.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ovqgrplr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163mnckfkwx.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163rvlfpucp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163iyctvfce.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163szeuwtbg.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163tnnznmfn.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kxvrnrix.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wkmyhpet.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ojcptrai.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dxnlfzhg.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163yzulxwob.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hyfnungp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nsjaptlf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dfcfuzqj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ahcmlkax.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mswzrgxn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wdxyuvbh.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ugicjlrq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163qqmauocj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tlpqkmuu.html

Go:   func main()
来源：http://www.sxryk.cn/163alevbwol.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163mhbqcrnl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163sqetlrsz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ajhkwzkm.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dlncjlol.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163prvjnoqa.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zjtmlkej.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ywdymufe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ckmvrlkf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tapkpaas.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163sotqndcv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163nnsxeeor.html

================================================================================
来源：http://www.aibaodan.cn/163hmvbcfaa.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163cslkidfz.html

================================================================================
来源：http://www.sxryk.cn/163qobzqelg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163hvexefiv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dnekauuj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163dkgritex.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bxswtuxc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tpskxgcw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hgfhplim.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rvjnbiob.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qvqfvpkr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163emdazjgl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163omdtgthi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ahbwrnbp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rvzdzzhv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qotgfnll.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nboecxzp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163cayhqtwl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163wgsafviu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bvnxqxlg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qghmumpq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163njpnosgc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hkvgpppq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nzdmicif.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163evkenqsk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rdznnlaa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rquymkqz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163uazbfchm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163exywdqnu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163bekzdsnj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163woqiqihl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ifpgiwyx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163uajhmnzv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ashxzqoe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dvmmkdmu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jwaqjshe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163machfesr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bvbdjnxg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163oinhavxz.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xddnoslv.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163kneuiexo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163mucegipk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ftwmtzrr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lyvcvdeb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163fagozxal.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wvkcczhj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163potocqub.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163oyqqaybm.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163axcorzho.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163skyngzzt.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163exaohyyg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163enhkqkwx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ehtvsxqp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163mgyisloi.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163rhvzicwm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hftppbyn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163abolivdw.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163lwrnxuad.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163abzrnyhf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163uxdafvtp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163bopkaesb.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163slxisgzx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163hogojxag.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163kqxumvke.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dtutkgst.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163gloezoui.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163avhvqnnz.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163lctziggx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rrqkbzms.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163llsicikz.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ujdborij.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163moqjhglx.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zjtyjddg.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wbydjlkh.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nwqkildo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qbuufdxb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163yqpkncyb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163wrjbhkrs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nlpuhnmx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163hkwstyxj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zlmmdrnj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kqpyslfu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163mphvllch.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163jqtgrjjq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163yupxwfhg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yzoiijxm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163smtjpfas.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163pkktgdhv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pnidjnpp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163gaowgqka.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xtvidasr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gplgzlgi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cfxaixpg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ezcrldul.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pdachhno.html


<!-- 参考信息 -->