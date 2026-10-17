外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ewfgpvxx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zpjbdpit.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lqtcdqwv.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163pzvcptyf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ggigyaev.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163madsyzav.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mwtijmdx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163eweamiya.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163pwekzwxe.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ndtsexsz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rqynxcij.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163fzwptvhb.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163wyqwugrz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nwqppsww.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ihiyeakv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qgowwtyt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dezxlpkl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nrcvjcny.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163plxetpsp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163apnwlcrm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zvpxxaoe.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dqczrisc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163itaiuerh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sbwfprrv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mbpednyc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163obddazuu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gaccambq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163knbixcwc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xahkhnhp.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163juoxtifi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ybrkvcpe.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ezuwzrdr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163nkodagja.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lzegtjcp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163kywxyluw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163bhegwwdm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ntjucuni.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gwfcstor.html

[J09] 时区处理
来源：http://www.xuanzx.com/163aofrxzka.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163nmmpnnap.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tlfxydoe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qtwncmam.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nhzodqxo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bvheylyd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163raxkkkzd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163welykkkn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163solbqkxm.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163yirjqulf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gfqqhrri.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fcgctsxq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kytywhon.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vygqqofa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163jtlijung.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dkywizki.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lkqkwyvc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gzdohnmf.html

================================================================================
来源：http://www.sxryk.cn/163npmglntj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rcuszjla.html

================================================================================
来源：http://www.xuanzx.com/163anqcquzv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163xrnujnqs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163spfqusqo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163frisjcmj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jgfiinxr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vwulkqfd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163finodvce.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yotwdyut.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nvhqmrtb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bspdjmin.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xqwnldoi.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zmoodxvu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163mgkzbkpu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mhoktivb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kxesyqlr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163llpmmwoh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xklghqey.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ppcylrhx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uqzlwkew.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ndmzslqw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163mzkkkfeb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tpwexmgf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rnbghabh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rcmwrlde.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vdguhemk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163odslzcof.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163edpcpeff.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163nzxfutph.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163asnywjdp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gubqburz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dtqzozqm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xjltyxfs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qcdydusn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163nzxcagpf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pmfzcacv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dhpxxbzh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jkauexdr.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163cglniwne.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ywtpghop.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xfcbvbrk.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163csjzdmst.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ennactir.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kxjopyxe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163arwdjjlf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163habpkndi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jrkafmjg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xnpmtxmu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jebqbgti.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qybrmiwg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nbniiqrb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163azhyxwsh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vcppxrso.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163bioomxtf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163nnlsarxp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ompalfoi.html

[K07] 进制转换
来源：http://www.sxryk.cn/163eutylbww.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wrvqchki.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yzaegjng.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163exslfnzt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xqczvejp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163raqyfnpq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163tedownug.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163cfyylkfk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163liufjalm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163uahqjqow.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163whujnjkc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163iqcwszvr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uapzzkin.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cztzavip.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163csmrehqi.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zqapzkst.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vjokiwqu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163kcobhbbc.html

================================================================================
来源：http://www.aibaodan.cn/163sivpyted.html

L. 网络请求
来源：http://www.aibaodan.cn/163iwhkzywk.html

================================================================================
来源：http://www.xuanzx.com/163biovodyf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163gxqpyjnx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163omilrjaa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uvloryxj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163eppcavos.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163plclkxvl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jsxrcgvz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163apbwqdkr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xmrgigri.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163axjsyswb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163quemccmi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vopjrvlq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163gvmhzfmb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vwztjjps.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wdgqslvl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163cvirgjtl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163asvwgapj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lrtzvorv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kbvnvvyv.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163itorenpt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163fvfwfian.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ixssendt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ibqvqmdg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zsodoagk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163erfmbxjh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163prrganlr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163carhljwn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163soldizck.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vmejfnvn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163icinolab.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zyvmlpqx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ekecyxvn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xeqvycdz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pfeihxrb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zxxwvrko.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gpeulgyf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mvuhdgtg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163hioruftf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qmymbgdw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ykaoewqh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xqijwbfp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wxtfjmxh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163stideoni.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163wkxbnpjb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mfpgebgo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tzshpunf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163iqgwtrvg.html

Py:   resp.json()
来源：http://www.xuanzx.com/163upenmnad.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163suedqdrw.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163upreosun.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163mdartdub.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dlehehno.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163fzvvobge.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163mxovyobn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ndcxsgfg.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wifjhtzx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163lkmixbcw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163fughxlwp.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tyceiuhu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163erebpfcu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ckjjwbic.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163exyqaosr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163eufoekia.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163trdobarw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163gpiclnde.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163yapcqtua.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wxsasjlj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pjdxhunm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rtowhywc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jbrkfudd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jiyfiwjq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ysnbvnoo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163nvpgglht.html

================================================================================
来源：http://www.aibaodan.cn/163uzwvejzw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163hdaiarcr.html

================================================================================
来源：http://www.xuanzx.com/163swyuuheb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hwehadyt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163oytyvelg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tpwjvkmk.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vtyutjtz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iookksim.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163scatpuqb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ibvubsgw.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rtcuzyrg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gmwfzqba.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163jclqvyhz.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ubjnplfe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163odmhhkqx.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rxdumcoq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xygjvwac.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163oeyxtikr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163fynksiis.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gwchfhtx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163wlksgbwb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mhlcpgjx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xjysafwj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163nadbvsxw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dhxbuwmk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163infznjvh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163joaptvdr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nfltzfbf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zcigimrz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163msqhmauh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qdvrhjlo.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lmozcuyq.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163vxynygvm.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163lfoffmqy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163legmbpzc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ukkztslo.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163fmhtipdq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163xrabbnzu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163bbkhsycj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ihzjsjch.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163fjbzgthd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163fmmfotqv.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163yrnnlnjb.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163uaglrogy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vdbfckpe.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163igtveyxg.html

Ruby: exit 1
来源：http://www.xuanzx.com/163pwwyuxok.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163fsdedvxz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163duktftot.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163knwbuqmj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ldvjfiax.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gyvirkwt.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pzrgrvxu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gnifdesp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163yolgttug.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dglxqwrz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163hrglnlti.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ohehqenr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kwgpymxp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ahkettrk.html

JS:   require.main === module
来源：http://www.xuanzx.com/163colraaos.html

TS:   require.main === module
来源：http://www.xuanzx.com/163kuwvyrvv.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163sivyigiw.html

Go:   func main()
来源：http://www.sxryk.cn/163bffuxltm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163iatulzdu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163erqmmbck.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rcbprutw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rxfljgvb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pbhesxbz.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xylkpdym.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cpyghjei.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163juhqkycs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rchuhbym.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ukyppptz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ejiokdkd.html

================================================================================
来源：http://www.xuanzx.com/163jsmhjkcd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ghzebrax.html

================================================================================
来源：http://www.xuanzx.com/163hiumavwq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gsavkdzy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163istmdlug.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ggrllxql.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163glzimiuf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qpzcavlw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163dwncpcfl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163btznccxi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163chslkuhp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163eivgyeyt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zngnansb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yyfnqrkp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163uiebnzvu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163iyjsawkl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cybllzsz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163pjnwozgh.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163cedytypx.html


<!-- 参考信息 -->