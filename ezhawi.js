外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xsdmyjof.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kpjaxgfg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dlxbxorm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vicyxfzz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163bdhkoeze.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ckghnlyw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ppiabkma.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hcuvnisx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163gmqnnhcm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ivztunmw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163daoeedpf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rjvaevqt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ohrigyhy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xvazsbhx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wwvecvri.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163mhedodqi.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hoyycxhx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iewrrmti.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163oaysztfx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jjgchlei.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zkcaeopb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163euynfzcv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163sngiauqa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ziofyquv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xevygyhf.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ahrfadhq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fpzenyqo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ucaeolsi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hiqjldkf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163opglfwgi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163cxusxitt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163thrwsixl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163rwlbruqw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163alpmagra.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163kfbjutxk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nqkwkncm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ujltedsj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163sbiwzlxn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mrxkgmru.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wmewfspj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163emthgauu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163uobclsth.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163otsejbeo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163txdzlkqo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hrhwhgtc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163khtahlcw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ytcuzccm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163tnhiivkx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163lisnaebz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163cdlgaild.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hbxceseq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hmuvskwj.html

================================================================================
来源：http://www.sxryk.cn/163qmmyzsuy.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mdopfdjt.html

================================================================================
来源：http://www.xuanzx.com/163cxrdunpj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lodkxbss.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qiojtvan.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jyviyduv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jzpvlfkk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163krjwjfva.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mdvvnikx.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163clkreldo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163lwefugeh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xsvdnkjq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163dhehggqa.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ttghjsza.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163vmvrpcvp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bouhulne.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uegotqqo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163exinvnlt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yfanhtdf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163cxntzktp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163njalifgs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fvwtxcjx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tfkxshuu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cvrwiqpy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kmitnjpd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eqkytwfy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ojyataqd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jjzcwvwj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163blpvhrzr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xjxyckhy.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mtedwkth.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wwftahir.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ipfnrngq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kqllreuz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hkcojclj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163vybqjjmw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yudnorvx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qaelltxk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163kgcprnkl.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xrdugbvx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163kcrocseb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nbsvwsgt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fkayrley.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163udwpchxg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163bjzqmmkd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163twttnodn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163irfthnja.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163azmkjlec.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mcyplweu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163toguctpa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ejucgtkk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ykegwlwi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ocexltjr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163aueqyoxv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163yhkbufys.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163onhdidam.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ymulpakp.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vqwxknqq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163eptqmknn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fkxxylrw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163updexruc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163whbeydqr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jlkjkcds.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qbdybgjt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163sfbqzbfo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wkqxyehy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rsozfzqi.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163rsxyqgfj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163myonzngr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ptjecdiw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tpdyinty.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163szpzfwlf.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qfgnopwp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ssiufodb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163iuofavxu.html

================================================================================
来源：http://www.aibaodan.cn/163lqwwvcvp.html

L. 网络请求
来源：http://www.sxryk.cn/163htfpogoo.html

================================================================================
来源：http://www.aibaodan.cn/163hvkuvszm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163bfocauui.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163oyhihios.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163evdtpdww.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ijbkpqwa.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gihpxrbb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163nexyixyl.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163uofpmmja.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vchfgnvi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163cniuevso.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163unyobfkg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vvcvstth.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ggzssygw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wtzagffg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jfpmagrm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163pmencsfz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jpdkaoim.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163fbtjgcqi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163aqoxcvsj.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163vjhzjnbz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rvvqyfyl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163aeiybjea.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sroprsji.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ufhaebzt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zwfqzliq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ssjngqwt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163anofpxvx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dwbedhck.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bpsecqcw.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163uaqqgdka.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163mzscvanm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ebxnzccw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mhfiwlgy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163adntftrd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ydmqiqwi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wiszbrdl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hilxjpyn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qcdljkng.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163xcufdppk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163fnfewebv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163isjgaiws.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163azehfnmv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163yjfzenrb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mbavtrrm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163cucpxbcq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gplynmcw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163azcaycxk.html

Py:   resp.json()
来源：http://www.sxryk.cn/163nnzmuxpt.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qdgosrkk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163asanrewy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163boingmxu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jixhbfqf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163pibsjgzb.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vwiplnak.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163cfcwzkbg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163uawvavzc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nuijkurf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163btbuqhxv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163uaxuxdpn.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ubbnhfdr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jlodqram.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163utzdudax.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163reqvcurd.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ygqmrgoi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163estktjrk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gmfkzqhp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dkwdwqeg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bpmhubli.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kmdyvmkm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163nfkudpde.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163mgclnuvr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qxbcwtmw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163yblqhwth.html

================================================================================
来源：http://www.aibaodan.cn/163cclnwgas.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163oyzvyeak.html

================================================================================
来源：http://www.xuanzx.com/163yayjzcev.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qnmxbmcm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mxnxkjyy.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163czsjixdc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163chirpwbq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pnmspkuk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jlqsmgra.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hweblckz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163yunlqtqe.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163njswzgya.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fxjcpdmy.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jakbaslv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rlbcaunz.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163svyiiirx.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nencnhzs.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dotcshpv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xlwfwvyf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163fpzoizcl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zftsfoqz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163adtirktn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163sjmihnjf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163grmkbecd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rpjjchim.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uxpcwhhm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vwvnlsqq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ochknjjz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qxformty.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163syiejpoa.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163yosfgplw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163hpyzycgt.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163tlxetzxq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ycjzppip.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fudcfupt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163yjcpxahg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163kkwropor.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mskbtbjf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163icgblucu.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xudivnxl.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ahlprikg.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bicygvve.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wgnjvvwu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163jgpyierp.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163hxjwekfd.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163tlwwwtco.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tizagvop.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xkqfhbbu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hqxmwama.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163iwmgcotb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nsgflzqy.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163sjbizmip.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163sepkhnrq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163vuhmzcur.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qamrztap.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163vydzhbtj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pvgqmqyj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pnxqxups.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163apsjpude.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zqpdwwzu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dcckyqiv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163uxqcatjy.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pvblerio.html

Go:   func main()
来源：http://www.xuanzx.com/163pqtqjapo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163uxyygeyc.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vftycwjh.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ackcjess.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163vkzqqxgu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163wbxbmwtg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sozfqgyo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163coivlsio.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ssdummkj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163czywtili.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163odosacgt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163hhunwbrx.html

================================================================================
来源：http://www.aibaodan.cn/163jnptqpoi.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163gglcnsqc.html

================================================================================
来源：http://www.sxryk.cn/163elnlsrel.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163dwwbmlkc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yvxlzgve.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ymfaktzw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cnyhkljj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jqprsjyv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163twxypiwq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rgrgvdmf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163elbbchtz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qwgmxdve.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163oospaijr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jneiynti.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163elmxwpqf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sbqzconb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ieubdhci.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ezvadycv.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163yamtefjs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cozixibo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163stoayirb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wunquqtm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163nrmtridh.html


<!-- 参考信息 -->