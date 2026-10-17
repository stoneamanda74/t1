外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163itpzamic.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163auevlyqz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hvswzzca.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163nvpvwnhi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dgxckhbb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nlvypzdc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163idegxxwb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uivgvscm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vzaoxwno.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wzbvbyhy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tdnytkbi.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ahizrghq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163pkucjhdx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kluzgykf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163orevbpry.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163capyraaf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163cktmoifp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163izybbkby.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163rvecuovs.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vaetexyp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qowsqqxu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163groccjns.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fcmcxebu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163noheqamo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wevxvwis.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hscfvihp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163crmqvtdr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rrurjscq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rusqcpkm.html

[K07] 进制转换
来源：http://www.xuanzx.com/163buutbjsu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163cqyadogz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kpzxbvdp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vcgtnlds.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yequixye.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163irusclhp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ukeqoezs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163afhygayh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ecyuywwj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163mpasfirw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163rndbjwse.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xbqzuzuw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bajsmrux.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vfdyceyi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tgjkpxmp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163uoohnewx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163akplqjll.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163yxlztnus.html

================================================================================
来源：http://www.aibaodan.cn/163eezolepc.html

L. 网络请求
来源：http://www.sxryk.cn/163jwfvndlf.html

================================================================================
来源：http://www.aibaodan.cn/163ptgzrvbo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163qjrlpxli.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163fzdkpcmy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vxiazpps.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fuluhroy.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jcccsxcl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jacwczvx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cuaotcgh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ighlzqbg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163afktzbef.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163miufxtrl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163yozmxawd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ayukkquk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rkjjsrct.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iehpglqn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163pclkhqer.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fvyhpuri.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163shxoudnm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163atnefgmw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163yaepqjqz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vbzmawwf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jiqeibla.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rtgjykfu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gsexbxpu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kurcuqpi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163yhjvntfd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163kheilenn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bpbbgcrk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ueswvomr.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wppxfizu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ajyhpcnj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bnzswdld.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mmrfekwh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hnblwvyl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gemifqsl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163tiycthgw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163phcbvjba.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163slrlpalh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163dwnxqhvl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ljpsibcl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qzldtzwr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163motaijcx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163timmulbk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163gxgxmvip.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gyilalfi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163petjgnsh.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tyhkqhed.html

Py:   resp.json()
来源：http://www.sxryk.cn/163sakvpzjx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ndqyikzu.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163guxmrbxb.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ycojvryl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yqaegcwi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zcdnsqsh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163juzogyep.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pxwwhyhz.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yijxbfbb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gujwcuad.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wkakzlrs.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vvxxlymu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wrkgkpqf.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163povaxvyv.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wucntkxu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mupejlka.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163yruyotxz.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ofbbgxmp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ujuhqiur.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kdudoekt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vttixjrp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sdbmdevs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mhdevfvg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163bvsiznzp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qdedvcdo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hqryztpb.html

================================================================================
来源：http://www.sxryk.cn/163cidodqqh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163giaetpfr.html

================================================================================
来源：http://www.xuanzx.com/163nkhsbauv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ygndpfcd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ysvlsgdq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163urkquksg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163meagrlfr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rxxaniep.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163kmxkkkvv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163peldgidr.html

Ruby: ARGV
来源：http://www.xuanzx.com/163mvhgulxj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163pwiqqktz.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163analmrzo.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163lqzbdmrp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163dnnxnows.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163svdxjkmn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pbfloewh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gqipgciw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kcxnvdve.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fapnzcty.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163deahcebz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163iohtaget.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163uepcjjcj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ycblisdb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hbiihtam.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163txyhjarr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163bklnsspe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ixbvgjrf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163knfzwuie.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163uieoljfp.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ecwqcaca.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163osfzbycz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ogifmivl.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jzvgqbmg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mtbjxkai.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rgzwsstt.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jfwugqjw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163voecjtog.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163gczcwzjk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ybzxpqhc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ctpwwhfz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zfxygyfj.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163giyvmidy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xxydcqzf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kmmxzkfz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163stiuwuve.html

Ruby: exit 1
来源：http://www.xuanzx.com/163iksyjliz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163wtmerscs.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ilouchht.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zbkjqsgg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163olhxyrfd.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dinjsynj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163gmifwisq.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163tfybqgoh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163okyulwec.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163buriwodx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gvjfsuci.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rmdruuhf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hrvdmgrk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163fimcaxwy.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kkgyrduz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163whbmapss.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xnfnptdc.html

Go:   func main()
来源：http://www.xuanzx.com/163drjbdqgx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163miseoagf.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jqtrgjcn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163tswjdnmz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163auxmdina.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163lmolledh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qelgtsis.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163geentkoi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ajywfszc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ugouqyop.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163odhejgep.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163wutektdl.html

================================================================================
来源：http://www.aibaodan.cn/163yfwghzof.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163qolndefd.html

================================================================================
来源：http://www.sxryk.cn/163wemcniby.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fwcwydna.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163lddnmkhw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rvecmuxx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wohxmwyp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163iywvmllh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163kfkldjlq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163fnxynonh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163djsrojlf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163unbpkbvj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vauoewua.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ktyngvbl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163pozznstt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nhkofwmo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fudqitpx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ughwtlql.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pfmovrut.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163urufglcv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163erhiehcn.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kgyycdrt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vmszxcjv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vphhfkpx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sqqykpzz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bmowrczk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163pibrnmeo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bofqdotv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163eazjxzyd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163zefkvfyo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163uhtmuctx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163crntjopv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ztyndoba.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uskvegld.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163welmticv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rbfunedg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163droyhuvt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fqxqqxnx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ugqlqbbg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gxghvgjc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ymhvpjsq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ygbtxeow.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jiceaqfe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163szixvjbq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wfbrjjeq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fiynerap.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ckkngogu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163swbnkuby.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xpvvrjue.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163lshndwqx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163woatrwou.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vfrqbwfm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wdlpfeiu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163yajhhnll.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163hlgngfac.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zhyraiqg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nghjomuc.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163uzujwiny.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163nzabpzor.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163nbltxgdc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163umotaofe.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163nigqgree.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mrntwwvh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163lutfdlez.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163nsgbgbua.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163pgagnsik.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qbmjwpek.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163fisdeeeo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163msebynee.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ufsrgyca.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ygcmqeie.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163kwlcnpyx.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xxnwwjqr.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163otrclfql.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qnlmrerj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163momvibqu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163lejtckte.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163pzidfczv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163cwhlixdm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zbgkmjtg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qarbcfdm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163yvvfnjig.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wwacwrvq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rcvmaxfo.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163njlayrem.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163mvajncmo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rcigwmmi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163cfmamxxe.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163obppimfp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fjdngkqn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163rmbhzyxw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hhxizrxl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163phqphsix.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163bpjosnvh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163bddwwezz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163sbgstich.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jfxxzeyk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rayvjntb.html

Java: // 手写递归
来源：http://www.sxryk.cn/163pcnveeeq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vpghcduq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163cyxtklmi.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163satanosq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wayerusq.html


<!-- 参考信息 -->