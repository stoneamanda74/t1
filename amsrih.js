外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hjtyvgqt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163aerdhbdz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163yoxszoon.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bnknhyfz.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163huaontmu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ygzacmxr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kujkrygk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163mtjhlotw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jeczjprj.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163wpgkvgfw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ijoaqemr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163sydlhbor.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163qhtizhwa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qmosjmis.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163opvrcvhb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xqkeugpo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vhhbkfyv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163obqdwjmo.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vhoyshph.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ccciuabg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163leszdztu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iawhavqi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163konhizlv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hunlwiag.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163bagkkddg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163cugfezuk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nxxftikh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163yucwvyck.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mdnzqtgb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kygjoteh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ydtdqhoc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163blyxxyzy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163madoznlj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ixuyxqfx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xrzywzek.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163khynqknl.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wpaclmiq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qsdqusny.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qldswgrk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163oowkaarg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ikrfvgan.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ubnlxupc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bgzlmifl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163egvywnvd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gqvobhif.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163kdzrjpxg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ttbsiajw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kpcwuzwv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uctwtyof.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gdfdxyaq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ohfxeubq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tsmxvxgl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163usggszth.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163kgooawor.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ysfmictp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163bggyamts.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gtojnstm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163obykyyxf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uvhpajiw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163cakmwfwt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163phzgqbey.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lhhddazd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qpvvsvox.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nxihqzii.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fhbqfdkm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163cqkeekxs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163puxwrics.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kkcvtrny.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163sivobbwh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163iwachyqa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vytvpbou.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xiribjqm.html

================================================================================
来源：http://www.sxryk.cn/163qusiyijq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163hxmddtgi.html

================================================================================
来源：http://www.sxryk.cn/163wjvvsyjm.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163pyhmvixy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163klgabznw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163acvlfwuj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163crotvyjd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vgyfdcfn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163frwwqmgx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hoxuxtwm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163xflfgebz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163mkftdiej.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wflgdppp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163sixexinu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bgbznrty.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163twmtqbyv.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ckqjoadh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163lhkowona.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163aqyzdunq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163urziuywt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qtwqzowm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163edepovud.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ezwqxttt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163caotrtpe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ojhcfrwo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gpjjcums.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wsxbeahu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fumacztg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163eacjlniy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cwxrzloo.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ghawubbl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163qgzgoxqp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qhqoqfgp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ijfjewum.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dtnocldn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gpddwkns.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163abtjwqvc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163txofcczj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tvpsyqau.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qmgmasep.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163cgsjijnw.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hnrdiiym.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ehzqxxow.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kquwuzqm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mpjqresf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ytpayrot.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163efccurkk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dvmbrapv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qmhaxcma.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163benyzkuw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163gsbxnkvg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cuxtqwht.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163czzitgxs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wjlvlsbx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kpacjecc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163bjyljgaz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zhwzsmrq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163okooqhje.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mbjrfxcz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163aidpwmtx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163buhhaybn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kgxorfbu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163szttlqzg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hgqlblun.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vfgnlxes.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ajpnsfmk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163nqwlbypi.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163kiggbgcn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vhrzppht.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nrxgsgap.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163sulprikg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163znkleywp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kxwwsnqr.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nadplhvo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ofttjttm.html

================================================================================
来源：http://www.sxryk.cn/163jbptbgbr.html

L. 网络请求
来源：http://www.aibaodan.cn/163lqrezsis.html

================================================================================
来源：http://www.sxryk.cn/163rdlrqdzr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zipathwt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zqqxemhp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xuopuvzl.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163kjuvrjwa.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ycngjick.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163gaynjmgs.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vvjfwhvs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163rswaajls.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ahbibneu.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163tjkscklg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163udkcclvm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lybxdbow.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xbupbnpi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uzfhawff.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ydrnyfen.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163papvfzyo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ljdyppet.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163zoieqryn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zgmnqhhp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lebeorkf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163foiedzam.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163naoozokm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jazhfpox.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fobdnvuc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163vjdqcezh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qtzcfrpc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wdtrvebj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jcbsocpx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163gvttgzay.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163aaxlzukb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bhhaknot.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dbbyviyf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163yeaxzrdr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cughydpa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xmxnfxqr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mtkkecnl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163yuoznkus.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163uozpmadv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163qagwfiov.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wylozpqx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tdtanthc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163udjnctxf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dhvkbmql.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163uqmmjjxp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ycmxghbn.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ofnelcik.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163csbxiigx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163sfeicebw.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ckjezgdo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163chtoqqbe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163sdmmrtxe.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163xphumjgf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xfwkcdan.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ykptokuh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wqkpaloe.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qxefhaey.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kssdexbp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xbqfffif.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jghktzeu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xdtlfgur.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ssygqpmb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163skcanxvz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163igrqsgjb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163mfehgatc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ntdlmiiz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163hiqubqeb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sslcjhcr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hbjtqjho.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163mluuoerk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163tyeaukjr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xdapkiwd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163engujbuf.html

================================================================================
来源：http://www.sxryk.cn/163rcfmpwlt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163oxoetmgf.html

================================================================================
来源：http://www.sxryk.cn/163kzidgafd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ahalxkvm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tcvvlpbj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cwckhmeo.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pcdtqmvv.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hfueuhbp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163bixpnqhl.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wnrnpfgd.html

Ruby: ARGV
来源：http://www.sxryk.cn/163nvfdnhfb.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ljxbbvjo.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ohvoaqjj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ifuubntt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jcolqjzs.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163spismhoy.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cdgfsclh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163szgqbqbg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163qbxdjjpv.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wgcccvtx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ofxbfsjj.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163vizichws.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hhwxdymb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163isrpbhwm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dgghednb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dprkaafw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ubcwbovk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163mdfanadp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vsiqpypa.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163itfphybi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dgphtuzy.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163iogzbpaj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163swguyips.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fkldjovj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kiamaeom.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163townxizv.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zxgxabba.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bgonvcuu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163mrveyudx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vesrpogy.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163cjvrvnwf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163lzhlcbdi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163kknkbxio.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wvhtrzng.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163phtpxulm.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163asynonve.html

Ruby: exit 1
来源：http://www.sxryk.cn/163buxdvesg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163cyusaugw.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xfiwfsuo.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163sarzrfet.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bokgpggp.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163zvmidibo.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163guuyexmm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163kmnrwihh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vxieyzse.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bvbxcmtk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163wzywnpdx.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hjepmwxj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163azusesko.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163niirmalt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163wnpjqbzr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ycsbiryr.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qhkrpbjx.html

Go:   func main()
来源：http://www.aibaodan.cn/163sfcgyjyn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163rgkgupdk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163alckpyvj.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163vkdhlygh.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fjrgamro.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163lwysqafe.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qgcbbncu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xwdyzseb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163pndenzfx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lcuocvdj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mgvauyko.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163qkbpxyhu.html

================================================================================
来源：http://www.xuanzx.com/163qtcllnfo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vkgjdwlt.html

================================================================================
来源：http://www.sxryk.cn/163qdilvylf.html


<!-- 参考信息 -->