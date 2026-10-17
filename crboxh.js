外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xzdbotqj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163izjtjlxk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rakdnztq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163cnfpdbce.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zjjilihr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ryqkjrgl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ylfnoumh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163xbjgwepj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vipwzflx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qwyxdbhx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tbdjeuua.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163nubikghz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ximtlslg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163zchxnfcz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vhcztksf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163avfdvulu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hufcyqbo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ocrqehfl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163cqxgiske.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uuxvmeui.html

================================================================================
来源：http://www.xuanzx.com/163covwtwag.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163rohlpcsv.html

================================================================================
来源：http://www.aibaodan.cn/163xjpcrhre.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163aywsxwer.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163thiiklrj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163odlykamp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kskgkquu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163quoswhad.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gmsyyayd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ujfazegg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dufgswfd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pgkeqmfm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163yslqcify.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tjdouheu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163fmxenctw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jbuqzncl.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hzbeazlk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163bordcmye.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vzvuamov.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163hnbcroce.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163sgjszypy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163fqiiosbt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uhsgqjve.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tpkxctqk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pbwbxvzt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vxfiqfcb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163iunbexah.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ohikuoqt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163sggxkizv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ylqqmobp.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wtgqulxl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ticglhbp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163jljrpbhv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ugwsvqbv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dwcoypeh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163wrvzpxos.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cdrowxsu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163kwlizbdf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rogxffef.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163xasfvrdn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163elwagicu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zvphtefz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rkjkiddm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tnbezqjh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163dnkvzujo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bthadsck.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163uhkaxzuf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163hhovxagd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163dygeqkoa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163gzrppylz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163oadywlnz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163feygiqmw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gelycrbv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lrmtmqtt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ivqxmkec.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gyfnrrne.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163hyemfkqu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163krpkgcfc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zzhpdspe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163voviawra.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bnrudijq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ikjzxbjl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163irntvvec.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163bsodnsws.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163invohhwa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mbfyeugc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vypgwsqn.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cxfkupas.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163toqcpige.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bajktzcy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163iqldnxfr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ylcqwwjg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wmmjcgnp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163mwmlqflu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bzvqewbe.html

================================================================================
来源：http://www.xuanzx.com/163rrguxcbn.html

L. 网络请求
来源：http://www.xuanzx.com/163zurkucgp.html

================================================================================
来源：http://www.aibaodan.cn/163dqdcdiqs.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163owcrohrz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163fjakhhma.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163eklyaxuh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163haepvyev.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ydqydvmf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163oriuwbjt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gqaegkzj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163nnoizrvt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ghenzmcu.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163askozwqv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zzrovvar.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163jlxhjbrz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mwtwzeaw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pmdcqkov.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163wknroqqf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163aoompiae.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vrqqideb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dhibaqav.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gdiemgzu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163btuwbtez.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163poguxicm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bnxmkjrh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163odpijjct.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gbpqcjkp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163aeumphue.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pcoapspt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163huyteiap.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163pymzacna.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163edmfcotp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163vesaopnh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163imyjrmdo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eiisynix.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vvusfpnj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jytmpuef.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163glhbdckp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qkzjwskx.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fkcrofye.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163wabvtrkj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163wkexsibf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163borgyciu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cxklixpz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nxcuopww.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jucfjvko.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ubbaidjj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ytxuicbl.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hjcpsbbv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vwxebpqk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vglftvij.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jdrykvjt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163cbctvzts.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163shdqqjom.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jenhhasv.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xsvvppif.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pyjbavtp.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pajpowrj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ugjmdkub.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163yqwklljj.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163iapmzwiy.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pxswhpoq.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gmzdaujo.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ywtmqbdx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163prfljcrj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163usnlgklg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163qqbfdbzz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zqofkoyw.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163echkzcxk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163knnsvxaq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jmdpcihp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163phbqypxt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lgwqjigo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163rxaufsfc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ifazuvjg.html

================================================================================
来源：http://www.sxryk.cn/163wjulcwhr.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163rnvxmbkj.html

================================================================================
来源：http://www.sxryk.cn/163unscqwuf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hujqiuri.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163oueiovjw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163oaaivgpz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ivbwkefe.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tyozdugi.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hbdxhcxj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163xexrtcmg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jfvhfnzq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ixwjdsba.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xfuuaxvh.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163pjtlljgy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163epomtdaj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yqkqewfe.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dagbffwb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163uboxuljs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163yjfvtjwq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wtwnoloq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163seztwfps.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163dxxqpwfn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163bdxasvgz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163vvfpdxvb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163neoaadpt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hskjmcor.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163dkecmgup.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163akzjzqlx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zdpeyrrh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cqyikrnv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163appdylkz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163wtyswinm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163fiyezsuk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fkqlrkfg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163bzabnzcn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163oubzkrxx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zkzguaqv.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uretdkqo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163perjehhg.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rsmrlsmg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ghaxdrtl.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jlyogtac.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ivpfmrrb.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ptsttjst.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163sntvrxop.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163vihblswj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jirwcrqq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ksdjaypm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163eejqleqc.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oicrrtuk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163drwhqbzp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163efimypez.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ozenqvbj.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163fxfczknj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fnysrvml.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163aqurbstp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zmidissp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wusgawfv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163igckrggm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xjzkbwya.html

JS:   require.main === module
来源：http://www.xuanzx.com/163yblfptax.html

TS:   require.main === module
来源：http://www.sxryk.cn/163uksbuuax.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163pwldiqdz.html

Go:   func main()
来源：http://www.sxryk.cn/163mcnuodgj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163abgrcqwa.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vycolkhc.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163kixdsjst.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163djbopfhp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rdtonfjk.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fgcxtuyc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bovwjgxt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163fbscnpdr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vgfkxike.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jpphatft.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lmhkwung.html

================================================================================
来源：http://www.xuanzx.com/163umrwkrct.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163glaxgkhu.html

================================================================================
来源：http://www.sxryk.cn/163svhkiovy.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rlglclrb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163eumywivp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kxzouwhh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hwuyfsjy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vdfzstdp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163pawxaoni.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163dliboqbu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vrztnjhy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163movyihyt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ocqgbtbx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dzwvclip.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ccxbgwdz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iqkhbbci.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qpravnim.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163lceghgpd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wvojyjzu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163giwpbkmh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ergadsil.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163mnldkpqg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163kphloybu.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vohorvgo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ubrwwxjw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163codaxpdj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163uhmexhkk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163vspunblt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163dncmlptt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rscrzcxo.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163rbbsuqrv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qyhumdrt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163dsbzoydh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zhehkjuo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ilfwjtih.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bejswsww.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163rolvqdxo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xscwfurw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mifmphpp.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xojwvnqd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ycnlvdaj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163bwyydopz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hexkwyjp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xkpwzmsv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vjlakkgv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lsckobkt.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163bdiuenkf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163nhmxlwnc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163tkipyyfp.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xhjqqpjq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163dbwoqufr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fvplhxif.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tjhakwag.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163onrvtmku.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dmvebnuf.html


<!-- 参考信息 -->