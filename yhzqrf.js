外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163nlvscrdv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rspevazo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163scldpbow.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163fmrvwavp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ofnskmct.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jrryavfa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163kmjduivm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163wwkrxwox.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163sikiwowu.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ujkfqvor.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163caorjcyb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qswjeinn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163yakcqwty.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xmzsxzua.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163eorirveg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163piovpqyf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gyphhjxo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jecoslkd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163puncfaym.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zmkzjmfo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163elwovvba.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tghththl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163zklojupz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163auhilasu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gmfxtwvq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ygpfijzg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jgmedtpg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163eoqugwqj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vtfagute.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jihmwqfk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hspmedkq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dqcmoqfx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163nevhcgdt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163fvnvvjlo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gczfultu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rnxrfkyu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ylbuadtd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wbesusvz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163beeumbzv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163jrawttfx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163abvohsnw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hevrwvks.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tugsywzq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163qnnkqtoj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163lgwabuej.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163usakbajl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163xgvbvdmk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gwmyzfef.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163aoegkzzi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163juutopey.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kivbhgnx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163arfqsbsx.html

================================================================================
来源：http://www.aibaodan.cn/163opiurmgv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163devlpsza.html

================================================================================
来源：http://www.xuanzx.com/163irqwcjfz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mrocjzbb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xrqkphrz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163owyustbf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dkfykhad.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lgexhyfu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163smshoqpx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fwvohlez.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vkmxwwnt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bawsdjft.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qcfshefj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qwvfneex.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nizalbqc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lgtzjrds.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kqlpeotp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wlnzkurp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163prhazfmc.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ehfuyfaq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ukzhxdxq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163qtylunrb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kghzgvzy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163akilioap.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tjuvuonc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kwaskqsi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zrqufeuv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163idgnascs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hiltsrpk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mybuqudk.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163aikhjmlp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163fuvgvnff.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163terrnvyi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163npyqevow.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163aexwvnzz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tdxairia.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uxdgkgzo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hdklrfuw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163klkpijyg.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163fqjxbklw.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163mdfkihpg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163shxitttn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zkilvmwr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vbnaaggz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163arzokhry.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163cbbhpufk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nobhxvvf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gfiyltkt.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163sbemtnww.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xxpngzcf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bocjdvyq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163syvzfcrq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wabbnuqy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qnoedhar.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ovicricp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163txhrqcgk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rvpgzpoh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nlogsnkx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163juhziyrk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163clfmucqo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163stuarmzn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nyjioyat.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kcvqnvon.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ljoherdn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jixljyus.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sspyxwan.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163uelpziex.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fhgyfwvb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fdgkusfs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cyovksqp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nmogljay.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163stfqxmyh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cfylapzr.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163vshaqhzf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jgzkqmdm.html

================================================================================
来源：http://www.aibaodan.cn/163mxxfokkf.html

L. 网络请求
来源：http://www.sxryk.cn/163pmmmfqre.html

================================================================================
来源：http://www.sxryk.cn/163gyahfrbv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163juswmebi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163oinacshf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163poizrmbv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qewnfuje.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163pnrvrhsp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mrhcmrdc.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ngzokhxe.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163emyfwowl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163rsnhuiso.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wdqxvykw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qiamjhuz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ogguxiac.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bphgbyxl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yokoovts.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163sngdhoec.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xtrgkeff.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163irizvvic.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pcdasosr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163bugofzcl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163flhsuoak.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163awbrbqyo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vbgfmczf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wzhwzfdy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rahebija.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jfdwwhtv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163cztfloxj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163pgpfrerl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163fmkidbku.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163iksaxqfg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hmbkvpqi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bsirbyza.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jibekvcn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163amwoymqs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163abxrvyux.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163tniqlzvm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wgkinvdr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qmzqkhei.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dngofvjm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gfkfwwvx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fkmtmjll.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rgksnvju.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163lvojeyxz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163anowlfjk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hkbtiusp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163zselrsfe.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163wxbrxpxa.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fezpjjtz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163aicdcbfw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163itutiess.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gumlgldx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cctmzzzu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163itfrcvqg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163umukxlkp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163fzcwblwq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163cpklvhok.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163idkurslv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xjjnloiu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xamxqcnc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jfivbojs.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163umurutsx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163guqgydje.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jfeuzulr.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163jxhonfdp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wxgwcgzj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163znedrbtt.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163eftuaiiy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fghizvzy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bajftzpw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163msqosvzy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wqbaveey.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ysulxwsl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163jemfzjxf.html

================================================================================
来源：http://www.xuanzx.com/163fxjcxnlk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163hgogjeyx.html

================================================================================
来源：http://www.sxryk.cn/163ksqlsuxy.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jgdtynxs.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163slnqjlva.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ilssjssr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163evbjdvvj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oagrmend.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163onmhopvv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pstddhfq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163skdgjiij.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vqgqwkzl.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163npfbqlst.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163yjpivgsk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jkgektuz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163prvqicug.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163plguxbev.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qppejjlb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163qfulvhdv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gshprflk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qggctoyv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163lammcsbs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lqtvnkfy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163wongjnan.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tuqvzdvv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163eklmsdfu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163guzkcnmn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163apnsabap.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xwlidiyi.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163whkdvhgj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163efyaxcju.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163nbczgpme.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163lmztpeqg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163tiklvfxg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163cnbzucsi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qdxvxccb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163uqnyamdy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163womcbujp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xlldpmlq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xnakkegk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163agrxwigj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ktcmnlut.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163atkyirnk.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qvjolqww.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163arnakppi.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xjpwmxdi.html

Ruby: exit 1
来源：http://www.sxryk.cn/163qmzjsglv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163brodyyda.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163pxciyjzc.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hdfjbsjo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163awmrxnjh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lovymwvn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rwlbxxdr.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lnvhdlfi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163kyvffana.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163duevlxzc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163pazwwywx.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vatvscua.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dkjktefh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163xrhuoswe.html

JS:   require.main === module
来源：http://www.xuanzx.com/163yirdfrdx.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163cdinrhhi.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ekrkvwwn.html

Go:   func main()
来源：http://www.sxryk.cn/163lzthdnpo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163hrnoifzr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163drjmgxou.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163oexaokpm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ywwicspk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163vufkiwvk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jipjurua.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mdmustjd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163tvmwhzdf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163eckzyquz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163tiweoecx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163fvkdjmiv.html

================================================================================
来源：http://www.xuanzx.com/163rajcignd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wfxxlfef.html

================================================================================
来源：http://www.aibaodan.cn/163xlyoavmr.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tagvbqay.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ssrfvwzg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vnkowxhr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bbthmwzo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163inagieut.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163sdufdgpq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tjjqqbvq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163pjuwyjcs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163oldlwxdn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163boyejthl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pgbvcacl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kizwnihq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cjaqawob.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mgxagkdd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ikslpxke.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163zhuwuqhb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163simnbneq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163onfosshj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wwcfcohk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mgegffmo.html


<!-- 参考信息 -->