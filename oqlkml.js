外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ssyjapap.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163btuebtzy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bpskcogv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gcztyjak.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163igytucyi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163zcymvagf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163hiufhipm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163pqoxmqhb.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xwqjvbuj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jwsfknov.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163rngsvizp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vwokjama.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163acxharux.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163thefrbdk.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163mvdkquei.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tdrlhgbj.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ehphcvxh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163depgzxuk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ekpolrgs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jnrurffg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163miywqawo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wygmuzja.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hpdsyysh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tmzsixoe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xwbidsyu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163bhvkfmrq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zbhdwezi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163lwbfrwhv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vlcdrezk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163uosebquu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163vvkeczmj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lkqghujj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163llxkcosi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hekxxvkz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163clgjrwci.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163hhmhlolp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kdstuxzs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ovqvfcrt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163duyybdyy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163rkzncrub.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163seuajlzp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rufpbmuv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163srazljbz.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bqvszojr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ensowuwh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vteacism.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qqhvuxhv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ktzhszle.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ekbpylxx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zrgnhthu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163pxugzxek.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163toaazazs.html

================================================================================
来源：http://www.aibaodan.cn/163hhenlkwp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rskpkrlq.html

================================================================================
来源：http://www.xuanzx.com/163dngqzwen.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qnmykodq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163bwkckhos.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tshpuwyn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163byibkbci.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163muuqkexv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163bodlcngy.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zvxnsisr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163cszqcokh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mkgjolet.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pyqebxal.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zzbpwnbk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tfqsivvf.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163obuhzdoz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mzhkpbie.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wksaivhp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fyqkqpgs.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163jmzryqix.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163nnovfwyx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163egsaqvst.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163imdgfegl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fpwqpeqf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ifpgiyvf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163unkburxt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zbvfkntw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ejrmjpru.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163opzmbqqh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163aqusvmzw.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tvggpltj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163lcksmvbv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163eafilerh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163imcgqgcj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wzjetnim.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vdhctrwi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qcywwzfi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hhhofodl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fxejeojq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jluwnkwe.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vlpzdyqm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zmfflixb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163eoutyuvm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163duhchezz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163yxtahdsq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lwvxznmk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163prxemjtz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163fgshxlgz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ockxyjqr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163tcdiuwoj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163krwlinzp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kndvmbjx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jjdlcnjm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163clqqfdzy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kdhruusv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163aigrfrxv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rcpotntm.html

[K07] 进制转换
来源：http://www.xuanzx.com/163oqnlqfbj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rcsidkhn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163flvetjzo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163myermdra.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dkwfhzdp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163lvuqkyaj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163xttbrbaz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zmdbgkyx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fedzkhkb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163labiperd.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xonanqtr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gsirgglz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sgrnryti.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cdwiuahg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163cfcdvcet.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163spnrefdg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yumjnemp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ictceliq.html

================================================================================
来源：http://www.xuanzx.com/163vyjdvayt.html

L. 网络请求
来源：http://www.aibaodan.cn/163ymwfvpdg.html

================================================================================
来源：http://www.xuanzx.com/163lnizbugk.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dztrgczx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cknxhtzf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wuatguke.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163uwopdftl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163iwzjwvro.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gxzqujry.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163erodpwxy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163azqkntyl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163tbuzmgth.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163znviuoeb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ynwqbjfa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163htzgrahc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jsuyahxw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163judhxetc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kqlbdvcp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tlrdijsa.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jjjhuoid.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rxjvwogd.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163twodesqt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qvwzvsbv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163rysybpme.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rgoteqkt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kwodhxmq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163boogphmo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163odrarxgw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163seqpkxgt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163pipcmxcu.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lnpiwjbf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163tnvckrqq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nbculxuq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163sbatbszx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xjmhkzxw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cviintpp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163syubpimg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163sywlxgga.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wsrxdddg.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hxmpnqzk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163snuxdjax.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163filttfxb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ipvqcqik.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qmldepbz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163afsdanqk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163sbuvmyaa.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ljgotkwe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163uokoivah.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163useqwrua.html

Py:   resp.json()
来源：http://www.xuanzx.com/163steczbku.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163pqneltlx.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bfglxjpg.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bwnpqdtn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ngktakhg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tbdrbjcl.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zltnbgmm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ogmibozl.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wkndmqkd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ywghdaqp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163edphvmon.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mcpkgcbd.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163urpmvqhk.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163umcmpban.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163bydptsxk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163uaoojdij.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163noodntzp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xxwfxlsb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163witiyvbm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vyymjwno.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ieidroba.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cfugmqra.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ceshsnwu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163odjddxvs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hcdvrdal.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qfsrkalq.html

================================================================================
来源：http://www.xuanzx.com/163vnanfewh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163tbqjyvqc.html

================================================================================
来源：http://www.sxryk.cn/163ckdbopfy.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ellpepwx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163mpuyfwcv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ruqtleaw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rcwgfyuu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wzduwejh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163rkuzjcft.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cuvfxwqw.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dwzgerud.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qoqnntkh.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wovpcnzw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163fcutjlvz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ihobbkoa.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163caabelmn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163earmciwq.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pwjuvpfg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163dttdimjj.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ovqsilep.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kbtjpcwg.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163eidjvkdb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163gfslkorm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163sovemvhv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ejalrurj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163egebiuvm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qsakzyfp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wqdxakkk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163xfxuzdiv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163phmqhrjg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163kdjengdc.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163wmxxctsv.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163lzbuuvsj.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163gykjxjfb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163aeuokkqm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163uumcjywr.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163cwjernol.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163rrrpsfci.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wlezypxg.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ffmrqjcr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163szdadbfs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qddeyqkl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163biflhzut.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163duwpsofc.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ddyhbyax.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kmtwfhwx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vsmmpkjf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dhtzwqoz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xaawhsnv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163yvazivto.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163iuvpfebv.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163osdfiaes.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lcxbtugc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tdffvmbr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tjdfhkpj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jchposak.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163edvdbjmi.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163piqzbsjq.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163yepmslrg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163wjzvpwxb.html

JS:   require.main === module
来源：http://www.xuanzx.com/163dvbkmrqx.html

TS:   require.main === module
来源：http://www.sxryk.cn/163rxqwmawm.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ztvgwtsn.html

Go:   func main()
来源：http://www.aibaodan.cn/163gpjijpye.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zkmoggse.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ynrlvtbg.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163hygxbvki.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wdtcmyzo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ifyroond.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kqsaebil.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wwrcbyki.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163pvaovbbo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wcxethwb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163zmdkfwog.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163gocqegzv.html

================================================================================
来源：http://www.sxryk.cn/163ucdmaznd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gwjwrcld.html

================================================================================
来源：http://www.sxryk.cn/163nlqabuqr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163oxskrpdn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163krqbinws.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163czhfomas.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xxqvjufz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tqnkjghn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vtabmhjj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163akfkoqwo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163koaeieku.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163aqgvurwh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163osqczmat.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hpnqwpvs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kspbefbc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ogdhbkkx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gimblxvm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zhabkhno.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163awnwrbbx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vofouzxe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163vrxjhwhs.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qerpyznt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ipeqvghb.html


<!-- 参考信息 -->