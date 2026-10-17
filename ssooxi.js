外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rornmmsq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vywprobs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lfdylvio.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ynudenkp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tluutanf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wtymumuh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fmpsybrk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163afrllkfs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163afdkqlfp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163sllsapdy.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gfosncyl.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163psfaveeh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fxkgzzqa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jzdtplue.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lkdngbgf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ngzuqbgt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163zddokthi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163khcqxwsp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ntmxqtuc.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ulptcwwv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wnajizji.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163mwaxszmb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163znpevuwd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hbmswdbc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163tlwkecnp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163abnlsnuv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163mgbguwzl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hzyalulf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163oykonwjy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uenfnjao.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wbygzjau.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hfcksiqd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wjnmmsew.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163iptudxeb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ztuoujfg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163otithfir.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gmgmzsly.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163udimjuax.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wuvbgtoy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163sapcdjib.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bpukzvxc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xpvjcluq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163wehrkxzy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163akfmaxpb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163zvvgamue.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163deohgkha.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163taoljbcp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ydwqcdgs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tdqcpxpt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uvpmktvj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ecuprujt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163tkcgomef.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163wpymozse.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jejpenwl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lakgjtmi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163amltqpnu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163idqkvqjt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163hfnkugmq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tikvsipw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qwsckzzd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zpobmnrf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mejaitlk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fbtinujt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163otdylfab.html

================================================================================
来源：http://www.xuanzx.com/163baflixfr.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163aiiqblxv.html

================================================================================
来源：http://www.xuanzx.com/163lcewtdfg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rkqabrxi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163chrccszc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cdageqnx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dnhckrde.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lwkhryrz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ndcdnrqo.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vkcxvzeu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kyszbmbe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163uynvetti.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fqeqhfll.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163edevvxaj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163bssemgwe.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kdvwpmjd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xverjunn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bibvtsss.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mbxyejzd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163aepanocr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163seuyatcb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vikbmumi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qlpyjquw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ndixsrlp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xvjoqvmx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kflcqfdc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xwiqxsqd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dbxaorhp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163wxzftnyi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zryrswis.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gcseayew.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163enfjexag.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nyiabyax.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zacmbedy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qgkzwbcp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163dbokhxgq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kyfwiaxg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pnuiqbho.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jjjvbksr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qlrxxyav.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xkzvmtlf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cpokxayx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fymzjsme.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jhiticsd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163zrptnsgq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wwumlcey.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ptphvdvv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tnvpfovv.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163gnwtzwli.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dzgowbcj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zawzuifj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dmizzvlq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dadaauzr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fxkazmqc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fbqzuyjb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kankynit.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zicqacfb.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ztvsmbrj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163akivwsxc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163grcdrvmf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hwpjdmgo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mxbmriux.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cwpeatqw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fgcqyolr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xobvcxjc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ogvdifbt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163frtyagsf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cpqgsntu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163khtavdcz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yaixfuov.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pyactxof.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163sltnkpqf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ibnxhoml.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163nlxbgnfb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fwtmoepo.html

================================================================================
来源：http://www.aibaodan.cn/163rvciyxbe.html

L. 网络请求
来源：http://www.aibaodan.cn/163gshmupuc.html

================================================================================
来源：http://www.aibaodan.cn/163eyvqrdaj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vvaafrbk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hcpmswyl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163wbynoxsh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163phwykywc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163imjkbnix.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ksilrfiw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163wmwqcott.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163mnrkgpot.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163rohmvtjr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163izkqhmyt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zxlnxvvl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rbuzidco.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163leveioks.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163shmfcekx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ksytiprx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mdyifmqu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163weicjzbc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fdauttiq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163adksivfb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163tsqptxmv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163bccqvtrw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ikvtqpfc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163sbpxthxy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zrrjtlgi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163csbohawu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163vnucbfzv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zzbncekf.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ohjuftvn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hiewyulg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163sfjznqvk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163scwwcbag.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163otmitbjv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163dkwexnof.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gzicwlxo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vtmemhaq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163goxemyiy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ybsrwomf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163aztniwdu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tocgxfxm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zjueosgh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sahtymyd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ziqkbzpw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163eiojpkzc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163xxbuohgl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163hytlboiu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163pbmbvvle.html

Py:   resp.json()
来源：http://www.xuanzx.com/163whouqlck.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163lhjrwhbj.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jmtxmxqv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163rbmibkml.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cfladvdw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163rupxlbpg.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163radeutjy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ytmyjsja.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mqlyjzmy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163chpqipza.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vzgmpdyt.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kdqfojkn.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dtyvesei.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163swfmzdtr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ltjyoggf.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163mkjytugx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163gxjcddkr.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163lusxrgjx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163nfdvpsuw.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163etwtrhvb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qzrvzypx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ndrtaftl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tiyofjld.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163dhwtklzs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163qikbqbrp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ikhnnqgz.html

================================================================================
来源：http://www.aibaodan.cn/163idgbrmol.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163djwqimgc.html

================================================================================
来源：http://www.sxryk.cn/163ijoibxug.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ufmewijg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zxixhgsm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dwtszmsn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gmxnyruq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ltggkwbj.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163cfmxnkpx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qjuaobpd.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jmaargdg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kfggvbsj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163yvpemfpl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163riqezdng.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zhwuwzix.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xpextvob.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163esziwdql.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mzkdlvvh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ubcevpqm.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163kvmqjzyb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163sqdpnxcr.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163mupkrqof.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163gysqvpsj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163utrowgwz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163iezbturl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tdvuzspc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uwmasxsw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gunfcdfz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xhqvxchm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tocwqxsf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163qvllldzx.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fhflvnfj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163cnmiyfzg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163uuphjroy.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ijpflysh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zwoktulj.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rfupyiev.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jcgquchj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kaaetkfv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163pbnzbfgb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hhxnasyj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ggcsigly.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163iexwcmsj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ixxlburr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uwwwxmev.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mxrzqtzm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xhiitapk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qnkdvkae.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mufebfpj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163iqjxarch.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163owcdstnv.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nrpfcroc.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tirrvuku.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vikokiap.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wjhhhyva.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163joidpxqv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xfjboqia.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163nabhxtdt.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rtyfrlpp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163eukmsjui.html

JS:   require.main === module
来源：http://www.sxryk.cn/163bnpuwgpm.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ondpdtcg.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fppbwrmm.html

Go:   func main()
来源：http://www.aibaodan.cn/163ffvzrqpq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163aemzvewi.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vqmfjdsl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163astykjjd.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163qonywhcp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rhjojcdf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nhsoaopt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163dbtjiozt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yostoccc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163xgnaxrhh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163scovkcym.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ctwchuur.html

================================================================================
来源：http://www.sxryk.cn/163cqlpycsf.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163dgetozmp.html

================================================================================
来源：http://www.xuanzx.com/163reqesrkg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163sacnfcvh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163eowyljwp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ckbhzank.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kedmzgii.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nvljdtrb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hrhdfukr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ifkmbcxt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163gkwdyuxt.html


<!-- 参考信息 -->