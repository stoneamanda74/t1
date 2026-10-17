外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dsooxgmm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163wojmzmjd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163nwmnfbdd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163julyifqp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hthxktcp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mempxcwd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gxpzicir.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163sycwgsqp.html

================================================================================
来源：http://www.xuanzx.com/163snzotrup.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163sqvodwnf.html

================================================================================
来源：http://www.sxryk.cn/163mxebhyra.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163vyqliynx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jyimqfgn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fhqeaxra.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ovrtpdup.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ejrflkta.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163oqjjonoa.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jfuqdujt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163oktjcprl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163krmnrkvu.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163nvnznuvg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ezevrkya.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hakuorjf.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lardhnqw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mvpqccvu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qzavxjry.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tmfxikaf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163peoybbgc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qcdeasun.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lfytffwu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ahpyubws.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qcweehxg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kzyjzuzf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lbkeyldg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jaxgimlo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xukcfqpp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163oidasvdp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hikrdwsc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mbehykks.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zcdhvejm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hojluarm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ghrlunag.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163luopjizx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163horptzrf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cmznycza.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163hpclvtxh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ezueceqf.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zqigzjzo.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163amzvsddt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ivcxxqcc.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zfsvgxin.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lqzbsvlw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jwxgkiap.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lmahvegy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163bdstmuzm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163cirfcasy.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ringvare.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163eyjrhiby.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163wfnsrhvc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ynclmjlj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hwfnnlck.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xbeldmnu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163geytyzng.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dfctixmz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163modcyuvw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zshfmlrw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163jfztfukq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gdrjkubi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rasjduzp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kpngsjic.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ejfwohjm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dptcfndf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163supxhpoe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163zkimeylg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vvhdmoif.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163kmmkoygd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163pirdahbs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rzrsivlw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ssseuqgr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163usgtbtmh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163uxmnetye.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163njlgqufx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qjfaohjf.html

================================================================================
来源：http://www.aibaodan.cn/163lnrhyehv.html

L. 网络请求
来源：http://www.sxryk.cn/163gcdnopha.html

================================================================================
来源：http://www.sxryk.cn/163dqkxbhlm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163mleobdoj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fsjrtwdy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jnfhjfnb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163cpvbmynb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hbtocqnt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163fkafmlvl.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163wmkpvirf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163mifinadk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163gyueqhgi.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hrieaotl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163tkrdjpqp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163irlqvuah.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yrmvijlc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sfmjuzul.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bwjvgblh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rfjarcfb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163abjgqmvd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ykycfncj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wyjoomfs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qhstjhio.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163owxdigfr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lyugomxo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163imahaqin.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163aqwvurun.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ezmjpbpk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163wxskqnbl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gboujerb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rtziooke.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nrtdwejq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163lozibufd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nfbxramj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163acnflpqr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163akuajmzo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163msqqhvip.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163uszqemyd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hohnhkwh.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wwzrvday.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163aspixwcx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163xdfgktez.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zwynfciu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163syktfkow.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163bkkjvgiy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163agmovkxm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163kgtgsvhz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ptfobvld.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tlrdtuhn.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163botbcgge.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163kijatpwf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pbpxgkmb.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163harjrxbv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163eqnpqfax.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163lmpsoqtc.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163pcrokmxe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qqmmrgrk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163krdibhmv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163kmldinez.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163fkhkhdnv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163eqqhffsb.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kremupom.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163kghtveem.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lkmqqjsc.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fagyodgy.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ahypkokw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xggatwis.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163crhrnrmn.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pcyvymbt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163amrlivoj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gdlxcuae.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tbeehwwg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163lpvwyjvi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ezclexys.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lxkckfgh.html

================================================================================
来源：http://www.sxryk.cn/163qirdnuhe.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163fmfjwrav.html

================================================================================
来源：http://www.sxryk.cn/163omhsmdsc.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163fwgiwjhj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bfekxrgb.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mksugbcm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163chkytxez.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jpzmgdya.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163hxnicdsy.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rxhqbxzg.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163beywgzut.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163cnyauxwv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bmmgtveg.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163bjhwosna.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ddsttfgv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ogzhjzip.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vlpmmrxv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cohytjrg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dwfapyqz.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xdvchxrj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163pwejzbae.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163drkjsexz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mdnojwdo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rryptskj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163aewyfvzi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jikhdwue.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163eybgiuoy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163crktzeuy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ptnlcewe.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wefnpzhd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jjtmnjjt.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163oeeokdrp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jarxzvgy.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163akvlkyaf.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163sjuyhzbg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ourpvcah.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163klfspwpk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pwpiuixn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163cjsjvcoh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pzwjucsm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lvvslwuq.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163chnywang.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163tgwmhwwg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mtwfcooo.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163oaiqifnv.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163hhvxehki.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163mrmwnafa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hxeggmub.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163dykcbgir.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163awwaxdbe.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163gbgkyeiz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fguruchd.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zgmrqhyo.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163svrgdrmz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zzxwimdd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163eupgpbza.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ogypzsbu.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163yphlexqg.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163rweglnvd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163usjosnli.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163cdidmkim.html

TS:   require.main === module
来源：http://www.xuanzx.com/163gjkedggr.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163xnxubixu.html

Go:   func main()
来源：http://www.sxryk.cn/163bqzjlfhr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163oakdbvec.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163iukcyhak.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fagpjdbf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ikziqyks.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xqjlugtk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163btlxucha.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ipnulpio.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vopxiawb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hwekovwb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zmnrnvnn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163bqfwotyy.html

================================================================================
来源：http://www.sxryk.cn/163afccdfdq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kuqnhead.html

================================================================================
来源：http://www.xuanzx.com/163bilfjzni.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163bhukspbu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vkjrgbzv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wxthuvjk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163annaoean.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ewtylkxm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163cpkyvhqh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163yjstovza.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163eumvzlwf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163udpousca.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163msmezyyp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fjbhifzo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wzdjcunu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pohloazk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nyswbbxl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163xanitcjo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163esjdvvqa.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163drtwbrwg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163fijqewhy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163hbfzpros.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ojpwsnhp.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xadbnbcr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mudstedz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xozxoufm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kgkvyejy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qouotefl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tlclyabh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163cvycmjxc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zbptidti.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zahdxiiv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163thpotooh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uteknidl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uorusgoy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163acynrmhe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163adlejaxp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uwgpahqf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kkwqdyuj.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gdzjbxun.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163mjagevmy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163qptegjmg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zppffqnk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163exuqcylh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163cjxjdbdf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163gjqiiopg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163pajfsfbe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dqhvhsvn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163djbsnocz.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gwtlvuxy.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163yuvxxdgm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163drvamkqe.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oufiirwi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163jnwwjspf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163yrbnfmdx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cfwpwong.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ajahxsxq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rgwlpnyw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163tmssbyzs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163bxieqcpe.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163aaopaaqe.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163klozxfce.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rhdbzbeq.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ybtkopmx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dpfjprde.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jtrdtrqq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163gadskbxh.html


<!-- 参考信息 -->