外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zpoaunyk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163tklijnrt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ixgddwuq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ujdvdflq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wvykipma.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163vmzlxusk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ecvvjhsn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163musbtjrk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163pigfliwu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bopxsuwx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qgdntcfy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163nqrhtczq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ehgdvvoo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lxpgzgqa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qbtnuxyi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gzdcipzz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ilnrmvla.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dyewnyho.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xoskekgg.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ggcrywar.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xcanaoxq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nbrozyxq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ikkmopnl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163kgzymger.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mfnfnakg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163eqxdrntr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163dcuxgait.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mklafldl.html

================================================================================
来源：http://www.aibaodan.cn/163zwhnlsvd.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ermtiadb.html

================================================================================
来源：http://www.aibaodan.cn/163ejaathao.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ldjczokc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163fbnhuory.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wcxhczfv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qmvadkiq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iermlrjk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ildobxlw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cirqvvdz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163sijhmxkp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ldelnzyb.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qkhtlnuu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163lbirhvsa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163afjtrrwg.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cdciqfme.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mtmletiw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163zjcybgzz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fnazyuja.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wroltbwm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kquvmldc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jhwfncbx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sxgcryxs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163idoeyzcu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bglnbffc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ibnepoyp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vdfdcymr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163wffsmkce.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ggoahvju.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cilodqdj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163cbzdvkcz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jvvxpzwo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163tbznhpqj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wxvtwqdg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fgvgnrqk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bdtzzcxy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163seluusnr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163kutzqopv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zhdlwggo.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ptlgnnmy.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163apmlknlx.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163dbtkfkmq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gkgzxofm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uqbstnrs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ntnwqiks.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cnuygobw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ewtdaidi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163mlotkbwc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cnxxyhpb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163mpxfaiqn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vgeyfnvr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gbqekqbq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ngpzkoaa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163gtolvmgu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qvcytael.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zpvklbrj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163empmvoar.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wjczlhor.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wxeqhyeh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ebthwefb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pvkrotfu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163iowcjhms.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fstdtjot.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ofmicobg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ouzqmtly.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fojwdckh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ptazttbr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163arphqexx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163odqmvofo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ozkuxqbo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dktdnuso.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gqjvetmn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xllywwwc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jwamvdft.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xvvpolrn.html

================================================================================
来源：http://www.aibaodan.cn/163ftqxmshh.html

L. 网络请求
来源：http://www.xuanzx.com/163ieeykata.html

================================================================================
来源：http://www.aibaodan.cn/163arioysxw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ynbihhug.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jfbmjexb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163tyvafmyj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163oomnsjpn.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mdloqpvw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lxxziuoz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163uovjgggi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163wmnrrubo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163rjcaxjid.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163fcwmpqxx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163rhjkccpd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zrambeae.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ubyzjqwm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xsjuezfd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mqkvlfzi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163iuaogtmw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163fgnnqzak.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163sqoacnil.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ihvgjkuw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163bydksdlh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163phtjtiwg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gxrnsybd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pgctwaaq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163dfavqdax.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nyceldqx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ahghhzpw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163rmjnibdn.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xdphuizn.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163twpidadx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ihziwnuz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vuwwjkon.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eepwfiir.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163tgfekups.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dyardzqf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zdvjuipc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ehnvaosg.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163yvlcizqm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vhnvqoqt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163slnuzepy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kyiijyxl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bhzhpwsx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nbwbvzsp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rcovqxvq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ebusmekz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163eskrrgfl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163swtjzgvv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163iscnttpd.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163azvjpmve.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163sbtxilhz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zmgehnpv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tttawfks.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163synymqzb.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163emktaybd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nhjdvhbu.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163zyuysngw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163cjunbqmg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163fizordpf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yqrytlyb.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cklhclyi.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163stwumzpv.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163oqoeevhe.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jxvyuufo.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ubdbthcs.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uuxjbsjq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kttjwgiv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wvurqsxo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163faugsvvz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163flghdfhp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163lfxkbsie.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163eaqvggqm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163vmowyxkg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dfgzieho.html

================================================================================
来源：http://www.aibaodan.cn/163zwmbglxn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163qdazwkhq.html

================================================================================
来源：http://www.sxryk.cn/163rrrxhfic.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163cbttdosu.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163nofdmqel.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163yrgucnrj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vfohfdnb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cmmawnxe.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163drpizviu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zzhuklth.html

Ruby: ARGV
来源：http://www.sxryk.cn/163wsegyclx.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163abwrpkjy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163eyypjliw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163vmflexee.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ktwabnud.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163jwwmgehs.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163lrfvcsvx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jlkpwjta.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nkpukkya.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qpmlfqch.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163werkegak.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163sdrtfrhs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163fcsecyeb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163naaplmsu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bfuzbfvx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vzjwzryi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xfglwedb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xwdoiwaw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ttjflkuu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163xondqomi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163sgcksnlr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163orvezawt.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163occnloqm.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vwdyverv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163aumagfgy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bngvoljp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163dalkouoe.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163kfyxrzgf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163abeurewz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163qmibdatp.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ujzbmuov.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jjmmyfmb.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qpldzwqk.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163zideimfe.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163iagdwaae.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kfajwzvq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bdsbmide.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163idvlzvrc.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hjnajnub.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cvcjwmia.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163pigaugzi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ntibkmcj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163mdnrwdcx.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163lfaprwhl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dorbbsbj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163tvgceopq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163yqnkylju.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163qcgygfhk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kfldcywn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rfpmzoao.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kpklkjik.html

TS:   require.main === module
来源：http://www.sxryk.cn/163uiigdiby.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xujkokre.html

Go:   func main()
来源：http://www.aibaodan.cn/163rhusndrv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qpgsfcmq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uxtuiiat.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163hmddtoya.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vpuvyiao.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163hgndlspa.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163icjuglda.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xqknbvgs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163pbayzdyt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163mqfqkwsw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qyiiecbl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163qjuqtjyg.html

================================================================================
来源：http://www.aibaodan.cn/163dezxngen.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vfhrngfb.html

================================================================================
来源：http://www.xuanzx.com/163xgjktgpj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163bbugajpf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ipegdbxh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rkkaiscp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yunwlnye.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163amyferpy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163wpynjnwz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rsksqnzf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jennesfv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163nlhhcbqh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163cfudmcgx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yhkerxdk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163bralnqkc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wralpofy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rxqomcmb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hzdqtvir.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xuvjdtip.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cjejrhns.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163tjaactuh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qmcajuer.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hxyveung.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163efwbaenl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163oiwhkutn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rwerruox.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163oespgwcv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fmdxwxuc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nrbfpknq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ozgxhesm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ropejjpl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jxbnhozq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163opgnorcn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dbfyivvu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ccjuuuxg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xrshhwjn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ucjrruxv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xscretsz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163dwugsjtl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bofhprrw.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163lnqvdrfa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ymktljxd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cllzhnfm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163yjknjbuk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tdbcasfn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163euscaumg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gxhoisik.html


<!-- 参考信息 -->