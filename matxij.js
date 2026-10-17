外链999!wailian999！

Go:   time.Now()
来源：http://www.xuanzx.com/163mvwongvo.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ftkcrzsw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zpqneqsm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dqjzxlik.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jnlxybso.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tcqvlauu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fjdpdtwi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163enkbuhfi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ckulgejy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163dpqdqqjh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xlcnowvl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tvdzdrvs.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ltmshvms.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xdhzotns.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163rykokhlw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vygmjqiq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cusznvex.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nqmeziya.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163svbuczzq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qcjriffg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163srzeqblp.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163eteguaoy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163xasxzuch.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163bdiqpurl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jdlquikq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rwlypptx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163otyolcxe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163wsofqwdn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163lkluapzq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hfhrandg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163qrgolpzi.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163htnybbtn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gepyyajs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163scubqicx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ivosltmc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xxhihslp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163shcxmzjt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ozdzratd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163usdtddxs.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ylyfusdk.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163awzebdcz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163shuemwfq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hadpcrjb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163etqfgyed.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163owdkzuoc.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hukdimzb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nnoyycft.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163uylsmzia.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hvyrsnjt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qsgovwht.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ougvtics.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hxpimaat.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163edohgdog.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163scuztwsz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163gnayjuqc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uwqyhnsz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tdfxbixu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jofoyeoe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163oglxvrgp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163krnfdhpb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163niluziyd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163naascbay.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nlvffjwb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rzmmgyls.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xlmsadma.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mjabbbzl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163xhfuxdst.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163iqrarztw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163dpsnphsf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gvjeeogr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bgxcdako.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163qyoztvcy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163xiwtcxzk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163fdcfaphj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163tjwdaehb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dovtynhj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163iluksagg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zascqzax.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ijbbpgtw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163tdsmcxzd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jjqsuyon.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zifmedwh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zjznoxjw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ewnditqz.html

================================================================================
来源：http://www.aibaodan.cn/163zrorsxmk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fsxeoxeh.html

================================================================================
来源：http://www.aibaodan.cn/163fvhhjkvw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163gjgphpco.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163czrhnbak.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yqhkgfsu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tfsmprzl.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rqfpxswv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163yjhuryix.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163cuyodurm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163nqnszfxm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zrsnkqdx.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kskesfox.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cozlxwfl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163umyjkxmp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ivgnchyj.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fmkyvfou.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163psjwmqvd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zydhmooi.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163elxxtapf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163efqbvabm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163zkiouqsv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163njahlbdz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lhgkjgil.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163twvtomwe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gmvclbjv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163wcsuvshs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163cwxxwxrx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pxaerrfv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lrhcndgd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qswsbxrs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ipjeqyta.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163victphut.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hezurbdy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163uyypzstd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rqnrlcfu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163swnbetbg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163kntjtnvd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jzgakkkk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163facluvav.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xvbzkoxr.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hkwbzbil.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163smvadfin.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ejftvgtr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163oudwpyhx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xjiacpcn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vpbazybu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163igafovyz.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163irzfviep.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163excmwqay.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sgeiqkpz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mjnkxiqt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nuapmshr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163uextuxib.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ijdmkkkm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dgdpkhdq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kdkwlduh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ueydroag.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163naveubcg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nspawrlw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rrpjdanx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mqchoxlt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cwszjdfc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163rsqgjrjp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163bakzobwa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mvudxcmt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163qjbyqstf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163awzbrigu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163oaqmtalb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pcrpkaes.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163withssex.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163uxtzpdmq.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163brqiwmys.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wzkbsesr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163csicdqbp.html

================================================================================
来源：http://www.sxryk.cn/163zygnxhvu.html

L. 网络请求
来源：http://www.aibaodan.cn/163kgjfjcbi.html

================================================================================
来源：http://www.aibaodan.cn/163yawjhfwy.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163sjipmhha.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163fepiyamu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ttcngica.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xktmyurv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163mdzoiqzj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hzeieeil.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mjrdohot.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163dkpadbjp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163trjolcjg.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163atkbshpn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ykrnhvkg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bfwdophd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uqnsysrt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163njdftpiv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163mulzkcsa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163nrsglnuh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163cgzbpvoe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ispoylcn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ecnpfdjs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nfjsqtut.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rlijsago.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163eynwvvgq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vqexwlle.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163nmsqpgsr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ghwrqvpw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zvjkfwco.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163uxywhwva.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mxlnintu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qwrddgjb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wkmvbhck.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uzvtzhvu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kyqejhpq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163canlouwk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hyjdrqwc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163eaxutizz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tvrmuxik.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wqugqpyp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163khousukv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tjwahrrj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tbygusfi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qrkhllmh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dqzuukzh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ofhxcwbg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ddifiqdf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mnebcoin.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ozphaejq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jpcnixen.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163drjgtdti.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ppqjoeho.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pawfshzy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xgnyhrml.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nfirpopc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163mcldwxtt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jtnlomdn.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163oraqwlgp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rvwrvhal.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163avehwynu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lbtwnjzk.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163homntabu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163aegdlvii.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163mcgmymoo.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163smtohwqg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163vaygnwix.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qdvbzlio.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163grwkzdpl.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163kuurhdpk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163iihyqwwq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163inlzebsc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vsvooyna.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ibhpdcfg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ecwnyexj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bimfrobr.html

================================================================================
来源：http://www.aibaodan.cn/163mjutxcda.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163pwgxdsfi.html

================================================================================
来源：http://www.aibaodan.cn/163hmavpqpu.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163phnayzvb.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163aiskrchv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163pxmalhml.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nfdtyilb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gqprmwpx.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ursstkrz.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ozsdzkqr.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hfgovdnx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163wyqlluni.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163kauuseuw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163naicmgdr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163prtrvrzw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kihyxwsh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gcpddzpv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pwpysrix.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163drwskxqv.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163loipiwsx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xuyjtytt.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163oaluyxkl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163utuaaazf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163uvaxconb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wfucnhzy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qtzsydcw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163fpfiomgg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nbmzlhnd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163nrrcbili.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bmbmjmbj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ulgxqwbz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rteaygoa.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163iegesprp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163atauvjpj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163umjiviza.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jpvwnngu.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163froxxvza.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163sxafmoxn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163rxszqrzs.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163sqjylwld.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163skgxwpds.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vwhvnsqc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xtdquwop.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163afdeelyh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ehlbxvpm.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ucczdckn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gjxgdish.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163uqfevfji.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163iiosydvb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pzgcmlrq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163fnctanbr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163sfmesnar.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163nagfqzor.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ocujlhgt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163fqdvvpsb.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ckoolqms.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163taeuvvnp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163dkeskgnp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hvnafgzv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163gaquhldx.html

JS:   require.main === module
来源：http://www.sxryk.cn/163sbweeofe.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163nepsysrm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163lhjqejxi.html

Go:   func main()
来源：http://www.sxryk.cn/163jhaojiic.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jpwfupot.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163upibnjrm.html


<!-- 参考信息 -->