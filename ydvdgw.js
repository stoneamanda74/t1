外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hkydvcdv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163sfnujztq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zgcjmwal.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jzxvnnaa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ambytozh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nekpbjgw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163btpdmqxk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163izcabyqg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163wovlipet.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163onrddifl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163zawkteoi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163cfzeayfv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ptzembja.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163gbahtnot.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ftekiaov.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rwzxlujf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163grwjdkhj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sxcpooyc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163lnvupssp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yoczugcm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pkkvgofm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163auuoxokl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vdinoqeg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163przjzjoy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wuwffpwd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gkdxjczc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jjiczazo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163jttodygq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gmnqzifw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163yzisfdzm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qizoltom.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163gtltjmqd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zzrlhzlh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gwmezzgi.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163pftlimmc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pjbiowha.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uptosand.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163siewcpri.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ofpsdquv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163roanjmln.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163abzpjhdm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163fqsfrgru.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163xqfbasad.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163oqcvagwe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163elgkmjeh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163giyhvqut.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163wysbnzda.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163sqhkifiu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qhafkgwe.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163hczltnuz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ehmslcsw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mrycyzgh.html

================================================================================
来源：http://www.xuanzx.com/163fprykdyr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163icmlwtzp.html

================================================================================
来源：http://www.sxryk.cn/163dtzfrurj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163skjfcfox.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163djnnxsze.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dgbycaap.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qmuiradw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zyecsxbm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163liytkevq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163sjzqmzom.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163voxleylf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ggzqjrvw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xnsmjhtz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163poijhofr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163effigyya.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yqchkxcu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gbqurkvs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zbgrcxdx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163shmggsmv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163svxaryfn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163vjksmfuh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pibvvxks.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163amyapxpm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pqwoghxf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uixkqshc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dnjaqgzo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163sjrozgop.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ygiycxrq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mlqkqsya.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hnzdqvdf.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ckvclpba.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mkrhnnlw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dwblqfvx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pxtenatw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nnbaefxf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163icrahtrj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mrykuxhi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qaycggqd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ueyaufal.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163owupybuk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163rzpkompv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ahfmsuvx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nqgiqmqh.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163iqlstfec.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163efviexhs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dhskpqmn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kjjlsmuw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jtzrpewg.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163gqxzzjjf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163bghsfzdc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bthechom.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xutvvqmq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yufnmssu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163oqniefri.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gftzblxg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163yrquurld.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163spfeleco.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mdmhosyt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163dsdczqvu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163pxojiqsu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ybdqbwby.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pbbmdhwq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163lgkbskzh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wxgudzkn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163opcgnhbo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163sfqteeor.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gjyzddjz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163atvcgmhd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jlehpvel.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tlwhfrpd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sqzyyctp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163evsrnxle.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kygqmzgz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gjqsjums.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xeilidni.html

================================================================================
来源：http://www.aibaodan.cn/163emxhwqlc.html

L. 网络请求
来源：http://www.sxryk.cn/163zuacertv.html

================================================================================
来源：http://www.aibaodan.cn/163csmavkue.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163erueviem.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163tvoievjc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zhqnqqfr.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ojpfhatf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zrbqgoau.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163btgfozqe.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163zkyjqkpn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163tztrklol.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163hwrldlhd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163mchmjvtr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wmibcscp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qhhbehij.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qqmrcoww.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pdajhvea.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tsikuohc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163olacjaci.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163mpthxdgp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qbmjxvfn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163svfdkvcr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163hpkjdpsz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nvpupbfl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163crwbouoe.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163radkzhyh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kluwbrnw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vimdltjn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xivhkums.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ayxlvnod.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vrcmmath.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163herpklkp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163gpiuhkbi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cebieldb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zhoyyuyt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163dfekwjbd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kihqhzje.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163rjstvppu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vonjwxkf.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hxmcdvjs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163udfkmylm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163pvdxkieg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wolotylu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yycplkrh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163cvvsghur.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ezyaumpe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163trjcvdpi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163lgqpgyul.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rrtombes.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fxfbrjcx.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mvmhdeby.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163cuwltwup.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ljwaqcul.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163xejmfqzh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163efkngdks.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zntywuue.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xpsflwlo.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fjmtmbmo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tzzrfydb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163dgrinawz.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ozpdcfhy.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zafmszat.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mlmhatwc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jwnrktoc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163tnzzedgr.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qecjsdxn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163upzrdvah.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qdobulch.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pxizgwta.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ituahdve.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rvscspta.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163sfjthuzz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ddivkryz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163yabcjhtp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pqfuxqlc.html

================================================================================
来源：http://www.sxryk.cn/163frzisexg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163zebbcxzx.html

================================================================================
来源：http://www.xuanzx.com/163ggsuewjt.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gnkqlooj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yxjagohp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163szjenhkn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ulvkaimn.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ckumejvo.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163icwhjpeh.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163syoklded.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tbhjfqee.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163qwziwyll.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163nsulksno.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ozfvvklb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163eleqozck.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vulwgeot.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163eocrdsnq.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dqwqfqkk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xhjlvqnu.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tptkgjeg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163blvoioav.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tzkuttdq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zvetqejx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163yegvwqpg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dmetdzlq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163idtwjtrx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163luwnradn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jzvunjik.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163khdsukby.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rpmvsqnk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vneccuil.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163iyphcfxa.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nzvyemcr.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wzlyzuhh.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ovruyuaf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163kjizsomj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163toiuifeb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nwumfosg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xqdkqbgh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ginvqoxr.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163eeawvgwi.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163rhpvobfk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pxbixjgc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yfetzqqx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vziirvek.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ppmmmbgm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163pgupmwtp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163tkcvffve.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gzvettxc.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163emsfygat.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163tyexqpfn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zywmqlvo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163znjategl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ymdbpyzx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cehaxnem.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wcgwcxro.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zkjypdvd.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vdqjcdje.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163gkabvoxi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bndxlpcw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ucptubgi.html

TS:   require.main === module
来源：http://www.sxryk.cn/163foysxzbb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163vthqxlkc.html

Go:   func main()
来源：http://www.aibaodan.cn/163eqifmefq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hjhnruja.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hzchqutk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163gqbssvvz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163hcogvxvw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163uxltpjax.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hrzzjfon.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zjuikbry.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mhxlzurc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163dryvkykf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163aougjeaa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163toigueov.html

================================================================================
来源：http://www.sxryk.cn/163rqvgniem.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rmvzgndr.html

================================================================================
来源：http://www.aibaodan.cn/163fsmqbuxq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163scfckgon.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yeersrgh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163yycqtsfz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pcdqesdt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ueuawozw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163itqjzlat.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163annlsbsz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qcukoqln.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kurfzrsa.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163iqdvmhod.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163aftrcvhr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163emtlygca.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gsaidtyb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nofrppug.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163olqdlksm.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gicquojb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163disyonmv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163lckrlbwi.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163vnvdoefv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qlbwzbjj.html


<!-- 参考信息 -->