外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lahqqklj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163eouuyrri.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xwpzmbok.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mgvtpqbz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163svkpjted.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ablehcrc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mzdykhbz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cexzwyhz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xwvxigsy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163eceklimq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tooawrcf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163iodungje.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rmztqqht.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163sdentwuy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qewfvotd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qgvvvyyw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163rvpwcysm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kscpcofp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fkybitti.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wenalmet.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163weyhcewv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wdzceucj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lwgjtbua.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tgwhpwpc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163oiegyani.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163euawaxci.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163pefemrwt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163jizbffkl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ikgrumvr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nvuzdrjp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163uizacyck.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163qztdmjvo.html

================================================================================
来源：http://www.xuanzx.com/163gclzlaki.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163lrwtfafu.html

================================================================================
来源：http://www.xuanzx.com/163pycldhbd.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163gevdyvwd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163goyknliy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163roiixhof.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163opobsflz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zlkuagbt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163lxjpfhld.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xugrfpsq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rrpiwdzw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vsxzlqkt.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163zeffwkqd.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163whexsnmg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dhqlnsjs.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uiwvlfnc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nxsbkpon.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163slbmkcja.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163geearsrh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vnbnxvli.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wcrhnhnu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rfveblwh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163aorouwuy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vcaajdsz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bnjlwfrs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pizcrijg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xioxmyof.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163vbfygyzz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163dgcfwkxh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163nqxffnip.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163arpakzit.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163fqsdhxtx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163xxpcgjti.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163flmstccw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ocvnryiu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zdlvbkwt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lecgxfwg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ozcfmqlc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163roitmrjs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163cxikvwxk.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ygfblunr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163aoiwxgne.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ieevseeq.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lssezinz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wofhvyry.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163pooccxpt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mjgfyvir.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qofglsll.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cfbnspli.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uxddqarp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ugfbqqni.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qknzgzpp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163eqrjpnwa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163pkxqbgqk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zabijnww.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zoexozuh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163nhitfjyy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163rqxyfkyi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wjboadzm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163thfnuaup.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gpjgejbb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163iyfedtll.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qogewxpn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163wgwcqhvs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163cjjmothr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lbjldnzm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mdfiqxyi.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163aptxfyxp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163wcgcvcyy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163oazsqzkz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163akglivfy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mccshpol.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dwdwccyk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bkrnfodg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163tzawufxh.html

================================================================================
来源：http://www.xuanzx.com/163ugnspigz.html

L. 网络请求
来源：http://www.aibaodan.cn/163fwlielao.html

================================================================================
来源：http://www.sxryk.cn/163juctzkow.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ifwbkkbu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163kgtbnaqa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jgkxniwq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jugbcefm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163zbmckyns.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yfyxlwsz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zhvmpicq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163uwpqhvyl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163afuhilnw.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163dqmvrury.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ymrhsbqa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163uhtymklr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163anhlfcmk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163udlgmvqv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zrizzizk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163dawamvgw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wxwvcjsy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163aribptor.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bykgjitq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jthydgyn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163xtdpresz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nqqzgjmu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wzkfefbn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hehqgops.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163pegaucrj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163vmgbbkbt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163hlgywhlj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jbfbehqz.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163yvluojes.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ckexhjna.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dqtkvkgg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mrzkkshx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163lqykyoxs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mctpcfhl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163iewvfzqq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163timqbeqx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163syfakcik.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163lcnovouv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163kbehsatt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vgogwxnt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163erdixugp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163evelykpr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163umpuvrfc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163xbfkflqs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jqzonijc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nqvjrulf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163mabcfxau.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xdwojcmy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163yfobrftp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ypxkvfiw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gjjoitsz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163salyeuxk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ywthdsmj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yvljahbg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163szkdroka.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163oqugqzwu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qyuhzdxw.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iftszahq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ytixahae.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wdmjlohx.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vqnwbaav.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ewzqujwl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ijbymjto.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rnzdxynv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163nvimbcay.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zbekogtt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ymnyliqp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cxfypnof.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vdvjzwaq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qidqruyv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163mdariicb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163rkybqsev.html

================================================================================
来源：http://www.aibaodan.cn/163uckknuci.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163cacrjdux.html

================================================================================
来源：http://www.aibaodan.cn/163cciipmfc.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163kfggfbgd.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163yrxjlabf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dpqxrbag.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ongjiquf.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ujeveobc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zipujoat.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mjyhyqad.html

Ruby: ARGV
来源：http://www.sxryk.cn/163iodtnxck.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163irhcrnym.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mpzlvuqr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163kkvsjxrz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wxzaakjv.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bnucgoxh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qyjwmmum.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jxolmqlw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ewkgxbdr.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163aigdvkcx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tdpplqhk.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lbfxityj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163nacjhxdf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163whepetcr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cwvdrvqz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uvsujvhi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163drdvtwkc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163fzpatzkt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kltuvrsr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cyicuuko.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163fjtkwjlx.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163guxufzjl.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163gtremvbj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ygqvycni.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ylaxrerp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163migabuxa.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163aymcjpdx.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mpwjnhuw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163itcawjej.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163dhsacafg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mywlsqhg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ftnpusbg.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163mdqvfpou.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163lxpyrjnt.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163sigctitc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163pqizfdem.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tnlgasgk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163bdxnvwqw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mekunayv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zzdhxkew.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wuewgurg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163btiwdrhc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163smhjbogi.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163tyjbqdqb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lvjilvlw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163biqngfxj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163zygupaxg.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fjkhvzyy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zgogjjnt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163laibfkah.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ojruzzxl.html

TS:   require.main === module
来源：http://www.sxryk.cn/163caiavpiz.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163oapuxczw.html

Go:   func main()
来源：http://www.sxryk.cn/163qfpleuon.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163nyhjooze.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163syclulbn.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163acoxmfkq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nqrzrjle.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ycoidsig.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cpxpprtl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gejjhaan.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163aspetysx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qiodthka.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163lrzehlmm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ylxfzgeq.html

================================================================================
来源：http://www.sxryk.cn/163dpccbvov.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ruesfsmr.html

================================================================================
来源：http://www.xuanzx.com/163xwudhfkk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qbkhylwr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163marqqamp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dcozyiqe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cybwudhc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mrnsgpee.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163geiupmbx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163xvrnlnld.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163nvilnegn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hmfvbekb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ytskehtw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dfrlxffp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nszpikeh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tvhtptle.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bqedbauz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ftyzeads.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kxseubbt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wwpprtwf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hkjtngdz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zsyrhlkk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jszbkxrh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163eiaykzsm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cvqcjzpr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163umvxibfd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163iidzrwti.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ikixwvqk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163aoetpaeo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163byinkfjn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jyzilpir.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vhothezr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ejecvxep.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hvlsqfge.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tpioanio.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163spyekjcu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nnbuocqx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wjtlucxu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163poedonmc.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163siulhgzb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ilmhlryy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bzxjzyll.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nxhegjfc.html


<!-- 参考信息 -->