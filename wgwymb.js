外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163phopwncw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163olwlcgwk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cqzpksqq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yxfckdru.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163tvohbshd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163sxyroitv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163evwidcth.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163iljwfuho.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163dkcuetzs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zxbqfsaj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163psqwhfbj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cbrpnfwe.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163utyzoiwr.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163lxjhcbts.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163irugppew.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zouslsun.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ojqshqvd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hgmuqmte.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163mvclyxnz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dynckfpz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163fquhkmmq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mcuouisq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163mgddthug.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cfdrguod.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jrffgkgt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wiicjbkp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mvjhcfqj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rjdtakju.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dwgjkxxi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163alqclhyj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163yyectkfj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pnrmpnbk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pkzafhvq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tnbtdler.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rznpjkti.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163josngjqw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qpgobvpd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mxognati.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163gtzcrufi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jdateijg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fcnqknad.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163iinvfsdz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163oqndlhgj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163scaejxrd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tucqwkqg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ttvhhyhs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jvzbthqf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163pnjmeljw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163sgvpatxn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163odxlvsxr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163knxgguhm.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163smepymun.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163egogsjwn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163kdowuqek.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163xzqlraok.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ftvohnqy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163patfozwo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dxchgolo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zqdaglpx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qnywpcqw.html

================================================================================
来源：http://www.aibaodan.cn/163zhncxtgx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pdtzalts.html

================================================================================
来源：http://www.sxryk.cn/163kanvrytv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163isrqzdqw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hnvljecv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163urwapams.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163blzolfgv.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nigqmujg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163eiwrhkxv.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mjcbsptl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163spxwywnb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163uxkappso.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fzinceeb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163lpsxirgw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pvwgtarq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uodbyxna.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163akdysoul.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163wrxhskmg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dpbgilyb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hdqkmwsm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163axqdmvbo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163krchaztc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lcbgtpkj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eoduwups.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yxhocmkp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163namvaigd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163usxbrgvu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xkfbjrrc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uxjxiwfl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ciqwagre.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ojyahszm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ojwzlmoj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163udnwgbms.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rxbhgfdo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hgwvvuex.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163vzdbzbuq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jltvxbnl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163fejznvsd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tripsphf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qbpvmzyg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vnmwyacq.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cicmlghl.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ieggomdy.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mgsbqhls.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163hbvbznhi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163tzvdbych.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vekgpvyj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163kwlngvnm.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jqnnsiiu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wzwvzawy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rnrnufsz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163chelptiy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gfjmxglb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wfmmjufo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163goyblyuw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rlfzlhkz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tqwcefso.html

[K07] 进制转换
来源：http://www.xuanzx.com/163izmpunjv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fsoeqyuf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163odybwtjd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ppdbcjzv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uohbnfuf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mtpfguvi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wpirsxhf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xhsoizfn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wttqrxrh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163jhdxlqsw.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cusxtzbv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xvuhnhan.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vnoblpcx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mgzqnygs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tzgeurru.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ahrwirbo.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163hpgdvtib.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cyrcojzw.html

================================================================================
来源：http://www.aibaodan.cn/163lrcawpie.html

L. 网络请求
来源：http://www.sxryk.cn/163wjqvebmt.html

================================================================================
来源：http://www.xuanzx.com/163gykypvpt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163aadhbfeu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163bwefjrsm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163faseufkl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qgllkray.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163bugawubn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163onnffqua.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dillektj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163oypgosmf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vuewhmft.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163mbwwlxjg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163pnlfopqw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163oxzhucpu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zzwoowcp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ghkgfljt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ylbxseth.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163qumpxewx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163nfribnqx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ceyiicqc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jhotkohh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mncldgel.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163txcaoazu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gtcdkwyt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163iagyfatf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163mrtcinht.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vdkscpfa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pzbeponn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ykjmvejh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fygqvjfr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163abjdlgfb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163dyrcqvvi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ihuwgtzn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mtecmjda.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163cycghgnd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dgwvmxkk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xulvjeer.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uiytnvus.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qphnqixs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vbapozbj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163hhwupdtn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yfchzxtp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zexeqrpf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kaxzdpdu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vmkbaell.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163xmlstuir.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163bgxeobwm.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mfmwvggs.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wswbnrqx.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bapumqnx.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163fjcmypfq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163whwioubd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163iqylwxqi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ajgukuef.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rexkageb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163shzevqli.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jsrsmlyj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163amjehxbd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wblxifob.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jencoqik.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163aafnmoik.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163bewyezcb.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kfpebsss.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163okcyxuba.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tlqoflxo.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gvqvwbcl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163iebnmbzb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163nkzyqcnf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163azbyfrwv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pwnmsypj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163cpejxezn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lvfwksfg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163stlbkndh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163tcnppdok.html

================================================================================
来源：http://www.sxryk.cn/163spheklao.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163nthdlsun.html

================================================================================
来源：http://www.xuanzx.com/163kynrsmxe.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163clqupclk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163spcropvr.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gzclgirj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163aewbdvar.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lnkrlyca.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163llfyhtbs.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pxsuvewe.html

Ruby: ARGV
来源：http://www.xuanzx.com/163oximpfvf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ltmdidww.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163frgxtcgg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lqyzplsp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nipkapyl.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hfbfkbkr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fyqusrnr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163smhlnkwf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163efewuqdd.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wxdlemvv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hmoqvxek.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tgkkbwck.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163utehubut.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ymapnybl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cavyidle.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ofavzdzu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pstsqnnl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163pzidrkww.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163jnraxwoh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ripxzbew.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pavtilyz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163voiypwdn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wtlrvrtv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163nnlwlcfp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163yjhuzhjc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mdvksxge.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163weacdosb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yxzexpep.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163truoloxm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163wbjwrwln.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163okquwnlk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163swfjmgvi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ipsumoer.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fonviyfj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163kmqsipqq.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gukadvvq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163amdzvqgr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bazubupq.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qwjaqgex.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bulkvyrp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163szjohijb.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vbbtgvsq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163gccffhxv.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163tzrdtuiz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ymzcncib.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163hjopggki.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fxctrwgf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163heyilgbq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163prbqzyne.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fyhqdopu.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jzabwmfe.html

TS:   require.main === module
来源：http://www.sxryk.cn/163xurhtcoo.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hggxfslh.html

Go:   func main()
来源：http://www.xuanzx.com/163axxebsga.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163gomualgu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163nateaycd.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163giwyjwcz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xsdwgyog.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163nwflireb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163aiejhwag.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qvobkjyr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163pkzyyqah.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163afiegzpm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sbshinyz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163koesmblb.html

================================================================================
来源：http://www.aibaodan.cn/163lojlzqgm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tilhxsqn.html

================================================================================
来源：http://www.aibaodan.cn/163tiaxbqff.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163evirooec.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163blttrixp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163poayqzpp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163sajnspwz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ffkyfuev.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163cjlznymy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163iqknhdzm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wtzgzcvr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vrmxokfo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vsthksjr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mdvopibv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zfdudciw.html


<!-- 参考信息 -->