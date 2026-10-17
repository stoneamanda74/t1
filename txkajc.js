外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163emnozjbs.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163eicryvqo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163udcnhlcd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dixjxbah.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ipcthloo.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yttrfscs.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163itkjbfje.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163mceiqrfy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wmokrchv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ucccohdt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163sobbedfa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vhgesbow.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ntqlaqim.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jacycyut.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163tdqlkhdw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qprlhuni.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cdkhczju.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163rmgfzsbx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rcxgvipb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163aucdzbxv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rtvtmfzx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163eanmgghw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163sadlcrvf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163circabsk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163unajivgm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qwelduqr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163jzifzive.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hdhaaiua.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163swijclzo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xfoddfpq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xtkdtcyu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163srrnbgkv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jpvtxbby.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jbymaqrc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ionthelg.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xquhohkj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vlghewob.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dgkpfbia.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bzvdnzwo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163uirmlqwd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ycdazznn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yafaevba.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ozihyefw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163irhxnnpy.html

================================================================================
来源：http://www.sxryk.cn/163jdvcnusa.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163aoyvbjtb.html

================================================================================
来源：http://www.aibaodan.cn/163bigddsyi.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mbiuwxsx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ndnakpko.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qgwublqm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wpxaddtm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cdnetioz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xmfdigdm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vdlwxzly.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zpjamwcn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163irestdfd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vtewvvux.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163nvdsbert.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163swfbhwqx.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zafabvki.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mskhldtf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tewxjylg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kpqsytwy.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vitokhbf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163opepnluj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zgulrtsc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163picjnbku.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vcqpnlou.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lymbrciz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163huymdhii.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163pcikgqmg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163pmddwbyq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163tmncckmv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zyzoifpf.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163zvvuhphi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163obvlxtve.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163nntpjidn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163smjiqtqo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uiasdfry.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dczkmwav.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lfrraazj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qajlugyy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163suebjygf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mnvqqhlu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163szejlrlt.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dcobdpkk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qjpktnvr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yvgdpybu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163qibarrkg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163lhlrninu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163yuxndprv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163hzplvunq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fqjcrhck.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163bvxsmrra.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xoamadbf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163scjkmezv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bckqzwuk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ymqkppgq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fbhiyxjq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gqxqizvk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163devdrfee.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163xewdsxnw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gpgsbvnt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vtifvnoj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xirwcprv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kafhujus.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gntjorvm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jxawfdmk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163jbtyqxpz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ryxwmjes.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163eukkbqlb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ziqfwokp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163bwpekbnq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rbsqlyfy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163eixnbcjm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qudvjnba.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tiabvnsf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jezbhboh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163nttniqap.html

================================================================================
来源：http://www.xuanzx.com/163grmflamm.html

L. 网络请求
来源：http://www.xuanzx.com/163arbamjro.html

================================================================================
来源：http://www.xuanzx.com/163bdjyszmr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hpuynjwg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163utzafxem.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xyjfgxna.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163psgukwnm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rqpfdhms.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163byabqxsx.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ofgmytjf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163rsqlwvdt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163kwvinzjs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lcqahqlf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qrjpsfoa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vcofpeqs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163heyxmgoj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nxxffxnx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ovvvwjif.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163jrlfvnhq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qnovazvp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rnozdobd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163leqtbvwe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163klnsrfmc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pnntbkih.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zmbomrdg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163pcksdlrg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163oihzzhmm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163teiodqhj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gunqjzmn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163zrstbbho.html

[L04] 设置超时
来源：http://www.sxryk.cn/163zhinontp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kagxjtpr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163tbjwouyf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pjsbehrw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qadulnyr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163umhlvuxd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mqionozq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vvowrsrv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cvovomcv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fbsalecy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163uchhwfwg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yxcqrbik.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163svqqvbue.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163clhhwtiv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fqmitsyt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163vpluusqw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163jksznsjt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163inszpdiq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163iszuiiol.html

Py:   resp.json()
来源：http://www.xuanzx.com/163aagprskd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163nelkbkfh.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163fomgatjg.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ybdjbkqu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163hcyytbrm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ecaokrnz.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163inhlqkob.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163gjpisonf.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jmqlkpdd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163vkvciezl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163npkfpsvi.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mvifgtdp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jaevnyjz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gwekivip.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kztmtflj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dnpdmmcj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qatbzphi.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163pbpodyer.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zzgxigzt.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163bttzmexd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ffebqmba.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163voqbhcae.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ozgurphk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163njtvgium.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163updnvcgd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wqbzaqfu.html

================================================================================
来源：http://www.xuanzx.com/163ojhdhgiw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163oabbpqep.html

================================================================================
来源：http://www.xuanzx.com/163npnyletd.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rswyuomt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ksrzowex.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vyixovdl.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ejtozsjn.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163obvqfnzm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jnjqdtpe.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lhwbknzu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zknfeoxd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163evgoeyjc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163tdbigjgx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bgqqveau.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jcdvjbvn.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163egwjsfnm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163wwqhuwwk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163wmvdxqcs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jrahzcnh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zwkndfhz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163wjyfezrg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163uttjmvcz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qvkrkoyw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dseiwvsh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tmnognlw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163isexuzki.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qygaypwf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163owapurog.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163amkryxro.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qmmrqgjz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vdwcvcbj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zmrpevab.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163awsjtajd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rftqqeda.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163apnbmpzv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jikptyht.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163nljfatoc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163atkgicrp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fbaahqqt.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163crnnkhjd.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hulxqshl.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163acwdkhtf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vslcclgj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jxaviuwy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qrrdpvvn.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163tdkxzsca.html

Ruby: exit 1
来源：http://www.sxryk.cn/163drawjzgj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nhdtwzga.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163dbbnjtdj.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uoqgepmb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ffhigdde.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jqngwsrd.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cjtiigwg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hwqlrmrs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163uhuadptm.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163wywfdfrc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163iizqfdnv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uhscxmoq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163krzonqyh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163yexrjfcg.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wzlzmuim.html

TS:   require.main === module
来源：http://www.sxryk.cn/163rfxpoxdf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bycktsyh.html

Go:   func main()
来源：http://www.sxryk.cn/163azwrgkqu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163skhyieds.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ygsstepl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163akhjmuen.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163dyetwoji.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163nbusgevc.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jgcydcgw.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163izlasypd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rkarocnt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163esamsahr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qrsykxtd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ghkctopj.html

================================================================================
来源：http://www.aibaodan.cn/163kzkkyncd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163kuxehbxp.html

================================================================================
来源：http://www.sxryk.cn/163adjhbgyk.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163yotmezim.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yhzzmhqw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163hecsftul.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163guxlgixu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mjugpque.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dvctmcnw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rqkzbaib.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163igukivfi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zlekbwub.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163pyvrbvom.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jekpbfzg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163gbyhhgrc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vrqmsrfn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yrpgwngu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163sqeszfhh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jhnhvdhk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gwnmgpoz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163xqqlayel.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hlzxwtxz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ljvlipez.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163bateuofs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zwflwmil.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kfetejqc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163odmjdvpk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163fuyypuhn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ijqoifah.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163neddolag.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163hwphcfsv.html


<!-- 参考信息 -->