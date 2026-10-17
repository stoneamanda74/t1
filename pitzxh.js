外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mobxclkw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jprjnxgb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163zsovxtyb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163titkiime.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163zykyraya.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pmynonbn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163poyhwigh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163xyjtkxle.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xxwedqpp.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nroamftf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gibzvrbn.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rkaqpumz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ydalgnvq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vguceukp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gkgdpiqs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163gstogpjs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cmqeibcd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163jqflotbm.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cpyxarur.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163miggqadn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163eaorguwd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qlknwsbg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ffnvrzbr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zjfsruyi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zmoplxhd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ffqhhsqw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163udnshtpj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ekscffkx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gdchtoxx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kuteycwq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163qeteawoy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lnxdjxbl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mmivdjkd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mcrzowae.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vaevdgbg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163smqluzls.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163gjuynbsr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fyhxeniv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163vprtndoj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kwthkuvi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163eojipzro.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dorzvyfu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ncsbyvtz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gdpiqejb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163aelywnjp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gjcflwzh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163uzmxbjgv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tgjrzdak.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163jflfqrho.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163whkgzfyo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pssbtfpg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rzkuddck.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163sqvvdznp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qurfvogw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ftjphioi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163oizrtqes.html

================================================================================
来源：http://www.xuanzx.com/163dqdittgd.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hgoadxyh.html

================================================================================
来源：http://www.aibaodan.cn/163toszexyq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gepilpwu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ewmxzbaw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jljqzots.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uiohvjif.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dzstkabx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dsnvakbg.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cvozeewn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163sxpndvem.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ppkwqfig.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cdoduizc.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kmurzsam.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pxahbnpm.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163frjdkkxw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zeuvymht.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163silfoxyi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ijhfusvj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163zdeshjhc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163pixtafzj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163vmbflpka.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163awjkbami.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bqndsoup.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mevygpvz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eqhooktn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ilifzews.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lpevmhfv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163joygalmo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hnqoshnm.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163owaozeei.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zcvnblni.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163masomooo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jyzjxikz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wpmzhxgj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lpnjtseo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gqdjiwtl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163aelepnwk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163mfajhxut.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rcaruvpb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163cdvnzmbi.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gugslrqt.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vvkvwvpa.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gdefhzfo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163mnzyctdg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gdknrsun.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163sfdldomk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163lvfkzwdc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ulxqmfud.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ckkeculk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163rlrfqsci.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jejjgwcf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fuurxxiy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163viuichbz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ryhxptik.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zgympzcs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vrrtdoqt.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wuikznzf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163bauqjuba.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163rpemcabg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yfwlsccn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qrrorkty.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163eltweazc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wlpfufey.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163cvwbabuo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163gfhrmuqb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163btacmise.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bjcigdcl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163acuzjxbs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mwiywbuf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163scrociss.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163yuxxarkw.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zkmxoywl.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rjqlditd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qdiwtnsg.html

================================================================================
来源：http://www.aibaodan.cn/163nsugypfn.html

L. 网络请求
来源：http://www.sxryk.cn/163rkkzvjks.html

================================================================================
来源：http://www.aibaodan.cn/163elopwusc.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163lquajtro.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163cuzuzbhx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vsvhqnic.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163kijzgguh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163awulqsxg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tjtvujhd.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163xjuqmjqf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ujgjuvwa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cfsnokij.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163yepstncr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163xnztyasp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163phlkydoo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jfhpewjk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163elruiqkg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163uykammdf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163zvlekwol.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vaqbipac.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ceeiqzwm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163frzdsrmc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163aqitpldi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163najskkgu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ejpudiuq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163emlzrjlo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163lfkjykkl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163qanslnas.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163jcdlgysw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hunnjjnl.html

[L04] 设置超时
来源：http://www.sxryk.cn/163zumteqpn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qoxdmntf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163blvxkoee.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bqybfuxx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163acdoakxv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pvukqzcd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nfvzhmas.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wwbnjlhf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163lcvwkyqn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163mseliawu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163hokpnsuh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163zvdqzpja.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nmkkcrop.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tpokhfoi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163dfwzyxqv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zczposrm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163aogshkts.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xemmhaja.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hhlukibk.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163oqcgvvwd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163misvinqp.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163taxvcqqj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hpbmnqlp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vhvhetcx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zdjuqsct.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163eabvejjt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hocecqbs.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163icfbyetf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ziyugujv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hcodimbj.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tzchmuyp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ubldjqri.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dshdjvar.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ytxpzycb.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xybjkkwh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163jgulyvrb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ebrrpxjh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hfvmdybe.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kyjklvbm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qptjhktn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mlfpjgrg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163opyvvreu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163voilihzg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lsowpmbt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kbxosbnj.html

================================================================================
来源：http://www.sxryk.cn/163rgzdgqxr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163yhcjgube.html

================================================================================
来源：http://www.aibaodan.cn/163jsewczrl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ealtvtzc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mogwjlcd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wvlzsgvk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163emfuwyux.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rsmkiuxe.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ngiqgnvn.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bzuaiwwn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qjgtwoaj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ceykqawr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163dlvniztc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163peuhxocj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vggrrkex.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163tjvaehxq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163anoaylaf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163fngytkrj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163crswzguf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ydxqqgnp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163pkrheubz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163libytdkw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163dgmemvfl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lugtinsb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163butmicmi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ktodytxe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163yfyqwlsa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wtwqvohw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163nwzfebif.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163flbuxiwf.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163qjtwjrtg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kkglpdtb.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163cehknxka.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bmgqlkke.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163enqfooqp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163cadkkikr.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163kcuhcixa.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163msxfxjbc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163zflkksqa.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ymnmouqg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163npnfodsf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163prqeoclc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163siiykugx.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163lllxnkal.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tiismkel.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lfcvcwaw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xxyyzzte.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163uiwkqply.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ufkqqzjq.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163chuqskdu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163slozmltm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163yulofgmb.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163wfrlleki.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hwncnbdz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163idbwhewx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ebljapfc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163dvjqpanw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zpxxplmk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hvclzrrx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163aeoeiiqg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ybphpcoa.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vdowkkrn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fjktfekg.html

Go:   func main()
来源：http://www.sxryk.cn/163hmhldenk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163uyxijseg.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163leejtkpu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xjfsyfuu.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163obgzkpov.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163omabhddu.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xuasalnp.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vskzhqyc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163uoycwyxi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bxmdruci.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163jodtmssw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jppvqtrp.html

================================================================================
来源：http://www.sxryk.cn/163wyrrbewr.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fdifjtws.html

================================================================================
来源：http://www.aibaodan.cn/163idffgnpk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163xdzpdhfp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qdcuxvpv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hvuahjct.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hjucnxod.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zrqvgcea.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163nfhzoouo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rlwlridr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163cynimzfe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163dkkztics.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jdhkrbhx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rzrzbbdl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wbfaslum.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sqvkdzcn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163muudvwdp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dqixjidy.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dstcydoe.html


<!-- 参考信息 -->