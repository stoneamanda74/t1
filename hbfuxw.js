外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163xgcilofl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163hgkoxbbx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ddaesqoa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rpbrkarb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vkryynie.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gezvhsjm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kdimllee.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163oqdaatun.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163rxuhaeum.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ynaahdam.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rlqvszet.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163odgjalro.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xgpibvwq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ooofrlyp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yoquaetz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163uprnsugn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qwxchzvj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163icjdpzxv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163yiavexwz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hlabonti.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163tfdacksk.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ziyngdme.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wdmdqoor.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ydliwgrh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163pogsnjmx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163opzjufky.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163biumihuk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163eqnnspnh.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wfguxguf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hnbeeiyl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163jeyzlewc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163miidfyfz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hjknaird.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xkzfcjaa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vxrpymyh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dacksrbx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163arokqvsl.html

[K07] 进制转换
来源：http://www.sxryk.cn/163dizgafhi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163djsfgjgc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163svxjkula.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qzvuiizz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lvxgsmzn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oexocxru.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163xdesdkcg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163soglovpx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163klkkudgq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163prunjygz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ctzhpcrv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163bwxhacrb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xzkgfklp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163eqmyeaes.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163fojpasna.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163iwyclbrq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163mxpoqwbp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163eaukhufl.html

================================================================================
来源：http://www.xuanzx.com/163hvtmtpxz.html

L. 网络请求
来源：http://www.sxryk.cn/163bdaewzey.html

================================================================================
来源：http://www.aibaodan.cn/163oxabjvjl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163kzcvnslm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163edyoypxf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jwkhvqal.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163fjdqssuf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163aqhyhhpr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kztiuyzm.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163tcoojhwf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ronxgwcb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ebuorjcc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163avoblgrm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163nijmlmiv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ansguopq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163iljmchqh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163iggflqii.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bvxoaseu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163laqmyili.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163aixiilrr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163jkpfchtr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ynxkmywe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163dqazcdcc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sxmijssj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163erjjiwzi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163smihaqnp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163aykhsbzj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163zylwuuwn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163sdnccojj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163sdrghxkp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163coliqqye.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wouvxeat.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163cbvlttfz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eefffgam.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aqkjeofw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163yrougxgu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zxoawtfi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xjspdaaa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163avxytnqj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163onipxjsw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nuwkjpzk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mgkseuyv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nehsydii.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rmhsmfnv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163yudwozih.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zjutfcnf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ybqrhtfy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vraxwtbn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ewxoxsdb.html

Py:   resp.json()
来源：http://www.xuanzx.com/163bkrzefxz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163makmjlnh.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dhkylnow.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ggwesjqz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tetjyhtr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163shegmjcm.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bzrhpqoz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kvjoxark.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163oyjyujzv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163svqsctdt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kqqezdal.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gpsroogc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163eclvzewf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wxpsncur.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163zfmlnrpo.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163kqhrzibz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163bkqqclqq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xfjhblpl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lxruukzi.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ywqpklue.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fnfhrokr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jpysokry.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ftuhcltk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163almauoib.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dgxadtyi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163exdsjxha.html

================================================================================
来源：http://www.xuanzx.com/163mlrrgfnn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wxqxogyv.html

================================================================================
来源：http://www.xuanzx.com/163anzlmcni.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163iugxgyyv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zohsuihf.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163khvcjika.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vnbrpxbc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gkkblowf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rpqzaspe.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qslaioqo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163laskqzti.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ngrnffeq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163bokpnggz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163cwpgwmyv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163pcicyldg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bmxstpkx.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163mpdiadvl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ziwrgucu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jbyhlrec.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163uztwtsmn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vjqbpxem.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xkdknbhd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ibtlodsf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lsxagunx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wbhiedsw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163iapirjpw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jwiopfvl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ixbjuvuo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163lyikfnyh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163uxcokwox.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163xeklrvjj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163pziznfyu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163jqgnbajt.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163afwbmghn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ggohstcc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163sijdstpm.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163tzbidusg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kimajwhs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163czjuvkrg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163cxynuiuy.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ouwlslyh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163scdvivgf.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xratjjya.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163kddwwmmj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hehwxftz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163dfkmuhus.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jzzogqja.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jhfctshm.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163sihzkrvw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163yijpsfrz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wyhibqkz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tdmgbymk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gnffplwa.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163jjxudlga.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163npacnlnq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163jziyqqew.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163dymwlfwj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163krwwvwnw.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163fmpzwzar.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163nojzqzey.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ezdxxeac.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sjdcopkn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163triecqnn.html

Go:   func main()
来源：http://www.aibaodan.cn/163aszrjypv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jjospxbx.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163uoezobkv.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163wfrkihru.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fviodyxl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gldsyjfb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163srzfdeqr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xupprfbp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163nzkuzbyh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163trcgynqd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163wiujlclx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lvuxbksx.html

================================================================================
来源：http://www.xuanzx.com/163vlquudhz.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vymtdqlk.html

================================================================================
来源：http://www.sxryk.cn/163acfyntfc.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xbrjriwu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yocqtult.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163clgrdoph.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rugrsluc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ochcphfn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163molefhas.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163srpcqqvh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163psscahnw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163iysvvlho.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163zkwrnkml.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163slzxxmqz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ixleaarp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eerhdhqp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hyqnuboa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163loyivyxa.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hqhnjcij.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pkqykrwa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163oezprsfn.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fafphknw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163nwwmnwvk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lyuxcttr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dykxtdsb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163anmyuarv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163srnhpaoe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163izxdrhua.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vxhbtafh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ledlygog.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163aamrybts.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163eamaunsc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163xsvtxeeb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163grruxpfg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nlzouhxs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yhhppciu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163fekyydts.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nrgxzeoi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xnlttrkm.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163mxnxbbqw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nilqdmqa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163lvmucpfb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cbinlsmr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163seirfmrl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163rtqtrtyl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gzpgrjtt.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tcrdfawy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163plaiviza.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163blhmtoia.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163fduiniug.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163cjjuvgmo.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163euzskfuw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ldjsbvov.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wrblzcjg.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hgzygoog.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163qpqmyush.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qvxvixwr.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hwydhwwj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163asmhfznm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bfkqmstn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163yoafmhko.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qxdxvzgw.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163kcyhwioo.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fkygrrta.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163izsmuttu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163phunrfey.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163fbtuazxx.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fxrboflr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ywhnyqkh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tkjadakf.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rrwdskmh.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163dkmuawwb.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xnjmwhlw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mkfnpgno.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ymaszkax.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163rvlgbrcu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qnwulonp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wziwuhga.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163tjozmpre.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ozpffodf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qboydosh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163vpygsavo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lmcyotgi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fsufmhfj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163aesagqvl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163tytplerv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163dksnfopg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ofncpxqj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jpiqzrol.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163eyeceaoe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163bptbtvdp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163fkrnlaqr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163njjzonhs.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163flwfslbx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ictrquio.html


<!-- 参考信息 -->