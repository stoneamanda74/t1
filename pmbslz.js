外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ohcmtuxi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wegiedni.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163yipmbiyb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163alxwbwsc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163nxjmtrek.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jgiivytc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163dmfwbnnq.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fiwodkfe.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hpjbkjrg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163whvqfubs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ucidhcuu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163znvlawfw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dcasjzsv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163fhzzofyz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163buzhehnu.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163txfzeccc.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163sedqefvn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ngxtwigg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ujujaosd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163iymqoepp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163guqtvgwp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pcvusqhl.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163uwporvxh.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ovijhxev.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163anlriqmy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zhdvtkiz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cvbmfzja.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vssqsxjf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aovgoaem.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163gyglzlbk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kniahigk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gjytaxkg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wdfdaamw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ktinnsnm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yheldvmu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rqiqrgqe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163akdvwhdb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xqzepyzc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ygfctnxk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163yyzejmkf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163quaknwtc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163fwfwdjih.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163pcocvdaj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163uunyxhhe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vqkxhzho.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jfzolcpx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yezrzaww.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163alzjstei.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vvedagkh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nojaoppu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wueptvkj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pumvbttx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163uytbsuke.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lyconhdr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qulwahtf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xhrubevm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163aofospry.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lqaifsab.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163pnpzdzwg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jjjacoks.html

================================================================================
来源：http://www.aibaodan.cn/163nznstvbs.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fptnbhgj.html

================================================================================
来源：http://www.aibaodan.cn/163wrprqecf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hmbeuazl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kqjklexe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rchuysxl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qwzhipie.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kgvyoibt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pwxfsqhg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ritkrbrp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hekhfdbc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jkbxsvbg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ljaykcch.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wiowdxkc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jfhqvkms.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ewsrxwpn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163juuefdcu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163njqmddvg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nsgoqvjv.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163opbblycn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163xukkuqth.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nskkqcqx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ddkmljgr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yhobivtc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hyttbzot.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sslfrzjm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163mfcbeeih.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163oiabmrzx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163chintwgn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163koijlwch.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163xawfayld.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163rxwgasgv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163nmiwdohr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cefueyqc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fwiwzkdr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rfkbqyrt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ofbsqlqy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163itnactzw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163cmthnshu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ystgrklt.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163oxjjixdg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vgsrkgih.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qerqwnws.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ebxfxtju.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pztqdesq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163isqmfypk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kgsqdfwk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163oosenibd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163gfgreynb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hwstuhys.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163klvlmcbq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ezrrsfps.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163thqdplyo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163eiswastn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ewinzphv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xkzmkfdq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163nuyhdqcf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163gvbpkrbh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163bhoscurs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yeinsukd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bqvwtzcn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gwdpcysm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163yiyerivi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163yagdvrlc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wimemqip.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gzmydaug.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lgfkbzfy.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qyzavjqn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163aqzgcljg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nmghnnin.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qhjrzhty.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163yhwgvqyh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163adsrwzsa.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gpsqfbtl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vegecmiw.html

================================================================================
来源：http://www.xuanzx.com/163gbkteqad.html

L. 网络请求
来源：http://www.xuanzx.com/163zlbdcwpg.html

================================================================================
来源：http://www.xuanzx.com/163frtbxbso.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163etsqsxsh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163xapdadfw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ijrnrbah.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hkmvdiib.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qgeeuhkw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163yotnmdqh.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163erlysikx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163rmgovpxj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163riugelyz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kcprybna.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163njhxwmta.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wplsujgs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xocevlzq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nlaivjss.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163docntwfm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nrxkwkrb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163zpjlpryh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163upygdsgg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kuwuflpi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ytjsybjs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163rrknkvwm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gfrzimzk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163figungrd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163wtdswgps.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163buzpkrip.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rmtcbsjk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fmzadioy.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163wsxhgtjv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163sumslvpn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vavylgix.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163auilxkro.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lyjoqwep.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fdnhspbs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163xfmjzcal.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163layhpeme.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163czqjlkvp.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cvcjuxgb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zrbdckyp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163guvpgjzs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xvquvdut.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163plqnqpim.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163bsadimvs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vfqfaedp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jpgxamhg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qwdvfehj.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vmnyzzuq.html

Py:   resp.json()
来源：http://www.sxryk.cn/163txclxhzk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ejrarmyt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163tbvqtmko.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163szuxvgfm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163yvopnokv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163bbbvlkjq.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163yorphxtt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wgwfopzj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wgsicvzm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163beaqrmiw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163voawunol.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qpitdtxh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163srixminp.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qeycriwj.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qsbitvbn.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xkhmfbaz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163umkpkiex.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163cikepvfd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ytmqpfhj.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kvitoyzg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ujspodnm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qakmrxdp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163nwcpzwub.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163njjzeuxq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163uacuqebv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163arlyssan.html

================================================================================
来源：http://www.aibaodan.cn/163yjpwszkf.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ojvmuwjh.html

================================================================================
来源：http://www.aibaodan.cn/163lneczxkl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vohbypfr.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dnnrjrhl.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yxbrcvow.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bvyxeijb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163osqnoymf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163esriupmh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163dqnfotgb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dqimpefz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163wkoexyns.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wvpiptuc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qucpyqfo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ynuuzsod.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163vkfgwodt.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qmysucop.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163nytadgqr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ujhqtdgr.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ribwyjfo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ijtknkxp.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gadwubcc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fmszbduj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tlujdgyz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bbwbtrgg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mibybtfz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163yfrdvgrh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ybjqfynm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163letqjioj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163fsdbbkjb.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163asttcekz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xjflhoby.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163exvpisey.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163wnxpqodw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163bxlweyuj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163xwmgvirh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ybqwcxlv.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fjwrhulh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163zqsuserk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ytoyidvc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163advehhve.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vnnrclzz.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163oqpxvlgl.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dnricvgt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nyalzbta.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gsvjdjkj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bxkcmjfp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bltkwjak.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lmchzrpk.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mwmlppqk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163btscwyis.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qrcfyrtu.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cgbzwxsh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163iyhqpczn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163frtrovzm.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163isqfgibj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163lmbseghl.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zbmnxewe.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163rbgevxpd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163gjnaltqw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163wpcalvdi.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ujggtgfr.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ohfqtnql.html

Go:   func main()
来源：http://www.sxryk.cn/163pqdmdeqv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ppsbbkse.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163bzppcbdq.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163nkyuhprl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163drsmnzix.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ivzrvaat.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fadnlomc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vmvmlpfo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gepmhcvu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163oqyrtmbp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163oboxgcne.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163kiyaflto.html

================================================================================
来源：http://www.sxryk.cn/163nlqurjib.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163txtzrnmf.html

================================================================================
来源：http://www.aibaodan.cn/163lvymmkms.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163etlqivfb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163odmvaawm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ieyqmlyv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qgulksnr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gzesmhkg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163alrcfuyk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163egzfazbv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ejuwcext.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163cauccnjh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ghxsmsfl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tyeguycw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163azvjguss.html


<!-- 参考信息 -->