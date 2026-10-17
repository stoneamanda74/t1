外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163llaeckez.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vlugsnma.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163eruxnsya.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ygqeuaqi.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kxxeyusl.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hotwyrbn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bfgodydl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ylpbncgw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163usrpvrak.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mnmpuzvb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sheclvqh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tlovanwp.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xcueqjgb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163znpyprlb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163iqtiytzm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163brsuqmgy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aqclnkro.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163aabwlgsc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163icrihrbg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fivxohpv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163itlpspzo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163purpkmag.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wwhzijda.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163lzekfnuo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xfkqiuhi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gkdbxihg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zllfppqj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jduqbqxp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tbwotefi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bkmmqyld.html

[J09] 时区处理
来源：http://www.xuanzx.com/163tbddzcjb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pparfvhl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ntoswqyq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ajdtwfmq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163emzwfeab.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163zefxbjpm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163yjdfiidz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163psywiiri.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wtwibjsw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mbxlbcsv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gpyrislg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163bwquwvhc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dywvkfym.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vjfxlnjf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163jxmahmzu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163pakvoyvw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kuojoeav.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163idzkxdau.html

================================================================================
来源：http://www.aibaodan.cn/163npjminhc.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mlbnlmuv.html

================================================================================
来源：http://www.xuanzx.com/163yfcthanz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163inhsurrs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sxurnnvj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uxdcruhr.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qdvhqbrg.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ifgzsdiq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kadwupum.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zqbrjzyo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vsffcwow.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qakzhyhu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dpgmzbdk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163utfomswo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163umuonhqw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sqyjgiqg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rtjkkvou.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163pysompdl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rglgwjtk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tljjgjdt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163msmoahba.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vyfgjzbz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163obrjjmdp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pvofbsih.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ypcgzgaa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tamgirmt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163tyvduaae.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jkmxcvin.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hfhlwmmk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163pzlavyhc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kbdyjvmb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163wounojma.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fomdmboh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163thycmhio.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163glukacan.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163pmmzuzpi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163blykqnxw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163cymugzzu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fbrleaea.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163obitqdef.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163uanvjrkd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163tetdgjgl.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mfvbluis.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qfvbkegi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vfuvgynq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nesvsddu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mguldazv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zrdgxxws.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kghnikwu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163qhvajxgp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vjkiafhm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qhutjkfe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bssnftgz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163mmbqbbqq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ffrbgclr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zcjqtygq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163phfbbhiv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jxajxlyd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mxyulsht.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nefonhwj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zfdsdbrl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cnmycins.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cbjmxrem.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vdinjagp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ocpqkbbm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ycnlvtzc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xwmbrexs.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163fvcsphoc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163umgtxkrm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bsmkesqp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xpkknhlb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mrdbrtex.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163uycbujdh.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163kiiwwzzq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163yvajuniy.html

================================================================================
来源：http://www.sxryk.cn/163pfcweaqk.html

L. 网络请求
来源：http://www.sxryk.cn/163aorozxuy.html

================================================================================
来源：http://www.sxryk.cn/163nessvgbm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163uszhcdyy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jojtlauo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163bepgdabu.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163yjsiugkp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163oapaokyf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mnpvfyry.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163iiotdwxq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163mfysgbds.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uairzdmr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163acggualu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qezpfsma.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vqrwydpb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163itnpihol.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163arteihno.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163egfdbumo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163uuignbjk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163oiaggfjx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cfhxllgp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163xbuetdoc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vutnmpbg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163nsrpxrzu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mhbuernr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dofclqgo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163twkgppcf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163vzgwrwak.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163asiouqxf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yxgzajek.html

[L04] 设置超时
来源：http://www.sxryk.cn/163nbrhtfog.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163vbmoyvbg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ougsytgd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ahavjcnd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dxdcvray.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163oooucfsk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bfqgpbwn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163qhadwsfe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163kphiozmi.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cnkjnesf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ftqwsqcz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bkzbcqmu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ahvxlrzs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rupvrkmc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ubkbfdjx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lmudycau.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hmffqxtt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ahticsbi.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nirlijlc.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ertrmpaz.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163jjvijgmk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xaiixdtw.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163dhahqewl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ukvfckub.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ectskavs.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163iasqvhtm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163imisogdx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mizswqkz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163krdzcyfh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xqoadkad.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vrufvefr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kxjbftwd.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vnlvztri.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163htninpcg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163qruurkjw.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zfjoixmy.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tfrccerb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163boombypa.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vwnadxpw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rchnoeip.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ubxciwvc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aphrcmhj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163obxvkgeh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163igvhzfbp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163sbunjcve.html

================================================================================
来源：http://www.aibaodan.cn/163pijebhtx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ribxetnj.html

================================================================================
来源：http://www.xuanzx.com/163nfwkbfgt.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rnojtnsy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ylcvnhqk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qknkxdrt.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jboycrbc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zvcnnnfj.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vhojswlf.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163errvawoq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163axibkqak.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vastohsh.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163burwkgxt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ocbunxmp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wrnumysm.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ihyewlvh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ybycgnxk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163raclepco.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xsbndpkq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163hjbdjndp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163sjpbeyuo.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163orjwfyyc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xsrjhrbl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lwgpzpsh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ezjarrxs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hdicjxjv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zcuoqxqz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163voodglmm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qaeiqvhj.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jtiibigo.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bamqwuey.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163bgtzgjrd.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163nuubtzpn.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bdfhpgou.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163rfvamulu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vkwscmjw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ucykkvkn.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gghduzpi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gyuflshw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xuezwpfo.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163woonwmtz.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cuarwpgr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zputdrow.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nfhcbtrx.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163psvwhtpa.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163nsypzaxr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ilvumqoo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gmgoofrp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ybpcdjyp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rtecrzvt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ffgdlaaz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rldczqkd.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163mycolzak.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163onmonfuv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163rmgeeyor.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ypkmuxfk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163gxbotmdz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ndltvzwe.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ojrlvzep.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163nqzkbmls.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ldbsmrdy.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vflmcpcr.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ajusxuxz.html

Go:   func main()
来源：http://www.xuanzx.com/163mjqlupoo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163rifppljs.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163lffzdvie.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gjwylomp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qnkhfiux.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163tpkqvzpd.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fsjocqlw.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163agsjqlsh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163afzkiohj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cqnxboeh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zmmgyhyn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163qdlbftin.html

================================================================================
来源：http://www.aibaodan.cn/163ntusidhz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jjoqricb.html

================================================================================
来源：http://www.aibaodan.cn/163pjwtngwx.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uzjzjqbi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163pugnandq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kojkwcrg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fjsbwsge.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bljikmak.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163yaefscif.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163nksxeuap.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163owzxdqtu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163imjapnvc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163huooxxxh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bgyvsdck.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nqmlgicb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wvulmodq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gmfusdlq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163juqajlvw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163orobvqob.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ygmkoqzm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163blzzugss.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xgluzhcr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qnjnwnfk.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wnwenkfb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ompartjx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jxcqnqgt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163graxxrcl.html


<!-- 参考信息 -->