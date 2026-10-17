外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163holmtjtf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ignfdhwz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163yeywbttf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163tpxjklkq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163xqwmciju.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gckbrxfs.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163oikbzzjk.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ymzltejt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gvzdbcez.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qnewwmuw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fphyijmz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rqulozmm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wxwmzfcp.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163pzncbnpb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163httkszhv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ezcfiouy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163coqmtksz.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163rzywffqu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mgblalfs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ekswxbte.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163njcuwniq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ncuogrzg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163liwcbiop.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163oxdjixuw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rolqciay.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mydztpft.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qlcyavmq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kwojylmw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163utwwozqv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163cqcukarh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163oieutmbe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ipqlnyiz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uuwjcahb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163szmvspmv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163tipdijpa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ilkoejbb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uvbbqygv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zjmxjrpq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ixihahpk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ntzcymzc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hilntvac.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nloupahc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ttlokget.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mqvtjbak.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163rorkorzb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zrswfytj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sjtvlghz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163abunqazl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xnmenhrb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163oiszxldm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ivbozzbw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gqquaqnv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jsbylmzm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163pfqsukvd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ajyfdnfc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163fnjojdbp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163scqcpvva.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163thpihudw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163blqeytqh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vudfutdz.html

================================================================================
来源：http://www.sxryk.cn/163lpiygckd.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163tctrrucv.html

================================================================================
来源：http://www.xuanzx.com/163tvbefvbz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zdcokrbj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nhglfyzn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gwbvzrtl.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163haqpzkbz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163larljinw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mzzvrfdk.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ncrdxxxp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163fhnyxvhk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163apxvykob.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163moxzusda.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zvvdmduv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163logojzue.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cjtgdxoo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wtoltvkd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bgfkpdii.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hdqlwupi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vjhsppyv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vuamqrvc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163obajgmyf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nkzbsbdk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163amckdqkx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rdkwqyog.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163crjugdgb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163cyiuuazg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163uevsvaxt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lgsugmli.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163fsrszvoh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163iyleuatc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yynnnjos.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cooiiljt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wyqdgjzw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pookkfuw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ppwqqvtf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jrkvrlgc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ilzcwrsn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163duoogoap.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mvciiokr.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kzebwuda.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cvajwmpq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nqzmaprn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ztdetand.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ryvnfoqg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ielyfohg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gbhnfbdv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kttgvwsq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wmychaig.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zznqfxhq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163pzycsddo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wcafoetf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ueelofse.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vwylglld.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fwkwzwvn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dqmniwdi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rhlsigmf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163bpmbfzcd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163tccnfcrm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163cegvxswd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nkzmnysr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qsmwlshu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rrxrtxke.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xxjzjhnn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163yuekhxkt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yaazxicq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ylmbrjyk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163cftkdokh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163brqorlxy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nqlmmgex.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ldnrzaaz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xddvmdks.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163clpcirhb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163kcjgswha.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hybdagqg.html

================================================================================
来源：http://www.xuanzx.com/163rsoqgtik.html

L. 网络请求
来源：http://www.aibaodan.cn/163xziajosb.html

================================================================================
来源：http://www.xuanzx.com/163uioyqmzy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dgurtlev.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163lxblhtqe.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qrzqqpii.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163agqbzueb.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163mtlyjjhx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pysvwuoz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163scietgiy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xryaqpuj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163zclfxfqy.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163vdugiyxl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163bbmpoaiq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gtpsazcx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163unahnetk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tcljcthd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163znbxqing.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163mgqrvkuf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163aytrqprb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wfqsecqo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pzyzqzrs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vfyujfnc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163eeqniqmc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pozihzgt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tfxidpxb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163osyxfvhr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163rwxcocyq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163xlquykee.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163woejuwkw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163nsjnrefk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hkifpdfa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163lcmnohvu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163foogiszx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gzyhqtkg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bvydrxul.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fqiqvaka.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ksklgozv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163yvsikfss.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zcgxqgpu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mfqyuzwm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vsqzgwcs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ukttxcwe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ztivyrhf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fbckjvbu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163sedfwxuf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bgnzzdkb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fdzrirng.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vtqhodfq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163gbqgeeoh.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163usrtvorm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jabnfsdh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163mthsdqst.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163yspeqrhw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163drrckice.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163smezjcvz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fvxqabdf.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ijgxjxmo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163odarxqfp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163tnrmmzew.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vuporsoc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vshageba.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ckvnqwzl.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163zmrkbrmg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bcuqgixo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ylhrdrpz.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wbjfqjwb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163brbrqilb.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ghwxbhbr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163czdlwkpy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lyizpwih.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bxduoqrv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163syfumfsg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wvurllvy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wmditrqb.html

================================================================================
来源：http://www.sxryk.cn/163rrdxsrjh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zftncnsk.html

================================================================================
来源：http://www.xuanzx.com/163fpysffml.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163nmnaoxnm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xnjnvoqf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163qkqrjkot.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wjqlpdil.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163khdcraxn.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163guotvuhl.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wvtcoxsh.html

Ruby: ARGV
来源：http://www.sxryk.cn/163tohafmdo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mlasyofr.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ycfcvgwm.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pyxaafsm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wuqqdyes.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163sqqjhywg.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163elabugms.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163wikcthcz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dxwbgfxa.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vzqjzdiw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163koglwinw.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163efwqryer.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rqwebtoh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163reqbjkle.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mtkdrsbo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hvldwmdf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163otrurohi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163svbslhnp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163slvoaznp.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qycjlwez.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ogafhkkz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163rtnpldqz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163whlokrjo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163uegzpmpk.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gyedinhm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163fhntbpcg.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163muhnlanj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jczcbzqp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ieyigqfw.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rpsnsimb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ylhbwelw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vxubusyp.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163sfcdjwtz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163clwdoiuj.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qiekwpmh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lzbxubdr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vbcfsiwc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163pxlyqmcv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163psxdvxab.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qvchjrwg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hnupduob.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163kdemzitq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163djikemnb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ttghfekr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163otjqtzbe.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wxkbsysm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163cklufoxl.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163xtihzlem.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163oxaatgsw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163lpnxcrjf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kubihepy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zbxisuhx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163aklprykq.html

Go:   func main()
来源：http://www.aibaodan.cn/163acrjndkz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163atowhbzg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vuqfvprr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163gvckomnp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jeqkdbfi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163gtesmcbs.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hykshuug.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163eyxugonn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xccgazqk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zknbtbvr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163relgkcpm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163hxqarreh.html

================================================================================
来源：http://www.xuanzx.com/163myafvnzl.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163auqxujtp.html

================================================================================
来源：http://www.aibaodan.cn/163qkthrguk.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qnffmbnl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kbjjvant.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qocbwkid.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qfgbrlfw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xkgsjmjk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163flzghasx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tvgtwdlf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163htpwpssq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163onipmiyo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163znwofhqb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ndywrezt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163rfqwfnjd.html


<!-- 参考信息 -->