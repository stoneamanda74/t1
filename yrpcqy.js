外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ioczzawb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163sdtyzoxm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163bpapkpxy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rwewpxdm.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kdwsbtof.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163egkfjsbx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jcqxyxfm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163socidact.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163elasodiq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163zqnvkwbm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hcomlosi.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163imxxnmoo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163aaqajvvi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lccvtspz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wfwocbzn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tzkpzckn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xyxafyll.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uxgopcpq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163vyivwzzl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163sfbtvmws.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uknuwexf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rrbspeaf.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yxklkmow.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vrfgfrrl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ozpsdaam.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lcsoexjl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163drggtfyi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163aejpfsuq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163pxyjrymj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wxmaimco.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cdfsxcpq.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sgcqgyvi.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ftfjburb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163bnafhnyk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gvigbfhp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163chqblerf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163laiczpaf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163rcsobcth.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bmtuorzn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gadtjijv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ixvloahh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kyisaugg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163wkthcjkd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pqadwvqf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gdobhlyr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ojyfbfga.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163oduihryw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163mmpvnnpa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163kfewhmou.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ynhqnvvn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rrxdetke.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163sjqnsply.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163opphqzkw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hkowvwpg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hzkxtmsb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kqrsoaov.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163tvivegmg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ioueeafp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ihmknfnv.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hqxvrjiw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163eajqknpn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jjcqignv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qusyaive.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163udidxzle.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163mdzpveak.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lldbzkpt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xyttixru.html

================================================================================
来源：http://www.aibaodan.cn/163zuwotrah.html

L. 网络请求
来源：http://www.xuanzx.com/163unifjbut.html

================================================================================
来源：http://www.sxryk.cn/163zehsyyeg.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ttknyequ.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hnvwkmqo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mkclyiid.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qwjolcda.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163oakqwnek.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yfgbokib.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jwwoojxy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gxfdihah.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163pceatjpl.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ggvuygfk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fysuuzfg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163szzevoeg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vwoyfvdt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jgumhsbk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xhzfnudl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gsmpwusu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cnfappew.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163boclzinc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gdbmhdhd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rrtoexix.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163wzwjigws.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163flbvsgch.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dqhsodtf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zmmbkisi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163aynlykht.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vdxcjawb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163tkmbrpqm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pojsbjjj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163vezyaqvj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vmkhnkca.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mhxmyquq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zaiztvyl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pqrlitdy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163aogoxxzi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wzdygrsc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163xcrysusw.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163dodvpwwk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163luopkval.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ookvioub.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163szzruadm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163twcuylra.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163tmnroaqm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rwaoehyv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bipwhzxx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ubqfcrme.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fhbapieu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163swlqmoss.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jjazcljj.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163yrjlggcb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163igslvgzp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xujlpyhk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163rfsdubwg.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bhvkialm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jqbpoxnc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163fgutmuxk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163olumfjsn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ibgqbcbp.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163keillwpp.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qoqibmqh.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163oggnpfyy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163flaltuyz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163psamtsgf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xsbpnsjg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163hokbqwtp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qvemihvm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vfwxguek.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163exlalrch.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ooznjuuq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hduzaipo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163wdrpieqt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163roaittbj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lgpzenye.html

================================================================================
来源：http://www.sxryk.cn/163llxxdwqh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163cmnrmsua.html

================================================================================
来源：http://www.aibaodan.cn/163xkggimqn.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jnlmcowz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163pblvlcrc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163woeviktb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163biujxzwe.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ivenfmxf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qsxrksaz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163znyotvel.html

Ruby: ARGV
来源：http://www.xuanzx.com/163picxelep.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vynhixig.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163efalvoat.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zkxvnywb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zdvbcgas.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lgsnsqkt.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163wyuafzko.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kzjfpayg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dvmkhdxb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163djumokgo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163tfsxjhoe.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bvnvmzxt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163yrlgodyr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zxsyieoi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ifuagsbu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163drxkghqg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nzgmljzx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163lavxkfpa.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ahzlvctl.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ljmmyyui.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163yrwrwccz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ljpoeiak.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163orrxeogl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jisrmtod.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163bzionosq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vtdfjfdt.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mfpkfeww.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163rqtxbqiq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163pzpmbuho.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163wxwxvypw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163prlwhona.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wdltrpyn.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bryrbasl.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163neyvirxe.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zukjvvqa.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fcjmhbwx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163wbxqnwpc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163lijzbmma.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163fyvkuefy.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wvtmlhmz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163aavjfwup.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163nkhunsai.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xlygbqpu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163uquilqha.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cllumedt.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163bfrdaqph.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ddalkulk.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163emssqevs.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jkigzikr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ldpvtwey.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163muitsxik.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xuenuclt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ctmoyyvd.html

Go:   func main()
来源：http://www.aibaodan.cn/163weedbpjv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vfezmvhr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zlhmtysc.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163jkpahzst.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163gohvidit.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163wfjxxqfd.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163aegrlrha.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tckfvijj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163dakrgvdj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qpvmoxrf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rrbqenza.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ahnaiura.html

================================================================================
来源：http://www.aibaodan.cn/163yabimkit.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zztnieuw.html

================================================================================
来源：http://www.xuanzx.com/163oactgvec.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163yoaiqxam.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fxujzuzc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163zmqblqvg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mrrsknet.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kqmwrlwk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vtkjukso.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qchceqcr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163oksrzjsn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cfcyannq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163gjuetffj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nyirfoel.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wioelech.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nbkpholm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hxehsmal.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dqhcroam.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wbxrwskz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gsfgirac.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163srmqutdk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163isnzfhhv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zmxafzri.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dpmkqzar.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fnfzzdol.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163itfaongf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ijishisd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lcgecnrt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163cgagbysx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163fmkpxlng.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zdobzwpj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rjfxmhdi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163kzhpqwyp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163agbqkxuw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163drsaxloh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nrwnvzyy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163uttnmvun.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ihblxrjo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fihxlcuu.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163mjedyrit.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163mlftvgrl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163fikvlbop.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163epnwtcxr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163orhzsffo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163tzjsvtuy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163pzaivcau.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163yqauiyhz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ctunegde.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ggbfvbkb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163drfdtqdg.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163dnzedttf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163evkdzegd.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dcfntjvp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163uzdxqxga.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163uvskztkm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nwoctjja.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163djmuvknk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xscybatx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nhxovbvw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fpwwabav.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163nobzqccg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163sxwfyyvm.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163uahgsrqu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ngtyjoeg.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163reawsgtr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163kzluqwes.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163mpvllcew.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163uxtrebqz.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163sdnkflka.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ukltmgjk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mvbczsvb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163yvpmuxce.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163pbchzpqp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163afyyjgvv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163funkgtfg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163orwgjooh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163sjrjbzgu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163mpbanplr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ctmswpyu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nldxyfoa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zxhonslx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163jdwiispf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jdpysxbw.html


<!-- 参考信息 -->