外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163aqlwhhym.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163idjspmdo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vlwsjiua.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vpvhcbbo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163yoimtyjh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bsoggsox.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163uwameinw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163gwxksopm.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ballzjwv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163whrskoxq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bmvjkpte.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163agzaajzp.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163konfoqet.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zjrwwsva.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uvejlfqh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163trsoxsvg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xdoebasv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ceynrflo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qvmluuya.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ohfaswsp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uvwzrsgs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jpvryerh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pptfwoyf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163aelguroy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163kdqmttvt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163katockrh.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hlhusqnd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ierkyssu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163firakcjd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163eflqgral.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163djueduxl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zhliwiqv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tflvytwc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bxfyvqbn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wclbrsyx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163agaczqyx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163uwtourly.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vtzovrbs.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kswqlpek.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xbcbngak.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jffmgbdg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163aeyyiauq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163txegofbz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vuzhlkcv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163jeodmyzr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ncpovwac.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wcgjjusm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dhlrehuv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xbphovam.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163hafkblwp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ochdbxyr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163bhhexyfe.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fhdliznj.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wmojfkhj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163flhchjfi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163iwtzxrzy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163aqojmghh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jjewgzre.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163swyqphze.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jlewnofm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163seurecfm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mbntnhcd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163yfvxfvja.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lkipbzny.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163tsktsbfm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kqkpxdfy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163aecfiuix.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xqjkvfhg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zemnzrhg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qpobzyyv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jrwhvtzt.html

================================================================================
来源：http://www.xuanzx.com/163rrdwlahs.html

L. 网络请求
来源：http://www.sxryk.cn/163nbqedqoy.html

================================================================================
来源：http://www.xuanzx.com/163gnzxwoql.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163fcyfwqls.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ldgbfmul.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pyxtihon.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163gdywxdor.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163zsciblhm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163faputtba.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163baofcbwp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163izzsnigc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vfkwkaue.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163fwzpxmnr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163cnnfjczn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163rvfrpasz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wtmjjuhe.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wydllznx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qmntbvyr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pnnweomq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163kfqofbym.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163afluapou.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qaoasvlq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163edwucxfz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163geewxckp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qqpkzrdu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lzrlaqjl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ynogggrs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163igkroaho.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fdezqoxa.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163amvmysje.html

[L04] 设置超时
来源：http://www.sxryk.cn/163whxfbsyd.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163lwfeucpu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xsbstazf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dpeehcrj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163thkmpijt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163kmztglbs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163yzmjowbc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dfmhxgij.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163npvcpigc.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163nzptupgv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qdtxldob.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wbztjsda.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ikfqhktw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vhaavcmi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163goscmyjk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163islpcfmc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xmzciihb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163skobhvtu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ohcsxpck.html

Py:   resp.json()
来源：http://www.xuanzx.com/163asiufdwq.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ddumpfbt.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163qvwiinwb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163agjnxnui.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xzcvuomv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dvcwgqtf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wtemvfql.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bowoyrtg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163zrcupjgy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163lgbshxtz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dsvubvwr.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xkfarigw.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wtagihtc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gwmmfiud.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qvivplcl.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cimafhdq.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rabiexlh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163lbmwgdju.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jkfeeqwi.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lfngrbll.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163akfxhara.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ansuasfr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rojhdrfn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163rrdklrxv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bjbgfgfj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kdgiynsm.html

================================================================================
来源：http://www.xuanzx.com/163nfihnpzy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ffxknsnd.html

================================================================================
来源：http://www.aibaodan.cn/163nkpdioes.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ezvdcwkv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ioudbvae.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nsrhkmhf.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gdiugaqr.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163miqneiyc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163tycercja.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163thdwpefs.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jimczker.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mgqajwyk.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163fgdlxppr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pfmdzxxl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ujyfecwz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cwmfirat.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pjeaaval.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kdoybwyt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ixzinorm.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mkgasmaj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zozenpok.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zubuapce.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163koehgcji.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rojmzghz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163klvdwidc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gbeaowmx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163sqnqmbbw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vfmhcnmb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163gaabjfhm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lznoqtiz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163qxjxwozg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163mwrcpgqb.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ruoybvfm.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vqnkjjtp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mutkcfup.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163soklvuss.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163cdjbdhhf.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ensbzblu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163yqfgyeop.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163dsorkgpq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163fatakqoz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163eiioqvdk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ivexewtm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163srehmiuy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163orketynt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163phftynvj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bwwyuxvw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vmvxurez.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ojvnokgn.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mqobrjya.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vppshgub.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163oqdtqhwq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163kwwdcric.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xusjhyae.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xtwjdzlp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zwjtfozr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163hdcvtjjc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hmfumofn.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163cmmrrfpz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163athafjzv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163nnvkdvis.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163mroubkcb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163umftjgik.html

Go:   func main()
来源：http://www.xuanzx.com/163dbymrphp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wwincmmx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jiulsuns.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rdvqklfl.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ctrweeey.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dabrqgvs.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bsbfeuvx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ondrobkq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ivoffkqm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163gcplcidm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163islvnriw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163mrqxkrug.html

================================================================================
来源：http://www.aibaodan.cn/163orsiugnq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163sbpjumtw.html

================================================================================
来源：http://www.xuanzx.com/163izkoexaj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ntikdnrv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dkcjmjyh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ylposhjn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ptgmizgw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163geafuaob.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163itkambhq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hgbitpzm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xpuwreuu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163imraftmr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163udllacxg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yddpnrce.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163yjgvksdj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sagvrrew.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jmrlokgz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163bwdpifrp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163soplepgj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mrvilebb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163apgbnolu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bcwoedyu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163cudwnddp.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kxxgwght.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163edfortex.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zcefvngv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163sllgfsos.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163niakekjp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qabuvmir.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163evgvackg.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163mynkkdik.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zhekxwnz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163oooalhlz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tghalftg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pmmztzdx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163vldxtorn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zowyykfp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nabdkqhh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163byurzsjn.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163mqcfumvd.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wjwpkqam.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bubkmttl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ambyjtwk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bbhmtjgj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hyhnkjqr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gcuxtzvr.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ondpmceg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163yzrkvdyr.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xingidij.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ggyiskdw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163spywgiwt.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hhjejbcx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yphcfofs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xceweucr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163izjmcrfe.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163rscxntut.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bvdogeuf.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ghjifkyl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163fckowtki.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kxnmgisn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hsymszbc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163pfljjnme.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zokorhxn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ngojarfu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163psnmcjfi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gdpwnztc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rlolaxkk.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163wjgahoko.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163onagvfdw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163thlmmrlu.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vigujgzx.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ltynyllz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vkgktkqu.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kqiwhijv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163zgebuged.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163tlujjezu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163grpdpvam.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ywicywir.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yggpynav.html


<!-- 参考信息 -->