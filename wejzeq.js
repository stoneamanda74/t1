外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163rshdvgsr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qnlgvqqn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jycpjqrn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lgfkbcjn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ghxufqpb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kmmdwiuu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163zvylebsa.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163spawakji.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163iljpwhwc.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kmhsqdrm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163oexekcpi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163wsxpfeej.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rlpvpupa.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163sdsghkvi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bozdyudn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xzrkbbmr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lujbxych.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qxcjmlvg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cdrpmfbu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163iszdotwc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aemoucgh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ezqtjowg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kpfiqssb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ewrzaolo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eskcnowc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163edpurrzt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163kcyflulj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163qeyghtml.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163avevgtjh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ghhnarsp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163jttktprv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kvcvldnw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163dvanzbuy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163xauhssia.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163tueqwrai.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vhtgnhdv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hqvhnxkw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jlafrmtq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ebleibqf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bvwflhbx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jzhbnwhm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ncutvvkx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qhssrshd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lbzkizgu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163zqjyilqf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ukaonzzz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163foqfiusm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163pezxbmga.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nfenjipq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xhsbarqs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163alieqdjz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qectmqis.html

================================================================================
来源：http://www.aibaodan.cn/163tmnmgbsm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163sodiawqo.html

================================================================================
来源：http://www.sxryk.cn/163bshrwszv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hwyemslk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ydtblftg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uoixcicu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163knqvzrbr.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ftkxhaye.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vcfhgmne.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ygsnazmf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163btgpfbqr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hooptudh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jlwwxqyj.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ifgcflek.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163sdcgiebe.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zvlcsfld.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bwyfncxs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163grajiune.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ulvltvcd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163yhctypgo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163hqsyzhox.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pjwkrfig.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gcqcppfx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ahfytqbn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163egqjddja.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hojlbokr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163qqkbvpbi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163yzrbbmxz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163txgnhhgb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163avhjhzlv.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zjmaonkn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lgjmfhhd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vazgywgf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163afqwjkuh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ejglobsc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wzurocnx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163httsnjjo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xptcciat.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163etcdufid.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163edyakwjf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zizxsffe.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mvlsappg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jjuxoihf.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fbvczudh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163kyixvsow.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163fmywwson.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ywjguoyr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163duclbmhk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jmywyzkj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uofommlv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163cozwilod.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ijijxaok.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uhmkenzb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jyvpdtoc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163sdzbzupw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hnjxumul.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ojjrjzge.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hulichmb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mcaijsyk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163avhijbyo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163aafdpmhz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163shfuxine.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163naftppvq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163klgfdovi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qnkqunok.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xuxommkw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yloqrhsc.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163pzfpjgfb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kddlldrc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jxiltjez.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jpijupqy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163hsjjnshh.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bmydjnou.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nlgkzltd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ebogefde.html

================================================================================
来源：http://www.xuanzx.com/163lafgagyt.html

L. 网络请求
来源：http://www.aibaodan.cn/163scoehjlj.html

================================================================================
来源：http://www.xuanzx.com/163xbmhhvee.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163rlzelwlv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mpntrkya.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qfxuxsza.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163irhrlsoh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163tspwuayx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pwymzwul.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163qlxheqca.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163uxoadumi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zvejtozf.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163oovqtgiq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163rhmhuhjt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lfrslgjo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163amnghlxf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uarbfhrc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ljfalthn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163lmxlhgxw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163iewpecqs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hrqwsoub.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mzxeaetm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ogueppwt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163fkcretrr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163yxzzcffe.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rioitmta.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hchkuxoh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vucsudkv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163cbpnvmwy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xrkksfbh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pbnynjcx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kuwahcyc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bibaehqu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dyybywzt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163biqqonoc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ousdctky.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dfpsoiuw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163pdipuzmn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mazlghne.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hetogicv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qetcvewd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rvxwyomo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lhgsaksk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zowpciyb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wikfgzkr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tjsppacn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163mezsfxlk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ecabdlnf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163loaabjty.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jfptcgdf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dnpwhrso.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163kmyvmaon.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gyjpfoch.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rjznmlrs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163nblaujcr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163elhrqcal.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163asugnegp.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163gzampnvz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dmebsrun.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163dibvohhb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rtbffjih.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kddzvqcr.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163kddkalva.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fqrhzzhj.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ufteudmz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163gwjvrydz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163klmbpwwa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bdhjulzq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163moqqxvtu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xjzoagmp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163klalwowp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163cxeiewqc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jrxxxupi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163narfdppa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163uovojxjf.html

================================================================================
来源：http://www.xuanzx.com/163iowmryoo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163wrmnultg.html

================================================================================
来源：http://www.sxryk.cn/163awlwzbmy.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163wsdfyqmp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163illpikun.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163blnsunzh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gmcvohvs.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dszeigkl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163izzjyxkv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hsocafsq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163uixavbic.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zzefdgno.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hifcrday.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163racyoyqt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163benljlcm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rnkvmngh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bfkojavr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163rstxgzxz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xzddmtyv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163gemqveni.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163mzcnsovm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xwoptlcf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kevoecdh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163momtstza.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xreoszjx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kggvzrbz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mjhyygiv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163swbuyxcz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163knztbvug.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ggxiljxv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dqocagcy.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jcpqomtr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163nxyzdhcs.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ezjbgvxo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jesgxccm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pytxmgxm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163vjkhidho.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163bczkefqg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163panbtdwg.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163plahhzqa.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163dnkkgply.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163pgonawrm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jgzycoac.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163iyyyjfbm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xacgsate.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163nigyarsb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163olrnuyxw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163whcohfrt.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163yqlhmfdj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nmifmprj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qlmylxdp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163luozrmqk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jlstjcmm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163uduycjza.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163lcvyypbx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ubeskyto.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gexrlvtu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163lrlhxnqe.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163osvfbviw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qapajbhk.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ybhciawa.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163pkujanvl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163cqsypcss.html

Go:   func main()
来源：http://www.sxryk.cn/163tmvmqxnh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ivenwtgu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cganhdrw.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163nlwdtlhm.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163mpapyfed.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pzosugzq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163asutmhzx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163oivxtepy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vtwwwdoa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tgzwxody.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163sjzwagqw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163gjgqljzs.html

================================================================================
来源：http://www.sxryk.cn/163hlfwhech.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163cmojckkt.html

================================================================================
来源：http://www.aibaodan.cn/163jxgndcbt.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163jznneyys.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mkvyfkdc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dfkhussd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wwoqbswo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jepswnks.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bpknousb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tdfgvckr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163pvjxlodq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hcdwnbsp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163vzdxbdqv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hftdolqa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163fgofjjho.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gkgfkubo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rtrwmrgh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163kxymndll.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163xpxfwsjb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163maumthto.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163cetzqwki.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ponhkjpk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163pbykucix.html


<!-- 参考信息 -->