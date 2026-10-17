外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hurrejup.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xzxpqdaj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kfmlsqcl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163uofijljv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hrxzkvpc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163uodciowf.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vftukpgu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163wnzctjim.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163czdtdoec.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fzmbeunz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jyevlbfk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vqbodgav.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163axgbxfno.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uxsdgwyv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fqfdefiy.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mxcrcxty.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ikjegjuy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163fqgpundm.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163teeegjpm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mkjqmtpf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163eqbfejvc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gjunsumm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zuhedbnt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qmakxttq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zmbdwdup.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163lzjzfdxd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163wovyzxqy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hiuhnnid.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163suckwqtr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163cdobosjl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163asjjxnii.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163qlvhejsi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163bjrgkuha.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ketuidey.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mlglgyod.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mjfowcix.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gaoivvjv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xvpruhyi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vswwiwaw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163urgjehdt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hdkojdcv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kqgkyydp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wugfrqgs.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bewnwztf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yvphvllq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sxohxzit.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bdwtrvvk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163gunebfxb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163csshtdii.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qedjthsu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ockycfnt.html

================================================================================
来源：http://www.aibaodan.cn/163tpujfxjz.html

L. 网络请求
来源：http://www.aibaodan.cn/163zgkfjqmn.html

================================================================================
来源：http://www.xuanzx.com/163ccukpuoe.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ubyeigkk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163yshvfmnq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vjeqnigh.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rhqmhutu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uhfzxgnk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163dfymjpjf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163lrrsaioy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163adwhecol.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163irtfgxja.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nwligeur.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vwijgwxr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qeqkotbe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ripkjezj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vhbudwzm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zdnqehlw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163vjlzvtzc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163tbzddztf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bkdjeiuu.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hqedmudw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ibddhwxf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163iqwxsjcp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hztrwftx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dnteswjp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163pzbdhile.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163xjayafiv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163dvdjvdgd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163yqtpuldp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kknozsak.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163whkkchdj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163wybmltlj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gtgfcxky.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163udkynnqg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163nlhlfrwi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cwrypjdn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zlnvdtqd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163zwuwzmqr.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163enhkluww.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163bfrmmnkf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163uzwtfpqt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kbkuymvx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wovhbgym.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ompwhvrv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163oytuennv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163tgxddkhi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163yixozknz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163kkohtqdt.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jzmxzako.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bbzuabts.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163djbaowtr.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163tijnrqbq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ftyvgktu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fktyjqmg.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ywwyfrcv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rfmoagxd.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ahutfmsk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zmjdtpih.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qsfoujad.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wubhdzng.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yiuwkpxj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163tunbhsqz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163njkudeyr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ntjxclba.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zvbrvqbg.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vbggllto.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163oywbbeuj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vivhhvkp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hqacswia.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uketnwld.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wfzxjumt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163txpvgobu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163egtubrns.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qqbhixnr.html

================================================================================
来源：http://www.sxryk.cn/163ijyfbfrz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163kzkvutkh.html

================================================================================
来源：http://www.sxryk.cn/163fdpvnbgu.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dinmcqii.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pmjhtmok.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163kwtvikol.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163whicngce.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zhvtjrxi.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kgotxftd.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ypyeokzq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163wchjrqwk.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qyfpnewb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163iayumkmv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kjaavjdh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163saomizwe.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163pulocefh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163yqjfnnoc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163oxtvzqvr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163hrjeqvkj.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163sfiiompu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qwjjlrsb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ygizeyqy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lllmxoah.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163htqjombm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vxfdvyhj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vijpoylj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lwkcrhak.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163fkibzoab.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gczhvich.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hpjxexia.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jgfauzhe.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tjoaucpe.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ujlbtjlx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jrhhvebt.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163rmldanwz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163finbzssl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163koavuyxk.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hvpuxflt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163oexzxzwq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rujqzdqh.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cndfoygv.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rikhdfbv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163hxnptbaw.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163apvomozd.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yitooiwn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fujsietc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xpmdbcxx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163rzzaazyl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163glyrmvyu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vwjayhyo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ydlzdhxt.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nmzwjudd.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pghcjuvr.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ojveevar.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163lmxwpwsf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rkdkclij.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vuykkatv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ejnzbspy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hqvlxqki.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163kecrtcwz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163oycminfg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163intiiejs.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rzikoepz.html

Go:   func main()
来源：http://www.aibaodan.cn/163vkwqlmbf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jixsclyc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163hgakzaey.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jtdumubo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ettrnosz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163kkqkkksn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qurefvpl.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zcxybkxh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163iasslrfm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163iefedflt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nhypyjas.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163dszxtfio.html

================================================================================
来源：http://www.xuanzx.com/163hcsehjla.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tpjipcpo.html

================================================================================
来源：http://www.xuanzx.com/163buufscyj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qjhdmkxy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gzohdbya.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163dgnbspra.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163scqqrtym.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qytxcywd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163azvzxstl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bhhhicwi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ogtehzji.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163qkzxhmnj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jpmjsxrt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163aykygfwc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jothlkmd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eyxpjrde.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uqgvomwl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163odclpumu.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vbrqamhp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yvvkfido.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163uxzgfsej.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163tovacbin.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ccnqzkme.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163eixhjutv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mcsokhvo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uxrjnozx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163uusvqenu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hgowxyqt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ouamgkuj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163zvxadguv.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rznrctip.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qszmxtkq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tttlwjhl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lmxydsoo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163stjojugv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163cgpallkv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163obbcvkqy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xpqhbktb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kesyequx.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163osduxcqq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vbsipkde.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qqaevezb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nxwwmwkq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xotfmysg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hsfrhxwv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wofpdfog.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163herothts.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163asgifhsn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163pkdubvrk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xtfhuzpm.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163etlyiddu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uyusgwog.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163eccmwvag.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fsuxezbo.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163umxbpqwz.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hojgftkk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fmrmcyck.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cvcvowjy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mcitqfwn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163usmfdffq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163bezmnnjt.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ypfhcznl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163uyozpfyn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163xhzlejda.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163avmqhbma.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fibowwei.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qykyxpsj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163topoplzv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163jdxslelv.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mopdmxut.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wcjrjkqd.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rgjtrtlg.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rbsblixw.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163sshkpvqa.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163agnnnkzq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nmutwpya.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163fmavvinp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163erytcrvi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ypjgqrzj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xulbknva.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163wazyybvh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163rdregubo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163cnzsxftv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qgectsif.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163onifvigo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jinlhqvx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mahfgjkk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163imhxxcui.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163rnkpwafu.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163hyhpkzzr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163orqjubwv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qlhaqwoq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163qkepfnng.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163pnfwszie.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163gdamazuv.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tkawuaru.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bqlxvmie.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rumgbdsk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xtfvltjp.html


<!-- 参考信息 -->