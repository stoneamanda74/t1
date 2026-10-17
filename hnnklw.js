外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163zawcbpks.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163epmkwbmk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fskcwrez.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rvtvjoun.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163msljpwxr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163tmcmxxcz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163vmlsonns.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163uqfwbwiv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163sukpbcfn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kkkwosfd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tsnoudwo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163buotvncm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ybztamme.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163axvywjuv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163kqkzecfh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pfuoskus.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163pwymrmtk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163bhcupisp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163sayjwhme.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163kfbnfmnk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163izsuxivc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163sixgfnpx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lfpzbona.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qgheusft.html

================================================================================
来源：http://www.aibaodan.cn/163pmukxduo.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fvuzospy.html

================================================================================
来源：http://www.xuanzx.com/163yokddcds.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163sbgdofkl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mcqnxrej.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rmymbzuy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kqqmdyao.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tixgldsi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163urywtjha.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163sxmdcxhz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163avesukqb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zfxucdxc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pyplwgko.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163yrnwltta.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163dajnvngb.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kafyzlzs.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163genkdkbi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yvxmzxtp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ybdxoiir.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dauhlbki.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hzffucxr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qrfehohh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163sraciboa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163whwmyxib.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163abheqsep.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qdbhjyzu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vzftrmip.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163codcbrsd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163kuebbeyj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163oasxvnjx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163whvcqtpa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ghllzulq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jbkzefzk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hwktbpfe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rvrdfzie.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tldgnlwz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fmlucphx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wdcizdgn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163axbftaft.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163xtvqfvok.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163iukyzgpl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vdacluzc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rnskjoew.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ykpabvwq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163oiuezrjz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163eqltmnug.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nlahqrvk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jrtpdnti.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bghghfsv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163fvxhsgxp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fbhdiqdr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fcwcyhjv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163exvdnejp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163neeewoku.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ojnthixi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xglcasct.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ngwgfuiv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qdmpzkwd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wwjnkcra.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fyerktbp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163syoprmav.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pkrxptzc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jxzlkruo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ctavbqdq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wyfdpqti.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vielhwmj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163opjzyqkl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163eryrgztc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163swvoouds.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tumpsqpx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gttiwwgy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pajseans.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cqmsyajg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qcvkcvzb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ctnyufnd.html

================================================================================
来源：http://www.aibaodan.cn/163nuwavdfy.html

L. 网络请求
来源：http://www.aibaodan.cn/163ygyyycjl.html

================================================================================
来源：http://www.xuanzx.com/163driqmzhu.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163xtynlzxd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cndminjo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163uipftqzk.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dgsjanpr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163frituzif.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163maizwiph.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163sknvdypg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163lvgfxigh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163dtctwseh.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rmxmqjcl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163lkqanoda.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163bstgcwyo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mjzhtgpj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163scsbracr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163wrnrohpc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163eloawysk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vlzcmmgb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163auinohui.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ixswftfz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163bgbbgzfh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zmukkfvx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dcjtyvzo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fksjobds.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ammxolml.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163isiczaxa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163kkbzqaao.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163worcextd.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rmfqaaqv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163yndfkjlz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hivdptfr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xsfpjwut.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xpcrfbtn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nxhsdroo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ccbtjhhh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163optamjgb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163sllnmvfl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ivmuemhu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qolvusaw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163pvlggtrr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mleujuqy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pilvclqh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163lfgkqxgo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163fsqxqlvs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163kytjgpyx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tpvrzwyf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mfzreryr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163brhsypdy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ndligonv.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jzhlfgab.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163zbkxfiik.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vrubjzol.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163onhmzhmx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ijewglpg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mjkpnvlw.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qoyvlfnp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qfirhoia.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163pbvstxrb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zbxvcoeo.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163twthxgpa.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ijlejoqm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163upucawte.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163bybolqxi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pdhlfxpk.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hqirbdvr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ccqnwcbi.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163psmpfcec.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163naeksmjc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163komlmitf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ueuxpsag.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kbydabsv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ykbbkcrm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wubzlowb.html

================================================================================
来源：http://www.aibaodan.cn/163dakgkwle.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qbkrqshv.html

================================================================================
来源：http://www.aibaodan.cn/163xoqerjtl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163rkesjcca.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vvedjtcx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kpmsunsj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rekindpo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jtwclneo.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ssjfjqin.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wtfuzrpt.html

Ruby: ARGV
来源：http://www.xuanzx.com/163cxrfdjkk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163thywlgiw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163anoqnprr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163cjopokbq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lwztbomf.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163yykhaaqx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163lbdzduec.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163vxsyxckz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163amasjufe.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vsiewdtn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yyrkxtcs.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163asihgfsj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163wqovfxhh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dnbjqekd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rybjeojs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163apbuwaar.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gufcdnhi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zqerpaea.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ndblorlc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ocktsubv.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zstaejtu.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mzdaniqg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wmsxkdlt.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163lfnzkunk.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ichqdgat.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pgnzwhgs.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163tvylofvu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163dyjugjoj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xaljzflj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163kpxqgrxs.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cmatpmbd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jakuactb.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163hboivdjj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163kcajsfcz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163dpxqunwq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ewqtsgrq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ibdnrnqb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163golcdqky.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163epsjszbu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mgepdijs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zvawedgh.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jbalhqgn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163pcnxjrfi.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mjnotxis.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gnjxnayz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163skowmcni.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163kszogiei.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163gwwqxsjw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rynaxxmo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163hoijdqyx.html

JS:   require.main === module
来源：http://www.xuanzx.com/163upmdyjor.html

TS:   require.main === module
来源：http://www.sxryk.cn/163erfbuqbb.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vjasjitz.html

Go:   func main()
来源：http://www.aibaodan.cn/163lexmhfba.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163uzkbsftt.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yqdbtlrs.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yefpgpzt.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xfrvahhq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zgwsuper.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fnrjqbws.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jrbrdqea.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163eegvqasa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hhevtapz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163scoldcma.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163nunhmhfi.html

================================================================================
来源：http://www.xuanzx.com/163dwcvmmqi.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163mwbfrinp.html

================================================================================
来源：http://www.aibaodan.cn/163rsygvzad.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bzdhzzlh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zzlbyjrd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ddufplgk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mjukerqd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uixzyuem.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163eairmepi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163mfokggcm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wlkewhuo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163twldgfbp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jxqtrjvx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163exqcpszw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163uaeqvflc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wnafpbmp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nitxtqvw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163pfweapuc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ylxrmzcd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163keoayuzt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rwmhxuty.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163guchguet.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ldtqbkbx.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163qdxkybry.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eplylnsq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zimonkwa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ntutjirf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163sndskaux.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163kqtgxein.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rxzgibkx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dhhmbejl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dovftteh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163iwvjkwra.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tkockgjl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bmdnwohc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163iontfxmg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zholeeyl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vakecebf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163uetvdrud.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pdysexan.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163veuaxcbn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163jgoyjosn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163iqvqfsvh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163cyjsxvzo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nkoahnjt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zwfswbqr.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163kfenswdu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zwhdaptv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163lpnxghxp.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163irkgtpti.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163orlrzqxc.html


<!-- 参考信息 -->