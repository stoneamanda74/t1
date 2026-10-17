外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ahpasfoe.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hmkledxc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hvjsvrkn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163yedndfzu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mbxoyatl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ehelqmbw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ealduogr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rclwpxvj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163mzlvqwpw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163eoppaodr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163dpuiolrq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163phhbrnuj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163viafsdhm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163nhpygqfk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xqvsdxaq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jpnmqulp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bwxncysz.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163fewjotdc.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pkxesfsj.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163gjmpsekb.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zmvesxny.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163spgscayd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163zqyboacr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163iebzuhsk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163cfludyre.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xqntejlp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xlahlvwf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163shkhzbfw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jzhdhrnh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163nxdyhmqk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wnyglkoa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qpkzjjad.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gqeseyuu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163agadnixo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fjxbzzgn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163hoskirdo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ahlyhqir.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163swbryuzv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nvklpjcy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kxjhkphc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163yuxaqdku.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bgqxftth.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xqspwagu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163agddukoh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163apudcqwh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pljhobze.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vbgtmmxl.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zcocsydk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163iytrxbyc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163euzzskjw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kbpukluf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ipmlrfdw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ayswwkwg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zlopufyi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163xsnbnemk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163bdyajyqv.html

================================================================================
来源：http://www.aibaodan.cn/163tsrxnyzs.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163atjlypjy.html

================================================================================
来源：http://www.aibaodan.cn/163kypkdbvj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163yvbbihdr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xcrlqmzo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163iaffbjfz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ocpicyyz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qponvhka.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163kaqftozh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fooxyjqp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mxidinuk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163djvpwscq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163lamlbapz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zvlregak.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zwsrdsgq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kkioovyv.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rtdqbxit.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ojeluacz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163krmornly.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163gvpnvsfs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163czcmgpyi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163cgmxwllq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wyhgydxt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kihdabau.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lqqfiyqk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oqnhuuqw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163nknwzfjl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163reqofnjr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163yakjtcas.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163hiuqgsvr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163afritece.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163kflhvail.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xzefmjsa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wuknnlxl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yaoedpgv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163hsmdxocd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xlewgfad.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163libwitqc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163egjubbwu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163dlkocvyc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nbmtmddi.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163aicxkojh.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nhilinjc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wkouzpkb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xrltvaou.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nuuxjdaj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qpgyzfcf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163syhaykqq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163vobajtyi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163euxcggwq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163bsemecyq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fqiofiqd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163krndgemb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163sbbqdunf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bnhnrngg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ipkhvfsq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163kfhyrdte.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zhnnjdss.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163blsaghwc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163lhgdiuoy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uelikvva.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tupktmun.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cepunfnw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163cayshixj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163dmflopjw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ioeladhb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wdeeelbt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163mgzxjash.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xqwwpurv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dlqpxdsn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jcfiityg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pshykgsc.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zjodzgvs.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jdtyzveg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dhbrjbjy.html

================================================================================
来源：http://www.sxryk.cn/163hlxrdpdj.html

L. 网络请求
来源：http://www.aibaodan.cn/163uswniftu.html

================================================================================
来源：http://www.xuanzx.com/163tuvsotwh.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163hpngdbdh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sdskyrhp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163earabtna.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163uslunlrw.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163mgngpgvd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163djtgwemy.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163byuwfjod.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ahkugyxg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163uiqqzmec.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163pmjflggb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163lpbcrulr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wpowjfho.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ufolrcou.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xtgtbdko.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163lcqrmgjr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ywfcrbfy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163pkhfcbrk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163kzhngymy.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163oncjwqxw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zvjfvcyr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163wxkwjhep.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ywceydnd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kjrajshy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163yomicbsx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163eazlldhj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fpcwjvli.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wkqbelsi.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rceyjzkc.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163mjxhegmi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gwpheasy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163khuvaybw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qksggkgm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163nvnuwxin.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163essrsjmw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ystlcxmj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163lbuzmxip.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jsckyhjw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163pufuuuwn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163sxhpojba.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kcwwcvhc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xnsdhchu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163dqjdomvr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qtwsmwhe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163dfhbkjgf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163hkfqudhi.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ltnuihih.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xmntpyct.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rapbqrwz.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163dynwwfzu.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jwwkeiaw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mxxepnyu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163blcgmbxx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nptpsess.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163iudpfxlz.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tsjereav.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ujndvjrz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hiwralss.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163saomjdqb.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163aaesrvzs.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tarslogk.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ilxujbsr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kdtbzknc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163tusiuuxa.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163myjlrjsk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163tzxovuaf.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163mlesxozg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163catuymui.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cinnethh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qxegjbdu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163iuymjdjk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163pdbbvdbo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xjymcqqg.html

================================================================================
来源：http://www.sxryk.cn/163qtcrrzzp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163onttkhpp.html

================================================================================
来源：http://www.aibaodan.cn/163besqxwga.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163mevjdxnt.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ddspbemd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ivbenvyq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dqvnnvvq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163owjesoqs.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163panlbjgh.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163vbkgewbc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163khcsiqmo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163etsdfehn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ykbskoyk.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163exsogtlr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163acfoyzbo.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163fhbioayz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163cvactcaz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rljyzrdl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zrsluawf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163yhpvntqg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ebjwrqkc.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163psezbwrw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163nanppxvi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vpcmfxeg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zrbiqgss.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qulpimsd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cfditurw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nhxrgtej.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163zghkncmo.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fvglhkdh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ixshvgbi.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lcnqkdvo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hjcbxzks.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ymdbssyr.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cdrpydpi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ozbhkyfe.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163eoebmnoz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163deplvklt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qnlwcqpz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163usnxqyaa.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qfwunbtk.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lxxbmxhg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xjpantml.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ikyuljws.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163svtypxmt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fykivorj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jjsiubex.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yyxmlwcu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lrkxibse.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fmkvzpws.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zqhvuxyc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163puwpjpia.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163fnubcvye.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163usrbwwrw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163apcjuozs.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163tulhqujg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jihqnioo.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fjgoohmc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163nxxpkmkd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163haumvsbi.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163depdfezv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163imktxjbx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163llohdscm.html

Go:   func main()
来源：http://www.aibaodan.cn/163nvjljybc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xfhchfuy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vlthpigc.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lzfpxzfi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163yvxdwnpm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163yltsxbej.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dqmaynyn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163govjjfcb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163bitjyhra.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163grvosplj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cskmwhuu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163edhomacq.html

================================================================================
来源：http://www.sxryk.cn/163yahgbumi.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rambxbcl.html

================================================================================
来源：http://www.aibaodan.cn/163naulvyke.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cnwpwkie.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ycmwafdy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163bsvzefco.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cpntplvx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mnnhhxyd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bbrulihw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tqivyoei.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163kincpxrw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163rtnwibsl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tgeyjcbu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zaoasajn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163znqmaagh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163grbqttuz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163omuiesbk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163herktofc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163acwngfbr.html


<!-- 参考信息 -->