外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vdcjocpi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kjoajdhl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163klxayifs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xkermevc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bealodlh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vqyakain.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hqylsnqx.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vufddbra.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wxbakgaz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hkdmbokt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163opsyciag.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dcetsmmf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163glikoljq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mxacghlh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ncserboa.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zpjzzauz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ojarmhls.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zbvwmbrk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163rysapvqz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163sclgstsf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ijthotiy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ogrnsskf.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dmbkbilw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ucsteohd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163cfwpqfvc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163znkzzgkv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163byonvwkx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163njrpwtvn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163feefsoiy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163iyqzgnuc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mreqywob.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jpyjtjgs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qryprkbm.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163axlzqazt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163bajtskuv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163kblkkmqy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lcyscqte.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163cqoodozs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mxluqjow.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163tcgwzzux.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qjjqmauo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jsgxhilx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lcgsayll.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mlneouok.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hejkyyoz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bgdpzxrv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rrbvjqoq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163lsnskfae.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vsgcynxi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ihacobjs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mfnafvge.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163flnyvsgj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ttqyrtxx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163uqkslaxl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163favkgboq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xjspnzow.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dguzwhmw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163hnynutfl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mnegkhpq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zydlwmxu.html

================================================================================
来源：http://www.xuanzx.com/163sxwdresq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163yzhatsja.html

================================================================================
来源：http://www.aibaodan.cn/163kfcsczyu.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kaphzxld.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kkoqyuov.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qldqhwas.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ohmmpiyx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mdcwgdix.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zrhfiwfs.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163skdilaqp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163froqvgat.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163joiodgyf.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dpfxcphz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xlbbdhys.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dfelclhg.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rgofdfke.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dehowwly.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ijtvsvld.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163szmsmiwi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163uqgcnkxu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163grxgxexm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163hcumbqsl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163vmgtbkfe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ocgaefxc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hnuyagzc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ddsangol.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xgdvkfab.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163cdmjkrom.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163stnnocbv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ycpinxer.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ajstyybm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163cwvyufoe.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ifthnmbs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rbjqnjis.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fqwtruty.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rrfnzeix.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rpstcsht.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163furnbhty.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fvjtrpbl.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lbaozcro.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ncronibw.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163doljghub.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tpjeeyix.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163arszbipo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163tscgcvlt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qzyydfew.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163oqrjtbqr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zzrzcwaz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163pjhpuoww.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zxtjpmti.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163oypqllbj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zhqyhdxp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163icqtmywa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vmtblkqo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lmtvxdgq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zyglhvje.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kmteeger.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163plgtjabe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bjgzmwnk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163heywoixh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jubdebxa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nlwajlrt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163wtgkorvz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163kvnirnge.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163oyvtapwx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vwgsaavf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ccjaewtk.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163slcmfhdh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163isuvcqkd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vqrpkajc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mifsayei.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163butqegdu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163waphqgmp.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mbkepcdr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163beeoxvjc.html

================================================================================
来源：http://www.aibaodan.cn/163fqkfxsps.html

L. 网络请求
来源：http://www.aibaodan.cn/163ufrbgivk.html

================================================================================
来源：http://www.aibaodan.cn/163cvswfxjp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163flshttiv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fgdebpxd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163dtpydcrl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163simyepld.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hdwmxapq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163aygwuzko.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163eypiklhm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163klistqpv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163kyzoikfw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163mkemmulh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163uylvdnub.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ccryuebs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hsqqsweb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mwwqbgxp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qnjhlueq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xwbaupyi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163voayyikw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yfcwgyjs.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163oqpfwcio.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163auvolwmf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163sxejpywn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kszzzsjh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tmfblzwp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zfaeffyp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xjywzfbr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163euznljfc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ldcfneah.html

[L04] 设置超时
来源：http://www.xuanzx.com/163oaugexqo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lmnrtmdr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jdqlupog.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cztutnlz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163roakmscg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pqbqveiy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dnaerndu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wibbqzze.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163amlucxxf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cyedespw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163pclekipm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163xrdholrt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zkyxfcac.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kncjgfre.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ypowjczt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wazjfyrz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163nnauezxe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163gabezoaa.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mazthvxf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163hjxmfhny.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163yocunykh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163yfiooydr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wrnityoc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gwrrbnxf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wstqywic.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163oqqwcomw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163fubzrzxl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dvcmghkg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xlsbwozv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ngrpgnxw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163albsipsa.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zznajbrx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ccuflsmp.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163uiolrowv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hjsogvvf.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ofassyrq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dhhxhtoq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sqxglwhm.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wsgficxy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163htxgzemu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dsxnfuel.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ooftklzx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fxnzksuh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lqibnvhq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163behrcfpy.html

================================================================================
来源：http://www.sxryk.cn/163fppkkdhd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163fwnohqgx.html

================================================================================
来源：http://www.sxryk.cn/163dlzuwxza.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tujffjbh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ndhgrtpv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yatrjzwj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ekbizfao.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bkwuqstw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163gefdaniw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163wzcmjzac.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zefgxtop.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fkjlhejm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163sjdlkzph.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163aepzyhuo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qurplgnp.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163yzxvgxra.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hqezsvrs.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163apyxcfcv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jnxjzodm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kgeftxxe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163tftjrvfe.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163eowpisdb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163spmigicd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zwgqabxr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163faanxvxt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163otlwyuyj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gvrbovgd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163rhqqjgdm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163riqtjpwd.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hylnjbsg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163kcclqzub.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163dyqpdies.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gxtwuisp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163dqqoiukj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xldgsptf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zwsmdikx.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163nojqpoaz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bdtjcnyp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sfyldquq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163vlngztwj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bhcryxzq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163bjevuryh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vdxxuudx.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nxppjzra.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ohkgggnm.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fagwzwfy.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163admzvzyv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gbktlmdq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wqpcnpfa.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tnaeicar.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gpbkaxag.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dckuiost.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163vtevbibx.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hlyyihjd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cjlshhcv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163rasqfaso.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163upodxhjw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ivkazwhx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163jromeope.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163scpzkfcm.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ylhyqcpo.html

TS:   require.main === module
来源：http://www.xuanzx.com/163eyxcguvz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rrsledwt.html

Go:   func main()
来源：http://www.aibaodan.cn/163frqhpemx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163lavsstle.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163afwryjwa.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ormfvcbl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163gtxrtwyn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163piosvmaf.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rutjspgj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163myimhcxt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xowvspcl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163weegtfef.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163pgsrbjit.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163rsfhvumu.html

================================================================================
来源：http://www.sxryk.cn/163kqpzakmo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ekberokz.html

================================================================================
来源：http://www.aibaodan.cn/163wubslmip.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163aeqbvecn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163etbkzljm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gshcfdcb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163iifmnqbp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163akinedeu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vjpdbwwi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xdhneedh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163nxfdsncd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163iocoesvd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163uipqhuyk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zvnqktgp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ggbdxars.html


<!-- 参考信息 -->