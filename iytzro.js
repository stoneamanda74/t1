外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163euzcesad.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hyalzohx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163mbiiinlr.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163wcktxqyj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163oiyzifre.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163skcygeio.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163aolntboj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163lbavyrhp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vujngxga.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fahqsgmq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xqweqznq.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jyhnipdj.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jnzzgnws.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hmlxlset.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jteycuwp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wglvgvqd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ymnwhhoi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163kpqrioph.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163urvqdhvs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lzuskgmj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iqugzvbq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tbigijnu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jebetbsv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163opsjqbcc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vwtapbah.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ksmsxjkf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qmuzrklq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fsstlioq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kunabbut.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mtdlbdjx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jvynplkz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163eelivnen.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gtpqpzcs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yhaosqmh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kesrjrfu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163gtceuout.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fsgxmbzo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163cehxobuc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163yrobdbdi.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163eecjhncx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fklliztz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163oqomoxnv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hmkinokf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163dslzreth.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163venvewkk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qgbtrjiu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gxxpymyv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ipvlkeht.html

================================================================================
来源：http://www.aibaodan.cn/163mujfrnvg.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dbjcksyi.html

================================================================================
来源：http://www.aibaodan.cn/163qetcqlci.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mjgrhiug.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ekhmgclt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jdwvijyv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163icqakalj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rcgeagib.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ihecrqjg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ydromujz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hbumfqyy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163eiehobds.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rnlqstdm.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163blbwpwuo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163xpdpkigx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hpbhezsm.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qwmyalkv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163dokewbyz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163noeffdyo.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xfpijemq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ukgngbym.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ucvpaonm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163elfpyrnc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nizoswdv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zmbvwvck.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qqxkgnyw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163rzkgwmdg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163oiietzrt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mrwkwxfj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zlloontp.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163lwxsodiu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jqxmdhcz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163tuhtpyvp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tbdwngyi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tbspqofp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163snpzsfhp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163sabipblf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wdjbomoz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163rfvpoofs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163fzrayeuy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163juuqhnfx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gdcvbfxx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fwztdjln.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rrniqodk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hjncoefq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hhxqntgu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xoufytbf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vokxieja.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163nptimvmh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163iorqncvt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163cideneqq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ydojzzoy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ioeunkju.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163dzijwohk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163onmjfslx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dwlzhyoj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bbcyxeey.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tmhcitcd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zeaxnkki.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vrjhcyfg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mjduvvvw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xiyidwnv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ztikkyaq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wuckigaa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163xffqisyr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163twvctyyu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163yxyhbyks.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qzfutvqj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ggonjwbe.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uxpcvwur.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ralohzuh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163oasydxvy.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ldldsvay.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qzpdnuns.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kixqmpku.html

================================================================================
来源：http://www.xuanzx.com/163sfpmwett.html

L. 网络请求
来源：http://www.xuanzx.com/163vbyllies.html

================================================================================
来源：http://www.sxryk.cn/163hgjrkwsv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163kiajkgfn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163cnswmonm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rkmsjpsh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ngdgtbph.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rnjoxyil.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163okdyqzwv.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163umaitewu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vgshtsrx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ddgxtkru.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tgxrfmfe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ocvorask.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163sopiqylf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qemchmlf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zvnglbwn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163dfamzjnf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bbtwlaqe.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lvdlciuz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163uawwduiy.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163tmkkkitw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lbucvujp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163gcqncvqv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fxcapeex.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kygbocmb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qpquxnek.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163axcanyan.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jhfnsmgm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ehtzyhzz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vkkadvjv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163msjcyahs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163qaehzrcv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zlvxqobl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163evwjcuuo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163phgbzoaz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ablcnpme.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cztogczr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163abeuzjlv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163alphlfwa.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rphvusps.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gbixkgdu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vbjkqhhd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163evjqkioi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163eeusrhvm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163lwtrdtfe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163rpomdujy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163lblgonsm.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163lrknpcoa.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ihrgffcu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vumouhra.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163soubkniq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ipgaysua.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ovyswlls.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ytatnwhb.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163eoafrmbm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vknyfhrx.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mubmrdet.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hpefuxlv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163txhjztyt.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ohnnkgda.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hjzfakyd.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163xhmthiah.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163farnlzdt.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ihdkcawa.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163urdxdvwf.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163oaortguj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163iohpmrex.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ubloqgdt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163daxsqrgr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163aeqnfxns.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163byhhwiqw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163etkibgre.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vespsuic.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163coaolpqh.html

================================================================================
来源：http://www.xuanzx.com/163dwwejfou.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163pbbqsjwp.html

================================================================================
来源：http://www.aibaodan.cn/163ioyereoh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bvlzinax.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xfetzmkm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bvyzlnib.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163znhbqzru.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tummoogi.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163uckfvvuz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vwsvxhqv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bpogvyfa.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bnksvrda.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163przsjstx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163thlbyeez.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hbiqfcnt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ykoqrmfk.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163yuhnjjod.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qjmocwts.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hzxviebk.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163uohrpuyx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163piatjhws.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163smzsyuhq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163grxdyepb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163mzpnzuui.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163oyzvfgqm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163adsgafsl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163puocedhv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163axiwehpr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mjoilmji.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163orxotyfe.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ldicvddk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163yestmaeu.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ceyohmdf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163utwygdvw.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hezvnywi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dgdpigfz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163acswmddl.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163jewlqqhj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ozgtxayp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163erzhvnwb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163jmxiketr.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kwzxazpe.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163etkzxepu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163bewwvzze.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cnuwhyfh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ezucyvfq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163kbrwqzfm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163lxpswkgi.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dmggptku.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wtfbdxif.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163koqbsfow.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wvomopzn.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163sujnicis.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ivgsxlpj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163uomnfvsz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163lwphmkoa.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163hdclfqaj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jcwmzqed.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163bggqlmgr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163gzagahyz.html

JS:   require.main === module
来源：http://www.xuanzx.com/163uabledzc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163efhuohbu.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kdcrtyjb.html

Go:   func main()
来源：http://www.xuanzx.com/163jltquksm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ikrdyzgh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zjcuhbta.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163muoyqgka.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163gfdqxwgt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qqbrzovk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163uzkzyxud.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163onvtrtei.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163httsmjmg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lpysyney.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bgweibrk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163puhulypp.html

================================================================================
来源：http://www.sxryk.cn/163rhsaandw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tyotdvms.html

================================================================================
来源：http://www.aibaodan.cn/163armkjzzy.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163npwunqld.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qbzobxoc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ughvpkqw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ykmenriw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163izvnqldi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163btalseko.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wuskwwsw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ipglfxfm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163yydmsruu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mbomtvgf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163klmrugvp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xmstagzq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163twfpxvdz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ixcovphn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163fbahlnvk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hjkhtskx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dyxtaytl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ycsvhecr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pkkwsisg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jwzvuion.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ljpuuyfm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lgefozaa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rakfiypt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rdfulkgd.html


<!-- 参考信息 -->