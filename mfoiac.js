外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tzgtrmig.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ukmuqmaq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qworaedg.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qldgtxkl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163oowxrrwa.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163afztvyyh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zuwtjyqb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163noqqzggf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163dxfibsvk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163eblrmols.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qussqkac.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163dxsbqjtw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tiiiqink.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163inrjjhxq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rgiozzae.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qtsgfeyg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163oywuazrx.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ydacpwkh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163jmbacfue.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dmhcvuwv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ohluymih.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gewimsru.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ibyveekh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163yawnnnof.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bgkrrvfk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ixxlalee.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163plgdayys.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zrebzvny.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cxxeaphq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tgjcnpee.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wlnxskzm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dtydoium.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qpgwlqou.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163lanagqyq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163atsengbe.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zemoqnpm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ufjdgwst.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kdwavokw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163nfzbljev.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ecohokcf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xwfhgzks.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zsouuyju.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163aavbndud.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ovoiyeil.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163itmuvoef.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iyeagort.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vhxbzbee.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pimjmxln.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rxwrtbzm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163jijpzsuj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ghvtwkep.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163spnqlcxd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163knzynkms.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163iwhizowo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163gwxkweah.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163etejvhnl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bcucamlh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163npbhcsfa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163hwrndrri.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163prpyasio.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163iyllxpde.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163tchhxtmc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nqawacbx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163befpbeyn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163aneljgdh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163agdoalsj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hgzifwzn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pxsucapu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ojinbhyw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qytuvyfh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xdvdojjw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fcdywcrk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jipgcsbo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163wnnribem.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163flgikvnw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cfnfqfst.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163duspfair.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cyarnemb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zsghtlnc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kogzuqfr.html

================================================================================
来源：http://www.xuanzx.com/163pfkfcrhg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163uifvmjip.html

================================================================================
来源：http://www.xuanzx.com/163isocmfte.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kdahygdl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jjsfezrc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163imvdrvzt.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wyiatgmm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tajxhnib.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ifgvmzge.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jlvipvko.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pchuatqh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ncqmubzy.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xptrljzz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vekckncj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jwmlvpqw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cpdbccnn.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rufezkvf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qmuseejb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kwdrkxtb.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163bgrznphu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163nopoakkz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163syjcofpe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163kdeigixj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ekpfqlyw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bgrnglap.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lljijqfl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163uvgqjpsv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ifuluwhp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xghknloz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163smwgjzyi.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pkmbmxfu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qpzeikzp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ekdlsdxr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ijxrktqq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163iotmgowj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jkjblbbe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wadtkqyp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kcxxfkta.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vfepkexa.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vjmrtcmt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163yfwqvjnv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zngzmlmz.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rxbfmajq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163umfmvjii.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163frvvwchi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163sexxhsff.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jyxcmacv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tocarftc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xrehibuw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sztynyxu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fxypshhr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dxgwdbfv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kczrayzt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163kgktgqda.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163cqylwngt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163efbeezvz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hlohpyqr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163offewzxe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163odkfbavj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jjdhtgsf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hvlafzzh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gcinzkgp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163givgnmii.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jnamfpsz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163pooropvd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kzeibuor.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xuiuqhno.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163znterzjj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163yvzlwlqp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gbrordbz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163phuyqdxf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163pmsrapqm.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163efpuntoq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bnrgzkxv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qcrqbvbt.html

================================================================================
来源：http://www.sxryk.cn/163jdzpkctz.html

L. 网络请求
来源：http://www.sxryk.cn/163efghbgeq.html

================================================================================
来源：http://www.xuanzx.com/163sshyswax.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vkllennz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163cmtlyzuv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163xmblwqcc.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ncgexald.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xqkdspsu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kuhcgtzr.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163mlsjoyxe.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vivyimjf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qnexfaio.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163befaimob.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ywnlsiqd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163antrqtnj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cdimrdrz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lpbrdwgk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ddfiydff.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163enrvqdnx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163edmxrbfj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163azylgfni.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zpnozrtu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vskiifjo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ktcxqvvm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gesqqkld.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nxllbyvo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163mkqlqpse.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163dibzsqnu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163esvycgfq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163urtzkfmz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jplkkngf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xoukhepk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163idcbjrer.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163reoxxcoe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ibrutjxe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xaozfses.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163dgnmxnqb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mlkgtopz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fzzigpxw.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fjcnbmsk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163htwvbcaa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163crlkhick.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163afmmugpq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xrnbapwf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zzuqdmix.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163unfoxcul.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163cqcccdwe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163lssdrvxw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163knvhsxdi.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163pqzwgfuq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163niipxbey.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163qmbstcwt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163twlfbjzi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163urevlxuo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cenzzuir.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ngizmxjb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163rwegiigf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ddbhddyk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163pyoqlcxl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ynirmfuj.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kfqvrcbr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yedyelfb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163jgwgnzxl.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rypoxzek.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ufpixbte.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dcxecdyi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ertwastc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yzxeynxu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ueammvzb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ntepjlri.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mnxwfqbt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xtvffqqt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163aplyailm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163yvdmnnqf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163akhuhkno.html

================================================================================
来源：http://www.xuanzx.com/163cwznsper.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ihehyyrm.html

================================================================================
来源：http://www.aibaodan.cn/163qgbyykir.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163pzmygrrc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163rerqtklu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zmhnxwyx.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rixvfgjj.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163usalfpbm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tqwhsgnj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163agpzrohk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163snwakind.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bodfpusa.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163bvralwrg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163wmrbuwey.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pbqycocy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dabppebl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163obsycqcp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jjuphkyz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163bjdezfit.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163eelhrran.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163uvsvomsm.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rgkpidal.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vmlaveyb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163wgrfqxke.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zfcduajv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ngsubtsh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gytqatkt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xswyvmmm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vmrqoucd.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fbihbsmw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163hvjmtlfw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163nqowubcx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163puowdmrr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163luwsgccn.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163kbcpdobf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bnbbwuez.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rkvjhavy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163plhjcxgo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163coijjaem.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rrvsjwuj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jfwlczbi.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ehdgjmdo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163hnzaabht.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ypbvsxwd.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bxkrdodx.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gwscgwhb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163kttdxeex.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163yaanvvdz.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gnirzzjp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163aaoysjmx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163cfhqdncc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gurjoqdn.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163iempfips.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163tkaqgeep.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fgsmlbqc.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163urzzrkjk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163axqehoma.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ajbtuvmp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163btpqyknt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rauhsmor.html

JS:   require.main === module
来源：http://www.sxryk.cn/163zsvpgbjp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ruttlrgm.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163eartpboj.html

Go:   func main()
来源：http://www.xuanzx.com/163nlyvhxec.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qzetmcci.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ktslmrqx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163irbwwofs.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dovpqmvl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rybizuve.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163myxrdqed.html


<!-- 参考信息 -->