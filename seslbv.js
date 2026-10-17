外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rlammvze.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pyobjcpn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163kxumnxof.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ntjkwbbh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ugtohblw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163amsckqzt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ktzinvdx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163kxtsoqus.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163cuqpvpou.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tkvuwgoo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mpdnxnye.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pxgqclwc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nkyoyjno.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vmwpbbst.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vcizqaut.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vkoscikz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xbfivwur.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163nntanpzs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163nxipvsgt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vugfrpud.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163clxfcjjj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uakflikc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ehobfvzw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wlgymwnq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163sbphjfxr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163yfjwdxao.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163caebicta.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163oykqsgzu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qgzuetjh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163eqhdaoij.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163brequfbo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163mxrthdst.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gsqllzqn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cpymxiep.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xqcpnszc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163vhpibgso.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pyvmszxk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jpgeicnq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163sfhadxvh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163cmpmtndt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163tgakbesl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163gimvokqb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163wglmwpou.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ugmwzmhv.html

================================================================================
来源：http://www.xuanzx.com/163ndnfgyfv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163oymphypu.html

================================================================================
来源：http://www.aibaodan.cn/163encxqugx.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163erfywhxa.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163obiqyzoj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ojalafav.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vrsiwrqo.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163domhmkcf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gnfbeacy.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163atlwvvmb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163iluniggl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zqskfhpx.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163indksrnc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vfwlsanb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kmqacqlr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kwxskumv.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163isyretow.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qngdzzev.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163uvcifxes.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wrowtxgi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ywwlnuyh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dlypalsy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iwhgfykp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163znyruztl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xtekadsm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vbmzlmnr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163auprqbzj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163olxpxqnc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163iawficyp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vyhjsqcz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163bgtudift.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163enxuqyoh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ebuwatin.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lzxkubnv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ghflkxzd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dcnqukya.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nvshtaqy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163tobicdbm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zfwnnopi.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163cjyvezjl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163qsyrzkqb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zatymoxq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163twdoevrr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dsconmgr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ysxmtjtn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163iyexwoar.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163njohhriv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163rxhanlzb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ejygkdke.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vtvtaggo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163iykpsvow.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sjvjyehq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qxijhqsf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163spjjuine.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163yrmrazcj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xelcphtp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kfrxaskw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163lwlvueol.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mcnglyja.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163majlxphm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nolfxzxk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163idrfbohc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163axojzvsy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163egoakckx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163lpjmzkrq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nmqhujwq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163odpgajmy.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163zipjnbaz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qgfnkarv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163shxmosbc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vmzynbsw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kqntbstr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ggpqeoff.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ibnjlfbv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ekqjdbom.html

================================================================================
来源：http://www.xuanzx.com/163wnyuiwqo.html

L. 网络请求
来源：http://www.xuanzx.com/163keanobno.html

================================================================================
来源：http://www.aibaodan.cn/163iqssmxyz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163cfmgigiv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ojbwunhd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jnrodmpl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163havrcsci.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163alucgcju.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rulpxufz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163kcchnkns.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jaotqofm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163gstchfgm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jfovfomo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ycxrnecd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hlqljmrg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fwhseyqa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163edkzruek.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163uzmdgnfq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163dofnndey.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dyxhgwud.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163qnvqwewk.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163wpcxayqd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fuswlnlf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vwutfuuk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163owfzkybo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wrygbnpk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ghhhgnin.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ldgnaqer.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163iezkcxyz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mcjzlmqy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wovldrbf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dbesclsy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xolfpepz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wiumpfba.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ehtwulpi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ndzxcbbb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163xdkopcid.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163biwpigve.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163nqjiblhb.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163nhcrmmss.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kalvoppy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fdunhwfi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bntwetmf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163aqdzaide.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ofwvmkdv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163sytsjsot.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163iyffmodx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163cxqmgbeo.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tvrzxryz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163bnbkogom.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163mckgopim.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163htrhexwc.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163roshdaso.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163uxwydwkc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163mkhcprtj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ntcoznxm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qyxtlkxh.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lpnmpmmo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163pghezank.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vfrydntg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jepogqzq.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nfqtjkgu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163stpgtasw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jfzjahse.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163uabiagwl.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xssvioeo.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vynwtpfo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dnduixbg.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gqisxisn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163upldbvlz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ejjlwkak.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ymglnwnd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qwxazgru.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163sgztqfzr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pwtazxrx.html

================================================================================
来源：http://www.aibaodan.cn/163tyhqwdfv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163azibgkxa.html

================================================================================
来源：http://www.aibaodan.cn/163rbuuelji.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cogkewzu.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163axmkdyii.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kzuznchv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hkzxqebu.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pfllsxzd.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hdzoltut.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163fojxkehl.html

Ruby: ARGV
来源：http://www.xuanzx.com/163mfrzbhmu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ozcxtyxu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lykspmyn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bmbshdhu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163qixpppkb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dwclbyww.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fynukmgl.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163leqodhqh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163rmfauwcn.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163segfgnhx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163yrnqnmow.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163dpgjiszr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163geziqmcr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163jkjcazmv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bjmlvbbr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163updswklg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163shmyowro.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ziqmnbjq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qgklzacq.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ajqfjukf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163xecqubbt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dwembyyw.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163fqkwygty.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dqkgrdgg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163epyjcdsx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163phaaljsw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hdxmxzms.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163myohldix.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lqomvnoz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163lhybkolq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ggfxcktb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xgjlbzgn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163aiuwgqfo.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163baioynfw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cxkqzako.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qxupzjxe.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dlohrfgt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163tmvuidit.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163unlsccsm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oniylfop.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gpfwdrjj.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163biymvnur.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163mmwnjogv.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163uoddhvew.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163klutpjln.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ekkoemfv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qnvbdhff.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163oxrfautt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vguotlxj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vqtsnanj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ftghxnyg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gitwmxnd.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163maykljhg.html

Go:   func main()
来源：http://www.xuanzx.com/163ycbssxac.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163sjkmahfj.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163fcavigsw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163sroaqgfw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163pdqayode.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163indvpzjg.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163eydzuhno.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fatirndr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mhtdljcg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nroznkyf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gteudbrg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163zngwphax.html

================================================================================
来源：http://www.sxryk.cn/163kukpamvi.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163isewhaup.html

================================================================================
来源：http://www.sxryk.cn/163ujxxvilq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163siaqfgpt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163orogeegr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163iogsqaav.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xpkdtpgw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xtfeolxr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163tciptafa.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163dozahklh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163vlwumogj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163pikjyvrp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163aolcajap.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163diobzkrz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163neldzezf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cmhribzu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zjeyridu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dmmvodbh.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hntrgjki.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mjwwgshk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bnxkbkgb.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163exekakjk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163pnkccsdz.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163vzrkeoni.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nczinleb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163efssemuk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ioaggaia.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163dnfvcasz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jbbkterv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ocebzpln.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qrygcylh.html


<!-- 参考信息 -->