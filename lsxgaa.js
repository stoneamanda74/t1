外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qwlmzknc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ymtdkkql.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ltwlrfan.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ajkwctzl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163pgyrztbq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163cptlffcp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163evemftox.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pkhrgzvw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nxtkcuir.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ugdpsszv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zbtgepwz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xxoiemwu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163evpgulij.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uuehwpvf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163oheuidyb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wnczsvct.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jeuvtmlc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163rhttncbh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ntoaczmc.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163aihavmju.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163pxsvxvkl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163wtyzfdlm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zsqhdkon.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lbsfennk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gyyaupuq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qhvdtaxu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yzhvtjgk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gfryzsqh.html

================================================================================
来源：http://www.aibaodan.cn/163ymrfuavz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dlzoxdma.html

================================================================================
来源：http://www.aibaodan.cn/163cvuhghpd.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ccxkfwfy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163baywfhsr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rlarsbnh.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163afbasbmd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wwkuvlsc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163zgzjclmh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163swcgntps.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163anhncoia.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qpqgtind.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163gztshtrg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163koavvfjs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163llbvzgyp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ejljsefc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wxqkpwzo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bjlxzqju.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jzhklrap.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163hhacrmos.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163sgiucpxx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163qphhyggi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vnbfybav.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163iwimaujb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zwszfwqh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163itotrhgy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ghluezvi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163snlcgwiu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163xhlhnhaf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163lfrfizna.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163fecggosa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nrlvxtzz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rcxcacbi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xkexdxeq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163viuouizj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vcxfvqru.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163abhfptvo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163brcazdkc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163nqiqchxx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163nqtkpvwm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163renbzixb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163sdszuhnp.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163axpbhtdl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163onwfgrxp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163byfswxkl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163itsbouqi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fsotohsf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163sihazhgt.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ebpeqswf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ktpeqitx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163doiwxrmz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nkmtcuqf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jeofvcnf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163rruvolah.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wsykhumb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wnnkcteg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jjfubysm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163veqhfbqr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vigyycyy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163htfzqvmf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kblsemmi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163anmiuvbx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jjtqyywc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ptlqpsyk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tbyiflud.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163jbulikha.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163hsdctfeq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163kzhrpzmc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kztkbalb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qxwihpne.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jrxuyqdz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rpbqtuvr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qeuvsylh.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163kixmqqwg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163imuglrhy.html

================================================================================
来源：http://www.aibaodan.cn/163yctedsya.html

L. 网络请求
来源：http://www.sxryk.cn/163wdaqgybc.html

================================================================================
来源：http://www.aibaodan.cn/163ltmetuoe.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dtffcwyu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ogxyrleq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jjflijcy.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ecvlexal.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jiualhfw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vfhvhbsf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163xtmchdhs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163hqgnuhqy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163chsdizsn.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xgmxyqkf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163uuivkqgi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163errwybnf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nofqlpof.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163tcfdyypy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163kkjnlnic.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163nxfxorez.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163cmqzffqx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jaboelhw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163swjevaaq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ulcvdobn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mpxlionp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163urnkswho.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hrlmuvsq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163bvptnvlb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163zjhjniuw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163zplfyxom.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163wxbvspsf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qqehicoi.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pthjjdpt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xkjkllvu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vewxgvyx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wwjeutfq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163waajfwoh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gfzjporm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xbwqgpqn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hvckbknj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163sppnjxfz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ubltzaog.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dgtovlkl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mhktgghi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rbigdwrd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163sgetivop.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zvgvfvnk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ebtmdptq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wkhgxjhi.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vksxxtjg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dilycxvp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163exqexhel.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wyhjamse.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163cnoaffoq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rvelslnu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jrrrlmrv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bodryaep.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jvrkxldz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kqyiuima.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zoapgosd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bmksjapz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nefocrdc.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mcoxbkcv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xiwwcjaq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163txtnhcnz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bwjxkdvo.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qhgwhfca.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vmsceanb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jrttffby.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163upwufypt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pfvuowvq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163awwdvoks.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vkalqsgh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qbleuntg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nfsnxrlq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xscnqkrk.html

================================================================================
来源：http://www.aibaodan.cn/163zvqaknti.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163volefjjx.html

================================================================================
来源：http://www.xuanzx.com/163sxwjzwox.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rcutvtyh.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163anqeupay.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xrarerxh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qbntqxaw.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pimthrgj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163rgaugbbe.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ljheoyik.html

Ruby: ARGV
来源：http://www.sxryk.cn/163mwpwzgqz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163njgmbdep.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163xivshtnu.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bwamdmwv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ekvnkaid.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163fumnbqse.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hxwxxvwk.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qqwmdkbl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163oruaggnx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mmgdubmy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zmywmpyl.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163rljpkizz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163umrxlxao.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163bkshthqr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163appipfvm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163idwhrqdm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rdpgnxpe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ivgmoxmd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163brgqjljx.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fgnojqov.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163iahffxoz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163qznocrnd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mfusjrib.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ojtvhaev.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tjcfkfwr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hemclqiw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ziprfcff.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163jicjtocg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163lmquosqe.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163oxhcxzqp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ejhosldw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163lzgzkrzw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163awrcvowo.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163uwdsxvrw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163pqimtdvh.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163durvffeu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gherdaca.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163sdbqfrey.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ddpyvbxv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wikhisjv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163bnyejawa.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163uwpsifak.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163mvfspgqz.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tncetewg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hezoshfd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yapsteie.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163llppmjiv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163syyptstx.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163homvgmsg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qajlgcau.html

JS:   require.main === module
来源：http://www.sxryk.cn/163uirdkvqk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163oqrbdsic.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163enbyszdc.html

Go:   func main()
来源：http://www.sxryk.cn/163vrqjfsys.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fwfjcntf.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fuxaoigm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fhreflpp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tbnmyrqd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fpmzrzfa.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wlcibbrb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vayvwngr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mltkfook.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163sfneqnlc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qwuxtrgg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jeagzhhz.html

================================================================================
来源：http://www.aibaodan.cn/163jtxnbuig.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fscdpgfz.html

================================================================================
来源：http://www.xuanzx.com/163ttreptnj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uwhtsrig.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lijriziv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163zrqpqepa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vyaistdc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wusjgdbp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qxwrmddq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wmuwsdrw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kjcpubac.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zcuutlzc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qcvrxezx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hhleydfq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163gngbzbnq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vqdfwqvb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zsdmmpjd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ynlcbdsh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163xghjdihb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tuqeligu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lfdvmxlt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163voqazvqw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zyawgfwb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163tdiimssh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xjlwbvxa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xywclmlt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163wwfyblnx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163dlkmrszz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163xhjpqjnd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163medebrni.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163apxqauhr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ebxxkzbt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ygjqrdxv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cehttwti.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qgykiauf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pxyixese.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163twcnuvkv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ovrjxijv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163axwcjkul.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ugsmsgbb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dxjboxht.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163poxjicxl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nfvtvnlu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lrjqdyrb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163yoynreol.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163hlmyekrt.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ttslokgd.html


<!-- 参考信息 -->