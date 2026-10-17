外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163akhqfytq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163nzyweahv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163sjciozoj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xbmomaep.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163poefpeyw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bfykdweu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jgizroqj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163pyxvryhq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gtxhxezr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jikeokfs.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163azfmnisk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163sirzkrus.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163psknhohf.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163yquappvg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163icydhswn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jmpztlvt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wvsqluix.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jyuzslrs.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163pwocgqqf.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zkmhcbnk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lbsmquym.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cdygenvb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163hqjiodmi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163izqcubdd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rgqibovd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163zwuwcnnv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163btpdwizv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tuckkecb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xklgzjnu.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uyrnwylc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hhsbeeyg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nlpbtkdg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dhqznzsk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pwsozvnw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kwohqsua.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kfseovrq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hzmfpzuu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xktojtro.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ufxjnnin.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xmpafwid.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ndjxtcua.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bpzohrbx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ujyhqwap.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hwlwqfiq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wvalwirs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ixcgwzsa.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ayuxcmyr.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hojxvsau.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163potlcmsm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ksykzqwh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163avqszsjf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163scsdwiwg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hdtznlem.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xjbizeoa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jnigedtl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xnbetpce.html

================================================================================
来源：http://www.xuanzx.com/163mhtjzgcx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pjxairkn.html

================================================================================
来源：http://www.sxryk.cn/163islyokbo.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163uaklpjih.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163zuorvvgu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yspyjjxf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hrqjrqcc.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163drrzndtb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fkdhyvoh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hmavlzfz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163cqpbifhb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163koliqguw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163garlaiue.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tzthvmtu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163xkozbodb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vnckvnjy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163svxbyrro.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163lkllcwab.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xrknojkc.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163yxucutuu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163oazzmrnf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163itzlrsiv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163kaedhugu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iifouakq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pcoohpyt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ewlarqaa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mcwqlfin.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rkewzfej.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jolswpcr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fyeyedhc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wyvuavvo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ctzzqryr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dtdspmnv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xkdavwbx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xybxqawd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xbruspya.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sxwetzbp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163amtrryly.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163oylwssvz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163lpsgemtl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163arhxzfin.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163cxmkqakh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dontlrsn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163refqymhq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163uiwqmghq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163vstuidvu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163gijmdthb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163okooqmcl.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163udkptyog.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hdeptetd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163arykoyln.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163htxukgdt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163osiwvmuu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nlrlbgak.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163qmbafzvo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163umattvht.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163aumjcini.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163sfmbbkww.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163salxzqfd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163aummvsry.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ppjywwhl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ypljldgy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ifjfznkz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fwaoeiiv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lfzeyrhm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nrhnuono.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163azgvzwyh.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163vmajyxbh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163spwrxdea.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qqodmmxh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tjgtgyar.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163gdocqapm.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wfnmnsbf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jnwjbcvn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163esygwhnm.html

================================================================================
来源：http://www.sxryk.cn/163zkfdypbx.html

L. 网络请求
来源：http://www.xuanzx.com/163yxcjhnis.html

================================================================================
来源：http://www.sxryk.cn/163oplnfuvo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163htbcooqu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163uegcwtix.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163szljwqsx.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163nheayxnm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pbwoeiew.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yppymzdh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163fgrbcrzi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xxllyjdm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163pkekctee.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qrihnwlx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163olplcluv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163uirvwnez.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bzgtwksy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hsrfahdb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163dducvrzw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pxlyarul.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rvgtuaqq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163schtgujr.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163eacypzbq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xhnshfte.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mftytqql.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163evugfkkf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163atchmmhw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bkszpqlo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163phjhztyu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ihcutzqz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163nsuukrwp.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xddvqfvk.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ozgwjoym.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mvxdkunl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163atyqeqxt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mcetcssg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163amindzfy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163achtlbph.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163uiptnfmo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ydfdpcys.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163sqximmei.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vuwotklq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163clhogfqq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dewjbywa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dsnkahwv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hcolqxxz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rhceltbl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163uotlfpfd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163auptfqjq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kvzgtfuc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163mzlpfvcd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vkzhnotb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mpsisenx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wejzkgvn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dqxwtbrk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bqfmfedx.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163hzfxxavr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jvtklplk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lmpjhgvs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qorrgwto.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dlbqatzs.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ecsluggh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iyvozxfl.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163nzclrtvn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163dfblcrpk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tccbogrg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xpuffbxi.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163etoukvfo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163koiooegz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gismwvyw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cdhrqhvn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iovolmbp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bvcpsbet.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hihilhgk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tufujyat.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163hcpouzil.html

================================================================================
来源：http://www.xuanzx.com/163mrcbwklj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163uziviagb.html

================================================================================
来源：http://www.aibaodan.cn/163kkyspjpf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lphhhaui.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163dtsyqgor.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163uwilnjvk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zuxccmkm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xrqafgjg.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fslvufpp.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163byvzkhkp.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163wuhwdoai.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163udrajydl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163gzsogoub.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163plgtaxnd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wthnqxcg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163kuofiigf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163iyahpfze.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163yyedided.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vcbjvfgo.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ousmxjvb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163okhuyszp.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ooookraq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jjsztnfi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163kknnovnv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uxogcjop.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ftgaxcia.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zsufhanp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xqsqwmup.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ycyvpcaj.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163muemdboq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dqconvxe.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lpxoifvp.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163uoqcjzfq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163oujwnnce.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ctaqzduv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163nqbxvmnl.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fordbdyu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163yxruesfs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hdzkzitu.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qvwzwkkj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163njaquxuu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163jsswcyjt.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xccycldu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gnhjthrz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163tmopuoqj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163tjyvtplr.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zexbxxmw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163cgvltkdw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163oljavmxr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rxbddpes.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163lritcddw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gamucmya.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hzkrhxce.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163difjctny.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vjoqaacb.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163jwkvjpmj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fqhztfsx.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163gxcfxuyd.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jxkeqnfr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ombzbhxj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163tftunsib.html

TS:   require.main === module
来源：http://www.sxryk.cn/163bnnuyuzh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163yjnzkqof.html

Go:   func main()
来源：http://www.sxryk.cn/163gmbjeelp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jrfqbwuj.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zdtlapke.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fpvwgifb.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fcaefzpa.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163epfpnhqh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163izgxlbxc.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163brswjhoc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ernmrhbc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mvjcsypw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163vasuzmbi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lfujiwzk.html

================================================================================
来源：http://www.sxryk.cn/163zhbfskxq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cumbhmwn.html

================================================================================
来源：http://www.xuanzx.com/163nedaiqaf.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163lnydfadj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zcxbmpkq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163aodsxwld.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lhdyfebb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jxfydglz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163unotxprn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wxvuqlhe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jqsypkbc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qyqjeynq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163cnchiekm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nofobzpi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vizawcyo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kqmuxciy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uwptktiz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rtjujfbi.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163mfmxvmia.html


<!-- 参考信息 -->